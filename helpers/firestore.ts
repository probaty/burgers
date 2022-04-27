import {
  collection,
  getFirestore,
  query,
  where,
  limit,
  getDocs,
} from 'firebase/firestore';
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

export { getSaleProducts, getProducts };
