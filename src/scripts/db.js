let MongoClient = window.require("mongodb").MongoClient;

let uri ="mongodb+srv://r1:HBMgtE5IcLqFNIWa@clusteragh-efax4.mongodb.net/test?retryWrites=true";


function getData(callback) {
    MongoClient.connect(
        uri,
        function(err, client) {
          const collection = client.db("atlasTest").collection("xyz");
          collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(JSON.stringify(result));
            client.close();
          });
        }
    );

}


export {getData}