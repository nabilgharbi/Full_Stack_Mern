const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
// mongodb+srv://gharbinabill:<password>@merncluster0.bwyfgub.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster0
const uri = `mongodb+srv://${username}:${pw}@merncluster0.bwyfgub.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log(`📡📡📡 Established a connection to the ${dbName} database`))
    .catch(err => console.log(" ❌❌❌❌ Something went wrong when connecting to the database", err))