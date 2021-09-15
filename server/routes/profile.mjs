import express from 'express';
import {profileControl, homeControl} from '../controllers/profile.mjs';

const router = express.Router();

router.get('/', homeControl);
router.get('/profile', profileControl);

export default router;