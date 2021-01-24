const apiUrl = "http://api.podcastify.tw";

const login = async (data) => {
  const endpoint = apiUrl + '/users/login'
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(endpoint, options);
  const result = await response.json()
  return result;
}

export {
  login
}