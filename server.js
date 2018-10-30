const express = require("express");
const axios = require("axios");

const app = express();
const API_KEY = "87ff0da2-4bcc-4008-bb27-2446a2ebf453";

app.set("port", process.env.PORT || 3000);

// USING COINMARKETCAP PRO - PUBLIC API WILL BE DEPRECATED ON DEC 4 2018
// API_KEY = 87ff0da2-4bcc-4008-bb27-2446a2ebf453

// USABLE END POINTS ARE:
// The API we're using for grabbing metadata about each cryptocurrency
// (including logo images). The service can be found at:
// https://www.cryptocompare.com/api/

//
// Get Coin Data:
// https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=EUR&CMC_PRO_API_KEY=87ff0da2-4bcc-4008-bb27-2446a2ebf453
//
// Get Global Data:
// https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?convert=EUR

// #TODO Replace with new coinmarketcap API
// Get Coins

const options = {
  headers: {
    "X-CMC_PRO_API_KEY": API_KEY
  }
}

// Fetch coin data
app.get("/api/coins", function(req, res) {
  axios
    .get("https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=100", options)
    .then(function(response) {
      res.setHeader("Cache-Control", "no-cache");
      res.json(response.data);
    })
    .catch(function(error) {
      console.log("api call failed :(", error);
    });
});

// Get Market Data
app.get("/api/market_data", function(req, res) {
  axios
    .get("https://api.coinmarketcap.com/v2/global/?convert=EUR", options)
    .then(function(response) {
      res.setHeader("Cache-Control", "no-cache");
      res.json(response.data);
    })
    .catch(function(error) {
      console.log("api call failed :(", error);
    });
});

// GET METADATA
app.get("/api/coin_metadata", function(req, res) {
  axios
    .get("https://www.cryptocompare.com/api/data/coinlist")
    .then(function(response) {
      res.setHeader("Cache-Control", "no-cache");
      res.json(response.data);
    })
    .catch(function(error) {
      console.log("api call failed :(", error);
    });
});


app.listen(app.get("port"), function() {
  console.log("Find the server at http://localhost" + app.get("port"));
});
