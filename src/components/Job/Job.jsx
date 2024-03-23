

const Job = ({ job }) => {
    const { logo, company_name, job_title, 
        remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" style={{ height: '45px', width: '150px' }}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 font-extrabold border rounded border-lime-300 mr-4 text-lime-500">{remote_or_onsite}</button>
                        <button className="px-5 font-extrabold border rounded border-lime-300 text-lime-500">{job_type}</button>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-lime-300 font-extrabold">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;