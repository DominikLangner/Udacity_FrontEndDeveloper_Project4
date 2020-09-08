## Natural Language Processing - Sentiment Analysis of an external URL

This project demonstates

- setting up Webpack to create a prod- & dev-environment
- Sass styles
- webpack Loaders and Plugins
- creating layouts and page design
- service workers
- setting up an additional node-server
- using APIs and creating requests to external urls

## Getting started

- `npm install`

## Create your API-KEY & store it in an .env

- Register at meaningcloud.com and get an API key for the sentiment analysis API.
- Use npm or yarn to install the dotenv package `npm install dotenv`. This will allow you to use environment variables you set in a new file.
- Create a new `.env` file in the root of your project.
- Go to your .gitignore file and add `.env`.
- Fill the .env file with your API keys like this:

```
API_KEY=**************************
```

## Starting the webpage

- `npm run build-dev`

### Starting the node server which handles the API call

- `npm run start`

## Deploying

- `npm run build-prod`
- check Dist folder
- deploy

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
