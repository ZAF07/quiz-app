import express from 'express';
import {profileControl, javascriptQnA} from '../controllers/profile.mjs';

const router = express.Router();

router.get('/', javascriptQnA);
router.get('/profile', profileControl);

export default router;