import image1 from "./image1.jpg"
import { Box, Stack , SimpleGrid , Grid , Heading , GridItem , Image , Flex , Text , Link , Button , Center} from "@chakra-ui/react"
function Container1(){
    const outerBoxStyles = {
        // boxSize: '380px',
        height:"430px",
        width:"23vw",
        p: '5',
        background:"white",
      }
    
      const innerBoxStyles = {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        color: 'black',
        // textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '15pxpx',
      }
    return (
        <Box 
            bgImage="url('https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg')"
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            h="100vh"
            w="100%"
         >
            <Flex spacing="15px" pt="45vh" pl="2vw">
                <SimpleGrid columns="3" gap="4">
                    <Box sx={outerBoxStyles}  >
                        <Heading as="h5" fontSize="18px"  >Most searched smartphone series on Amazon</Heading>
                        <Box sx={innerBoxStyles} pt="10px" >
                            <Grid
                                gridTemplateColumns="repeat(2,1fr)"
                                gridTemplateRows="repeat(2,1fr)"
                                gap={2}
                            >
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_2._SY116_CB615734550_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_3._SY116_CB615734550_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_4._SY116_CB615734550_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={outerBoxStyles}  >
                        <Heading as="h5" fontSize="18px"  >Starting ₹199 | Men's fashion</Heading>
                        <Box sx={innerBoxStyles} pt="10px" >
                            <Grid
                                gridTemplateColumns="repeat(2,1fr)"
                                gridTemplateRows="repeat(2,1fr)"
                                gap={2}
                            >
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Clothing</Text>
                                </GridItem>
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-shoes-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Footwear</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-watch-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Watches</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-luggage-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Bags & Luggages</Text>
                                </GridItem>
                                <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={outerBoxStyles}  >
                        <Heading as="h5" fontSize="18px"  >Latest and upcoming launches on Amazon</Heading>
                        <Box sx={innerBoxStyles} pt="10px" >
                            <Grid
                                gridTemplateColumns="repeat(2,1fr)"
                                gridTemplateRows="repeat(2,1fr)"
                                gap={2}
                            >
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116._SY116_CB615741130_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_2._SY116_CB615741130_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_3._SY116_CB615741130_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_4._SY116_CB615741130_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Redmi Series: Starting</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="36px" > Rs.5,999</Text>
                                </GridItem>
                                <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                            </Grid>
                        </Box>
                    </Box>
                </SimpleGrid>
                <Stack direction="column">
                    <Box 
                    height="130px"
                    width="23vw"
                    p='5'
                    background="white"
                    ml="1vw"
                    >
                     <Heading as="h5" fontSize="18px"  >Sign in for your best experience</Heading>   
                    <Center mt="2vh">
                        <Button colorScheme="yellow" width="18vw" height="5vh" >Signin securely</Button>
                    </Center>
                    </Box>
                    <Image src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" height="280px" width="22vw" pl="2vw" pt="2vh" />
                </Stack>
            </Flex>
            
        </Box>
    )
}

export default Container1