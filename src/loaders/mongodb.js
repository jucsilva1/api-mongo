const mongoose = require('mongoose');

async function startDB() {
   await mongoose.connect('mongodb+srv://jucsilva2:RSaXQs4PnLobYtBv@cluster0.ztnmhf4.mongodb.net/test');
}
module.exports = startDB;