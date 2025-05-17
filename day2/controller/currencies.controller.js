const { data } = require('../response.json');


const getCurrencies = (req, res) => {
    const { min_value } = req.query;

    if (min_value) {
        //http://localhost:8082/currencies?min_value=0.001
        const result = data.filter(
            (item) => Number(item.min_size) === Number(min_value)
        );
        // console.log(result)
        res.json(result);
    } else {
        //http://localhost:8082/currencies
        // console.log("else part running...")

        res.json(data);
    }
};

const getCurrenciesWithSymbol = (req, res) => {
        const { symbol } = req.params;
        const result = data.find((item) => item.id.toLowerCase() === symbol.toLowerCase());
    
        if (result) {
            res.status(200).json(result);
        }
        else{
            res.send({ message: "Invalid Symbol" });
            res.sendStatus(404);
    
        }
    }

// module.exports = getCurrencies;

module.exports = { getCurrencies, getCurrenciesWithSymbol }