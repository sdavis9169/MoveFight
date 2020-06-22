// b195b133
// http://www.omdbapi.com/?apikey=[yourkey]&

const fetchData = async searchTerm => {
  const response = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: `b195b133`,
      s: searchTerm
    }
  });

  console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;

const onInput = event => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => fetchData(event.target.value), 1000);
};

input.addEventListener('input', onInput);
