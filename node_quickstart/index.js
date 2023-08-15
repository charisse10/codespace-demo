const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('mongodemo');
    const student = database.collection('student');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { name: 'Hidena', age: '500' };
    // const result = await student.insertOne(query);

    const query = [{ name: 'Hidena', age: '500' },
                    { name: 'Jon', age: '1700' },
                    { name: 'Francisco', age: '1200' },
                    { name: 'Juliana', age: '600' }
                  ];
    const result = await student.insertMany(query);

    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);