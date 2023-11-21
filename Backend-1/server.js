/*const app = require("./app");
const config = require("./app/config");
//start server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log('server is running on port ${PORT}.')
}); */

const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log('server is running on port ${PORT}');
        });
    } catch (error;) {
        console.log("cannot connect to the databsae!", error);
        process.exit();
    }
}
startServer();

