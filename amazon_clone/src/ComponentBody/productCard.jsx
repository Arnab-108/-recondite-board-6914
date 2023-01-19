import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Link
  } from '@chakra-ui/react';
  
  import { Link as RouterLink } from 'react-router-dom';
 
  export default function ProductCard({id , title , category , image , price , rating }) {
    return (
      <Center py={12}>
        <RouterLink to={`/${id}`} >
        <Box
          role={'group'}
          p={14}
          maxW={'260px'}
          maxH={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={'150px'}
              width={'150px'}
              objectFit={'cover'}
              src={image}
              pt="3vh"
            />
          </Box>
          <Stack pt={8} align={'center'}>
            <Heading fontSize={'sm'} fontFamily={'body'} fontWeight={500} pos="relative" bottom="8vh" >
              {title}
            </Heading>
            <Stack align={'center'}>
            </Stack>
          </Stack>
        </Box>
        </RouterLink>
      </Center>
    );
  }