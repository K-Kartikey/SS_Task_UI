import React, { useState } from 'react';
import './postbookpage.css';

interface bookProps{
    changeView:(newView: string) => void;
}

interface bookState{
    bookId:string;
    bookName: string;
    author: string;
    genre: string;
    ratings: string;
}

function UpdateBook(props:bookProps){

    // console.log(props.id);
    const [bookName,setBookName]=useState<bookState["bookName"]>("");
    const [author,setAuthor]=useState<bookState["author"]>("");
    const [genre,setGenre]=useState<bookState["genre"]>("");
    const [ratings,setRatings]=useState<bookState["ratings"]>("");
    const [bookId,setBookId]=useState<bookState["bookId"]>("");
    // const [book,setbook]=useState({});

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const nratings=Number(ratings);
        console.log({bookId,bookName,author,genre,nratings})


        const id=Number(bookId);
        fetch(`http://localhost:4000/book/updateput/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id:bookId,
            bookName:bookName,
            author:author,
            genre:genre,
            ratings:nratings
            })
        })
        .then(() => {
            console.log('book updated');
            setBookId("");
            setBookName("");
            setAuthor("");
            setGenre("");
            setRatings("");
        })
        .catch(err=>console.log(err));

    }


 return (
    <div className='postpage'>
        <div className='postbookpage'>
        <h2>
            Update book details.
        </h2>
        <form onSubmit={handleSubmit}>
            <label>
                Book ID
            </label>
            <input 
            type="text"
            required
            value={bookId}
            onChange={(e)=>setBookId(e.target.value)}   
            />
            <label>
                New Book Name
            </label>
            <input 
            type="text"
            required
            value={bookName}
            onChange={(e)=>setBookName(e.target.value)}   
            />
            <label>
                New Author
            </label>
            <input 
            type="text"
            required
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}   
            />
            <label>
                New Genre
            </label>
            <input 
            type="text"
            required
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}   
            />
            <label>
                New Ratings
            </label>
            <input 
            type="text"
            required
            value={ratings}
            onChange={(e)=>setRatings(e.target.value)}   
            />
            <button type='submit' >Update Book</button>
        </form>
        </div>
    </div>

)}

export default UpdateBook;