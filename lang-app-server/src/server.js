
import express from 'express'
import cors from 'cors';
import dbConnection from "./config/db.js";
import expressionRoutes from './routes/expression.routes.js';
import AiRouter from './routes/ai.routes.js';
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ===============================================
// Routes
app.use('/api/v1/ai', AiRouter);
app.use('/api/v1/expressions',expressionRoutes);
// app.use('/api/v1/auth', authRoutes);
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
