const { ObjectId} = require("mongodb");
class ContactService {
    construtor(client){
        this.Contact = client.db().collection("contacts");
    }
}
module.exports = ContactService;
