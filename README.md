### Strapi to static

You can use this little global node utility to fetch your strapi endpoints and save them as static JSON files in a dir of your choice.

It's extremely simple and easy to use.

Install globally:

```
npm install -g strapi-to-static
```

Accepted CLI arguments:

| name         | type   | description                                          |
| ------------ | ------ | ---------------------------------------------------- |
| contentTypes | array  | content types slugs to fetch from your strapi server |
| dir          | string | define your JSON files output directory              |
| apiURL       | string | the URL in which your strapi server runs             |

Example of usage:

```
strapi-to-static --contentTypes=['news'] --dir=src/data --apiURL=http://localhost:1337
```

Then you will have your endpoints exported as single JSON files in the chosen directory.
