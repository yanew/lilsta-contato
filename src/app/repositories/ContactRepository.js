const { v4 } = require("uuid");

let contacts = [
	{
		id: v4(),
		name: "Yane",
		email: "yane@mail.com",
		phone: "98765432",
		category_id: v4(),
	},
	{
		id: v4(),
		name: "John Mayer",
		email: "jm@mail.com",
		phone: "99999999",
		category_id: v4(),
	},
];

class ContactRepository{

	create({name, email, phone, category_id}){
		return new Promise((resolve) => {
			const newContact = {
				id: v4(),
				name, email, phone, category_id
			};

			contacts.push(newContact);
			resolve();
		});
	}

	findAll(){
		return new Promise((resolve) => {
			resolve(contacts);
		});
	}

	findById(id){
		return new Promise((resolve) => {
			resolve(
				contacts.find((contact) => contact.id === id)
			);
		});
	}

	findByEmail(email){
		return new Promise((resolve) => {
			resolve(
				contacts.find((contact) => contact.email === email)
			);
		});
	}

	delete(id){
		return new Promise((resolve) => {
			contacts = contacts.filter((contact)=> contact.id !== id);
			resolve();
		});
	}

}

module.exports = new ContactRepository();