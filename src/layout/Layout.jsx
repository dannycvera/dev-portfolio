import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout(props) {
  return (
    <div className="layout">
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
