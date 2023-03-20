export async function categoryHandler(setProductlist,categoryName) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    const data = await res.json();
    setProductlist(data);
   
  }