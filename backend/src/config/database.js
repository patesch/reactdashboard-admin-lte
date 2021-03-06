const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// module.exports = mongoose.connect('mongodb://localhost/mymoney')
const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'
module.exports = mongoose.connect(url, { useMongoClient: true })

// Traduções das mensagens padrão do Mongoose
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE} informado é menor que limite '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE} informado é maior que limite '{MAX}'."
mongoose.Error.messages.String.enum = "O '{PATH}' não é válido para o atributo '{PATH}'."
