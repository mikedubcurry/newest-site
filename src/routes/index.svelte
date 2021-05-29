<script lang="ts">
</script>

<section>
	<h1>Welcome</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem impedit dolorum, minus
		neque maiores commodi aliquid odit sint! Fuga consequuntur soluta porro numquam. Consequuntur
		repellendus ut doloremque repellat provident?
	</p>
	<h2>Check it Out</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptas blanditiis a recusandae
		nam veniam sit perferendis amet. Suscipit aut recusandae repellat distinctio adipisci accusamus
		minus eaque natus iusto ratione! Recusandae iure nostrum fugit fuga excepturi error eligendi
		perferendis quibusdam, nesciunt soluta, adipisci dolor saepe vel libero sunt consequatur ut,
		voluptate commodi maiores id? Porro harum ipsa assumenda ducimus error! Modi eaque voluptate
		eligendi alias ducimus consequuntur unde possimus dolores, temporibus ut distinctio repellendus
		perspiciatis amet quae minus, ipsa beatae porro, in doloribus. Vel, rerum deserunt. Doloremque
		officia enim ad. Earum officiis, aut impedit repellendus iusto eveniet ipsam sequi temporibus
	</p>
</section>
<section>
	<h1>Contact</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia quasi, laudantium
		facilis voluptas est placeat adipisci hic quisquam suscipit voluptatum enim minus, ullam,
		officiis quas ipsam? Vitae, quia eaque!
	</p>
	<form>
		<label for="name"
			>Name:
			<input type="text" name="name" id="name" />
		</label>
		<label for="email"
			>Email:
			<input type="text" name="email" id="email" />
		</label>
		<label for="message"
			>Message:
			<textarea name="message" id="message" />
		</label>
		<button>Send it!</button>
	</form>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
	/* input, */
	textarea {
		/* height: 100%; */
		height: 15rem;
		margin-block-end: 2rem;
		border: 2px inset rgb(118, 118, 118);
	}
	label {
		display: flex;
		flex-direction: column;
		margin-block-end: 2rem;
	}
	@media screen and (min-width: 1075px) {
		form {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			gap: 1rem;
		}
		label{
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
