import React from 'react';
import ReactDOM from 'react-dom/client';
import one from "./assets/images/dog-1.jpg"
import two from "./assets/images/dog-2.jpg"
import three from "./assets/images/dog-3.jpg"
import four from "./assets/images/dog-4.jpg"
import five from "./assets/images/dog-5.jpg"
import six from "./assets/images/dog-6.jpg"
import seven from "./assets/images/dog-7.jpg"
import eight from "./assets/images/dog-8.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Task(props){
    return(
        <div className="bg-white p-4 shadow-md">
            <img className="w-full h-32 object-cover mb-4 rounded-md" src={props.img} alt="Card Image" />
            <p className="hidden md:block text-sm">{props.name}</p>
        </div>
    )
}

var data=[
    {
        img:one,
        name:"The Rabbit Ears",
    },
    {
        img:two,
        name:"The Innocent Look",
    },
    {
        img:three,
        name:"Big Eyed Buggy",
    },
    {
        img:four,
        name:"The saint Doggo",
    },
    {
        img:five,
        name:"The Husky",
    },
    {
        img:six,
        name:"The big Bang",
    },
    {
        img:seven,
        name:"The Shepard",
    },
    {
        img:eight,
        name:"The vise Lab",
    },
]


root.render(
    <div className="p-10 md:grid grid-cols-4 gap-4 mb-4 w-1/2 mx-auto">
        {data.map((item) => (
            <Task key={item.name} img={item.img} name={item.name} />
        ))}
    </div>
);

