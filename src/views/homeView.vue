<!-- @format -->

<template>
	<v-container>
		<div class="collapse sticky-top" id="navbarToggleExternalContent">
			<div class="bg-dark p-4">
				<h5 class="text-white h4">Collapsed content</h5>
				<span class="text-muted">Toggleable via the navbar brand.</span>
			</div>
		</div>
		<nav class="navbar sticky-top navbar-dark bg-black">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarToggleExternalContent"
					aria-controls="navbarToggleExternalContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<ul style="display: block; floating: left">
					<li>Home</li>
					<li>Writings</li>
					<li>Certificates</li>
				</ul>
			</div>
		</nav>
	</v-container>
	<div class="row">
			<div class="col-md-8 pt-5 mt-5 ms-5 ps-5">
				<div class="vertpos text-white">
					<span class="">Hi;</span>
					<br />

					<span class=""> I am Julius Marenga</span>
					<br />

					<span class="">Fullstack Js </span><br>
					<span>web developer</span>
				</div>
			</div>
			<div class="col-md-3 pt-5 mt-5">
				<div class="vertpos2">
					<img class="pt-5 img-radius" src="../assets/gift.jpg" />
				</div>
			</div>
		</div>
</template>

<script>
	// import particle from "particles.js";
	export default {
		name: "homeView",
	};
</script>

<style>
	body {
		margin: 0;
		font: normal 75% Arial, Helvetica, sans-serif;
	}

	/* ---- particles.js container ---- */

	#app {
		width: 100%;
		height: 100%;
		background-color: #10101a;
		background-image: url("");
		background-repeat: no-repeat;
		background-size: cover;
	}

	/* ---- stats.js ---- */

	.bg-black {
		background-color: #10101a;
	}
	.js-count-particles {
		font-size: 1.1em;
	}

	#stats,
	.count-particles {
		-webkit-user-select: none;
	}

	#stats {
		border-radius: 3px 3px 0 0;
		overflow: hidden;
	}

	.count-particles {
		border-radius: 0 0 3px 3px;
	}
	.vertpos {
		font-family: Mark Pro, sans-serif;
		font-size: 5rem;
		align-items: center;
		line-height: 100%;
		letter-spacing: -0.03em;
		color: var(--color-white);
	}

	.img-radius {
		border-radius: 50%;
		width: 65%;
	}

	@media (max-width: 760px) {
		.vertpos {
			font-family: Mark Pro, sans-serif;
			font-size: 3rem;
			align-items: flex-start;
			line-height: 100%;
			letter-spacing: -0.03em;
			color: var(--color-white);
		}

		.vertpos2 {
			display: flex;
			justify-content: center;
		}
		.img-radius {
			border-radius: 50%;
			width: 30%;
		}
	}
</style>
