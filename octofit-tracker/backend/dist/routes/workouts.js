"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json([{ id: 1, title: 'HIIT', difficulty: 'medium' }]);
});
router.post('/', (_req, res) => {
    res.status(201).json({ message: 'Workout suggested' });
});
exports.default = router;
