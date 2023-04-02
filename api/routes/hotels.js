import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Trang hotels');
});

export default router;
