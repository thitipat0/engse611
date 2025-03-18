
const thumbnails = document.querySelectorAll('.thumb');


function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;
}


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        changeImage(thumb.src);
    });
});
