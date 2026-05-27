<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Summary | Digital Portfolio</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" in:fade={{ duration: 600 }}>
	<div class="mb-16 text-center" in:fly={{ y: -20, duration: 800 }}>
		<h1 class="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
			Tổng Kết <span class="text-gradient">Hành Trình</span>
		</h1>
		<p class="text-xl text-slate-400">Nhìn lại chặng đường học tập và phát triển bản thân</p>
	</div>

	<div class="space-y-12">
		<!-- Cảm nhận -->
		<div
			class="glass-card relative overflow-hidden rounded-3xl p-8"
			in:fly={{ y: 20, duration: 600, delay: 200 }}
		>
			<div class="absolute -top-10 -right-10 text-slate-800/30">
				<svg
					class="h-48 w-48"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
					></path></svg
				>
			</div>

			<h2 class="relative z-10 mb-4 text-2xl font-bold text-white">Trải Nghiệm &amp; Cảm Nhận</h2>
			<p class="relative z-10 text-lg leading-relaxed text-slate-300">
				Quá trình thực hiện dự án Portfolio này là một cơ hội tuyệt vời để mình hệ thống hóa lại
				toàn bộ kiến thức đã học. Từ việc bỡ ngỡ với các công cụ mới, mình đã dần làm quen và biết
				cách áp dụng chúng vào thực tế. Khóa học "Nhập môn Công nghệ số &amp; Ứng dụng Trí tuệ nhân
				tạo" thực sự đã thay đổi cách mình tiếp cận vấn đề và xử lý thông tin trong thời đại số.
			</p>
		</div>

		<!-- Kiến thức nổi bật -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="glass-card rounded-3xl p-8" in:fly={{ x: -20, duration: 600, delay: 400 }}>
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20">
					<svg
						class="h-6 w-6 text-indigo-400"
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
				</div>
				<h3 class="mb-4 text-xl font-bold text-white">Kiến Thức Quan Trọng Nhất</h3>
				<ul class="space-y-3 text-slate-300">
					<li class="flex items-start">
						<span class="mr-2 text-indigo-400">•</span>
						<span>Kỹ năng <strong>Prompt Engineering</strong> để giao tiếp hiệu quả với AI.</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-indigo-400">•</span>
						<span>Khả năng đánh giá độ tin cậy của thông tin học thuật.</span>
					</li>
					<li class="flex items-start">
						<span class="mr-2 text-indigo-400">•</span>
						<span>Tư duy sử dụng AI <strong>có trách nhiệm</strong> và đạo đức.</span>
					</li>
				</ul>
			</div>

			<div class="glass-card rounded-3xl p-8" in:fly={{ x: 20, duration: 600, delay: 500 }}>
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20">
					<svg
						class="h-6 w-6 text-pink-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						></path></svg
					>
				</div>
				<h3 class="mb-4 text-xl font-bold text-white">Điểm Tâm Đắc &amp; Thách Thức</h3>
				<p class="mb-4 text-slate-300">
					<strong class="font-medium text-white">Tâm đắc:</strong> Khả năng ứng dụng AI vào sáng tạo nội
					dung số, giúp tiết kiệm thời gian đáng kể mà vẫn giữ được chất lượng.
				</p>
				<p class="text-slate-300">
					<strong class="font-medium text-white">Thách thức:</strong> Việc kết hợp nhịp nhàng giữa nhiều
					công cụ trực tuyến trong làm việc nhóm và giữ vững tính toàn vẹn học thuật khi có sự hỗ trợ
					của AI.
				</p>
			</div>
		</div>
	</div>
</div>
