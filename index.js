import { createFile } from './modules/createFile.js'
import { updateFile } from './modules/updateFile.js';
import { showFile } from './modules/showFile.js'
import { deleteFile } from './modules/deleteFile.js'

createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
showFile();
updateFile("Conteúdo modificado!");
showFile();
deleteFile();
