
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
// Coins and call history
let coins= 100;
const coin1 = document.getElementById('coin-count');
const callHistory1= document.getElementById('call-history');

const callButtons =document.querySelectorAll('.call-btn');

   callButtons.forEach(button => {
  button.addEventListener('click',function() {
    
    const card= button.parentElement.previousElementSibling; 
    if (!card) return;

    const serviceName = card.querySelector('.service-name').innerText;
    const serviceNumber = card.querySelector('.service-number').innerText;

    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }   
    
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    coins -= 20;
    coin1.innerText = coins;

    // Add to call history
    const div = document.createElement('div');
    div.className = "px-2 bg-gray-100 text-[#5C5C5C] rounded-md";
    div.innerHTML = `
      <div class="py-[4px]">
        <div>
          <h1 class="font-bold text-black">${serviceName}</h1>
          <p class="mt-2 text-sm">${serviceNumber}</p>
        </div>
      </div>
    `;
    callHistory1.appendChild(div);
  });
});

// clear call history 
const clearBtn = document.getElementById('clear-history');
clearBtn.addEventListener('click', () => {
  callHistory1.innerHTML = '';
});

