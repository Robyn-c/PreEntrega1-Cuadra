import { Flex, Heading } from "@chakra-ui/react"


const ItemListContainer = ({ greetings }) => { 
  return(
    <>
      <Flex justify='center'>
        <Heading as='h2' size='xl'>{ greetings }</Heading>
      </Flex>
    </>
  )

}

export default ItemListContainer