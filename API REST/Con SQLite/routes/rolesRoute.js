const express = require('express');
const rolesModel = require('../models/roles');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const roles = await rolesModel.findAll();
        res.json(roles);
    } catch (error) {
        res.json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const role = await rolesModel.findByPk(req.params.id);
        res.json(role);
    } catch (error) {
        res.json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const role = await rolesModel.create(req.body);
        res.json(role);
    } catch (error) {
        res.json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const role = await rolesModel.update(req.body, {
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
        const role = await rolesModel.destroy({
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