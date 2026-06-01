<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import profilePic from '$lib/assets/logo.jpg';
	import mePic from '$lib/assets/me.jpg';
</script>

<svelte:head>
	<title>Đặng Thảo Vy | Digital Portfolio</title>
	<meta
		name="description"
		content="Digital Portfolio for Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo"
	/>
</svelte:head>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden pt-20 pb-32"
>
	<!-- Background Glow -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]"
	></div>

	<div
		class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
		in:fly={{ y: 30, duration: 800, delay: 200 }}
	>
		<div
			class="glass mb-8 inline-flex items-center rounded-full border-indigo-500/30 px-4 py-2 text-sm font-medium text-indigo-300"
		>
			<span class="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-indigo-400"></span>
			Sinh viên UET
		</div>

		<h1 class="mb-6 font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
			Hi, I'm <span class="text-gradient">Đặng Thảo Vy</span>
		</h1>

		<p class="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-400 md:text-2xl">
			Chào mừng đến với Digital Portfolio của mình cho môn học <span class="font-medium text-white"
				>Nhập môn Công nghệ số &amp; Ứng dụng Trí tuệ nhân tạo</span
			>.
		</p>

		<div class="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="/projects"
				class="rounded-full bg-indigo-600 px-8 py-4 font-medium text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
			>
				Xem Dự Án
			</a>
			<a
				href="/summary"
				class="glass rounded-full px-8 py-4 font-medium text-white transition-all hover:-translate-y-1 hover:bg-white/10"
			>
				Tổng Kết Hành Trình
			</a>
		</div>
	</div>

	<!-- About Me Section -->
	<div
		class="mx-auto mt-10 mb-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
		in:fade={{ duration: 1000, delay: 400 }}
	>
		<div class="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-12">
			<div class="relative group shrink-0 transition-all duration-500 hover:-translate-y-2 md:mt-8">
				<!-- Lấp lánh xung quanh -->
				<span class="absolute -top-4 -left-4 text-4xl animate-[bounce_3s_infinite] drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] z-10 pointer-events-none">✨</span>
				<span class="absolute -bottom-2 -right-2 text-3xl animate-[pulse_2s_infinite] drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] z-10 pointer-events-none">⭐</span>
				<span class="absolute top-1/2 -right-6 text-2xl animate-[bounce_4s_infinite] drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] z-10 pointer-events-none">✨</span>
				
				<!-- Khung viền hình chữ nhật -->
				<div class="relative h-80 w-64 md:h-[420px] md:w-80 overflow-hidden rounded-2xl border-[6px] border-double border-yellow-300/50 shadow-[0_0_30px_rgba(253,224,71,0.4)] group-hover:border-yellow-300/80 group-hover:shadow-[0_0_50px_rgba(253,224,71,0.6)] transition-all duration-500">
					<img src={mePic} alt="Đặng Thảo Vy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
				</div>
			</div>
			<div class="flex-1 w-full flex flex-col justify-center">
				<h2 class="mb-8 font-display text-4xl md:text-5xl font-bold text-white text-left flex items-center justify-start gap-3">
					About Me
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
						<span class="text-3xl mt-1 drop-shadow-lg">🐧</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">Họ tên</span>
							<span class="text-lg text-white font-medium">Đặng Thảo Vy</span>
						</div>
					</div>
					
					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
						<span class="text-3xl mt-1 drop-shadow-lg">📅</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-pink-400 mb-1">Ngày sinh</span>
							<span class="text-lg text-white font-medium">30/01/2007</span>
						</div>
					</div>

					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 sm:col-span-2">
						<span class="text-3xl mt-1 drop-shadow-lg">🎓</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Ngành học</span>
							<span class="text-lg text-white font-medium">Công nghệ thông tin - Đại học Công nghệ (VNU-UET)</span>
						</div>
					</div>

					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 sm:col-span-2">
						<span class="text-3xl mt-1 drop-shadow-lg">🎮</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">Sở thích</span>
							<span class="text-lg text-white font-medium leading-relaxed">Đọc tiểu thuyết Trinh thám, Xem Esport (LOL), Chơi nhạc cụ</span>
						</div>
					</div>

					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 sm:col-span-2">
						<span class="text-3xl mt-1 drop-shadow-lg">✨</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">Quote</span>
							<span class="text-lg text-white font-medium leading-relaxed italic">"Không cần hoàn hảo, chỉ cần mỗi ngày tốt hơn một chút"</span>
						</div>
					</div>

					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 sm:col-span-2">
						<span class="text-3xl mt-1 drop-shadow-lg">🎯</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">Mục tiêu học tập</span>
							<span class="text-lg text-white font-medium leading-relaxed">Xây dựng nền tảng lập trình vững chắc, và mở rộng ngôn ngữ cá nhân.</span>
						</div>
					</div>

					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 sm:col-span-2">
						<span class="text-3xl mt-1 drop-shadow-lg">🌟</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-fuchsia-400 mb-1">Định hướng phát triển</span>
							<span class="text-lg text-white font-medium leading-relaxed">Trở thành một người có chuyên môn và năng lực, tìm kiếm được bản sắc cá nhân và mở rộng góc nhìn thực tế.</span>
						</div>
					</div>

					<div class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 sm:col-span-2">
						<span class="text-3xl mt-1 drop-shadow-lg">📬</span>
						<div>
							<span class="block text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">Liên hệ</span>
							<a href="mailto:25020436@vnu.edu.vn" class="text-lg text-white font-medium leading-relaxed hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 underline-offset-4">25020436@vnu.edu.vn</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Goals Section -->
	<div
		class="mx-auto mt-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8"
		in:fade={{ duration: 1000, delay: 600 }}
	>
		<h2 class="mb-10 text-center font-display text-3xl font-bold text-white">Mục Tiêu Portfolio</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="glass-card rounded-3xl p-8">
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
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						></path></svg
					>
				</div>
				<h3 class="mb-4 text-xl font-bold text-white">Mục Tiêu Học Tập</h3>
				<ul class="list-inside list-disc space-y-2 text-slate-400 leading-relaxed">
					<li>Thể hiện quá trình tiếp thu và làm chủ các kỹ năng số, từ thao tác cơ bản đến việc sử dụng các công cụ AI tiên tiến.</li>
					<li>Rèn luyện tư duy logic và khả năng tự học.</li>
					<li>Trang bị những kiến thức và kỹ năng cần thiết để thích ứng với kỉ nguyên số và tận dụng tiềm năng của trí tuệ nhân tạo trong học tập, nghiên cứu và cuộc sống.</li>
				</ul>
			</div>

			<div class="glass-card rounded-3xl p-8">
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20">
					<svg
						class="h-6 w-6 text-purple-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						></path></svg
					>
				</div>
				<h3 class="mb-4 text-xl font-bold text-white">Lưu Trữ &amp; Chia Sẻ</h3>
				<p class="leading-relaxed text-slate-400">
					Tạo ra một không gian số chuyên nghiệp để tổng hợp và lưu trữ các sản phẩm cá nhân, giúp
					dễ dàng truy cập, chia sẻ thành quả học tập và phục vụ cho công việc trong tương lai.
				</p>
			</div>
		</div>
	</div>
</div>
