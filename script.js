document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('.ksstn-title');
    if (title) {
        // Keep the shine effect for KSSTN text
        title.classList.add('ksstn-shine');
    }

    // Apply page opening blur + fade + slide animation
    const body = document.body;
    setTimeout(() => {
        body.style.opacity = "1";
        body.style.filter = "blur(0)";
        body.style.transform = "translateY(0)";
    }, 100);
});
