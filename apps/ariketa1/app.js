const session = require('express-session')
const express = require("express");
const app = express()

const PORT = 3000;

const sess = {
    secret: 'ausazko hitz multzoa',
    cookie: {
      resave: false,
      saveUninitialized: false,
    
    }
}

app.use(session(sess))


// Access the session as req.session
app.get('/', function(req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})