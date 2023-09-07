const path = require('path');
const express = require("express");

const app = express();

app.get('/api/users', (req, res) =>
  res.send({
  "posts": [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 2,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        "userId": 3,
        "id": 29,
        "title": "iusto eius quod necessitatibus culpa ea",
        "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
    },
    {
        "userId": 4,
        "id": 32,
        "title": "doloremque illum aliquid sunt",
        "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
    },
    {
        "userId": 5,
        "id": 41,
        "title": "non est facere",
        "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
    }
  ],
  "comments": [
        {
            "id": 1,
            "body": "some comment",
            "postId": 1
        },
        {
            "id": 2,
            "body": "some comment",
            "postId": 1
        }
    ],
  "users": [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "role": "manager",
        "gender": "F",
        "birthdate": "09/04/1992",
        "nationality": "belgian"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "role": "co-manager",
        "gender": "M",
        "birthdate": "05/12/1985",
        "nationality": "british"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "role": "admin",
        "gender": "NB",
        "birthdate": "12/03/1999",
        "nationality": "american"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "role": "admin",
        "gender": "F",
        "birthdate": "11/11/1980",
        "nationality": "swedish"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "role": "employee",
        "gender": "F",
        "birthdate": "01/02/1975",
        "nationality": "russian"
    },
    {
        "id": 6,
        "name": "Mrs. Ioana Oprea",
        "email": "Ioana_Opr@jasper.info",
        "role": "employee",
        "gender": "O",
        "birthdate": "23/04/2000",
        "nationality": "romanian"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz",
        "role": "employee",
        "gender": "M",
        "birthdate": "18/06/1995",
        "nationality": "german"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "email": "Sherwood@rosamond.me",
        "role": "employee",
        "gender": "NB",
        "birthdate": "12/03/1981",
        "nationality": "austrian"
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "email": "Chaim_McDermott@dana.io",
        "role": "part time employee",
        "gender": "F",
        "birthdate": "19/10/2001",
        "nationality": "british"
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "email": "Rey.Padberg@karina.biz",
        "role": "part time employee",
        "gender": "NB",
        "birthdate": "20/01/2002",
        "nationality": "french"
    }
  ],
  "profile": {
    "name": "typicode"
  }
})
);

app.post('/api/usersList', (req, res) =>
  setTimeout(() => res.status(201).send(), 800)
);

app.post('/api/sign-in', (req, res) => res.status(200).send());

app.use('/api/images', express.static('images'));

app.use('/', express.static('dist', {index:'index.html'}));

app.listen(8081, () => console.log('Server listening on port 8081!'));
