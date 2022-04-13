module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50)
        },
        lastName: {
            type: dataTypes.STRING(50)
        },
        email: {
            type: dataTypes.STRING(100)
        },
        password: {
            type: dataTypes.STRING(100)
        },
        profilePicture: {
            type: dataTypes.STRING(50)
        },
        terms: {
            type: dataTypes.STRING(10)
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate =  (models) => {
        User.belongsTo(models.UserCategory, {
            as: "UserCategory",
            foreignKey: "categoryId"
        })
    }

   /* User.associate =  (models) => {
        User.hasMany(models.UserLog, {
            as: "UserLog",
            foreignKey: "userId"
        })
    }*/

    return User
}