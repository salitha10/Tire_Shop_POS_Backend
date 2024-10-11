//Item model
module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL(10, 2),
        quantity: DataTypes.INTEGER,
        image: DataTypes.STRING
    }, {
        classMethods: {
        associate: function(models) {
            Item.belongsTo(models.Category);
            Item.belongsToMany(models.Order, {through: 'OrderItem'});
        }
        }
    });
    
    return Item;
    };