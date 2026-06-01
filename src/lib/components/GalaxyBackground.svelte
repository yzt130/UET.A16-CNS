<script lang="ts">
    import { onMount } from 'svelte';
    
    let stars = $state<{x: number, y: number, size: number, duration: number, delay: number, opacity: number}[]>([]);

    onMount(() => {
        stars = Array.from({ length: 200 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2.5 + 0.5,
            duration: Math.random() * 4 + 2,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.6 + 0.2
        }));
    });
</script>

<div class="fixed inset-0 -z-50 bg-[#03030a] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#03030a] to-black">
    {#each stars as star}
        <div 
            class="absolute rounded-full bg-white"
            style="
                left: {star.x}%; 
                top: {star.y}%; 
                width: {star.size}px; 
                height: {star.size}px; 
                opacity: {star.opacity};
                animation: twinkle {star.duration}s infinite alternate;
                animation-delay: {star.delay}s;
            "
        ></div>
    {/each}
</div>

<style>
    @keyframes twinkle {
        0% { opacity: 0.1; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.4); }
    }
</style>
