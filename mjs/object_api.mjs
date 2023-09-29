import travelData from "./receiving_the_datas.mjs";

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
}

//const jasonPlacerholder = new Api("https://jsonplaceholder.typicode.com/users");

const jsonplaceholder = new Api('../json/user.json')
jasonPlacerholder.datasOfApi().then(travelData)
  .catch((err) => {
    console.error(`tenemos un error recibiendo los datos de esta url:${err}`);
  });
