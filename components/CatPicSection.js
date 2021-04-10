import image from 'next/image';
import Image from 'next/image';
import styles from '../styles/Sections.module.css';

export function CatPicSection() {
	return (
		<section className={styles['cat-pic-section']}>
			<ImageGrid images={images} />
		</section>
	);
}

function ImageGrid({ images }) {
	return (
		<div>
			{images &&
				resizeImages(images).map((image) => {
					return (
						<Image
							src={image.src}
							layout='fixed'
							width={image.width}
							height={image.height}
							alt={image.alt}
						/>
					);
				})}
		</div>
	);
}
function resizeImages(images) {
	let width = window.innerWidth;

	if (width < 400) {
		return images.map((img) => ({
			...img,
			width,
			height: image.orientation === 'PORT' ? width * (4 / 3) : width * (3 / 4),
		}));
	}

	return images.map((img) => ({
		...img,
		width: width / 2.5,
		height: image.orientation === 'PORT' ? width * (4 / 3) : width * (3 / 4),
	}));
}

const images = [
	{
		src: '/hamilton1.jpg',
		width: 200,
		height: 150,
		orientation: 'LAND',
		alt: 'Hamilton curled up on his back in a playful position',
	},
	{
		src: '/hamilton2.jpg',
		width: 200,
		height: 150,
		orientation: 'PORT',
		alt: 'Hamilton peering out from under a blanket',
	},
	{
		src: '/hamilton3.jpg',
		width: 200,
		height: 150,
		orientation: 'PORT',
		alt: 'Hamilton sitting upright on a couch like a person',
	},
	{
		src: '/humphrey1.jpg',
		width: 200,
		height: 150,
		orientation: 'LAND',
		alt: "Close-up of Humphrey's face and whiskers",
	},
	{
		src: '/humphrey2.jpg',
		width: 200,
		height: 150,
		orientation: 'PORT',
		alt:
			'Humphrey after being brushed, with a little drool hanging out of his mouth',
	},
	{
		src: '/humphrey3.jpg',
		width: 200,
		height: 150,
		orientation: 'PORT',
		alt: 'Humphrey contently laying on my lap',
	},
];
