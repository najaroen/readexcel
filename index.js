const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const XLSX = require('xlsx')
const app = express()


app.use(bodyParser.json());

app.use(fileUpload());



app.post('/upload', (req, res) => {
    const data = req.files.file;
    const workBook = XLSX.read(data.data)
    const sheetName = workBook.SheetNames
    const sheet = workBook.Sheets[sheetName];
    const result = XLSX.utils.sheet_to_json(sheet)
    res.send(result)

})

app.listen(3006, () => {
    console.log('running')
})

