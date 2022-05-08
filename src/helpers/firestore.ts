import {
  collection,
  getFirestore,
  query,
  where,
  limit,
  getDocs,
  addDoc,
  Timestamp,
} from 'firebase/firestore';
import { OrderProps } from '../types/order';
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

const storeOrder = async (order: OrderProps) => {
  const db = getFirestore();
  const ordersRef = collection(db, 'orders');
  addDoc(ordersRef, { createdTime: Timestamp.now(), ...order });
};

export { getSaleProducts, getProducts, storeOrder };
