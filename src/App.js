import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Teacher from "./component/teacher";
import Parent from "./component/parent";
import Boy from "./component/boy";
import Girl from "./component/girl";
import Nav from "./component/nav";
import Products from "./component/product";

// import Register from "./Component/Register";
// import Signup from "./Component/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/parent/boy" element={<Boy />} />
          <Route path="/parent/girl" element={<Girl />} />
          <Route path="/product" element={<Products />} />
          
          {/* Add missing closing angle brackets for each Route element */}
          {/* Add missing closing angle brackets for each Route element */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
