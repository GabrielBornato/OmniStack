    const express =  require('express');
    const routes = require('./routes');
    const moongoose = require('mongoose');

    moongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-hlsc5.mongodb.net/aplicacao?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    const app = express();

    //Para filtros

    // app.get('/users', (req,res)=>{
    //     return res.json({message: req.query.idade})
    // })

    //Para pegar o corpo da requisição

    // app.use(express.json());
    // app.post('/users', (req,res)=>{
    //     return res.json({message: req.body})
    // });

    //Para edição ou delete

    // app.put('/users/:id', (req,res)=>{
    //     return res.json({message: req.params.id});
    // });

    app.use(express.json());
    app.use(routes)

    app.listen(3333);
