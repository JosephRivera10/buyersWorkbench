'use strict';

module.exports = function(sequelize, DataTypes) {
  console.log("Hi");
  var Purchase_orders = sequelize.define('Purchase_orders', {
    po_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  // Purchase_orders.associate = function(models) {
  //   models.Purchase_orders.hasMany(models.Purchase_order_lines, {
  //     onDelete: "CASCADE"
  //   });
  // };

  return Purchase_orders;
};
