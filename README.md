<h1 align="center">
  <br>
  <img src="public/images/developer.png" alt="mulher negra usando computador" width="216">
  <br>
    <br>
    <p align="center">Projeto Prático - Semana 8<p>
</h1>

Olá, o repositório da semana 8 do curso de back-end do Projeto {Reprograma} é o resulatado do conteúdo visto sobre APIs, onde utilizamos o método GET para a filtragem de dados.

## Temas

Escolhemos os temas abaixo para desenvolver este projeto a partir deles, abaixo estão descritos o que cada contrato deve retornar.

---

### Opção 1 - Jogos

```json
{
  "id": 1,
  "titulo": "Fall Guys",
  "dataLancamento": "2020"
}
```

#### Contratos que deverão ser entregues:

| Recurso      | Descrição                         |
| ------------ | --------------------------------- |
| `/jogos`     | Retorna todos os jogos            |
| `/jogos/:id` | Retorna apenas um jogo específico |

---

### Opção 2 - Música

```json
{
  "id": 1,
  "titulo": "Evidências",
  "duracao": "04:39"
}
```

#### Contratos que deverão ser entregues:

| Recurso        | Descrição                            |
| -------------- | ------------------------------------ |
| `/musicas`     | Retorna todas as músicas             |
| `/musicas/:id` | Retorna apenas uma música específica |

#### Contratos opcionais:

| Recurso         | Descrição                                 |
| --------------- | ----------------------------------------- |
| `/artistas`     | Retorna a lista de artistas               |
| `/artistas/:id` | Retorna o artista e lista de músicas dele |

#### Contratos para ir ao infinito e além:

| Recurso                   | Descrição                                            |
| ------------------------- | ---------------------------------------------------- |
| `/albuns`                 | Retorna o álbum com a lista de músicas daquele album |
| `/albuns/[nome-do-album]` | Retorna um álbum específico filtrado pelo nome       |

---

### Opção 3 - Séries

### Séries

```json
{
  "id": 1,
  "titulo": "Suits",
  "duracao": "9 temporadas"
}
```

#### Contratos que deverão ser entregues

| Recurso       | Descrição                           |
| ------------- | ----------------------------------- |
| `/series`     | Retorna todas as séries             |
| `/series/:id` | Retorna apenas uma série específica |

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
