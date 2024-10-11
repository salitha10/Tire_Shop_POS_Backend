//Orders model
module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define('Order', {
        total: DataTypes.DECIMAL(10, 2),
        status: DataTypes.STRING,
        purchased_date: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                Order.belongsTo(models.User);
                Order.belongsToMany(models.Item, {through: 'OrderItem'});
            }
        }
    });
    
    return Order;
};