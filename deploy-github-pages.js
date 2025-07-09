#!/usr/bin/env node

/**
 * Script personalizado para deploy no GitHub Pages
 * Resolve problemas de path muito longo no Windows
 */

const ghpages = require('gh-pages');
const path = require('path');

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
console.log('📁 Pasta de build:', path.resolve('dist'));

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