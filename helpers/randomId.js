// generates a random ID that is attached to the notes.

function randomIdGen() {
    let idIndexArr = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
    let output = ``
    for (let i = 0; i < 10; i++) {
        output += idIndexArr[Math.floor(Math.random() * 8)];
    }
    return output
}

module.exports = { randomIdGen }

