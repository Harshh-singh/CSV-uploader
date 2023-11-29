const mongoose = require('mongoose');

const fileschema = new mongoose.Schema({
    filename: {
        type: String
    },
    filepath: {
        type: String
    },
    file: {
        type: String
    }
},{
    timestamps: {
        options: { timeZone: 'Asia/Kolkata' }

    }
      })

      const Files = mongoose.model("Files", fileschema);
      
      module.exports = Files;
