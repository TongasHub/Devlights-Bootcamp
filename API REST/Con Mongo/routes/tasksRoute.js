const express = require('express');
const router = express.Router();
const tasks = require('../schemas/tasks');

router.get('/', (req, res) => {
    tasks.find({}, (err, tasks) => {
        if (err) {
            res.status(500).send('Error al obtener las tareas');
        } else {
            res.send(tasks);
        }})}
);

router.get('/:id', (req, res) => {
    tasks.findById(req.params.id, (err, task) => {
        if (err) {
            res.status(500).send('Error al obtener la tarea');
        } else {
            res.send(task);
        }})}
);

router.post('/', (req, res) => {
    const task = new tasks(req.body);
    task.save((err, task) => {
        if (err) {
            res.status(500).send('Error al crear la tarea');
        } else {
            res.send(task);
        }})}
);

router.put('/:id', (req, res) => {
    tasks.findByIdAndUpdate
    (req.params
        .id
        , req
            .body
        , (err, task) => {
            if (err) {
                res.status(500).send('Error al actualizar la tarea');
            } else {
                res.send(task);
            }}
    )}
);

router.delete('/:id', (req, res) => {
    tasks.findByIdAndDelete(req.params.id, (err, task) => {
        if (err) {
            res.status(500).send('Error al eliminar la tarea');
        } else {
            res.send(task);
        }})}
);

module.exports = router;