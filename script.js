/**
* 1. CONFIGURACIÓN Y BASE DE DATOS
 */

const CONFIG = {
    whatsappNumber: "549000000000", // REEMPLAZAR CON TU NÚMERO

    sizes: {
        'A4': { name: 'A4 (Grande)', basePrice: 15000, height: 420, width: 297, discs: { left: 11, top: 8 } },
        'A5': { name: 'A5 (Mediano)', basePrice: 10000, height: 350, width: 240, discs: { left: 8, top: 6 } },
        'A6': { name: 'A6 (Pequeño)', basePrice: 7500, height: 260, width: 180, discs: { left: 6, top: 4 } },
        'Ficha': { name: 'Ficha N3', basePrice: 5000, height: 180, width: 260, discs: { left: 5, top: 6 } }
    },

    types: {
        'notas': { name: 'Notas Clásico', extra: 0, availableIn: ['A4', 'A5', 'A6', 'Ficha'] },
        'planner': { name: 'Planner Perpetuo', extra: 3000, availableIn: ['A5'] },
        'enfermeria': { name: 'Libreta Enfermería', extra: 2000, availableIn: ['A6'] }
    },

    sheetTypes: {
        'rayadas': { name: 'Rayadas' },
        'lisas': { name: 'Lisas' },
        'cuadros': { name: 'Cuadriculadas' },
        'dots': { name: 'Punteadas (Dots)' }
    },

    themes: {
        'gatito': {
            name: 'Gatito Cute',
            type: 'image',
            thumbUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150&q=80',
            frontUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
            backColor: '#F5ECE4',
            backUrl: ''
        },
        'flores': {
            name: 'Flores',
            type: 'image',
            thumbUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=150&q=80',
            frontUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80',
            backColor: '#E6F0E9',
            backUrl: ''
        },
        'solido': {
            name: 'Sólido',
            type: 'color',
            thumbUrl: ''
        }
    },

    discSizes: {
        'normal': { name: 'Normal (24mm)', extra: 0 },
        'grande': { name: 'Grande (32mm)', extra: 1500 }
    },

    discColors: [
        { id: 'rosa', hex: '#FF9A9E', name: 'Rosa Pastel' },
        { id: 'menta', hex: '#B5EAD7', name: 'Menta' },
        { id: 'lila', hex: '#C7CEEA', name: 'Lila' },
        { id: 'celeste', hex: '#A2C2E6', name: 'Celeste' },
        { id: 'amarillo', hex: '#FFF5BA', name: 'Amarillo' },
        { id: 'blanco', hex: '#FFFFFF', name: 'Blanco' },
        { id: 'transparente', hex: '#E8E8E8', name: 'Transparente' },
        { id: 'negro', hex: '#333333', name: 'Negro' }
    ],

    coverColors: [
        { hex: '#FDE2E4', name: 'Rosa' },
        { hex: '#E2ECE9', name: 'Gris Azulado' },
        { hex: '#EAD4FA', name: 'Lila' },
        { hex: '#FDF2B6', name: 'Amarillo' },
        { hex: '#D1F2EB', name: 'Menta' },
        { hex: '#FFDAC1', name: 'Durazno' }
    ]
};

/**
 * 2. ESTADO
 */
let state = {
    size: 'A5',
    type: 'notas',
    sheetType: 'rayadas',
    discPosition: 'left',
    discSize: 'normal',
    theme: 'gatito',
    customColor: '#FDE2E4',
    discColors: [],
    selectedDiscIndex: null,
    view: 'front'
};

/**
 * Helper para estilos dinámicos de botones según modo oscuro
 */
const getBtnClasses = (isActive) => {
    return isActive
        ? 'option-btn border-2 rounded-2xl cursor-pointer text-center bg-rose-400 dark:bg-dark-accent text-white dark:text-dark-bg border-rose-400 dark:border-dark-accent font-bold shadow-md'
        : 'option-btn border-2 rounded-2xl cursor-pointer text-center bg-white dark:bg-[#232332] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#333344] hover:bg-gray-50 dark:hover:bg-[#2a2a3a] font-medium';
};

const getPillClasses = (isActive) => {
    return isActive
        ? 'option-btn py-2 px-4 rounded-full border-2 text-sm bg-rose-400 dark:bg-dark-accent text-white dark:text-dark-bg border-rose-400 dark:border-dark-accent shadow-sm font-semibold'
        : 'option-btn py-2 px-4 rounded-full border-2 text-sm bg-white dark:bg-[#232332] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#333344] hover:bg-gray-50 dark:hover:bg-[#2a2a3a]';
}

/**
 * 3. INICIALIZACIÓN
 */
function init() {
    setupDarkMode();
    syncDiscCount();

    renderSizeOptions();
    renderTypeOptions();
    renderSheetOptions();
    renderThemeOptions();
    renderCoverColors();
    renderDiscColorPalette();
    updateStaticButtons(); // Botones de posición y tamaño
    updateViewButtons(); // Botones front/back

    updatePreview();
    updatePrice();
}

/**
 * Lógica de Modo Oscuro
 */
function setupDarkMode() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Set initial icon
    if (document.documentElement.classList.contains('dark')) {
        lightIcon.classList.remove('hidden');
    } else {
        darkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function () {
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    });
}

function syncDiscCount() {
    const count = CONFIG.sizes[state.size].discs[state.discPosition];
    const oldColors = [...state.discColors];
    const defaultColor = CONFIG.discColors[0].hex;

    state.discColors = Array(count).fill(defaultColor);

    for (let i = 0; i < Math.min(oldColors.length, count); i++) {
        state.discColors[i] = oldColors[i];
    }
}

/**
 * 4. RENDERIZADO DE MENÚS
 */
function renderSizeOptions() {
    const container = document.getElementById('size-options');
    container.innerHTML = '';
    for (const [key, data] of Object.entries(CONFIG.sizes)) {
        const btn = document.createElement('button');
        btn.className = `${getBtnClasses(state.size === key)} py-3 px-2 text-sm md:text-base`;
        btn.innerText = data.name;
        btn.onclick = () => setSize(key);
        container.appendChild(btn);
    }
}

function renderTypeOptions() {
    const container = document.getElementById('type-options');
    container.innerHTML = '';
    for (const [key, data] of Object.entries(CONFIG.types)) {
        if (data.availableIn.includes(state.size)) {
            const btn = document.createElement('button');
            btn.className = getPillClasses(state.type === key);
            btn.innerHTML = `${data.name} ${data.extra > 0 ? `<span class="opacity-70 text-xs">(+$${data.extra})</span>` : ''}`;
            btn.onclick = () => setType(key);
            container.appendChild(btn);
        }
    }
}

function renderSheetOptions() {
    const container = document.getElementById('sheet-options');
    container.innerHTML = '';
    for (const [key, data] of Object.entries(CONFIG.sheetTypes)) {
        const btn = document.createElement('button');
        btn.className = getPillClasses(state.sheetType === key);
        btn.innerText = data.name;
        btn.onclick = () => setSheetType(key);
        container.appendChild(btn);
    }
}

function updateStaticButtons() {
    // Posición
    document.getElementById('btn-pos-left').className = `${getBtnClasses(state.discPosition === 'left')} flex-1 py-3 px-4`;
    document.getElementById('btn-pos-top').className = `${getBtnClasses(state.discPosition === 'top')} flex-1 py-3 px-4`;

    // Tamaño
    document.getElementById('btn-disc-normal').className = `${getBtnClasses(state.discSize === 'normal')} flex-1 py-3 px-4 flex flex-col items-center justify-center`;
    document.getElementById('btn-disc-grande').className = `${getBtnClasses(state.discSize === 'grande')} flex-1 py-3 px-4 flex flex-col items-center justify-center`;
}

