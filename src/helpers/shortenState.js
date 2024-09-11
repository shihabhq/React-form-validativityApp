const shortenStateToValue = (servedObj) => {
    return Object.keys(servedObj).reduce((acc, cur) => {
      acc[cur] = servedObj[cur].value;
  
      return acc;
    }, {});
  };

  export default shortenStateToValue