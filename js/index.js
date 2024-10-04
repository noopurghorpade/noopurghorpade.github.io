onload = function () {
    let loader = document.getElementById('loader');

    // Show the loader initially
    loader.style.transform = 'translateY(0)'; // Slide into view from the top

    // Hide the loader after the loading is done
    setTimeout(function () {
        loader.style.transform = 'translateY(-100%)'; // Slide back up out of view
        setTimeout(function () {
            loader.style.display = 'none';  // Remove loader from view
        }, 1000); // Wait until slide-up transition completes
    }, 3000); // Keep the loader visible for 2 seconds


    let toggleSidebar = document.querySelector("#toggleSidebar");
    let sidebar = document.querySelector("#sidebar");
    let closeSidebar = document.querySelector("#closeSidebar");
    let themeToggles = document.querySelectorAll(".themeToggle");
    let body = document.body;
    let cursor = document.querySelector(".cursor");
    let navBar = document.querySelector(".navbar");
    let navBar2 = document.querySelector(".nav2");
    let backToTopButton = document.querySelector("#backToTop");
    let text = document.querySelector(".second-text");




    // ... rest of your code


    // Toggle sidebar visibility
    toggleSidebar?.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Close sidebar when clicking the close button
    closeSidebar?.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !toggleSidebar.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Cursor movement
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Show the button when scrolling down 100px from the top
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Scroll back to the top smoothly when the button is clicked
    backToTopButton?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // let textLoad = ()=>{
    //     setTimeout(()=>{
    //         text.textContent ="COLLABORATE";
    //     },0)
    //     setTimeout(()=>{
    //         text.textContent ="GRAB A COFFEE";
    //     },2000)
    //     setTimeout(()=>{
    //         text.textContent ="TALK DESIGN";
    //     },4000)
    // }

    // textLoad();
    // setInterval(textLoad, 6000);

    // Word functionality
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    // Ensure words exist
    if (words.length > 0) {
        words[currentWord].style.opacity = 1;
        for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }

        function changeWord() {
            var cw = wordArray[currentWord];
            var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
            for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }
    
            for (var i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }
    
            currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
        }
    
        function animateLetterOut(cw, i) {
            setTimeout(function () {
                cw[i].className = 'letter out';
            }, i * 20);
        }
    
        function animateLetterIn(nw, i) {
            setTimeout(function () {
                nw[i].className = 'letter in';
            }, 340 + (i * 20));
        }

        function splitLetters(word) {
            var content = word.innerHTML; // Get the content of the word
            word.innerHTML = ''; // Clear the existing content
            var letters = [];

            // Use a regular expression to split content into an array, while retaining &nbsp;
            var splitContent = content.split(/(&nbsp;| )/); // Split by spaces and &nbsp;

            splitContent.forEach((char) => {
                var letter = document.createElement('span');
                letter.className = 'letter';

                if (char === '&nbsp;') {
                    // For &nbsp; create a visual space
                    letter.style.display = 'inline-block'; // Make it behave like a letter
                    letter.style.width = '10px'; // Adjust width for spacing (as needed)
                } else if (char === ' ') {
                    // For regular spaces, also create a visual space
                    letter.style.display = 'inline-block';
                    letter.style.width = '10px'; // Adjust width for spacing (as needed)
                } else {
                    letter.innerHTML = char; // Regular character
                }

                word.appendChild(letter); // Append the letter span to the word
                letters.push(letter); // Store the letter span in the letters array
            });

            wordArray.push(letters); // Store the letters array for future animations
        }


        changeWord();
        setInterval(changeWord, 2000);
    }

    setTimeout(function () { // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('slow');
    }, 3500);

    const circleBtn = document.getElementById('contact-btn');

    circleBtn.addEventListener('mousemove', (e) => {
        const rect = circleBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - circleBtn.offsetWidth / 2;
        const y = e.clientY - rect.top - circleBtn.offsetHeight / 2;

        circleBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    circleBtn.addEventListener('mouseleave', () => {
        circleBtn.style.transform = 'translate(0, 0)';
    });



}




