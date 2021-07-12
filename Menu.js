const {sequelize, DataTypes, Model} = require('./db');

// Create a Menu Table
class Menu extends Model {}


// Create attributes for Menu model
Menu.init({
	entree : DataTypes.STRING,
    deserts: DataTypes.STRING,
    
}, {
	sequelize
})


module.exports = { Menu}