"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.DB_URL = 'mongodb+srv://:@cluster0-0olmq.gcp.mongodb.net/db_portal?retryWrites=true&w=majority'; // TODO: ADD CREDENTIALS
    }
    createConnection() {
        mongoose.connect(this.DB_URL, { useNewUrlParser: true });
    }
}
exports.default = Database;
