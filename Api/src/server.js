const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");
const path = require("path");
const compression = require("compression");
const rimraf = require("rimraf");
const _app_folder = 'C:/CodingChallenge/coding-challenge/UI/image-api-search/dist/photo-search';

const removeDistFolder = function () {
    rimraf(_app_folder, function (){
        console.log(`${_app_folder} successfully deleted!`);
    })
}
app.use(compression());

app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

app.all('/home', function (req, res) {
    res.status(200).sendFile(`/`, {
        root: _app_folder
    })
    console.log('File served!');
});

app.use(express.urlencoded({extended: true}));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});
