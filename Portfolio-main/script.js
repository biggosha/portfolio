function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbygBjLR21YCI9wVZ60Cr6JGUcBYQVljBmz2R1NqL3E0PZ_0pS5QA50QjRke0I9aM6_8/exec'
            const form = document.forms['submit-to-google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
            })
            s
           

