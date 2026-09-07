document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const demos = {
  synthesis: {
    title: 'agent learning synthesis',
    prompt: '“Things I have learned about AI agents”',
    image: 'https://raw.githubusercontent.com/krshirkoohi/tana-context-mask/main/assets/demo_agent_learning_synthesis.gif',
    video: 'https://raw.githubusercontent.com/krshirkoohi/tana-context-mask/main/assets/demo_agent_learning_synthesis.mp4',
    alt: 'Tana Semantic Engine retrieving and synthesising lessons about AI agents'
  },
  evidence: {
    title: 'evidence separation',
    prompt: '“Meals & Recipes Cooked vs Planned”',
    image: 'https://raw.githubusercontent.com/krshirkoohi/tana-context-mask/main/assets/demo_recipes_evidence_separation.gif',
    video: 'https://raw.githubusercontent.com/krshirkoohi/tana-context-mask/main/assets/demo_recipes_evidence_separation.mp4',
    alt: 'Tana Semantic Engine separating confirmed evidence from saved ideas'
  }
};

const demoImage = document.getElementById('demo-image');
const demoLink = document.getElementById('demo-link');
const demoTitle = document.getElementById('demo-title');
const demoPrompt = document.getElementById('demo-prompt');

document.querySelectorAll('.demo-switch').forEach(button => {
  button.addEventListener('click', () => {
    const demo = demos[button.dataset.demo];
    if (!demo || !demoImage || !demoLink || !demoTitle || !demoPrompt) return;

    demoImage.style.opacity = '0.25';
    window.setTimeout(() => {
      demoImage.src = demo.image;
      demoImage.alt = demo.alt;
      demoLink.href = demo.video;
      demoTitle.textContent = demo.title;
      demoPrompt.textContent = demo.prompt;
      demoImage.style.opacity = '1';
    }, 120);
  });
});
