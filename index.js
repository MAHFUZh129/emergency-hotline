
// incresing heart-count
const favCount1= document.getElementById('fav-count');
let favCount =0;

const favIcons= document.querySelectorAll('.fav-icon');
favIcons.forEach(icon =>{
  icon.addEventListener('click', function(e) {
    e.preventDefault();
    favCount++;
    favCount1.innerText = favCount;
  });
});

