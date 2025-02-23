# Ecommerce Auto Parts Web Application

A simple ecommerce web applucation built using **Node.js, express.js,MongoDb, and EJS**

---
## Setup Instructions

### ** Prerequisites

Ensure you have following installed:

- **Node.js & npm**
- **Mongodb**
- **Homebrew** 

### Installation & Setup


node --version
npm install -g express-generator
express --version
cd (project folder)
express Vidzy


npm install 
npm install nodemon -g
npm install monk --save 
npm install ejs --save
npm install method-override --save 

// to start the server
npx nodemon ./bin/www 

//parallely mongodb needs to started before running the server
brew services start mongodb-community@6.0   // to start mongodb as a service       


#### Steps for displaying movies on start/welcome page


1. index.js: retrieve all documents from mongodb, pass them to ejs file
2. index.ejs: display all videos
3. create partials folder under views folder
4. create header.ejs and footer.ejs under partials folder
5. index.ejs: include header and footer ejs files
6. include bootstrap in header.ejs
7. Download the images and save them under public/images folder
8. Add a new attribute (images) to movie documents in mongodb
9. Show video list with images
10. Add jumbotron


#### Next steps
- Video insert (/videos/new)
- Show video details (/videos/:id)
- Delete a video