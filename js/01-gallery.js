import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')


const createItems = createNewItems(galleryItems)

gallery.insertAdjacentHTML('beforeend', createItems)
gallery.addEventListener('click',openGallaryItemClick)




function createNewItems(galleryItems){
    return galleryItems.map(({preview, original, 
    description}) =>
 {
return `<div class="gallery__item">
<a class="gallery__link" href= ${original}>
    <img
    class="gallery__image"
    src= ${preview}
    data-source= ${original}
    alt= ${description}
    />
</a>
</div>`;}).join('')
}

function openGallaryItemClick(evt){
    evt.preventDefault()
    
console.log(evt.target.nodeName)

const nodeName = evt.target.nodeName;
if(nodeName !== 'IMG'){
   return; 
}
const opneItemImg = evt.target.dataset.source
const instance = basicLightbox.create(`
<img src=${opneItemImg} width="800" height="600">
`)

instance.show()  

}



    
