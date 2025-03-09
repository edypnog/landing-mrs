<script lang="ts">
    export let service: {
        title: string;
        image: string;
        features: string[];
    };
</script>

<div class="group relative h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
    <!-- Imagem de fundo com overlay -->
    <div 
        class="absolute inset-0 bg-gray-900 transition-transform duration-700 group-hover:scale-105"
        style={`background-image: url('${service.image}'); background-size: cover; background-position: center;`}
    >
        <div class="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/70" />
    </div>

    <!-- Conteúdo -->
    <div class="relative flex h-full flex-col justify-between p-8 text-white">
        <!-- Cabeçalho -->
        <div>
            <h3 class="mb-4 text-3xl font-bold text-[#ffe400]">{service.title}</h3>
            <div class="h-1 w-16 bg-[#ffe400] transition-all duration-500 group-hover:w-24" />
        </div>

        <!-- Lista de serviços -->
        <ul class="space-y-4">
            {#each service.features as feature}
                <li class="flex items-center gap-3 opacity-90 transition-opacity hover:opacity-100">
                    <svg 
                        class="h-6 w-6 flex-shrink-0 text-[#ffe400]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M5 13l4 4L19 7" 
                        />
                    </svg>
                    <span class="text-lg">{feature}</span>
                </li>
            {/each}
        </ul>

        <!-- Efeito de borda hover -->
        <div class="absolute inset-0 border-2 border-[#ffe400]/0 transition-all duration-500 group-hover:border-[#ffe400]/30" />
    </div>
</div>