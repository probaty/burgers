import {
  Divider,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useBoolean,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { authWithGoogle, registerUserEmail } from '../../helpers';
import { useAuthLoadToggle } from '../../hooks/useAuthLoadToggle';
import ButtonBrand from '../ButtonBrand';
import ErrorBox from './ErrorBox';

interface FormInput {
  email: string;
  password: string;
  passwordConf: string;
}

const SingUp = () => {
  const { register, handleSubmit, watch } = useForm<FormInput>();
  const [focus, setFocus] = useBoolean();
  const [passwordConfirm, setPasswordConfirm] = useBoolean();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [googleError, setGoogleError] = useState<string | null>(null);
  const loading = useAuthLoadToggle();

  useEffect(() => {
    if (
      watch('password') === watch('passwordConf') &&
      watch('password') !== ''
    ) {
      setPasswordConfirm.on();
    } else {
      setPasswordConfirm.off();
    }
  }, [watch('passwordConf'), watch('password')]);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    if (data.password !== data.passwordConf) return;
    loading.on();
    registerUserEmail(data.email, data.password, setEmailError, loading.off);
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
          {...register('password', { required: true, minLength: 6 })}
        />
        <InputGroup>
          <Input
            type="password"
            variant="flushed"
            placeholder="Confirm a password"
            focusBorderColor="brand"
            onFocus={setFocus.on}
            onBlurCapture={setFocus.off}
            {...register('passwordConf', { required: true })}
          />
          <InputRightAddon
            bg="transparent"
            borderRadius={0}
            borderRightColor="transparent"
            borderTopColor="transparent"
            borderBottomColor={focus ? 'brand' : undefined}
          >
            {passwordConfirm ? (
              <Icon as={BiCheck} w="6" h="6" />
            ) : (
              <Icon as={MdOutlineClose} w="6" h="6" />
            )}
          </InputRightAddon>
        </InputGroup>
        <ButtonBrand disabled={!passwordConfirm} type="submit">
          Sing up
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
          Sing up with Google
        </ButtonBrand>
      </VStack>
    </form>
  );
};

export default SingUp;
