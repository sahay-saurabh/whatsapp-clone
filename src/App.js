// import logo from './logo.svg';
import Chat from './Chat';
import './App.css';
import Sidebar from './Sidebar';
import React from 'react';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className='app-body'>
        <Routes>
            <Route path='/app' element={<><Sidebar />
              <Chat /></>}></Route>
            <Route path='/' element={<h1>Home Page</h1>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
