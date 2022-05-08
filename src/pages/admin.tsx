import { Checkbox, Input, Select, useBoolean, VStack } from '@chakra-ui/react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonBrand from '../components/ButtonBrand';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { NextPage } from 'next';

interface FormValues {
  title: string;
  compound: string;
  price: number;
  sale: boolean;
  category: 'burger' | 'snack' | 'main';
}

const Admin: NextPage = ({}) => {
  const refInput = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [loading, setLoading] = useBoolean(false);
  const storage = getStorage();
  const db = getFirestore();

  const onSubmit: SubmitHandler<FormValues> = async ({
    compound,
    price,
    sale,
    title,
    category,
  }) => {
    if (refInput.current?.files?.length) {
      setLoading.on;
      console.log('start');

      const file = refInput.current.files[0];
      const storageRef = ref(storage, `/images/${file.name}`);
      const result = await uploadBytes(storageRef, file);
      const path = await getDownloadURL(result.ref);
      const itemData = {
        title,
        price: Number(price),
        sale,
        category,
        compound,
        rating: 0,
        imageUrl: path,
      };
      const docRef = await addDoc(collection(db, 'products'), itemData);
      console.log('complete', docRef.id);
      reset();
      setLoading.off;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Input placeholder="title" {...register('title', { required: true })} />
        <Input
          placeholder="compound"
          {...register('compound', { required: true })}
        />
        <Input
          placeholder="price"
          type="number"
          {...register('price', { required: true })}
        />
        <Select {...register('category', { required: true })}>
          <option value="burger">burger</option>
          <option value="snack">snack</option>
          <option value="main">main</option>
        </Select>
        <label>
          <Checkbox
            placeholder="sale"
            type={'checkbox'}
            {...register('sale')}
          />
          sale?
        </label>
        <Input
          accept=".png"
          type={'file'}
          ref={refInput}
          title="qweqwe"
          name="file"
        />
        <ButtonBrand disabled={loading} type="submit">
          lol
        </ButtonBrand>
      </VStack>
    </form>
  );
};

export default Admin;
