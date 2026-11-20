# BookVerse

BookVerse Azərbaycan və Türkiyə ədəbiyyatını bir araya gətirən, kitabları kəşf etmək və oxucu qeydlərini saxlamaq üçün hazırlanmış statik veb-sayt nümunəsidir. Layihə HTML5, CSS3 və vanilla JavaScript ilə qurulub; server və ya framework tələb etmir.

## Fayl strukturu

```text
BookVerse/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Xüsusiyyətlər

- Azərbaycan və Türkiyə ədəbiyyatından 14 kitablıq kataloq
- Müəllif, kitab adı və janra görə canlı axtarış
- Dil və janr filtrləri; Roman, Klassika, Dram, Sevgi, Psixologiya və Detektiv kateqoriyaları
- Kitab məlumatları, redaksiya reytinqi və oxucu qeydləri olan əlçatan təfərrüat pəncərəsi
- Sevimlilərə əlavə etmə, siyahıya baxma və seçimləri brauzerdə saxlama
- 1–5 ulduzlu, silinə bilən yerli rəylər
- Kiçik ekranlara uyğun naviqasiya və adaptiv tərtibat
- Üz qabığı yüklənmədikdə avtomatik göstərilən dizaynlı ehtiyat üz qabığı

## İşə salmaq

1. `BookVerse` qovluğunu VS Code-da açın.
2. VS Code Extensions bölməsindən **Live Server** əlavəsini quraşdırın (əgər quraşdırılmayıbsa).
3. `index.html` faylını açıb **Go Live** düyməsinə basın və ya fayla sağ klik edib **Open with Live Server** seçin.

Layihə statikdir. Əlavəni quraşdırmadan da `index.html` faylını brauzerdə açmaq olar, lakin Live Server yerli iş zamanı daha rahatdır.

## Məlumatların saxlanması

Sevimli kitablar və rəylər bu brauzerin `localStorage` yaddaşında saxlanılır. Buna görə seçimlər səhifə yenilənəndən sonra da eyni brauzerdə qalır. Sayt məlumatları serverə göndərmir; brauzer məlumatlarını və ya sayt yaddaşını silmək sevimliləri və rəyləri də siləcək.

## Rəy sisteminin məhdudiyyətləri

Rəy funksiyası yalnız yerli demo sistemidir: rəylər serverə ötürülmür, başqa istifadəçilərlə paylaşılmır və başqa cihazda görünmür. Bu brauzerdə yazılan rəylər müvafiq kitabın təfərrüat pəncərəsindən silinə bilər. Kitabın göstərilən ulduz reytinqi redaksiya nümunə reytinqidir və oxucu rəylərindən hesablanmır.

## Şəkillər və şriftlər

Kitab üz qabıqları Open Library Covers xidmətindən, Playfair Display və Inter şriftləri Google Fonts-dan yüklənir. Bu resurslar əlçatan olmadıqda şriftlər sistem ehtiyatlarına, üz qabığı isə daxili tərtibatlı fallback-ə keçir.
