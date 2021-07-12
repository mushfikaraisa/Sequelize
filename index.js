const {sequelize, DataTypes, Model} = require('./db');

const { Resturant } = require('./Resturant');
const { Menu } = require('./Menu');
const { Item } = require('./Item');



Menu.belongsTo(Resturant) 
Resturant.hasMany(Menu) 

Item.belongsTo(Menu) 
Menu.hasMany(Item)

module.exports = { Resturant, Menu, Item}; 