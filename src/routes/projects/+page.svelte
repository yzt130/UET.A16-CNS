<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Projects | Digital Portfolio</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="mb-16 text-center" in:fly={{ y: -20, duration: 600 }}>
		<h1 class="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
			Các Dự Án <span class="text-gradient">Thành Phần</span>
		</h1>
		<p class="mx-auto max-w-2xl text-slate-400">
			Tổng hợp các bài tập và dự án nhỏ đã thực hiện trong khóa học, thể hiện quá trình áp dụng kỹ
			năng số vào thực tiễn.
		</p>
	</div>

	<div
		class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
		in:fade={{ duration: 800, delay: 200 }}
	>
		{#each projects as project, i}
			<div in:fly={{ y: 20, duration: 500, delay: 300 + i * 100 }}>
				<ProjectCard
					title={project.title}
					summary={project.summary}
					tag={project.tag}
					link={`/projects/${project.id}`}
					icon={project.icon}
				/>
			</div>
		{/each}
	</div>
</div>
