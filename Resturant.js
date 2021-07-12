const {sequelize, DataTypes, Model} = require('./db');

// Create a Resturant Table
class Resturant extends Model {}


// Create attributes for Resturant model
Resturant.init({
	name : DataTypes.STRING,
	location: DataTypes.STRING,
}, {
	sequelize
})


module.exports = { Resturant }