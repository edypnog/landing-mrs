<script lang="ts">
    import ServiceCard from '$lib/components/ServiceCard.svelte';
    
    const services = [
        {
            title: "Impressão Digital",
            image: "/images/digital-printing.jpg",
            features: [
                "Cartões de visita premium",
                "Flyers e folhetos",
                "Convites personalizados",
                "Adesivos de alta qualidade"
            ]
        },
        {
            title: "Grande Formato",
            image: "/images/large-format.jpg",
            features: [
                "Banners de PVC",
                "Adesivagem veicular",
                "Backdrops para eventos",
                "Letras caixa 3D"
            ]
        },
        {
            title: "Grande Formato",
            image: "/images/large-format.jpg",
            features: [
                "Banners de PVC",
                "Adesivagem veicular",
                "Backdrops para eventos",
                "Letras caixa 3D"
            ]
        },
        {
            title: "Grande Formato",
            image: "/images/large-format.jpg",
            features: [
                "Banners de PVC",
                "Adesivagem veicular",
                "Backdrops para eventos",
                "Letras caixa 3D"
            ]
        },
    ];
</script>

<section id="services" class="bg-[#111111] py-20 px-4">
    <div class="container mx-auto">
        <h2 class="mb-16 text-center text-4xl font-bold text-[#ffe400]">
            Nossos Serviços
        </h2>
        
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each services as service}
                <ServiceCard {service} />
            {/each}
        </div>
    </div>
</section>