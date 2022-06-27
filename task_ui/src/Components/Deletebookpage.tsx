import React, { useState } from 'react';

interface bookProps{
    changeView:(newView: string) => void
}

interface bookState{
    bookId:string;
}

function DeleteBook(props:bookProps){
    const [bookId,setBookId]=useState<bookState["bookId"]>("");

    const handleSubmit=(e:any)=>{
        e.preventDefault();


        const id=Number(bookId);
        fetch(`http://localhost:4000/book/delete/${id}`, {
        method: 'DELETE'})
        .then(() => {
            console.log('book deleted');
            setBookId("");
        })
        .catch(err=>console.log(err));

    }

 return (
    <div className='postpage'>
        <div className='postbookpage'>
        <h2>
            Delete book
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
            <button type='submit' >Delete Book</button>
        </form>
        </div>
    </div>
)


}

export default DeleteBook;