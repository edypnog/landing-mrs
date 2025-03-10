import "clsx";
import { c as current_component, b as ensure_array_like, d as attr, e as escape_html, f as attr_class, h as attr_style, i as stringify, j as bind_props, p as pop, a as push } from "../../chunks/index.js";
import { f as fallback } from "../../chunks/utils.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Header($$payload) {
  let isMenuOpen = false;
  let activeLink = "";
  const links = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#services" },
    { name: "Quem Somos", href: "/#about" },
    { name: "Contato", href: "/#contact" }
  ];
  const each_array = ensure_array_like(links);
  $$payload.out += `<header class="bg-[#1e1e1e]/90 backdrop-blur-md fixed w-full z-50 shadow-xl"><nav class="container mx-auto px-4 py-3"><div class="hidden md:flex justify-between items-center"><a href="/" class="group relative text-2xl font-bold tracking-tighter" style="color: #ffe400"><span class="relative z-10">XP<span class="text-white italic">T</span>O</span> <span class="absolute inset-0 bg-[#ffe400] h-full w-0 group-hover:w-full transition-all duration-300 mix-blend-overlay"></span></a> <div class="flex gap-6 items-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", link.href)} class="relative px-4 py-2 text-white/90 hover:text-[#ffe400] transition-all group"><span class="relative z-10">${escape_html(link.name)}</span> <div class="absolute bottom-0 left-0 w-full h-px bg-[#ffe400] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div> `;
    if (activeLink === link.href) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="absolute bottom-0 left-0 w-full h-px bg-[#ffe400]"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="md:hidden flex flex-col"><div class="flex justify-between items-center"><a href="/" class="text-2xl font-bold tracking-tighter" style="color: #ffe400">XP<span class="text-white italic">T</span>O</a> <button class="p-2 rounded-lg border border-[#ffe400]/30 hover:border-[#ffe400]/60 transition-all" aria-label="Menu de navegação"><svg${attr_class("w-8 h-8 text-[#ffe400] transition-transform", void 0, { "rotate-90": isMenuOpen })} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", "M4 6h16M4 12h16M4 18h16")}></path></svg></button></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></nav></header>`;
}
function HeroCarousel($$payload, $$props) {
  push();
  let images = fallback(
    $$props["images"],
    () => [
      "https://placehold.co/1600x600/EEE/31343C",
      "https://placehold.co/1600x600/EEE/31343C",
      "https://placehold.co/1600x600/EEE/31343C"
    ],
    true
  );
  let currentIndex = 0;
  let interval;
  onDestroy(() => clearInterval(interval));
  const each_array = ensure_array_like(images);
  const each_array_1 = ensure_array_like(images);
  $$payload.out += `<div class="relative w-full h-[500px] overflow-hidden bg-[#1e1e1e]"><div class="flex h-full transition-transform duration-500 ease-in-out"${attr_style(`transform: translateX(-${stringify(currentIndex * 100)}%); width: ${stringify(images.length * 100)}%`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<div class="w-full h-full flex-shrink-0"><div class="absolute insert-0 bg-black/40 z-10"></div> <img${attr("src", image)} alt="" class="w-full h-full object-cover"></div>`;
  }
  $$payload.out += `<!--]--></div>  <div class="hidden md:block"><button class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm border-2 border-[#ffe400]/30 hover:border-[#ffe400]/60 text-[#ffe400] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group" aria-label="Slide anterior"><svg class="w-6 h-6 transform -scale-x-100 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></button> <button class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm border-2 border-[#ffe400]/30 hover:border-[#ffe400]/60 text-[#ffe400] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group" aria-label="Próximo slide"><svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></button></div> <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    each_array_1[i];
    $$payload.out += `<button${attr_class(`w-3 h-3 rounded-full transition-all duration-300 ${stringify(i === currentIndex ? "bg-[#ffe400]" : "bg-gray-500/50")}`)}${attr("aria-label", `Slide ${i + 1}`)}></button>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { images });
  pop();
}
function Hero($$payload) {
  const carouselImages = [
    "https://www.zuken.com/en/wp-content/uploads/sites/2/2023/09/ai-for-pcb-design-zuken-americas-2.jpg",
    "https://www.zuken.com/en/wp-content/uploads/sites/2/2023/09/ai-for-pcb-design-zuken-americas-2.jpg",
    "https://www.zuken.com/en/wp-content/uploads/sites/2/2023/09/ai-for-pcb-design-zuken-americas-2.jpg"
  ];
  $$payload.out += `<section class="relative w-full h-[500px] flex items-center justify-center text-center text-white bg-[#1e1e1e]">`;
  HeroCarousel($$payload, { images: carouselImages });
  $$payload.out += `<!----> <div class="absolute z-20 px-6 md:px-12 text-center"><h1 class="text-3xl md:text-5xl font-bold drop-shadow-lg">Bem-vindo à Gráfica XPTO!</h1> <p class="mt-4 text-lg md:text-xl drop-shadow-md">Alta qualidade e rapidez na entrega.</p> <a href="/#contact" class="mt-6 inline-block bg-[#ffe400] hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition">Entre em contato</a></div></section>`;
}
function About($$payload) {
  const team = [
    {
      name: "Carlos Silva",
      role: "Diretor Criativo",
      photo: "https://placehold.co/300x300/1e1e1e/ffe400?text=CS",
      bio: "Especialista em design gráfico com 10 anos de experiência em projetos de grande escala."
    },
    {
      name: "Ana Souza",
      role: "Gerente de Produção",
      photo: "https://placehold.co/300x300/1e1e1e/ffe400?text=AS",
      bio: "Responsável pela execução impecável de todos os projetos da gráfica."
    }
  ];
  const each_array = ensure_array_like(team);
  $$payload.out += `<section id="about" class="bg-[#1e1e1e] min-h-screen py-16 px-4"><div class="container mx-auto"><h2 class="text-[#ffe400] text-3xl font-bold text-center mb-12">Nossa Equipe</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let member = each_array[index];
    $$payload.out += `<div${attr_class("relative group cursor-pointer transition-transform duration-500 hover:z-10", void 0, { "hover": "scale-105" })}><div${attr_class(`bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg transform transition-all duration-500 group-hover:translate-x-${stringify(index % 2 === 0 ? "-3" : "3")}`)}><div class="relative overflow-hidden rounded-lg mb-4 w-48 h-48 mx-auto"><img${attr("src", member.photo)}${attr("alt", member.name)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></div> <div class="space-y-2 text-center"><h3 class="text-xl font-bold text-white">${escape_html(member.name)}</h3> <p class="text-[#ffe400] font-medium text-sm">${escape_html(member.role)}</p> <p class="text-gray-300 text-sm leading-relaxed">${escape_html(member.bio)}</p></div></div> <div class="absolute inset-0 rounded-xl bg-[#ffe400]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function ServiceCard($$payload, $$props) {
  push();
  let service = $$props["service"];
  const each_array = ensure_array_like(service.features);
  $$payload.out += `<div class="group relative h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl"><div class="absolute inset-0 bg-gray-900 transition-transform duration-700 group-hover:scale-105"${attr_style(`background-image: url('${service.image}'); background-size: cover; background-position: center;`)}><div class="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/70"></div></div> <div class="relative flex h-full flex-col justify-between p-8 text-white"><div><h3 class="mb-4 text-3xl font-bold text-[#ffe400]">${escape_html(service.title)}</h3> <div class="h-1 w-16 bg-[#ffe400] transition-all duration-500 group-hover:w-24"></div></div> <ul class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let feature = each_array[$$index];
    $$payload.out += `<li class="flex items-center gap-3 opacity-90 transition-opacity hover:opacity-100"><svg class="h-6 w-6 flex-shrink-0 text-[#ffe400]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-lg">${escape_html(feature)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="absolute inset-0 border-2 border-[#ffe400]/0 transition-all duration-500 group-hover:border-[#ffe400]/30"></div></div></div>`;
  bind_props($$props, { service });
  pop();
}
function Services($$payload) {
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
      title: "Personalização de Brindes",
      image: "/images/custom-gifts.jpg",
      features: [
        "Canecas e copos personalizados",
        "Chaveiros promocionais",
        "Camisetas estampadas",
        "Mousepads exclusivos"
      ]
    },
    {
      title: "Acabamento e Encadernação",
      image: "/images/finishing-binding.jpg",
      features: [
        "Laminação fosca e brilhante",
        "Encadernação wire-o e espiral",
        "Refile e vinco de alta precisão",
        "Corte especial para papéis"
      ]
    },
    {
      title: "Impressão Offset",
      image: "/images/offset-printing.jpg",
      features: [
        "Produção de grandes quantidades",
        "Revistas e jornais",
        "Pastas e catálogos",
        "Etiquetas e rótulos adesivos"
      ]
    },
    {
      title: "Sinalização e Comunicação Visual",
      image: "/images/signage.jpg",
      features: [
        "Placas de sinalização interna e externa",
        "Totens e letreiros iluminados",
        "Paineis informativos",
        "Displays para lojas"
      ]
    },
    {
      title: "Embalagens Personalizadas",
      image: "/images/custom-packaging.jpg",
      features: [
        "Caixas personalizadas para produtos",
        "Sacos de papel com logo",
        "Etiquetas adesivas para embalagens",
        "Rótulos resistentes à umidade"
      ]
    }
  ];
  const each_array = ensure_array_like(services);
  $$payload.out += `<section id="services" class="bg-[#111111] py-20 px-4"><div class="container mx-auto"><h2 class="mb-16 text-center text-4xl font-bold text-[#ffe400]">Nossos Serviços</h2> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    ServiceCard($$payload, { service });
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function ContactForm($$payload) {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.27z",
      link: "#"
    },
    {
      name: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
      link: "#"
    }
  ];
  const each_array = ensure_array_like(socialLinks);
  $$payload.out += `<section id="contact" class="bg-[#111111] py-20 px-4"><div class="container mx-auto max-w-4xl"><div class="grid gap-12 md:grid-cols-2"><div class="space-y-8 text-[#ffe400]"><h2 class="text-4xl font-bold">Fale Conosco</h2> <div class="space-y-6"><div class="flex items-start gap-4"><svg class="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <div><p class="font-semibold">Nosso Endereço</p> <p>Rua das Artes Gráficas, 123</p> <p>São Paulo - SP</p></div></div> <div class="flex items-center gap-4"><svg class="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <div><p class="font-semibold">Telefone</p> <p>(11) 9999-9999</p></div></div> <div class="flex items-center gap-4"><svg class="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <div><p class="font-semibold">E-mail</p> <p>contato@grafica.com.br</p></div></div></div> <div class="flex gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let social = each_array[$$index];
    $$payload.out += `<a${attr("href", social.link)} class="rounded-full bg-[#ffe400] p-3 text-[#1e1e1e] transition hover:scale-110"${attr("title", social.name)}><svg class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor"${attr("d", social.icon)}></path></svg></a>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="space-y-8"><div class="rounded-2xl bg-[#ffe400] p-8 shadow-xl"><form class="space-y-6"><div><label class="mb-2 block font-bold text-[#1e1e1e]">Nome</label> <input type="text" class="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-[#1e1e1e]" required></div> <div><label class="mb-2 block font-bold text-[#1e1e1e]">E-mail</label> <input type="email" class="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-[#1e1e1e]" required></div> <div><label class="mb-2 block font-bold text-[#1e1e1e]">Mensagem</label> <textarea rows="4" class="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-[#1e1e1e]" required></textarea></div> <button type="submit" class="w-full rounded-lg bg-[#1e1e1e] px-6 py-3 font-semibold text-[#ffda05] transition hover:bg-[#070707] cursor-pointer">Enviar Mensagem</button></form></div></div></div></div></section>`;
}
function Footer($$payload) {
  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#services" },
    { name: "Instagram", href: "" },
    { name: "Facebook", href: "" }
  ];
  const contacts = [
    {
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
      text: "Rua das Artes Gráficas, 123 - São Paulo/SP"
    },
    {
      icon: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-1 19h-6v-1h6v1zm1.5-3h-9V4h9v13z",
      text: "(11) 9999-9999"
    },
    {
      icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z",
      text: "contato@grafica.com.br"
    }
  ];
  const each_array = ensure_array_like(quickLinks);
  const each_array_1 = ensure_array_like(contacts);
  $$payload.out += `<footer class="bg-[#ffe400] text-[#1e1e1e] py-12 px-4"><div class="container mx-auto max-w-6xl"><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"><div class="space-y-4"><a href="/" class="text-2xl font-bold" style="color: #1e1e1e">XP<span class="text-[#ffffff] italic">T</span>O</a> <p class="text-sm">Desde 2010 criando soluções visuais</p></div> <div><h3 class="text-lg font-bold mb-4">Navegação</h3> <div class="space-y-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", link.href)} class="block hover:text-black/70 transition-colors">${escape_html(link.name)}</a>`;
  }
  $$payload.out += `<!--]--></div></div> <div><h3 class="text-lg font-bold mb-4">Contato</h3> <div class="space-y-3"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let contact = each_array_1[$$index_1];
    $$payload.out += `<div class="flex items-start gap-3"><svg class="w-5 h-5 flex-shrink-0 mt-1" viewBox="0 0 24 24"><path fill="currentColor"${attr("d", contact.icon)}></path></svg> <p class="text-sm">${escape_html(contact.text)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="h-48"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658538329!3d-23.565734367638686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1624476367582!5m2!1spt-BR!2sbr" class="w-full h-full rounded-lg border-2 border-[#1e1e1e]" loading="lazy"></iframe></div></div> <div class="border-t border-[#1e1e1e]/20 pt-8 text-center"><p class="text-sm">© 2024 Gráfica Express. Todos os direitos reservados</p></div></div></footer>`;
}
function _page($$payload) {
  Header($$payload);
  $$payload.out += `<!----> `;
  Hero($$payload);
  $$payload.out += `<!----> `;
  Services($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> `;
  ContactForm($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
