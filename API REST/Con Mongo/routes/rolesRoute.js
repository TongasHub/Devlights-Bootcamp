const express = require('express');
const router = express.Router();
const roles = require('../schemas/roles');



router.get('/', (req, res) => {
    roles.find({}, (err, roles) => {
        if (err) {
            res.status(500).send('Error al obtener los roles');
        } else {
            res.send(roles);
        }})});


router.get('/:id', (req, res) => {
    roles.findById(req.params.id, (err, role) => {
        if (err) {
            res.status(500).send('Error al obtener el rol');
        } else {
            res.send(role);
        }})});


router.post('/', (req, res) => {
    const role = new roles(req.body);
    role.save((err, role) => {
        if (err) {
            res.status(500).send('Error al crear el rol');
        } else {
            res.send(role);
        }})});


router.put('/:id', (req, res) => {
    roles.findByIdAndUpdate
    (req.params
        .id
        , req
            .body
        , (err, role) => {
            if (err) {
                res.status(500).send('Error al actualizar el rol');
            } else {
                res.send(role);
            }}
    )});


router.delete('/:id', (req, res) => {
    roles.findByIdAndDelete(req.params.id, (err, role) => {
        if (err) {
            res.status(500).send('Error al eliminar el rol');
        } else {
            res.send(role);
        }})}
);


module.exports = router;