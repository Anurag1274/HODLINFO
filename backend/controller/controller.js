const { default: axios } = require('axios');
const Model = require("../models/model");

const fetchData = async (req, res) => {
  try {
    const response = await axios(process.env.WAZIR_X_URL);
    const data = Object.values(response.data).slice(0, 10);

    await Model.deleteMany();

    const Data = data.map((item) => ({

      name: item.name,
      last: item.last,
      buy: item.buy,
      sell: item.sell,
      volume: item.volume,
      base_unit: item.base_unit,

    }));

    await Model.insertMany(Data);
    return res.status(200).json({ message: "Data fetched Successfully from WazirX" });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).send("Error fetching data");
  }
};


const getData = async (req, res) => {

    try {
        const data = await Model.find()
        return res.json(data)
        
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).send("Error fetching data");
    }
}

module.exports = {
    fetchData,
    getData
}