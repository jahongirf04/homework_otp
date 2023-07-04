const express = require("express");

const app = express();

const config = require("config");

const mainRouter = require("./routes/index.routes");

const PORT = config.get("port") || 3030;

app.use(express.json());

app.use("/api", mainRouter);

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server ${PORT} - portda ishga tushdi`);
    });
  } catch (e) {
    console.log("Serverda xatolik", e);
  }
}

start();
