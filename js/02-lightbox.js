import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const createItems = createNewItems(galleryItems)

gallery.insertAdjacentHTML('beforeend', createItems)
gallery.addEventListener('click',openGallaryItemClick)

function createNewItems(galleryItems){
    return galleryItems.map(({preview, original, 
    description}) =>
 {
return `<a class="gallery__item" href=${original}>
<img class="gallery__image" src=${preview} alt=${description} />
</a>`;
}).join('')
}

function openGallaryItemClick(evt){
 evt.preventDefault()
let openItemImg = evt.target.closest('a').getAttribute('href')
return openItemImg

}
let galleryOpen = new SimpleLightbox('.gallery a',{
captionSelector:'img',
captionsData:'alt',
captionPosition:'bottom',
captionDelay: 250,
scrollZoom:false 
});
gallery.on('show.simplelightbox', function () {	
});
galleryOpen.on('error.simplelightbox', function (e) {
	console.log(e); 
});


    

