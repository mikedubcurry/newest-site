<script lang="ts">
	import { enhance } from '../utils/form';
	import pixels from '../../assets/selfie-pixel.jpg';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	let disabled = false;

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
						//@ts-ignore
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
				rootMargin: '-120px 0px -120px 0px'
			}
		);

		observer.observe(document.querySelector('.welcome a'));
	});

	function validateName(event: FocusEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		const value = event.currentTarget.value;
		let el = event.currentTarget;
		if (!value) {
			event.currentTarget.classList.add('invalid-input');
			event.currentTarget.setAttribute('title', 'Please enter your name');
			let t = setTimeout(() => {
				el.classList.remove('invalid-input');
				clearTimeout(t);
			}, 2000);
			return;
		}
		if (parseInt(value)) {
			event.currentTarget.classList.add('invalid-input');
			event.currentTarget.setAttribute('title', 'Please enter your name');
			return;
		}
		event.currentTarget.classList.remove('invalid-input');
		event.currentTarget.removeAttribute('title');
		return;
	}
	function validateEmail(event: FocusEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		const value = event.currentTarget.value;
		if (!value || !value.includes('@')) {
			event.currentTarget.classList.add('invalid-input');
			event.currentTarget.setAttribute('title', 'Please enter your email');
			return;
		}
		let atindex = value.indexOf('@');
		if (!value[atindex - 1] || !value[atindex + 1]) {
			event.currentTarget.classList.add('invalid-input');
			event.currentTarget.setAttribute('title', 'Please enter your email');
			return;
		}
		event.currentTarget.classList.remove('invalid-input');
		event.currentTarget.removeAttribute('title');
		return;
	}
	function validateMessage(
		event: FocusEvent & { currentTarget: EventTarget & HTMLTextAreaElement }
	) {
		const value = event.currentTarget.value;
		let el = event.currentTarget;
		let t = setTimeout(() => {
			el.classList.remove('invalid-input');
			clearTimeout(t);
		}, 2000);
		if (!value) {
			event.currentTarget.classList.add('invalid-input');
			event.currentTarget.setAttribute('title', 'Please enter a message');

			return;
		}
		if (value.length > 240) {
			event.currentTarget.classList.add('invalid-input');
			event.currentTarget.setAttribute('title', 'Message character limit exceeded');
			return;
		}
	}
	function messageChange(event: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
		const { length } = event.currentTarget.value;
		let el = event.currentTarget;
		const charCount = document.querySelector('.charCount');
		console.log(length);
		charCount.innerHTML = (240 - length).toString();
		if (240 - length < 50) {
			charCount.classList.add('error');
		}
		if (240 - length < 0) {
			disabled = true;
		} else {
			disabled = false;
			charCount.classList.remove('error');
		}
		let t = setTimeout(() => {
			el.classList.remove('error');
			clearTimeout(t);
		}, 2000);
	}

	console.log(`
	                                                                                
                                                                                
            	waddup
                                ,/(((((/##(                                     
                               &%%%##(##%%#%,                                   
                                ,@@@&&&%##(#((                                  
                                 .*&&&%%%%#((#*                                 
                                   #%%%###(//(#,                                
                                  #%%%#%%###((##*                               
                          ,*(/###%&//%%######%((%/                              
                    ./((##%%&(/,    %%#(((####(#(##                             
               (%&&%&&              %%########(%#%                              
                                    #%%%%%%%%%%#/%                              
                                   *#%%%%%%%%%&%#(##                            
                                  ##%%%&&&&&&&&&#(###                           
                                .%%%%&&@% ./@@@@%((###                          
                               ##&&@# /#&&&%&&@@&#((#%                          
                              (#%&,       (.     /#(#&                          
                              .%##%&      #       #(%(                          
                                 /##%(   (#(     #/(#.                          
                                    *&&@@@&#@@( #((#&                           
                                  &&@#%(&&*#%@&@#(#%*                           
                                %%&@.&&(#%,%* ##(##&                            
                              .&&%/%  */(%/# %,%(#%&                            
                              %&#.  (& ,#@/.% /##%&&*                           
                             *&%%&(%(  &#%(## /(%%&&%                           
                             #&#*   ../&@&((/.##, &&%                           
                             #&#%*   /&,#&#/##(%(,@&/                           
                              @&& ##* &,&*%%#(%/ &%&                            
                              *@&@  /(.(( #/(%, @%&                             
                               *@@%%% ./. #,%(((%#                              
                                 #&&&&&@*(@@&&&%                                
                                    *@@@@@@@*   
																		
(https://manytools.org/hacker-tools/convert-images-to-ascii-art/go/)
	`);
