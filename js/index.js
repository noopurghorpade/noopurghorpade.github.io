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
    let text = this.document.querySelector(".second-text");


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

    let textLoad = ()=>{
        setTimeout(()=>{
            text.textContent ="COLLABORATE";
        },0)
        setTimeout(()=>{
            text.textContent ="GRAB A COFFEE";
        },2000)
        setTimeout(()=>{
            text.textContent ="TALK DESIGN";
        },4000)
    }

    textLoad();
    setInterval(textLoad, 6000);

}
