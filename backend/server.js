const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { fileURLToPath } = require("url");
const e = require("express");

const app = express();
const PORT = 3001;
const rootDir = path.resolve(__dirname);

app.use(cors());
app.use(express.json());

const filePath = path.join(rootDir, "backend", "winners.json");
app.post("/api/winner", (req, res) => {
  const winnerData = req.body;

  fs.readFile(filePath, "utf-8", (err, data) => {
    let winnersArray = [];
    if (!err && data) {
      try {
        winnersArray = JSON.parse(data);
      } catch (parseError) {
        console.log("Error parsing JSON:", parseError);
        return res.status(500).json({ message: "Error parsing data" });
      }
    }

    winnersArray.push(winnerData);
    fs.writeFile(filePath, JSON.stringify(winnersArray), (err) => {
      if (err) {
        console.log("Error writing file:", err);
        return res.status(500).json({ message: "Error saving data" });
      }
      res.status(200).json({ message: "Winner data saved successfully" });
    });
  });
});

app.get("/api/winner", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err + "error fetching the data");
      return res.status(500).json({ message: "Error reading file" });
    }
    try {
      const parseData = JSON.parse(data);
      res.send(parseData);
    } catch (error) {
      console.log(error + "error converting the data");
    }
  });
});

const filePath2 = path.join(rootDir, "backend", "userDetails.json");
app.post("/api/data", (req, res) => {
  const body = req.body;

  console.log(body);
  fs.readFile(filePath2, "utf-8", (err, data) => {
    if (err) {
      console.log("file not found");
      return;
    }
    const parseData = JSON.parse(data);
    // const updates = bodyArr.push(parseData)
    const updatedData = [...parseData, body];

    fs.writeFile(filePath2, JSON.stringify(updatedData), "utf-8", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        res.status(500).json({ message: "Error saving data" });
      } else {
        res.status(200).json({ message: "Data saved successfully" });
      }
    });
  });
});

app.get("/api/data", (req, res) => {
  fs.readFile(filePath2, "utf-8", (err, data) => {
   //  console.log(data);
    res.send(data)
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
