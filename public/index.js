const bars = document.querySelector('#bars')
const menu = document.querySelector('#menu')

bars.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }else {
        menu.classList.add('hidden');
    }
})


  // create a function to update the date and time
  function updateDateTime() {
    // create a new `Date` object
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',  hour12: false  };
    const formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById('formattedDate').textContent = formattedDate;
    
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);

