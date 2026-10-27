// v-reveal: fades/slides an element in once it scrolls into view.
// Uses the existing .reveal / .is-visible rules in Stylesheet_Portfolio.css.
const observer =
  typeof IntersectionObserver === "undefined"
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

export default {
  mounted(el, binding) {
    el.classList.add("reveal");
    if (binding.value?.delay) el.style.transitionDelay = `${binding.value.delay}ms`;
    if (observer) observer.observe(el);
    else el.classList.add("is-visible");
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
