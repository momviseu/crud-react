import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Component/Home/Home";
import HomeCart from "./Component/HomeCart";
import Cart from "./page/Cart";
import List from "./crud/List";
import Navbar from "./page/Navbar";
import User from "./page/User";
import Update from "./crud/Update";
import Add from "./crud/Add";
function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <User/> */}
      {/* <Cart/> */}
      
      <BrowserRouter>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/homecart/:id" element={<HomeCart/>}/>

        <Route path="/list" element={<List/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/add" element={<Add/>}/>

        

          <Route path="/user" element={<User/>}/>
          <Route path="/cart/:id" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
