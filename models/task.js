'use strict';
module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        content: DataTypes.TEXT,
        user_id: DataTypes.INTEGER,
        cat_id: DataTypes.INTEGER,
        compeletedAt:DataTypes.DATE,
        deletedAt:DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Task;
};
