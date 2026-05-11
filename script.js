// ANIMACJE SCROLL
document.addEventListener("DOMContentLoaded", function () 
{
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => 
        {
        entries.forEach(entry => 
            {
            if (entry.isIntersecting) 
                {
                entry.target.classList.add("active");
            }
        });
    }, 
    {
        threshold: 0.2
    });
    reveals.forEach(reveal => 
        {
        observer.observe(reveal);
    });

});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => 
    {
    anchor.addEventListener("click", function (e) 
    {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target)
            {
            target.scrollIntoView(
                {
                behavior: "smooth"
            });
        }
    });
});


// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver((entries) => 
    {
    entries.forEach(entry => 
        {
        if(entry.isIntersecting)
            {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let current = 0;
            const increment = target / 150;
            const updateCounter = () => 
                {
                current += increment;
                if(current < target)
                    {
                    counter.innerText = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else 
                    {
                    counter.innerText = target + "+";
                }
            };
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, 
{
    threshold: 1
});
counters.forEach(counter => 
    {
    counterObserver.observe(counter);
});