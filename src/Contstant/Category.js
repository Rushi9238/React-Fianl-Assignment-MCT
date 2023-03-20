export async function Category(setCategory){
    const api=await fetch ("https://fakestoreapi.com/products/categories")
    const resp=await api.json()
    setCategory(resp)
  }