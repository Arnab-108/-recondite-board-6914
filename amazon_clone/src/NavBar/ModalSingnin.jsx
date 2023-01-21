import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Divider,
    Stack,
    Heading,
    Link,
    Flex,
    Spacer
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import { authProvider } from '../Authentication/auth'
import { useContext } from "react";
  function ModalSignin() {
    const data = JSON.parse(localStorage.getItem("formstate"))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isAuth} = useContext(authProvider)
    return (
      <>
        <Button onClick={onOpen} colorScheme="blackAlpha">
            <Text fontSize="12px"  fontWeight="semibold" color="gray.300" pos="relative" left="5px" bottom="5px" >Hello,{isAuth===true ? data.first_name : "Sign in"}</Text>
            <Text fontSize="14px" color="white" fontWeight="semibold" style={{fontFamily:"Montserrat , sans-serif;"}} pos="relative" top="8px" right="4vw"  >  Account & Lists <ChevronDownIcon color="white" /> </Text>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <RouterLink to="/signin" >
                <Button colorScheme='yellow' mr={3} width="8vw" h="4vh" pos="relative" left="10vw" top="1vh" onClick={onClose} >
                  Signin
                </Button>
            </RouterLink>
            <ModalCloseButton />
            <ModalBody mt="2vh" >
            <Divider />
          <Flex >
            <Stack color="black" align={'flex-start'}>
              <Heading as="h3" fontSize="16px" >Your List</Heading>
              <Link href={'#'}>Create a wishlist</Link>
              <Link href={'#'}>Wish from any website</Link>
              <Link href={'#'}>Baby wishlist</Link>
              <Link href={'#'}>Create your own style</Link>
              <Link href={'#'}>Explore showroom</Link>
            </Stack>
            <Spacer />
            <Stack color="black" align={'flex-start'}>
              <Heading as="h3" fontSize="16px" >Your Account</Heading>
              <Link href={'#'}>Your accounts</Link>
              <Link href={'#'}>Your orders</Link>
              <Link href={'#'}>Your Wish List</Link>
              <Link href={'#'}>Your Recomendations</Link>
              <Link href={'#'}>Your Prime Membership</Link>
              <Link href={'#'}>Your Prime Vedio</Link>
              <Link href={'#'}>Memberships & Subscriptions</Link>
            </Stack>
          </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalSignin