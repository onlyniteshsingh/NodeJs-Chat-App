const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {username: username , secret: username, first_name : username},
      { headers: {"private-key": "6558f8c7-73a3-44d8-b101-812795415102"}}
    );
    return res.status(r.status).json(r.data)
  } catch(error){
     return res.status(error.r.status).json(error.r.data)
  }
});

app.listen(3001);