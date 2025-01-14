import app from "./main";
import { DataSource } from "typeorm"; // using this datasource we are going to connect to db
import "reflect-metadata";

const AppDataSource = new DataSource({
  type: "postgres",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  entities: ["src/entities/*{.ts, .js}"], // it means find all the files with the extension of .ts or .js in src folder
  synchronize: true,
  // logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Something unexpected happened " + err);
  });

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is listening on port ${PORT}`);
});
