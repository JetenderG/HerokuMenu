module.exports = function (sequelize, DataTypes) {


    var Review = sequelize.define("review", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },

        ratings: {
            type: DataTypes.STRING(50),
            null: false
        },

        comments: {
            type: DataTypes.STRING(255),
            null: false

        },

        createdBy: {

            type: DataTypes.STRING(255),
            null: false
        }

    });

    ;
    Review.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Review.belongsTo(models.resturants, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Review


};