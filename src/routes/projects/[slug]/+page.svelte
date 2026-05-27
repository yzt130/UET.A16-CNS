<script lang="ts">
	import type { PageData } from './$types';
	import { fade, fly } from 'svelte/transition';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} | Digital Portfolio</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" in:fade={{ duration: 600 }}>
	<a
		href="/projects"
		class="group mb-8 inline-flex items-center text-indigo-400 transition-colors hover:text-indigo-300"
	>
		<svg
			class="mr-2 h-5 w-5 transform transition-transform group-hover:-translate-x-1"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 19l-7-7m0 0l7-7m-7 7h18"
			></path>
		</svg>
		Quay lại danh sách dự án
	</a>

	<div
		class="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12"
		in:fly={{ y: 20, duration: 800, delay: 200 }}
	>
		<!-- Decorative background element -->
		<div
			class="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-600/10 blur-3xl"
		></div>

		<div class="mb-6">
			<span
				class="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-300"
			>
				{project.tag}
			</span>
		</div>

		<h1 class="mb-10 font-display text-3xl leading-tight font-bold text-white md:text-5xl">
			{project.title}
		</h1>

		<div class="space-y-10">
			<section>
				<h2 class="mb-4 flex items-center text-2xl font-bold text-white">
					<svg
						class="mr-3 h-6 w-6 text-indigo-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path></svg
					>
					Mục Tiêu
				</h2>
				<div class="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
					<p class="text-lg leading-relaxed text-slate-300">{project.goal}</p>
				</div>
			</section>

			<section>
				<h2 class="mb-4 flex items-center text-2xl font-bold text-white">
					<svg
						class="mr-3 h-6 w-6 text-purple-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						></path></svg
					>
					Tóm Tắt Quá Trình
				</h2>
				<div class="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
					<p class="leading-relaxed text-slate-300">{project.summary}</p>
				</div>
			</section>

			<section class="border-t border-slate-800/80 pt-6">
				<h2 class="mb-6 text-2xl font-bold text-white">Tài Liệu Đính Kèm</h2>
				<a
					href={project.fileUrl}
					download={project.fileName}
					class="group inline-flex items-center rounded-xl border border-indigo-500/30 bg-indigo-600/20 px-6 py-4 font-medium text-indigo-300 transition-all hover:bg-indigo-600/30"
				>
					<svg
						class="mr-3 h-6 w-6 transition-transform group-hover:-translate-y-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
						></path></svg
					>
					Tải Xuống {project.fileName}
				</a>
			</section>
		</div>
	</div>
</div>
