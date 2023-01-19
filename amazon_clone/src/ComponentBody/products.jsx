import {useState , useEffect} from "react"
import axios from "axios"
import { Heading , Box , Grid , GridItem , Button , ButtonGroup } from "@chakra-ui/react"
import ProductCard from "./productCard"
const getData = (page)=>{
    return axios.get(`http://localhost:8080/Products?_limit=8&_page=${page}`)
}
function Products(){
    const [data , setData] = useState([])
    const [loading , setloading ] = useState(false)
    const [err , setErr] = useState(false)
    const [page , setPage] = useState(1)
    useEffect(()=>{
        fetchAndUpdatedata(page)
    },[page])
    const fetchAndUpdatedata = ()=>{
        setloading(true)
        getData(page).then((res)=>{
            setData(res.data)
            setloading(false)
        })
        .catch(()=>{
            setloading(false)
            setErr(true)
        })
    }

    if(loading){
        return <Heading as="h1" >Loading...</Heading>
    }
    if(err){
        return <Heading as="h1" >Something went wrong</Heading>
    }
    const handelPage = (val)=>{
        const change = val + page
        setPage(change)
    }
    return(
        <Box mt="5vh" mb="5vh" >
            <Heading as="h2" size="xl" pos="relative" right="35vw" >Blockbaster Deals</Heading>
            <Grid 
                gridTemplateColumns="repeat(4,1fr)"
                width="100%"
            >
                {
                    data.map((el)=>(
                        <GridItem key={el.id}>
                            <ProductCard 
                                id = {el.id}
                                title = {el.title}
                                category = {el.category}
                                image = {el.image}
                                price = {el.price}
                                rating = {el.rating.rate}
                            />
                        </GridItem>
                    ))
                }
            </Grid>
            <ButtonGroup>
                <Button colorScheme="yellow" isDisabled={page===1} onClick={()=>handelPage(-1)} >Prev</Button>
                <Button colorScheme="yellow" isDisabled={page===3} onClick={()=>handelPage(1)} >Next</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Products