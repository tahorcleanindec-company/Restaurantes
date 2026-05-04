const categories = [
    { id: 'desengrasantes_de_cocina',      name: 'Desengrasantes de cocina',        icon: '🔥' },
    { id: 'desinfecion_y_sanitizacion',    name: 'Desinfección y sanitización',     icon: '🍽️' },
    { id: 'lavado_de_vajilla_y_utensilios',name: 'Lavado de vajilla y utensilios',  icon: '🤲' },
    { id: 'desincrustantes_y_acidos',      name: 'Desincrustantes y ácidos',        icon: '⚗️' },
    { id: 'multiusos',                     name: 'Multiusos',                       icon: '🤲' },
    { id: 'higiene_de_manos',              name: 'Higiene de manos',                icon: '🛡️' },
];


function makeSizeImages(base1L, baseGalon, baseCaneca) {
    return {
        '1L':    base1L    || 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80',
        'galon': baseGalon || 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80',
        'caneca':baseCaneca|| 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80',
    };
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80';

const products = [
    {
        id: 1,
        name: 'DETER 100',
        category: 'desengrasantes_de_cocina',
        description: 'Desengrasante alcalino para limpieza diaria en cocinas, ideal para mantener superficies libres de grasa.',
        longDescription: 'Desengrasante alcalino para limpieza diaria en cocinas, ideal para mantener superficies libres de grasa.',
        features: ['Limpieza constante', 'Buen rendimiento', 'Uso diario'],
        imagesBySize: {
            '1L':    'img/',
            'galon': 'img/',
            'caneca':'img/',
        },
        video: null,
        prices: { '1L': 2.18, 'galon': 7.4, 'caneca': 34.7 },
        codes:  { '1L': '45425', 'galon': '35852', 'caneca': '35854' },
        badge: ''
    },
    {
        id: 2,
        name: 'DETER PLUS',
        category: 'desengrasantes_de_cocina',
        description: 'Desengrasante potente para superficies de cocina, elimina grasa acumulada en estufas, campanas y equipos.',
        longDescription: 'Desengrasante potente para superficies de cocina, elimina grasa acumulada en estufas, campanas y equipos.',
        features: ['Elimina grasa pesada', 'Acción rápida', 'Reduce esfuerzo'],
        imagesBySize: {
            '1L':    'img/deter100plusL.webp',
            'galon': 'img/deter100plusG.webp',
            'caneca':'img/deter100plusC.webp',
            },


        video: null,
        prices: { '1L': 2.18, 'galon': 4.99, 'caneca': 19 },
        codes:  { '1L': '56238', 'galon': '56238', 'caneca': '36005' },
        badge: ''
    },
    {
        id: 3,
        name: 'DETER PRO',
        category: 'desengrasantes_de_cocina',
        description: 'Desengrasante alcalino concentrado, pH 13, espuma media. Para limpieza profunda y todo tipo de grasa penetrada. Grado alimenticio.',
        longDescription: 'Desengrasante alcalino concentrado, pH 13, espuma media. Desengrasante concentrado para limpieza profunda, y todo tipo de grasa penetrada. Es de grado alimenticio.',
        features: ['Concentrado', 'pH 13', 'Grado alimenticio', 'Alta eficacia'],
        imagesBySize:  {
            '1L':    'img/Deter100pro.webp',
            'galon': 'img/deter100porg.webp',
            'caneca':'img/Deter100proc.webp',
        },
        video: null,
        prices: { '1L': 3.05, 'galon': 9, 'caneca': 39.2 },
        codes:  { '1L': '45088', 'galon': '54167', 'caneca': '59228' },
        badge: ''
    },
    {
        id: 4,
        name: 'DETER 100 CLORADO',
        category: 'desengrasantes_de_cocina',
        description: 'Detergente desengrasante desinfectante, efectivo para la remoción de proteínas y grasas.',
        longDescription: 'Detergente desengrasante desinfectante, efectivo para la remoción de proteínas y grasas.',
        features: ['Desengrasante', 'Desinfectante', 'Remueve proteínas', 'Uso profesional'],
        imagesBySize:  {
            '1L':    'img/deter100cl1.webp',
            'galon': 'img/35823 DET CLORADO GBR.webp',
            'caneca':'img/35824 DET CLORADO 20L.webp',
            },
        video: null,
        prices: { '1L': 2.18, 'galon': 5.7, 'caneca': 24 },
        codes:  { '1L': '42286', 'galon': '35823', 'caneca': '35824' },
        badge: ''
    },
    {
        id: 5,
        name: 'DETER 100 REMOVER',
        category: 'desengrasantes_de_cocina',
        description: 'Detergente espumante neutro con peróxido de hidrógeno.',
        longDescription: 'Detergente espumante neutro con peróxido de hidrógeno.',
        features: ['Espumante neutro', 'Peróxido de hidrógeno', 'Alta eficacia', 'Seguro'],
        imagesBySize: {
            '1L':    'img/deter100removerlitro.webp',
            'galon': 'img/deter100removergalon.webp',
            'caneca':'img/deter100removercaneca.webp',
            },
        video: null,
        prices: { '1L': 3, 'galon': 10, 'caneca': 43 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 6,
        name: 'DETER GRILL',
        category: 'desengrasantes_de_cocina',
        description: 'Desengrasante especializado para parrillas y superficies calientes, elimina grasa carbonizada.',
        longDescription: 'Desengrasante especializado para parrillas y superficies calientes, elimina grasa carbonizada.',
        features: ['Remueve grasa quemada', 'Ideal para parrillas', 'Limpieza profunda'],
        imagesBySize:  {
            '1L':    'img/detergrilllitro.webp',
            'galon': 'img/detergrillgalon.webp',
            'caneca':'img/detergrillcaneca.webp',
            },
        video: null,
        prices: { '1L': 3.3, 'galon': 11, 'caneca': 49 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 7,
        name: 'DESTAPADOR CLEAN (SODA 20%)',
        category: 'desengrasantes_de_cocina',
        description: 'Destapador alcalino concentrado para desagües y tuberías. Disuelve grasa acumulada y residuos orgánicos en drenajes de cocina.',
        longDescription: 'Destapador alcalino concentrado para desagües y tuberías. Disuelve grasa acumulada y residuos orgánicos en drenajes de cocina.',
        features: ['Destapa tuberías rápidamente', 'Disuelve grasa sólida', 'Previene obstrucciones'],
        imagesBySize:  {
            '1L':    'img/destapadorcleanlitro.webp',
            'galon': 'img/destapadorcleangalon.webp',
            'caneca':'img/destapadorcleancaneca.webp',
            },
        video: null,
        prices: { '1L': 3, 'galon': 10, 'caneca': 40 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 8,
        name: 'SANITIZER TC',
        category: 'desinfecion_y_sanitizacion',
        description: 'Desinfectante oxidante de alto nivel para superficies y equipos.',
        longDescription: 'Desinfectante oxidante de alto nivel para superficies y equipos.',
        features: ['Alta desinfección', 'Acción rápida', 'Uso profesional'],
        imagesBySize:  {
            '1L':    'img/sanitizer tc.webp',
            'galon': 'img/35657 SANITIZER TC.webp',
            'caneca':'img/35658 SANITIZER 20L.webp',
            },
        video: null,
        prices: { '1L': 3.26, 'galon': 10, 'caneca': 39.99 },
        codes:  { '1L': '35954', 'galon': '35955', 'caneca': '35956' },
        badge: ''
    },
    {
        id: 9,
        name: 'OXIQUATS',
        category: 'desinfecion_y_sanitizacion',
        description: 'Combinación de peróxido y amonios para desinfección avanzada.',
        longDescription: 'Combinación de peróxido y amonios para desinfección avanzada.',
        features: ['Doble acción desinfectante', 'Mayor cobertura', 'Alta eficacia'],
        imagesBySize:  {
            '1L':    'img/Oxi1l.webp',
            'galon': 'img/48085 OXI QUATS GBC.webp',
            'caneca':'img/46730 OXIQUATS 20L.webp',
            },
        video: null,
        prices: { '1L': 3.5, 'galon': 11, 'caneca': 45 },
        codes:  { '1L': '47925', 'galon': '48085', 'caneca': '46730' },
        badge: ''
    },
    {
        id: 10,
        name: 'SANIBAT',
        category: 'desinfecion_y_sanitizacion',
        description: 'Desinfectante de amonio cuaternario para superficies generales en cocina.',
        longDescription: 'Desinfectante de amonio cuaternario para superficies generales en cocina.',
        features: ['Elimina bacterias', 'Uso diario', 'Seguro en superficies'],
        imagesBySize: {
            '1L':    'img/sanibat1l.webp',
            'galon': 'img/35969 SANIBAT GLBR.webp',
            'caneca':'img/36971 SANIBAT 20L.webp',
            },
        video: null,
        prices: { '1L': 2.5, 'galon': 9, 'caneca': 37 },
        codes:  { '1L': '35968', 'galon': '45623', 'caneca': '35971' },
        badge: ''
    },
    {
        id: 11,
        name: 'DIOXIGEN PRO',
        category: 'desinfecion_y_sanitizacion',
        description: 'Desinfectante potente para control de bacterias y eliminación de olores en superficies y drenajes.',
        longDescription: 'Desinfectante potente para control de bacterias y eliminación de olores en superficies y drenajes.',
        features: ['Elimina malos olores', 'Desinfección efectiva', 'Uso versátil'],
        imagesBySize:  {
            '1L':    'img/dioxigenpro1.webp',
            'galon': 'img/dioxigen gl.webp',
            'caneca':'img/Dioxigenpro.webp',
            },
        video: null,
        prices: { '1L': 3, 'galon': 7.5, 'caneca': 34.7 },
        codes:  { '1L': '42244', 'galon': '56526', 'caneca': '56786' },
        badge: ''
    },
    {
        id: 12,
        name: 'TAHOX 100',
        category: 'desinfecion_y_sanitizacion',
        description: 'Desincrustante ácido de alto rendimiento para limpieza profunda en superficies con acumulación mineral.',
        longDescription: 'Desincrustante ácido de alto rendimiento para limpieza profunda en superficies con acumulación mineral.',
        features: ['Alta capacidad desincrustante', 'Limpieza profunda', 'Resultados visibles'],
        imagesBySize: {
            '1L':    'img/tahox100 gl.webp',
            'galon': 'img/tahox100 gl.webp',
            'caneca':'img/Tahox100ca.webp',
            },
        video: null,
        prices: { '1L': 4, 'galon': 13.5, 'caneca': 57.1 },
        codes:  { '1L': '49748', 'galon': '35943', 'caneca': '52607' },
        badge: ''
    },
    {
        id: 13,
        name: 'CLORO 50 / HIPOCLORITO',
        category: 'desinfecion_y_sanitizacion',
        description: 'Desinfectante clorado para limpieza profunda y control microbiológico.',
        longDescription: 'Desinfectante clorado para limpieza profunda y control microbiológico.',
        features: ['Alta eliminación bacteriana', 'Uso económico', 'Amplio espectro'],
        imagesBySize:  {
            '1L':    'img/cloro50L.webp',
            'galon': 'img/clrogl.webp',
            'caneca':'img/cloro50C.webp',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 7.99 },
        codes:  { '1L': 'DG-001', 'galon': '35756', 'caneca': '38864' },
        badge: ''
    },
    {
        id: 14,
        name: 'JDM',
        category: 'higiene_de_manos',
        description: 'Jabón para lavado frecuente de manos en entornos de manipulación de alimentos.',
        longDescription: 'Jabón para lavado frecuente de manos en entornos de manipulación de alimentos.',
        features: ['Limpieza segura', 'Uso frecuente', 'Protege la piel'],
        imagesBySize:  {
            '1L':    'img/jdml1.webp',
            'galon': 'img/jabonliquidogl.webp',
            'caneca':'img/jabonliquidojdmc.webp',
            },
        video: null,
        prices: { '1L': 2.17, 'galon': 6.19, 'caneca': 27.00 },
        codes:  { '1L': '35888', 'galon': '35891', 'caneca': '35982' },
        badge: ''
    },
    {
        id: 15,
        name: 'JABÓN LÍQUIDO CON AROMA',
        category: 'higiene_de_manos',
        description: 'Jabón líquido de uso doméstico e institucional. Tensioactivos + humectantes + pH balanceado.',
        longDescription: 'Jabón líquido de uso doméstico e institucional, higiene adecuado. Contiene tensioactivos que desprenden la suciedad, agentes humectantes que mantienen la piel hidratada y un pH balanceado para cuidar las manos en cada lavado.',
        features: ['pH balanceado', 'Humectante', 'Aroma agradable', 'Uso diario'],
        imagesBySize:  {
            '1L':    'img/jabonliquido.jpeg',
            'galon': 'img/DETER HIPOALARGENICO GBR.webp',
            'caneca':'img/soap.webp',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 16,
        name: 'ALCOHOL GEL',
        category: 'higiene_de_manos',
        description: 'Desinfectante para manos de acción rápida sin necesidad de enjuague.',
        longDescription: 'Desinfectante para manos de acción rápida sin necesidad de enjuague.',
        features: ['Eliminación rápida de bacterias', 'Uso práctico', 'Ideal para cocina'],
        imagesBySize:  {
            '1L':    'img/gel500.webp',
            'galon': 'img/gelgl.webp',
            'caneca':'img/gelc.webp',
            },
        video: null,
        prices: { '1L': 2.99, 'galon': 9.75, 'caneca': 45.00 },
        codes:  { '1L': '40072', 'galon': '40075', 'caneca': '41066' },
        badge: ''
    },
    {
        id: 17,
        name: 'ALCOHOL ANTISÉPTICO',
        category: 'higiene_de_manos',
        description: 'Alcohol líquido al 70%.',
        longDescription: 'Alcohol líquido al 70%.',
        features: ['70% alcohol', 'Antiséptico', 'Uso directo', 'Alta pureza'],
        imagesBySize:  {
            '1L':    'img/alcohol1l.webp',
            'galon': 'img/alcoholgl.webp',
            'caneca':'img/alcoantcane.webp',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 18,
        name: 'SEGURICLEAN',
        category: 'multiusos',
        description: 'Poderoso limpiador que elimina el 99.9% de gérmenes y bacterias. Fragancia duradera.',
        longDescription: 'Poderoso limpiador para higiene impecable eliminando el 99.9% de gérmenes y bacterias, sino un baño resplandeciente y una fragancia duradera, garantizando un ambiente fresco y libre de impurezas con cada uso.',
        features: ['99.9% efectividad', 'Fragancia duradera', 'Multiusos', 'Profesional'],
        imagesBySize:  {
            '1L':    'img/seguriclean1l.webp',
            'galon': 'img/59212 SEGURICELAN BAÑO.webp',
            'caneca':'img/59267 SEGURICLEAN BAÑO 20L (3).webp',
            },
        video: null,
        prices: { '1L': 2.60, 'galon': 8.26, 'caneca': 37.40 },
        codes:  { '1L': '61046', 'galon': '59212', 'caneca': '59267' },
        badge: ''
    },
    {
        id: 19,
        name: 'SEGURICLEAN DESINFECTANTE',
        category: 'multiusos',
        description: 'Limpiador y desinfectante con agradable aroma. Ligeramente viscoso.',
        longDescription: 'Limpiador y desinfectante con agradable aroma. Ligeramente viscoso.',
        features: ['Limpia y desinfecta', 'Aroma agradable', 'Viscoso', 'Uso profesional'],
        imagesBySize:  {
            '1L':    'img/SeguriCleanLmanzana.webp',
            'galon': 'img/Seguricleangl.webp',
            'caneca':'img/',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 20,
        name: 'ELIMINADOR DE OLORES',
        category: 'multiusos',
        description: 'Erradica los malos olores sin enmascararlos. Purificador de ambiente con mezcla de fragancias.',
        longDescription: 'Erradica los malos olores sin enmascararlos. Purificador de ambiente, con una mezcla de fragancias dejando una sensación de higiene y limpieza.',
        features: ['Elimina olores de raíz', 'No los enmascara', 'Fragancia fresca', 'Ambiente limpio'],
        imagesBySize:  {
            '1L':    'img/',
            'galon': 'img/',
            'caneca':'img/',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 21,
        name: 'LIMPIA VIDRIOS',
        category: 'multiusos',
        description: 'Limpieza rápida de cristales y vitrinas.',
        longDescription: 'Limpieza rápida de cristales y vitrinas.',
        features: ['Sin rayas', 'Secado rápido', 'Cristalino', 'Fácil aplicación'],
        imagesBySize:  {
            '1L':    'img/limpiavidrios.webp',
            'galon': 'img/limpiavidriosgl.webp',
            'caneca':'img/limpiavidrioca.webp',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 22,
        name: 'IN-TAHOR',
        category: 'multiusos',
        description: 'APC (All Purpose Cleaner) — Limpiador Multiusos listo para usar.',
        longDescription: 'APC (Limpieza Multiusos) (All Purpose Cleaner) listo para usar.',
        features: ['Listo para usar', 'Multiusos', 'Alta eficacia', 'Sin diluir'],
        imagesBySize:  {
            '1L':    'img/intahorl.webp',
            'galon': 'img/',
            'caneca':'img/intahorl.webp',
            },
        video: null,
        prices: { '1L': 2.40, 'galon': 7.50, 'caneca': 30.50 },
        codes:  { '1L': '63429', 'galon': '63428', 'caneca': '63386' },
        badge: ''
    },
    {
        id: 23,
        name: 'LAVAVAJILLAS CON AROMA',
        category: 'lavado_de_vajilla_y_utensilios',
        description: 'Detergente líquido para vajilla que elimina grasa y suciedad. Aroma agradable, ideal para cocinas de alto movimiento.',
        longDescription: 'Detergente líquido para vajilla que elimina grasa y suciedad, dejando platos y utensilios limpios con un aroma agradable. Ideal para uso diario en cocinas de alto movimiento.',
        features: ['Remueve grasa fácilmente', 'Deja aroma agradable', 'Ideal para uso frecuente'],
        imagesBySize:  {
            '1L':'img/lavavajillasLmanzana.webp',
            'galon':'img/lavavajillasLnaranga.webp',



           
            },
        video: null,
        prices: { '1L': 1.99, 'galon': 5, 'caneca': 21.9 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 24,
        name: 'LAVAVAJILLAS NEUTRO',
        category: 'lavado_de_vajilla_y_utensilios',
        description: 'Detergente suave de pH neutro para limpieza segura de vajilla y utensilios. No deja residuos ni olores.',
        longDescription: 'Detergente suave de pH neutro diseñado para limpieza segura de vajilla y utensilios. No deja residuos ni olores, ideal para contacto con alimentos.',
        features: ['Seguro para superficies alimentarias', 'No deja residuos', 'Cuida manos y utensilios'],
        imagesBySize:  {
            '1L':    'img/',
            'galon': 'img/',
            'caneca':'img/',
            },
        video: null,
        prices: { '1L': 1.9, 'galon': 4.90, 'caneca': 21 },
        codes:  { '1L': '35915', 'galon': '56267', 'caneca': '56269' },
        badge: ''
    },
    {
        id: 25,
        name: 'TAHOR WASH R',
        category: 'lavado_de_vajilla_y_utensilios',
        description: 'Detergente concentrado sin aroma para lavado de utensilios y superficies en cocinas profesionales.',
        longDescription: 'Detergente concentrado sin aroma para lavado de utensilios y superficies. Diseñado para cocinas profesionales donde se requiere limpieza efectiva sin interferir con alimentos.',
        features: ['Sin aroma (uso alimentario seguro)', 'Alta eficiencia de limpieza', 'Ideal para uso profesional'],
        imagesBySize:  {
            '1L':    'img/tahorwashrL.webp',
            'galon': 'img/',
            'caneca':'img/',
            },
        video: null,
        prices: { '1L': 2.50, 'galon': 8.69, 'caneca': 32.117 },
        codes:  { '1L': '56234', 'galon': '54028', 'caneca': '51187' },
        badge: ''
    },
    {
        id: 26,
        name: 'TAHOR WASH (ALTA ESPUMA)',
        category: 'lavado_de_vajilla_y_utensilios',
        description: 'Detergente de alta espuma ideal para limpieza manual en cocinas y utensilios.',
        longDescription: 'Detergente de alta espuma ideal para limpieza manual en cocinas y utensilios. Proporciona mayor cobertura y facilita la remoción de grasa.',
        features: ['Espuma abundante', 'Mejora cobertura', 'Facilita limpieza rápida'],
        imagesBySize:  {
            '1L':    'img/tahorwhas1l.webp',
            'galon': 'img/tahorwashgl.webp',
            'caneca':'img/35922 TAHOR WASH 20L.webp',
            },
        video: null,
        prices: { '1L': 3.15, 'galon': 9.50, 'caneca': 47.82 },
        codes:  { '1L': '50367', 'galon': '35921', 'caneca': '35922' },
        badge: ''
    },
    {
        id: 27,
        name: 'DETER CLEAN (LAVAVAJILLAS AUTOMÁTICO)',
        category: 'lavado_de_vajilla_y_utensilios',
        description: 'Detergente especializado para máquinas lavavajillas industriales. Elimina grasa sin manchas ni velos.',
        longDescription: 'Detergente especializado para máquinas lavavajillas industriales, diseñado para eliminar grasa y residuos sin dejar manchas ni velos.',
        features: ['Limpieza eficiente en máquina', 'Evita manchas en vajilla', 'Alto rendimiento'],
        imagesBySize:  {
            '1L':    'img/detercleanlitro.webp',
            'galon': 'img/detercleangalon.webp',
            'caneca':'img/detercleancaneca.webp',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 29,
        name: 'ACIMUR',
        category: 'desincrustantes_y_acidos',
        description: 'Desincrustante ácido para eliminar sarro, óxido y depósitos minerales en equipos y superficies.',
        longDescription: 'Desincrustante ácido para eliminar sarro, óxido y depósitos minerales en equipos y superficies.',
        features: ['Remueve sarro', 'Recupera superficies', 'Uso técnico'],
        imagesBySize: {
            '1L':    'img/',
            'galon': 'img/',
            'caneca':'img/',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 30,
        name: 'TAHOX 100 (ÁCIDO)',
        category: 'desincrustantes_y_acidos',
        description: 'Desincrustante ácido de alto rendimiento para limpieza profunda con acumulación mineral.',
        longDescription: 'Desincrustante ácido de alto rendimiento para limpieza profunda en superficies con acumulación mineral.',
        features: ['Alta capacidad desincrustante', 'Limpieza profunda', 'Resultados visibles'],
        imagesBySize: {
            '1L':    'img/Tahox100L.webp',
            'galon': 'img/tahox100 gl.webp',
            'caneca':'img/Tahox100ca.webp',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
    {
        id: 31,
        name: 'NITRI TC PLUS',
        category: 'desincrustantes_y_acidos',
        description: 'Ácido técnico para limpieza de incrustaciones difíciles en equipos industriales.',
        longDescription: 'Ácido técnico para limpieza de incrustaciones difíciles en equipos industriales.',
        features: ['Disuelve minerales', 'Limpieza intensiva', 'Uso profesional'],
        imagesBySize:  {
            '1L':    'img/',
            'galon': 'img/',
            'caneca':'img/',
            },
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes:  { '1L': 'DG-001', 'galon': 'DG-002', 'caneca': 'DG-003' },
        badge: ''
    },
];

function getProductImages(product) {
    return Object.entries(product.prices).map(([size]) => ({
        size,
        label: sizeLabels[size] || size,
        src: (product.imagesBySize && product.imagesBySize[size]) || PLACEHOLDER,
    }));
}

function getFirstImage(product) {
    const sizes = Object.keys(product.prices);
    if (!sizes.length) return PLACEHOLDER;
    return (product.imagesBySize && product.imagesBySize[sizes[0]]) || PLACEHOLDER;
}

const sizeLabels = {
    '500ml': '500 ml',
    '1L':    '1 Litro',
    'galon': 'Galón',
    'caneca':'Caneca'
};

const sizeIcons = {
    '500ml': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2h8l2 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8l2-6z"/><path d="M6 8h12"/></svg>',
    '1L':    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12l2 8v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10l2-8z"/><path d="M4 10h16"/></svg>',
    'galon': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v4"/><path d="M15 3v4"/><path d="M3 10h18"/></svg>',
    'caneca':'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>'
};

const IVA_RATE        = 0.15;
const WHATSAPP_NUMBER = '+593958812843';

let cart         = [];
let currentSlide = 0;
let sliderInterval;

const header           = document.getElementById('header');
const mobileMenuBtn    = document.getElementById('mobileMenuBtn');
const mobileMenu       = document.getElementById('mobileMenu');
const searchInput      = document.getElementById('searchInput');
const searchSuggestions= document.getElementById('searchSuggestions');
const cartBtn          = document.getElementById('cartBtn');
const cartCountEl      = document.getElementById('cartCount');
const cartDrawer       = document.getElementById('cartDrawer');
const cartOverlay      = document.getElementById('cartOverlay');
const closeCart        = document.getElementById('closeCart');
const cartItems        = document.getElementById('cartItems');
const cartSummary      = document.getElementById('cartSummary');
const productModal     = document.getElementById('productModal');
const closeProductModal= document.getElementById('closeProductModal');
const productModalContent = document.getElementById('productModalContent');
const checkoutModal    = document.getElementById('checkoutModal');
const closeCheckoutModal= document.getElementById('closeCheckoutModal');
const checkoutFormEl   = document.getElementById('checkoutForm');
const checkoutSummary  = document.getElementById('checkoutSummary');
const categoriesGrid   = document.getElementById('categoriesGrid');
const filterButtons    = document.getElementById('filterButtons');
const productsGrid     = document.getElementById('productsGrid');
const prevSlide        = document.getElementById('prevSlide');
const nextSlide        = document.getElementById('nextSlide');
const sliderDots       = document.getElementById('sliderDots');
const newsletterForm   = document.getElementById('newsletterForm');

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

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('¡Gracias por suscribirte! Recibirás nuestras ofertas pronto.');
            newsletterForm.reset();
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior: 'smooth' }); mobileMenu.classList.remove('active'); }
        });
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeProductModalFn(); closeCartDrawer(); closeCheckoutModalFn(); }
    });
}

// ─── SLIDER ───────────────────────────────────────────────────────────────────
function initSlider()          { startSliderAutoplay(); }
function startSliderAutoplay() { sliderInterval = setInterval(() => changeSlide(1), 5000); }
function stopSliderAutoplay()  { clearInterval(sliderInterval); }

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

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length < 2) { searchSuggestions.classList.remove('active'); return; }
    const results = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    if (results.length > 0) {
        searchSuggestions.innerHTML = results.slice(0, 5).map(p => {
            const firstPrice = Object.values(p.prices)[0];
            return `<div class="suggestion-item" onclick="openProductModal(${p.id})">
                <img src="${getFirstImage(p)}" alt="${p.name}" onerror="this.src='${PLACEHOLDER}'">
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

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
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

// ─── PRODUCTS GRID ────────────────────────────────────────────────────────────
function renderProducts(productsToRender = products) {
    productsGrid.innerHTML = productsToRender.map(product => {
        const sizes = Object.keys(product.prices);
        const firstPrice = product.prices[sizes[0]];
        const sizeImgs = getProductImages(product);

        // Thumbnails row — one per size/presentation
        const thumbsHtml = sizeImgs.map(({ size, label, src }) => `
            <div class="card-thumb-item" title="${label}">
                <img src="${src}"
                     alt="${product.name} ${label}"
                     onerror="this.src='${PLACEHOLDER}'"
                     loading="lazy">
                <span>${label}</span>
            </div>`).join('');

        return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'new' ? 'Nuevo' : product.badge}</span>` : ''}
            <div class="product-image">
                <img src="${getFirstImage(product)}" alt="${product.name}"
                     onerror="this.src='${PLACEHOLDER}'" loading="lazy">
            </div>
            <div class="card-size-thumbs">
                ${thumbsHtml}
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

// ─── PRODUCT MODAL ────────────────────────────────────────────────────────────
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const sizeImgs   = getProductImages(product);
    const defaultSize = sizeImgs[0].size;
    const defaultImg  = sizeImgs[0].src;

    productModalContent.innerHTML = `
        <div class="product-modal-grid">
            <div class="product-modal-gallery">
                <div class="gallery-main" id="galleryMain">
                    <img src="${defaultImg}" alt="${product.name}"
                         onerror="this.src='${PLACEHOLDER}'">
                </div>
                <div class="gallery-thumbs" id="galleryThumbs">
                    ${sizeImgs.map(({ size, label, src }, i) => `
                        <div class="thumb ${i === 0 ? 'active' : ''}"
                             data-size="${size}"
                             onclick="switchModalImage('${src}', '${size}', ${product.id}, this)">
                            <img src="${src}" alt="${label}"
                                 onerror="this.src='${PLACEHOLDER}'">
                            <span class="thumb-label">${label}</span>
                        </div>`).join('')}
                    ${product.video ? `
                        <div class="thumb thumb-video" onclick="playVideo('${product.video}', this)">
                            <video src="${product.video}" muted></video>
                            <span class="thumb-label">Video</span>
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
                        ${Object.entries(product.prices).map(([size, price], i) => `
                            <div class="size-option ${i === 0 ? 'active' : ''}"
                                 data-size="${size}" data-price="${price}"
                                 onclick="selectSize('${size}', ${price}, ${product.id})">
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

// Called when clicking a size thumb in the modal — changes the main image AND selects the size
function switchModalImage(src, size, productId, thumbEl) {
    document.getElementById('galleryMain').innerHTML =
        `<img src="${src}" alt="Producto" onerror="this.src='${PLACEHOLDER}'">`;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');

    // Also update the size selector
    const product = products.find(p => p.id === productId);
    if (product && product.prices[size] !== undefined) {
        selectSize(size, product.prices[size], productId);
    }
}

function changeGalleryImage(src, thumb) {
    document.getElementById('galleryMain').innerHTML =
        `<img src="${src}" alt="Producto" onerror="this.src='${PLACEHOLDER}'">`;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

function playVideo(src, thumb) {
    document.getElementById('galleryMain').innerHTML =
        `<video src="${src}" controls autoplay></video>`;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

let selectedSize  = '1L';
let selectedPrice = 0;

function selectSize(size, price, productId) {
    selectedSize  = size;
    selectedPrice = price;
    document.querySelectorAll('.size-option').forEach(opt =>
        opt.classList.toggle('active', opt.dataset.size === size));
    const iva   = price * IVA_RATE;
    const total = price * (1 + IVA_RATE);
    document.getElementById('basePrice').textContent  = `$${formatPrice(price)}`;
    document.getElementById('ivaPrice').textContent   = `$${formatPrice(iva.toFixed(2))}`;
    document.getElementById('totalPrice').textContent = `$${formatPrice(total.toFixed(2))}`;
}

function addToCartFromModal(productId) {
    const product    = products.find(p => p.id === productId);
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

// ─── CART ─────────────────────────────────────────────────────────────────────
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
                <img src="${(product.imagesBySize && product.imagesBySize[item.size]) || getFirstImage(product)}"
                     alt="${product.name}"
                     onerror="this.src='${PLACEHOLDER}'">
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

function openCart()        { cartDrawer.classList.add('active'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeCartDrawer() { cartDrawer.classList.remove('active'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; }

// ─── CHECKOUT ─────────────────────────────────────────────────────────────────
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
                    <span class="checkout-item-name">[${code}] ${p.name} (${sizeLabels[item.size] || item.size}) x${item.quantity}</span>
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

function closeCheckoutModalFn() { checkoutModal.classList.remove('active'); document.body.style.overflow = ''; }

function handleCheckout(e) {
    e.preventDefault();
    const formData = new FormData(checkoutFormEl);
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

    let message  = `🍽️ *NUEVO PEDIDO - TAHOR CLEAN*\n\n`;
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
        message += `- [${code}] ${p.name} (${sizeLabels[item.size] || item.size}) x${item.quantity} = $${formatPrice(itemTotal)}\n`;
    });

    message += `\n*RESUMEN*\n`;
    message += `Subtotal: $${formatPrice(subtotal)}\n`;
    message += `IVA (15 %): $${formatPrice(iva)}\n`;
    message += `*TOTAL: $${formatPrice(total)}*\n\n`;
    message += `Gracias por su pedido 🙌`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
    cart = [];
    updateCartUI();
    closeCheckoutModalFn();
    checkoutFormEl.reset();
    alert('¡Tu pedido ha sido enviado por WhatsApp! Te contactaremos pronto.');
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function formatPrice(price) {
    return Number(price).toLocaleString('es-EC', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── GLOBALS (called from inline HTML) ───────────────────────────────────────
window.openProductModal     = openProductModal;
window.switchModalImage     = switchModalImage;
window.changeGalleryImage   = changeGalleryImage;
window.playVideo            = playVideo;
window.selectSize           = selectSize;
window.addToCartFromModal   = addToCartFromModal;
window.quickAddToCart       = quickAddToCart;
window.updateQuantity       = updateQuantity;
window.removeFromCart       = removeFromCart;
window.openCheckoutModal    = openCheckoutModal;
window.filterByCategory     = filterByCategory;
