module.exports = (sequelize, dataTypes) => {
    let alias = 'LoggedUser';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numberOfUsers: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        },
        lastRestarted:{ 
            type: dataTypes.STRING
        }
    };
    
    let config = {
        tableName: 'loggedusers',
        timestamps: false
    };

    const LoggedUser = sequelize.define(alias, cols, config);

    return LoggedUser;
}