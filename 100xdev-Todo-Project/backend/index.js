const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/todo", async function (req, res) {
  const userPayload = req.body;
  const parsedPayload = createTodo.safeParse(userPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong input",
    });
    return;
  }

  await todo.create( {
    title: userPayload.title,
    description: userPayload.description,
    completed: false
  })

  res.json( {
    msg: "Todo created"
  })
});

app.get("/todos", async function (req, res) {
    const allTodos = await todo.find({});
    res.json( {
        allTodos
    })
});

app.put("/completed",async function (req, res) {
  const userUpdatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(userUpdatedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong input",
    });
    return;
  }
  // have some issue check afterwards
  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "Updated successfully"
  })
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});
