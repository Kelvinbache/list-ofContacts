class Contacts {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  travelDatas(data) {
   const json = data.Json();
   return json
  }
}

export const travelDat = Contacts.travelDatas;
const user1 = new Contacts();
console.log(user1.travelDatas())
