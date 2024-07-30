import express from "express";
const app = express();
import { PrismaClient } from "@prisma/client";
const port = 3000;
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  console.log(req.body);
  await prisma.$connect();
  const cr_usr_dat = await prisma.user.create({ data: req.body });
  res.send(cr_usr_dat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
