import {
  collection,
  getFirestore,
  query,
  where,
  limit,
  getDocs,
  addDoc,
  Timestamp,
  orderBy,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore';
import { OrderProps, OrderPropsWithId } from '../types/order';
import { Product } from '../types/product';

const getSaleProducts = async (limitProd = 4) => {
  const products: Product[] = [];
  const db = getFirestore();
  const productsRef = collection(db, 'products');
  const q = query(productsRef, where('sale', '==', true), limit(limitProd));
  const productsSnapshot = await getDocs(q);
  productsSnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id } as Product);
  });

  return products;
};

const getProducts = async (limitProd = 8) => {
  const products: Product[] = [];
  const db = getFirestore();
  const productsRef = collection(db, 'products');
  const q = query(productsRef, limit(limitProd));
  const productsSnapshot = await getDocs(q);
  productsSnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id } as Product);
  });

  return products;
};

const createCategoryQuery = (
  productsRef: CollectionReference<DocumentData>,
  categories: string[],
  price: number[]
) => {
  if (categories.length === 0 && price.length === 0) {
    return query(productsRef);
  }
  if (categories.length === 0) {
    return query(
      productsRef,
      where('price', '>=', price[0]),
      where('price', '<=', price[1])
    );
  }
  if (price.length === 0) {
    return query(productsRef, where('category', 'in', categories));
  }
  return query(
    productsRef,
    where('category', 'in', categories),
    where('price', '>=', price[0]),
    where('price', '<=', price[1])
  );
};

const getQueryProducts = async (categories: string[], price: number[]) => {
  const products: Product[] = [];
  const db = getFirestore();
  const productsRef = collection(db, 'products');

  const q = createCategoryQuery(productsRef, categories, price);

  const productsSnapshot = await getDocs(q);
  productsSnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id } as Product);
  });

  return products;
};

const storeOrder = async (order: OrderProps) => {
  const db = getFirestore();
  const ordersRef = collection(db, 'orders');
  addDoc(ordersRef, { createdTime: Timestamp.now(), ...order });
};

const getOrderHistory = async (userId: string) => {
  const orders: OrderPropsWithId[] = [];
  const db = getFirestore();
  const ordersRef = collection(db, 'orders');
  const q = query(
    ordersRef,
    where('userId', '==', userId),
    orderBy('createdTime', 'desc')
  );
  const ordersSnapshot = await getDocs(q);
  ordersSnapshot.forEach((doc) => {
    orders.push({ ...doc.data(), id: doc.id } as OrderPropsWithId);
  });

  return orders;
};

export {
  getSaleProducts,
  getProducts,
  storeOrder,
  getOrderHistory,
  getQueryProducts,
};
