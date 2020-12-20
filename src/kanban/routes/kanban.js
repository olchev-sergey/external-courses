const { Router } = require("express");
const DataMock = require("../models/DataMockModel");
const router = Router();
const path = require('path');
const fs = require("fs");

router.get("/", async (req, res) => {
    const data = await DataMock.getFileinJson();
    console.log(data);
    const finishedTasks = data[data.length - 1].issues.length;

    const activeTasks = data.reduce((sum, currentItem) => {
        return sum + currentItem.issues.length;
    }, 0) - finishedTasks;

    res.render("board", {
        title: "kanban",
        activeTasks: activeTasks,
        finishedTasks: finishedTasks,
        userName: 'Sergey',
        userYear: 2020,
        data
    });

});


router.post('/task/addData', async (req, res) => {
    const a = req.body;
    await DataMock.addTaskToFile(a.value, a.id);
    const data = await DataMock.getFileinJson();
    res.send(data[a.id]);
});

router.get('/task/getData', async (req, res) => {
    // const a = req.body;
    const data = await DataMock.getFileinJson();

    res.send(data);
})

router.post('/task/deleteData', async (req, res) => {
    const a = req.body;
    await DataMock.deleteTaskFromFile(a.value, a.id);
    const data = await DataMock.getFileinJson();
    res.send(data[a.id]);
});

router.post('/task/deleteBlock', async (req, res) => {
    const a = req.body;
    await DataMock.deleteBlockFromFile(a.id);
    const data = await DataMock.getFileinJson();
    res.send(data);
});

router.post('/popup/addBlock', async (req, res) => {
    const a = req.body;
    console.log(a.value);
    await DataMock.addBlockToBeginFile(a.value);
    const data = await DataMock.getFileinJson();
    // console.log(data);
    res.send(data);
});

module.exports = router;
