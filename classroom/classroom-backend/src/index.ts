import express from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";
const app = express();
const PORT = 8000;

if(!process.env.FRONTEND_URL) throw new Error('FRONTEND_URL did not found, please check it!')

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Classroom API!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
