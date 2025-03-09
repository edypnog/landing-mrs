<!-- src/lib/components/HeroCarousel.svelte -->
<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    export let images: string[] = [
        "https://placehold.co/1600x600/EEE/31343C",
        "https://placehold.co/1600x600/EEE/31343C",
        "https://placehold.co/1600x600/EEE/31343C",
    ];

    let currentIndex = 0;
    let interval: ReturnType<typeof setInterval>;
    let slider: HTMLDivElement;

    onMount(() => startInterval());
    onDestroy(() => clearInterval(interval));

    function startInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        resetInterval();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        resetInterval();
    }

    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }
</script>

<div class="relative w-full h-[500px] overflow-hidden bg-[#1e1e1e]">
    <div
        class="flex h-full transition-transform duration-500 ease-in-out"
        style="transform: translateX(-{currentIndex * 100}%); width: {images.length * 100}%"
        bind:this={slider}
    >
        {#each images as image}
            <div class="w-full h-full flex-shrink-0">
                <!-- overlay -->
                <div class="absolute insert-0 bg-black/40 z-10"></div>
                <img src={image} alt="" class="w-full h-full object-cover" />
            </div>
        {/each}
    </div>

    <!-- Botões de navegação -->
    <button 
    class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm border-2 border-[#ffe400]/30 hover:border-[#ffe400]/60 text-[#ffe400] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
    on:click={prevSlide}
    aria-label="Slide anterior"
>
    <svg 
        class="w-6 h-6 transform -scale-x-100 group-hover:-translate-x-1 transition-transform"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
    >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M13 5l7 7-7 7M5 5l7 7-7 7" 
        />
    </svg>
</button>

<button 
    class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm border-2 border-[#ffe400]/30 hover:border-[#ffe400]/60 text-[#ffe400] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
    on:click={nextSlide}
    aria-label="Próximo slide"
>
    <svg 
        class="w-6 h-6 group-hover:translate-x-1 transition-transform"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
    >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M13 5l7 7-7 7M5 5l7 7-7 7" 
        />
    </svg>
</button>

    <!-- Indicadores -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {#each images as _, i}
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <button 
                class="w-3 h-3 rounded-full transition-all duration-300 {i === currentIndex ? 'bg-[#ffe400]' : 'bg-gray-500/50'}"
                on:click={() => {
                    currentIndex = i;
                    resetInterval();
                }}
                aria-label={`Slide ${i + 1}`}
            />
        {/each}
    </div>
</div>