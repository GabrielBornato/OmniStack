    const Spot = require('../models/Spot');
    const User = require('../models/User');

    module.exports = {
        async store(req,res){
            const { filename } = req.file;
            const {company, techs, price } = req.body;
            const { user_id } = req.headers;

            let user = await User.findById(user_id)
            if(!user){
                return res.status(400).json({error: 'User does nost exists'})
            }
            let spot = await Spot.findOne({thumbnail:filename,company,price,techs:techs.split(','),user: user_id})
            if(!spot){
                spot = await Spot.create({
                    thumbnail:filename,
                    company,
                    price,
                    techs:techs.split(',').map(tech=> tech.trim()),
                    user: user_id
                })
            }

            return res.json(spot)
        }
    }