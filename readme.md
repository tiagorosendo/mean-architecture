# mean-architecture
Demo project to test the mean architecture

##Presentation
This project show how to implements things like : 
1. **the customer part** : which implements interactions (CRUD) between the SPA and the server (with ng-resources)
2. **the chat part** : which implements interactions in real time between the SPA and the server (with socket.io)
  
This project use several technologies like :
* mongodb (the database) 
* angular (the spa framework)
* nodejs (the server)
* express (the framework for the server)
* body-parser
* ejs (a template engine)
* express (the node framework)
* socket.io (for RTC)
* mongoose (the odm for mongodb)

##Setup Demo
* clone the project :
```shell
git clone git@github.com:Webdown404/mean-architecture.git
```
* run the command on the projects root :
```shell
npm install
```
* install bower packages on the projects root :
```shell
bower install
```
* extract only needed files into the client/libs repository :
```shell
bower-installer
```

* start mongodb :
```shell
mongod --dbpath ./mydb
```

* start the server :
```shell
node server.js
```