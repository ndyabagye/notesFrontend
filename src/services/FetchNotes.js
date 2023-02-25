const URI = 'http://localhost:8000';

export default {
  async fetchNotes() {
    try {
      let response = await fetch(URI + 'api/coins');
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
