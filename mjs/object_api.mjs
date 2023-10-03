class Api {
  constructor(url) {
    this.url = url;
  }
  async datasOfApi() {
    try {
      return await fetch(this.url);
    } catch (err) {
      return err;
    }
  }
  answer() {
    const data = this.datasOfApi().then((response) => response.json());
    return data;
  }
}

const jasonPlacerholder = new Api("https://jsonplaceholder.typicode.com/users");
//const jsonplaceholder = new Api('../json/user.json')
export const dataOfAPi = jasonPlacerholder.answer();
