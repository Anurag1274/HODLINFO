const express = require('express')
const router = express.Router()
const {fetchData, getData} = require('../controller/controller')

router.get("/fetch-data", fetchData)
router.get("/get-data", getData)

module.exports = router;