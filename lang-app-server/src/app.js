import express from 'express'
import cors from 'cors';
// import authRoutes from './routes/auth.routes.js';
import expressionRoutes from './routes/expression.routes.js';
// import dailyNoteRoutes from './routes/dailyNote.routes.js';
// import quizRoutes from './routes/quiz.routes.js';


const app = express();

app.use(cors());
app.use(express.json());

//routes
// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/users', userRoutes);
app.use('/api/v1/expressions',expressionRoutes);
// app.use('/api/v1/daily-note', dailyNoteRoutes);
// app.use('/api/v1/quiz', quizRoutes);




export default app;