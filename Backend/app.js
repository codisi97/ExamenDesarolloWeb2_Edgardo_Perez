const express = require("express");
const cors = require("cors");
const sequelize = require("./db/Connection");
const PORT = 5000;
const Producto = require("./modelos/Producto");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/promedio-categoria", async (req, res) => {
  try {
    const result = await Producto.findAll({
      attributes: [
        "category",
        [sequelize.fn("AVG", sequelize.col("value")), "valor_promedio"],
      ],
      group: ["category"],
    });

    if (result.length > 0) {
      res.status(200).json({
        message: "Valor promedio por categoria",
        data: result,
      });
    } else {
      res.status(400).json({
        message: "No se encontraron datos",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el valor promedio por categoria",
      error: error.message,
    });
  }
});

app.get("/productos-marca", async (req, res) => {
  try {
    const result = await Producto.findAll({
      attributes: [
        [sequelize.col("brand.code"), "brand"],
        [sequelize.fn("COUNT", sequelize.col("brand.code")), "cantidad_productos"],
      ],
      group: [sequelize.col("brand.code")],
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener productos por marca",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});