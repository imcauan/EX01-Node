import fs from 'node:fs'
export function deleteFile() {
    fs.unlink('meuarquivo.txt', (err) => {
        if(err) throw error
        console.log('Removed!');
    })
}