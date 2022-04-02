# Mapping Tool Cloud

Developed with Nuxt. See Nuxt [documentation](https://v3.nuxtjs.org).

## Application structure
The application mostly follows [Nuxt conventions](https://v3.nuxtjs.org/docs/directory-structure/app) in directory structure

```
components            // global ui components
composables           // global composition api 
layouts               // ui page layouts
pages                 // route root pages
plugins               // custom plugins for Nuxt
public                // robots.txt etc.
server                // server side code
├── api               // api endpoints
├── db                // database-related content
│   ├── migrations    // db migrations
│   └── schema.prisma // data models
└── middlewares       // server middlewares
.env                  // environment variables
```


## Setup

Make sure to install the dependencies

```bash
npm install
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).