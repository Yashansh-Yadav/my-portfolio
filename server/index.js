const express = require('express');
const app = express();
const mysql = require('mysql')
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');


const db = mysql.createPool({
    host: "localhost",
    database: "my_portfolio",
    user: "root",
    password: "password"
})

const Upload = multer({ storage: multer.memoryStorage() })

app.use(cors());
app.use(express.json({}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));


app.post("/api/insert", Upload.single('my_image'), (req, res) => {
    const pf_image = req.body.my_image;
    const pf_title = req.body.pf_title;
    const pf_desc = req.body.pf_desc;
    const pf_link = req.body.pf_link;
    const pf_linkName = req.body.pf_linkName


    const pf_showButton = req.body.pf_showButton;

    const sqlInsert = "INSERT INTO my_portfolio( pf_title , pf_desc , pf_image , pf_link , pf_linkName , pf_showButton ) Value(?,?,?,?,?,?)"
    db.query(sqlInsert, [pf_title, pf_desc, pf_image, pf_link, pf_linkName, pf_showButton], (err, result) => {
        if (err) {
            console.log(err);
        }
    })
})

app.post("/api/Project_data_insert", Upload.single('my_image'), (req, res) => {

    const proj_title = req.body.proj_title;
    const proj_desc = req.body.proj_desc;
    const proj_link = req.body.proj_link;
    const proj_image = req.body.proj_image;
    const proj_CarouselImg = req.body.proj_CarouselImg

    const sqlInsert = "INSERT INTO projectData( proj_title , proj_desc , proj_link , proj_image , proj_CarouselImg) Value(?,?,?,?,?)"
    db.query(sqlInsert, [proj_title, proj_desc, proj_link, proj_image, proj_CarouselImg], (err, result) => {
        if (err) {
            console.log(err);
        }
    })
})

app.post('/api/vsitor_Insert', (req, res) => {
    const V_name = req.body.V_name;
    const V_email = req.body.V_email;
    const V_feedback = req.body.V_feedback;
    const V_PfRating = req.body.V_PfRating;

    const sqlInsert = "INSERT INTO visitorResponce( V_name , V_email , V_feedback , V_PfRating  ) Value(?,?,?,?)"
    db.query(sqlInsert, [V_name, V_email, V_feedback, V_PfRating], (err, result) => {
        if (err) {
            console.log(err);
        }
    })
})


app.post('/api/Contact_insert', (req, res) => {
    const con_About = req.body.con_About;
    const con_emailLink = req.body.con_emailLink;
    const con_fbLink = req.body.con_fbLink;
    const con_instaLink = req.body.con_fbLink;
    const con_instaPage = req.body.con_instaPage;
    const con_linkdInLink = req.body.con_linkdInLink;
    const con_GitLink = req.body.con_GitLink
    const myResume = req.body.myResume

    const sqlInsert = "INSERT INTO my_contactData( con_About , con_emailLink , con_fbLink , con_instaLink , con_instaPage , con_linkdInLink , con_GitLink , myResume) Value(?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [con_About, con_emailLink, con_fbLink, con_instaLink, con_instaPage, con_linkdInLink, con_GitLink, myResume], (err, result) => {
        if (err) {
            console.log(err);
        }
    })
})


app.get("/api/get", (req, res) => {
    const sqlget = "SELECT * FROM my_portfolio"
    db.query(sqlget, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

app.get("/api/getVistorsData", (req, res) => {
    const sqlGetVistorsData = "SELECT * FROM visitorresponce"
    db.query(sqlGetVistorsData, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

app.get("/api/getProjectData", (req, res) => {
    const sqlGetProject = "SELECT * FROM projectData"
    db.query(sqlGetProject, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

app.get("/api/getContactData", (req, res) => {
    const sqlGetContactData = "SELECT * FROM my_contactData"
    db.query(sqlGetContactData, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})
app.listen(3001, () => {
    console.log("runnig on server 3001");
})

