<script>
	import { onMount } from 'svelte';

	let supertext = 'supertext';
	let title = 'title';
	let subtext = 'subtext';
	let image = '';
	let asset_url = '';
	let url;

	onMount(() => {
		url = new URL(window.location);
	});

	$: if (url) {
		url.pathname = '/image';
		if (supertext) url.searchParams.set('supertext', supertext);
		if (title) url.searchParams.set('title', title);
		if (subtext) url.searchParams.set('subtext', subtext);
		if (image) url.searchParams.set('image', encodeURI(image));
		asset_url = url.toString();
	}
</script>

<div class="container">
	<div class="form">
		<h1>Godot image asset generator</h1>
		<label>
			supertext:
			<input type="text" bind:value={supertext} />
		</label>
		<label>
			title:
			<input type="text" bind:value={title} />
		</label>
		<label>
			subtext:
			<input type="text" bind:value={subtext} />
		</label>
		<label>
			image:
			<input type="url" bind:value={image} />
		</label>
		<a href={asset_url}>Generate Image</a>
	</div>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html, body) {
		padding: 0;
		margin: 0;
		color: white;
		font-family: sans-serif;
	}

	h1 {
		margin-top: 0;
	}

	.container {
		background: linear-gradient(to top left, #081a33 0%, #070d21 70%);
		display: flex;
		width: 100%;
		height: 100vh;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		padding: 40px;
		gap: 40px;
	}

	.form {
		width: 300px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	a {
		color: #6bb1ee;
	}
</style>
