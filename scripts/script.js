// Reference
const image = document.querySelector('#img')
// Load Image
const loadFile = function(event) {
	image.src = URL.createObjectURL(event.target.files[0]);
};

// FILTERS
// Grayscale
const gray = document.querySelector('#gray');
const graySet = () => {
    image.style.webkitFilter = `grayscale(${gray.value}%)`;
}
// Saturate
const saturate = document.querySelector('#saturate');
const saturateSet = () => {
    image.style.webkitFilter = `saturate(${saturate.value}%)`;
}
// Sepia
const sepia = document.querySelector('#sepia');
const sepiaSet = () => {
    image.style.webkitFilter = `sepia(${sepia.value}%)`;
}
// Invert
const invert = document.querySelector('#invert');
const invertSet = () => {
    image.style.webkitFilter = `invert(${invert.value}%)`;
}
// Contrast
const contrast = document.querySelector('#contrast');
const contrastSet = () => {
    image.style.webkitFilter = `contrast(${contrast.value}%)`;
}
// Brightness
const bright = document.querySelector('#bright');
const brightSet = () => {
    image.style.webkitFilter = `brightness(${bright.value}%)`;
}
// Blur
const blur = document.querySelector('#blur');
const blurSet = () => {
    image.style.webkitFilter = `blur(${blur.value}px)`;
}
// Hue Rotation
const hueRot = document.querySelector('#hue-rot');
const hueRotSet = () => {
    image.style.webkitFilter = `hue-rotate(${hueRot.value}deg)`;
}