</script>

<svelte:head><title>Mike Curry - Home</title></svelte:head>

<section>
	<h1>Welcome</h1>
	<div class="welcome">
		<div class="text">
			<p>
				My name is Michael and I'm a web developer! I have been coding since 2017, and I started my
				career in tech in 2020. I mostly write HTML, CSS and JavaScript and use many tools that
				compile to those languages such as TypeScript or SvelteKit, React, etc.
			</p>
			<p>
				When I'm not writing code, I like to spend time with my partner and our two cats, Humphrey
				and Hamilton. You can learn more about me by checking out the <a href="/about">About</a> page.
			</p>
		</div>
		<div class="image">
			<div class="clip">
				<img id="selfie" width="250" height="266" alt="a tasteful selfie" />
				<img
					loading="lazy"
					id="pixels"
					width="250"
					height="266"
					src={pixels}
					alt="a tasteful selfie"
				/>
			</div>
		</div>
	</div>
	<h2>Check it Out</h2>
	<p>
		From time to time, I run across a challenging topic in programming and in order to help me
		remember it better, I like to write about it. I'm still pretty new to blogging but you can find
		my posts over <a aria-label="link to blog page" href={`${base}/blog`}>here</a>.
	</p>
	<p>
		Links to my GitHub and Twitter profile are in the right-hand side nav bar, as well as the
		SvelteKit docs if you're considerig building your own site using this dope technology.
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
			<input autocomplete="off" on:blur={validateName} required type="text" name="name" id="name" />
		</label>
		<label for="email"
			>Email:
			<input
				autocomplete="off"
				on:blur={validateEmail}
				required
				type="text"
				name="email"
				id="email"
			/>
		</label>
		<label for="message"
			>Message:
			<textarea
				on:input={messageChange}
				on:blur={validateMessage}
				required
				name="message"
				id="message"
			/>
			<div class="charCount">240</div>
		</label>
		{#if contactStatus}
			<p class="contactStatus" class:error={contactStatus === 'error'}>
				{contactMessage}
			</p>
		{/if}
		<button id="sendit" disabled={pending || disabled} type="submit">Send it!</button>
	</form>
</section>

<style>
	.error.error {
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
		position: relative;
		resize: none;
	}
	.charCount {
		background-color: var(--tertiary-color, #14297d);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--secondary-color);
		border-radius: 100%;
		width: 40px;
		height: 40px;
		bottom: 25px;
		right: 5px;
		z-index: 50;
	}
	label {
		display: flex;
		flex-direction: column;
		margin-block-end: 2rem;
		position: relative;
	}
	.welcome {
		display: flex;
		flex-direction: column;
	}
	.image {
		position: relative;
		display: flex;
		/* flex: 1; */
		justify-content: center;
		width: 100%;
		height: 266px;
		z-index: 2;
	}
	.clip {
		/* display: flex; */
		/* justify-content: stretch; */
		clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0 80%);
		width: 250px;
	}
	.welcome img {
		align-self: center;
		transition: opacity 0.5s ease;
		/* border-radius: 14px; */
		/* clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0 80%); */
	}
	#pixels {
		position: absolute;
		top: 0;
		z-index: 2;
		/* opacity: 1; */
		transition: clip-path 0.5s ease;

		clip-path: inset(0%);
		aspect-ratio: 0.91;
	}
	#selfie {
		top: 0;
		position: absolute;
		z-index: 3;
		/* opacity: 0; */
		transition: clip-path 0.5s ease;
		clip-path: inset(100%);
	}

	@media screen and (min-width: 1075px) {
		.welcome {
			flex-direction: row;
		}

		/* .welcome p {
			/* flex: 2; 
		} */

		.image {
			flex: 1;
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
