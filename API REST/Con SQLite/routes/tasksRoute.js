const express = require('express');
const tasksModel = require('../models/tasks');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const roles = await tasksModel.findAll();
        res.json(roles);
    } catch (error) {
        res.json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const role = await tasksModel.findByPk(req.params.id);
        res.json(role);
    } catch (error) {
        res.json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const role = await tasksModel.create(req.body);
        res.json(role);
    } catch (error) {
        res.json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const role = await tasksModel.update(req.body, {
            where: {
                pk: req.params.id
            }
        });
        res.json(role);
    } catch (error) {
        res.json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const role = await tasksModel.destroy({
            where: {
                pk: req.params.id
            }
        });
        res.json(role);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;