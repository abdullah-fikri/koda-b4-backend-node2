const expressJSDocSwagger = require('express-jsdoc-swagger');
const process = require('node:process');
function doc(app){
const docConfig = {
    info: {
      version: '1.0.0',
      title: 'Backend API',
    },
    filePattern: './src/**/*.js',
    swaggerUIPath: '/api-docs',  
    baseDir:process.cwd(),     
};
expressJSDocSwagger(app)(docConfig);

}
module.exports = doc;