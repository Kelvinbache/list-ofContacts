import { dataOfAPi } from "./object_api.mjs";

class Contacts {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  screen() {
    return this.name + " " + this.lastName;
  }
}


dataOfAPi.then((data) => {
  for (const users of Object.values(data)) {
      console.log(users)    
  }
});


