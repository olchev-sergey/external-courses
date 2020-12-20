
/*eslint no-param-reassign: ["error", { "props": false }]*/

const path = require('path');
const fs = require('fs');

class DataMockModel {
    constructor(fileUrl) {
        this.url = fileUrl;
    }

    async writeFile(jsonData) {
        const promise = new Promise((res, rej) => {
            fs.writeFile(this.url, JSON.stringify(jsonData, null, 4), (err) => {
                if (err) {
                    console.log(err);
                    rej(err);
                }
                
                res(true);
            });
        })

        try {
            const t = await promise;
            // console.log(t);
        } catch(e) {
            console.log(e);
        }
    }

    async readFile() {
        const promise = new Promise((res, rej) => {
            fs.readFile(this.url, 'utf-8', (err, data) => {
                if (err) {
                    throw err;
                }

                const fileContent = data;

                res(fileContent);
            })
        });

        const data = await promise;
        return data;
        
    }

    async getFileinJson() {
        try {
            const data = await this.readFile();
            const jsonData = JSON.parse(data);
            return jsonData;
        } catch(e) {
            console.log(e);
        }


        return null;
    }

    updateTaskId(jsonData) {
        jsonData.forEach((elem, i) => {
            elem.id = `task${i+1}`;
        });
    }

    async addBlockToBeginFile(title) {
        const fileData = await this.getFileinJson();

        console.log(fileData);
        console.log('------------------------');
        fileData.unshift({
            "title": title,
            "issues": [],
        });

        console.log(fileData);
        await this.writeFile(fileData);
    }

    async deleteBlockFromFile(id) {
        const fileData = await this.getFileinJson();

        const targetBlock = fileData[id];

        fileData.splice(id, 1);
        await this.writeFile(fileData);

    }


    async addTaskToFile(data, id) {
        const fileData = await this.getFileinJson();

        const targetData = fileData[id];
        targetData.issues.push({
            "id": "task" + (targetData.issues.length + 1),
            "name": data + ""
        });

        await this.writeFile(fileData);
    }  

    async deleteTaskFromFile(data, id) {
        const fileData = await this.getFileinJson();

        const targetData = fileData[id];
        const deleteId = targetData.issues.findIndex((elem) => elem.name === data);
        targetData.issues.splice(deleteId, 1);
        this.updateTaskId(targetData.issues);
        await this.writeFile(fileData);
        console.log('succes');
    }  

}

const model = new DataMockModel(path.join(__dirname, '../dataBase/dataMock.js'));

module.exports = model;