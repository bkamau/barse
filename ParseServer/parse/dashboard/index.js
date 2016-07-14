var ParseDashboard = require('parse-dashboard');

let serverURL = "http://localhost:3000/parse"
if (process.env.NODE_ENV == 'production') {
  serverURL = 'https://benson.fi/parse'
}
var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": serverURL,
      "appId": "MyAppId",
      "masterKey": "MyMasterKey",
      "appName": "MyApp"
    }
  ],
  "users": [
    {
      "user": "user",
      "pass": "pass"
    }
  ]
});

module.exports = dashboard
