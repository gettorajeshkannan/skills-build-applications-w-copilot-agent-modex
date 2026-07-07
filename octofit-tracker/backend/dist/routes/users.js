"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json([{ id: 1, name: 'Ada', role: 'admin' }]);
});
router.post('/', (_req, res) => {
    res.status(201).json({ message: 'User created' });
});
exports.default = router;
