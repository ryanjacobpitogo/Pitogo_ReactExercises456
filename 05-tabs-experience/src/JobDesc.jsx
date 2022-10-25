
function JobDesc({ jobs, btnState }){
    return(
        <>
        <article className="job-info">
            <h3>{jobs[btnState].title}</h3>
            <h4>{jobs[btnState].company}</h4>
            <p className="job-date">{jobs[btnState].dates}</p>
            {jobs[btnState].duties.map((duty, i)=>{
                return (<div className="job-desc" key={i}>
                    <b className="arrow">{'>>'}</b>
                    <p>{duty}</p>
                </div>);
            })}
        </article>
        </>
    );
}

export default JobDesc;