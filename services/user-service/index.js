const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "user-service",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
