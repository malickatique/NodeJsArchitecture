const path = require('path');

const loadModels = () => {
    const modelsDirParth = path.join(process.cwd(), '/src/app/models');
    const models = require('fs').readdirSync(modelsDirParth);
    models.forEach(function (model) {
        try {
            require(modelsDirParth + '/' + model);
        } catch (error) {
            console.log('Error Requiring model: ' + model);
        }
    });
};
module.exports = { loadModels };
