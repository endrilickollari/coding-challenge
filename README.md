# coding-challenge

## App is organized in two main folders Api and UI

#### Api folder contains api services to upload photos in a database.
#### Database is MongoDb, to test it you can download a local database.


UI folder contains Angular front end project. The layout is based on three main
tabs, in the first one you can search photos by Imgur Api, in the second one 
you can search photos with Pexels Api, and in the third one you can upload photos 
to local Db. 
Also in all this tabs, you can see the results of photos.


To run the application just go to `UI/image-api-search` and run `ng build`.
This command will generate a dist folder. This folder will be served by server side 
as static files in Nodejs app. 

After that go to `Api/src` and run `node server.js` command in terminal.

Then go to browser and go to: http://localhost:8080/home to access the app.