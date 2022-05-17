module.exports = (sequelize, dataTypes) => {
    let alias = 'VisitedPage';
    let cols = {
        id: {
            type: dataTypes.STRING(50),
            primaryKey: true,
        },
        numberOfvisits: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'visitedpages',
        timestamps: false
    };

    const VisitedPage = sequelize.define(alias, cols, config);

    return VisitedPage;
}