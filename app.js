// 1a. Select the 1st button element and set it to a const variable called button1
const button1 = document.getElementById(`one`);
// 1b. Using the ONCLICK event property, have an alert that says "You clicked the first button! Congrats!" pop up when you click on the button
button1.onclick = function (){
    alert(`You clicked the first button! Congrats!`);
  };

// 2a. Select the h3 and set it to a const variable called h3
const h3 = document.querySelector(`h3`);

// 2b. Using addEventListener, have an alert that says "You hovered over the h3 element! Congrats!" pop up when you hover over the h3
h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`);
}, {once: true});    //Alert only once //

// 3a. Select the form element/tag and set it to a const variable called form
const form = document.querySelector(`form`);

// 3b. Using addEventListener, display the value in the text input with an alert when the submit input in the form is clicked.
form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value;
    alert(`${entry}`);
    alert(`The form has been submitted`);
});

// BONUS

// 4a. Select the Dark Mode button and set it to a const variable called darkMode
const darkMode = document.getElementById(`dm`);

// 4b. Using addEventListener, TOGGLE the "dark-mode" CSS class On/Off for EVERY element when the Dark Mode Button is clicked
const body = document.querySelector(`body`);

darkMode.addEventListener(`click`, () => {
    body.classList.toggle(`dark-mode`);
  });
 
  console.log(darkMode);


// 5a. Select the "CAN ONLY CLICK A CERTAIN NUMBER OF TIMES" button and set it to a const variable called times
const times = document.querySelector(`#times`);

// 5b. Using addEventListener, have an alert that says "You clicked the last button! Congrats!" pop up when you click on the button. However, have this setup so that when the button is clicked a third time have the following alert display instead of the "You clicked the last button! Congrats!" alert. New alert "OH NO! This button is NOT going to work anymore". And finally, when the button is clicked a fourth, fifth, sixth, etc. time have it do nothing (AKA Disable the button).
let nClicks = 0;
times.addEventListener(`click`, () =>{
    nClicks++;
    if (nClicks < 2){
        alert(`You clicked the last button! Congrats!`)
        nClicks++;
    } else if (nClicks === 3){
        alert(`Oh no! This button is going to work anymore`);
        nClicks++
    } else  {
        times.disabled = true;
    }
});




    