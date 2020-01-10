const express = require('express');
const router = express.Router();

//@route    GET api/products
//@desc     Get all products
//@acces    Public
router.get('/', (req, res) => {
  res.send('Get all products');
});

//@route    POST api/products
//@desc     Add new product
//@acces    Private
router.post('/', (req, res) => {
  res.send('Add product');
});

//@route    PUT api/products
//@desc     Update product
//@acces    Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//@route    DELETE api/products
//@desc     Delete product
//@acces    Public
router.delete('/:id', (req, res) => {
  res.send('Delete product');
});

module.exports = router;
