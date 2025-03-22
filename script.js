var languages = {
    en:{
        h11 : "Yasin Game",
        n1 : "Home",
        n2 : "Aparat Yasin Khosravi",
        n3 : "About Yasin Khosravi",
        sazande1 : "Manufacturer",
        datte : ".............................................................."
    },
    fa:{
        h11 : "Yasin Game",
        n1 : "خانه",
        n2 : "آپارات یاسین خسروی",
        n3 : "درباره یاسین خسروی",
        sazande1 : "سازنده",
        datte : ".................................................................................................."
    }
}

function Reload(language) {
    window.location.hash = language;
    location.reload();
}

if(window.location.hash){
    if(window.location.hash === "#fa"){
        h11.textContent = languages.fa.h11
        n1.textContent = languages.fa.n1
        n2.textContent = languages.fa.n2
        n3.textContent = languages.fa.n3
        sazande1.textContent = languages.fa.sazande1
        datte.textContent = languages.fa.datte
    }
    if(window.location.hash === '#en'){
        h11.textContent = languages.en.h11
        n1.textContent = languages.en.n1
        n2.textContent = languages.en.n2
        n3.textContent = languages.en.n3
        sazande1.textContent = languages.en.sazande1
        datte.textContent = languages.en.datte
    }
}

// تغییر زبان بدون تغییر صفحه
function setLanguage(language) {
    const currentPage = getCurrentPage(); // دریافت صفحه فعلی
    window.location.hash = `${language}_${currentPage}`; // تنظیم hash با زبان و صفحه فعلی
}

// دریافت صفحه فعلی از hash
function getCurrentPage() {
    const hash = window.location.hash.split("_")[1] || "home"; // پیش‌فرض صفحه خانه
    return hash;
}

// اعمال زبان و صفحه
function applyHash() {
    const hash = window.location.hash;
    const [language, page] = hash.replace("#", "").split("_");

    // اعمال زبان
    if (language === "en") {
        applyLanguage("en");
    } else {
        applyLanguage("fa"); // پیش‌فرض فارسی
    }

    // بارگذاری صفحه
}

// شنود کلیک روی دکمه‌های تغییر زبان
document.getElementById("l1").onclick = () => setLanguage("en"); // انگلیسی
document.getElementById("l2").onclick = () => setLanguage("fa"); // فارسی

// فراخوانی هنگام تغییر hash
window.addEventListener("hashchange", applyHash);

// بارگذاری اولیه
applyHash();
