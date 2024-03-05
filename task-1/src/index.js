import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import one from "./assets/images/face-1.jpg"
import two from "./assets/images/face-2.jpg"
import three from "./assets/images/face-3.jpg"
import four from "./assets/images/face-4.jpg"
import five from "./assets/images/face-5.jpg"
import six from "./assets/images/face-6.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Task(props){
    return(
        <div className="p-2 grid grid-cols-3 gap-2 rounded-md border-solid border-2">
            <div className="col-span-1 flex items-center justify-center">
                <img src={props.img} alt="Your Image" className="rounded-full w-6 h-6 md:w-16 md:h-16"/>
            </div>
            <div className="col-span-1">
                <h1 className="text-sm md:text-lg font-bold">{props.name}</h1>
                <p className="hidden md:block text-lg">{props.message}</p>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center">
                <p className="hidden md:block text-sm">{props.time}</p>
                <div className="hidden md:block">
                    <i className="fa-solid fa-star mt-2 md:mt-0" style={{color: "#63E6BE"}}></i>
                </div>
            </div>
        </div>
    )
}

var data=[
    {
        name:"Jessica Koel",
        message:"Hey. Joel, I here to help you out please",
        img:one,
        time:"11:26"
    },
    {
        name:"Kameial Bolger",
        message:"I will send you all documents as soon",
        img:two,
        time:"12:26"
    },
    {
        name:"Tamaara Suiale",
        message:"I suggest to start new business trip next week",
        img:three,
        time:"8:26"
    },
    {
        name:"Sam Nielson",
        message:"I suggest to start new business trip next week",
        img:four,
        time:"7:16"
    },
    {
        name:"Caroline Nexon",
        message:"We need to start new research center",
        img:five,
        time:"9:26"
    },
    {
        name:"Patrick Koeler",
        message:"I will send you all documents as soon",
        img:six,
        time:"3:26"
    },
]


root.render(
    <div className="bg-white p-10 rounded-md shadow-md mb-4 w-1/2 mx-auto">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input type="search" className="relative m-0 -mr-0.5 block min-w-0 h-10 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary" placeholder="Search" aria-label="Search" aria-describedby="button-addon1"/>
        </div>
        {data.map((item) => (
            <Task key={item.name} name={item.name} message={item.message} img={item.img} time={item.time} />
        ))}
    </div>
);

