
  // Get the dropdown element
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const li=document.querySelector("#primer");

// Add a click event listener to the dropdown button
dropdown.addEventListener('click', function() {
    if (dropdownContent.style.display === 'block') {
        // If the dropdown is open, close it
        dropdownContent.style.display = 'none';
    } else {
        // If the dropdown is closed, open it
        dropdownContent.style.display = 'block';
    }
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});
