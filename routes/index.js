var express = require('express');
var router = express.Router();
const xml2js = require('xml2js');

/* GET Index page. */
router.get('/',async (req, res) => {
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
            <user id="1">
                <name>John Doe</name>
                <email>john.doe@example.com</email>
                <roles>
                    <role>Member</role>
                    <role>Admin</role>
                </roles>
                <admin>true</admin>
            <user>`

    // convert XML to JSON
    xml2js.parseString(xml, (err, result) => {
    if (err) {
        console.log("malunformed xml")
    }

    // `result` is a JavaScript object
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4)

    // log JSON string
    console.log(json)
    })
    res.render('index');
})

module.exports = router;