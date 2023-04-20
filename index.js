const products = [
  {
    name: 'Laptop',
    category: 'electronics',
    description: 'A powerful laptop with 16GB RAM and 512GB SSD',
    price: 1200
  },
  {
    name: 'Book',
    category: 'books',
    description: 'An interesting book about programming',
    price: 25
  },
  {
  name: 'T-Shirt',
  category: 'clothing',
  description: 'A comfortable and stylish t-shirt',
  price: 20
  },
];


const categoriesList = document.querySelector('.categories ul');
const productsList = document.querySelector('.products ul');
const productInfo = document.querySelector('#product-detail');
const buyButton = document.querySelector('#buy-button');
buyButton.style.display = "none";
const purchaseStatus = document.querySelector('#purchase-status');

function displayProducts(category) {
  productsList.innerHTML = '';
  products.filter(item => item.category === category).forEach(item => {
    const li = document.createElement('li');
    const product = document.createElement('product');
    product.textContent = item.name;
    li.appendChild(product);
    productsList.appendChild(li);
      
    product.addEventListener('click', () => {
      productInfo.innerHTML = 
      `<p>${item.name}</p>
      <p>${item.description}</p>
      <p>Price: $${item.price}</p>`;
      buyButton.style.display = "block";
    });
  });
}
  
categoriesList.addEventListener('click', event => {
  const category = event.target.dataset.category;
  if (category) {
    displayProducts(category);
  };
});
  
buyButton.addEventListener('click', () => {
  purchaseStatus.textContent = alert `Sorry, the item has been purchased!`;
});