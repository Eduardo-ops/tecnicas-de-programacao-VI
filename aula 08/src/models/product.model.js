module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        valor: DataTypes.STRING,
        quantidade: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true
    })
    return Product
}