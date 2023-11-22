/*exports.create = (req, res) => {
        res.send({message: "create handler"});
} */
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
exports.create = async (req, res, next) => {
        if (!req.body?.name){
                return next(new ApiError(400, "Name can not be empty"));
        }
        try {
                const contactService = new ContactService(MonogoDB.client);
                const document = await contactService.create(req.body);
                return res.send(documnet);
        } catch (error) {
                return next (
                        new ApiError(500, "An error occurred while creating the contact")
                );
        }
};
exports.findAll = async (req, res, next) => {
        let documents = [];
        try {
                const contactService = new ContactService(MongoDB.client);
                const { name } = req.query;
                if (name) {
                        documents = await contactService.findByName(name);
                } else {
                        documents = await contactService.find({});
                }
        } catch (error){
                return next(
                        new ApiError(500, "An error occurred while retrieving contacts")
                );
        }
        return res.send(documents);
};
exports.findOne = async (req, res, next) => {
        try {
                const contactService = new ContactService(MongoDB.client);
                const document = await contactService.findById(req.params.id);
                if (!document) {
                        return next(new ApiError(404, "Contact not found"));
                }
                return res.send(document);
         } catch(error){
                return next (
                        new ApiError(500,' Error retrieving contact with id=${req.params.id}')
                )

                 }
                                
        };

exports.update = async (req, res, next) => {
        if (Object.keys(req.body). length = 0) {
                return next(new ApiError(400, "data to update can not be empty"));
        }
        try {
                const contactService = new ContactService(MongoDB.client);
                const document = await contactService.update(req.params.id, req.body);
                if(!document) {
                        return next(new ApiError(404, "contact not found "));
                }
                return res.send({ message: "contact was update successfully"});
        } catch(error) {
                return next(
                        new ApiError(500, 'Error updating cotact with id=${req.params.id}')
                );
        }
};
exports.detele = async (req, res, next) => {
        try {
                const contactService = new ContactService(MongoDB.client);
                const document = await contactService.detele(req.params.id);
                if (!document){
                        return next(new ApiError(404, "contact not found"));
                }
                return res.send({ message: "contact was deleted successfully"});
        } catch (error) {
                return next( 
                        new ApiError(500, 'could not deltete contact with id=${req.params.id}')
                );
        }
};
exports.deteleAll = async (_req, res, next) =>{ 
        try {
                const contactService = new ContactService(MongoDB.client);
                const deletedCount = await contactService.deteleAll();
                return res.send({
                        message : '${deletedCount} contacts wew deled successfully'
                });
        } catch (error) {
                return next(
                new ApiError(500, "an error occurred while removing all contacts")
        );
}
};
exports.findAllFavorite = async (_req, res, next) => {
        try {
                const contactService = new ContactService(MongoDB.client);
                const documents = await contactService.findFavorite();
                return res.send(documents);
        } catch (error) {
                return next(
                        new ApiError(500, "An error occurred while retrieving favorite contacts")
                );
        }
};

