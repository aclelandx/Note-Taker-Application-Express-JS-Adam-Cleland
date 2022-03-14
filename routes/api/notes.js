// Import required NPM packaged for the functionality of the application
const notesRouter = require("express").Router();
const fs = require(`fs`);
const { randomIdGen } = require(`../../helpers/randomId`)

// on the get request in the notes endpoint read into the JSON file and return the information.
notesRouter.get(`/`, (req, res) => {
    fs.readFile(`./db/db.json`, `utf8`, (err, data) => {
        !err ? res.json(JSON.parse(data)) : console.error(err);
    })
});

// on a get request, take the requests information and format it into json and then pushes it into the JSON db file of previously saved notes.
notesRouter.post(`/`, (req, res) => {
    fs.readFile(`./db/db.json`, `utf8`, (err, data) => {
        !err ? res.status(200).json(`Everything is working so far`) : console.log(err);
        let addedNote = {
            title: `${req.body.title}`,
            text: `${req.body.text}`,
            id: `${randomIdGen()}`,
        };
        const dbInformation = JSON.parse(data)
        dbInformation.push(addedNote);
        fs.writeFile(`./db/db.json`, JSON.stringify(dbInformation, ``, 4), (err, data) => {
            !err ? console.log(`file updated`) : console.error(err);
        });
    });
});

// Deletes a note from the database
notesRouter.delete(`/:id`, (req, res) => {
    fs.readFile(`./db/db.json`, `utf8`, (err, data) => {
        !err ? res.status(200).json(`Everything is working so far`) : console.log(err);
        let dbInformation = JSON.parse(data);
        dbInformation.splice(req.body.id, 1);
        fs.writeFile(`./db/db.json`, JSON.stringify(dbInformation, ``, 4), (err, data) => {
            !err ? console.log(`item removed from file`) : console.error(err);
        });
    });
});



module.exports = notesRouter;
