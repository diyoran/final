import './App.css';
import * as React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Main from './pages/main';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Main />


        <Footer />
      </div>
    );
  }
}

export default App;
