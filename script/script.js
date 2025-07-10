const apiKey = "Ze73XnKYgoq4i1OuVUB0vQeS9Jk3VokCYT7P3TDgCfXp4Woi1bSTYHXS";

const hideCards = function () {
  buttons = document.querySelectorAll(".hide");
  buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.target.closest(".wholeCard").style.display = "none";
    });
  });
};

hideCards();

const getHamsters = function () {
  fetch("https://api.pexels.com/v1/search?query=hamsters", {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("C'è stato un problema con l'importazione di foto");
      }
    })
    .then((obj) => {
      console.log(obj);
      const button = document.getElementById("hamsters");
      const cards = document.querySelectorAll(".card img");
      button.addEventListener("click", () => {
        cards.forEach((element, index) => {
          element.src = `${obj.photos[index].src.landscape}`;
          texts = document.querySelectorAll(".card-body .text-muted");
          texts.forEach((small, index) => {
            small.innerText = `${obj.photos[index].id}H`;
          });
        });
      });
    })
    .catch((err) => {
      console.error("Errore durante la fetch:", err);
    });
};

const getTigers = function () {
  fetch("https://api.pexels.com/v1/search?query=tigers", {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("C'è stato un problema con l'importazione di foto");
      }
    })
    .then((obj) => {
      console.log(obj);
      const button = document.getElementById("tigers");
      const cards = document.querySelectorAll(".card img");
      button.addEventListener("click", () => {
        cards.forEach((element, index) => {
          element.src = `${obj.photos[index].src.landscape}`;
          texts = document.querySelectorAll(".card-body .text-muted");
          texts.forEach((small, index) => {
            small.innerText = `${obj.photos[index].id}T`;
          });
        });
      });
    })
    .catch((err) => {
      console.error("Errore durante la fetch:", err);
    });
};

const viewDetails = function (e) {
  const card = e.target.closest(".d-flex");
  let partial = card.querySelector(".text-muted").innerText;
  id = partial.slice(0, -1);
  type = partial.slice(-1);
  location.assign("/details.html?id=" + id + "&type=" + type);
};

getHamsters();
getTigers();
