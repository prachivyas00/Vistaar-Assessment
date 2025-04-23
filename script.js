//index.html page
//header search input
const searchToggleBtn = document.getElementById("searchToggleBtn");
const searchInputField = document.getElementById("searchInput");

searchToggleBtn.addEventListener("click", () => {
  searchInputField.classList.toggle("d-none");

  if (!searchInputField.classList.contains("d-none")) {
    searchInputField.focus();
  }
});

//header SHOP dropdown
const shopToggleBtn = document.getElementById("shopBtn");
const shopDropdownMenu = document.getElementById("shopDropdown");

shopToggleBtn.addEventListener("click", () => {
  shopDropdownMenu.classList.toggle("d-none");
  setTimeout(() => {
    shopDropdownMenu.classList.toggle("show");
  }, 10);
});

document.addEventListener("click", (e) => {
  const clickedOutsideDropdown =
    !shopToggleBtn.contains(e.target) && !shopDropdownMenu.contains(e.target);

  if (clickedOutsideDropdown) {
    shopDropdownMenu.classList.remove("show");
    setTimeout(() => {
      shopDropdownMenu.classList.add("d-none");
    }, 200);
  }
});

// product-item.html page functionalities
let quantity = 1;

//update the quantitiy and disable button if O
function updateQuantity(change) {
  quantity = Math.max(0, quantity + change);

  const quantityDisplay = document.getElementById("quantity");
  const addButton = document.getElementById("addBtn");
  const form = document.getElementById("contactForm");

  quantityDisplay.textContent = quantity;
  addButton.disabled = quantity === 0;

  if (quantity === 0 && form) {
    form.style.display = "none";
  }
}

//display image from thumbnails
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("LargeImage");
  if (!mainImage) return;

  mainImage.src = thumbnail.src;

  document
    .querySelectorAll(".image-strip img")
    .forEach((img) => img.classList.remove("active"));

  thumbnail.classList.add("active");
}

//reveal contact form on Submit
function revealContactForm() {
  if (quantity === 0) return;

  const form = document.getElementById("contactForm");
  if (form) {
    form.style.display = "block";
    form.scrollIntoView({ behavior: "smooth" });
  }
}

//fucntionalities for category.html page
const query = new URLSearchParams(window.location.search);
const category = query.get("cat");

//display category title
const titleEl = document.getElementById("category-title");
titleEl.textContent = category ? `${category} collection` : "Category";

//load and fetch items from json file
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const productGrid = document.getElementById("product-grid");
    if (!productGrid) return;

    const categoryMap = {
      mens: data.products[0]?.mens,
      womens: data.womens,
      accessories: data.accessories,
    };

    const items = categoryMap[category];

    if (!items || !Array.isArray(items)) {
      productGrid.innerHTML = `<p class="text-danger">Invalid category selected.</p>`;
      return;
    }

    //Build show the product cards
    items.forEach((product) => {
      const column = document.createElement("div");
      column.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

      column.innerHTML = `
  <a href="product-item.html" class="text-decoration-none text-dark">
    <div class="custom-card text-center p-3 h-100 d-flex flex-column">
      <img src="${product.thumbnail}" class="custom-card-img mb-3" alt="${product.title}">
      <div class="mt-auto">
        <p class="mb-1 fw-semibold text-primary">New!</p>
        <p class="mb-1 text-dark small fw-medium">${product.title}</p>
        <p class="mb-0 text-dark fw-bold">Rs. ${product.price}</p>
      </div>
    </div>
  </a>
`;
      productGrid.appendChild(column);
    });
  })

  //error handling
  .catch((error) => {
    console.error("Error loading product data:", error);
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
      productGrid.innerHTML = `<p class="text-danger">Failed to load products. Try again later.</p>`;
    }
  });
