document.addEventListener("DOMContentLoaded", function() {
  let skillBars = document.querySelectorAll(".progress-bar");
  
  let revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let percentage = entry.target.getAttribute("data-percentage");
        entry.target.style.width = `${percentage}%`;
        observer.unobserve(entry.target);
      }
    });
  };

  let options = {
    threshold: 0.50 // At least 80% of the skill bar should be visible
  };

  let observer = new IntersectionObserver(revealOnScroll, options);
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
});

