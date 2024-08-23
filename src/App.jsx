import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="px-10 sm:px[5vw] md:px[7vw] lg:px[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
