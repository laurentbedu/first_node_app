const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.send("get all categories");
})

router.get('/:id',(req, res) => {
    res.send("get category by id=" + req.params.id);
})

router.post('/',(req, res) => {
    res.send("create new category with : " + JSON.stringify(req.body));
})

router.put('/:id',(req, res) => {
    res.send("update category by id=" + req.params.id + " with : " + JSON.stringify(req.body));
})

router.patch('/:id',(req, res) => {
    res.send("soft delete category by id=" + req.params.id);
})

router.delete('/:id',(req, res) => {
    res.send("hard delete category by id=" + req.params.id);
})

module.exports = router;