const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/predicted-price', (req,res) => {
	res.json({
		'symbol'	: 'GOOGL',
		'price'		: 50000	
	})
})



app.listen(3000, () => {
	console.log("Server running on port 3000");
});


