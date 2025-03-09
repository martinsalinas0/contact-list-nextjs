export const ContactsAPI = { 
  contacts: [], 
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