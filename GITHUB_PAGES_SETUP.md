# 🚀 Guia Completo: Deploy no GitHub Pages

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:
- Git instalado no seu computador local
- Conta no GitHub
- Node.js 18+ instalado

## 🔧 Configuração Inicial (Fazer uma vez)

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository" ou acesse [github.com/new](https://github.com/new)
3. Configure o repositório:
   - **Repository name**: `catalago.emporio`
   - **Description**: "Catálogos digitais da Empório Dubai Perfumaria"
   - **Visibility**: Public (necessário para GitHub Pages gratuito)
   - ✅ Add a README file
   - ✅ Add .gitignore (escolha "Node")
   - Clique em "Create repository"

### 2. Clonar o Projeto Localmente

```bash
# Clone o repositório vazio
git clone https://github.com/SEU-USUARIO/catalago.emporio.git
cd catalago.emporio

# Baixe os arquivos do projeto atual e copie para esta pasta
# (você pode fazer download do ZIP do projeto atual e extrair aqui)
```

### 3. Configurar o Projeto

```bash
# Instalar dependências
npm install

# Instalar gh-pages se não estiver instalado
npm install --save-dev gh-pages

# Testar se tudo funciona
npm run dev
```

### 4. Configurar GitHub Pages no Repositório

1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (aba no topo)
3. Role para baixo até **Pages** (menu lateral esquerdo)
4. Em **Source**, selecione:
   - **Deploy from a branch**
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Clique em **Save**

## 🚀 Deploy Manual (Método Simples)

### Primeiro Deploy

```bash
# 1. Fazer commit inicial dos arquivos
git add .
git commit -m "Initial commit: Empório Dubai catalog app"
git push origin main

# 2. Build e deploy para GitHub Pages
npm run deploy
```

### Deploys Subsequentes

```bash
# 1. Fazer suas alterações no código
# 2. Commit das alterações
git add .
git commit -m "Descrição das suas alterações"
git push origin main

# 3. Deploy atualizado
npm run deploy
```

## ⚙️ Deploy Automático com GitHub Actions

Para automatizar o processo, crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write
    
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build for GitHub Pages
      run: npm run build:github
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

Com isso configurado, o deploy será automático a cada push para a branch `main`.

## 🌐 Acessar o Site

Após o deploy, seu site estará disponível em:
```
https://SEU-USUARIO.github.io/catalago.emporio/
```

## 🛠️ Scripts Disponíveis

O projeto já está configurado com os seguintes scripts:

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento

# Build
npm run build:github     # Build para GitHub Pages
npm run build:netlify    # Build para Netlify
npm run build           # Build padrão

# Deploy
npm run deploy          # Deploy para GitHub Pages
npm run preview         # Preview do build local

# Utilitários
npm run type-check      # Verificação de tipos TypeScript
npm run lint           # Linting do código
```

## 🔍 Verificar Status do Deploy

### Via GitHub Interface:
1. Vá para o seu repositório
2. Clique na aba **Actions**
3. Veja o status dos workflows

### Via Linha de Comando:
```bash
# Verificar branches
git branch -a

# Verificar se a branch gh-pages foi criada
git ls-remote --heads origin

# Ver logs do último deploy
git log --oneline gh-pages
```

## 🐛 Troubleshooting

### Erro: "spawn git ENOENT"
- **Causa**: Git não está instalado ou não está no PATH
- **Solução**: Instale o Git e reinicie o terminal

### Erro: "Permission denied"
```bash
# Verificar autenticação
git config --list | grep user

# Configurar se necessário
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Para repositórios privados, configure token
git remote set-url origin https://TOKEN@github.com/SEU-USUARIO/catalago.emporio.git
```

### Site não carrega corretamente
1. Verifique se o base path está correto (`/catalago.emporio/`)
2. Aguarde alguns minutos para propagação
3. Limpe o cache do navegador
4. Verifique se não há erros no console do navegador

### Build falha
```bash
# Limpar cache e reinstalar
rm -rf node_modules dist
npm install
npm run build:github
```

## 📱 PWA (Progressive Web App)

O projeto já está configurado como PWA. Após o deploy:
- Os usuários podem instalar o app no celular
- Funciona offline
- Ícones personalizados na tela inicial

## 🔒 Configurações de Segurança

### Para repositórios privados:
1. Gere um Personal Access Token no GitHub
2. Configure nas variáveis de ambiente:
```bash
export GITHUB_TOKEN=seu_token_aqui
```

### Para domínio customizado:
1. Adicione arquivo `CNAME` na pasta `public/`:
```
seudominio.com
```
2. Configure DNS do seu domínio para apontar para GitHub Pages

## 📊 Monitoramento

### Analytics (opcional):
Adicione Google Analytics ou similar editando o arquivo `index.html` na pasta `public/`.

### Performance:
- O projeto usa Vite para otimização automática
- Imagens são otimizadas
- CSS e JS são minificados
- PWA cache está configurado

## 🎯 Próximos Passos

1. **Clone o repositório localmente**
2. **Configure o GitHub Pages** nas configurações do repositório
3. **Execute `npm run deploy`** para o primeiro deploy
4. **Acesse seu site** em `https://SEU-USUARIO.github.io/catalago.emporio/`

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no GitHub Actions
2. Teste o build localmente: `npm run build:github && npm run preview`
3. Confirme que o repositório está público
4. Aguarde até 10 minutos para propagação do DNS

---

**Importante**: Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub em todos os comandos e URLs.