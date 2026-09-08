document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       REVEAL ANIMATIONS
    ====================================================== */

    const revealItems =
        document.querySelectorAll(
            ".section-heading, " +
            ".glass-card, " +
            ".mini-card, " +
            ".solution-card, " +
            ".achievement-card, " +
            ".investor-panel, " +
            ".news-card, " +
            ".contact-details > *"
        );


    revealItems.forEach(
        item => item.classList.add("reveal")
    );


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
                threshold: .12
            }
        );


    revealItems.forEach(
        item => observer.observe(item)
    );


    /* =====================================================
       STAGGER SOLUTION CARDS
    ====================================================== */

    document.querySelectorAll(
        ".solution-grid"
    ).forEach(grid => {

        const cards =
            grid.querySelectorAll(
                ".solution-card"
            );

        cards.forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 80}ms`;

            }
        );

    });


    /* =====================================================
       STAGGER ACHIEVEMENTS
    ====================================================== */

    document.querySelectorAll(
        ".achievement-grid"
    ).forEach(grid => {

        const cards =
            grid.querySelectorAll(
                ".achievement-card"
            );

        cards.forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 90}ms`;

            }
        );

    });


    /* =====================================================
       HERO PARALLAX
    ====================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );

    const orbitSystem =
        document.querySelector(
            ".orbit-system"
        );


    if (
        heroVisual &&
        orbitSystem &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "pointermove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    (event.clientX -
                    rect.left) /
                    rect.width -
                    .5;

                const y =
                    (event.clientY -
                    rect.top) /
                    rect.height -
                    .5;


                orbitSystem.style.transform =
                    `translate(${x * 12}px, ${y * 12}px)`;

            }
        );


        heroVisual.addEventListener(
            "pointerleave",
            () => {

                orbitSystem.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       SOLUTION CARD TILT
    ====================================================== */

    const tiltCards =
        document.querySelectorAll(
            ".solution-card, .achievement-card"
        );


    if (
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        tiltCards.forEach(card => {

            card.addEventListener(
                "pointermove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        (event.clientX -
                        rect.left) /
                        rect.width;

                    const y =
                        (event.clientY -
                        rect.top) /
                        rect.height;

                    const rotateX =
                        (0.5 - y) * 4;

                    const rotateY =
                        (x - 0.5) * 4;


                    card.style.transform =
                        `perspective(800px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-6px)`;

                }
            );


            card.addEventListener(
                "pointerleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }


    /* =====================================================
       NETWORK CORE EFFECT
    ====================================================== */

    const networkCore =
        document.querySelector(
            ".network-core"
        );

    const networkNodes =
        document.querySelectorAll(
            ".network-node"
        );


    networkNodes.forEach(node => {

        node.addEventListener(
            "mouseenter",
            () => {

                if (!networkCore) return;

                networkCore.style.boxShadow =
                    "0 0 70px rgba(110,231,255,.28)";

                networkCore.style.transform =
                    "scale(1.05)";

            }
        );


        node.addEventListener(
            "mouseleave",
            () => {

                if (!networkCore) return;

                networkCore.style.boxShadow =
                    "";

                networkCore.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       ACTIVE SECTION TRACKING
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const observerOptions = {
        rootMargin:
            "-35% 0px -55% 0px",
        threshold: 0
    };


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const id =
                            entry.target.id;


                        document.querySelectorAll(
                            '.desktop-nav a[href^="#"]'
                        ).forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`
                            );

                        });

                    }
                );

            },
            observerOptions
        );


    sections.forEach(
        section =>
            sectionObserver.observe(section)
    );


    /* =====================================================
       INVESTOR ORBIT PARALLAX
    ====================================================== */

    const investorVisual =
        document.querySelector(
            ".investor-visual"
        );


    if (
        investorVisual &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        investorVisual.addEventListener(
            "pointermove",
            event => {

                const rect =
                    investorVisual.getBoundingClientRect();

                const x =
                    (event.clientX -
                    rect.left) /
                    rect.width -
                    .5;

                const y =
                    (event.clientY -
                    rect.top) /
                    rect.height -
                    .5;


                investorVisual
                    .querySelectorAll(
                        ".investor-circle"
                    )
                    .forEach(
                        (circle, index) => {

                            const multiplier =
                                (index + 1) * 7;

                            circle.style.transform =
                                `translate(
                                    ${x * multiplier}px,
                                    ${y * multiplier}px
                                )`;

                        }
                    );

            }
        );


        investorVisual.addEventListener(
            "pointerleave",
            () => {

                investorVisual
                    .querySelectorAll(
                        ".investor-circle"
                    )
                    .forEach(
                        circle => {

                            circle.style.transform =
                                "";

                        }
                    );

            }
        );

    }


    /* =====================================================
       BUTTON HOVER LIGHT
    ====================================================== */

    document.querySelectorAll(
        ".button"
    ).forEach(button => {

        button.addEventListener(
            "pointerenter",
            () => {

                button.style.setProperty(
                    "--button-glow",
                    "1"
                );

            }
        );


        button.addEventListener(
            "pointerleave",
            () => {

                button.style.setProperty(
                    "--button-glow",
                    "0"
                );

            }
        );

    });


});
