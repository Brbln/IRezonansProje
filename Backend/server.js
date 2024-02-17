const express = require("express");
const errorHandler = require("./Middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


connectDb();
const app = express();

app.use(express.json());
app.use("/api/contacts",require("./Routes/contactRoutes"));
app.use("/api/users",require("./Routes/userRoutes"));
app.use("/api/admins",require("./Routes/adminRoutes"));
app.use("/api/randevus",require("./Routes/randevuRoutes"));
app.use("/api/videos",require("./Routes/videoRoutes"));
app.use(errorHandler);

const options = {
    definition: {
      openapi: "3.1.0",
      info:{
          title:"İlkadım Rezonans & Zayıflama",
          version:"1.0.0"
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./api/contacts", "./api/users","./api/admins","./api/randevus","./api/videos"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCssUrl:
        "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
    })
  );


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
