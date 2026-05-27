<script lang="ts">
	let { title, summary, link, tag } = $props<{
		title: string;
		summary: string;
		link: string;
		tag: string;
	}>();
</script>

<a href={link} class="group block h-full">
	<div class="glass-card relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
		<div
			class="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-linear-to-r from-indigo-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100"
		></div>

		<div class="mb-4">
			<span
				class="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400"
			>
				{tag}
			</span>
		</div>

		<h3
			class="mb-3 font-display text-xl font-semibold text-white transition-colors group-hover:text-indigo-400"
		>
			{title}
		</h3>

		<p class="line-clamp-3 flex-grow text-sm text-slate-400">
			{summary}
		</p>

		<div
			class="mt-6 flex items-center text-sm font-medium text-indigo-400 opacity-80 transition-opacity group-hover:opacity-100"
		>
			View Details
			<svg
				class="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				></path>
			</svg>
		</div>
	</div>
</a>
