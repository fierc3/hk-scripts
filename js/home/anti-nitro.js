<script>
    setTimeout(() => {
        const element = document.querySelector("#nitro-preloader");
        const allElements = document.querySelectorAll('*');
        const elementsArray = Array.from(allElements);
        const index = elementsArray.indexOf(element);
        console.log("problemsome", element);

        if (index !== -1) {
            for (let i = 1; i <= 10; i++) {
                const nextElement = elementsArray[index + i];
                if (nextElement) {
                    const style = window.getComputedStyle(nextElement);
                    if (style && style.getPropertyValue('clear') === 'both') {
                        nextElement.style.display = 'none';
                        console.log("problemsome found shadow root");
                        break; // Stop after hiding the first element with a shadow root
                    }
                }
            }
        }else{
            console.log("prbolemsome: No nitro preloader found")
        }
    }, 3000);
    console.log("problemsome");
</script>