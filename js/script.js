const books = [
  {
    id: "deli-kur",
    title: "Dəli Kür",
    author: "İsmayıl Şıxlı",
    language: "az",
    genre: "roman",
    rating: 4.9,
    description: "XX əsr Azərbaycan kəndinin həyatını, dəyişən zamanın insan talelərinə təsirini və Cahandar ağanın mürəkkəb xarakterini əks etdirən qüdrətli roman.",
    year: 1962
  },
  {
    id: "besmetebeli-ev",
    title: "Beşmərtəbəli evin altıncı mərtəbəsi",
    author: "Anar",
    language: "az",
    genre: "sevgi",
    rating: 4.8,
    description: "Bakı şəhərinin fonunda sevgi, seçim və insan münasibətlərini araşdıran, müasir Azərbaycan nəsrinin ən yaddaqalan romanlarından biri.",
    coverImage: "https://covers.openlibrary.org/b/id/15266222-L.jpg",
    year: 1985
  },
  {
    id: "eli-ve-nino",
    title: "Əli və Nino",
    author: "Qurban Səid",
    language: "az",
    genre: "sevgi",
    rating: 4.9,
    description: "Əli ilə Ninonun sevgisi vasitəsilə Şərq və Qərb mədəniyyətlərinin qovuşduğu Bakını və böyük tarixi dəyişikliklər içində insan talelərini anlatan roman.",
    coverImage: "https://covers.openlibrary.org/b/id/5094326-L.jpg",
    year: 1937
  },
  {
    id: "oluler",
    title: "Ölülər",
    author: "Cəlil Məmmədquluzadə",
    language: "az",
    genre: "dram",
    rating: 4.7,
    description: "Cəhalət və mövhumatı kəskin satira ilə ifşa edən, Azərbaycan dramaturgiyasının klassik əsəri.",
    year: 1909
  },
  {
    id: "ideal",
    title: "İdeal",
    author: "İsa Muğanna",
    language: "az",
    genre: "psixologiya",
    rating: 4.6,
    description: "İnsan yaddaşı, kimlik və mənəvi həqiqət axtarışını özünəməxsus bədii dünya ilə birləşdirən fəlsəfi roman.",
    year: 1985
  },
  {
    id: "xosrov-ve-sirin",
    title: "Xosrov və Şirin",
    author: "Nizami Gəncəvi",
    language: "az",
    genre: "klassika",
    rating: 4.9,
    description: "Nizami Gəncəvinin “Xəmsə”sinə daxil olan, Xosrov və Şirinin məhəbbətini, sədaqətini və seçimlərini poetik dillə tərənnüm edən məsnəvi.",
    year: 1180
  },
  {
    id: "kurk-mantolu-madonna",
    title: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    language: "tr",
    genre: "sevgi",
    rating: 4.9,
    description: "Raif Efendinin gündəliyi ilə açılan bu hekayə, Berlin və Ankara arasında yaşanan səssiz bir sevgini və insanın daxili dünyasını danışır.",
    coverImage: "https://covers.openlibrary.org/b/id/10848013-L.jpg",
    year: 1943
  },
  {
    id: "calikusu",
    title: "Çalıkuşu",
    author: "Reşat Nuri Güntekin",
    language: "tr",
    genre: "klassika",
    rating: 4.8,
    description: "Gənc müəllim Feridenin Anadoluya uzanan həyat yolunu, müstəqilliyini və sevgisini onun gündəliyindən nəql edən klassik roman.",
    coverImage: "https://covers.openlibrary.org/b/id/12958080-L.jpg",
    year: 1922
  },
  {
    id: "icimizdeki-seytan",
    title: "İçimizdeki Şeytan",
    author: "Sabahattin Ali",
    language: "tr",
    genre: "psixologiya",
    rating: 4.8,
    description: "Ömer və Macidenin münasibətləri fonunda insanın öz zəiflikləri, məsuliyyət və daxili ziddiyyətlərlə üzləşməsini araşdıran roman.",
    coverImage: "https://covers.openlibrary.org/b/id/10849637-L.jpg",
    year: 1940
  },
  {
    id: "ask-i-memnu",
    title: "Aşk-ı Memnu",
    author: "Halit Ziya Uşaklıgil",
    language: "tr",
    genre: "dram",
    rating: 4.7,
    description: "İstanbulun son dövr Osmanlı həyatında ailə, arzu və qadağan olunmuş münasibətlərin yaratdığı faciəni təsvir edən klassik roman.",
    coverImage: "https://covers.openlibrary.org/b/id/10849165-L.jpg",
    year: 1900
  },
  {
    id: "serenad",
    title: "Serenad",
    author: "Zülfü Livaneli",
    language: "tr",
    genre: "roman",
    rating: 4.8,
    description: "İstanbulda başlayan araşdırma, keçmişin ağrılı izlərini üzə çıxararaq sevgi, yaddaş və insanlıq haqqında sərhədləri aşan bir hekayəyə çevrilir.",
    coverImage: "https://covers.openlibrary.org/b/id/10461167-L.jpg",
    year: 2011
  },
  {
    id: "tutunamayanlar",
    title: "Tutunamayanlar",
    author: "Oğuz Atay",
    language: "tr",
    genre: "psixologiya",
    rating: 4.7,
    description: "Turgut Özmenin dostu Selim Işıkın izinə düşməsi ilə başlayan, fərd və cəmiyyət münasibətlərini yenilikçi dillə sorğulayan roman.",
    coverImage: "https://covers.openlibrary.org/b/id/8730101-L.jpg",
    year: 1972
  },
  {
    id: "ag-liman",
    title: "Ağ liman",
    author: "Orhan Pamuk",
    language: "tr",
    genre: "roman",
    rating: 4.6,
    description: "XVII əsr Osmanlı dünyasında bir italyan əsir ilə Hoca arasındakı münasibətlər üzərindən kimlik və bilik axtarışını düşünən tarixi roman.",
    year: 1985
  },
  {
    id: "saatleri-ayarlama",
    title: "Saatleri Ayarlama Enstitüsü",
    author: "Ahmet Hamdi Tanpınar",
    language: "tr",
    genre: "detektiv",
    rating: 4.8,
    description: "Hayri İrdalın xatirələri ilə ənənə və modernlik arasındakı gərginliyi incə yumorla araşdıran, qat-qat mənalı bir İstanbul romanı.",
    coverImage: "https://covers.openlibrary.org/b/id/12354821-L.jpg",
    year: 1961
  }
];

