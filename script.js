const categories = [
    { id: 'desengrasantes',   name: 'Desengrasantes',     icon: '🔥' },
    { id: 'desinfectantes',   name: 'Desinfectantes',     icon: '🍽️' },
    { id: 'personal',         name: 'Personal',           icon: '🛡️' },
    { id: 'multiusos',        name: 'Multiusos',          icon: '🤲' },
];

const products = [
    {
        id: 1,
        name: 'TAHOR WASH',
        category: 'desengrasantes',
        description: 'Detergente espumante con alta concentración de tensoactivos. Efectivo para removertodo tipo de residuos,como alimentos, grasa ytodo todo tipo desuciedad, no contiene aroma',
        longDescription: 'Detergente espumante con alta concentración de tensoactivos. Efectivo para removertodo tipo de residuos,como alimentos, grasa ytodo todo tipo desuciedad, no contiene aroma',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 2,
        name: 'DETER PLUS',
        category: 'desengrasantes',
        description: 'Detergente desengrasante pH 11,espuma media. Gradoalimenticio. Excelente eficiencia para limpieza profunda, ylimpieza diaria.',
        longDescription: 'Detergente desengrasante pH 11,espuma media. Gradoalimenticio. Excelente eficiencia para limpieza profunda, ylimpieza diaria.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 3,
        name: 'DETER PRO',
        category: 'desengrasantes',
        description: 'Desengrasante alcalino concentrado, pH 13,espuma media. Desengrasante concentrado para limpieza profunda, y todo tipo de grasa penetrada. Es de grado alimenticio.',
        longDescription: 'Desengrasante alcalino concentrado, pH 13,espuma media. Desengrasante concentrado para limpieza profunda, y todo tipo de grasa penetrada. Es de grado alimenticio.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
        {
        id: 4,
        name: 'DETER 100 CLORADO',
        category: 'desengrasantes',
        description: 'Detergente desengrasante desinfectante, efectivo para la remoción de proteínas y grasas.',
        longDescription: 'Detergente desengrasante desinfectante, efectivo para la remoción de proteínas y grasas.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
        {
        id: 5,
        name: 'DETER 100 REMOVER',
        category: 'desengrasantes',
        description: 'Detergente espumante neutro con peróxido de hidrógeno.',
        longDescription: 'Detergente espumante neutro con peróxido de hidrógeno.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
        {
        id: 6,
        name: 'SANITIZER TC',
        category: 'desinfectantes',
        description: 'Ácido peracético al 30%. Diseñado para la limpieza y desinfección eficaz de superficies en entornos donde la higiene es crítica.',
        longDescription: 'Ácido peracético al 30%. Diseñado para la limpieza y desinfección eficaz de superficies en entornos donde la higiene es crítica.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
        {
        id: 7,
        name: 'OXIQUATS',
        category: 'desinfectantes',
        description: '50% peróxido + 10% amonios cuaternarios',
        longDescription: '50% peróxido + 10% amonios cuaternarios',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
     {
        id: 8,
        name: 'SANIBAT',
        category: 'desinfectantes',
        description: 'Amonios cuaternarios de 5ta generación al 12%',
        longDescription: 'Amonios cuaternarios de 5ta generación al 12%',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
     {
        id: 9,
        name: 'DIOXIGEN PRO',
        category: 'desinfectantes',
        description: 'Peróxido de hidrógeno al 50%',
        longDescription: 'Peróxido de hidrógeno al 50%',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
     {
        id: 10,
        name: 'TAHOX 100',
        category: 'desinfectantes',
        description: 'Ácido fosfórico al 35%, especial para limpieza ácida de contacto',
        longDescription: 'Ácido fosfórico al 35%, especial para limpieza ácida de contacto',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
     {
        id: 11,
        name: 'JDM',
        category: 'personal',
        description: 'Jabón neutro para manos',
        longDescription: 'Jabón neutro para manos',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
     {
        id: 12,
        name: 'JABÓN LÍQUIDO CON AROMA',
        category: 'personal',
        description: 'Jabón líquido de uso doméstico e institucional, higiene adecuado. Contiene tensioactivos que desprenden la suciedad, agentes humectantes que mantienen la piel hidratada y un pH balanceado para cuidar las manos en cada lavado.',
        longDescription: 'Jabón líquido de uso doméstico e institucional, higiene adecuado. Contiene tensioactivos que desprenden la suciedad, agentes humectantes que mantienen la piel hidratada y un pH balanceado para cuidar las manos en cada lavado.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 13,
        name: 'ALCOHOL GEL',
        category: 'personal',
        description: 'Gel desinfectante sin enjuague. Con su contenido superior al 70% de alcohol, recomendado para desinfectar manos, no deja las manos pegajosas.',
        longDescription: 'Gel desinfectante sin enjuague. Con su contenido superior al 70% de alcohol, recomendado para desinfectar manos, no deja las manos pegajosas.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 14,
        name: 'ALCOHOL ANTISÉPTICO',
        category: 'personal',
        description: ' Alcohol líquido al 70%.',
        longDescription: 'Alcohol líquido al 70%.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 15,
        name: 'SEGURICLEAN',
        category: 'multiusos',
        description: 'Poderoso limpiador para higiene impecable eliminando el 99.9% de gérmenes y bacterias, sino un baño resplandeciente y una fragancia duradera, garantizando un ambiente fresco y libre de impurezas con cada uso.',
        longDescription: 'Poderoso limpiador para higiene impecable eliminando el 99.9% de gérmenes y bacterias, sino un baño resplandeciente y una fragancia duradera, garantizando un ambiente fresco y libre de impurezas con cada uso.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 16,
        name: 'SEGURICLEAN DESINFTANTE',
        category: 'multiusos',
        description: 'Limpiador y desinfectante con agradable aroma. Ligeramente viscoso.',
        longDescription: 'Limpiador y desinfectante con agradable aroma. Ligeramente viscoso.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
        {
        id: 17,
        name: 'ELIMINADOR DE OLORES',
        category: 'multiusos',
        description: 'Erradica los malos olores sin enmascararlos. Purificador de ambiente, con una mezcla de fragancias dejando una sensación de higiene y limpieza.',
        longDescription: 'Erradica los malos olores sin enmascararlos. Purificador de ambiente, con una mezcla de fragancias dejando una sensación de higiene y limpieza.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 18,
        name: 'Limpia Vidrios',
        category: 'multiusos',
        description: 'Limpieza rápida de cristales y vitrinas.',
        longDescription: 'Limpieza rápida de cristales y vitrinas.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },
    {
        id: 19,
        name: 'IN-TAHOR',
        category: 'multiusos',
        description: 'APC (Limpieza Multiusos) (All Purpose Cleaner) listo para usar.',
        longDescription: 'APC (Limpieza Multiusos) (All Purpose Cleaner) listo para usar.',
        features: [
            'text',
            'text',
            'text',
            'text',
        ],
        images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80'],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: 'new'
    },

    
];

const sizeLabels = {
    '500ml': '500 ml',
    '1L':    '1 Litro',
    'galon': 'Galón',
    'caneca':'Caneca'
};

const sizeIcons = {
    '500ml': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2h8l2 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8l2-6z"/><path d="M6 8h12"/></svg>',
    '1L':    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12l2 8v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10l2-8z"/><path d="M4 10h16"/></svg>',
    'galon': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v4"/><path d="M15 3v4"/><path d="M3 10h18"/></svg>',
    'caneca':'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>'
};

const IVA_RATE       = 0.15;
const WHATSAPP_NUMBER = '+593958812843';

/* ─── STATE ─── */
let cart        = [];
let currentSlide= 0;
let sliderInterval;

/* ─── DOM REFS ─── */
const header          = document.getElementById('header');
const mobileMenuBtn   = document.getElementById('mobileMenuBtn');
const mobileMenu      = document.getElementById('mobileMenu');
const searchInput     = document.getElementById('searchInput');
const searchSuggestions=document.getElementById('searchSuggestions');
const cartBtn         = document.getElementById('cartBtn');
const cartCountEl     = document.getElementById('cartCount');
const cartDrawer      = document.getElementById('cartDrawer');
const cartOverlay     = document.getElementById('cartOverlay');
const closeCart       = document.getElementById('closeCart');
const cartItems       = document.getElementById('cartItems');
const cartSummary     = document.getElementById('cartSummary');
const productModal    = document.getElementById('productModal');
const closeProductModal=document.getElementById('closeProductModal');
const productModalContent=document.getElementById('productModalContent');
const checkoutModal   = document.getElementById('checkoutModal');
const closeCheckoutModal=document.getElementById('closeCheckoutModal');
const checkoutFormEl  = document.getElementById('checkoutForm');
const checkoutSummary = document.getElementById('checkoutSummary');
const categoriesGrid  = document.getElementById('categoriesGrid');
const filterButtons   = document.getElementById('filterButtons');
const productsGrid    = document.getElementById('productsGrid');
const prevSlide       = document.getElementById('prevSlide');
const nextSlide       = document.getElementById('nextSlide');
const sliderDots      = document.getElementById('sliderDots');
const newsletterForm  = document.getElementById('newsletterForm');

/* ══════════════════════════════
   INIT
══════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    renderCategories();
    renderFilterButtons();
    renderProducts();
    updateCartUI();
    initEventListeners();
    renderFooterCategories();
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
});

/* ══════════════════════════════
   EVENT LISTENERS
══════════════════════════════ */
function initEventListeners() {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));

    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearch);
    document.addEventListener('click', e => {
        if (!e.target.closest('.search-container')) searchSuggestions.classList.remove('active');
    });

    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);

    closeProductModal.addEventListener('click', closeProductModalFn);
    productModal.addEventListener('click', e => { if (e.target === productModal) closeProductModalFn(); });

    closeCheckoutModal.addEventListener('click', closeCheckoutModalFn);
    checkoutModal.addEventListener('click', e => { if (e.target === checkoutModal) closeCheckoutModalFn(); });

    prevSlide.addEventListener('click', () => changeSlide(-1));
    nextSlide.addEventListener('click', () => changeSlide(1));
    sliderDots.addEventListener('click', e => {
        if (e.target.classList.contains('dot')) goToSlide(parseInt(e.target.dataset.slide));
    });

    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('¡Gracias por suscribirte! Recibirás nuestras ofertas pronto.');
        newsletterForm.reset();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior:'smooth' }); mobileMenu.classList.remove('active'); }
        });
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeProductModalFn(); closeCartDrawer(); closeCheckoutModalFn(); }
    });
}

