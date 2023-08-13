import { getCitizens } from './contoller';
import Router from 'express';

const router = Router();

router.get('/all', (req, res) => {
  getCitizens(req, res);
});

export default router;
