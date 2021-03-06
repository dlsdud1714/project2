import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BusinessDetails from "./components/Pages/BusinessDetails";
// import { AuthProvider } from "./components/contexts/AuthContext";
import Main from "./components/Pages/Main";
import List from "./components/Pages/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";
import About from "./components/Pages/About";
import AuthProvider from "./components/contexts/AuthProvider";

function App() {
  const [businessData, setBusinessData] = useState();

  const getBusinessData = async () => {
    try {
      const response = await fetch("/data");
      const businesses = await response.json();
      return setBusinessData(businesses);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    getBusinessData();
  }, []);
  //console.log(businessData)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header businessData={businessData} />
        <Routes>
          <Route path="/" element={<Main businessData={businessData} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/categories/:category"
            element={<List Data={businessData} />}
          />
          <Route
            path="/business/:businessId"
            element={<BusinessDetails Data={businessData} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login123" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout123" element={<Logout />} />

        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
