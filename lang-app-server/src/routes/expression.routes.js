import express from 'express';
import { getExpressions } from '../controllers/expression.controller.js';


const router = express.Router();

router.get('/', getExpressions);
// router.get('/:id', getExpressionById);
// router.post('/', createExpression);
// router.put('/:id', updateExpression);
// router.delete('/:id', deleteExpression);

export default router;