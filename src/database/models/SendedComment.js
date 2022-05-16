module.exports = (sequelize, dataTypes) => {
    let alias = 'SendedComment';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numberOfComments: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'sendedcomments',
        timestamps: false
    };

    const SendedComment = sequelize.define(alias, cols, config);

    return SendedComment;
}