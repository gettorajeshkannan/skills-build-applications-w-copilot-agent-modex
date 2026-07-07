"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json([{ id: 1, type: 'run', duration: 30 }]);
});
router.post('/', (_req, res) => {
    res.status(201).json({ message: 'Activity logged' });
});
exports.default = router;
