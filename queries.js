const database = require("./database-connection");

module.exports = {
    list(){
        return database('place').select()
    },
    read(id){
        return database('place').where('id', id).first()
    },
    create(place){
        return database('place').insert(place).returning('*')
        .then(record => record[0])
    },
    update(id, place){
        return database('place').update(place).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('place').where('id', id).del()
    }
};