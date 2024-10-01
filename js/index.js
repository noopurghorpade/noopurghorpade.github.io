onload = function () {
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

    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

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
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function () {
            nw[i].className = 'letter in';
        }, 340 + (i * 80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);

    function splitLetters(word) {
        var content = word.textContent;  // Use textContent instead of innerHTML
        word.innerHTML = '';  // Clear the content
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            if (content.charAt(i) === '') {
                letter.innerHTML = '&nbsp;';  // Add non-breaking space
            } else {
                letter.innerHTML = content.charAt(i);
            }
            word.appendChild(letter);
            letters.push(letter);
        }
    
        wordArray.push(letters);
    }

}

$(window).on('load', function () {
    setTimeout(function () { // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('slow');
    }, 3500);
});
