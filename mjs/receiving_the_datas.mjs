import { dataOfAPi } from "./object_api.mjs";

class Contacts {
  constructor() {
    this.name;
    this.phone;
  }

  data(data) {
    for (const items of data) {
      this.name = items.name;
      this.phone = items.phone;
      this.screen(this.name, this.phone);
    }
  }

  screen(name, phone) {
    //modificar el codigo, hacer el cogigo html por fuera
    const container = document.getElementById("container");
    container.innerHTML = `
    <table>
    <colgroup span="4" class="columns"></colgroup>
          <tr> 
          <th>name</th>
          <th>phone</th>
          </tr>

          <tr>
          <td>
          ${name}
          </td>
          <td>
          ${phone}
          </td>
          </tr>
         </table>
    `;
  }
}

const datas = new Contacts();
dataOfAPi.then((data) => datas.data(data));
