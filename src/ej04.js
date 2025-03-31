import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
import { copyFile, constants } from 'node:fs/promises';
async function copiar(origen, destino) {
    try {
        await copyFile(origen, destino);
        console.log(origen + ' sus contenidos fueron copiados a' + destino);
    } 
    catch {
        console.error('El archivo no pudo ser copiado');
    }
}