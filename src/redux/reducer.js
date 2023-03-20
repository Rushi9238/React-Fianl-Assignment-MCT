export const productcartData = (data = [], action) => {
    switch (action.type) {
      case "productData":
        return action.data;
      
      
      default:
        return data;
    }
  };