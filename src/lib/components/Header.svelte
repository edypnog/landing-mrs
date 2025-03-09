<script lang=ts>
    let isMenuOpen = false;
    
    const links = [
        { name: "Início", href: "/" },
        { name: "Quem Somos", href: "/#about" },
        { name: "Serviços", href: "/#services" },
        { name: "Entre em Contato", href: "/#contact" },
    ];
</script>

<header class="bg-[#1e1e1e] fixed w-full z-50 shadow-lg">
    <nav class="container mx-auto px-4 py-4">
        <!-- Versão Desktop -->
        <div class="hidden md:flex justify-between items-center">
            <a href="/" class="text-2xl font-bold" style="color: #ffe400">
                LOGO
            </a>
            
            <div class="flex gap-8 items-center">
                {#each links as link}
                    <a
                        href={link.href}
                        class="text-white hover:text-[#ffe400] transition-colors"
                    >
                        {link.name}
                    </a>
                {/each}
            </div>
        </div>

        <!-- Versão Mobile Simplificada -->
        <div class="md:hidden flex flex-col space-y-4">
            <div class="flex justify-between items-center">
                <a href="/" class="text-2xl font-bold" style="color: #ffe400">
                    Nome da Gráfica
                </a>
                
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button
                    class="text-white focus:outline-none cursor-pointer"
                    on:click={() => (isMenuOpen = !isMenuOpen)}
                >
                    <svg
                        class="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                <div class="space-y-2">
                    {#each links as link}
                        <a
                            href={link.href}
                            class="block py-2 text-white hover:text-[#ffe400]"
                        >
                            {link.name}
                        </a>
                    {/each}
                </div>
            {/if}
        </div>
    </nav>
</header>