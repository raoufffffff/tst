const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const PORT = process.env.PORT || 3001


app.use(cors())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./public/Images")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })


app.get('/', (req, res) => {
    res.send("hello")
})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body)
    console.log(req.file)
})




app.listen(PORT, console.log("good"))