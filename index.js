// PROMO ART
function promos() {
let promoGrid = document.getElementById('promo-grid-parent');

for (let i = 0; i < 45; i++) {
  let promoDiv = document.createElement('div');
  promoDiv.className = 'mySlides';
  promoGrid.appendChild(promoDiv);
}

const promoArt = document.querySelectorAll(".promo");
const promoArtArray = [
    "https://64.media.tumblr.com/3904e15c819c40d32a465649e8ef2095/52aa80ad97f2d7f9-1b/s1280x1920/18670daa86fbc7340360b61527414ceb9ebfbe07.png",
    "https://64.media.tumblr.com/b273b3a743672f242fd0b51baf396ac8/d04a8d0744a2879d-c9/s1280x1920/455dfbaf468a339b55b38d4d563890ae65f510a3.png",
    "https://64.media.tumblr.com/f8a9701fcd377bfedcbd6c80e5992f6b/245ed2372ec61522-8f/s1280x1920/5c44ebac340382c6203eaacb15bade5f933092c5.png",
    "https://64.media.tumblr.com/4619ab59925801d0ab46dbbc268af9b3/8c9eaa6b431ce89d-5d/s1280x1920/95b0bc168409a87a671ba2981db4d9e9172813e9.png",
    "https://64.media.tumblr.com/c95e624c4aebe13cb1849a4242b47985/82394d2315253cbf-78/s1280x1920/62678feacb902883053dc558da46ac54e1df2f40.png",
    "https://64.media.tumblr.com/4ea3ebb0143615292c0dd37902f3d76d/803354e298cb33fb-db/s1280x1920/056a78e1c14b30a57c4944d6d7e1dc81fa636250.png",
    "https://64.media.tumblr.com/dad04451ce108eb209abd884e5aaf7a7/9d1c8b0900cd9d4c-d3/s1280x1920/02b8d8fffdc9d89a09da1ac67fa42c05dc42685d.png",
    "https://64.media.tumblr.com/7b881c66c0b4ea3efd72439ac1410489/0cb5732ad1b8adec-b0/s1280x1920/8e984d7bd709b39fb58c07efb76e05cfd26576e3.png",
];

const promoArtistArray = [
    "Artist 1",
    "Artist 2",
    "Artist 3",
    "Artist 4",
    "Artist 5",
    "Artist 6",
    "Artist 7",
    "Artist 8",
];

promoArt.forEach((box, index) => {
  box.innerHTML = `<img src="` + promoArtArray[index] +`">` + `<br>` + promoArtistArray[index] ;
});
return;
}

// CONTRIBUTORS
function contributors() {
let contributorGrid = document.getElementById('contrib-grid-parent');

for (let i = 0; i < 25; i++) {
  let contributorDiv = document.createElement('div');
  contributorDiv.className = 'contrib';
  contributorGrid.appendChild(contributorDiv);
}

const contribName = document.querySelectorAll(".contrib");
const contribNameArray = [
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
    "icon",
];

const contribTypeArray = [
    "Artist",
    "Artist",
    "Artist",
    "Artist",
    "Artist",
    "Artist",
    "Artist",
    "Artist",
    "Writer",
    "Writer",
    "Writer",
    "Writer",
    "Writer",
    "Merch",
    "Merch",
    "Merch",
    "Merch",
    "Merch",
    "Merch",
    "Merch",
    "Mod",
    "Mod",
    "Mod",
    "Mod",
    "Mod",
];

const contribLinkArray = [
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
    `<a href="link">Twitter</a> | <a href="link">Tumblr</a> | <a href="link">Instagram</a>`,
];

contribName.forEach((box, index) => {
  box.innerHTML = `<img src="img/` + contribNameArray[index] +`.png">` + `<br><div class="contrib-name">` + contribNameArray[index] + `</div>` + contribTypeArray[index] + `<br><br><div class="contrib-link">` + contribLinkArray[index] + `</div>`;
});
return;
}