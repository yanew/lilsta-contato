class ContactController{

	index(request, response){
		response.send("Yane ContactController");
	}

	show(){

	}

	store(){

	}

	update(){

	}

	delete(){

	}

}

//Singleton
module.exports = new ContactController();