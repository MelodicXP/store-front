import Header from './Components/Header/index.jsx'
import Footer from './Components/Footer/index.jsx';
import Categories from "./Components/Categories/index.jsx";
import Products from "./Components/Products/index.jsx";
import SimpleCart from './Components/SimpleCart/index.jsx';

function App() { 
  return (
    <>
      <Header/>
      <SimpleCart/>
      <Categories/>
      <Products />
      <Footer/>
    </>
  )
}

export default App
