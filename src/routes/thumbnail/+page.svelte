<script lang="ts">
	let supertext = 'supertext';
	let title = 'title';
	let image = '';
	let imgUploadForm: HTMLFormElement;
	let imgUploadInput: HTMLInputElement;
	let imgUploadSource: HTMLImageElement;

	function handleChange(e: Event) {
		e.preventDefault();
		const reader = new FileReader();
		const myFile = imgUploadInput.files[0];
		reader.addEventListener('load', () => (imgUploadSource.src = reader.result.toString()), false);
		reader.readAsDataURL(myFile);
	}
</script>

<form action="thumbnail/image" method="POST" class="form" bind:this={imgUploadForm}>
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
		external image link:
		<input type="url" bind:value={image} />
	</label>
	- OR -
	<label for="img-upload-input">
		Upload Image
		<input
			type="file"
			id="img-upload-input"
			name="img-upload-input"
			accept="image/*"
			bind:this={imgUploadInput}
			on:change={handleChange}
		/>
		<img src="" alt="" id="img-upload-source" bind:this={imgUploadSource} />
	</label>

	<input type="submit" value="Generate Image" />
</form>

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
