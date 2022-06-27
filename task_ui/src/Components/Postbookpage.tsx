import React, { useState } from 'react';
import './postbookpage.css';
interface bookProps{
    changeView:(newView: string) => void
}

interface bookState{
    bookName: string;
    author: string;
    genre: string;
    ratings: string;
}

function PostBook(props:bookProps){

    const [bookName,setBookName]=useState<bookState["bookName"]>("");
    const [author,setAuthor]=useState<bookState["author"]>("");
    const [genre,setGenre]=useState<bookState["genre"]>("");
    const [ratings,setRatings]=useState<bookState["ratings"]>("");

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const nratings=Number(ratings);
        // console.log({bookName,author,genre,nratings})

        fetch('http://localhost:4000/book/create', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            bookName:bookName,
            author:author,
            genre:genre,
            ratings:nratings
            })
        })
        .then(() => {
            console.log('new book added');
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
            Create a new book.
        </h2>
        <form onSubmit={handleSubmit}>
            <label>
                Book Name
            </label>
            <input 
            type="text"
            required
            value={bookName}
            onChange={(e)=>setBookName(e.target.value)}   
            />
            <label>
                Author
            </label>
            <input 
            type="text"
            required
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}   
            />
            <label>
                Genre
            </label>
            <input 
            type="text"
            required
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}   
            />
            <label>
                Ratings
            </label>
            <input 
            type="text"
            required
            value={ratings}
            onChange={(e)=>setRatings(e.target.value)}   
            />
            <button type='submit' >Add Book</button>
        </form>
        </div>
    </div>

)


}

export default PostBook;