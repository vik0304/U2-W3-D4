const endpoint = "https://api.pexels.com/v1/photos/";
const apiKey = "Ze73XnKYgoq4i1OuVUB0vQeS9Jk3VokCYT7P3TDgCfXp4Woi1bSTYHXS";

const parameters = new URLSearchParams(location.search);
const id = parameters.get("id");
const type = parameters.get("type");
console.log("type:", type);
console.log("type:", id);

const getCard = function () {
  fetch(endpoint + "/" + id, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nel recupero dati del singolo animale");
      }
    })
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => {
      console.log("errore", err);
    });
};
getCard();
