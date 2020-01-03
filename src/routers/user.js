const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const app = express()

/* Create new User API Start */
// router.post('/createUser', async (req, res) => {
//     const user = new User({
//         ...req.body
//     })
//     try {
//         // await user.save()
//         // res.status(201).send(user)
//         let data = {
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password,
//         };
//         let sql2 = "INSERT INTO customers (name, email, password) VALUES ( ?, ?, ?)";
//         con.query(sql2, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//             res.status(201)
//         });

//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

router.post('/createUser', async (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    let sql = "INSERT INTO customers SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});
/* Create new User API End */

/* Read all User API Start */
router.get('/users', async (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})
/* Read all User API End */

module.exports = router