import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams()
    //console.log(id, jobs);
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4 mb-3">
                <div className="border md:col-span-3 p-2">
                    <p className="mb-2"><span className="font-bold">Job Description: </span>{job.job_description}</p>
                    <p className="mb-2"><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="font-bold mb-2">Education Requirements:</p>
                    <p>{job.educational_requirements}</p>
                    <p className="font-bold mb-2">Experiences:</p>
                    <p>{job.experiences}</p>
                </div>
                <div className="border bg-lime-100 p-2">
                    <h2 className="font-bold mx-3">Job Details at {job.company_name}</h2>
                    <hr />
                    <div className="flex items-center gap-1 mt-3 mb-3">
                        <FaSackDollar></FaSackDollar>
                        <p> <span className="font-bold">Salary: </span>{job.salary}(Per Month)</p>
                    </div>
                    <div className="flex items-center gap-1 mt-3 mb-3">
                        <MdOutlineSubtitles></MdOutlineSubtitles>
                        <p> <span className="font-bold">Job Title: </span>{job.job_title}</p>
                    </div>
                    <h2 className="font-bold mt-6 mb-3">Contact Information</h2>
                    <hr />
                    <div className="flex items-center gap-1 mt-3 mb-3">
                        <FaPhoneSquareAlt></FaPhoneSquareAlt>
                        <p> <span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                        <MdEmail ></MdEmail>
                        <p> <span className="font-bold">Email: </span>{job.contact_information.email}</p>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                        <p className="text-2xl"><CiLocationOn></CiLocationOn></p>
                        <p> <span className="font-bold">Address: </span>{job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob}
                    className="btn bg-lime-300 w-full rounded">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;