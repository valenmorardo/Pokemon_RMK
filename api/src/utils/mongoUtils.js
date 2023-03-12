async function  deleteAllSchema(Schema) {
    return await Schema.deleteMany({})

}

module.exports = {
    deleteAllSchema
}