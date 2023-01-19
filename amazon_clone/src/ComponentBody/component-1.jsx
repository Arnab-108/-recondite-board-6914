import { Box } from "@chakra-ui/react"
import Container1 from "./container-1"
import Container2 from "./container-2"
import Products from "./products"
import Container3 from "./container-3"
import Footer from "./footer"
function Component(){
    return(
        <>
        <Box bgColor="gray.100" w="100%" gap={3}  >
            <Container1 />
            <Container2 />
            <Products />
            <Container3 />
            <Footer />
        </Box>
        </>
    )
}

export default Component