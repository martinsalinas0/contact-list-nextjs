import AddContact from "../contacts/new/page"

export const ContactsAPI = { 
  contacts: [
    { pid: 1, name: "Joe Rogan", email: "joe@example.com", number: "123456789", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 54362, name: "Bill Smith", email: "bill@example.com", number: "9876636354321", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 13456, name: "Shane Gillis", email: "shane@example.com", number: "123454634556789", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 53462, name: "Jane Smith", email: "jane@example.com", number: "9876534654321", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 5346, name: "John Doe", email: "john@example.com", number: "123453463556789", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34563, name: "Emily Johnson", email: "emily@example.com", number: "9875436654321", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34564, name: "Michael Brown", email: "michael@example.com", number: "9876345654321", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34565, name: "Sarah Davis", email: "sarah@example.com", number: "12345678234", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34566, name: "David Wilson", email: "david@example.com", number: "987654321234", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34567, name: "Emma Garcia", email: "emma@example.com", number: "1234789056789", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34568, name: "James Martinez", email: "james@example.com", number: "123456123789", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34569, name: "Olivia Anderson", email: "olivia@example.com", number: "987623456789", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34570, name: "Sophia Thomas", email: "sophia@example.com", number: "987678654321", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34571, name: "Liam Jackson", email: "liam@example.com", number: "123456897654", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
    { pid: 34572, name: "Charlotte White", email: "charlotte@example.com", number: "123459876543", imageUrl: "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=" },
  ], 
  getAll: function() { 
    return this.contacts
  }, 

  getMethod: function(pid) { 
    return this.contacts.find((contact) => contact.pid === pid)
  }, 

  AddContact: function(contact) { 
    return this.contacts.push(contact)
  }, 
  updateContact: function(updatedContact) { 
    return this.contacts = this.contacts.map((contact) => contact.pid === updatedContact.pid ? updatedContact : contact)
  }, 

  deleteContact: function(pid){
    return this.contact = this.contacts.filter((contact) => contact.pid !== pid)
  }
}