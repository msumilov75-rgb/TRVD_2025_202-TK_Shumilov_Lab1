const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/tabs.json');

const DataModel = {
    getAll: () => {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    },
    saveAll: (data) => {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    },
    getById: (id) => {
        const all = DataModel.getAll();
        return all.find(item => item.id == id);
    }
};

module.exports = DataModel;