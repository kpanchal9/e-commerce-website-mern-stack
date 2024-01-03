import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "./Pages/home/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import SingUp from './Pages/SignUp/SignUp';
import Login from "./Pages/Login/Login";
import AnimatedSplash from "./componets/splash/AnimatedSplash";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/an" element={<AnimatedSplash/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/signup" element={<SingUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
