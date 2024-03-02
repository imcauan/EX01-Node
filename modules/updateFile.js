import fs from 'node:fs'
export function updateFile(newMessage) {
    fs.appendFile('meuarquivo.txt', newMessage, (err) => {
        if(err) throw err
        console.log('Updated!');
    }) 
}