const storageKeys = {
  favorites: "bookverse-favorites",
  reviews: "bookverse-reviews"
};
const genreNames = {
  roman: "Roman",
  klassika: "Klassika",
  dram: "Dram",
  sevgi: "Sevgi",
  psixologiya: "Psixologiya",
  detektiv: "Detektiv"
};
const languageNames = { az: "Azərbaycan", tr: "Türk" };
const featuredBookIds = ["eli-ve-nino", "kurk-mantolu-madonna", "calikusu", "serenad"];

const grid = document.getElementById("bookGrid");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("searchInput");
const languageFilter = document.getElementById("languageFilter");
const genreFilter = document.getElementById("genreFilter");
const resultsLabel = document.getElementById("resultsLabel");
const favoriteCount = document.getElementById("favoriteCount");
const favoritesToggle = document.getElementById("favoritesToggle");
const dialog = document.getElementById("bookDialog");
const dialogContent = document.getElementById("dialogContent");
const toast = document.getElementById("toast");

let favorites = [...new Set(readStoredArray(storageKeys.favorites).filter(id => books.some(book => book.id === id)))];
let reviews = readStoredReviews();
let showingFavorites = false;
let activeBookId = null;
let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function readStoredArray(key) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    if (Array.isArray(stored)) return stored;
    throw new TypeError("Yaddaş məlumatının formatı düzgün deyil.");
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError) {
      showToast("Saxlanmış məlumat oxunmadı və sıfırlanacaq.");
      return [];
    }
    showToast("Brauzer yaddaşına daxil olmaq mümkün olmadı.");
    return [];
  }
}

