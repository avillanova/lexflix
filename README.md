# Purpose
This project is a react template copy of Netflix, here is used React standards and i18n concepts.

To run, you need create an account on [https://developer.themoviedb.org](https://developer.themoviedb.org/reference/intro/getting-started)

## Demo
To see a demo, just open [https://lexflix.vercel.app/](https://lexflix.vercel.app/)

## How to run locally
Clone the project:
```bash
git clone git@github.com:avillanova/lexflix.git
```
Access the directory:
```bash
cd lexflix
```
Install all dependency:
```bash
npm install
```
Create a dotenv file with
```
REACT_APP_API_KEY=[PUT YOUR THE MOVIE KEY]
REACT_APP_API_BASE=https://api.themoviedb.org/3
```
Then you are able to start the project:
```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Understanding the project
## Structure
```bash
├── LICENSE #APACHE LICENSE OF USE
├── package.json 
├── package-lock.json
├── .gitignore #List of all items to be ignored by git
├── public #Public files used by react
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md #Documentation
└── src
    ├── App.css #App css style sheet
    ├── App.js #Main file of the project
    ├── App.test.js #Unit test of main
    ├── assets #Non-code files
    │   ├── avatar.png
    │   ├── loading.gif
    │   └── logo.svg
    ├── components #List component inside the project
    │   ├── FeaturedMovie #First movie on evidence
    │   │   ├── FeaturedMovie.css
    │   │   └── index.js
    │   ├── Header #Netflix logo and User image
    │   │   ├── Header.css
    │   │   └── index.js
    │   └── MovieRow #Horizontal List of movies
    │       ├── index.js
    │       └── MovieRow.css
    ├── index.js #Call App.js
    ├── services
    │   ├── i18n.js #Internacionalization
    │   └── movieService.js #Movie API functions
    └── setupTests.js
```