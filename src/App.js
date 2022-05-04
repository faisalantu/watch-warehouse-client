import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthRequired from "./components/AuthRequired";
import Inventory from "./pages/Inventory";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Toaster />
      <div className='container mx-auto px-2 lg:px-0'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route
            path='/inventory/:id'
            element={
              <AuthRequired>
                <Inventory />
              </AuthRequired>
            }
          ></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
