var config = require("./config/application.json");
var gcloud = require("gcloud");

var bigquery = gcloud.bigquery({
  projectId: config.projectId,
  keyFilename: config.keyFilename,
});

var dataset = bigquery.dataset("diary1");

exports.handler = function(event, context) {
  console.log(event);
  var table = dataset.table("day1");

  var callback = function(err, insertErrors, apiResponse) {
    context.done(null, err);
  };

  table.insert({
    name: event.name,
    type: event.type,
  }, callback);
};
