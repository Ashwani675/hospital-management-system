import "./App.css";
import Header from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import MainView from "./component/MainView/MainView";
import About from "./component/About/About";
import Appointment from "./component/Appointment/Appointment";
import Contact from "./component/Contacat/Contact";
import Login from "./component/Login/Login";
function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" exact element={<MainView />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/appointment" exact element={<Appointment />} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/login" exact element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
