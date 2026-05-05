// Ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт загружен!');
    
    // ========== ДАННЫЕ ПО ГОРОДАМ ==========
    let currentCity = "Сургут";
    
    const cityData = {
        'Сургут': {
            address: 'г. Сургут, ул. Ленина, 25',
            phone: '+7 (3462) 12-34-56',
            hours: 'Ежедневно с 11:00 до 23:00',
            email: 'surgut@frank.ru',
            promo: '🎉 Скидка 10% для жителей Сургута!'
        },
        'Тюмень': {
            address: 'г. Тюмень, ул. Республики, 100',
            phone: '+7 (3452) 78-90-12',
            hours: 'Ежедневно с 10:00 до 00:00',
            email: 'tyumen@frank.ru',
            promo: '🎁 Бесплатный десерт в день рождения!'
        },
        'Москва': {
            address: 'г. Москва, Тверская ул., 15',
            phone: '+7 (495) 555-33-22',
            hours: 'Ежедневно с 11:00 до 02:00',
            email: 'msk@frank.ru',
            promo: '🍸 Счастливые часы с 17:00 до 19:00'
        },
        'Екатеринбург': {
            address: 'г. Екатеринбург, пр. Ленина, 88',
            phone: '+7 (343) 345-67-89',
            hours: 'Ежедневно с 11:00 до 23:00',
            email: 'ekb@frank.ru',
            promo: '🏷 Комбо-ланч за 399₽'
        }
    };
    
    // ========== ИЗОБРАЖЕНИЯ ДЛЯ КВАДРАТОВ ==========
    const squareImages = {
        'Изысканная кухня': 'https://broniboy.ru/_next/image?url=https%3A%2F%2Fimages.broniboy.ru%2FZ6pIZpuxbNQ4yuivZSEWVHnfdM4%3D%2F900x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fown%2F5c994983-5de9-4f67-94d6-8b831341a8c4%2F3b1d110ad24e26a0bee31409c1d070dc.jpg&w=3840&q=90',
        'Уютная атмосфера': 'https://millwood.by/upload/iblock/ac4/kkwhogzqa7sziqvter33x16qpqksjkne.jpg',
        'Винная карта': 'https://dekanto.ru/productData/images/articles/vino.jpeg',
        'Живая музыка': 'https://i.ytimg.com/vi/T9Yf6u6wQqM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNwGEA9KimQK-Cq2k7mpNZbYSjFw',
        'Акция города': 'https://artum.studio/Images/cafe-loft/03.jpg'
    };
    
    // ========== ДАННЫЕ МЕНЮ ==========
    const menuData = {
        'Рёбра': [
            { name: 'Сет №1', desc: 'Барбекю, медовый терияки, кисло-сладкий', weight: '615г', price: '1190 ₽', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop' },
            { name: 'Сет №2', desc: 'Барбекю, вишнёвый барбекю, перечная кола', weight: '624г', price: '1190 ₽', image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop' },
            { name: 'Свиные рёбра с грибами', desc: 'С древесными грибами и цитрусовым соусом', weight: '345г', price: '990 ₽', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=400&fit=crop' },
            { name: 'Свиные рёбра Медиум', desc: 'Классические свиные рёбра', weight: '352г', price: '820 ₽', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=400&fit=crop' }
        ],
        'Стритфуд': [
            { name: 'Чизбургер', desc: 'С мраморной говядиной', weight: '320г', price: '750 ₽', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop' },
            { name: 'Шаурма', desc: 'С реберным мясом', weight: '420г', price: '750 ₽', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop' },
            { name: 'Смэшбургер', desc: 'С двойной котлетой', weight: '250г', price: '670 ₽', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop' }
        ],
        'Горячие блюда': [
            { name: 'Стейк из лосося', desc: 'С кокосовым соусом и овощами', weight: '310г', price: '1750 ₽', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop' },
            { name: 'Ассорти колбасок', desc: 'С картофельным пюре', weight: '300г', price: '790 ₽', image: 'https://images.unsplash.com/photo-1615937657715-bc7b6baf2bf1?w=400&h=400&fit=crop' }
        ],
        'Крылья': [
            { name: 'Крылья сладкая кола', desc: 'С попкорном и картофелем фри', weight: '400г', price: '720 ₽', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop' },
            { name: 'Крылья острые', desc: 'С начос и сальсой', weight: '355г', price: '720 ₽', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop' }
        ],
        'Салаты': [
            { name: 'Салат с баклажанами', desc: 'С хрустящими баклажанами и томатами', weight: '250г', price: '690 ₽', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' },
            { name: 'Зелёный салат', desc: 'С авокадо', weight: '181г', price: '620 ₽', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' }
        ],
        'Закуски': [
            { name: 'Картофель фри', desc: 'С пармезаном и трюфельным маслом', weight: '193г', price: '520 ₽', image: 'https://images.unsplash.com/photo-1630384060421-cf20c0e0645d?w=400&h=400&fit=crop' },
            { name: 'Битые огурцы', desc: 'Острые, по-корейски', weight: '177г', price: '390 ₽', image: 'https://images.unsplash.com/photo-1626326535690-6b2f4ef44aeb?w=400&h=400&fit=crop' }
        ],
        'Супы': [
            { name: 'Томатный суп', desc: 'Со страчателлой', weight: '300г', price: '470 ₽', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop' },
            { name: 'Техасский суп', desc: 'Из мраморной говядины', weight: '398г', price: '690 ₽', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop' }
        ],
        'Гарниры': [
            { name: 'Картофельное пюре', desc: 'С моцареллой и пармезаном', weight: '130г', price: '350 ₽', image: 'https://images.unsplash.com/photo-1594568284297-7c64464062b1?w=400&h=400&fit=crop' },
            { name: 'Картофель стоун', desc: 'С розмарином', weight: '132г', price: '320 ₽', image: 'https://images.unsplash.com/photo-1594568284297-7c64464062b1?w=400&h=400&fit=crop' }
        ],
        'Десерты': [
            { name: 'Чизкейк', desc: 'В карамели', weight: '130г', price: '550 ₽', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
            { name: 'Наполеон', desc: 'С вишней', weight: '175г', price: '520 ₽', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' }
        ],
        'Комбо': [
            { name: 'БАРБЕКЮ СЕТ', desc: 'На компанию', weight: '2150г', price: '5200 ₽', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop' }
        ],
        'Соусы': [
            { name: 'Кисло-сладкий', desc: '', weight: '50г', price: '120 ₽', image: 'https://images.unsplash.com/photo-1627308595116-86b71b8a1c3f?w=400&h=400&fit=crop' },
            { name: 'Медовый терияки', desc: '', weight: '50г', price: '120 ₽', image: 'https://images.unsplash.com/photo-1627308595116-86b71b8a1c3f?w=400&h=400&fit=crop' }
        ],
        'Напитки': [
            { name: 'Морс домашний', desc: '', weight: '500г', price: '400 ₽', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop' },
            { name: 'Лимонад Evervess', desc: '', weight: '250г', price: '290 ₽', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop' }
        ]
    };
    
    // + БЕГУЩАЯ СТРОКА: ФУНКЦИЯ ДЛЯ СОЗДАНИЯ МАРАФОНА (бегущей строки с акциями)
    // Создает динамическую бегущую строку с акциями в зависимости от выбранного города
    function createMarquee() {
        const city = currentCity;
        
        // + БЕГУЩАЯ СТРОКА: Данные акций для каждого города
        const marqueeTexts = {
            'Сургут': [
                { icon: '🎉', text: 'Скидка 10% по промокоду FRANK10', highlight: '10%' },
                { icon: '🍷', text: 'Винная карта - 15% по вторникам', highlight: '15%' },
                { icon: '🎂', text: 'Бесплатный десерт в день рождения', highlight: 'Бесплатный' },
                { icon: '🍕', text: 'Комбо-ланч с 12:00 до 16:00 - 499₽', highlight: '499₽' }
            ],
            'Тюмень': [
                { icon: '🎁', text: 'Бесплатный десерт в день рождения', highlight: 'Бесплатный' },
                { icon: '🍸', text: 'Счастливые часы 17:00-19:00', highlight: 'Счастливые часы' },
                { icon: '🥩', text: 'Стейк в подарок при заказе от 3000₽', highlight: 'в подарок' }
            ],
            'Москва': [
                { icon: '🍸', text: 'Happy Hour 17:00-19:00 - коктейли 299₽', highlight: '299₽' },
                { icon: '🎭', text: 'Живая музыка каждую пятницу', highlight: 'Живая музыка' },
                { icon: '🥂', text: 'Шампанское в подарок при брони от 4 персон', highlight: 'в подарок' }
            ],
            'Екатеринбург': [
                { icon: '🏷', text: 'Комбо-ланч за 399₽', highlight: '399₽' },
                { icon: '🍺', text: 'Пиво 0.5 + крылья = 499₽', highlight: '499₽' },
                { icon: '🎸', text: 'Караоке по субботам', highlight: 'Караоке' }
            ]
        };
        
        // + БЕГУЩАЯ СТРОКА: Получаем акции для текущего города (или Сургут по умолчанию)
        const texts = marqueeTexts[city] || marqueeTexts['Сургут'];
        
        // + БЕГУЩАЯ СТРОКА: Создаем 3 копии акций для бесконечной анимации
        let items = '';
        for (let i = 0; i < 3; i++) {
            texts.forEach(item => {
                items += `<span><i class="bi bi-star-fill"></i> ${item.icon} <span class="highlight">${item.highlight}</span>${item.text.replace(item.highlight, '')}</span>`;
            });
        }
        
        // + БЕГУЩАЯ СТРОКА: Возвращаем HTML структуру бегущей строки
        return `<div class="marquee-container"><div class="marquee-content">${items}</div></div>`;
    }
    
    // Функция обновления активного пункта в главном меню
    function updateActiveNavLink(pageName) {
        const navLinksAll = document.querySelectorAll('#mainNav .nav-link');
        navLinksAll.forEach(link => {
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Функция для случайного выбора макета квадратов
    function getRandomLayout() {
        const layouts = [
            'small-left-big-right',
            'big-left-small-right',
            'center-layout'
        ];
        const randomIndex = Math.floor(Math.random() * layouts.length);
        return layouts[randomIndex];
    }

    // Функция отображения страницы заказа (с новым макетом при каждом вызове)
    function showOrderPage() {
        const contentDiv = document.getElementById('page-content');
        const city = currentCity;
        const data = cityData[city];
        
        // Генерируем НОВЫЙ случайный макет при каждом переходе на главную
        const currentLayout = getRandomLayout();
        
        // Создаем отдельные квадраты
        const square1 = `<div class="square-item small-square" style="background-image: url('${squareImages['Изысканная кухня']}');"><div class="square-text"><div class="square-title">Изысканная кухня</div><div class="square-desc">Блюда от шеф-повара</div></div></div>`;
        const square2 = `<div class="square-item small-square" style="background-image: url('${squareImages['Уютная атмосфера']}');"><div class="square-text"><div class="square-title">Уютная атмосфера</div><div class="square-desc">Идеально для встреч</div></div></div>`;
        const square3 = `<div class="square-item small-square" style="background-image: url('${squareImages['Винная карта']}');"><div class="square-text"><div class="square-title">Винная карта</div><div class="square-desc">Более 50 сортов вин</div></div></div>`;
        const square4 = `<div class="square-item small-square" style="background-image: url('${squareImages['Живая музыка']}');"><div class="square-text"><div class="square-title">Живая музыка</div><div class="square-desc">По пятницам и субботам</div></div></div>`;
        
        const bigSquare = `<div class="square-item big-square" style="background-image: url('${squareImages['Акция города']}');"><div class="square-text"><div class="square-title">${city}</div><div class="square-desc">${data.promo}</div></div></div>`;
        
        // Выбираем layout на основе случайного значения
        let homeLayoutHtml = '';
        
        switch(currentLayout) {
            case 'big-left-small-right':
                homeLayoutHtml = `
                    <div class="home-layout layout-big-left">
                        <div class="big-square-container">
                            ${bigSquare}
                        </div>
                        <div class="small-squares-container">
                            <div class="small-squares-grid">
                                ${square1}
                                ${square2}
                                ${square3}
                                ${square4}
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'center-layout':
                homeLayoutHtml = `
                    <div class="home-layout layout-center">
                        <div class="small-left-container">
                            <div class="small-squares-vertical">
                                ${square1}
                                ${square2}
                            </div>
                        </div>
                        <div class="big-square-container center">
                            ${bigSquare}
                        </div>
                        <div class="small-right-container">
                            <div class="small-squares-vertical">
                                ${square3}
                                ${square4}
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'small-left-big-right':
            default:
                homeLayoutHtml = `
                    <div class="home-layout layout-small-left">
                        <div class="small-squares-container">
                            <div class="small-squares-grid">
                                ${square1}
                                ${square2}
                                ${square3}
                                ${square4}
                            </div>
                        </div>
                        <div class="big-square-container">
                            ${bigSquare}
                        </div>
                    </div>
                `;
                break;
        }
        
        // + БЕГУЩАЯ СТРОКА: Создаем HTML бегущей строки между квадратами и категориями
        const marqueeHtml = createMarquee();
        
        let categoriesBarHtml = `
            <div class="categories-bar">
                <div class="categories-scroll" id="categoriesScroll">
        `;
        
        for (const category of Object.keys(menuData)) {
            categoriesBarHtml += `<a class="category-link" data-category="${category}">${category}</a>`;
        }
        
        categoriesBarHtml += `
                </div>
            </div>
        `;
        
        let productsHtml = `<div class="container">`;
        
        for (const [category, products] of Object.entries(menuData)) {
            productsHtml += `
                <div class="categories-section" id="category-${category}">
                    <h2 class="category-title">${category}</h2>
                    <div class="products-grid">
            `;
            
            for (const product of products) {
                productsHtml += `
                    <div class="product-card">
                        <div class="product-image" style="background-image: url('${product.image}');"></div>
                        <div class="product-info">
                            <div class="product-title">${product.name}</div>
                            <div class="product-desc">${product.desc} • ${product.weight}</div>
                            <div class="product-price">${product.price}</div>
                        </div>
                    </div>
                `;
            }
            
            productsHtml += `
                    </div>
                </div>
            `;
        }
        
        productsHtml += `</div>`;
        
        // + БЕГУЩАЯ СТРОКА: Добавляем marqueeHtml между квадратами и категориями
        contentDiv.innerHTML = homeLayoutHtml + marqueeHtml + categoriesBarHtml + productsHtml;
        
        const categoryLinks = document.querySelectorAll('.category-link');
        categoryLinks.forEach(link => {
            link.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const targetSection = document.getElementById(`category-${category}`);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                categoryLinks.forEach(l => l.classList.remove('active-category'));
                this.classList.add('active-category');
            });
        });
        
        // Прокрутка к разделу "Рёбра"
        setTimeout(function() {
            const ribsSection = document.getElementById('category-Рёбра');
            if (ribsSection) {
                ribsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const ribsLink = document.querySelector('.category-link[data-category="Рёбра"]');
                if (ribsLink) {
                    categoryLinks.forEach(l => l.classList.remove('active-category'));
                    ribsLink.classList.add('active-category');
                }
            }
        }, 100);
        
        updateActiveNavLink('order');
    }
    
    // Функция отображения страницы заказа без прокрутки (с новым макетом)
    function showOrderPageNoScroll() {
        const contentDiv = document.getElementById('page-content');
        const city = currentCity;
        const data = cityData[city];
        
        // Генерируем НОВЫЙ случайный макет при каждом переходе на главную
        const currentLayout = getRandomLayout();
        
        // Создаем отдельные квадраты
        const square1 = `<div class="square-item small-square" style="background-image: url('${squareImages['Изысканная кухня']}');"><div class="square-text"><div class="square-title">Изысканная кухня</div><div class="square-desc">Блюда от шеф-повара</div></div></div>`;
        const square2 = `<div class="square-item small-square" style="background-image: url('${squareImages['Уютная атмосфера']}');"><div class="square-text"><div class="square-title">Уютная атмосфера</div><div class="square-desc">Идеально для встреч</div></div></div>`;
        const square3 = `<div class="square-item small-square" style="background-image: url('${squareImages['Винная карта']}');"><div class="square-text"><div class="square-title">Винная карта</div><div class="square-desc">Более 50 сортов вин</div></div></div>`;
        const square4 = `<div class="square-item small-square" style="background-image: url('${squareImages['Живая музыка']}');"><div class="square-text"><div class="square-title">Живая музыка</div><div class="square-desc">По пятницам и субботам</div></div></div>`;
        
        const bigSquare = `<div class="square-item big-square" style="background-image: url('${squareImages['Акция города']}');"><div class="square-text"><div class="square-title">${city}</div><div class="square-desc">${data.promo}</div></div></div>`;
        
        // Выбираем layout на основе случайного значения
        let homeLayoutHtml = '';
        
        switch(currentLayout) {
            case 'big-left-small-right':
                homeLayoutHtml = `
                    <div class="home-layout layout-big-left">
                        <div class="big-square-container">
                            ${bigSquare}
                        </div>
                        <div class="small-squares-container">
                            <div class="small-squares-grid">
                                ${square1}
                                ${square2}
                                ${square3}
                                ${square4}
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'center-layout':
                homeLayoutHtml = `
                    <div class="home-layout layout-center">
                        <div class="small-left-container">
                            <div class="small-squares-vertical">
                                ${square1}
                                ${square2}
                            </div>
                        </div>
                        <div class="big-square-container center">
                            ${bigSquare}
                        </div>
                        <div class="small-right-container">
                            <div class="small-squares-vertical">
                                ${square3}
                                ${square4}
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'small-left-big-right':
            default:
                homeLayoutHtml = `
                    <div class="home-layout layout-small-left">
                        <div class="small-squares-container">
                            <div class="small-squares-grid">
                                ${square1}
                                ${square2}
                                ${square3}
                                ${square4}
                            </div>
                        </div>
                        <div class="big-square-container">
                            ${bigSquare}
                        </div>
                    </div>
                `;
                break;
        }
        
        // + БЕГУЩАЯ СТРОКА: Создаем HTML бегущей строки между квадратами и категориями
        const marqueeHtml = createMarquee();
        
        let categoriesBarHtml = `
            <div class="categories-bar">
                <div class="categories-scroll" id="categoriesScroll">
        `;
        
        for (const category of Object.keys(menuData)) {
            categoriesBarHtml += `<a class="category-link" data-category="${category}">${category}</a>`;
        }
        
        categoriesBarHtml += `
                </div>
            </div>
        `;
        
        let productsHtml = `<div class="container">`;
        
        for (const [category, products] of Object.entries(menuData)) {
            productsHtml += `
                <div class="categories-section" id="category-${category}">
                    <h2 class="category-title">${category}</h2>
                    <div class="products-grid">
            `;
            
            for (const product of products) {
                productsHtml += `
                    <div class="product-card">
                        <div class="product-image" style="background-image: url('${product.image}');"></div>
                        <div class="product-info">
                            <div class="product-title">${product.name}</div>
                            <div class="product-desc">${product.desc} • ${product.weight}</div>
                            <div class="product-price">${product.price}</div>
                        </div>
                    </div>
                `;
            }
            
            productsHtml += `
                    </div>
                </div>
            `;
        }
        
        productsHtml += `</div>`;
        
        // + БЕГУЩАЯ СТРОКА: Добавляем marqueeHtml между квадратами и категориями
        contentDiv.innerHTML = homeLayoutHtml + marqueeHtml + categoriesBarHtml + productsHtml;
        
        const categoryLinks = document.querySelectorAll('.category-link');
        categoryLinks.forEach(link => {
            link.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const targetSection = document.getElementById(`category-${category}`);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                categoryLinks.forEach(l => l.classList.remove('active-category'));
                this.classList.add('active-category');
            });
        });
        
        // Прокручиваем страницу вверх
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        updateActiveNavLink('order');
    }
    
    // Страница "О нас"
    function showAboutPage() {
        const contentDiv = document.getElementById('page-content');
        const city = currentCity;
        const data = cityData[city];
        
        contentDiv.innerHTML = `
            <div class="container">
                <div class="about-content">
                    <h2>О нас</h2>
                    <p>Ресторан FRANK — это уютное место с многолетней историей. Мы готовим для вас с любовью с 2010 года.</p>
                    <p>Наша команда — профессионалы своего дела, которые знают, как сделать ваш вечер незабываемым.</p>
                    <p>Мы используем только свежие продукты от лучших поставщиков. Каждое блюдо готовится с душой и вниманием к деталям.</p>
                    <p class="mt-4"><strong>📍 Адрес в ${city}:</strong> ${data.address}</p>
                    <p><strong>📞 Телефон:</strong> ${data.phone}</p>
                    <p><strong>🕐 Режим работы:</strong> ${data.hours}</p>
                </div>
            </div>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateActiveNavLink('about');
    }

    // Страница "Мерч"
    function showMerchPage() {
        const contentDiv = document.getElementById('page-content');
        
        contentDiv.innerHTML = `
            <div class="container">
                <div class="about-content">
                    <h2>Мерч FRANK</h2>
                    <p>Эксклюзивная коллекция одежды и аксессуаров от ресторана FRANK.</p>
                    <div class="products-grid" style="margin-top: 30px;">
                        <div class="product-card">
                            <div class="product-image" style="background-image: url('https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop');"></div>
                            <div class="product-info">
                                <div class="product-title">Футболка FRANK</div>
                                <div class="product-desc">Хлопок 100% • Лимитированная коллекция</div>
                                <div class="product-price">2 490 ₽</div>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image" style="background-image: url('https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop');"></div>
                            <div class="product-info">
                                <div class="product-title">Худи FRANK</div>
                                <div class="product-desc">Уютный худи с логотипом</div>
                                <div class="product-price">4 990 ₽</div>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image" style="background-image: url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop');"></div>
                            <div class="product-info">
                                <div class="product-title">Кружка FRANK</div>
                                <div class="product-desc">Керамика • 350мл</div>
                                <div class="product-price">890 ₽</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateActiveNavLink('merch');
    }

    // Страница "Карьера"
    function showCareerPage() {
        const contentDiv = document.getElementById('page-content');
        
        contentDiv.innerHTML = `
            <div class="container">
                <div class="about-content">
                    <h2>Карьера в FRANK</h2>
                    <p>Присоединяйтесь к команде лучшего ресторана европейской кухни!</p>
                    
                    <h3 style="color: #dc3545; margin-top: 30px;">Открытые вакансии:</h3>
                    
                    <div class="products-grid" style="margin-top: 20px;">
                        <div class="product-card">
                            <div class="product-info">
                                <div class="product-title">Шеф-повар</div>
                                <div class="product-desc">Опыт от 3 лет • Знание европейской кухни</div>
                                <div class="product-price">от 120 000 ₽</div>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-info">
                                <div class="product-title">Официант</div>
                                <div class="product-desc">Английский язык приветствуется • График 2/2</div>
                                <div class="product-price">от 60 000 ₽ + чаевые</div>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-info">
                                <div class="product-title">Администратор</div>
                                <div class="product-desc">Управление персоналом • Решение конфликтных ситуаций</div>
                                <div class="product-price">от 80 000 ₽</div>
                            </div>
                        </div>
                    </div>
                    
                    <p style="margin-top: 30px;"><strong>📧 Отправьте резюме на:</strong> career@frank.ru</p>
                </div>
            </div>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateActiveNavLink('career');
    }
    
    // Страница "Контакты"
    function showContactsPage() {
        const contentDiv = document.getElementById('page-content');
        const city = currentCity;
        const data = cityData[city];
        
        contentDiv.innerHTML = `
            <div class="container">
                <div class="contacts-content">
                    <h2>Контакты в городе ${city}</h2>
                    <p><strong>📍 Адрес:</strong> ${data.address}</p>
                    <p><strong>📞 Телефон:</strong> ${data.phone}</p>
                    <p><strong>✉ Email:</strong> ${data.email}</p>
                    <p><strong>🕐 Режим работы:</strong> ${data.hours}</p>
                    <div class="mt-4 p-3 rounded" style="background: rgba(220,53,69,0.2);">
                        <p class="mb-0"><strong>🎉 Акция в ${city}:</strong> ${data.promo}</p>
                    </div>
                </div>
            </div>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateActiveNavLink('contacts');
    }
    
    // Функция выбора города
    function selectCity(city) {
        currentCity = city;
        
        const cityBtn = document.getElementById('cityButton');
        if (cityBtn) {
            cityBtn.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${city}`;
        }
        
        const cityDisplay = document.getElementById('currentCityDisplay');
        if (cityDisplay) cityDisplay.textContent = city;
        
        document.querySelectorAll('.city-radio').forEach(radio => {
            radio.classList.remove('selected');
        });
        const selectedRadio = document.getElementById(`radio-${city}`);
        if (selectedRadio) selectedRadio.classList.add('selected');
        
        const activeNav = document.querySelector('#mainNav .nav-link.active');
        if (activeNav) {
            const page = activeNav.getAttribute('data-page');
            if (page === 'order') showOrderPage();
            else if (page === 'about') showAboutPage();
            else if (page === 'contacts') showContactsPage();
            else if (page === 'merch') showMerchPage();
            else if (page === 'career') showCareerPage();
        }
        
        localStorage.setItem('selectedCity', city);
    }
    
    // ========== НАВИГАЦИЯ ==========
    const navLinks = document.querySelectorAll('#mainNav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            
            if (page === 'order') showOrderPage();
            else if (page === 'about') showAboutPage();
            else if (page === 'merch') showMerchPage();
            else if (page === 'career') showCareerPage();
            else if (page === 'contacts') showContactsPage();
        });
    });
    
    // Логотип в шапке
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            showOrderPageNoScroll();
        });
    }
    
    // ========== ВЫБОР ГОРОДА ==========
    const cityBtn = document.getElementById('cityButton');
    if (cityBtn) {
        cityBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const offcanvas = new bootstrap.Offcanvas(document.getElementById('cityPanel'));
            offcanvas.show();
        });
    }
    
    document.querySelectorAll('.city-option').forEach(option => {
        option.addEventListener('click', function() {
            const city = this.getAttribute('data-city');
            selectCity(city);
            const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cityPanel'));
            if (offcanvas) offcanvas.hide();
        });
    });
    
    // Загрузка сохраненного города
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity && ['Сургут', 'Тюмень', 'Москва', 'Екатеринбург'].includes(savedCity)) {
        selectCity(savedCity);
    } else {
        selectCity('Сургут');
    }
    
    // Показываем страницу заказа по умолчанию
    showOrderPageNoScroll();
    
    // ========== КНОПКА "ВОЙТИ" ==========
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            alert('Здесь будет форма входа.');
        });
    }
    
    // ========== БРОНИРОВАНИЕ СТОЛА ==========
    const confirmBooking = document.getElementById('confirmBooking');
    if (confirmBooking) {
        confirmBooking.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            if (!name) {
                alert('Пожалуйста, укажите ваше имя.');
                return;
            }
            alert('Спасибо, ' + name + '! Ваш стол забронирован.');
            const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
            if (modal) modal.hide();
            document.getElementById('bookingForm').reset();
        });
    }
    
    // ========== ССЫЛКИ В ФУТЕРЕ ==========
    const footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page === 'order') showOrderPage();
            else if (page === 'about') showAboutPage();
            else if (page === 'merch') showMerchPage();
            else if (page === 'career') showCareerPage();
            else if (page === 'contacts') showContactsPage();
        });
    });
    
    // Логотип в футере
    const footerLogo = document.getElementById('footerLogo');
    if (footerLogo) {
        footerLogo.addEventListener('click', function(e) {
            e.preventDefault();
            showOrderPageNoScroll();
        });
    }
});

// Функция для отслеживания активной секции при скролле
function updateActiveCategoryOnScroll() {
    const sections = document.querySelectorAll('.categories-section');
    const categoryLinks = document.querySelectorAll('.category-link');
    const headerHeight = document.querySelector('.fixed-nav')?.offsetHeight || 80;
    const categoriesBarHeight = document.querySelector('.categories-bar')?.offsetHeight || 50;
    const offset = headerHeight + categoriesBarHeight + 20;
    
    if (sections.length === 0) return;
    
    let currentSection = '';
    let minDistance = Infinity;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const scrollPosition = window.scrollY + offset;
        const distance = Math.abs(scrollPosition - sectionTop);
        
        if (distance < minDistance && scrollPosition >= sectionTop - 100) {
            minDistance = distance;
            currentSection = section.getAttribute('id').replace('category-', '');
        }
    });
    
    categoryLinks.forEach(link => {
        const category = link.getAttribute('data-category');
        if (category === currentSection) {
            link.classList.add('active-category');
        } else {
            link.classList.remove('active-category');
        }
    });
}

let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(updateActiveCategoryOnScroll);
});