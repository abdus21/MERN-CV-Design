import express from 'express';
import { allCV, createCV, deletCV, updateCV } from '../controllers/cvController.js';


const router = express.Router();

router.route('/').get(allCV).post(createCV);
router.route('/:id').delete(deletCV).patch(updateCV)


export default router