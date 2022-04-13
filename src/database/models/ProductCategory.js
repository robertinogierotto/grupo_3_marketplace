module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(15)
        }
    };
    let config = {
        tableName: 'productscategory',
        timestamps: false
    };
    
    const ProductCategory = sequelize.define(alias, cols, config)

    ProductCategory.associate = (models)=> {
        ProductCategory.hasMany(models.Product, { 
            as: "Product", 
            foreignKey: "productsCategoryId"
        })
    }
    return ProductCategory
}