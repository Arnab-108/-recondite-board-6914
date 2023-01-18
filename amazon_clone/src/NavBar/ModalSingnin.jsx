import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
  function ModalSignin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme="blackAlpha">
            <Text fontSize="12px"  fontWeight="semibold" color="gray.300" pos="relative" left="5px" bottom="5px" >Hello,sign in</Text>
            <Text fontSize="14px" color="white" fontWeight="semibold" style={{fontFamily:"Montserrat , sans-serif;"}} pos="relative" top="8px" right="4vw"  >  Account & Lists <ChevronDownIcon color="white" /> </Text>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalSignin