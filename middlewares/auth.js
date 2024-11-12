exports.auth = (req, res, next) => {
    const token = 'xyz'
    const checkAuth = token === 'xyz'
    if (!checkAuth) {
        res.status(401).send(
            'unauthorize user'
        )
    } else {
        next()
    }
}

exports.userAuth = (req, res) => {
    const token = 'xyz'
    const checkAuth = token === 'xyz'
    if (!checkAuth) {
        res.status(401).send(
            'unauthorize user'
        )
    } else {
        next()
    }
}

// module.exports = auth