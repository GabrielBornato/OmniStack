    const Spot = require('../models/Spot');

    module.exports = {
        async store(req,res){
            /* const {thumbnail} = req.body;
            const {company} = req.body;
            const {price} = req.body;
            const techs = req.body.techs.split(',');

            let spot = await Spot.findOne({thumbnail,company,price,techs:techs})
            if(!spot){
                spot = Spot.create({thumbnail,company,price,techs:techs})
            }

            return res.json(spot) */

            console.log(req.body);
            console.log(req.file);

            return res.json({ok:true});
        }
    }