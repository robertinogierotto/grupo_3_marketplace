module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100)
        },
        price: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        caract1: {
            type: dataTypes.STRING(70)
        },
        caract2: {
            type: dataTypes.STRING(70)
        },
        caract3: {
            type: dataTypes.STRING(70)
        },
        caract4: {
            type: dataTypes.STRING(70)
        },
        dailyOnSale: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING(1000)
        },
        image: {
            type: dataTypes.STRING(50)
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate =  (models) => {
        Product.belongsTo(models.ProductCategory, {
            as: "ProductCategory",
            foreignKey: "productsCategoryId"
        })
    };

    return Product
}