

import axios from "axios"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { MdLocalShipping } from 'react-icons/md';
function SingleProductPage(){
    const [data , setData] = useState({})
    const [loading , setLoading] = useState(false)
    const [err , setErr] = useState(false)
    const { id } = useParams();
    const getData = ()=>{
        setLoading(true)
        axios
        .get(`http://localhost:8080/Products/${id}`)
        .then((res)=>{
            setData(res.data)
            console.log(res)
            setLoading(false)
        }).catch(()=>{
            setLoading(false)
            setErr(true)
        })
    }
    useEffect(()=>{
        getData()
    },[id])
    if(loading){
        return <h1>Loading...</h1>
    }
    if(err){
        return <h1>Something Went Wrong</h1>
    }
    const {image , category , title , rating , price , description} = data
    console.log(data)
    return(
        <Container maxW={'7xl'}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={image}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  {title}
                </Heading>
                <Text
                  color='gray.900'
                  fontWeight={300}
                  fontSize={'2xl'}>
                  Rs: {price}
                </Text>
              </Box>
    
                <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                    borderColor='gray.200'
                  />
                }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color='gray.500'
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    {category}
                  </Text>
                  <Text fontSize={'lg'}>
                    {description}
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color='yellow.500'
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Features
                  </Text>
    
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Chronograph</ListItem>
                      <ListItem>Master Chronometer Certified</ListItem>{' '}
                      <ListItem>Tachymeter</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Anti‑magnetic</ListItem>
                      <ListItem>Chronometer</ListItem>
                      <ListItem>Small seconds</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                
            </Stack>
    
              <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg='gray.900'
                color='white'
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}>
                Add to cart
              </Button>
    
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
                {/* <MdLocalShipping /> */}
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      );
}

export default SingleProductPage