function readStoredReviews() {
  const stored = readStoredArray(storageKeys.reviews);
  return stored.reduce((byBook, review) => {
    if (!review || typeof review !== "object" || typeof review.bookId !== "string" ||
        typeof review.id !== "string" || typeof review.text !== "string" ||
        !Number.isInteger(review.rating) || review.rating < 1 || review.rating > 5 ||
        !books.some(book => book.id === review.bookId)) return byBook;
    if (!byBook[review.bookId]) byBook[review.bookId] = [];
    byBook[review.bookId].push({
      id: review.id,
      rating: review.rating,
      text: review.text.slice(0, 1000),
      date: typeof review.date === "string" ? review.date : new Date().toISOString()
    });
    return byBook;
  }, {});
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast("Məlumat yadda saxlanmadı. Brauzer yaddaşında yer olmaya bilər.");
    return false;
  }
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function coverMarkup(book) {
  const coverUrl = book.coverImage;
  const colorIndex = books.indexOf(book) % 6;
  const image = coverUrl
    ? `<img class="cover-image" src="${escapeHTML(coverUrl)}" alt="${escapeHTML(book.title)} kitabının üz qabığı" loading="lazy" data-cover>`
    : "";
  return `${image}<div class="book-fallback fallback-${colorIndex}" ${coverUrl ? "hidden" : ""} aria-hidden="true">
      <strong>${escapeHTML(book.title)}</strong><span>${escapeHTML(book.author)}</span>
    </div>`;
}

function renderFavoriteButton(book, className = "favorite-button") {
  const isFavorite = favorites.includes(book.id);
  return `<button class="${className}" type="button" data-favorite="${escapeHTML(book.id)}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? "Sevimlilərdən sil" : "Sevimlilərə əlavə et"}: ${escapeHTML(book.title)}">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 10.1-8.8 10.1S3.2 14 3.2 8.8a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z"></path></svg>
  </button>`;
}

function renderFeatured() {
  featuredGrid.innerHTML = featuredBookIds.map(id => {
    const book = books.find(item => item.id === id);
    return `<article class="featured-item">
      <div class="featured-cover">${coverMarkup(book, "featured")}</div>
      <div class="featured-copy">
        <span class="book-language">${languageNames[book.language]} · ${genreNames[book.genre]}</span>
        <h3>${escapeHTML(book.title)}</h3>
        <p>${escapeHTML(book.author)}</p>
        <button type="button" data-details="${escapeHTML(book.id)}">Əsərə bax <span aria-hidden="true">↗</span></button>
      </div>
    </article>`;
  }).join("");
}

function getVisibleBooks() {
  const search = searchInput.value.trim().toLocaleLowerCase("az");
  const language = languageFilter.value;
  const genre = genreFilter.value;
  return books.filter(book => {
    const searchText = `${book.title} ${book.author} ${genreNames[book.genre]}`.toLocaleLowerCase("az");
    return (!search || searchText.includes(search)) &&
      (language === "all" || book.language === language) &&
      (genre === "all" || book.genre === genre) &&
      (!showingFavorites || favorites.includes(book.id));
  });
}

function renderBooks() {
  const visibleBooks = getVisibleBooks();
  const countText = showingFavorites ? "Sevimlilərim" : "Tapılan kitablar";
  resultsLabel.textContent = `${countText}: ${visibleBooks.length}`;
  favoritesToggle.setAttribute("aria-pressed", String(showingFavorites));

  if (visibleBooks.length === 0) {
    const title = showingFavorites ? "Hələ sevimlin yoxdur." : "Axtarışa uyğun kitab tapılmadı.";
    const description = showingFavorites
      ? "Kolleksiyadan ürəyincə olan əsərləri seçib burada saxlaya bilərsən."
      : "Başqa sözlə axtar və ya süzgəcləri təmizləyib yenidən cəhd et.";
    grid.innerHTML = `<div class="empty-state"><span class="empty-mark" aria-hidden="true">✳</span><h3>${title}</h3><p>${description}</p><button type="button" data-clear-filters>Süzgəcləri təmizlə</button></div>`;
    return;
  }

  grid.innerHTML = visibleBooks.map((book, index) => `
    <article class="book-card" style="animation-delay:${Math.min(index * 45, 270)}ms">
      <div class="book-visual">
        <button class="cover-open" type="button" data-details="${escapeHTML(book.id)}" aria-label="${escapeHTML(book.title)} kitabının təfərrüatlarına bax">${coverMarkup(book)}</button>
        ${renderFavoriteButton(book)}
      </div>
      <div class="book-info">
        <div class="book-meta"><span>${languageNames[book.language]}</span><span class="rating" aria-label="${book.rating} bal">★ ${book.rating.toFixed(1)}</span></div>
        <h3>${escapeHTML(book.title)}</h3>
        <p class="book-author">${escapeHTML(book.author)}</p>
        <div class="book-info-bottom"><span class="genre-tag">${genreNames[book.genre]}</span><button class="details-button" type="button" data-details="${escapeHTML(book.id)}">Ətraflı <span aria-hidden="true">↗</span></button></div>
      </div>
    </article>`).join("");
}

