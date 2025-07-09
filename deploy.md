# Guia de Implantação - GitHub Pages

## Como implantar o projeto

### 1. Preparação
Certifique-se de que todas as alterações estão commitadas e enviadas para o repositório:

```bash
git add .
git commit -m "Preparar para implantação"
git push origin main
```

### 2. Executar a implantação
Execute o comando de implantação:

```bash
npm run deploy
```

Este comando irá:
- Executar automaticamente `npm run build` (através do script `predeploy`)
- Criar/atualizar a branch `gh-pages` com o conteúdo da pasta `dist`
- Enviar a branch `gh-pages` para o GitHub

### 3. Configurar o GitHub Pages
1. Vá para o seu repositório no GitHub
2. Acesse **Settings** > **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha a branch **gh-pages** e a pasta **/ (root)**
5. Clique em **Save**

### 4. Acessar o site
Após alguns minutos, seu site estará disponível em:
`https://danilthais.github.io/catalago.emporio/`

## Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera os arquivos de produção na pasta `dist`
- `npm run deploy` - Implanta o projeto no GitHub Pages
- `npm run preview` - Visualiza a versão de produção localmente

## Notas importantes

- O script `predeploy` garante que o build seja executado antes da implantação
- A pasta `dist` não precisa ser commitada no repositório principal
- O `gh-pages` cria automaticamente a branch `gh-pages` se ela não existir
- Sempre teste localmente com `npm run preview` antes de implantar

## Solução de problemas

Se encontrar erros durante a implantação:

1. Verifique se o build local funciona: `npm run build`
2. Teste a versão de produção: `npm run preview`
3. Certifique-se de que tem permissões de escrita no repositório
4. Verifique se a configuração do `base` no `vite.config.ts` está correta