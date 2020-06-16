import * as mongoose from 'mongoose'

class Database {
    private DB_URL = 'mongodb+srv://:@cluster0-0olmq.gcp.mongodb.net/db_portal?retryWrites=true&w=majority' // TODO: ADD CREDENTIALS

    createConnection() {
        mongoose.connect(this.DB_URL, {useNewUrlParser: true})
    }
}

export default Database
