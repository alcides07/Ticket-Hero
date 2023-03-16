# Ticket Hero

## Descrição
O projeto é uma plataforma web que permite que os usuários organizadores publiquem eventos de diversos tipos, incluindo informações sobre datas, horários, localização e preços de ingressos. Por outro lado, os usuários clientes podem visualizar e e comprar ingressos para esses eventos diretamente pelo site.

## Contato
| Ícone                |  Nome             |          Descrição  |  
| :-----------------: | :-----------------: | :-----------------: |
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) |  Github  | [Integrante 1](https://github.com/alcides07), [Integrante 2](https://github.com/Fernanda154) 
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white) |  Gmail  | <a href="mailto:alcidesdantasdj@gmail.com"> Integrante 1</a>, <a href="mailto:eufernandagui154@hotmail.com"> Integrante 2 </a> 

## Projeto
| Ícone                |  Nome             |          Descrição  |  
| :-----------------: | :-----------------: | :-----------------: |
|  [![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)](http://localhost:8000/swagger/)        |  Swagger                |   Última atualização: **07/03/23** | 
|  ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) |  Django |  Tecnologia utilizada no back-end | 
|  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |  React |  Tecnologia utilizada no front-end | 
|  ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) |  Typescript |  Tecnologia utilizada no front-end | 
|  ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) |  SQLite |  SGBD utilizado no projeto | 

## Visual
![Login](./images/login.png)

## Ferramentas

### Front-end
As seguintes ferramentas foram usadas na construção do front-end:

- [React](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

### Back-end
As seguintes ferramentas foram usadas na construção do back-end:

- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Swagger](https://swagger.io/)
- [SQLite](https://www.sqlite.org/)

## Execução do projeto
> Para executar o projeto você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Python](https://www.python.org/)
- [Pip](https://pypi.org/project/pip/)
- Editor de código sugerido: [VSCode](https://code.visualstudio.com/)

> Após possuir todas as ferramentas listadas acima em sua máquina, realize os seguintes passos:

### Abra um terminal e clone o repositório
```
git clone https://gitlab.devops.ifrn.edu.br/pnp-ifrn/Ticket-Hero.git
```

### Executando o back-end
> Utilize **python** ou **python3** nos comandos abaixo conforme necessário.

#### Acesse o diretório do back-end
```
cd Ticket-Hero/backend
```

#### Crie o ambiente virtual
```
python -m venv venv
```

#### Ative o ambiente virtual (Linux)
```
. venv/bin/activate
```

#### Ative o ambiente virtual (Windows)
```
venv/Scripts/activate
```

#### Instale as dependências do projeto
```
pip install -r requirements.txt
```

#### Acesse o diretório da API
```
cd api
```

#### Crie os arquivos de migração
```
python manage.py makemigrations
```

#### Aplique essas migrações no banco de dados
```
python manage.py migrate
```

#### Execute o back-end em modo de desenvolvimento
```
python manage.py runserver
```

### Executando o front-end
#### Acesse o diretório do front-end
```
cd Ticket-Hero/frontend
```

#### Instale as dependências
```
npm install
```

#### Execute o front-end
```
npm run dev
```

## Suporte
Entre em contato com um de nós da equipe:
> <a href="mailto:alcidesdantasdj@gmail.com"> Alcides</a>
> <a href="mailto:eufernandagui154@hotmail.com"> Fernanda</a>

## Futuro
<span style = "color: orange">
  If you have ideas for releases in the future, it is a good idea to list them in the README.
</span>

## Contribuição

<span style = "color: orange">
  State if you are open to contributions and what your requirements are for accepting them.

  For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

  You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.
</span>

## Autores
<table style>
  <tr>
    <td align="center"><a href="https://github.com/alcides07">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/alcides07" width="100px;" alt="Autor 1"/>
        <br />
        <a href="https://github.com/alcides07"><b>Alcides Dantas</b></a>
    </td>
    <td align="center"><a href="https://github.com/diogoodiego">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/Fernanda154" width="100px;" alt="Autor 2"/>
        <br />
        <a href="https://github.com/Fernanda154"><b>Fernanda Gulherme</b></a>
    </td>
  </tr>
</table>

## Licença
<span style = "color: orange">
  For open source projects, say how it is licensed.
</span>

## Status do projeto
<span style = "color: orange">
  If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for   maintainers.
</span>

