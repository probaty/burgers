import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useBoolean,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import ButtonBrand from '../ButtonBrand';

const SingUp = () => {
  const { register, handleSubmit, watch } = useForm();
  const [focus, setFocus] = useBoolean();
  const [passwordConfirm, setPasswordConfirm] = useBoolean();

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

  return (
    <form>
      <VStack spacing={6} pt="6">
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
        <ButtonBrand onClick={() => {}}>Sing up</ButtonBrand>
        <HStack w="full">
          <Divider />
          <Text>OR</Text>
          <Divider />
        </HStack>
        <ButtonBrand onClick={() => {}}>
          <Icon as={AiOutlineGoogle} w="6" h="6" mr={3} />
          Sing up with Google
        </ButtonBrand>
      </VStack>
    </form>
  );
};

export default SingUp;
