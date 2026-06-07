import exprese from "express";
import "dotenv/config";
import cors from "cors";

import registrationRouter from "../src/routes/registration.route";

const app = exprese();

app.use(exprese.json());
const PORT = process.env.PORT || 3000;

const allowdOrigins = [process.env.FRONTEND_URL || "http://localhost:4000"];
app.use(cors({ origin: allowdOrigins }));

app.use("/api/registration", registrationRouter);

app.get("/health", (req, res) => {
  res.json({
    message: "Check Health",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
