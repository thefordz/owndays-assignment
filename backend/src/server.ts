import exprese from "express";
import "dotenv/config";

const app = exprese();

app.use(exprese.json());
const PORT = process.env.PORT;

app.get("/health", (req, res) => {
  res.json({
    message: "Check Health",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
