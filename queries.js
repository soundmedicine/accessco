const database = require("./database-connection");

module.exports = {
    list(){
        return database('establishment').select()
    },
    read(id){
        return database('establishment').where('id', id).first()
    },
    create(establishment){
        return database('establishment').insert(establishment).returning('*')
        .then(record => record[0])
    },
    update(id, establishment){
        return database('establishment').update(establishment).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('establishment').where('id', id).del()
    }
};