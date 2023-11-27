const multiplyByRnd = (a) => {
    const randomInt = Math.floor(Math.random() * 100)
    return (a * randomInt)
}
module.exports = { multiplyByRnd }
