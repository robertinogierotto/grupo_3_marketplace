module.exports = (sequelize, dataTypes) => {
    let alias = 'VisitedPage';
    let cols = {
        page: {
            type: dataTypes.STRING(50),
            primaryKey: true,
        },
        numberOfvisits: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        },
        url: {
            type: dataTypes.STRING(50),
        },
        lastRestarted:{ 
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'visitedpages',
        timestamps: false
    };

    const VisitedPage = sequelize.define(alias, cols, config);

    return VisitedPage;
}