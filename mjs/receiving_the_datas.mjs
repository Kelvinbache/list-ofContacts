import { dataOfAPi } from "./object_api.mjs";

class Contacts {
  constructor() {
    this.name;
    this.phone;
  }

  traveldata(data) {
    for (const items of data) {
      this.tags((this.name = items.name), (this.phone = items.phone));
    }
  }

  tags(name, phone) {
    const tabale = document.getElementById("table");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${name}</td> <td>${phone}</td>`;
    tabale.appendChild(tr);
  }
}

const datasUsers = new Contacts();
dataOfAPi.then((data) => datasUsers.traveldata(data));

