import { Container , Box } from "@chakra-ui/react"
import Container1 from "./container-1"
import Container2 from "./container-2"
function Component(){
    return(
        <>
        <Box bgColor="gray.100" w="100%"  >
            <Container1 />
            <Container2 />
        </Box>
        </>
    )
}

export default Component