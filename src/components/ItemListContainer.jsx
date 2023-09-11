import { Flex, Heading } from "@chakra-ui/react"


const ItemListContainer = ({ greetings }) => { 

  const mockData = [
    {
      id: 1,
      title: "Pulsera Ojo de Tigre 8mm",
      description: "Descripción del producto 1",
      price: 12.990,
      stock: 1,
      url: "https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/38659667/resize/285/285?1692657572",
    },
    {
      id: 2,
      title: "Pulsera Turmalina con Cuarzo Turmalinado",
      description: "Descripción del producto 2",
      price: 9.900,
      stock: 4,
      url: "https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/38774889/resize/640/640?1693252548",
    },
    {
      id: 3,
      title: "Cuenco tibetano 11 Cm. - Negro",
      description: "Descripcion producto 3",
      price: 26.000,
      stock: 2,
      url: 'https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/35979510/resize/640/640?1685723534'
    },
    {
      id: 4,
      title: 'Anillo - Árbol de la Vida',
      description: 'Descripcion producto 4',
      price: 3.000,
      stock: 3,
      url: 'https://cdnx.jumpseller.com/honu-piedras-y-esencias1/image/35858719/resize/640/640?1692060346'
    },
  ];


  return(

    <>
      <Flex justify='center'>
        <Heading as='h2' size='xl'>{ greetings }</Heading>
      </Flex>
    </>
  )

}

export default ItemListContainer