/* ══════════════════════════════
   SLIDER
══════════════════════════════ */
function initSlider()         { startSliderAutoplay(); }
function startSliderAutoplay(){ sliderInterval = setInterval(() => changeSlide(1), 5000); }
function stopSliderAutoplay() { clearInterval(sliderInterval); }

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots   = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    stopSliderAutoplay(); startSliderAutoplay();
}
function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots   = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    stopSliderAutoplay(); startSliderAutoplay();
}

/* ══════════════════════════════
   SEARCH
══════════════════════════════ */
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length < 2) { searchSuggestions.classList.remove('active'); return; }
    const results = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    if (results.length > 0) {
        searchSuggestions.innerHTML = results.slice(0,5).map(p => {
            const firstPrice = Object.values(p.prices)[0];
            return `<div class="suggestion-item" onclick="openProductModal(${p.id})">
                <img src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=80&q=60'">
                <div>
                    <div style="font-weight:500;color:var(--foreground)">${p.name}</div>
                    <div style="font-size:.8rem;color:var(--primary-light)">$${formatPrice(firstPrice)}</div>
                </div>
            </div>`;
        }).join('');
        searchSuggestions.classList.add('active');
    } else {
        searchSuggestions.innerHTML = '<div class="suggestion-item">No se encontraron resultados</div>';
        searchSuggestions.classList.add('active');
    }
}

