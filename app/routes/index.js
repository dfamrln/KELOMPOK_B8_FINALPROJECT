const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET - Ambil semua data
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET - Ambil data by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// POST - Tambah data baru
router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// PUT - Update data
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        await user.update({ name, email });
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// DELETE - Hapus data
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        await user.destroy();
        res.json({ success: true, message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;