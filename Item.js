const {sequelize, DataTypes, Model} = require('./db');

// Create a Item Table
class Item extends Model {}


// Create attributes for Item model
Item.init({
	name : DataTypes.STRING,
    cost: DataTypes.NUMBER,
    
}, {
	sequelize
})


module.exports = {Item}