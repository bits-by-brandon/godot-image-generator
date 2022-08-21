<script lang="ts">
	let supertext = 'supertext';
	let title = 'title';
	let externalImage = '';
	let uploadedImageInput: HTMLInputElement;
	let uploadedImagePreview: HTMLImageElement;

	function handleChange(e: Event) {
		e.preventDefault();
		const reader = new FileReader();
		const myFile = uploadedImageInput.files[0];
		reader.addEventListener('load', () => (uploadedImagePreview.src = reader.result.toString()), false);
		reader.readAsDataURL(myFile);
	}
</script>

<form action="thumbnail/image" method="POST" enctype="multipart/form-data">
	<h1>Godot image asset generator</h1>
	<label>
		supertext:
		<input name="supertext" type="text" bind:value={supertext} />
	</label>
	<label>
		title:
		<input name="title" type="text" bind:value={title} />
	</label>
	<label>
		external image link:
		<input name="externalImage" type="url" bind:value={externalImage} />
	</label>
	- OR -
	<label>
		Upload Image
		<input
			type="file"
			id="uploadedImage"
			name="uploadedImage"
			accept="image/*"
			bind:this={uploadedImageInput}
			on:change={handleChange}
		/>
		<img src="" alt="" id="imgUploadPreview" bind:this={uploadedImagePreview} />
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

	form {
		width: 300px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	#imgUploadPreview {
		width: 300px;
		max-width: 100%;
	}
</style>
