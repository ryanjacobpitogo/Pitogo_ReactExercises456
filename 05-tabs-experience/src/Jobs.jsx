import JobDesc from './JobDesc';

function Jobs ({jobs, btnState, setBtnState}) {
    return(
        <>
        <div className="btn-container">
            {jobs.map((job,i) => {
                return(<button 
                    key = {job.id} 
                    className={`job-btn ${btnState === i && 'active'}`}
                    onClick={()=>setBtnState(i)}
                >
                    {job.company}
                </button>)
             })}
        </div>
        <JobDesc jobs = {jobs} btnState = {btnState} / >
        </>
    );
}

export default Jobs;