import Question from './Question';
import React from 'react';
import './App.css';

function Questions ({info}) {
    const {id, question, text} = info;
    return(
        <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
            {info.map((info) => (
                        <Question key = {id} {...info}/>
                    ) 
                )
            }
        </section>
      </div>
    );
};

export default Questions;