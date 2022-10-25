import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from './Jobs';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnState, setBtnState] = useState(0);

  const fetchJobs = async () => {
      const response = await fetch(url);
      const jobs = await response.json();

      // Once data are available, setLoading to false
      setJobs(jobs);
      setLoading(false);
  };

  useEffect (()=>{
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="content">
        <Jobs jobs = {jobs} btnState = {btnState} setBtnState = {setBtnState}/>
        </div>
      </section>
      <button type='button' className="btn">
        more info
      </button>
    </>
  );
}

export default App;
