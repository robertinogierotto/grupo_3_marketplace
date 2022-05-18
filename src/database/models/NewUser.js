module.exports = (sequelize, dataTypes) => {
    let alias = 'NewUser';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        numberOfNewUsers: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }        
    };
    let config = {
        tableName: 'newusers',
        timestamps: false
    };

    const NewUser = sequelize.define(alias, cols, config);

    return NewUser;
}