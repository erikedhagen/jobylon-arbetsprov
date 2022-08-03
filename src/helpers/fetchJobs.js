const fetchJobs = () => {
  const apiUrl =
    "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json";

  return fetch(apiUrl).then((response) => response.json());
};

export default fetchJobs;
