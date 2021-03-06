# Orugamon

This is a simple example for my last article [Oruga: the new kid on the block](https://dev.to/astagi/oruga-the-new-kid-on-the-block-1n55).

Using Oruga and Nes.css I built a simple Pokèmon finder to search some statistics of my favourites Pokèmon taking advantage of the cool [PokèAPI](https://pokeapi.co/). 

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3n28nt2cgdlahxvl3rna.png) 

The app is really simple: it allows you to type Pokèmon name you want to find, press a button and then, through the API, get all the information you need and show them in a table. If the Pokèmon can't be found, the search input will turn red (variant="error") and an error message will be shown. You can play with the app on [Netlify](https://happy-mestorf-628bac.netlify.app/) and [browse the final code on GitHub](https://github.com/astagi/orugamon)

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hyd7rwbj6e49818vuxg8.png) 


## Project setup
```
yarn install --ignore-engines
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