function updateFavoriteCount() {
  favoriteCount.textContent = String(favorites.length);
}

function toggleFavorite(id) {
  const wasFavorite = favorites.includes(id);
  favorites = wasFavorite ? favorites.filter(favoriteId => favoriteId !== id) : [...favorites, id];
  if (!saveStorage(storageKeys.favorites, favorites)) {
    favorites = wasFavorite ? [...favorites, id] : favorites.filter(favoriteId => favoriteId !== id);
    return;
  }
  updateFavoriteCount();
  renderBooks();
  renderFeatured();
  if (activeBookId) renderDialog(activeBookId);
  showToast(wasFavorite ? "Kitab sevimlilərdən silindi." : "Kitab sevimlilərə əlavə olundu.");
}

function setGenre(genre) {
  showingFavorites = false;
  genreFilter.value = genre;
  renderBooks();
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
}

function clearFilters() {
  searchInput.value = "";
  languageFilter.value = "all";
  genreFilter.value = "all";
  showingFavorites = false;
  renderBooks();
}

function renderDialog(bookId) {
  const book = books.find(item => item.id === bookId);
  if (!book) return;
  activeBookId = book.id;
  const bookReviews = reviews[book.id] || [];
  const reviewsMarkup = bookReviews.length
    ? bookReviews.map(review => {
      const date = new Date(review.date);
      const dateText = Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("az-AZ");
      return `<article class="review-item">
        <div class="review-item-top"><span>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span><time>${escapeHTML(dateText)}</time></div>
        <p>${escapeHTML(review.text)}</p>
        <button class="delete-review" type="button" data-delete-review="${escapeHTML(review.id)}" data-book-id="${escapeHTML(book.id)}">Rəyimi sil</button>
      </article>`;
    }).join("")
    : '<p class="review-empty">Bu kitab üçün hələ rəy yoxdur. İlk fikrini sən paylaş.</p>';

  dialogContent.innerHTML = `
    <div class="dialog-book">
      <div class="dialog-cover">${coverMarkup(book, "dialog")}</div>
      <div class="dialog-book-copy">
        <span class="dialog-kicker">${languageNames[book.language]} ədəbiyyatı · ${genreNames[book.genre]}</span>
        <h2 id="dialogTitle">${escapeHTML(book.title)}</h2>
        <p class="dialog-author">${escapeHTML(book.author)}</p>
        <div class="dialog-pills"><span class="dialog-pill">${languageNames[book.language]} dili</span><span class="dialog-pill">${genreNames[book.genre]}</span>${book.year ? `<span class="dialog-pill">${book.year}</span>` : ""}</div>
        <p class="dialog-rating">★ ${book.rating.toFixed(1)} <span>· redaksiya reytinqi</span></p>
        <p class="dialog-description">${escapeHTML(book.description)}</p>
        ${renderFavoriteButton(book, "dialog-favorite")}
      </div>
    </div>
    <section class="review-section" aria-labelledby="reviewTitle">
      <div class="review-heading"><h3 id="reviewTitle">Oxucu qeydləri</h3><span>${bookReviews.length} rəy</span></div>
      <form class="review-form" id="reviewForm" data-book-id="${escapeHTML(book.id)}">
        <div><label for="reviewRating">Qiymətin</label><select id="reviewRating" name="rating" required><option value="5">5 ulduz</option><option value="4">4 ulduz</option><option value="3">3 ulduz</option><option value="2">2 ulduz</option><option value="1">1 ulduz</option></select></div>
        <div><label for="reviewText">Fikirlərini bölüş</label><textarea id="reviewText" name="text" maxlength="1000" placeholder="Bu kitab səndə hansı hissləri oyatdı?" required></textarea></div>
        <button class="review-submit" type="submit">Rəy göndər</button>
      </form>
      <div class="review-list">${reviewsMarkup}</div>
    </section>`;

  if (!dialog.open) {
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }
}

