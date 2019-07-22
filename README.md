### Strapi to static

You can use this little global node utility to fetch your strapi endpoints and save them as static JSON files in a dir of your choice.

The idea behind it has born while needing to embed server contents in a static-generated website. You can then make them dynamic-like triggering strapi-to-static and a re-build.

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

<br>

Example of usage:

```
strapi-to-static --contentTypes=['news'] --dir=src/data --apiURL=http://localhost:1337
```

Then you will have your endpoints exported as single JSON files in the chosen directory.

The best thing is to associate it with a custom "scripts" command in a project's **package.json**, so the output dir is relative to it.

Example:

```
{
  "scripts": {
    "fetch": "strapi-to-static --contentTypes=['news'] --dir=src/data --apiURL=http://localhost:1337",
  },
}
```
