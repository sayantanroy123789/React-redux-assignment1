
// var initialData={
//     name:"Sayan",
// }

// const basicReducer=(storedata,action)=>{
// return storedata;
// }
// export default basicReducer;
var initialData = {
    name: "sayan",
  };
  const basicReducer = (storedata = initialData, action) => {
    if (action.type === "name") {
      return {
        name: action.username,
      };
    }
    return storedata;
  };
  
  export default basicReducer;