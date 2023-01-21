import { Card, CardBody, CardFooter , Image , Stack , Button , Heading , Text , ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import Model from './modelCart'
const DeleteData=(id)=>{
    return axios({
        method:"delete",
        url:`http://localhost:8080/Cart/${id}`
    })
    
}
function CartCard({id , title , price , category , image , rating , description , handelDelete }){
    const DeleteItem =()=>{
       DeleteData(id)
    }
    return (
        <>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={image}
                alt='Caffe Latte'
                pos="relative"
                left="6vw"
            />

            <Stack pl="10vw" >
                <CardBody
                    align="left"
                >
                <Heading  size='md'>{title}</Heading>

                <Text fontSize="14px" pt="4vh" >
                   {category}
                </Text>
                <Text fontSize="14px" pt="2vh" >
                  {description}
                </Text>
                <Text fontSize="14px" pt="2vh" >
                    Rs {price}
                </Text>
                <Text fontSize="14px" pt="2vh" >
                   Rating: {rating}
                </Text>
                </CardBody>

                <CardFooter>
                <ButtonGroup>
                    <Button width="16vw" height="5vh"  variant='solid' colorScheme='yellow'>
                        <Model 
                            image={image}
                            title={title}
                            rating={rating}
                            price={price}
                            category={category}
                        />
                    </Button>
                    <Button width="16vw" height="5vh" variant='solid' colorScheme='yellow' onClick={DeleteItem} >
                        Delete
                    </Button>

                </ButtonGroup>
                </CardFooter>
            </Stack>
        </Card>
        </>
    )
}
export default CartCard