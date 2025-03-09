<script lang="ts">
	import { scale } from 'svelte/transition';

    let isMenuOpen = false;
    let activeLink = "";
    
    const links = [
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#services" },
        { name: "Quem Somos", href: "/#about" },
        { name: "Contato", href: "/#contact" },
    ];

    const handleNavigation = (href: string) => {
        activeLink = href;
        isMenuOpen = false;
    };
</script>

<header class="bg-[#1e1e1e]/90 backdrop-blur-md fixed w-full z-50 shadow-xl">
    <nav class="container mx-auto px-4 py-3">
        <!-- Desktop -->
        <div class="hidden md:flex justify-between items-center">
            <a 
                href="/" 
                class="group relative text-2xl font-bold tracking-tighter"
                style="color: #ffe400"
            >
                <span class="relative z-10">XP<span class="text-white italic">T</span>O</span>
                <span class="absolute inset-0 bg-[#ffe400] h-full w-0 group-hover:w-full transition-all duration-300 mix-blend-overlay"></span>
            </a>
            
            <div class="flex gap-6 items-center">
                {#each links as link}
                    <a
                        href={link.href}
                        on:click={() => handleNavigation(link.href)}
                        class="relative px-4 py-2 text-white/90 hover:text-[#ffe400] transition-all group"
                    >
                        <span class="relative z-10">{link.name}</span>
                        <div class="absolute bottom-0 left-0 w-full h-px bg-[#ffe400] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        {#if activeLink === link.href}
                            <div class="absolute bottom-0 left-0 w-full h-px bg-[#ffe400]"></div>
                        {/if}
                    </a>
                {/each}
            </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden flex flex-col">
            <div class="flex justify-between items-center">
                <a 
                    href="/" 
                    class="text-2xl font-bold tracking-tighter"
                    style="color: #ffe400"
                >
                    XP<span class="text-white italic">T</span>O
                </a>
                
                <button
                    class="p-2 rounded-lg border border-[#ffe400]/30 hover:border-[#ffe400]/60 transition-all"
                    on:click={() => (isMenuOpen = !isMenuOpen)}
                    aria-label="Menu de navegação"
                >
                    <svg
                        class="w-8 h-8 text-[#ffe400] transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        class:rotate-90={isMenuOpen}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {#if isMenuOpen}
                <div 
                    class="mt-4 py-4 px-6 bg-[#1e1e1e]/95 backdrop-blur-lg rounded-xl border border-[#ffffff]/10 animate-fade-in"
                    transition:scale|local={{ duration: 200 }}
                >
                    <div class="space-y-3">
                        {#each links as link}
                            <a
                                href={link.href}
                                on:click={() => handleNavigation(link.href)}
                                class="block py-3 px-4 rounded-lg text-white/90 hover:bg-[#ffffff]/5 hover:text-[#ffe400] transition-colors"
                            >
                                {link.name}
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </nav>
</header>

<style>
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
        animation: fade-in 0.3s ease-out;
    }
</style>