import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => res.json({msg: "OK"}));

export default router;