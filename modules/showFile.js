import fs from 'node:fs'
export function showFile() {
    fs.readFile('meuarquivo.txt', 'utf-8', (err, data) => {
        if(err) throw err
        console.log(data);
    })   
}