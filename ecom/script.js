const products = [
    { id: 1, name: 'Product A', price: 10.99, image: 'product-a.jpg' },
    { id: 2, name: 'Product B', price: 19.99, image: 'product-b.jpg' },
    // Add more products here
  ];
  
  const productContainer = document.getElementById('products');
  const cartItems = document.getElementById('cart-items');
  const sortSelect = document.getElementById('sort-select');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  let cart = [];
  
  function renderProducts() {
    productContainer.innerHTML = '';
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(productDiv);
    });
  }
  
  function renderCart() {
    cartItems.textContent = cart.length;
  }
  
  function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
      cart.push(product);
      renderCart();
    }
  }
  
  sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    if (sortBy === 'priceLowToHigh') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
      products.sort((a, b) => b.price - a.price);
    }
    renderProducts();
  });
  
  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      alert('Thank you for your purchase!');
      cart = [];
      renderCart();
    } else {
      alert('Your cart is empty.');
    }
  });
  
  renderProducts();
  renderCart();
  