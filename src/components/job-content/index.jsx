import React, { useState, useEffect } from "react";
import moment from "moment";
import { cloneDeep } from "lodash";
import JobsController from "../../utilities/jobs";
import { Up, Down } from "./arrowIcons";
import searchData from "./search";
import sortfunc from "./sort";
import {
  Job,
  JobData,
  JobDetails,
  JobItem,
  JobItemWrapper,
  JobListingsWrapper,
  JobName,
  JobPostedTime,
  JobPostingDetails,
  JobsCount,
  JobsCountText,
  JobsCountWrapper,
  JobsHeading,
  JobsWrapper,
  PostButtons,
  PostButtonsWrapper,
  Place,
  PostData,
  PostDataName,
  PostDataText,
  PostDetails,
  PostDetailsData,
  Description,
  SaveJob,
  SortJobs,
  SortText,
} from "./styles";

const JobContent = ({ searchText }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedIndex, setIndex] = useState(null);
  const [jobId, setJobId] = useState(null);
  const [sortData, setSortData] = useState({
    Location: null,
    Role: null,
    // Department: null,
    // Education: null,
    Experience: null,
  });

  useEffect(() => {
    JobsController().then((res) => {
      setJobs(res);
    });
  }, []);

  const jobsJson = cloneDeep(jobs);

  let jobslist = jobsJson;

  if (searchText) {
    jobslist = searchData(jobslist, searchText);
  }

  jobslist = sortfunc(jobslist, sortData);

  const count = jobslist
    .map((ele) => ele.items.length)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  const setSelectedIndex = (index) => {
    if (index === selectedIndex) setIndex(null);
    else setIndex(index);
  };

  const setSelectedJobId = (job_id) => {
    if (job_id === jobId) setJobId(null);
    else setJobId(job_id);
  };

  const setSelectedSort = (key) => {
    const sortDataClone = { ...sortData };
    const value = sortDataClone[key];
    if (value === "asc") sortDataClone[key] = "desc";
    if (value === "desc") sortDataClone[key] = null;
    if (value === null) sortDataClone[key] = "asc";
    setSortData(sortDataClone);
  };

  return (
    <JobsWrapper>
      <JobsHeading>
        <JobsCountWrapper>
          <JobsCount>{count} </JobsCount>
          <JobsCountText>job postings</JobsCountText>
        </JobsCountWrapper>
        <SortJobs>
          <SortText>Sort by</SortText>
          {Object.keys(sortData).map((ele) => (
            <SortText other onMouseDown={() => setSelectedSort(ele)}>
              {ele} {sortData[ele] === "asc" && <Up />}
              {sortData[ele] === "desc" && <Down />}
            </SortText>
          ))}
        </SortJobs>
      </JobsHeading>
      <JobListingsWrapper>
        {jobslist.map((ele, index) => (
          <>
            <Job onMouseDown={() => setSelectedIndex(index)}>
              <Place>{ele.items[0].state}</Place>
              <Description>
                {ele.total_jobs_in_hospital} jobs for {ele.name}
              </Description>
            </Job>
            {selectedIndex === index &&
              ele.items.map((job) => (
                <JobItemWrapper>
                  <JobItems job={job} setSelectedJobId={setSelectedJobId} />
                  {jobId === job.job_id && <PostDataWrapper job={job} />}
                </JobItemWrapper>
              ))}
          </>
        ))}
      </JobListingsWrapper>
    </JobsWrapper>
  );
};

const JobItems = ({ job, setSelectedJobId }) => (
  <JobItem onMouseDown={() => setSelectedJobId(job.job_id)}>
    <JobName>{job.job_title}</JobName>
    <JobPostingDetails>
      <JobData>
        {job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} an hour
        | {job.county}, {job.state}
      </JobData>
      <JobPostedTime>{moment(job.created).fromNow()}</JobPostedTime>
    </JobPostingDetails>
  </JobItem>
);

const PostDataWrapper = ({ job }) => (
  <PostDetails>
    <PostDetailsData>
      <PostData>
        <PostDataName>Department</PostDataName>
        <PostDataText>{job.department.join(", ")}</PostDataText>
      </PostData>
      <PostData>
        <PostDataName>Hours / shifts:</PostDataName>
        <PostDataText>
          {job.hours[0]} / {job.work_schedule}
        </PostDataText>
      </PostData>
      <PostData>
        <PostDataName>Summary</PostDataName>
        <PostDataText>{job.description}</PostDataText>
      </PostData>
    </PostDetailsData>
    <PostButtonsWrapper>
      <div></div>
      <PostButtons>
        <JobDetails>Job details</JobDetails>
        <SaveJob>Save job</SaveJob>
      </PostButtons>
    </PostButtonsWrapper>
  </PostDetails>
);

export default JobContent;
