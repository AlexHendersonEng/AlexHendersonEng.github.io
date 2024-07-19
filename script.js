document.addEventListener("DOMContentLoaded", (event) => {
    // Set dark theme as on when webpage loads
    localStorage.setItem('theme', 'dark');

    // Add event listener to toggle-theme button on click
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        // Get current theme
        const savedTheme = localStorage.getItem('theme')

        // Set theme colours
        if (savedTheme === 'dark') {
            // Change body element background colour and colour properties
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            
            // Change theme toggle button colour
            document.getElementById('theme-icon').style.color = '#000000';

            // Change all paragraph text colours
            const pTags = document.getElementsByTagName('p')
            for (let i = 0; i < pTags.length; i++) {
                pTags[i].style.color = '#000000';
            }

            // Save theme
            localStorage.setItem('theme', 'light');
        } else {
            // Change body element background colour and colour properties
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';

            // Change theme toggle button colour
            document.getElementById('theme-icon').style.color = '#ffffff';

            // Change all paragraph text colours
            const pTags = document.getElementsByTagName('p')
            for (let i = 0; i < pTags.length; i++) {
                pTags[i].style.color = '#ffffff';
            }

            // Save theme
            localStorage.setItem('theme', 'dark');
        }
    })
});