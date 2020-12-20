const { Router } = require("express");
const DataMock = require("../models/DataMockModel");
const router = Router();
const path = require('path');
const fs = require("fs");

router.get("/", async (req, res) => {
    const data = await DataMock.getFileinJson();
    
    res.render("board", {
        title: "kanban",
        data
    });

});


router.post('/task/addData', async (req, res) => {
    const a = req.body;
    await DataMock.addTaskToFile(a.value, a.id);
    const data = await DataMock.getFileinJson();
    res.send(data[a.id]);
});

router.post('/task/deleteData', async (req, res) => {
    const a = req.body;
    await DataMock.deleteTaskFromFile(a.value, a.id);
    const data = await DataMock.getFileinJson();
    res.send(data[a.id]);
});

module.exports = router;
