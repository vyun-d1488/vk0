import React from "react";
import { ImageGroup } from "react-fullscreen-image";

const renderPicture = (picture, index) => {
	if (typeof picture !== "string") return;
	if (picture.includes("https")) {
		return (
			<li key={index}>
				<a href={picture}>
					<img src={picture} />
				</a>
			</li>
		);
	}
};

export const PictureRender = ({ pictures }) => {
	const loadedImages = pictures.map((picture, index) => {
		return renderPicture(picture, index);
	});
	return (
		<ImageGroup>
			<ul className="images">{loadedImages}</ul>
		</ImageGroup>
	);
};
