const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleweare
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@portal.llxqa9q.mongodb.net/?appName=Portal`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // MongoDB Collection
    const jobsCollections = client.db("jobPortal").collection("jobs");

    // Jobs Related Api
    // Jobs Post
    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      const result = await jobsCollections.insertOne(newJob);
      res.send(result);
    });

    // Jobs get
    app.get("/jobs", async (req, res) => {
      const cursor = jobsCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get Job By Id
    app.get("/job/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollections.findOne(query);
      res.send(result);
    });

    // Update Job
    app.patch("/job/:id", async (req, res) => {
      const id = req.params.id;
      const updatedJob = req.body;
      const query = {
        _id: new ObjectId(id),
      };
      const update = {
        $set: updatedJob,
      };
      const result = await jobsCollections.updateOne(query, update);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send({
    message: "Api Working",
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
