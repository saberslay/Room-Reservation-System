const express = require('express')
const router = express.Router()

router.get('/info', (req, res) => {
    res.render('BookingSysteam')
})

router.get('/edit/Room-1', (req, res) => {
    res.render('editBooking')
    //req.body.Room1
})
router.get('/edit/Room-2', (req, res) => {
    res.render('editBooking')
})
router.get('/edit/Room-3', (req, res) => {
    res.render('editBooking')
})
router.get('/edit/Room-4', (req, res) => {
    res.render('editBooking')
})
router.get('/edit/Room-5', (req, res) => {
    res.render('editBooking')
})

router.get('/new/Room-1', (req, res) => {
    res.render('newBooking')
})
router.get('/new/Room-2', (req, res) => {
    res.render('newBooking')
})
router.get('/new/Room-3', (req, res) => {
    res.render('newBooking')
})
router.get('/new/Room-4', (req, res) => {
    res.render('newBooking')
})
router.get('/new/Room-5', (req, res) => {
    res.render('newBooking')
})
module.exports = router