/* ══════════════════════════════
   CATEGORIES
══════════════════════════════ */
function renderCategories() {
    categoriesGrid.innerHTML = categories.map(cat => `
        <div class="category-card" data-category="${cat.id}" onclick="filterByCategory('${cat.id}')">
            <div class="category-icon">${cat.icon}</div>
            <h4>${cat.name}</h4>
        </div>`).join('');
}
function renderFooterCategories() {
    const el = document.getElementById('footerCategories');
    if (el) el.innerHTML = categories.map(c =>
        `<li><a href="#productos" onclick="filterByCategory('${c.id}')">${c.name}</a></li>`).join('');
}

/* ══════════════════════════════
   FILTER BUTTONS
══════════════════════════════ */
function renderFilterButtons() {
    const buttons = categories.map(cat =>
        `<button class="filter-btn" data-category="${cat.id}" onclick="filterByCategory('${cat.id}')">${cat.name}</button>`
    ).join('');
    filterButtons.innerHTML = `<button class="filter-btn active" data-category="all" onclick="filterByCategory('all')">Todos</button>${buttons}`;
}

function filterByCategory(categoryId) {
    document.querySelectorAll('.filter-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.category === categoryId));
    document.querySelectorAll('.category-card').forEach(card =>
        card.classList.toggle('active', card.dataset.category === categoryId));
    const filtered = categoryId === 'all' ? products : products.filter(p => p.category === categoryId);
    renderProducts(filtered);
}

/* ══════════════════════════════
   RENDER PRODUCTS
══════════════════════════════ */
function renderProducts(productsToRender = products) {
    productsGrid.innerHTML = productsToRender.map(product => {
        const firstPrice = Object.values(product.prices)[0];
        return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'new' ? 'Nuevo' : product.badge}</span>` : ''}
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">$${formatPrice(firstPrice)}<span class="iva"> + IVA</span></div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function getCategoryName(categoryId) {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : categoryId;
}

/* ══════════════════════════════
   PRODUCT MODAL
══════════════════════════════ */
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const defaultSize = Object.keys(product.prices)[0];

    productModalContent.innerHTML = `
        <div class="product-modal-grid">
            <div class="product-modal-gallery">
                <div class="gallery-main" id="galleryMain">
                    <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">
                </div>
                <div class="gallery-thumbs">
                    ${product.images.map((img, i) => `
                        <div class="thumb ${i === 0 ? 'active' : ''}" onclick="changeGalleryImage('${img}', this)">
                            <img src="${img}" alt="Imagen ${i+1}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=80&q=60'">
                        </div>`).join('')}
                    ${product.video ? `
                        <div class="thumb thumb-video" onclick="playVideo('${product.video}',this)">
                            <video src="${product.video}" muted></video>
                        </div>` : ''}
                </div>
            </div>
            <div class="product-modal-info">
                <h2>${product.name}</h2>
                <span class="product-modal-category">${getCategoryName(product.category)}</span>
                <p class="product-modal-description">${product.longDescription}</p>
                <div class="product-modal-features">
                    <h4>Características:</h4>
                    <ul>${product.features.map(f => `
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                            ${f}
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="size-selector">
                    <h4>Selecciona el tamaño:</h4>
                    <div class="size-options" id="sizeOptions">
                        ${Object.entries(product.prices).map(([size, price]) => `
                            <div class="size-option ${size === defaultSize ? 'active' : ''}"
                                 data-size="${size}" data-price="${price}"
                                 onclick="selectSize('${size}',${price},${product.id})">
                                <div class="size-icon">${sizeIcons[size] || sizeIcons['1L']}</div>
                                <span class="size-label">${sizeLabels[size] || size}</span>
                                <span class="size-price">$${formatPrice(price)}</span>
                            </div>`).join('')}
                    </div>
                </div>
                <div class="product-modal-pricing" id="modalPricing">
                    <div class="pricing-detail">
                        <span class="pricing-label">Precio base</span>
                        <span class="pricing-value" id="basePrice">$${formatPrice(product.prices[defaultSize])}</span>
                    </div>
                    <div class="pricing-detail">
                        <span class="pricing-label">IVA (15 %)</span>
                        <span class="pricing-value" id="ivaPrice">$${formatPrice((product.prices[defaultSize] * IVA_RATE).toFixed(2))}</span>
                    </div>
                    <div class="pricing-detail pricing-total">
                        <span class="pricing-label">Total</span>
                        <span class="pricing-value" id="totalPrice">$${formatPrice((product.prices[defaultSize] * (1 + IVA_RATE)).toFixed(2))}</span>
                    </div>
                </div>
                <div class="product-modal-actions">
                    <button class="btn btn-primary" onclick="addToCartFromModal(${product.id})">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                        </svg>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>`;

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeProductModalFn() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}
function changeGalleryImage(src, thumb) {
    document.getElementById('galleryMain').innerHTML = `<img src="${src}" alt="Producto" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">`;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}
function playVideo(src, thumb) {
    document.getElementById('galleryMain').innerHTML = `<video src="${src}" controls autoplay></video>`;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

let selectedSize  = '1L';
let selectedPrice = 0;

function selectSize(size, price, productId) {
    selectedSize = size; selectedPrice = price;
    document.querySelectorAll('.size-option').forEach(opt =>
        opt.classList.toggle('active', opt.dataset.size === size));
    const iva   = price * IVA_RATE;
    const total = price * (1 + IVA_RATE);
    document.getElementById('basePrice').textContent  = `$${formatPrice(price)}`;
    document.getElementById('ivaPrice').textContent   = `$${formatPrice(iva.toFixed(2))}`;
    document.getElementById('totalPrice').textContent = `$${formatPrice(total.toFixed(2))}`;
}

function addToCartFromModal(productId) {
    const product   = products.find(p => p.id === productId);
    if (!product) return;
    const activeSize = document.querySelector('.size-option.active');
    const size  = activeSize ? activeSize.dataset.size : Object.keys(product.prices)[0];
    const price = product.prices[size];
    addToCart(productId, size, price);
    closeProductModalFn();
    openCart();
}
function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const firstSize = Object.keys(product.prices)[0];
    addToCart(productId, firstSize, product.prices[firstSize]);
    openCart();
}

/* ══════════════════════════════
   CART
══════════════════════════════ */
function addToCart(productId, size, price) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(i => i.productId === productId && i.size === size);
    if (existing) existing.quantity++;
    else cart.push({ productId, size, price, quantity: 1 });
    updateCartUI();
}
function removeFromCart(productId, size) {
    cart = cart.filter(i => !(i.productId === productId && i.size === size));
    updateCartUI();
}
function updateQuantity(productId, size, delta) {
    const item = cart.find(i => i.productId === productId && i.size === size);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) removeFromCart(productId, size);
        else updateCartUI();
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    cartCountEl.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <p>Tu carrito está vacío</p>
            </div>`;
        cartSummary.innerHTML = '';
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const product     = products.find(p => p.id === item.productId);
        const itemTotal   = item.price * item.quantity;
        const productCode = product.codes[item.size];
        return `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=80&q=60'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-code">[${productCode}]</div>
                <div class="cart-item-name">${product.name}</div>
                <div class="cart-item-size">${sizeLabels[item.size] || item.size}</div>
                <div class="cart-item-price">$${formatPrice(itemTotal)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.productId},'${item.size}',-1)">−</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.productId},'${item.size}',1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.productId},'${item.size}')">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                    Eliminar
                </button>
            </div>
        </div>`;
    }).join('');

    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const iva      = subtotal * IVA_RATE;
    const total    = subtotal + iva;

    cartSummary.innerHTML = `
        <div class="cart-summary-row"><span>Subtotal</span><span>$${formatPrice(subtotal)}</span></div>
        <div class="cart-summary-row"><span>IVA (15 %)</span><span>$${formatPrice(iva)}</span></div>
        <div class="cart-summary-row total"><span>Total</span><span>$${formatPrice(total)}</span></div>
        <button class="btn btn-primary btn-full" onclick="openCheckoutModal()">Proceder al Pago</button>`;
}

function openCart()       { cartDrawer.classList.add('active'); cartOverlay.classList.add('active'); document.body.style.overflow='hidden'; }
function closeCartDrawer(){ cartDrawer.classList.remove('active'); cartOverlay.classList.remove('active'); document.body.style.overflow=''; }

/* ══════════════════════════════
   CHECKOUT
══════════════════════════════ */
function openCheckoutModal() {
    closeCartDrawer();
    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const iva      = subtotal * IVA_RATE;
    const total    = subtotal + iva;

    checkoutSummary.innerHTML = `
        <h4>Resumen del Pedido</h4>
        <div class="checkout-items">
            ${cart.map(item => {
                const p    = products.find(x => x.id === item.productId);
                const code = p.codes[item.size];
                return `<div class="checkout-item">
                    <span class="checkout-item-name">[${code}] ${p.name} (${sizeLabels[item.size]||item.size}) x${item.quantity}</span>
                    <span class="checkout-item-price">$${formatPrice(item.price * item.quantity)}</span>
                </div>`;
            }).join('')}
        </div>
        <div class="checkout-totals">
            <div class="checkout-row"><span>Subtotal</span><span>$${formatPrice(subtotal)}</span></div>
            <div class="checkout-row"><span>IVA (15 %)</span><span>$${formatPrice(iva)}</span></div>
            <div class="checkout-row total"><span>Total a Pagar</span><span>$${formatPrice(total)}</span></div>
        </div>`;

    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeCheckoutModalFn() { checkoutModal.classList.remove('active'); document.body.style.overflow=''; }

function handleCheckout(e) {
    e.preventDefault();
    const formData  = new FormData(checkoutFormEl);
    const data = {
        nombre:      formData.get('nombre'),
        cedula:      formData.get('cedula'),
        email:       formData.get('email'),
        celular:     formData.get('celular'),
        restaurante: formData.get('restaurante'),
        direccion:   formData.get('direccion'),
        ciudad:      formData.get('ciudad'),
        provincia:   formData.get('provincia'),
        notas:       formData.get('notas'),
    };

    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const iva      = subtotal * IVA_RATE;
    const total    = subtotal + iva;

    let message  = `🍽️ *NUEVO PEDIDO - CLEANCHEF PRO*\n\n`;
        message += `*DATOS DEL CLIENTE*\n`;
        message += `Nombre: ${data.nombre}\n`;
        message += `Cédula/RUC: ${data.cedula}\n`;
        message += `Email: ${data.email}\n`;
        message += `Celular: ${data.celular}\n`;
    if (data.restaurante) message += `Restaurante: ${data.restaurante}\n`;
        message += `Dirección: ${data.direccion}\n`;
        message += `Ciudad: ${data.ciudad}, ${data.provincia}\n`;
    if (data.notas)       message += `Notas: ${data.notas}\n`;
        message += `\n*PRODUCTOS*\n`;

    cart.forEach(item => {
        const p         = products.find(x => x.id === item.productId);
        const itemTotal = item.price * item.quantity;
        const code      = p.codes[item.size];
        message += `- [${code}] ${p.name} (${sizeLabels[item.size]||item.size}) x${item.quantity} = $${formatPrice(itemTotal)}\n`;
    });

    message += `\n*RESUMEN*\n`;
    message += `Subtotal: $${formatPrice(subtotal)}\n`;
    message += `IVA (15 %): $${formatPrice(iva)}\n`;
    message += `*TOTAL: $${formatPrice(total)}*\n\n`;
    message += `Gracias por su pedido 🙌`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+','')}?text=${encodeURIComponent(message)}`, '_blank');
    cart = [];
    updateCartUI();
    closeCheckoutModalFn();
    checkoutFormEl.reset();
    alert('¡Tu pedido ha sido enviado por WhatsApp! Te contactaremos pronto.');
}

/* ══════════════════════════════
   UTILS
══════════════════════════════ */
function formatPrice(price) {
    return Number(price).toLocaleString('es-EC', { minimumFractionDigits:2, maximumFractionDigits:2 });
}

/* ── GLOBAL EXPOSE (igual que el script hospitalario) ── */
window.openProductModal    = openProductModal;
window.changeGalleryImage  = changeGalleryImage;
window.playVideo           = playVideo;
window.selectSize          = selectSize;
window.addToCartFromModal  = addToCartFromModal;
window.quickAddToCart      = quickAddToCart;
window.updateQuantity      = updateQuantity;
window.removeFromCart      = removeFromCart;
window.openCheckoutModal   = openCheckoutModal;
window.filterByCategory    = filterByCategory;