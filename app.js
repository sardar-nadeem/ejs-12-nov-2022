var ejs = require('ejs')
var express =require('express')
var app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')
//  var Tday = new Date()
// var day='';
// var option ={
//     weekday:"long",
//     day:"numeric",
//     month:"long",

// }
var StName = ['sardar','wadan','hmaza']
// day = Tday.toLocaleDateString('en-US',option)

app.get('/',(req,res)=>{
    res.render('Post',{stnames:StName})

})
app.post('/',(req,res)=>{
    var name = req.body.name;
    StName.push(name)
    res.render('Post',{stnames:StName})

})
// app.get('/',(req,res)=>{
//     res.render('index')
//     switch(Tday.getDay()){
//         case 6:
//             day = ' shanba'
//             res.render('index',{ Tday:day })
            

//          case 0:
//              day = 'yak shanba'
//              res.render('index',{ Tday:day })
//          case 1:
//              day = ' do shanba'
//              res.render('index',{ Tday:day })
//          case 2:
//              day = 'three shanba'
//              res.render('index',{ Tday:day })
//          case 3:
//              day = ' for shanba'
//              res.render('index',{ Tday:day })
//          case 4:
//              day = 'five shanba'
//               res.render('index',{ Tday:day })
//          case 5:
//               day = ' juma'
//               res.render('index',{ Tday:day })                                                            

//     }

// })




app.listen(4000,()=>{
    console.log("our server is runing in port 5000") 
    
})

// app.get('/',(req,res)=>{
//     res.write('<h1> this is our header </h1>')
//     res.write('<h2> this is our header </h2>')
//     res.write('<h3> this is our header </h3>')
//     res.write('<h4> this is our header </h4>')
//     res.write('<h5> this is our header </h5>')
//     res.write('<p> this is our header paaragargh</p>')
//     res.write('<h1>  <b> this is our header </b> </h1>')
//     // res.sendFile(__filename + '/index.ejs')

//     res.end()
// })