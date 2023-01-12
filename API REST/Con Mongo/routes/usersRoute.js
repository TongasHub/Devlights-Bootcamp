const express = require('express');
const router = express.Router();
const users = require('../schemas/users');

router.get('/', (req, res) => {
    users.find({}, (err, users) => {
        if (err) {
            res.status(500).send('Error al obtener los usuarios');
        } else {
            res.send(users);
        }})}
);

router.get('/:id', (req, res) => {
    users.findById(req.params.id, (err, user) => {
        if (err) {
            res.status(500).send('Error al obtener el usuario');
        } else {
            res.send(user);
        }})}
);

router.post('/', (req, res) => {
    const user = new users(req.body);
    user.save((err, user) => {
        if (err) {
            res.status(500).send('Error al crear el usuario');
        } else {
            res.send(user);
        }})}
);

router.put('/:id', (req, res) => {
    users.findByIdAndUpdate
    (req.params
        .id
        , req
            .body
        , (err, user) => {
            if (err) {
                res.status(500).send('Error al actualizar el usuario');
            } else {
                res.send(user);
            }}
    )});

router.delete('/:id', (req, res) => {
    users.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) {
            res.status(500).send('Error al eliminar el usuario');
        } else {
            res.send(user);
        }})}
);

module.exports = router;
