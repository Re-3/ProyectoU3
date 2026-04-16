<template>
  <div class="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
    <!-- TopNavBar -->
    <header class="fixed top-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-xl">
      <nav class="flex justify-between items-center px-12 py-6 w-full max-w-[1920px] mx-auto">
        <div class="flex items-center gap-12">
          <a href="#" class="text-2xl font-serif tracking-tight text-[#1c1b1b]">
            The Olfactory Gallery
          </a>
          <div class="hidden md:flex items-center gap-8">
            <a href="#" class="text-[#775a19] border-b border-[#775a19]/40 pb-1 font-medium transition-colors">Collections</a>
            <a href="#" class="text-[#1c1b1b]/70 hover:text-[#775a19] transition-colors">Scent Notes</a>
            <a href="#" class="text-[#1c1b1b]/70 hover:text-[#775a19] transition-colors">Bespoke</a>
            <a href="#" class="text-[#1c1b1b]/70 hover:text-[#775a19] transition-colors">Heritage</a>
          </div>
        </div>

        <div class="flex items-center gap-6">
          <button class="material-symbols-outlined text-[#1c1b1b]/70 hover:opacity-80 transition-opacity">
            shopping_bag
          </button>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLkOn9PVAuWitVPW8AnndNPD9g4O4x2G0G5Vg-FdzPi7mKbmjvBQIOKXJuKqIDOrdm1vl3DL6a-0Y_Ct83ffktRZzvIdPsa8f2MiKQ8h-juBDMpahnYyEd3TiOIEJEqih4nh4KORi_GH3HdzpvF7svpYkYgVTzaWouqT-cdEfThILLEhmFC2aHiwDPe9bsqLpnAt2y5_VyvysdswZOV6QFXWFylalvbzLIBe8sIuRFnpzYQ40Z6pAJNca5aitcLGu_1uH-pabh7Ks"
            alt="User profile"
            class="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjkHKrU5Yugk33Y0P-kJELt7THk6NMSOIwYzihWKtOtgthD0kS20l1moV_jYbbmBSWMMPgdVoiRIY4QmztQLkoqtGg1IkfNNze2iTkZWksVHnZ1wtQ52WvpsgNFzMKfYo9LjxtkBoW1nIXW9yLybbNRIE-PwaixQmljitG2LPH1S57DozIeIXfczNpie1qjmzeWUHEVhO8iIoaoa2AVJ89IEL7HI3cyriayZQQupuwAy1RdWBM_Jc2WFfRM4D3w57TwvpARDBRNt0"
            alt="Luxury perfume hero"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent opacity-40"></div>
        </div>

        <div class="container mx-auto px-12 relative z-10">
          <div class="max-w-2xl">
            <span class="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
              Est. 1924
            </span>
            <h1 class="font-serif text-7xl md:text-8xl text-on-surface leading-[1.1] mb-8 tracking-tighter">
              The Art of <br />
              <span class="italic font-normal">Fragrance</span>
            </h1>
            <p class="font-body text-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed">
              Discover a curated collection of rare extraits and bespoke scents designed to linger in the memory long after the wearer has departed.
            </p>
            <button 
              class="bg-primary text-on-primary px-10 py-5 rounded-lg text-sm font-label uppercase tracking-widest hover:opacity-90 transition-all scale-98 shadow-sm"
            >
              Explore Collections
            </button>
          </div>
        </div>
      </section>

      <!-- Filtering Section -->
      <section class="bg-surface-container-low border-y border-outline-variant/10">
        <div class="max-w-[1920px] mx-auto px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="flex items-center gap-10">
            <button class="font-label text-xs uppercase tracking-widest text-primary border-b border-primary/40 pb-1">All Scents</button>
            <button class="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Citrus</button>
            <button class="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Floral</button>
            <button class="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Woody</button>
            <button class="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Oriental</button>
          </div>

          <div class="flex items-center gap-6">
            <div class="relative group">
              <button class="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/40 pb-1 group-hover:border-primary transition-all">
                Filter by Brand
                <span class="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
            <div class="h-4 w-px bg-outline-variant/40"></div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-on-surface-variant text-lg">search</span>
              <input 
                type="text"
                placeholder="Search gallery..."
                class="bg-transparent border-none focus:ring-0 font-label text-xs uppercase tracking-widest placeholder:text-outline/60 w-48"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Product Catalog -->
      <section class="py-24 bg-surface">
        <div class="max-w-[1920px] mx-auto px-12">
          <div class="flex justify-between items-center mb-12">
            <h2 class="font-serif text-4xl text-on-surface">Our Collection</h2>
            
            <div class="flex gap-4 items-center">
              <input 
                v-model="searchQuery"
                type="text"
                placeholder="Busca por nombre (ej: Sauvage, Valentino, Oud)"
                class="bg-surface-container px-5 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none w-80 text-sm"
                @keyup.enter="searchPerfumes"
              />
              <button 
                @click="searchPerfumes"
                class="bg-primary text-on-primary px-8 py-3 rounded-xl text-sm font-label uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-2"
              >
                <span class="material-symbols-outlined">search</span>
                Buscar
              </button>
            </div>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="text-center py-20">
            <span class="material-symbols-outlined animate-spin text-4xl">progress_activity</span>
            <p class="mt-4 text-on-surface-variant">Cargando fragancias...</p>
          </div>

          <!-- Error -->
          <div v-else-if="errorMsg" class="text-center py-20 text-red-500">
            {{ errorMsg }}
          </div>

          <!-- Sin resultados -->
          <div v-else-if="perfumes.length === 0 && !loading" class="text-center py-20 text-on-surface-variant">
            No se encontraron perfumes. Intenta con otra búsqueda.
          </div>

          <!-- Grid de perfumes -->
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            <div v-for="(perfume, index) in perfumes" :key="perfume.Name" class="group cursor-pointer">
              <div class="aspect-[3/4] mb-8 overflow-hidden bg-surface-variant relative">
                <img 
                  :src="getImageUrl(perfume, index)" 
                  :alt="perfume.Name || 'Perfume'"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  @error="handleImageError($event, index)"
                />
                <div class="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span class="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2">
                {{ perfume.Brand || 'Brand' }}
              </span>
              <h3 class="font-serif text-2xl text-on-surface mb-2">
                {{ perfume.Name }}
              </h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(note, i) in getNotes(perfume)" 
                  :key="i"
                  class="bg-secondary-container px-3 py-0.5 rounded-full text-[10px] text-on-secondary-container font-label uppercase tracking-wider"
                >
                  {{ note }}
                </span>
              </div>
              <p class="font-label text-sm text-primary">
                {{ perfume.Price ? '$' + perfume.Price : 'Precio bajo consulta' }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const perfumes = ref<any[]>([])
const loading = ref(false)
const errorMsg = ref('')

const API_BASE = 'https://api.fragella.com/api/v1'
const API_KEY = 'c56b08301c1fe4d35d3b00240f7b160887aca80ea2b4c14e95fd82ae2b539347'

async function searchPerfumes() {
  loading.value = true
  errorMsg.value = ''
  perfumes.value = []

  try {
    const query = searchQuery.value.trim() || 'sauvage'

    const res = await fetch(
      `${API_BASE}/fragrances?search=${encodeURIComponent(query)}&limit=12`,
      {
        headers: {
          'x-api-key': API_KEY,
          'Accept': 'application/json'
        }
      }
    )

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    perfumes.value = Array.isArray(data) ? data : (data.fragrances || data.results || [])

  } catch (err: any) {
    console.error(err)
    errorMsg.value = 'Error al conectar con la API. Revisa la consola para más detalles.'
  } finally {
    loading.value = false
  }
}

// === IMÁGENES CON FALLBACK DIFERENTE POR TARJETA ===
const getImageUrl = (perfume: any, index: number): string => {
  if (perfume && perfume['Image URL']) {
    return perfume['Image URL'].replace('.jpg', '.webp') // mejor calidad y fondo transparente
  }

  if (perfume && perfume['Image Fallbacks'] && perfume['Image Fallbacks'].length > 0) {
    return perfume['Image Fallbacks'][0]
  }

  // Fallback diferente para cada tarjeta (evita que todas sean iguales)
  const fallbackIds = [1015, 106, 133, 201, 251, 274, 309, 367]
  return `https://picsum.photos/id/${fallbackIds[index % fallbackIds.length]}/400/533`
}

const getNotes = (perfume: any): string[] => {
  if (perfume.Notes && Array.isArray(perfume.Notes)) return perfume.Notes.slice(0, 3)
  if (perfume['Top Notes']) return Array.isArray(perfume['Top Notes']) ? perfume['Top Notes'].slice(0, 3) : [perfume['Top Notes']]
  return []
}

const handleImageError = (event: Event, index: number) => {
  const img = event.target as HTMLImageElement
  const fallbackIds = [1015, 106, 133, 201, 251, 274, 309, 367]
  img.src = `https://picsum.photos/id/${fallbackIds[index % fallbackIds.length]}/400/533`
}
</script>

<style>
body { font-family: 'Manrope', sans-serif; }
.font-serif { font-family: 'Noto Serif', serif; }
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
