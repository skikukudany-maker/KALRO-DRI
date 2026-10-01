/* =====================================
   GET ELEMENTS
===================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");

const siteHeader =
    document.getElementById("siteHeader");

const searchButton =
    document.getElementById("searchButton");

const searchModal =
    document.getElementById("searchModal");

const searchClose =
    document.getElementById("searchClose");

const searchInput =
    document.getElementById("searchInput");

const searchForm =
    document.getElementById("searchForm");

const searchMessage =
    document.getElementById("searchMessage");

const backTop =
    document.getElementById("backTop");



/* =====================================
   MOBILE MENU
===================================== */

menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);



/* CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
===================================== */

document
    .querySelectorAll(".main-nav > a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });



/* =====================================
   MOBILE DROPDOWN
===================================== */

document
    .querySelectorAll(
        ".nav-dropdown > button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth <= 820
                ) {

                    button
                        .parentElement
                        .classList
                        .toggle("open");

                }

            }
        );

    });



/* =====================================
   STICKY HEADER
===================================== */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 20
        ) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );

        }


        /* BACK TO TOP */

        if (
            window.scrollY > 500
        ) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);



/* =====================================
   BACK TO TOP
===================================== */

backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================
   SEARCH MODAL
===================================== */

function openSearch() {

    searchModal.classList.add(
        "open"
    );

    searchModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    setTimeout(
        () => {

            searchInput.focus();

        },
        100
    );

}



function closeSearch() {

    searchModal.classList.remove(
        "open"
    );

    searchModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}



searchButton.addEventListener(
    "click",
    openSearch
);


searchClose.addEventListener(
    "click",
    closeSearch
);



/* CLOSE SEARCH
   WHEN CLICKING OUTSIDE
===================================== */

searchModal.addEventListener(
    "click",
    event => {

        if (
            event.target === searchModal
        ) {

            closeSearch();

        }

    }
);



/* ESC KEY */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeSearch();

        }

    }
);



/* =====================================
   SEARCH FORM
===================================== */

searchForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const query =
            searchInput.value.trim();


        if (!query) {

            searchMessage.textContent =
                "Please enter a search term.";

            return;

        }


        searchMessage.textContent =
            `Search submitted for “${query}”.`;

    }
);



/* =====================================
   SCROLL ANIMATIONS
===================================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );



document
    .querySelectorAll(".reveal")
    .forEach(
        element => {

            observer.observe(
                element
            );

        }
    );