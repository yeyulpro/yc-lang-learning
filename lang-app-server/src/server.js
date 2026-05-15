
import express from 'express'
import cors from 'cors';
import dbConnection from "./config/db.js";
import expressionRoutes from './routes/expression.routes.js';
import AiRouter from './routes/ai.routes.js';
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// ===============================================
// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/ai', AiRouter);
app.use('/api/v1/expressions',expressionRoutes);

// app.use('/api/v1/users', userRoutes);

// app.use('/api/v1/daily-note', dailyNoteRoutes);
// app.use('/api/v1/quiz', quizRoutes);


// ===============================================
// DB and server connection
dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
