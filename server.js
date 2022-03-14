// imports the NPM packages that are required for the functionality of the webpage
const express = require(`express`);
const path = require(`path`)
const routes = require(`./routes`)
// Tells sets the port to the specified number.
const PORT = process.env.PORT || 3001;
// setts the express function to a const named app for easy referencing.
const app = express();
// Mounting the middleware for the application.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static((__dirname, 'public')));
app.use(`/`, routes);

// Directs the client to the proper HTML location for the home page.
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/index.html`))
})
// Directs the client to the proper HTML location for the notes page.
app.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/notes.html`))
})
// Tells the application which port to be listening on. Also provides a console.log that thew server is running with an easy clickable link to the page.
app.listen(PORT, () => {
    console.log(`App is now running at http://localhost:${PORT}`)
})
