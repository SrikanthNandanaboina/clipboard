import styled from "styled-components";

export const JobsWrapper = styled.div`
  background: #ffffff;
  padding: 16px;
  width: 100%;
`;

export const JobsCountWrapper = styled.div``;

export const JobsCount = styled.span`
  font-weight: 700;
`;

export const JobsCountText = styled.span`
  font-weight: 500;
`;

export const JobListingsWrapper = styled.div`
  margin: 8px;
  cursor: pointer;
`;

export const Job = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: revert;
  align-items: center;
`;

export const Place = styled.span`
  padding: 8px;
  background: #b9b9b9;
  margin: 0 8px 0 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
`;

export const Description = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;

export const JobItemWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  padding: 8px 0px;
`;

export const JobItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobName = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const JobData = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin: 4px 0;
`;

export const JobPostedTime = styled.span`
  font-weight: 500;
  font-size: 12px;
`;

export const JobPostingDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const PostDetails = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

export const PostDetailsData = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const PostData = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 4px 0;
`;

export const PostDataName = styled.span`
  grid-column: 1/1;
  font-weight: 500;
`;

export const PostDataText = styled.span`
  text-align: justify;
  grid-column: 4/-1;
  font-weight: 500;
  font-size: 12px;
`;

export const PostButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PostButtonsWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

export const JobDetails = styled.span`
  padding: 8px;
  background: #0070f3;
  color: white;
  border-radius: 8px;
`;

export const SaveJob = styled.span`
  padding: 4px 8px;
  border: 1px solid #0070f3;
  color: #0070f3;
  border-radius: 8px;
  margin: 8px;
`;

export const JobsHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SortJobs = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const SortText = styled.span`
  cursor: pointer;
  margin: 0 8px;
  text-transform: capitalize;
  color: ${({ other }) => (other ? "black" : "#b3b3b3")};
`;
