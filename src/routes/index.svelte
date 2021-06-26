<script lang="ts">
	import { enhance } from '../utils/form';
	// import selfie from '../assets/selfie-smallest.jpg';
	import pixels from '../../assets/selfie-pixel.jpg';
	import { onMount } from 'svelte';
	import { text } from 'svelte/internal';

	let contactStatus = '';
	let contactMessage = '';
	let pending = false;
	onMount(() => {
		let observer = new IntersectionObserver(
			(e, o) => {
				e.forEach((entry) => {
					if (entry.isIntersecting) {
						let img = document.getElementById('selfie') as HTMLImageElement;
						let pxl = document.getElementById('pixels');
						let selfie;
						import('../../assets/selfie-smallest.jpg').then((image) => {
							selfie = image.default;
							img.src = selfie;
							pxl.classList.add('transparent');
							img.classList.add('visible');
						});
					}
				});
			},
			{
				threshold: 1,
				rootMargin: '-100px 0px -100px 0px'
			}
		);

		observer.observe(document.getElementById('selfie'));
	});
</script>

<svelte:head><title>Mike Curry - Home</title></svelte:head>

<section>
	<h1>Welcome</h1>
	<div class="welcome">
		<p>
			My name is Michael and I'm a web developer! I have been coding since 2017, and I started my
			career in tech in 2020. I mostly write HTML, CSS and JavaScript and use many tools that
			compile to those languages such as TypeScript or SvelteKit, React, etc. When I'm not writing
			code, I like to spend time with my partner and our two cats, Humphrey and Hamilton. You can
			learn more about me by checking out the <a href="/about">About</a> page.
		</p>
		<div class="image">
			<img id="selfie" width="250" height="266" alt="a tasteful selfie" />
			<img id="pixels" width="250" height="266" src={pixels} alt="a tasteful selfie" />
		</div>
	</div>
	<h2>Check it Out</h2>
	<p>
		From time to time, I run across a challenging topic in programming and in order to help me
		remember it better, I like to write about it. I'm still pretty new to blogging but you can find
		my posts over <a href="/blog">here</a>. Links to my GitHub and Twitter profile are in the
		right-hand side nav bar, as well as the SvelteKit docs if you're considerig building your own
		site using this dope technology.
	</p>
</section>
<section>
	<h1>Contact</h1>
	<p>
		If you want to reach out to me, feel free to @ me or send me a DM on Twitter. You could also
		send me an email using this contact form, just fill in your name, an email I can reach you at
		and a brief message and I will try to get back to you as soon as I can!
	</p>
	<form
		action="/"
		method="post"
		use:enhance={{
			result: async (res, form) => {
				// let body = await res.text();
				console.log(await res.text());
				contactStatus = '';
				contactMessage = '';
				pending = false;
				form.reset();
			},
			error: async (res, err, form) => {
				const { status, message } = await res.json();
				pending = false;
				contactStatus = status;
				contactMessage = message;
				form.reset();
			},
			pending: async (res, form) => {
				pending = true;
			}
		}}
	>
		<label for="name"
			>Name:
			<input required type="text" name="name" id="name" />
		</label>
		<label for="email"
			>Email:
			<input required type="text" name="email" id="email" />
		</label>
		<label for="message"
			>Message:
			<textarea required name="message" id="message" />
		</label>
		{#if contactStatus}
			<p class="contactStatus" class:error={contactStatus === 'error'}>
				{contactMessage}
			</p>
		{/if}
		<button disabled={pending} type="submit">Send it!</button>
	</form>
</section>

<style>
	.error {
		color: var(--warn-color, red);
	}
	form {
		display: flex;
		flex-direction: column;
	}
	textarea {
		height: 15rem;
		margin-block-end: 2rem;
		border: 2px inset rgb(118, 118, 118);
	}
	label {
		display: flex;
		flex-direction: column;
		margin-block-end: 2rem;
	}
	.welcome {
		display: flex;
		flex-direction: column;
	}
	.image {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 266px;
	}
	.welcome img {
		align-self: center;
		transition: opacity 0.5s ease;
		border-radius: 14px;
	}
	#pixels {
		position: absolute;
		top: 0;
		z-index: 2;
		opacity: 1;
	}
	#selfie {
		top: 0;
		position: absolute;
		z-index: 1;
		opacity: 0;
	}

	@media screen and (min-width: 1075px) {
		.welcome {
			flex-direction: row;
		}
		form {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			gap: 1rem;
		}
		label {
			margin-block-end: unset;
		}

		label[for='name'] {
			grid-row: 1;
		}
		label[for='email'] {
			grid-row: 2;
		}
		label[for='message'] {
			grid-column: 2;
			grid-row: 1 / 4;
			margin-block-end: unset;
		}

		button {
			grid-row: 3;
			width: 50%;
			height: 50%;
			align-self: center;
			justify-self: center;
		}
	}
</style>
