import './App.css';
import * as React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const App = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate()
  React.useEffect(() => {
    if (pathname === "/") {
      navigation("/main")
    }
  }, [])

  

  return (
    <div>
      <Header/>

      <Outlet />

      <Footer />
    </div>
  );

}

export default App;
