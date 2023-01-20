import { Route , Routes } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import Signin from "./Signin";
import SingleProductPage from "./SingleProductPage";
import Payment from "./Payment";
import Home from "./Home";
function AllRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SingleProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    )
}

export default AllRoute