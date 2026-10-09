import { readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

async function somarArquivos(dir, extensoes) {
  let total = 0;
  let arquivos = 0;
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) {
      const resultado = await somarArquivos(caminho, extensoes);
      total += resultado.total;
      arquivos += resultado.arquivos;
    } else if (extensoes.includes(extname(entrada.name))) {
      total += (await stat(caminho)).size;
      arquivos++;
    }
  }
  return { total, arquivos };
}

const extensoes = ['.html', '.css', '.js'];
let original = { total: 0, arquivos: 0 };
for (const pasta of ['html', 'css', 'js']) {
  const resultado = await somarArquivos(pasta, extensoes);
  original.total += resultado.total;
  original.arquivos += resultado.arquivos;
}
const producao = await somarArquivos('dist', extensoes);
const reducao = (1 - producao.total / original.total) * 100;
console.log('\n=== Medição dos arquivos HTML, CSS e JS (sem imagens) ===');
console.log(`Originais: ${original.total} bytes (${original.arquivos} arquivos)`);
console.log(`Build Vite: ${producao.total} bytes (${producao.arquivos} arquivos)`);
console.log(`Redução total aproximada: ${reducao.toFixed(2)}%`);
console.log('Nota: o resultado inclui empacotamento, transformação e minificação.');
