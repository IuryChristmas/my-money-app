module.exports = (req, res, next) => {
    res.header('Access-Cotrol-Allow-Origin', '*')
    res.header('Access-Cotrol-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Cotrol-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}