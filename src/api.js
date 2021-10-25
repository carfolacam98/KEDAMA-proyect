const callApi = async (url, reqOptions) => {
  if (url === "/products/all") {
    var response = await fetch("https://minticappbackdivide.herokuapp.com/api" + url);
  } else {
    response = await fetch("https://minticappbackdivide.herokuapp.com/api" + url, reqOptions);
  }
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products/all");
    },
    create(reqOptions) {
      
      return callApi("/products/", reqOptions);
    },
    update(id, reqOptions) {
      return callApi("/products/" + id, reqOptions);
    },
    delete(id) {
      return callApi("/products/"+ id,{
        method:'DELETE',
      });
    },
  },
};

export default api;
