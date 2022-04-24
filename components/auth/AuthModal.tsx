import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ModalHeader,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthLoading } from '../../hooks/useAuthLoading';
import LoadingSpinner from './LoadingSpinner';
import SingIn from './SingIn';
import SingUp from './SingUp';

const AuthModal: React.FC<{ onClose: () => void; isOpen: boolean }> = ({
  isOpen,
  onClose,
}) => {
  const loading = useAuthLoading();
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="brand">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          bg="brand"
          color="darkGray"
          borderRadius={0}
          _hover={{ bg: '#d9bc86' }}
        />
        <ModalHeader />
        <ModalBody>
          {loading && <LoadingSpinner />}
          <Tabs isFitted>
            <TabList>
              <Tab _selected={{ color: 'brand', borderColor: 'brand' }}>
                Sing in
              </Tab>
              <Tab _selected={{ color: 'brand', borderColor: 'brand' }}>
                Sing up
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SingIn />
              </TabPanel>
              <TabPanel>
                <SingUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
