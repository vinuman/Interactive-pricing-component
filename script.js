

const slider = document.querySelector('#sliderRange');
const pageView = document.querySelector('.page-view');
const price = document.querySelector('.price');
const month = document.querySelector('.month');
const checkBox = document.querySelector('input[type="checkbox"]');
let checkButton = false;

checkBox.addEventListener('change', ()=>{
    let value = slider.value;
    
   if(checkBox.checked && value>=8 && value <12){
    checkButton = true;
    price.innerHTML = "$4.00 <span class='month'>/month</span>";
   } else if(!checkBox.checked && value>=8 && value <12){
    checkButton = false;
    price.innerHTML = "$8.00 <span class='month'>/month</span>";
   } else if(checkBox.checked && value>=12 && value <16){
    checkButton = true;
    price.innerHTML = "$6.00 <span class='month'>/month</span>";
   } else if(!checkBox.checked && value>=12 && value <16){
    checkButton = false;
    price.innerHTML = "$12.00 <span class='month'>/month</span>";
   } else if(checkBox.checked && value>=16 && value <24){
    checkButton = true;
    price.innerHTML = "$8.00 <span class='month'>/month</span>";
   } else if(!checkBox.checked && value>=16 && value <24){
    checkButton = false;
    price.innerHTML = "$16.00 <span class='month'>/month</span>";
   } else if(checkBox.checked && value>=24 && value <36){
    price.innerHTML = "$12.00 <span class='month'>/month</span>";
   } else if(!checkBox.checked && value>=24 && value <36){
    price.innerHTML = "$24.00 <span class='month'>/month</span>";
   } else if(checkBox.checked && value==36){
    checkButton = true;
    price.innerHTML = "$18.00 <span class='month'>/month</span>";
   } else if(!checkBox.checked && value==36){
    checkButton = false;
    price.innerHTML = "$36.00 <span class='month'>/month</span>";
   }
})


slider.addEventListener('input', (event)=>{
    const value = event.target.value;
    console.log(value);
    const percent = (value - slider.min) / (slider.max - slider.min);
    const bg = `linear-gradient(to right, #10D8C4 0%, #10D8C4 ${percent*100}%, #ECF0FB ${percent*100}%, #ECF0FB 100%)`;
    slider.style.background = bg;


    if(value==8){
        pageView.textContent = '10K pageviews';
        price.innerHTML = "$8.00 <span class='month'>/month</span>";
        if(checkButton==true){
            price.innerHTML = "$4.00 <span class='month'>/month</span>";
        }
    } else if(value==12){
        pageView.textContent = '50K pageviews';
        price.innerHTML = "$12.00 <span class='month'>/month</span>";
        if(checkButton==true){
            price.innerHTML = "$6.00 <span class='month'>/month</span>";
        }
    } else if(value==16){
        pageView.textContent = '100K pageviews';
        price.innerHTML = "$16.00 <span class='month'>/month</span>";
        if(checkButton==true){
            price.innerHTML = "$8.00 <span class='month'>/month</span>";
        }
    } else if(value==24){
        pageView.textContent = '500k pageviews';
        price.innerHTML = "$24.00 <span class='month'>/month</span>";
        if(checkButton==true){
            price.innerHTML = "$12.00 <span class='month'>/month</span>";
        }
    } else if(value==36){
        pageView.textContent = '1M pageviews';
        price.innerHTML = "$36.00 <span class='month'>/month</span>";
        if(checkButton==true){
            price.innerHTML = "$18.00 <span class='month'>/month</span>";
        }
    }
})
