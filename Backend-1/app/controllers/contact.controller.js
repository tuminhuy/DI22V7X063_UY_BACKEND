/*exports.create = (req, res) => {
        res.send({message: "create handler"});
} */
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
exports.findAll = (req, res) => {
        res.send({ message: "findall hanler"});
}
exports.findOne = (req, res) => {
        res.send({message: "findOne handler"});
}
exports.update = (req, res) => {
        res.send({message: "update handler"});
}
exports.detele = (req, res) => {
        res.send({message: "delete handler"});
}
exports.deteleAll = (req, res) => {
        res.send({message: "deteleAll handler"});
}
exports.findAllFavorite = (req, res) => {
        res.send({message: "findAllFavorite handler"});
}

