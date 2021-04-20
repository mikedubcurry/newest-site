import Image from 'next/image';
import styles from '../../styles/Sections.module.css';
import { usePagination } from '../../hooks';
import { Button } from '../Button';

export function CatPicSection() {
	const [handleNext, handlePrev, imagesSlice] = usePagination(images, {
		chunkLength: 2,
	});
	console.log(imagesSlice);
	return (
		<section className={styles['cat-pic-section']}>
			{/* <Switcher  handleNext={handleNext} handlePrev={handlePrev} /> */}
			<nav className={styles.switcher}>
				<Button level={3} action={handlePrev} text="Prev" />
				<Button level={3} action={handleNext} text="Next" />
			</nav>
			{imagesSlice.map((image, i) => (
				<img
					key={i}
					src={image.src}
					alt={image.alt}
					width={image.width}
					height={image.height}
				/>
			))}
		</section>
	);
}

function ImageGrid({ images }) {
	return (
		<div>
			{images &&
				images.map((image) => {
					return (
						<Image
							src={image.src}
							// layout="responsive"
							width={image.width}
							height={image.height}
							alt={image.alt}
						/>
					);
				})}
		</div>
	);
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
		src: '/humphrey1.jpg',
		width: 200,
		height: 150,
		orientation: 'LAND',
		alt: "Close-up of Humphrey's face and whiskers",
	},
	{
		src: '/hamilton2.jpg',
		width: 150,
		height: 200,
		orientation: 'PORT',
		alt: 'Hamilton peering out from under a blanket',
	},
	{
		src: '/humphrey2.jpg',
		width: 150,
		height: 200,
		orientation: 'PORT',
		alt:
			'Humphrey after being brushed, with a little drool hanging out of his mouth',
	},
	{
		src: '/hamilton3.jpg',
		width: 150,
		height: 200,
		orientation: 'PORT',
		alt: 'Hamilton sitting upright on a couch like a person',
	},
	{
		src: '/humphrey3.jpg',
		width: 150,
		height: 200,
		orientation: 'PORT',
		alt: 'Humphrey contently laying on my lap',
	},
];
