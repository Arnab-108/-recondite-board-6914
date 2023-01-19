import "./NavBar.css"
import { Flex , Spacer , Button , ButtonGroup , Input , InputGroup , InputRightElement , InputLeftElement , Text , Box, border , Center ,Stack , IconButton} from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import ModalSignin from "./ModalSingnin";
import { Avatar } from '@chakra-ui/react'
import {AddIcon , SearchIcon , ChevronDownIcon} from '@chakra-ui/icons'
import MyBasket from './MyBasket.png';
import {Link as NavLink} from "react-router-dom"
// const handelSignin =()=>{
//     return (
//         <ModalSignin />
//     )
// }
 
function NavBar(){
 return (
    <>
        <Flex minWidth='max-content' alignItems='center' gap='2' bgColor="black" h="9vh" w="100%" >
            
            <Center h="8vh" w="12vw" ml="1vw" _hover={{borderColor:"white" , borderWidth:"1px"}} >
            <NavLink to="/">
                <Avatar
                height="7vh"
                width="11vw"
                src={MyBasket}
                alt='Dan Abramov'
                />
            </NavLink>
            </Center>
            <Box h="7vh" w="11vw"  _hover={{borderColor:"white" , borderWidth:"1px"}}>
                <Text mt="5px" fontSize="12px" fontWeight="semibold" color="gray.300" pos="relative" right="3vw" >Hello</Text>
                <Text fontSize="14px" color="white" fontWeight="semibold" style={{fontFamily:" Montserrat, sans-serif;"}} pos="relative" bottom="6px" right="6px"  > <AddIcon fontWeight="light" color="white"  boxSize="11px" />  Setect your address</Text>
            </Box>
            <Stack direction="row" >
            {/* <Input type="text" bg="white" size="md" width="40vw" />
            <IconButton colorScheme="yellow" aria-label='Search database' icon={<SearchIcon />} pos="relative" right="6px" /> */}
            <InputGroup size='md'>
                <InputLeftElement >
                <Menu  >
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon pl="7px" />}>
                        <Text fontSize="13px" >All</Text>
                    </MenuButton>
                    <MenuList pos="relative" zIndex="1"  >
                        <MenuItem>All categories</MenuItem>
                        <MenuItem>Alexa Skills</MenuItem>
                        <MenuItem>Amazon Devices</MenuItem>
                        <MenuItem>Amazon Fashion</MenuItem>
                        <MenuItem>Amazon Fresh</MenuItem>
                        <MenuItem>Amazon Pharmacy</MenuItem>
                    </MenuList>
                </Menu>
                </InputLeftElement>
                <Input type="text" bg="white" size="md" width="50vw" />
                <InputRightElement >
                    <IconButton colorScheme="yellow" aria-label='Search database' icon={<SearchIcon />} />
                </InputRightElement>
            </InputGroup>
            </Stack>

            <Box h="7vh" w="10vw"  _hover={{borderColor:"white" , borderWidth:"1px"}}  >
                <ModalSignin />   
            </Box>
            <Box h="7vh" w="6vw"  _hover={{borderColor:"white" , borderWidth:"1px"}} cursor="pointer" >
                <Text mt="5px" fontSize="12px" fontWeight="semibold" color="gray.300" pos="relative" right="1vw" >Returns</Text>
                <Text fontSize="14px" color="white" fontWeight="semibold" style={{fontFamily:" Montserrat, sans-serif"}} pos="relative" bottom="6px" right="6px"  >  &Orders</Text>
            </Box>
            <Box h="7vh" w="6vw"  _hover={{borderColor:"white" , borderWidth:"1px"}} cursor="pointer" >
            <NavLink to="/cart" >
                <Text fontSize="14px" color="white" mt="10px" fontWeight="semibold" >Cart</Text>
            </NavLink> 
            </Box>
        </Flex>
    </>
 )
}
export default NavBar