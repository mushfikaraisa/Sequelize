const {sequelize} = require('./db');
const {Resturant, Menu , Item} = require('./index')

describe('Resturant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a resturant', async () => {
        const resturant = await Resturant.create({ name: 'Dimasis', location: 'Dallas' })
        expect(resturant.name).toBe("Dimasis")
    })

    test('can create a menu', async () => {
        const menu = await Menu.create({ entree: 'Chicken', deserts: 'Choclatecake' })
        expect(menu.entree).toBe("Chicken")
    })

    test('can create a item', async () => {
        const item = await Item.create({ name: 'Chickendinner', cost: 21 })
        expect(item.cost).toBe(21)
    })

    test('Resturant can have menu', async() => {
        const Dimasis = await Resturant.create({ name: 'Dimasis', location: "Dallas" })
        
        const Chickendinner = await Menu.create({ name: 'Chickendinner' ,deserts:"Choclatecake" });
        
        const Chicken = await Item.create({ name: 'Chicken' });
       
        await Chickendinner.addItem(Chicken)
     
        const item = await Chickendinner.getItems()
       
      
        expect(item.length).toBe(1)
        
        expect(item[0] instanceof Item).toBeTruthy
    })

})