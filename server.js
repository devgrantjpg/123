const express = require('express');
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    console.log("here")
    res.render('index')

})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})