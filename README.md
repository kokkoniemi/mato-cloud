# Mapping Tool Cloud

Developed with Nuxt. See Nuxt [documentation](https://v3.nuxtjs.org).

## Application structure
The application follows [Nuxt conventions](https://v3.nuxtjs.org/docs/directory-structure/app) in directory structure

```
components      // global ui components
composables     // global composition api 
layouts         // ui page layouts
pages           // route root pages
public          // robots.txt etc.
server          // server side code
├── api         // api endpoints
└── middlewares // server middlewares
```


## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).