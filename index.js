// b195b133
// http://www.omdbapi.com/?apikey=[yourkey]&

const fetchData = async () => {
  const response = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: `b195b133`,
      s: `avengers`
    }
  });

  console.log(response.data);
};

fetchData();
