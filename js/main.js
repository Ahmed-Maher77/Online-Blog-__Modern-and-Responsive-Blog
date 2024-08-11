// Initialize Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Navbar
const toggler = document.querySelector('.nav-user .toggler');
const togglerIcon = toggler.querySelector('.bx');
const navList = document.querySelector('.nav-user .main-list');
const navLinks = document.querySelectorAll('.nav-user ul a');
const overlay = document.querySelector('.overlay')
// Toggle navbar on button click
toggler.onclick = () => {
    toggler.classList.toggle('active');
    togglerIcon.classList.toggle('bx-x');
    navList.classList.toggle('active');
	overlay.classList.add('active');
}
// Close navbar with Escape key
document.onkeyup = function(e) {
    if (e.key == "Escape" && navList.classList.contains('active')) {
        navList.classList.remove('active');
        toggler.classList.remove('active');
        togglerIcon.classList.remove('bx-x');
    }
}
// Handle link clicks
navLinks.forEach(link => {
    link.onclick = () => {
		// Update active state for links
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
		// Close the navbar if it's open
		if (navList.classList.contains('active')) {
			navList.classList.remove('active');
			toggler.classList.remove('active');
			overlay.classList.remove('active');
			togglerIcon.classList.remove('bx-x');
		}
    }
})