const expandValueToState = (servedObj) => {
    return Object.keys(servedObj).reduce((acc, cur) => {
      acc[cur] = {
        value: servedObj[cur],
        error: false,
      };
  
      return acc;
    }, {});
  };

  export default expandValueToState