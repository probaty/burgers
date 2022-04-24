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
import React from 'react';
import SingIn from './SingIn';
import SingUp from './SingUp';

const AuthModal: React.FC<{ onClose: () => void; isOpen: boolean }> = ({
  isOpen,
  onClose,
}) => {
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
