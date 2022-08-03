import fetchJobs from "../helpers/fetchJobs";
import JobsListItem from "../components/JobsListItem";
import { useState, useEffect } from "react";
import "./JobsList.css";

function JobsList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs()
      .then((jobs) => {
        setJobs(jobs);
        console.log(jobs);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ul className="JobsList">
      {jobs.map((job, index) => (
        <JobsListItem key={index} jobData={job} />
      ))}
    </ul>
  );
}

export default JobsList;
