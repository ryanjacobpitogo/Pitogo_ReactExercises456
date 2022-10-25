import { useState } from "react";
import React from 'react';
import './App.css';

function Question ({question, text}) {
    const [info, setInfo] = useState(false);

    return(
        <article className="question">
            <header>
                <h3>{question}</h3>
                <button className="btn" onClick={()=>setInfo(!info)}>
                    <b>{info ? '-' : '+'}</b>
                </button>
            </header>
            {info ? <p>{text}</p> : ""}
            
        </article>
    );
};

export default Question;