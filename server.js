//importing npm express
const express = require('express');

//creating an instance of express
const app = express();
const PORT = process.env.PORT || 3003;

//Express middleware defining excepted data types
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/test', (req, res)=>{
    try {

// const test = str => {
    console.log(req.body)
        const stringToCut = req.body.string_to_cut.split('')
        let returnString = '';
        stringToCut.forEach((letter, i)=>{
            if((i!==0)&&((i+1)%3===0)){
                console.log(letter)
                returnString+=letter
            }
        })
        res.status(200).json({return_string: returnString})
        // console.log(returnString)
    // }
    } catch (err) {
        throw err
    }
})

// test('iamyourlyftdriver')

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}!!`)
);
