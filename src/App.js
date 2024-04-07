import './App.css';
import * as React from 'react';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header/>
  
         
  
        <Footer/>
      </div>
    );
  }
}

export default App;
