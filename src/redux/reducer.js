export const productcartData = (data = [], action) => {
    switch (action.type) {
      case "productData":{
        return action.data;
      }
      // case "catagaryData":{
      //   ;
      //   return action.data;

      // }

      default:
        return data;
    }
  };