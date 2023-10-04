import React from "react";
import { useTranslation } from 'react-i18next';
import './FeaturedMovie.css';

export default ({item}) => {
	const {t} = useTranslation();
	let description = item.overview;
	if(description.length > 200) {
		description = description.substring(0, 200) + '...';
	}

	return (
		<section className="featured" style={{
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
		}}>
			<div className="featured--vertical">
				<div className="featured--horizontal">
					<div className="featured--name">{item.original_name}</div>
					<div className="featured--info">
						<div className="featured--points">{item.vote_average} {t("points")}</div>
						<div className="featured--year">{new Date(item.first_air_date).getFullYear()}</div>
						<div className="featured--seasons">{item.number_of_seasons} {t("season")}{item.number_of_seasons !== 1 ? 's' : ''}</div>
					</div>
					<div className="featured--description">{description}</div>
					<div className="featured--buttons">
						<a href={`/watch/${item.id}`} className="featured--watchbutton">► {t("Watch")}</a>
						<a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ {t("My List")}</a>
					</div>
					<div className="featured--genres"><strong>{t("Genres")}: </strong>{item.genres.map((genre) => genre.name).join(', ')}</div>
				</div>
			</div>
			
		</section>
			
	);
}