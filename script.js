// بيانات الألعاب
const games = [
    {
        id: 1,
        title: "فيفا 2023",
        category: "football",
        image: "fifa.jpg",
        description: "لعبة كرة قدم واقعية من إنتاج EA Sports تحتوي على جميع الأندية واللاعبين المحترفين.",
        downloadLink: "https://example.com/download/fifa23",
        youtubeLink: "https://youtube.com/yourchannel/fifa23",
        rating: 4.5
    },
    {
        id: 2,
        title: "كول أوف ديوتي",
        category: "war",
        image: "cod.jpg",
        description: "لعبة حرب مشهورة بمشاهدها القتالية المثيرة والرسومات الرائعة.",
        downloadLink: "https://example.com/download/cod",
        youtubeLink: "https://youtube.com/yourchannel/cod",
        rating: 4.8
    },
    {
        id: 3,
        title: "فارم سيموليتر",
        category: "simulator",
        image: "farm.jpg",
        description: "محاكاة الزراعة وإدارة المزارع بطريقة واقعية وممتعة.",
        downloadLink: "https://example.com/download/farm",
        youtubeLink: "https://youtube.com/yourchannel/farm",
        rating: 4.2
    },
    {
        id: 4,
        title: "PES 2023",
        category: "football",
        image: "pes.jpg",
        description: "منافس قوي للعبة فيفا مع محركات فيزيائية واقعية للكرة.",
        downloadLink: "https://example.com/download/pes",
        youtubeLink: "https://youtube.com/yourchannel/pes",
        rating: 4.3
    },
    {
        id: 5,
        title: "باتلفيلد",
        category: "war",
        image: "battlefield.jpg",
        description: "لعبة حرب جماعية مع خريطة كبيرة ومركبات متعددة.",
        downloadLink: "https://example.com/download/battlefield",
        youtubeLink: "https://youtube.com/yourchannel/battlefield",
        rating: 4.6
    },
    {
        id: 6,
        title: "تراك سيموليتر",
        category: "simulator",
        image: "truck.jpg",
        description: "محاكاة قيادة الشاحنات عبر طرق أوروبا وأمريكا.",
        downloadLink: "https://example.com/download/truck",
        youtubeLink: "https://youtube.com/yourchannel/truck",
        rating: 4.0
    },
      {
        id: 7,
        title: "gta san ",
        category: "gta san",
        image: "truck.jpg",
        description: "play new gta san andreas fpr free on your phone.",
        downloadLink: "https://www.mediafire.com/file/kox9ek2lfbzbggd/GTA_SA.apk/file",
        youtubeLink: "https://youtube.com/yourchannel/truck",
        rating: 5.0
    },
        {
        id: 8,
        title: "gta san obb ",
        category: "gta san",
        image: "truck.jpg",
        description: "play new gta san andreas fpr free on your phone.",
        downloadLink: "https://www.mediafire.com/file/02mactc7vscqfjk/gtasa_OBB_Alex%25252CCross.COM.zip/file",
        youtubeLink: "https://youtube.com/yourchannel/truck",
        rating: 5.0
    },
          {
        id: 9,
        title: "zacrchver ",
        category: "Programs",
        image: "truck.jpg",
        description: "play new gta san andreas fpr free on your phone.",
        downloadLink: "https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver",
        youtubeLink: "https://youtube.com/yourchannel/truck",
        rating: 5.0
    },
    

   
    
    
        
        
    

];

// متغيرات DOM
const loadingScreen = document.getElementById('loadingScreen');
const gamesContainer = document.getElementById('gamesContainer');
const categoryBtns = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// عرض شاشة التحميل عند الدخول
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
    
    displayGames(games);
});

