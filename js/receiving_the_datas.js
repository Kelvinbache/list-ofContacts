class Contacts {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  travelDatas(data) {
    for (const datas of Object.values(data)) {
      return datas;
    }
  }
}

export const travelData = Contacts.travelDatas() 