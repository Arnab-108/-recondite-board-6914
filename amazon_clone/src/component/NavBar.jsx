import { Flex , Spacer , Button , ButtonGroup , Input  , Image , Text , Box, border} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import MyBasket from './MyBasket.png';
function NavBar(){
 return (
    <Flex minWidth='max-content' alignItems='center' gap='2' bgColor="black" h="15vh" w="100%" >
    <ButtonGroup gap='2'  >
        <Box h="9vh" w="12vw" _hover={{borderColor:"white" , borderWidth:"1px"}} >
        <Avatar
        height="8vh"
        width="12vw"
        src={MyBasket}
        alt='Dan Abramov'
  />
  {/* <Text color="white"> Logo </Text> */}
        </Box>
        <Button colorScheme='whiteAlpha' variant='outline'>
            <Text color="white" >Hello</Text>
        </Button>
    </ButtonGroup>
    <Input type="text" bg="white" ></Input>
    </Flex>
 )
}
export default NavBar