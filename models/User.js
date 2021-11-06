const { model, Schema } = require('mongoose')

const useSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
})

module.exports = model('User', useSchema)