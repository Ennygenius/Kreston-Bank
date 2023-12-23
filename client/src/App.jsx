import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFOund from "./Pages/Notfound/NotFOund";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ADashboard from "./Pages/Admin/Dashboard";
import EditTrans from "./Pages/Admin/EditTrans";
import DeleteTrans from "./Pages/Admin/DeleteTrans";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import Card from "./Components/Card";
import Withdraw from "./Pages/Transaction/Withdraw/Withdraw";
import Transfer from "./Pages/Transaction/Transfer/Transfer";

function App() {
  const [count, setCount] = useState(0);
  const isUserLogin = localStorage.getItem("token");
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFOund />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        {isUserLogin ? (
          <>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/edittrans/:id" element={<EditTrans />}></Route>
            <Route path="/deletetrans/:id" element={<DeleteTrans />}></Route>
            <Route path="/AdminDashboard" element={<ADashboard />}></Route>
            <Route path="/withdraw" element={<Withdraw />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/card" element={<Card />}></Route>
            <Route path="/transfer" element={<Transfer />}></Route>
          </>
        ) : (
          <Route path="/signin" element={<Signin />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
