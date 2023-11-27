const rand = require('./random')

const sum = (a, b) => {
    return a + b
}

const deleteUserById = (array = [], id = "") => {
    return array.filter(user => user.id !== id);
}

const findUserById = (array = [], id = "") => {
    return array.find((obj) => obj.id === id)
}

const multiplyFirstByRndAndSum = (a, b) => {
    const multiplied = parseInt(rand.multiplyByRnd(a))
    return sum(multiplied,b)
}

module.exports = {
    sum,
    deleteUserById,
    findUserById,
    multiplyFirstByRndAndSum,
}