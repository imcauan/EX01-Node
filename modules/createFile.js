import fs from 'node:fs'

export function createFile(message) {
    fs.appendFile('meuarquivo.txt', message, (err) => {
        if(err) throw err
        console.log('created!');
    })
}