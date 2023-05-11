let Freemarker = require('freemarker.js');
let fs = require('fs');
let path = require('path');
let dataModel = require('./models/Model.json');
var convert = require('xml-js');

var fm = new Freemarker({
    viewRoot: path.join(__dirname, 'temp'),
    options: {
        tagSyntax: 'autoDetect'
    }
});

var richEmailFolder = './../../rich-emails-mtb/templates';
var nlTemplates = `${richEmailFolder}/Newsletter_Subscription`; // `${richEmailFolder}/Newsletter_Subscription`; // './templates'
fs.readdir(nlTemplates, (err, files) => {
    files.forEach(fileName => {
        var fileContent = fs.readFileSync(`${nlTemplates}/${fileName}`);
        var resultXml = convert.xml2js(fileContent, { compact: true, spaces: 2 });
        fs.writeFile(`./temp/${fileName.replace('.xml', '.ftl')}`, resultXml.EmailTemplate.Template.Body._cdata, {}, (err) => {
            if (err) return console.log(err);
            createHtml(`${fileName.replace('.xml', '.ftl')}`, dataModel);
        });
    });
});

var createHtml = (templateFileName, dataModel) => {
    // Single template file
    fm.render(templateFileName, dataModel, function (err, html, output) {
        if (err) {
            return console.log(err, output);
        }

        fs.writeFile(`./html/${templateFileName.replace('.ftl', '.html')}`, html, err => {
            if (err) {
                return console.error(err);
            }

            // file written successfully
            // console.log('Html generated:', templateFileName)
            // fs.rm(`./temp/${templateFileName}`, {}, (err) => { if (err) console.log(err) });
        });
    });
}