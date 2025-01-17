import express, { json } from "express";

const app = express();

const PORT = 3000;

app.use(json());

let memoDb = [];
let id = 1;

const message = "updated"
const variableByZaw = "aishiteru"


const checkingConflict = "I am dev"



// add new coffee menu || CREATE
app.post("/", (req, res) => {
  const { name, price } = req.body;
  const newMenu = { id: id++, name, price };
  memoDb.push(newMenu);
  res.status(200).send({ message: "New menu is successfully added", newMenu });
});

//get all menu || READ
app.get("/", (req, res) => {
  res.status(200).send({ menus: memoDb });
});

//get single menu || READ
app.get("/:id", (req, res) => {
  const id = req.params.id;

  const menu = memoDb.find((m) => m.id === Number(id));

  if (!menu) res.status(404).send({ message: "Can't find menu" });

  res.status(200).send({ menu: menu });
});

//change the value of menu || UPDATE
app.put("/:id", (req, res) => {
  const id = req.params.id;

  const menu = memoDb.find((m) => m.id === Number(id));

  if (!menu) res.status(404).send({ message: "Can't find menu" });

  const { name, price } = req.body;

  menu.name = name;
  menu.price = price;

  res.status(200).send({ message: "Updated successfully", menu: menu });
});

//destory the menu || DELETE
app.delete("/:id", (req, res) => {
  const id = req.params.id;

  const menuIndex = memoDb.findIndex((m) => m.id === Number(id));

  if (!menu) res.status(404).send({ message: "Can't find menu" });

  memoDb.splice(menuIndex, 1);

  res.status(200).send({ message: "Deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`server is calculationg on http://localhost:${PORT}...`);
});
