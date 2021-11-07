const { ApolloServer } = require('apollo-server-express')
const { PubSub } = require('graphql-subscriptions')
const express = require('express')
const { createServer } = require('http')
const { execute, subscribe } = require('graphql')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { makeExecutableSchema, addResolversToSchema } = require('@graphql-tools/schema')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')

const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config')

const PORT = precess.env.PORT || 4000

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = createServer(app);
    const schema = makeExecutableSchema({ typeDefs, resolvers });

    const pubsub = new PubSub()
    const server = new ApolloServer({

        schema,
        plugins: [{
            async serverWillStart() {
                return {
                    async drainServer() {
                        subscriptionServer.close();
                    }
                };
            }
        },
        ApolloServerPluginDrainHttpServer({ httpServer })],
        typeDefs, resolvers,
        context: ({ req }) => ({ req, pubsub }),
    });

    const subscriptionServer = SubscriptionServer.create({
        schema,
        execute,
        subscribe,
        onOperation: (message, params, webSocket) => {
            return { ...params, context: { pubsub } }
        }
    }, {
        server: httpServer,
        path: server.graphqlPath,
    })

    await server.start()
    server.applyMiddleware({ app })

    mongoose.connect(MONGODB)
        .then(() => {
            console.log('Mongo DB Connected!!');
            return httpServer.listen({ port: PORT })
        }).catch(err=>{
            console.error(err);
        })

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)
