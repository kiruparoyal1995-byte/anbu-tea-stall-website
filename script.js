
"use strict";

// =====================================
// ANBU TEA STALL - PRODUCT DATABASE
// =====================================

const products = [
    {
        id: 1,
        name: "பால் டீ",
        english: "MILK TEA",
        category: "தேநீர்",
        price: 12,
        unit: "ஒரு கோப்பை",
        tag: "மக்களின் விருப்பம்",
        description: "பாலுடன் கலந்த மணமான சூடான தேநீர்.",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "இஞ்சி டீ",
        english: "GINGER TEA",
        category: "தேநீர்",
        price: 15,
        unit: "ஒரு கோப்பை",
        tag: "சிறப்பான சுவை",
        description: "இஞ்சியின் மணத்துடன் தயாரிக்கப்படும் தேநீர்.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "மசாலா டீ",
        english: "MASALA TEA",
        category: "தேநீர்",
        price: 18,
        unit: "ஒரு கோப்பை",
        tag: "கடைச் சிறப்பு",
        description: "நறுமண மசாலாக்கள் கலந்த சுவையான டீ.",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "பில்டர் காபி",
        english: "FILTER COFFEE",
        category: "தேநீர்",
        price: 20,
        unit: "ஒரு டம்ளர்",
        tag: "காபி பிரியர்களுக்கு",
        description: "தென்னிந்திய பாணியில் மணக்கும் காபி.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "மெதுவடை",
        english: "MEDHU VADAI",
        category: "சிற்றுண்டி",
        price: 10,
        unit: "ஒன்று",
        tag: "மொறுமொறுப்பு",
        description: "வெளியே மொறுமொறுப்பாகவும் உள்ளே மென்மையாகவும்.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "பருப்பு வடை",
        english: "PARUPPU VADAI",
        category: "சிற்றுண்டி",
        price: 10,
        unit: "ஒன்று",
        tag: "மாலை நேரச் சிற்றுண்டி",
        description: "பருப்பு மற்றும் மசாலா கலந்த வடை.",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "உருளைக்கிழங்கு போண்டா",
        english: "POTATO BONDA",
        category: "சிற்றுண்டி",
        price: 12,
        unit: "ஒன்று",
        tag: "சுவையான தேர்வு",
        description: "மசாலா உருளைக்கிழங்கு நிரப்பிய போண்டா.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "வாழைக்காய் பஜ்ஜி",
        english: "RAW BANANA BAJJI",
        category: "சிற்றுண்டி",
        price: 12,
        unit: "ஒன்று",
        tag: "மாலைச் சிறப்பு",
        description: "மாவு பூசி பொன்னிறமாகப் பொரித்த பஜ்ஜி.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "சமோசா",
        english: "SAMOSA",
        category: "சிற்றுண்டி",
        price: 12,
        unit: "ஒன்று",
        tag: "எல்லோருக்கும் பிடிக்கும்",
        description: "மொறுமொறுப்பான வெளிப்புறத்துடன் சுவையான சமோசா.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "இட்லி",
        english: "IDLI",
        category: "காலை உணவு",
        price: 10,
        unit: "ஒன்று",
        tag: "காலை உணவு",
        description: "மென்மையான இட்லி; சாம்பார், சட்னியுடன்.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "பொங்கல்",
        english: "VEN PONGAL",
        category: "காலை உணவு",
        price: 40,
        unit: "ஒரு பரிமாறல்",
        tag: "பாரம்பரிய உணவு",
        description: "நெய் மணக்கும் வெண்பொங்கல்; சட்னியுடன்.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "தோசை",
        english: "DOSA",
        category: "காலை உணவு",
        price: 30,
        unit: "ஒன்று",
        tag: "சூடான தோசை",
        description: "மொறுமொறுப்பான தோசை; சாம்பார், சட்னியுடன்.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "பூரி",
        english: "POORI",
        category: "காலை உணவு",
        price: 40,
        unit: "2 பூரி",
        tag: "பிடித்தமான காலை உணவு",
        description: "பூரியுடன் உருளைக்கிழங்கு மசாலா.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "சுக்கு காபி",
        english: "DRY GINGER COFFEE",
        category: "தேநீர்",
        price: 15,
        unit: "ஒரு கோப்பை",
        tag: "பாரம்பரிய பானம்",
        description: "சுக்கின் நறுமணம் கொண்ட பாரம்பரிய பானம்.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "எலுமிச்சை டீ",
        english: "LEMON TEA",
        category: "தேநீர்",
        price: 15,
        unit: "ஒரு கோப்பை",
        tag: "புத்துணர்ச்சி",
        description: "எலுமிச்சைச் சுவையுடன் புத்துணர்ச்சி தரும் டீ.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "முட்டை பஜ்ஜி",
        english: "EGG BAJJI",
        category: "சிற்றுண்டி",
        price: 15,
        unit: "ஒன்று",
        tag: "சிறப்பு வகை",
        description: "முட்டையுடன் தயாரிக்கப்படும் சூடான பஜ்ஜி.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    }
];

// =====================================
// APPLICATION STATE
// =====================================

let activeCategory = "அனைத்தும்";
let cart = new Map();

// =====================================
// HTML ELEMENTS
// =====================================

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// =====================================
// DISPLAY PRODUCTS
// =====================================

function renderProducts() {
    const query = searchInput.value.trim().toLocaleLowerCase("ta");

    const filteredProducts = products.filter(product => {
        const matchesCategory =
            activeCategory === "அனைத்தும்" ||
            product.category === activeCategory;

        const searchableText = [
            product.name,
            product.english,
            product.category,
            product.description
        ].join(" ").toLocaleLowerCase("ta");

        const matchesSearch = searchableText.includes(query);

        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <p class="no-results">
                மன்னிக்கவும்! நீங்கள் தேடிய உணவுப் பொருள் கிடைக்கவில்லை.
                வேறு பெயரில் தேடிப் பாருங்கள்.
            </p>
        `;
        return;
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <article class="product-card">
            <div class="product-image-wrap">
                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/600x400/f1dfbc/57351c?text=Anbu+Tea+Stall';"
                >
                <span class="product-tag">${product.tag}</span>
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="product-english">${product.english}</span>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">
                    <div class="product-price">
                        ₹${product.price}
                        <span class="product-unit">${product.unit}</span>
                    </div>

                    <button
                        class="add-btn"
                        data-add="${product.id}"
                        type="button"
                        aria-label="${product.name} கார்ட்டில் சேர்க்கவும்"
                    >
                        + சேர்க்க
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}

// =====================================
// CATEGORY FILTER
// =====================================

filters.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");

    if (!button) return;

    activeCategory = button.dataset.category;

    filters.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn === button);
    });

    renderProducts();
});

// =====================================
// SEARCH
// =====================================

searchInput.addEventListener("input", renderProducts);

// =====================================
// ADD PRODUCT TO CART
// =====================================

productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");

    if (!button) return;

    const id = Number(button.dataset.add);
    const product = products.find(item => item.id === id);

    if (!product) return;

    const current = cart.get(id);

    if (current) {
        current.quantity += 1;
    } else {
        cart.set(id, {
            product,
            quantity: 1
        });
    }

    renderCart();
});

// =====================================
// RENDER CART
// =====================================

function renderCart() {
    const entries = Array.from(cart.entries());

    const totalQuantity = entries.reduce(
        (sum, [, item]) => sum + item.quantity,
        0
    );

    const totalPrice = entries.reduce(
        (sum, [, item]) => sum + item.product.price * item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;
    cartTotal.textContent = `₹${totalPrice}`;

    if (entries.length === 0) {
        cartItems.innerHTML = `
            <p class="empty-cart">
                🛒 இன்னும் எந்தப் பொருளையும் தேர்வு செய்யவில்லை.
            </p>
        `;
        return;
    }

    cartItems.innerHTML = entries.map(([id, item]) => `
        <div class="cart-item">
            <div>
                <h4>${item.product.name}</h4>
                <p>
                    ₹${item.product.price} × ${item.quantity}
                    = ₹${item.product.price * item.quantity}
                </p>
            </div>

            <div class="cart-item-actions">
                <button
                    class="qty-btn"
                    data-action="decrease"
                    data-id="${id}"
                    aria-label="${item.product.name} எண்ணிக்கையைக் குறைக்கவும்"
                >−</button>

                <span class="qty-value">${item.quantity}</span>

                <button
                    class="qty-btn"
                    data-action="increase"
                    data-id="${id}"
                    aria-label="${item.product.name} எண்ணிக்கையை அதிகரிக்கவும்"
                >+</button>

                <button
                    class="remove-btn"
                    data-action="remove"
                    data-id="${id}"
                    aria-label="${item.product.name} நீக்கவும்"
                    title="நீக்கவும்"
                >✕</button>
            </div>
        </div>
    `).join("");
}

// =====================================
// CHANGE QUANTITY / REMOVE ITEM
// =====================================

cartItems.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;
    const item = cart.get(id);

    if (!item) return;

    if (action === "increase") {
        item.quantity += 1;
    } else if (action === "decrease") {
        item.quantity -= 1;

        if (item.quantity <= 0) {
            cart.delete(id);
        }
    } else if (action === "remove") {
        cart.delete(id);
    }

    renderCart();
});

// =====================================
// ORDER SUMMARY
// =====================================

checkoutBtn.addEventListener("click", () => {
    const entries = Array.from(cart.values());

    if (entries.length === 0) {
        alert("முதலில் உங்களுக்குப் பிடித்த உணவுப் பொருட்களைச் சேர்க்கவும்!");
        return;
    }

    const total = entries.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    const summary = entries.map(item =>
        `${item.product.name} × ${item.quantity} = ₹${
            item.product.price * item.quantity
        }`
    ).join("\n");

    alert(
        "அன்பு டீ ஸ்டால் - ஆர்டர் விவரம்\n\n" +
        summary +
        "\n\nமொத்தத் தொகை: ₹" + total +
        "\n\nஇது மாதிரி ஆர்டர் சுருக்கம் மட்டுமே. " +
        "உண்மையான ஆர்டர் அனுப்ப கடையின் தொடர்பு வசதியை இணைக்க வேண்டும்."
    );
});

// =====================================
// MOBILE NAVIGATION
// =====================================

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.addEventListener("click", event => {
    if (event.target.closest("a")) {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    }
});

// =====================================
// FOOTER YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();

// =====================================
// INITIALIZE WEBSITE
// =====================================

renderProducts();
renderCart();

console.log("அன்பு டீ ஸ்டால் இணையதளம் வெற்றிகரமாகத் தொடங்கியது!");
console.log(`மொத்த உணவுப் பொருட்கள்: ${products.length}`);