// عرض الألعاب في الصفحة
function displayGames(gamesToDisplay) {
    gamesContainer.innerHTML = '';
    
    gamesToDisplay.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.setAttribute('data-category', game.category);
        gameCard.setAttribute('data-id', game.id);
        
        gameCard.innerHTML = `
            <div class="game-card-inner">
                <div class="game-card-front">
                    <img src="images/${game.image}" alt="${game.title}" class="game-image">
                    <div class="game-info">
                        <h3>${game.title}</h3>
                        <div class="game-rating">
                            ${generateRatingStars(game.rating)}
                            <span>${game.rating.toFixed(1)}</span>
                        </div>
                        <button class="view-details-btn">تفاصيل اللعبة</button>
                    </div>
                </div>
                <div class="game-card-back">
                    <h3>${game.title}</h3>
                    <p class="game-description">${game.description}</p>
                    <div class="game-actions">
                        <a href="${game.downloadLink}" target="_blank" class="download-btn" onclick="openExternalLink(event, '${game.downloadLink}')">
                            <i class="fas fa-download"></i> حمل الآن
                        </a>
                        <a href="${game.youtubeLink}" target="_blank" class="youtube-btn" onclick="openExternalLink(event, '${game.youtubeLink}')">
                            <i class="fab fa-youtube"></i> شاهد على يوتيوب
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        gamesContainer.appendChild(gameCard);
    });
}

// إنشاء نجوم التقييم
function generateRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// فتح الروابط الخارجية بنافذة جديدة
function openExternalLink(event, url) {
    event.preventDefault();
    window.open(url, '_blank', 'width=800,height=600');
}

// تصفية الألعاب حسب التصنيف
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // تحديث الزر النشط
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
        if (category === 'all') {
            displayGames(games);
        } else {
            const filteredGames = games.filter(game => game.category === category);
            displayGames(filteredGames);
        }
    });
});

// البحث عن الألعاب
searchBtn.addEventListener('click', searchGames);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchGames();
    }
});

function searchGames() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        // إعادة تعيين البحث وعرض كل الألعاب
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        if (activeCategory === 'all') {
            displayGames(games);
        } else {
            const filteredGames = games.filter(game => game.category === activeCategory);
            displayGames(filteredGames);
        }
        return;
    }
    
    const searchedGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm)
    );
    
    displayGames(searchedGames);
}
// تغيير اللغة
const languageBtn = document.getElementById('languageBtn');
let currentLanguage = 'ar'; // اللغة الافتراضية

// النصوص متعددة اللغات
const translations = {
    ar: {
        home: "الرئيسية",
        games: "الألعاب",
        about: "عن الموقع",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        welcome: "مرحباً بكم في عالم الألعاب",
        explore: "استكشف الألعاب",
        // أضف بقية النصوص التي تريد ترجمتها
    },
    en: {
        home: "Home",
        games: "Games",
        about: "About",
        contact: "Contact",
        login: "Login",
        welcome: "Welcome to Game World",
        explore: "Explore Games",
        // أضف بقية النصوص التي تريد ترجمتها
    }
};

// انتظر حتى تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // عناصر الصفحة التي نريد ترجمتها
    const elementsToTranslate = {
        '#navHome': { ar: 'الرئيسية', en: 'Home' },
        '#navGames': { ar: 'الألعاب', en: 'Games' },
        '#navAbout': { ar: 'عن الموقع', en: 'About' },
        '#navContact': { ar: 'اتصل بنا', en: 'Contact' },
        '#navLogin': { ar: 'تسجيل الدخول', en: 'Login' },
        '#mainTitle': { ar: 'مرحباً بكم في عالم الألعاب', en: 'Welcome to Game World' },
        '#exploreBtn': { ar: 'استكشف الألعاب', en: 'Explore Games' }
    };

    let currentLanguage = 'ar'; // اللغة الافتراضية

    // زر تغيير اللغة
    const languageBtn = document.getElementById('languageBtn');
    
    // دالة تغيير اللغة
    function toggleLanguage() {
        currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
        updatePageLanguage();
        localStorage.setItem('siteLanguage', currentLanguage);
    }

    // دالة تحديث النصوص
    function updatePageLanguage() {
        // تحديث نص الزر
        languageBtn.textContent = currentLanguage === 'ar' ? 'EN' : 'AR';
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
        
        // تحديث جميع النصوص
        for (const [selector, texts] of Object.entries(elementsToTranslate)) {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = texts[currentLanguage];
            }
        }
    }

    // تهيئة الصفحة عند التحميل
    function initLanguage() {
        const savedLanguage = localStorage.getItem('siteLanguage');
        if (savedLanguage) {
            currentLanguage = savedLanguage;
        }
        updatePageLanguage();
    }

    // إضافة حدث النقر على الزر
    if (languageBtn) {
        languageBtn.addEventListener('click', toggleLanguage);
    }

    // بدء التشغيل
    initLanguage();
});


