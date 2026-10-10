import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollReveal() {
  const elements = ref([]);
  
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.value.forEach(el => {
      if (el) {
        // Setup initial state if not already done in template
        if (!el.classList.contains('opacity-0')) {
          el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
        }
        observer.observe(el);
      }
    });
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  // Function to pass to ref=""
  const revealRef = (el) => {
    if (el && !elements.value.includes(el)) {
      elements.value.push(el);
    }
  };

  return {
    revealRef
  };
}
