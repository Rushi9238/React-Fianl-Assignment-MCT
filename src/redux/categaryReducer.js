export const categaryCartData = (data = [], action) => {
    // console.log('catagaryData',action)
    switch (action.type) {
      case "catagaryData":{
        return action.data;

      }

      default:
        return data;
    }
  };