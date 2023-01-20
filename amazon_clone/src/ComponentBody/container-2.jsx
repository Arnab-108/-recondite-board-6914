import { Box, Stack , SimpleGrid , Grid , Heading , GridItem , Image , Flex , Text , Link , Button , Center} from "@chakra-ui/react"
function Container2(){
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
            // h="100vh"
            w="100%"
         >
            <Flex spacing="15px" pt="15vh" pl="2vw">
                <SimpleGrid columns="4" gap="4">
                    <Box sx={outerBoxStyles}  >
                        <Heading as="h5" fontSize="18px">Starting ₹49 | Books, toys & more</Heading>
                        <Box sx={innerBoxStyles} pt="10px" >
                            <Grid
                                gridTemplateColumns="repeat(2,1fr)"
                                gridTemplateRows="repeat(2,1fr)"
                                gap={2}
                            >
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/2L-coupons-PC-1x._SY116_CB615773334_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Books starting at Rs: 49</Text>
                                </GridItem>
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/Buy-2-get-5-off-PC-1x._SY116_CB615773334_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Toys starting at Rs: 199</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/No-cost-emi-PC-1x._SY116_CB615773334_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Trimmers starting at Rs: 349</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/Janart/PC-QC-Jan-art-2023_VG_1x._SY116_CB615983641_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Gamming accessories</Text>
                                    <Text fontSize="12px" fontWeight="normal" pos="relative" right="11px" > Starting at Rs: 199</Text>
                                </GridItem>
                                <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                            </Grid>
                        </Box>
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
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_6._SY116_CB617449707_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Up to 70% off | Cookware & Dining</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/OHL/JanART/Hero/1/PC_QuadCard_372X232_1_2x._SY116_CB615571575_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Lawn & Garden</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_8._SY116_CB617449707_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Up to 70% | Home Improvement</Text>
                                </GridItem>
                                <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={outerBoxStyles}  >
                        <Heading as="h5" fontSize="18px"  >Up to 75% off | Top deals on Amazon brands & more</Heading>
                        <Box sx={innerBoxStyles} pt="10px" >
                            <Grid
                                gridTemplateColumns="repeat(2,1fr)"
                                gridTemplateRows="repeat(2,1fr)"
                                gap={2}
                            >
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_h-k-new_186x116_in-en._SY116_CB615989515_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Up to 60% off | Home & kitchen products</Text>
                                </GridItem>
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_audio-new_186x116_in-en._SY116_CB615989513_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Up to 65% off | Speakers & more</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_spb-new_186x116_in-en._SY116_CB615989508_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Under 599 | clothing , shoes & more</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_qc/xcm_banners_daily-essentials-new_186x116_in-en._SY116_CB615989508_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Up to 70% off | Daily Essentials</Text>
                                </GridItem>
                                <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={outerBoxStyles}  >
                        <Heading as="h5" fontSize="18px"  >Up to 65% off | Appliances for your home</Heading>
                        <Box sx={innerBoxStyles} pt="10px" >
                            <Grid
                                gridTemplateColumns="repeat(2,1fr)"
                                gridTemplateRows="repeat(2,1fr)"
                                gap={2}
                            >
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/03-AC-PC-QC-1x._SY116_CB615774489_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Air Conditioner</Text>
                                </GridItem>
                                <GridItem>
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/01-REF-PC-QC-1x._SY116_CB615774489_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Refrigerator</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/04-MWO-PC-QC-1x._SY116_CB615774489_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Microwave</Text>
                                </GridItem>
                                <GridItem pos="relative" bottom="3vh" >
                                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/01-WM-PC-QC-1x._SY116_CB615774489_.jpg" h="100px"  />
                                    <Text fontSize="12px" fontWeight="normal" >Washing Macines</Text>
                                </GridItem>
                                <Link pos="relative" bottom="5vh" right="3vw" fontSize="13px" fontWeight="normal" color="teal" >See all offer</Link>
                            </Grid>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Container2