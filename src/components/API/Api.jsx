const API_URL_PRODUCTS='https://api.escuelajs.co/api/v1/products';
const API_URL_CATEGORY='https://api.escuelajs.co/api/v1/categories'
export  async function getProducts() {
    try {
      const response = await fetch(API_URL_PRODUCTS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
}

  
export  async function getCategory() {
  try {
    const response = await fetch(API_URL_CATEGORY);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
