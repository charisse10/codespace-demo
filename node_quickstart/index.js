const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";

// body parser
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req.body);

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('mongodemo');
    const student = database.collection('student');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { name: 'Hidena', age: '500' };
    // const result = await student.insertOne(req.body);

    // const result = await student.insertMany(req.body);

    // UPDATE
    // const result = await student.updateOne(req.body, {$set:{"age": 4000}});

    // const query = [{ name: 'Hidena', age: '500' },
    //                 { name: 'Jon', age: '1700' },
    //                 { name: 'Francisco', age: '1200' },
    //                 { name: 'Juliana', age: '600' }
    //               ];
    // const result = await student.insertMany(query);
    // console.log(result);
    console.log(result);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
