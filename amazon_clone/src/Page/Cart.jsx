import CartCard from "./cartCard"
import axios from "axios"
import { useState , useEffect } from "react"
import { Heading , Grid , GridItem , Box} from "@chakra-ui/react"
export const getCartdata = ()=>{
    return axios.get(`http://localhost:8080/Cart`)
}
function Cart(){
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [err , setErr] = useState(false)

    useEffect(()=>{
        fetchAndUpdateCart()
    },[])

 const fetchAndUpdateCart = ()=>{
        setLoading(true)
        getCartdata().then((res)=>{
            setLoading(false)
            setData(res.data)
        })
        .catch(()=>{
            setLoading(false)
            setErr(true)
        })
    }
    if(loading){
        return <Heading as="h1" size="2xl" >Loading...</Heading>
    }
    if(err){
        return <Heading as="h1" size="2xl" >Something Went Wrong!</Heading>
    }
    console.log(data)
    return (
        <>
            <Box>
                <Heading as="h2" size="xl" >Your Cart</Heading>
                <Grid
                 gridTemplateColumns="repeat(1,1fr)"
                 gap={4}
                 width="100%"
                >
                    {
                        data.map((el)=>(
                            <GridItem>
                                <CartCard 
                                    id = {el.id}
                                    title = {el.title}
                                    category = {el.category}
                                    image = {el.image}
                                    price = {el.price}
                                    rating = {el.rating.rate}
                                    description = {el.description}
                                />
                            </GridItem>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}
export default Cart