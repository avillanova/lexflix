const basicFetch = async (endpoint, language='en') => {
	const languageAttrib = endpoint.includes('?') ? `&language=${language}` : `?language=${language}`;
	const url = `${process.env.REACT_APP_API_BASE}${endpoint}${languageAttrib}`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
		}
	};

	const req = await fetch(url, options);
	const json = await req.json();
	return json;
};


export default {
	getHomeList: async (language) => {
		let movies = [
			{
				slug: 'originals',
				title: 'Netflix Originals',
				items: await basicFetch(`/discover/tv?with_network=213`, language)
			},
			{
				slug: 'trending',
				title: 'Trending Now',
				items: await basicFetch(`/trending/all/week`, language)
			},
			{
				slug: 'toprated',
				title: 'Top Rated',
				items: await basicFetch(`/movie/top_rated`, language)
			}
		];

		let genres = await basicFetch(`/genre/movie/list`, language);
		console.log(genres);
		for(let i in genres.genres){
			movies.push({
				slug: genres.genres[i].name.toLowerCase(),
				title: genres.genres[i].name,
				items: await basicFetch(`/discover/movie?with_genres=${genres.genres[i].id}`, language)
			});
		}
		console.log(movies)
		return movies;
	},
	getMovieInfo: async (movieId, type, language) => {
		let info = {};

		if(movieId){
			switch(type){
				case 'movie':
					info = await basicFetch(`/movie/${movieId}`, language)
				break;
				case 'tv':
					info = await basicFetch(`/tv/${movieId}`, language)
				break;
				default:
					info = null;
				break;
			}
		}

		return info;
	}
}