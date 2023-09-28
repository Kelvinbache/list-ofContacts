const receivingData = require('./receiving_the_datas')

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

const jasonPlacerholder = new Api("https://jsonplaceholder.typicode.com/users");

jasonPlacerholder.datasOfApi().then((data) => data.json()).then(receivingData)
  .catch((err) => {
    console.error(`tenemos un error recibiendo los datos de esta url:${err}`);
  });
