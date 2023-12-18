const fetchData = (callback) => {
   setTimeout(() => {
      callback("Hello World")
   }, 1000)
};

module.exports = fetchData;