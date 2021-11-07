<p align="center">
   <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_bf0fb4cb7fe948c42f37ded73895638f/salesforce-heroku.png" width="200" height="100" />
<img src="https://images.tutorialedge.net/images/node.png" width="100" height="100" />
 <img src="https://montykamath.files.wordpress.com/2018/02/graphql.png" width="100" height="100" />
  <img src="https://mein-aktienmarkt.de/wp-content/uploads/mongodb-logo-q.png" width="80" height="80" />
  <h3 align="center">social media server with nodeJS, graphql, mongoDB and deploy with Heroku server</h5>
  <div align="center">This project provide for React-Social-Media-Client <a href='https://github.com/petchkubb/react-social-media-client'>Click</a></div>
</p>

### Get Started
 1. Clone the repo `https://github.com/petchkubb/react-social-media-server.git`
 2. `npm install` to initial packages
 3. setup config keys in `configs/prod.js`
 
    ```
    MONGODB: 'YOUR URL ATLAS COLLECTION'
    SECRET_KEY: 'SOME TEXT FOR GENERATE JWT TOKEN'
    ```
4. `npm start` and open `http://localhost:4000/graphql` in browser or postman
5. you can see spec api for test data in `graphql/typeDefs.js` 

### About The Project

This project we will mainly learn about graphql. we will use apollo library for handle things such as init server use apllo express, connect database, etc.
apollo is fully of library to provide every thing we use for basic server with nodejs and graphql

### Refference
  https://www.youtube.com/watch?v=n1mdAPFq2Os&list=WL&index=4



!! warning for my self
   - don't forget change ip SOCIAL-MEDIA-APP to 0.0.0.0 in Atlas mongo db for access data in heroku server
