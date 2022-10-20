import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupEl = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<li><a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>
          `
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", markupEl);

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

console.log(galleryItems);
