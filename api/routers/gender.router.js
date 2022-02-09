const BaseRouter = require('./base.router');

class GenderRouter extends BaseRouter{

}

module.exports = GenderRouter;

// const express = require('express');
// const router = express.Router();

// router.get('/',(req, res) => {
//     res.send("get all genders");
// })

// router.get('/:id',(req, res) => {
//     res.send("get gender by id=" + req.params.id);
// })

// router.post('/',(req, res) => {
//     res.send("create new gender with : " + JSON.stringify(req.body));
// })

// router.put('/:id',(req, res) => {
//     res.send("update gender by id=" + req.params.id + " with : " + JSON.stringify(req.body));
// })

// router.patch('/:id',(req, res) => {
//     res.send("soft delete gender by id=" + req.params.id);
// })

// router.delete('/:id',(req, res) => {
//     res.send("hard delete gender by id=" + req.params.id);
// })

// module.exports = router;