function closeDialog() {
  if (dialog.open) dialog.close();
}

function createReviewId() {
  return globalThis.crypto?.randomUUID?.() || `review-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function submitReview(form) {
  const formData = new FormData(form);
  const text = String(formData.get("text") || "").trim();
  const rating = Number(formData.get("rating"));
  const bookId = form.dataset.bookId;
  if (!text || text.length > 1000 || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    showToast("Rəyini yaz və 1–5 ulduz arasında qiymət seç.");
    return;
  }
  const previousReviews = reviews[bookId] || [];
  reviews[bookId] = [...previousReviews, { id: createReviewId(), bookId, rating, text, date: new Date().toISOString() }];
  if (!saveStorage(storageKeys.reviews, Object.values(reviews).flat())) {
    reviews[bookId] = previousReviews;
    return;
  }
  renderDialog(bookId);
  showToast("Rəyin bu cihazda saxlandı.");
}

function deleteReview(bookId, reviewId) {
  const currentReviews = reviews[bookId] || [];
  reviews[bookId] = currentReviews.filter(review => review.id !== reviewId);
  if (reviews[bookId].length === 0) delete reviews[bookId];
  if (!saveStorage(storageKeys.reviews, Object.values(reviews).flat())) {
    reviews[bookId] = currentReviews;
    return;
  }
  renderDialog(bookId);
  showToast("Rəy silindi.");
}

function openFavorites() {
  showingFavorites = true;
  renderBooks();
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
}

function toggleFavoritesView() {
  showingFavorites = !showingFavorites;
  renderBooks();
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
}

function handleDelegatedClick(event) {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }
  const detailTarget = event.target.closest("[data-details]");
  if (detailTarget) {
    renderDialog(detailTarget.dataset.details);
    return;
  }
  const deleteButton = event.target.closest("[data-delete-review]");
  if (deleteButton) {
    deleteReview(deleteButton.dataset.bookId, deleteButton.dataset.deleteReview);
    return;
  }
  if (event.target.closest("[data-clear-filters]")) clearFilters();
}

document.addEventListener("click", handleDelegatedClick);
document.addEventListener("error", event => {
  if (event.target.matches?.("[data-cover]")) {
    event.target.hidden = true;
    const fallback = event.target.nextElementSibling;
    if (fallback?.classList.contains("book-fallback")) fallback.hidden = false;
  }
}, true);

searchInput.addEventListener("input", () => {
  showingFavorites = false;
  renderBooks();
});
languageFilter.addEventListener("change", () => { showingFavorites = false; renderBooks(); });
genreFilter.addEventListener("change", () => { showingFavorites = false; renderBooks(); });
document.getElementById("clearFilters").addEventListener("click", clearFilters);
document.getElementById("searchTrigger").addEventListener("click", () => {
  document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => searchInput.focus(), 350);
});
favoritesToggle.addEventListener("click", toggleFavoritesView);
document.querySelectorAll("[data-open-favorites]").forEach(button => button.addEventListener("click", openFavorites));
document.getElementById("categoryList").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (button) setGenre(button.dataset.category);
});
document.getElementById("menuToggle").addEventListener("click", event => {
  const button = event.currentTarget;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  button.setAttribute("aria-label", isOpen ? "Naviqasiyanı aç" : "Naviqasiyanı bağla");
  document.getElementById("primaryNav").classList.toggle("is-open", !isOpen);
});
document.getElementById("primaryNav").addEventListener("click", event => {
  if (event.target.closest("a")) {
    if (event.target.closest('a[href="#explore"]')) {
      showingFavorites = false;
      renderBooks();
    }
    document.getElementById("primaryNav").classList.remove("is-open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
  }
});
document.getElementById("dialogClose").addEventListener("click", closeDialog);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  activeBookId = null;
});
dialogContent.addEventListener("submit", event => {
  if (event.target.matches("#reviewForm")) {
    event.preventDefault();
    submitReview(event.target);
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && dialog.open) {
    closeDialog();
    return;
  }
  if (event.key === "/" && !dialog.open && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderFeatured();
renderBooks();
updateFavoriteCount();
