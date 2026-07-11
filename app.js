// القاموس الكامل لترجمة نصوص الصفحة الفخمة
const translations = {
    ar: {
        pageTitle: "الحاسوب النخبوي | Ultimate PC Experience",
        heroTitle: "منصة النخبة المستقبلية",
        heroSubtitle: "انزل للأسفل لتفكيك القوة واستكشاف أسرار أقوى عتاد حاسوبي لعام 2026.",
        cpuTitle: "المعالج المركزي (CPU)",
        cpuDesc: "عقل النظام المسؤول عن معالجة البيانات والعمليات المعقدة بالمليار من الإشارات في الثانية الواحدة، مكسور السرعة مسبقاً لأعلى مستويات الثبات في البث والألعاب.",
        gpuTitle: "كرت الشاشة (GPU)",
        gpuDesc: "المحرك البصري الخارق الداعم لتقنيات تتبع الأشعة اللحظية المتقدمة والتوليد الذكي للإطارات، يضمن لك تجربة سينمائية غامرة وسلاسة فائقة تفوق التوقعات.",
        coolerTitle: "التبريد المائي الذكي (AIO)",
        coolerDesc: "منظومة تبريد سائل مغلقة ومزودة بشاشة تفاعلية ذكية لعرض درجات الحرارة بدقة، تحافظ على عتادك بارداً وهادئاً تماماً حتى تحت أقصى درجات الضغط والكسر للسرعة.",
        langBtn: "English"
    },
    en: {
        pageTitle: "Elite PC | Ultimate Experience",
        heroTitle: "The Future Elite Platform",
        heroSubtitle: "Scroll down to deconstruct power and explore the build components of 2026.",
        cpuTitle: "Central Processing Unit (CPU)",
        cpuDesc: "The ultimate brain driving billions of operations per second, factory-overclocked to deliver rock-solid stability for streaming and demanding workloads.",
        gpuTitle: "Graphics Processing Unit (GPU)",
        gpuDesc: "The visual powerhouse equipped with next-gen real-time ray tracing and AI frame generation, guaranteeing an immersive, cinema-grade presentation.",
        coolerTitle: "Smart Liquid Cooling (AIO)",
        coolerDesc: "An advanced closed-loop liquid cooler featuring a customizable LCD screen for telemetry, keeping your rig completely ice-cold under ultimate load.",
        langBtn: "العربية"
    }
};

let currentLang = 'ar';
const htmlTag = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

// تفعيل ميزة تغيير المظهر الفاتح والداكن
themeToggle.addEventListener('click', () => {
    htmlTag.classList.toggle('dark');
    htmlTag.classList.toggle('light');
    localStorage.setItem('theme', htmlTag.classList.contains('dark') ? 'dark' : 'light');
});

// تطبيق الثيم المفضل المسجل مسبقاً
if (localStorage.getItem('theme') === 'light') {
    htmlTag.classList.remove('dark');
    htmlTag.classList.add('light');
}

// تفعيل ميزة تغيير اللغات وتعديل المحاذاة والاتجاهات تلقائياً
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    htmlTag.setAttribute('dir', currentLang === 'en' ? 'ltr' : 'rtl');
    htmlTag.setAttribute('lang', currentLang);

    // تحديث النصوص في الواجهة
    document.getElementById('page-title').textContent = translations[currentLang].pageTitle;
    document.getElementById('hero-title').textContent = translations[currentLang].heroTitle;
    document.getElementById('hero-subtitle').textContent = translations[currentLang].heroSubtitle;
    document.getElementById('cpu-title').textContent = translations[currentLang].cpuTitle;
    document.getElementById('cpu-desc').textContent = translations[currentLang].cpuDesc;
    document.getElementById('gpu-title').textContent = translations[currentLang].gpuTitle;
    document.getElementById('gpu-desc').textContent = translations[currentLang].gpuDesc;
    document.getElementById('cooler-title').textContent = translations[currentLang].coolerTitle;
    document.getElementById('cooler-desc').textContent = translations[currentLang].coolerDesc;
    langToggle.textContent = translations[currentLang].langBtn;
});