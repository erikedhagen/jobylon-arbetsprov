import "./JobsListItem.css";

function JobsListItem({ jobData }) {
  console.log("a job with", jobData);
  return (
    <li className="JobsListItem">
      <h4 className="title">
        <a href={jobData.urls.ad}>{jobData.title}</a>
      </h4>
    </li>
  );
}

export default JobsListItem;
