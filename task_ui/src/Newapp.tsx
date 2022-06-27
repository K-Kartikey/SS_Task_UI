import React, { useState } from 'react';
import GetBook from './Components/Getbookpage';
import PostBook from './Components/Postbookpage';
import DeleteBook from './Components/Deletebookpage';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


function App(){


  

    return (
      <Router>
        <>
        <Link to="/allBooks">Books Database</Link>
        </>
      </Router>
    );
  }

export default App;
