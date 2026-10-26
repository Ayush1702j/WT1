/**
 * Amazon.in Front Page - Interactive JavaScript
 * Web Technology Practical 1
 */

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 1. Product Data Catalog
  // --------------------------------------------------------------------------
  const products = [
    {
      id: "prod-1",
      name: "Apple MacBook Air M2 Chip (13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD, Space Grey)",
      category: "electronics",
      badge: "Best Seller",
      badgeType: "",
      image: "images/prod-macbook.svg",
      price: 89990,
      originalPrice: 114900,
      discount: "22% off",
      rating: "4.7",
      reviews: "12,482",
      prime: true,
      delivery: "FREE delivery Tomorrow, 27 Oct",
      specs: ["M2 8-core CPU, 8-core GPU", "13.6-inch Liquid Retina display with True Tone", "Up to 18 hours battery life", "MagSafe 3 charging port"]
    },
    {
      id: "prod-2",
      name: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Mic",
      category: "electronics",
      badge: "Amazon's Choice",
      badgeType: "choice",
      image: "images/prod-sony-xm5.svg",
      price: 26990,
      originalPrice: 34990,
      discount: "23% off",
      rating: "4.6",
      reviews: "8,920",
      prime: true,
      delivery: "FREE delivery Thursday, 29 Oct",
      specs: ["Two processors control 8 microphones for unprecedented ANC", "30-hour battery life with quick charging (3 min for 3 hours)", "Ultra-comfortable lightweight design", "Multipoint connection"]
    },
    {
      id: "prod-3",
      name: "Samsung Galaxy Watch 6 Bluetooth (44mm, Graphite, Sapphire Crystal Glass, Sleep Tracking)",
      category: "electronics",
      badge: "Deal of Day",
      badgeType: "deal",
      image: "images/prod-watch6.svg",
      price: 19999,
      originalPrice: 33999,
      discount: "41% off",
      rating: "4.5",
      reviews: "4,120",
      prime: true,
      delivery: "FREE delivery Tomorrow, 27 Oct",
      specs: ["Advanced Sleep Coaching & ECG monitoring", "20% larger display with thinner bezel", "Fast charging sapphire crystal glass", "Water resistant up to 50 meters (IP68)"]
    },
    {
      id: "prod-4",
      name: "Sony Alpha IV Full-Frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens",
      category: "electronics",
      badge: "Premium Pick",
      badgeType: "choice",
      image: "images/prod-camera.svg",
      price: 214990,
      originalPrice: 242990,
      discount: "12% off",
      rating: "4.8",
      reviews: "1,850",
      prime: true,
      delivery: "FREE delivery by Sunday, 1 Nov",
      specs: ["33MP full-frame Exmor R back-illuminated CMOS sensor", "BIONZ XR processor with 8x more processing power", "4K 60p 10-bit 4:2:2 recording capability", "Real-time Eye AF for human, animal & bird"]
    },
    {
      id: "prod-5",
      name: "Green Soul Monster Ultimate Ergonomic Chair with Breathable Spaceloft Fabric & Lumbar Support",
      category: "home",
      badge: "Popular",
      badgeType: "",
      image: "images/prod-chair.svg",
      price: 16990,
      originalPrice: 28990,
      discount: "41% off",
      rating: "4.4",
      reviews: "7,314",
      prime: true,
      delivery: "FREE delivery by Friday, 30 Oct",
      specs: ["Heavy duty metal base with Class 4 gas lift", "Multi-functional tilt mechanism (90° to 180°)", "4D adjustable padded armrests", "Magnetic memory foam neck pillow"]
    },
    {
      id: "prod-6",
      name: "Nike Men's Air Zoom Pegasus 40 Running Shoes (High-Performance Breathable Engineered Mesh)",
      category: "fashion",
      badge: "Trending",
      badgeType: "deal",
      image: "images/prod-shoes.svg",
      price: 8495,
      originalPrice: 11895,
      discount: "29% off",
      rating: "4.6",
      reviews: "5,210",
      prime: true,
      delivery: "FREE delivery Tomorrow, 27 Oct",
      specs: ["Dual Zoom Air units for springy energetic stride", "Single layer mesh tuned for optimal breathability", "Redesigned midfoot strap for molded fit", "Durable waffle rubber outsole"]
    },
    {
      id: "prod-7",
      name: "Philips Fully Automatic Espresso Coffee Machine 2200 Series with Classic Milk Frother",
      category: "home",
      badge: "Best Seller",
      badgeType: "",
      image: "images/prod-coffee.svg",
      price: 44990,
      originalPrice: 59990,
      discount: "25% off",
      rating: "4.5",
      reviews: "3,115",
      prime: false,
      delivery: "FREE delivery by Saturday, 31 Oct",
      specs: ["Classic milk frother with steam wand", "100% pure ceramic grinders for 20,000 cups", "Aroma Extract system keeps beans fresh", "Intuitive touch display with My Coffee Choice"]
    },
    {
      id: "prod-8",
      name: "Keychron K2 Wireless Mechanical Keyboard RGB Backlit (Gateron G Pro Brown Switches)",
      category: "electronics",
      badge: "Gamer Choice",
      badgeType: "choice",
      image: "images/prod-keyboard.svg",
      price: 7999,
      originalPrice: 10999,
      discount: "27% off",
      rating: "4.7",
      reviews: "6,419",
      prime: true,
      delivery: "FREE delivery Tomorrow, 27 Oct",
      specs: ["Connects with up to 3 devices via Bluetooth 5.1", "Broad Mac & Windows dual-layout compatibility", "4000 mAh large rechargeable battery", "18 types of dynamic RGB backlight modes"]
    },
    {
      id: "prod-9",
      name: "Samsung 138 cm (55 inches) Crystal 4K Vivid Pro Ultra HD Smart LED TV (Titan Grey)",
      category: "electronics",
      badge: "Limited Deal",
      badgeType: "deal",
      image: "images/prod-tv.svg",
      price: 42990,
      originalPrice: 68900,
      discount: "38% off",
      rating: "4.3",
      reviews: "9,840",
      prime: true,
      delivery: "FREE Scheduled Delivery & Installation",
      specs: ["PurColor fine-tuned colors for vibrant pictures", "Crystal Processor 4K with 4K upscaling", "Q-Symphony soundbar and TV synchronization", "Motion Xcelerator for fluid gaming frames"]
    },
    {
      id: "prod-10",
      name: "Instant Vortex 6-in-1 Digital Air Fryer with EvenCrisp Technology (5.7 Litre Capacity)",
      category: "home",
      badge: "Save 30%",
      badgeType: "deal",
      image: "images/prod-airfryer.svg",
      price: 7999,
      originalPrice: 13999,
      discount: "43% off",
      rating: "4.6",
      reviews: "14,290",
      prime: true,
      delivery: "FREE delivery Tomorrow, 27 Oct",
      specs: ["6 smart cooking presets: Air Fry, Roast, Broil, Bake, Reheat, Dehydrate", "Uses 95% less oil than traditional deep frying", "EvenCrisp airflow for golden crunch every time", "Dishwasher safe non-stick basket and tray"]
    },
    {
      id: "prod-11",
      name: "Echo Dot (5th Gen) Smart Speaker with Bigger Sound, Motion Sensor & Alexa (Deep Blue)",
      category: "electronics",
      badge: "Amazon Device",
      badgeType: "choice",
      image: "images/prod-echo.svg",
      price: 4499,
      originalPrice: 5499,
      discount: "18% off",
      rating: "4.5",
      reviews: "28,710",
      prime: true,
      delivery: "FREE delivery Tomorrow, 27 Oct",
      specs: ["Best sounding Echo Dot yet with clearer vocals & deeper bass", "Control smart home lights, ACs & appliances with voice", "Tap gestures to pause music or dismiss alarms", "Built-in indoor temperature & ultrasound motion sensor"]
    },
    {
      id: "prod-12",
      name: "Arctic Hunter Water Resistant Laptop Backpack with Anti-Theft Lock & USB Charging Port",
      category: "fashion",
      badge: "Trending",
      badgeType: "",
      image: "images/prod-backpack.svg",
      price: 2499,
      originalPrice: 4999,
      discount: "50% off",
      rating: "4.4",
      reviews: "3,890",
      prime: true,
      delivery: "FREE delivery by Thursday, 29 Oct",
      specs: ["Fits up to 15.6 inch laptops with shockproof cushion compartment", "Integrated TSA combination lock for travel security", "External USB charging port built into exterior", "High-density waterproof oxford fabric"]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Shopping Cart State
  // --------------------------------------------------------------------------
  let cart = [
    { product: products[0], qty: 1 },
    { product: products[10], qty: 1 }
  ];

  // DOM Elements
  const productsGrid = document.getElementById("productsGrid");
  const cartBadge = document.getElementById("cartCountBadge");
  const cartDrawerItems = document.getElementById("cartDrawerItems");
  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const searchInput = document.getElementById("amzSearchInput");
  const searchBtn = document.getElementById("amzSearchBtn");
  const categoryFilter = document.getElementById("amzSearchCategory");
  const filterTabs = document.querySelectorAll(".amz-filter-btn");
  const toastEl = document.getElementById("cartToast");
  const toastMessage = document.getElementById("toastMessage");
  const countdownTimer = document.getElementById("countdownTimer");

  // Bootstrap Toast instance
  let bsToast = null;
  if (toastEl && window.bootstrap) {
    bsToast = new bootstrap.Toast(toastEl, { delay: 2800 });
  }

  // --------------------------------------------------------------------------
  // 3. Render Products
  // --------------------------------------------------------------------------
  function renderProducts(items) {
    if (!productsGrid) return;
    
    if (items.length === 0) {
      productsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="display-6 text-muted mb-3"><i class="bi bi-search"></i></div>
          <h5>No products found matching your search.</h5>
          <p class="text-muted">Try checking your spelling or use more general terms.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = items.map(p => `
      <div class="amz-product-card" data-category="${p.category}" id="${p.id}">
        <span class="amz-badge-overlay ${p.badgeType}">${p.badge}</span>
        
        <div class="amz-product-img-box">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>

        <div class="amz-product-category">${p.category}</div>
        <h5 class="amz-product-name" title="${p.name}">${p.name}</h5>

        <div class="amz-product-ratings">
          <span class="amz-stars">★★★★☆</span>
          <span class="amz-rating-count">${p.rating} (${p.reviews})</span>
        </div>

        <div class="amz-pricing-row">
          <span class="amz-discount-pct">-${p.discount}</span>
          <span class="amz-price-current"><span class="amz-price-symbol">₹</span>${p.price.toLocaleString("en-IN")}</span>
          <span class="amz-price-original">₹${p.originalPrice.toLocaleString("en-IN")}</span>
        </div>

        <div class="amz-delivery-info">
          ${p.prime ? '<span class="amz-prime-tag">prime</span> ' : ''}
          ${p.delivery}
        </div>

        <div class="amz-btn-group">
          <button class="amz-btn-add-cart" onclick="addToCart('${p.id}')">
            <i class="bi bi-cart-plus"></i> Add to Cart
          </button>
          <button class="amz-btn-quick-view" onclick="openQuickView('${p.id}')" title="Quick View">
            <i class="bi bi-eye"></i>
          </button>
        </div>
      </div>
    `).join("");
  }

  // Initial render
  renderProducts(products);
  updateCartDisplay();

  // --------------------------------------------------------------------------
  // 4. Cart Operations
  // --------------------------------------------------------------------------
  window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.product.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({ product: product, qty: 1 });
    }

    updateCartDisplay();
    showToast(`Added to Cart: ${product.name.substring(0, 32)}...`);
  };

  window.changeQty = function(productId, delta) {
    const index = cart.findIndex(item => item.product.id === productId);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    updateCartDisplay();
  };

  function updateCartDisplay() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);

    if (cartBadge) {
      cartBadge.textContent = totalCount;
      // Animate badge pulse
      cartBadge.classList.add("pulse");
      setTimeout(() => cartBadge.classList.remove("pulse"), 400);
    }

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
    }

    if (cartDrawerItems) {
      if (cart.length === 0) {
        cartDrawerItems.innerHTML = `
          <div class="text-center py-5">
            <i class="bi bi-cart-x fs-1 text-muted"></i>
            <h6 class="mt-3">Your Amazon Cart is empty</h6>
            <p class="text-muted small">Explore products and add them to your cart.</p>
          </div>
        `;
      } else {
        cartDrawerItems.innerHTML = cart.map(item => `
          <div class="amz-cart-item">
            <img src="${item.product.image}" alt="${item.product.name}" class="amz-cart-item-img">
            <div class="amz-cart-item-info">
              <div class="amz-cart-item-title">${item.product.name.substring(0, 48)}...</div>
              <div class="amz-cart-item-price">₹${item.product.price.toLocaleString("en-IN")}</div>
              <div class="amz-cart-qty-ctrl">
                <button class="amz-qty-btn" onclick="changeQty('${item.product.id}', -1)">-</button>
                <span class="px-2 small font-weight-bold">${item.qty}</span>
                <button class="amz-qty-btn" onclick="changeQty('${item.product.id}', 1)">+</button>
                <button class="btn btn-sm text-danger ms-auto p-0 small" onclick="changeQty('${item.product.id}', -${item.qty})">Delete</button>
              </div>
            </div>
          </div>
        `).join("");
      }
    }
  }

  function showToast(msg) {
    if (toastMessage && bsToast) {
      toastMessage.textContent = msg;
      bsToast.show();
    }
  }

  // --------------------------------------------------------------------------
  // 5. Checkout Modal Operations
  // --------------------------------------------------------------------------
  window.openCheckoutModal = function() {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add products before checking out.");
      return;
    }

    const cartOffcanvasEl = document.getElementById("cartOffcanvas");
    if (cartOffcanvasEl && window.bootstrap) {
      const oc = bootstrap.Offcanvas.getInstance(cartOffcanvasEl);
      if (oc) oc.hide();
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const tax = Math.round(subtotal * 0.18);
    const grandTotal = subtotal;

    const modalBody = document.getElementById("checkoutModalBody");
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="row g-4">
        <div class="col-md-7">
          <h6 class="fw-bold text-dark border-bottom pb-2 mb-3"><i class="bi bi-geo-alt-fill text-danger me-1"></i> Delivery Address</h6>
          <div class="p-3 bg-light rounded border mb-3 small">
            <strong>Ayush</strong> | +91 98765 43210<br>
            Flat 402, Alandi Road, Near MIT Academy of Engineering<br>
            Pune, Maharashtra - <strong>412105</strong>
          </div>

          <h6 class="fw-bold text-dark border-bottom pb-2 mb-3"><i class="bi bi-credit-card-2-front-fill text-primary me-1"></i> Select Payment Method</h6>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="payOption" id="payUPI" checked>
            <label class="form-check-label small fw-semibold" for="payUPI">Amazon Pay UPI (Instant & Secure)</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="payOption" id="payCards">
            <label class="form-check-label small fw-semibold" for="payCards">Credit or Debit Card (10% Bank Discount applied)</label>
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="radio" name="payOption" id="payCOD">
            <label class="form-check-label small fw-semibold" for="payCOD">Cash on Delivery / Pay on Delivery</label>
          </div>

          <div class="border p-3 rounded bg-white">
            <h6 class="fw-bold small text-muted text-uppercase mb-2">Order Items (${cart.length}):</h6>
            <ul class="list-unstyled mb-0 small">
              ${cart.map(c => `
                <li class="d-flex justify-content-between py-1 border-bottom">
                  <span>${c.product.name.substring(0, 36)}... (x${c.qty})</span>
                  <span class="fw-bold">₹${(c.product.price * c.qty).toLocaleString("en-IN")}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <div class="col-md-5">
          <div class="card p-3 shadow-sm border-0 bg-light">
            <h6 class="fw-bold mb-3">Order Summary</h6>
            <div class="d-flex justify-content-between small mb-1">
              <span>Items Total:</span>
              <span>₹${subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div class="d-flex justify-content-between small mb-1">
              <span>Delivery:</span>
              <span class="text-success fw-bold">FREE</span>
            </div>
            <div class="d-flex justify-content-between small mb-3">
              <span>GST Included:</span>
              <span>₹${tax.toLocaleString("en-IN")}</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between fs-5 fw-bold text-danger mb-3">
              <span>Order Total:</span>
              <span>₹${grandTotal.toLocaleString("en-IN")}</span>
            </div>
            <button class="btn btn-warning w-100 py-2 fw-bold" onclick="placeOrderSimulation()">
              Place Your Order &amp; Pay
            </button>
            <p class="text-muted text-center small mt-2 mb-0" style="font-size: 0.75rem;">
              <i class="bi bi-shield-check text-success"></i> 256-bit Secure Encryption
            </p>
          </div>
        </div>
      </div>
    `;

    const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
    checkoutModal.show();
  };

  window.placeOrderSimulation = function() {
    const modalBody = document.getElementById("checkoutModalBody");
    const orderId = "OD-" + Math.floor(100000 + Math.random() * 900000);
    modalBody.innerHTML = `
      <div class="text-center py-5">
        <div class="text-success display-3 mb-3"><i class="bi bi-check-circle-fill"></i></div>
        <h4 class="fw-bold text-success mb-2">Order Placed Successfully!</h4>
        <p class="text-muted mb-2">Thank you, <strong>Ayush</strong>. We have sent a confirmation email & SMS.</p>
        <div class="alert alert-warning d-inline-block px-4 py-2 my-3 fw-bold">
          Order ID: ${orderId}
        </div>
        <p class="small text-muted mb-4">Guaranteed Delivery to Pune (412105) by Tomorrow, 8 PM.</p>
        <button class="btn btn-dark px-4" data-bs-dismiss="modal">Continue Shopping</button>
      </div>
    `;
    cart = [];
    updateCartDisplay();
    showToast("🎉 Order placed successfully!");
  };

  // --------------------------------------------------------------------------
  // 6. Quick View Modal
  // --------------------------------------------------------------------------
  window.openQuickView = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById("quickViewModalBody");
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="row g-4 align-items-center">
        <div class="col-md-5 text-center">
          <img src="${product.image}" alt="${product.name}" class="img-fluid rounded border p-3" style="max-height: 280px;">
        </div>
        <div class="col-md-7">
          <span class="badge bg-warning text-dark mb-2">${product.badge}</span>
          <h5 class="fw-bold text-dark">${product.name}</h5>
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="text-warning">★★★★☆</span>
            <span class="text-primary small fw-semibold">${product.rating} (${product.reviews} ratings)</span>
          </div>
          <div class="mb-3">
            <span class="text-danger fw-bold fs-5 me-2">-${product.discount}</span>
            <span class="fs-4 fw-bold text-dark">₹${product.price.toLocaleString("en-IN")}</span>
            <span class="text-muted text-decoration-line-through ms-2 small">₹${product.originalPrice.toLocaleString("en-IN")}</span>
          </div>
          <p class="text-success small fw-bold mb-2"><i class="bi bi-check-circle-fill"></i> In Stock. Sold by Appario Retail & Fulfilled by Amazon.</p>
          <h6 class="fw-bold small text-muted text-uppercase mb-2">Key Specifications:</h6>
          <ul class="small ps-3 mb-4">
            ${product.specs.map(s => `<li>${s}</li>`).join("")}
          </ul>
          <div class="d-flex gap-2">
            <button class="btn btn-warning fw-semibold px-4 flex-grow-1" onclick="addToCart('${product.id}'); bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();">
              <i class="bi bi-cart-plus me-1"></i> Add to Cart Now
            </button>
          </div>
        </div>
      </div>
    `;

    const qvModal = new bootstrap.Modal(document.getElementById("quickViewModal"));
    qvModal.show();
  };

  // --------------------------------------------------------------------------
  // 7. Search & Category Filters
  // --------------------------------------------------------------------------
  function performSearch() {
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const category = (categoryFilter ? categoryFilter.value : "all").toLowerCase();

    const filtered = products.filter(p => {
      const matchesQuery = query === "" || 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.specs.some(s => s.toLowerCase().includes(query));
      
      const matchesCat = category === "all" || p.category.toLowerCase() === category;
      return matchesQuery && matchesCat;
    });

    renderProducts(filtered);

    // Smooth scroll down to products section if searching
    if (query !== "") {
      const section = document.getElementById("featuredProductsSection");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (searchBtn) searchBtn.addEventListener("click", performSearch);
  if (categoryFilter) categoryFilter.addEventListener("change", performSearch);

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") performSearch();
    });
    // Live filter with debounce
    let debounceTimer;
    searchInput.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performSearch, 300);
    });
  }

  // Filter tabs click handling
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");

      if (category === "all") {
        renderProducts(products);
      } else if (category === "deals") {
        renderProducts(products.filter(p => p.badgeType === "deal" || parseInt(p.discount) >= 30));
      } else {
        renderProducts(products.filter(p => p.category === category));
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. Deal Countdown Timer Simulation
  // --------------------------------------------------------------------------
  if (countdownTimer) {
    let secondsLeft = 14 * 3600 + 42 * 60 + 19; // 14h 42m 19s
    setInterval(() => {
      secondsLeft--;
      if (secondsLeft <= 0) secondsLeft = 86400;
      const hrs = Math.floor(secondsLeft / 3600);
      const mins = Math.floor((secondsLeft % 3600) / 60);
      const secs = secondsLeft % 60;
      countdownTimer.textContent = `${String(hrs).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
    }, 1000);
  }

  // --------------------------------------------------------------------------
  // 9. Back to Top Scroll
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --------------------------------------------------------------------------
  // 10. Location Selector Mockup
  // --------------------------------------------------------------------------
  const locBox = document.getElementById("navLocationBox");
  if (locBox) {
    locBox.addEventListener("click", () => {
      const pin = prompt("Enter your 6-digit delivery pincode (e.g., 412105):", "412105");
      if (pin && pin.trim().length === 6) {
        const pinDisplay = document.getElementById("userPincodeDisplay");
        if (pinDisplay) pinDisplay.textContent = `Pune ${pin.trim()}`;
        showToast(`Delivery location updated to PIN: ${pin.trim()}`);
      }
    });
  }
});
