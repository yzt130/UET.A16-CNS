<script lang="ts">
	import { page } from '$app/state';
</script>

<nav class="glass sticky top-0 z-50 border-b border-slate-800/50">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="shrink-0">
				<a
					href="/"
					class="font-display text-xl font-bold tracking-tight text-white transition-colors hover:text-indigo-400"
				>
					Đặng Thảo Vy
				</a>
			</div>
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a
						href="/"
						class="rounded-md px-3 py-2 text-sm font-medium transition-colors {page.url.pathname ===
						'/'
							? 'bg-white/10 text-white'
							: 'text-slate-300 hover:bg-white/5 hover:text-white'}">Home</a
					>
					<a
						href="/projects"
						class="rounded-md px-3 py-2 text-sm font-medium transition-colors {page.url.pathname.startsWith(
							'/projects'
						)
							? 'bg-white/10 text-white'
							: 'text-slate-300 hover:bg-white/5 hover:text-white'}">Projects</a
					>
					<a
						href="/summary"
						class="rounded-md px-3 py-2 text-sm font-medium transition-colors {page.url.pathname ===
						'/summary'
							? 'bg-white/10 text-white'
							: 'text-slate-300 hover:bg-white/5 hover:text-white'}">Summary</a
					>
				</div>
			</div>
			<!-- Mobile menu button -->
			<div class="-mr-2 flex md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>
