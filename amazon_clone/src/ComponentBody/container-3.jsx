import { Box, Stack , SimpleGrid , Grid , Heading , GridItem , Image , Flex , Text , Link , Button , Center} from "@chakra-ui/react"
import { authProvider } from "../Authentication/auth"
import { useContext } from "react"
function Container3(){
    const { isAuth , Logout} = useContext(authProvider)
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
      const handelLogout = ()=>{
        Logout()
        alert("Logged Out")
      }
    return (
            <Box 
                w="100%"
            >
                <Flex spacing="15px"  pl="2vw">
                    <SimpleGrid columns="4" gap="4">
                        <Box sx={outerBoxStyles}  >
                            <Heading as="h5" fontSize="18px"  >Starting ₹5,999 | TVs for every budget</Heading>
                            <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/JanART/PC_CategoryCard_758X608_3._SY304_CB615774930_.jpg" height="280px" width="22vw" pt="2vh"  />
                            <Link pos="relative" top="5vh" right="8vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                        </Box>
                        <Box sx={outerBoxStyles}  >
                            <Heading as="h5" fontSize="18px"  >Starting ₹79 | Home, kitchen & more</Heading>
                            <Box sx={innerBoxStyles} pt="10px" >
                                <Grid
                                    gridTemplateColumns="repeat(2,1fr)"
                                    gridTemplateRows="repeat(2,1fr)"
                                    gap={2}
                                >
                                    <GridItem>
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_4._SY116_CB617449707_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Up to 80% off | Home & decor</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_2._SY116_CB617449707_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Up to 70% off | Cookware & Dining</Text>
                                    </GridItem>
                                    <GridItem pos="relative" bottom="3vh" >
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_5._SY116_CB617449707_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Lawn & Garden</Text>
                                    </GridItem>
                                    <GridItem pos="relative" bottom="3vh" >
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_7._SY116_CB617449707_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Up to 70% | Home Improvement</Text>
                                    </GridItem>
                                    <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                                </Grid>
                            </Box>
                        </Box>
                        <Box sx={outerBoxStyles}  >
                            <Heading as="h5" fontSize="18px"  >Shop by brand</Heading>
                            <Box sx={innerBoxStyles} pt="10px" >
                                <Grid
                                    gridTemplateColumns="repeat(2,1fr)"
                                    gridTemplateRows="repeat(2,1fr)"
                                    gap={2}
                                >
                                    <GridItem>
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_5._SY116_CB615718173_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Up to 60% off | Home & kitchen products</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_6._SY116_CB615718173_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Up to 65% off | Speakers & more</Text>
                                    </GridItem>
                                    <GridItem pos="relative" bottom="3vh" >
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_7._SY116_CB615718173_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Under 599 | clothing , shoes & more</Text>
                                    </GridItem>
                                    <GridItem pos="relative" bottom="3vh" >
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/JanART23/MSO/Tanya_MSOs/D68361814_INWLD_JanArt_PC_QuadCard_186x116_8._SY116_CB615718173_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Up to 70% off | Daily Essentials</Text>
                                    </GridItem>
                                    <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                                </Grid>
                            </Box>
                        </Box>
                        <Box sx={outerBoxStyles}  >
                            <Heading as="h5" fontSize="18px"  >Starting ₹199 | Women's fashion</Heading>
                            <Box sx={innerBoxStyles} pt="10px" >
                                <Grid
                                    gridTemplateColumns="repeat(2,1fr)"
                                    gridTemplateRows="repeat(2,1fr)"
                                    gap={2}
                                >
                                    <GridItem>
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-clothing-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Air Conditioner</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-hand-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Refrigerator</Text>
                                    </GridItem>
                                    <GridItem pos="relative" bottom="3vh" >
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-beauty-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Microwave</Text>
                                    </GridItem>
                                    <GridItem pos="relative" bottom="3vh" >
                                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/W-jewel-186-116._SY116_CB615519226_.jpg" h="100px"  />
                                        <Text fontSize="12px" fontWeight="normal" >Washing Macines</Text>
                                    </GridItem>
                                    <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                                </Grid>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Flex>
                {
                    isAuth===true ? 
                    <Box
                    w="100%"
                    >
                    <Button width={"10vw"} height={"6vh"} pos="relative" top={"4vh"} colorScheme={"yellow"} onClick={handelLogout} >Logout</Button>
                    </Box> : ""
                }
            </Box>
    )
}

export default Container3