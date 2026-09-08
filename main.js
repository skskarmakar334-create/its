document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("header");

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileClose =
        document.getElementById("mobileClose");

    const backTop =
        document.getElementById("backTop");


    /* =====================================================
       HEADER
    ====================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    function openMenu() {

        mobileMenu?.classList.add("active");

        document.body.classList.add("menu-open");

        menuButton?.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function closeMenu() {

        mobileMenu?.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuButton?.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    menuButton?.addEventListener(
        "click",
        openMenu
    );

    mobileClose?.addEventListener(
        "click",
        closeMenu
    );


    document.querySelectorAll(
        ".mobile-menu a"
    ).forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    function updateBackTop() {

        if (!backTop) return;

        if (window.scrollY > 600) {
            backTop.classList.add("show");
        } else {
            backTop.classList.remove("show");
        }

    }

    updateBackTop();

    window.addEventListener(
        "scroll",
        updateBackTop,
        { passive: true }
    );


    backTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ====================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                const headerHeight =
                    header?.offsetHeight || 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    15;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =====================================================
       CURSOR GLOW
    ====================================================== */

    const cursorGlow =
        document.getElementById("cursorGlow");

    if (cursorGlow &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches) {

        window.addEventListener(
            "pointermove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

            },
            { passive: true }
        );

    }


    /* =====================================================
       EXTERNAL LINKS
    ====================================================== */

    document.querySelectorAll(
        'a[target="_blank"]'
    ).forEach(link => {

        const rel =
            link.getAttribute("rel") || "";

        if (!rel.includes("noopener")) {

            link.setAttribute(
                "rel",
                `${rel} noopener noreferrer`.trim()
            );

        }

    });


    /* =====================================================
       RESIZE CLEANUP
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 850) {
                closeMenu();
            }

        }
    );

});
