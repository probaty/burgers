import {
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { error } from 'console';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setUser } from '../../store/slices/userSlice';
import ButtonBrand from '../ButtonBrand';
import ErrorBox from './ErrorBox';

interface FormInput {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormInput>();

  const dispatch = useDispatch();
  // const { authGoogleUser, authEmailUser } = useActions();
  // const { error } = useTypedSelector((state) => state.user);
  const { isAuth, token } = useAuth();
  console.log(token);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    authUserEmail(data.email, data.password);
  };

  const authUserEmail = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            isAnonymous: user.isAnonymous,
            token: await user.getIdToken(),
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            isAnonymous: user.isAnonymous,
            token: null,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={6} pt="6">
        {/* {error && <ErrorBox>{error}</ErrorBox>} */}
        <Input
          type="email"
          variant="flushed"
          placeholder="Email"
          focusBorderColor="brand"
          {...register('email', { required: true })}
        />
        <Input
          type="password"
          variant="flushed"
          placeholder="Password"
          focusBorderColor="brand"
          {...register('password', { required: true })}
        />
        <ButtonBrand onClick={() => {}} type="submit">
          Sing in
        </ButtonBrand>
        <HStack w="full">
          <Divider />
          <Text>OR</Text>
          <Divider />
        </HStack>
        <ButtonBrand onClick={() => authWithGoogle()}>
          <Icon as={AiOutlineGoogle} w="6" h="6" mr={3} />
          Sing in with Google
        </ButtonBrand>
      </VStack>
    </form>
  );
};

export default SingIn;
