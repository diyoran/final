import './App.css';
import * as React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { Content } from "antd/es/layout/layout";
// import { Link, Route, Routes } from "react-router-dom";
import { Fragment } from 'react';
import { Helmet } from "react-helmet";
import logo from "./img/logoimg.jpg"



const App = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate()
  React.useEffect(() => {
    if (pathname === "/") {
      navigation("/main")
    }
  }, [])



  return (
    <Fragment>

      <Helmet>
        <meta name="description" content="LearnHub — the best way to start your education!" />
        <meta name="keywords" content="LearnHub, Courses, Learning site, Education site, Study" />
        <meta property="og:title" content="LearnHub" />
        <meta property="og:description" content="LearnHub — the best way to start your education!" />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <Outlet />

      <Footer />
    </Fragment>
  );

}

export default App;
