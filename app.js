const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/productdetails',
{useNewUrlParser:true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

db.once('open',function(){
    console.log('Connected to MongoDB')

    app.listen(app.get('port'),function(){
        console.log('API Server Listening on port ' + app.get('port') + '!')
    })
}) 