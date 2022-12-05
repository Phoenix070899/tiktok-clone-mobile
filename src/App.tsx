import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen flex justify-center items-center bg-neutral-900 text-white">
        <div className="app-content flex flex-col w-full max-w-[375px] max-h-[730px] bg-black relative">
          <Header />
          <div className="basis-11/12">
            <Routes>
              <Route path="/friends" element={<Home />}></Route>
              <Route path="/add" element={<Home />}></Route>
              <Route path="/inbox" element={<Home />}></Route>
              <Route path="/profile" element={<Home />}></Route>
              <Route path="/following" element={<Home />}></Route>
              <Route path="/for-you" element={<Home />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
          <div className="basis-1/12">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