function renderThemeOptions() {
    const container = document.getElementById('theme-options');
    container.innerHTML = '';
    for (const [key, data] of Object.entries(CONFIG.themes)) {
        const btn = document.createElement('button');
        // Estilos base de tema (border rosa en claro, border morado en oscuro)
        let borderClass = state.theme === key
            ? 'border-rose-400 dark:border-dark-accent shadow-lg'
            : 'border-transparent dark:border-[#333344] shadow-sm';

        btn.className = `relative overflow-hidden rounded-2xl border-4 transition-all hover:scale-105 h-24 ${borderClass}`;

        if (data.type === 'image') {
            btn.style.backgroundImage = `url(${data.thumbUrl})`;
            btn.style.backgroundSize = 'cover';
            btn.style.backgroundPosition = 'center';
        } else {
            btn.style.background = 'linear-gradient(45deg, #FDE2E4, #EAD4FA, #D1F2EB)';
        }

        const label = document.createElement('div');
        label.className = 'absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-black/60 backdrop-blur-md text-xs font-bold text-gray-700 dark:text-gray-200 py-1.5 px-1';
        label.innerText = data.name;

        btn.appendChild(label);
        btn.onclick = () => setTheme(key);
        container.appendChild(btn);
    }

    const colorSelector = document.getElementById('solid-color-selector');
    if (state.theme === 'solido') colorSelector.classList.remove('hidden');
    else colorSelector.classList.add('hidden');
}

function renderCoverColors() {
    const container = document.getElementById('cover-colors');
    container.innerHTML = '';

    CONFIG.coverColors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = `color-swatch w-12 h-12 rounded-full shadow-sm border-4 ${state.customColor === color.hex ? 'border-gray-800 dark:border-white scale-110' : 'border-transparent'}`;
        btn.style.backgroundColor = color.hex;
        btn.title = color.name;
        btn.onclick = () => setCustomColor(color.hex);
        container.appendChild(btn);
    });

    // Botón "+" para Selector Nativo
    const customPickerLabel = document.createElement('label');
    const isCustomNotPreset = !CONFIG.coverColors.find(c => c.hex === state.customColor);

    customPickerLabel.className = `color-swatch w-12 h-12 rounded-full shadow-sm border-4 flex items-center justify-center cursor-pointer bg-white dark:bg-[#232332] text-gray-400 dark:text-gray-500 hover:text-rose-500 dark:hover:text-dark-accent transition-colors ${isCustomNotPreset ? 'border-gray-800 dark:border-white scale-110 text-rose-500 dark:text-dark-accent' : 'border-transparent'}`;
    customPickerLabel.title = "Elegir otro color";
    customPickerLabel.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <input type="color" class="w-0 h-0 opacity-0 absolute" value="${state.customColor}" onchange="setCustomColor(this.value)">
            `;
    container.appendChild(customPickerLabel);
}

function renderDiscColorPalette() {
    const container = document.getElementById('disc-colors');
    container.innerHTML = '';
    CONFIG.discColors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = `color-swatch w-10 h-10 rounded-full shadow-md border-2 border-white dark:border-[#333344]`;
        btn.style.backgroundColor = color.hex;
        btn.title = color.name;
        btn.onclick = () => applyDiscColor(color.hex);
        container.appendChild(btn);
    });
}

function updateViewButtons() {
    const btnFront = document.getElementById('btn-view-front');
    const btnBack = document.getElementById('btn-view-back');

    const activeClass = "px-5 py-2 rounded-full font-bold text-sm transition-all bg-white dark:bg-[#333344] shadow-sm text-rose-500 dark:text-dark-accent";
    const inactiveClass = "px-5 py-2 rounded-full font-bold text-sm transition-all text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200";

    btnFront.className = state.view === 'front' ? activeClass : inactiveClass;
    btnBack.className = state.view === 'back' ? activeClass : inactiveClass;
}

/**
 * 5. MANEJADORES DE ESTADO
 */
function setSize(newSize) {
    state.size = newSize;
    if (!CONFIG.types[state.type].availableIn.includes(newSize)) state.type = 'notas';
    syncDiscCount();
    selectAllDiscs();
    renderSizeOptions();
    renderTypeOptions();
    updatePreview();
    updatePrice();
}

