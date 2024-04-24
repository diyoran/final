import './App.css';
import * as React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Main from './pages/main';
import Courses from './pages/courses';
import Profile from './pages/profile'



const App = () => {
    return (
      <div className='wrapper'>
        <Header />
        {/* <Main/> */}
        {/* <Courses/> */}
        <Profile/>

        <Footer />
      </div>
    );

}

export default App;
