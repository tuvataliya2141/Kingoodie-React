import React from "react";
import router from "./router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Whatsapp from './assets/imgs/theme/whatsapp.png';
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          {router.map((item, i) => {
            return (<Route key={i} element={<item.element />} path={item.path} exact={item.exact} />);
          })}
        </Routes>
        <Footer />
      <a className="whats-app" href='https://api.whatsapp.com/send?phone=+919624501047' target="_blank">
        <img className src={Whatsapp} alt="/" />
      </a>
    </div>
  );
}

export default App;
