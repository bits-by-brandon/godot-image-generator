<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container">
	{#if data.image}
		<img src={data.image} alt="" />
	{/if}

	<div class="overlay" class:transparent={data.image} />

	<div class="copy">
		<div class="line" />
		{#if data.supertext}
			<div class="supertext">{data.supertext}</div>
		{/if}
		{#if data.title}
			<div class="title">{data.title}</div>
		{/if}
		{#if data.subtext}
			<div class="subtext">{data.subtext}</div>
		{/if}
	</div>
	<svg
		class="godot-logo"
		width="238"
		height="224"
		viewBox="0 0 238 224"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M94.6097 0C83.7589 2.41224 73.0248 5.77119 62.9614 10.8365C63.1916 19.7225 63.766 28.2366 64.9305 36.8851C61.0224 39.389 56.9151 41.538 53.2648 44.4691C49.5558 47.3224 45.7674 50.0518 42.409 53.3889C35.6997 48.9512 28.5994 44.7806 21.2839 41.0993C13.3983 49.5859 6.0246 58.7458 0.00146484 68.9957C4.73501 76.426 9.81204 83.8938 14.514 89.7178V140.343V146.773V152.625C14.6291 152.626 14.745 152.63 14.859 152.641L53.4248 156.359C55.445 156.554 57.0279 158.181 57.1685 160.205L58.358 177.229L91.9989 179.63L94.3158 163.917C94.6163 161.88 96.3646 160.369 98.4252 160.369H139.113C141.173 160.369 142.921 161.88 143.221 163.917L145.538 179.63L179.181 177.229L180.369 160.205C180.51 158.181 182.092 156.555 184.112 156.359L222.663 152.641C222.777 152.63 222.892 152.626 223.007 152.625V147.605L223.023 147.601V89.7178C228.454 82.8813 233.596 75.3404 237.536 68.9957C231.515 58.7458 224.137 49.5859 216.252 41.0993C208.938 44.7806 201.835 48.9512 195.125 53.3889C191.768 50.0518 187.987 47.3224 184.272 44.4691C180.623 41.538 176.51 39.389 172.609 36.8851C173.771 28.2366 174.346 19.7225 174.577 10.8365C164.513 5.77119 153.779 2.41224 142.923 0C138.589 7.28466 134.625 15.174 131.173 22.8859C127.08 22.2018 122.967 21.9482 118.849 21.8992V21.8923C118.821 21.8923 118.794 21.8992 118.769 21.8992C118.744 21.8992 118.716 21.8923 118.691 21.8923V21.8992C114.565 21.9482 110.456 22.2018 106.361 22.8859C102.911 15.174 98.9505 7.28466 94.6097 0ZM64.0985 92.0251C76.9353 92.0251 87.3404 102.422 87.3404 115.255C87.3404 128.096 76.9353 138.498 64.0985 138.498C51.268 138.498 40.8607 128.096 40.8607 115.255C40.8607 102.422 51.268 92.0251 64.0985 92.0251ZM173.441 92.0251C186.271 92.0251 196.676 102.422 196.676 115.255C196.676 128.096 186.271 138.498 173.441 138.498C160.602 138.498 150.198 128.096 150.198 115.255C150.198 102.422 160.602 92.0251 173.441 92.0251ZM118.767 105.619C122.898 105.619 126.255 108.667 126.255 112.417V133.813C126.255 137.567 122.898 140.612 118.767 140.612C114.635 140.612 111.286 137.567 111.286 133.813V112.417C111.286 108.667 114.635 105.619 118.767 105.619Z"
			fill="white"
		/>
		<path
			d="M188.409 164.29L187.214 181.404C187.071 183.467 185.43 185.109 183.367 185.257L142.288 188.188C142.187 188.196 142.087 188.199 141.988 188.199C139.947 188.199 138.186 186.701 137.884 184.651L135.528 168.675H102.009L99.6536 184.651C99.3372 186.801 97.4151 188.347 95.25 188.188L54.1706 185.257C52.1078 185.109 50.467 183.467 50.3231 181.404L49.1287 164.29L14.4507 160.946C14.4667 164.673 14.5146 168.756 14.5146 169.569C14.5146 206.194 60.9747 223.798 118.698 224H118.768H118.84C176.563 223.798 223.007 206.194 223.007 169.569C223.007 168.741 223.057 164.675 223.074 160.946L188.409 164.29Z"
			fill="white"
		/>
		<path
			d="M81.7476 116.633C81.7476 125.15 74.8444 132.053 66.3206 132.053C57.801 132.053 50.8936 125.15 50.8936 116.633C50.8936 108.115 57.801 101.206 66.3206 101.206C74.8444 101.206 81.7476 108.115 81.7476 116.633Z"
			fill="white"
		/>
		<path
			d="M155.791 116.633C155.791 125.15 162.692 132.053 171.21 132.053C179.735 132.053 186.637 125.15 186.637 116.633C186.637 108.115 179.735 101.206 171.21 101.206C162.692 101.206 155.791 108.115 155.791 116.633Z"
			fill="white"
		/>
	</svg>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html, body) {
		font-family: 'JetBrains Mono', monospace;
		padding: 0;
		margin: 0;
		color: white;
	}

	.container {
		position: relative;
		overflow: hidden;
		display: flex;
		height: 100vh;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		padding: 4vw;
		gap: 10%;
	}

	.copy {
		display: flex;
		flex-direction: column;
		width: 80%;
	}

	.line {
		height: 2px;
		width: 8vw;
		background: white;
		margin-bottom: 3vw;
	}

	.supertext {
		font-size: 2vw;
		text-transform: uppercase;
		color: #6bb1ee;
		margin-bottom: 2vw;
		letter-spacing: 4px;
	}

	.title {
		font-size: 6vw;
		font-weight: bold;
		margin-bottom: 2vw;
		line-height: 1.2;
	}

	.subtext {
		font-size: 2.4vw;
		margin-bottom: 12px;
		display: inline-block;
		max-width: 50%;
	}

	.overlay {
		background: linear-gradient(to top left, #081a33 0%, #070d21 70%);
		position: absolute;
		overflow: hidden;
		display: flex;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.overlay.transparent {
		background: linear-gradient(to top left, rgba(21, 79, 159, 0.6) 0%, #070d21bb 70%);
	}

	img {
		position: absolute;
		object-fit: cover;
		object-position: center;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.godot-logo {
		flex-shrink: 0;
		width: 10%;
		height: auto;
	}
</style>
