const URI = 'http://localhost:8000';

const data = {
  name: '',
  email: '',
};

export default {
  async getToken() {
    try {
      let response = await fetch(URI + 'api/sanctum/token', data);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