function setType(newType) { state.type = newType; renderTypeOptions(); updatePrice(); }
function setSheetType(newType) { state.sheetType = newType; renderSheetOptions(); }

function setDiscPosition(pos) {
    state.discPosition = pos;
    updateStaticButtons();
    syncDiscCount();
    selectAllDiscs();
    updatePreview();
}

function setDiscSize(newSize) {
    state.discSize = newSize;
    updateStaticButtons();
    updatePreview();
    updatePrice();
}

function setTheme(newTheme) {
    state.theme = newTheme;
    renderThemeOptions();
    updatePreview();
}

function setCustomColor(hex) {
    state.customColor = hex;
    renderCoverColors();
    updatePreview();
}

function setView(view) {
    state.view = view;
    updateViewButtons();
    updatePreview();
}

function selectAllDiscs() {
    state.selectedDiscIndex = null;
    document.getElementById('color-instruction').innerHTML = "Aplicar color a <strong>Todos los discos</strong>:";
    updatePreview();
}

function selectSpecificDisc(index) {
    state.selectedDiscIndex = index;
    document.getElementById('color-instruction').innerHTML = `Aplicar color al <strong>Disco #${index + 1}</strong>:`;
    updatePreview();
}

function applyDiscColor(hexColor) {
    if (state.selectedDiscIndex === null) {
        state.discColors = state.discColors.map(() => hexColor);
    } else {
        state.discColors[state.selectedDiscIndex] = hexColor;
    }
    updatePreview();
}

/**
 * 6. MOTOR DE RENDERIZADO VISUAL
 */
function updatePreview() {
    const cover = document.getElementById('notebook-cover');
    const discsContainer = document.getElementById('discs-container');
    const sizeData = CONFIG.sizes[state.size];

    cover.style.height = `${sizeData.height}px`;
    cover.style.width = `${sizeData.width}px`;

    const themeData = CONFIG.themes[state.theme];
    cover.innerHTML = '';

    if (state.view === 'front') {
        if (themeData.type === 'image') {
            cover.style.backgroundImage = `url(${themeData.frontUrl})`;
            cover.style.backgroundColor = 'transparent';
        } else {
            cover.style.backgroundImage = 'none';
            cover.style.backgroundColor = state.customColor;
            cover.innerHTML = `<div class="bg-white/40 dark:bg-black/30 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm text-center transform -rotate-2">
                        <span class="block font-bold text-gray-800 dark:text-white text-xl">Mi Cuaderno</span>
                        <span class="block text-gray-600 dark:text-gray-300 font-mono text-sm mt-1">${sizeData.name}</span>
                    </div>`;
        }
    } else {
        cover.style.backgroundImage = 'none';
        if (themeData.type === 'image') {
            if (themeData.backUrl) cover.style.backgroundImage = `url(${themeData.backUrl})`;
            else cover.style.backgroundColor = themeData.backColor;
        } else {
            cover.style.backgroundColor = state.customColor;
        }

        // Marca de agua @cuackdernos
        // El texto será oscuro si el fondo no es oscuro. Para simplificar, usamos un gris oscuro con opacidad.
        cover.innerHTML = `<div class="absolute bottom-6 left-0 right-0 text-center font-bold text-black/40 font-mono tracking-widest text-sm drop-shadow-sm">@cuackdernos</div>`;
    }

    let cornerClasses = '';
    if (state.discPosition === 'left') {
        cornerClasses = state.view === 'front' ? 'rounded-r-3xl rounded-l-md' : 'rounded-l-3xl rounded-r-md';
    } else {
        cornerClasses = 'rounded-b-3xl rounded-t-md';
    }
    cover.className = `notebook-page relative overflow-hidden flex items-center justify-center bg-center bg-cover bg-no-repeat ${cornerClasses}`;

    discsContainer.innerHTML = '';
    discsContainer.className = 'absolute flex justify-evenly z-20';

    const wNormal = 24, hNormal = 14;
    const wGrande = 32, hGrande = 14;

    if (state.discPosition === 'left') {
        const leftClass = state.discSize === 'normal' ? '-left-3' : '-left-4';
        const rightClass = state.discSize === 'normal' ? '-right-3' : '-right-4';

        if (state.view === 'front') discsContainer.classList.add('flex-col', leftClass, 'top-4', 'bottom-4');
        else discsContainer.classList.add('flex-col', rightClass, 'top-4', 'bottom-4');
        discsContainer.style.width = 'auto';
        discsContainer.style.height = 'auto';
    } else {
        const topClass = state.discSize === 'normal' ? '-top-3' : '-top-4';
        discsContainer.classList.add('flex-row', topClass, 'left-4', 'right-4');
        discsContainer.style.width = 'auto';
        discsContainer.style.height = 'auto';
    }

    state.discColors.forEach((color, index) => {
        const discObj = document.createElement('div');
        let w, h;

        if (state.discPosition === 'left') {
            w = state.discSize === 'normal' ? wNormal : wGrande;
            h = state.discSize === 'normal' ? hNormal : hGrande;
        } else {
            w = state.discSize === 'normal' ? hNormal : hGrande;
            h = state.discSize === 'normal' ? wNormal : wGrande;
        }

        let classes = 'disc cursor-pointer rounded-full bg-white relative';
        if (state.selectedDiscIndex === index) classes += ' selected';

        discObj.className = classes;
        discObj.style.backgroundColor = color;
        discObj.style.width = `${w}px`;
        discObj.style.height = `${h}px`;

        discObj.onclick = () => selectSpecificDisc(index);
        discsContainer.appendChild(discObj);
    });
}

/**
 * 7. PRECIO Y WHATSAPP
 */
function updatePrice() {
    let total = CONFIG.sizes[state.size].basePrice + CONFIG.types[state.type].extra + CONFIG.discSizes[state.discSize].extra;
    document.getElementById('total-price').innerText = `$${total.toLocaleString('es-AR')}`;
}

function sendWhatsApp() {
    let total = CONFIG.sizes[state.size].basePrice + CONFIG.types[state.type].extra + CONFIG.discSizes[state.discSize].extra;
    const sizeName = CONFIG.sizes[state.size].name;
    const typeName = CONFIG.types[state.type].name;
    const sheetName = CONFIG.sheetTypes[state.sheetType].name;
    const positionName = state.discPosition === 'left' ? 'Lado Izquierdo' : 'Lado Superior';
    const discSizeName = CONFIG.discSizes[state.discSize].name;

    let themeDesc = CONFIG.themes[state.theme].name;
    if (state.theme === 'solido') {
        const colorData = CONFIG.coverColors.find(c => c.hex.toLowerCase() === state.customColor.toLowerCase());
        themeDesc += ` (Color: ${colorData ? colorData.name : state.customColor})`;
    }

    const firstColor = state.discColors[0];
    const allSame = state.discColors.every(c => c === firstColor);
    let discsText = allSame
        ? `Todos color ${(CONFIG.discColors.find(c => c.hex.toLowerCase() === firstColor.toLowerCase()) || {}).name || firstColor}`
        : "Multicolor (Configurado en web)";

    let text = `👋 Hola! Me gustaría encargar un Cuackderno con esta configuración:%0A%0A`;
    text += `📏 *Tamaño:* ${sizeName}%0A`;
    text += `📝 *Interior principal:* ${typeName}%0A`;
    text += `📄 *Tipo de hojas:* ${sheetName}%0A`;
    text += `🎨 *Tema de Portada:* ${themeDesc}%0A`;
    text += `💿 *Discos:* Tamaño ${discSizeName} - Posición: ${positionName}%0A`;
    text += `   ↳ *Color de discos:* ${discsText} (${state.discColors.length} unidades)%0A%0A`;
    text += `💰 *Costo Estimado:* $${total.toLocaleString('es-AR')}%0A%0A`;
    text += `¿Me confirmas cómo seguimos? Gracias! ✨`;

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${text}`, '_blank');
}

window.onload = init;