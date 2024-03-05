import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Book(props){
    return(
        <div>
            <h1>{props.bookName}</h1>
            <p>{props.author}</p>
        </div>
    )
}

var bookList=[
    {
        bookName:"Rich Dad Poor Dad",
        author:"Robert Kiyosoki"
    },
    {
        bookName:"Atomic Habits",
        author:"James Clear"
    }
]
root.render(
    <div>
        {
            bookList.map(function (item){
                return <Book bookName={item.bookName} author={item.author}></Book>
            })
        }
    </div>

);

