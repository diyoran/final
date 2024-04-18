import './App.css';
import * as React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Header from './layout/header';
import Footer from './layout/footer';
import Main from './pages/main';
import Courses from './pages/courses';



const App = () => {
    return (
      <div className='wrapper'>
        <Header />
        {/* <main>
        <nav className={AppStyle["header-menu"]}>
          <Link to={"/Portfolio"}>Main</Link>
          <Link to={"/Portfolio/Services"}>Services</Link>
          <Link to={"/Portfolio/Portfolio"}>Portfolio</Link>
          <Link to={"/Portfolio/Contacts"}>Contacts</Link>
        </nav>

        <Routes>
          <Route path="/Home" index element={<Home />} />

          <Route path="/Home/Courses" element={<Courses />} />

          <Route path="/Home/Courses/Page" element={<CoursePage />} />

          <Route path="/Home/Profile" element={<Profile />} />
        </Routes>
        </main> */}


        <Main/>
        {/* <Courses/> */}

        <Footer />
      </div>
    );

}

export default App;
