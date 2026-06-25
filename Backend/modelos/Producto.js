const { DataTypes } = require("sequelize");
const sequelize = require("../db/Connection");

const Producto = sequelize.define(
  "product_v6",
  {
    partNumber: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    productType: DataTypes.STRING,

    category: {
      type: DataTypes.STRING,
      field: "category.code",
    },

    brand: {
      type: DataTypes.STRING,
      field: "brand.code",
    },

    family: {
      type: DataTypes.STRING,
      field: "family.code",
    },

    line: {
      type: DataTypes.STRING,
      field: "line.code",
    },

    productSegment: {
      type: DataTypes.STRING,
      field: "productSegment.code",
    },

    status: DataTypes.STRING,
    value: DataTypes.DOUBLE,
    valueCurrency: DataTypes.STRING,
    defaultQuantityUnits: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    plannerCode: DataTypes.STRING,
    sourceLink: DataTypes.STRING,
  },
  {
    tableName: "product_v6",
    timestamps: false,
  }
);

module.exports = Producto;