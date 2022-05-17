module.exports = (sequelize, dataTypes) => {
    let alias = 'ClicksByProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        numberOfClicks: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'clicksbyproducts',
        timestamps: false
    };

    const ClicksByProduct = sequelize.define(alias, cols, config);

    
    ClicksByProduct.associate =  (models) => {
        ClicksByProduct.belongsTo(models.Product, { foreignKey: "id" });
    };

    return ClicksByProduct;
}