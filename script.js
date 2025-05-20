
document.addEventListener('DOMContentLoaded', function() {
    // --- Smooth Scrolling for Table of Contents ---
    const tocLinks = document.querySelectorAll('.table-of-contents a[href^="#"]');

    tocLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element, offset by a bit for fixed/sticky headers (if any)
                // We don't have a fixed header here, but padding-top can act as an offset
                 const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - 30; // Subtract desired offset (e.g., 30px)

                 window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                 });
            }
        });
    });

    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeKey = 'darkMode'; // Key for localStorage

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem(darkModeKey, 'enabled');
        darkModeToggle.textContent = 'Toggle Light Mode'; // Change button text
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem(darkModeKey, 'disabled');
        darkModeToggle.textContent = 'Toggle Dark Mode'; // Change button text
    }

    // Check localStorage for saved preference on page load
    const savedMode = localStorage.getItem(darkModeKey);
    if (savedMode === 'enabled') {
        enableDarkMode(); // Apply dark mode if saved preference is 'enabled'
    } else {
        disableDarkMode(); // Apply light mode (default) or explicit disabled
    }

    // Add event listener to the toggle button
    darkModeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode(); // If dark mode is currently active, disable it
        } else {
            enableDarkMode(); // If dark mode is not active, enable it
        }
    });

    // Optional: Add active state to TOC links (Uncomment if desired)
    // This is more complex as it needs to track scroll position vs section position.
    // The previous simple smooth scroll is usually sufficient.
});

