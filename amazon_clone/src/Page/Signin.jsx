
import axios from "axios"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link as RouterLink} from "react-router-dom"

  const getData = (data = {})=>{
        return axios({
            method: "POST",
            url:` http://localhost:8080/Database`,
            data : {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
            }
        })
    }

  export default function Signin() {
    const [showPassword , setShowPassword] = useState(false)
    const [formState , setFormState] = useState({
      first_name : "",
      last_name : "",
      email : "",
      password : ""
  })

    const handelChange = (e)=>{
      const {name , value} = e.target
      
      setFormState({
        ...formState,
        [name] : value
    })
    }

    const handelSubmit = (e)=>{
      e.preventDefault()
      localStorage.setItem("formstate",JSON.stringify(formState))
      getData(formState)
      alert("Signin Successfull")
    }
    const {first_name , last_name , email , password} = formState
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={handelChange} value={first_name} name="first_name" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" onChange={handelChange} value={last_name} name="last_name" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handelChange} value={email} name="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={handelChange} value={password} name="password" type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                   
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
              <RouterLink to="/login">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handelSubmit}
                  >
                  Sign up
                </Button>
              </RouterLink>
              </Stack>
              <Stack pt={6}>
                  <RouterLink to="/login" >
                    <Text align={'center'}>
                    Already a user? <Link color={'blue.400'}>Login</Link>
                    </Text>
                  </RouterLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }