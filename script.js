/**
* 1. CONFIGURACIÓN Y BASE DE DATOS
 */

const CONFIG = {
    whatsappNumber: "5492604841257", // REEMPLAZAR CON TU NÚMERO

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
        'Enfermeria1': {
            name: 'Enfermería Rosa',
            type: 'image',
            thumbUrl: './assets/thumbnails/1.jpg',
            frontUrl: './assets/covers/1.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/1BP.jpg'
        },
        'Enfermeria2': {
            name: 'Enfermería Azul',
            type: 'image',
            thumbUrl: './assets/thumbnails/2.jpg',
            frontUrl: './assets/covers/2.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/2BP.jpg'
        },
        'Enfermeria3': {
            name: 'Enfermería Marrón',
            type: 'image',
            thumbUrl: './assets/thumbnails/3.jpg',
            frontUrl: './assets/covers/3.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/3BP.jpg'
        },
        'Enfermeria4': {
            name: 'Enfermería Mundo',
            type: 'image',
            thumbUrl: './assets/thumbnails/4.jpg',
            frontUrl: './assets/covers/4.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/4BP.jpg'
        },
        'CompositionBook': {
            name: 'Composition Book',
            type: 'image',
            thumbUrl: './assets/thumbnails/18.jpg',
            frontUrl: './assets/covers/18.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/18BP.jpg'
        },
        'CompositionBook1': {
            name: 'CompBook Corazon',
            type: 'image',
            thumbUrl: './assets/thumbnails/5.jpg',
            frontUrl: './assets/covers/5-6.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/5BP.jpg'
        },
        'CompositionBook2': {
            name: 'CompBook Esqueleto',
            type: 'image',
            thumbUrl: './assets/thumbnails/5.jpg',
            frontUrl: './assets/covers/5-6.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/6BP.jpg'
        },
        'CompositionBook3': {
            name: 'CompBook SistNervioso',
            type: 'image',
            thumbUrl: './assets/thumbnails/7.jpg',
            frontUrl: './assets/covers/7.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/7BP.jpg'
        },
        'GateteVerde': {
            name: 'Gatete Verde',
            type: 'image',
            thumbUrl: './assets/thumbnails/8.jpg',
            frontUrl: './assets/covers/8.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/8BP.jpg'
        },
        'GateteNaranja': {
            name: 'Gatete Naranja',
            type: 'image',
            thumbUrl: './assets/thumbnails/9.jpg',
            frontUrl: './assets/covers/9.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/9BP.jpg'
        },
        'GateteRosa': {
            name: 'Gatete Rosa',
            type: 'image',
            thumbUrl: './assets/thumbnails/10.jpg',
            frontUrl: './assets/covers/10.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/10BP.jpg'
        },
        'POPCat': {
            name: 'POP Cat',
            type: 'image',
            thumbUrl: './assets/thumbnails/11.jpg',
            frontUrl: './assets/covers/11.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/11BP.jpg'
        },
        'GateteEstrella': {
            name: 'Gatete Estrella',
            type: 'image',
            thumbUrl: './assets/thumbnails/12.jpg',
            frontUrl: './assets/covers/12.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/12BP.jpg'
        },
        'ImJustAGirl': {
            name: 'I\'m Just A Girl',
            type: 'image',
            thumbUrl: './assets/thumbnails/13.jpg',
            frontUrl: './assets/covers/13.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/13BP.jpg'
        },
        'Butterfly1': {
            name: 'Familia Mariposas',
            type: 'image',
            thumbUrl: './assets/thumbnails/14.jpg',
            frontUrl: './assets/covers/14-15.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/14BP.jpg'
        },
        'Butterfly2': {
            name: 'Mariposas',
            type: 'image',
            thumbUrl: './assets/thumbnails/14.jpg',
            frontUrl: './assets/covers/14-15.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/15BP.jpg'
        },
        'FocusOnTheGood': {
            name: 'Focus On The Good',
            type: 'image',
            thumbUrl: './assets/thumbnails/16.jpg',
            frontUrl: './assets/covers/16.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/16BP.jpg'
        },
        'Panchito': {
            name: 'Panchito',
            type: 'image',
            thumbUrl: './assets/thumbnails/17.jpg',
            frontUrl: './assets/covers/17.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/17BP.jpg'
        },
        'PixelArtCats': {
            name: 'Pixel Art Cats',
            type: 'image',
            thumbUrl: './assets/thumbnails/19.jpg',
            frontUrl: './assets/covers/19.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/19BP.jpg'
        },
        'PixelArtDogs': {
            name: 'Pixel Art Dogs',
            type: 'image',
            thumbUrl: './assets/thumbnails/20.jpg',
            frontUrl: './assets/covers/20.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/19BP.jpg'
        },
        'Girasol': {
            name: 'Girasol',
            type: 'image',
            thumbUrl: './assets/thumbnails/21.jpg',
            frontUrl: './assets/covers/21.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/21BP.jpg'
        },
        'Esteto': {
            name: 'Estetoscopio',
            type: 'image',
            thumbUrl: './assets/thumbnails/22.jpg',
            frontUrl: './assets/covers/22.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/22BP.jpg'
        },
        'Heart': {
            name: 'Corazón',
            type: 'image',
            thumbUrl: './assets/thumbnails/23.jpg',
            frontUrl: './assets/covers/23.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/23BP.jpg'
        },
        'Heart2': {
            name: 'Corazones',
            type: 'image',
            thumbUrl: './assets/thumbnails/24.jpg',
            frontUrl: './assets/covers/24.jpg',
            backColor: '#F5ECE4',
            backUrl: './assets/covers/24BP.jpg'
        },
        'personalizado': {
            name: 'Mi Diseño',
            type: 'upload',
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
    theme: 'Panchito',
    customColor: '#FDE2E4',
    customUploadFront: null,
    customUploadBack: null,
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

        if (data.type === 'upload') {
            btn.style.background = 'transparent';
            btn.classList.add('border-dashed', 'border-gray-300', 'dark:border-gray-600', 'flex', 'items-center', 'justify-center');
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>`;
        }

        const label = document.createElement('div');
        label.className = 'absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-black/60 backdrop-blur-md text-xs font-bold text-gray-700 dark:text-gray-200 py-1.5 px-1';
        label.innerText = data.name;

        btn.appendChild(label);
        btn.onclick = () => setTheme(key);
        container.appendChild(btn);
    }

    const colorSelector = document.getElementById('solid-color-selector');
    const uploadSelector = document.getElementById('custom-upload-selector');

    if (state.theme === 'solido') {
        colorSelector.classList.remove('hidden');
        if (uploadSelector) uploadSelector.classList.add('hidden');
    } else if (state.theme === 'personalizado') {
        if (uploadSelector) uploadSelector.classList.remove('hidden');
        colorSelector.classList.add('hidden');
    } else {
        colorSelector.classList.add('hidden');
        if (uploadSelector) uploadSelector.classList.add('hidden');
    }
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

function handleImageUpload(event, side) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (side === 'front') {
                state.customUploadFront = e.target.result;
                state.view = 'front'; // Muestra automáticamente la portada
            } else {
                state.customUploadBack = e.target.result;
                state.view = 'back'; // Muestra automáticamente la contraportada
            }
            updateViewButtons();
            updatePreview();
        }
        reader.readAsDataURL(file);
    }
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
        } else if (themeData.type === 'upload') {
            if (state.customUploadFront) {
                cover.style.backgroundImage = `url(${state.customUploadFront})`;
                cover.style.backgroundColor = 'transparent';
                cover.innerHTML = '';
            } else {
                cover.style.backgroundImage = 'none';
                cover.style.backgroundColor = document.documentElement.classList.contains('dark') ? '#2a2a3a' : '#f3f4f6';
                cover.innerHTML = `<div class="text-gray-400 text-sm font-bold text-center px-4">Sube tu Portada</div>`;
            }
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
        } else if (themeData.type === 'upload') {
            if (state.customUploadBack) {
                cover.style.backgroundImage = `url(${state.customUploadBack})`;
                cover.style.backgroundColor = 'transparent';
                //    cover.innerHTML = `<div class="absolute bottom-6 left-0 right-0 text-center font-bold text-black/40 font-mono tracking-widest text-sm drop-shadow-sm">@cuackdernos</div>`;
            } else {
                cover.style.backgroundColor = document.documentElement.classList.contains('dark') ? '#2a2a3a' : '#f3f4f6';
                //    cover.innerHTML = `<div class="text-gray-400 text-sm font-bold text-center px-4">Sube tu Contraportada</div><div class="absolute bottom-6 left-0 right-0 text-center font-bold text-black/40 font-mono tracking-widest text-sm drop-shadow-sm">@cuackdernos</div>`;
            }
        } else {
            cover.style.backgroundColor = state.customColor;
        }

        // Marca de agua @cuackdernos (Omitida para el tipo upload ya que se renderiza dentro del if)
        //if (themeData.type !== 'upload') {
        //    cover.innerHTML = `<div class="absolute bottom-6 left-0 right-0 text-center font-bold text-black/40 font-mono tracking-widest text-sm drop-shadow-sm">@cuackdernos</div>`;
        //}
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
    } else if (state.theme === 'personalizado') {
        themeDesc = `Diseño Propio (Te enviaré las imágenes por el chat)`;
    }

    const firstColor = state.discColors[0];
    const allSame = state.discColors.every(c => c === firstColor);
    let discsText = allSame
        ? `Todos color ${(CONFIG.discColors.find(c => c.hex.toLowerCase() === firstColor.toLowerCase()) || {}).name || firstColor}`
        : "Multicolor (Configurado en web)";

    let text = `Hola Cuacky! Me gustaría encargar un Cuackderno con esta configuración:\n\n`;
    text += ` -*Tamaño:* ${sizeName}\n`;
    text += ` -*Interior principal:* ${typeName}\n`;
    text += ` -*Tipo de hojas:* ${sheetName}\n`;
    text += ` -*Tema de Portada:* ${themeDesc}\n`;
    text += ` -*Discos:* Tamaño ${discSizeName} - Posición: ${positionName}\n`;
    text += `   ↳ *Color de discos:* ${discsText} (${state.discColors.length} unidades)\n\n`;
    text += ` -*Costo Estimado:* $${total.toLocaleString('es-AR')}\n\n`;
    text += `¿Me confirmas cómo seguimos? Gracias! <3\n\n`;
    text += `Colocar notas adicionales a continuación:`;

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
}

window.onload = init;