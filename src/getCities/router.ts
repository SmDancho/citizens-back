import { getCities } from './contoller';
import Router from 'express';

const router = Router();

router.get('/all', (req, res) => {
  getCities(req, res);
});

export default router;
