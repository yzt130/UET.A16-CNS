<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/logo.jpg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GalaxyBackground from '$lib/components/GalaxyBackground.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<GalaxyBackground />

<Navbar />
<main class="w-full grow">
	{@render children()}
</main>
<Footer />
