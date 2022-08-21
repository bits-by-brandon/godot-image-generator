<script lang="ts">
	import { onMount } from 'svelte';

	let supertext = 'supertext';
	let title = 'title';
	let subtext = 'subtext';
	let image = '';
	let asset_url = '';
	let url;
	let imgUploadForm: HTMLFormElement;
	let imgUploadInput: HTMLInputElement;
	let imgUploadSource: HTMLImageElement;

	onMount(() => {
		url = new URL(window.location);
	});

	function handleUpload(e: SubmitEvent) {
		e.preventDefault();
		const reader = new FileReader();
		const myFile = imgUploadInput.files[0];
		reader.addEventListener('load', () => (imgUploadSource.src = reader.result.toString()), false);
		reader.readAsDataURL(myFile);
	}

	$: if (url) {
		url.pathname = '/thumbnail/image';
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
			external image link:
			<input type="url" bind:value={image} />
		</label>
		- OR -
		<form id="img-upload-form" bind:this={imgUploadForm} on:submit={handleUpload}>
			<label for="img-upload-input">
				Upload Image
				<input
					type="file"
					id="img-upload-input"
					name="img-upload-input"
					accept="image/*"
					bind:this={imgUploadInput}
				/>
				<input type="submit" />
				<img src="" id="img-upload-source" bind:this={imgUploadSource} />
			</label>
		</form>

		<a href={asset_url}>Generate Image</a>
	</div>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html, body) {
		padding: 20px;
		margin: 0;
		font-family: sans-serif;
	}

	h1 {
		margin-top: 0;
	}

	.form {
		width: 300px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	#img-upload-source {
		width: 300px;
		max-width: 100%;
	}
</style>
