<h1 align="center">
  <br>
  <img src="public/images/developer.png" alt="mulher negra usando computador" width="216">
  <br>
    <br>
    <p align="center">Projeto Prático - Semana 8<p>
</h1>

Olá, o repositório da semana 8 do curso de back-end do Projeto {Reprograma} é o resulatado do conteúdo visto sobre APIs, onde utilizamos o método GET para a filtragem de dados.

## Temas

Escolhemos os temas abaixo para desenvolver o projeto e a partir deles, listamos o que cada contrato deve retornar.

---

### Opção 1 - Artistas

```json
{
  "id": 1,
  "artista": "Beyoncé",
  "nome": "Beyoncé Giselle Knowles-Carter",
  "genero": "feminino",
  "profissao": ["cantora", "compositora", "atriz", "modelo", "dançarina", "produtora musical", "roteirista"]
},
```

#### Contratos que deverão ser entregues:

| Recurso                     | Descrição                            |
| --------------------------- | ------------------------------------ |
| `/artistas`                 | Retorna todos os artistas            |
| `/artista/[nome-do-artista]`| Retorna apenas um artista específico |

---

### Opção 2 - Música

```json
{
  "id": 1,
  "titulo": "Sweet Child O' Mine",
  "banda": "Guns N' Roses",
  "anoLancamento": 1987,
  "genero": ["Heavy metal", "Hard Rock", "Rock"],
  "gravadora": "Geffen Records",
  "duracao": "05:56",
  "single": false,
  "album": "Appetite for Destruction"
},
```

#### Contratos que deverão ser entregues:

| Recurso                    | Descrição                                  |
| -------------------------- | ------------------------------------------ |
| `/musicas`                 | Retorna todas as músicas                   |
| `/musicas/:id`             | Retorna apenas uma música específica       |
| `/musicas/[nome-da-banda]` | Retorna todas as músicas com a mesma banda |
| `/musicas/single`          | Retorna todas as músicas gravadas sólo     |

---

#### Contratos para ir ao infinito e além:

| Recurso                           | Descrição                                      |
| --------------------------------- | ---------------------------------------------- |
| `/album`                          | Retorna todos os albúns                        |
| `/albuns/:titulo`                 | Retorna o álbum por nome de uma música         |
| `/banda`                          | Retorna todas as bandas                        |
| `/musicas/albuns/[nome-do-album]` | Retorna um álbum específico filtrado pelo nome |
| `/gravadora`                      | Retorna todas as gravadoras                    |

---

### Opção 3 - Séries

### Séries

```json
{
  "id": 1,
    "titulo": "Black Sails",
    "genero": "Ficção Científica",
    "autor": ["Robert Levine", "Jonathan Steinberg"],
    "temporadas": 4,
    "ano": 2014
}
```

#### Contratos que deverão ser entregues

| Recurso       | Descrição                           |
| ------------- | ----------------------------------- |
| `/series`     | Retorna todas as séries             |
| `/series/:id` | Retorna apenas uma série específica |
| `/:titulo`    | Retorna a série por nome            |

---

## A estrutura das pastas:

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   ├── views
│   └── index.js
├── server.js
├── package.json
```

Agora vamos relembrar alguns conceitos importantes:

- **M**odel: é responsável pela leitura e escrita de dados, e também de suas validações. É onde está toda a lógica de negócio da aplicação.
- **V**iew: é a camada de interação com o usuário. Ela apenas faz a exibição dos dados, sendo ela por meio de um html ou xml.
- **C**ontroller: O responsável por receber todas as requisições do usuário. Seus métodos chamados actions são responsáveis por uma página, controlando qual model usar e qual view será mostrado ao usuário.

### Postman

Essa ferramenta permite testar serviços RESTful por meio do envio de requisições HTTP e da análise do seu retorno. Você pode salvar todas as suas _collections_ e facilitar o seu dia-a-dia como pessoa desenvolvedora!
