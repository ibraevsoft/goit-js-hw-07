import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createImage(item) {
  const { preview, original, description } = item;
  galleryEl.insertAdjacentHTML(
    "afterbegin",
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source= "${original}"
        alt="${description}"
      />
    </a>
  </div>`
  );
}

galleryItems.map(createImage);

function clickHandle(event) {
  event.preventDefault();

  const imgLink = event.target.dataset.source;

  if (imgLink !== undefined) {
    const originalImgHTML = `
    <img src="${imgLink}" width="100%" height="100%">
  `;
    const instance = basicLightbox.create(originalImgHTML, {
      onShow: () => {
        window.addEventListener("keydown", closeByEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeByEsc);
      },
    });

    instance.show();

    function closeByEsc(event) {
      if (event.code === "Escape") {
        instance.close();
      }
      window.removeEventListener("keydown", closeByEsc);
    }
  }
}

galleryEl.addEventListener("click", clickHandle);

console.log(galleryItems);
