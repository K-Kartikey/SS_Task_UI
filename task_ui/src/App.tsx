import React, { useState } from 'react';
import GetBook from './Components/Getbookpage';
import PostBook from './Components/Postbookpage';
import DeleteBook from './Components/Deletebookpage';
import './App.css';
import UpdateBook from './Components/Updatebookpage';
// import UpdateBook from './Components/Updatebookpage';


function App(){

  //Old UI
  const[currView,setcurrView]=useState('getBook');

  const changeView=(newView:string)=>{
    setcurrView(newView);
  }

    return (
      <div className='Mainbody'>
      <div className="App">
        <h1>
          Book Database
        </h1>
        <div className="hi">
          <h2 onClick={()=>changeView('getBook')}>
            Get all Books
          </h2>
          <h2 onClick={()=>changeView('postBook')}>
            Create a new book
          </h2>
          <h2 onClick={()=>changeView('updateBook')}>
            Update Book
          </h2>
          <h2 onClick={()=>changeView('deleteBook')}>
            Delete Book
          </h2>
        </div>
      </div>
      <div className='container-main'>
        {
          currView==='getBook' &&
          <>
          <GetBook changeView={changeView}/>
          </>
        }
        {
          currView==='getSingleBook' &&
          <>
          Get Single Book Information.
          </>
        }
        {
          currView==='postBook' &&
          <>
          <PostBook changeView={changeView}/>
          </>
        }
        {
          currView==='updateBook' &&
          <>
          <UpdateBook changeView={changeView} />
          </>
        }
        {
          currView==='deleteBook' &&
          <>
          <DeleteBook changeView={changeView}/>
          </>
        }
        
      </div>
      </div>
    );
  }

export default App;