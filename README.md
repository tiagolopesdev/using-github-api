# Consumo da API do github

### Objetivo do projeto

> O objetivo foi aprimorar meus conhecimentos sobre React. Quando iniciei o desenvolvimento, ainda estava explorando esse novo mundo, do frontend. Além disso, pude aplicar conceitos importantes, como contexto e uso das melhores práticas de desenvolvimento
> 

### Funcionalidades

1. Listar todos os repositórios do github, com base no nome de usuário.
2. Apresentar as informações de perfil, como bio, localização, quantidade de seguidores e pessoas que segue e e-mail.
3. Navegação entre páginas

### Screenshots

1. Listagem dos repositórios
    
    ![Untitled1](https://user-images.githubusercontent.com/58925056/233652903-9fa77573-6312-4f50-8052-c5c85b6cd0f0.png)
    
2. Exibição dos dados do perfil

    ![Untitled2](https://user-images.githubusercontent.com/58925056/233653130-5255c8f5-25b1-4107-86a2-7da086960cb4.png)

### Instalação

Instale a aplicação com `npm`

```bash
npm install
```

```bash
npm start
```

### Rotas utilizadas da API do Github

1. Obter informações do perfil
    
    ```bash
    https://api.github.com/users/{NAME_USER}
    ```
    
    | Parâmetro | Tipo | Descrição | Método Http |
    | --- | --- | --- | --- |
    | `name_user` | `string` | **Obrigatório**. Chave para obter das informações do perfil | `GET` |
2. Obter repositórios
    
    ```bash
    https://api.github.com/users/{NAME_USER}/repos
    ```
    
    | Parâmetro | Tipo | Descrição | Método Http |
    | --- | --- | --- | --- |
    | `name_user` | `string` | **Obrigatório**. Chave para obter os repositórios | `GET` |
3. Obter commits
    
    ```bash
    https://api.github.com/repos/{NAME_USER}/{NAME_REPOSITORY}/commits
    ```
    
    | Parâmetro | Tipo | Descrição | Método Http |
    | --- | --- | --- | --- |
    | `name_user` | `string` | **Obrigatório**. Chave para identificar o usuário | `GET` |
    | `name_repository` | `string` | **Obrigatório**. Chave para obter os commits específicos do repositório | `GET` |

<br>
<br>
<div align="center">
    <h2>Autor</h2>
    <img src="https://user-images.githubusercontent.com/58925056/157934762-1b63b01a-92c4-4a5a-8cf3-1787c894c565.png" width=175px>
    <h3>📲Meus contatos</h3>
    <a href="https://instagram.com/tiago_lopes_14" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a> 
    <a href="mailto:saxtiago@gmailcom"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.linkedin.com/in/tiagolopesdeveloper/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href="https://t.me/tiagoLopesDev" target="_blank"><img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" target="_blank"></a>
</div>
