
        // Helper function to create a color input and handle its change event
        function changeColorForBlock(buttonId, blockClass) {
            const button = document.getElementById(buttonId);
            const block = document.querySelector(blockClass);

            button.addEventListener('click', () => {
                // Create color input dynamically
                const colorInput = document.createElement('input');
                colorInput.type = 'color';
                colorInput.style.display = 'none';
                colorInput.style.position = 'absolute';
        colorInput.style.left = `100px`;
        colorInput.style.top = `100px`;
        colorInput.style.zIndex = '1000';
                document.body.appendChild(colorInput);

                // Simulate click on the color input
                colorInput.click();

                // Listen for color selection
                colorInput.addEventListener('input', (event) => {
                    block.style.background = event.target.value;
                    document.body.removeChild(colorInput);
                });
            });
        }

        // Function to copy the top block color to the bottom block
        function setBottomColorToTop() {
            const topBlock = document.querySelector('.top');
            const bottomBlock = document.querySelector('.bottom');
            bottomBlock.style.background = topBlock.style.background;
        }

        // Function to update the middle block with the selected image
        function updateMiddleWithImage(event) {
            const imageSrc = event.target.getAttribute('data-src');
            const middleBlock = document.querySelector('.middle');
            middleBlock.innerHTML = `<img src="${imageSrc}" alt="Selected Image">`;
        }

        // Attach color pickers to buttons
        changeColorForBlock('btn-top', '.top');
        changeColorForBlock('btn-bottom', '.bottom');

        // Attach event for the 'Set Bottom Color to Top' button
        const btnSame = document.getElementById('btn-same');
        btnSame.addEventListener('click', setBottomColorToTop);

        // Attach click event to each image option
        const imageOptions = document.querySelectorAll('.image-option');
        imageOptions.forEach(img => img.addEventListener('click', updateMiddleWithImage));