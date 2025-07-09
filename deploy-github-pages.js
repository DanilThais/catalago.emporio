#!/usr/bin/env node

/**
 * Script personalizado para deploy no GitHub Pages
 * Resolve problemas de path muito longo no Windows
 * Convertido para ES modules
 */

import ghpages from 'gh-pages';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obter __dirname em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const deployOptions = {
  branch: 'gh-pages',
  dest: '.',
  dotfiles: true,
  message: `Deploy: ${new Date().toISOString()}`,
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  }
};

console.log('🚀 Iniciando deploy para GitHub Pages...');
console.log('📁 Pasta de build:', resolve(__dirname, 'dist'));

ghpages.publish('dist', deployOptions, (err) => {
  if (err) {
    console.error('❌ Erro no deploy:', err);
    process.exit(1);
  } else {
    console.log('✅ Deploy concluído com sucesso!');
    console.log('🌐 Seu site estará disponível em alguns minutos em:');
    console.log('   https://seu-usuario.github.io/catalago.emporio/');
  }
});