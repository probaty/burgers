import { Divider, HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineGoogle } from 'react-icons/ai';
import { authUserEmail, authWithGoogle } from '../../helpers';
import { useAuthLoadToggle } from '../../hooks/useAuthLoadToggle';
import ButtonBrand from '../ButtonBrand';
import ErrorBox from './ErrorBox';

interface FormInput {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [googleError, setGoogleError] = useState<string | null>(null);
  const loading = useAuthLoadToggle();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    loading.on();
    authUserEmail(data.email, data.password, setEmailError, loading.off);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={6} pt="6">
        {(emailError || googleError) && (
          <ErrorBox>{emailError || googleError}</ErrorBox>
        )}
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
        <ButtonBrand
          onClick={() => {
            loading.on();
            authWithGoogle(setGoogleError, loading.off);
          }}
        >
          <Icon as={AiOutlineGoogle} w="6" h="6" mr={3} />
          Sing in with Google
        </ButtonBrand>
      </VStack>
    </form>
  );
};

export default SingIn;
