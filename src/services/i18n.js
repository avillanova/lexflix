import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "ola": "Welcome to React and react-i18next",
	  "points": "points",
	  "season": "season",
	  "Watch": "Watch",
	  "My List": "My List",
	  "Genres": "Genres",
	  "Netflix Originals": "Netflix Originals",
	  "Trending Now": "Trending Now",
	  "Top Rated": "Top Rated",
	  "Made by": 'Made by',
	  "to more details": 'to more details access the',
	  "image rights for Netflix": "Image rights for Netflix",
	  "data generated by": "Data generated by",
	  "loading": "Loading...",
	  "English": "English",
	  "Portuguese": "Portuguese",
	  "Spanish": "Spanish",
    }
  },
  "pt-BR": {
    translation: {
      "ola": "Bem vindo ao REACT",
	  "points": "pontos",
	  "season": "temporada",
	  "Watch": "Assistir",
	  "My List": "Minha Lista",
	  "Genres": "Gêneros",
	  "Netflix Originals": "Originais Netflix",
	  "Trending Now": "Populares na Netflix",
	  "Top Rated": "Em alta",
	  "Made by": 'Feito por',
	  "to more details": 'para mais detalhes acesse o',
	  "image rights for Netflix": "Direitos de imagem para Netflix",
	  "data generated by": "Dados gerados por",
	  "loading": "Carregando...",
	  "English": "Inglês",
	  "Portuguese": "Português",
	  "Spanish": "Espanhol",
    }
  },
  es: {
    translation: {
      	"ola": "Bienvenue à React et react-i18next",
	  	"points": "points",
	  	"season": "saison",
	  	"Watch": "Regarder",
	  	"My List": "Ma Liste",
	  	"Genres": "Géneros",
	  	"Netflix Originals": "Originaux Netflix",
		"Trending Now": "Populaire sur Netflix",
		"Top Rated": "En hausse",
		"Made by": 'Fait par',
		"to more details": 'pour plus de détails accédez à la',
		"image rights for Netflix": "Droits d'image pour Netflix",
		"data generated by": "Données générées par",
		"loading": "Chargement...",
		"English": "Anglais",
		"Portuguese": "Portugais",
		"Spanish": "Espagnol",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: ["en", "pt-BR", "fr"],
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;