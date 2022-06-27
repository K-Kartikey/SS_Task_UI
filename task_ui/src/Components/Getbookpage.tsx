import React, { useEffect, useState } from 'react';
import './Getbookpage.css'

interface bookProps{
    changeView:(newView: string) => void
}
interface bookState{
    bookData: {
        id:number;
        bookName: string;
        author: string;
        genre: string;
        ratings: string;

    }[]
}
function GetBook(props:bookProps){

    const[bookData,setBookData]=useState<bookState["bookData"]>([{
        id:-1,
        bookName:"",
        author:"",
        genre:"",
        ratings:""
    }]);
    useEffect(()=>{
    fetch('http://localhost:4000/book/')
    .then(resp=>resp.json())
    .then(resp=>{ 
            setBookData(resp);
        })
    .catch(err=>console.log("err"));
    },[])

 return (
        <div className="Getbookpage">
        <div className="table_background">
            <h1>All Book Details</h1>
                <table>
                <thead>
                <tr>
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Ratings</th>
                    
                </tr>
                </thead>
                <tbody>
                    {
                        bookData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.bookName}</td>
                                <td>{item.author}</td>
                                <td>{item.genre}</td>
                                <td>{item.ratings}</td>
                
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    </div>
 )



}

export default GetBook;