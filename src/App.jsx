import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/Navbar/Navbar"

const App = () => {
  const greetings = 'Bienvenidos a mi E-Commerce'
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings={greetings}/>
    </>
  )
}

export default App
