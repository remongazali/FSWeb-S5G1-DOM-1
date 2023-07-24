const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const navItems = document.querySelectorAll("nav a");
navItems[0].textContent=siteContent.nav["nav-item-1"]
navItems[1].textContent=siteContent.nav["nav-item-2"]
navItems[2].textContent=siteContent.nav["nav-item-3"]
navItems[3].textContent=siteContent.nav["nav-item-4"]
navItems[4].textContent=siteContent.nav["nav-item-5"]
navItems[5].textContent=siteContent.nav["nav-item-6"]
navItems[0].setAttribute("class","italic")
navItems[1].setAttribute("class","italic")
navItems[2].setAttribute("class","italic")
navItems[3].setAttribute("class","italic")
navItems[4].setAttribute("class","italic")
navItems[5].setAttribute("class","italic")
const logo = document.querySelector("#logo-img")
logo.setAttribute("src",siteContent.images["logo-img"])
const ctaTextH1 =document.querySelector(".cta-text h1");
ctaTextH1.textContent=siteContent.cta.h1
const ctaTextButton =document.querySelector(".cta-text button");
ctaTextButton.textContent=siteContent.cta.button
const ctaİmg = document.querySelector("#cta-img")
ctaİmg.setAttribute("src",siteContent.images["cta-img"])
const text1=document.querySelectorAll(".top-content h4")
text1[0].textContent=siteContent["ana-içerik"]["özellikler-h4"]
text1[1].textContent=siteContent["ana-içerik"]["hakkımızda-h4"]
const text1P=document.querySelectorAll(".top-content p")
text1P[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"]
text1P[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"]
const middleİmg = document.querySelector("#middle-img")
middleİmg.setAttribute("src",siteContent.images["accent-img"])
const text2 =document.querySelectorAll(".bottom-content h4")
text2[0].textContent=siteContent["ana-içerik"]["servisler-h4"]
text2[1].textContent=siteContent["ana-içerik"]["ürünler-h4"]
text2[2].textContent=siteContent["ana-içerik"]["vizyon-h4"]
const text2P=document.querySelectorAll(".bottom-content p")
text2P[0].textContent=siteContent["ana-içerik"]["servisler-içeriği"]
text2P[1].textContent=siteContent["ana-içerik"]["ürünler-içeriği"]
text2P[2].textContent=siteContent["ana-içerik"]["vizyon-içeriği"]
const son = document.querySelector(".contact h4")
son.textContent=siteContent.iletisim["iletişim-h4"]
const son1=document.querySelectorAll(".contact p")
son1[0].textContent=siteContent.iletisim.adres
son1[1].textContent=siteContent.iletisim.telefon
son1[2].textContent=siteContent.iletisim.email
const footerA=document.querySelector("footer a")
footerA.textContent=siteContent.footer.copyright
footerA.setAttribute("class","bold")