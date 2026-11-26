// Native links and disclosures work without JavaScript; this adds navigation feedback.
(() => {
    const nav = document.querySelector('.section-nav');
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const sections = links.map(link => document.querySelector(link.hash));
    let scheduled = false;

    function updateCurrentSection() {
        scheduled = false;
        const threshold = nav.getBoundingClientRect().bottom + 32;
        let current = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= threshold) current = section;
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            current = sections[sections.length - 1];
        }
        for (const link of links) {
            if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        }
    }

    function scheduleUpdate() {
        if (!scheduled) {
            scheduled = true;
            requestAnimationFrame(updateCurrentSection);
        }
    }

    function expandLinkedGroup() {
        const target = document.getElementById(location.hash.slice(1));
        if (target instanceof HTMLDetailsElement) target.open = true;
        scheduleUpdate();
    }

    document.querySelectorAll('[data-expand]').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById(link.dataset.expand).open = true;
        });
    });
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    // Wrapped navigation needs a matching anchor offset on narrow screens.
    function updateNavOffset() {
        const offset = Math.ceil(nav.getBoundingClientRect().height) + 24;
        document.documentElement.style.setProperty('--nav-offset', `${offset}px`);
        scheduleUpdate();
    }
    window.addEventListener('resize', updateNavOffset);
    if ('ResizeObserver' in window) new ResizeObserver(updateNavOffset).observe(nav);
    updateNavOffset();
    window.addEventListener('hashchange', expandLinkedGroup);
    document.querySelectorAll('details').forEach(group => group.addEventListener('toggle', scheduleUpdate));
    expandLinkedGroup();
})();
