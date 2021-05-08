<script lang="ts">
</script>

<section>
	<h1>Welcome</h1>
	<p>
		My name is Michael, I work full time writing JavaScript applications at Atlas Copco. Outside of
		work I like to discover new JavaScript frameworks as well as try to master CSS. When I'm not
		coding, I can be found tending to my garden, playing guitar in a band with my friends, or riding
		my motorcycle.
	</p>
	<p>
		My goal for this website is to have it be a centralized location for my writings and act as a
		testing-ground of sorts for different tech I'm currently learning.
	</p>
</section>

<section>
	<h1>Contact Me</h1>
	<p>
		Feel free to reach out and say "What's up", I'll do my best to get back to you in a timely
		manner
	</p>
	<form class="contact">
		<label for="name">Your name</label>
		<input name="name" id="name" type="text" />
		<label for="email">Your email</label>
		<input type="text" name="email" id="email" />
		<label for="message">Speak from your heart</label>
		<textarea name="message" id="message" cols="30" rows="10" />
	</form>
</section>

<style>
	section {
		/* width: 90vw; */
    /* position: relative; */
    /* z-index: 50; */
	}

	.contact {
		max-height: 75vh;
	}
</style>
