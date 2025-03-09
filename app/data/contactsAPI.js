export const ContactsAPI = { 
  contacts: [{
    "id": 70219577,
    "name": "Albert Einstein",
    "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    "email": "aeinstein@example.com",
    "phone_number": "15555555555"
  }, 
  {
    "id": 70219577,
    "name": "Albert Einstein JUNIOR",
    "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    "email": "aeinstein@example.com",
    "phone_number": "15555555555"
  }], 
  all: function(){ 
    return this.contacts
  },

  addContact: function({name, email, number, imageUrl, id}){ 
    this.contacts.push({name, email, number, imageUrl, id})
  }, 

  get: function(id) { 
    const isContact = (num) => num.id === id; 
    return this.contacts.find(isContact)
  }
}


