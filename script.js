// Initialize AOS animations
AOS.init({
  duration: 700,
  once: true,
});

// Year in footer(s)
const years = [ 'year', 'year2', 'year3', 'year4' ];
years.forEach(id => {
  const el = document.getElementById(id);
  if(el) el.textContent = new Date().getFullYear();
});

// Highlight active nav link (based on filename)
(function activateNav(){
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if(href === path) link.classList.add('active');
  });
})();

// Contact form front-end handling (no backend)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if(!name || !email || !message){
      showAlert('Please fill in all fields.', 'danger');
      return;
    }
    // Simulate success
    showAlert('Thanks! Your message has been received. We will contact you shortly.', 'success');
    contactForm.reset();
  });
}

function showAlert(message, type='success'){
  const placeholder = document.getElementById('alertPlaceholder');
  if(!placeholder) return;
  placeholder.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;
  // auto dismiss after 6s
  setTimeout(()=> {
    const bsAlert = bootstrap.Alert.getOrCreateInstance(placeholder.querySelector('.alert'));
    try { bsAlert.close(); } catch(e){ }
  }, 6000);
}
