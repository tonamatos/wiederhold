/* ========== Project Data ========== */
/* To add a project: append an object to this array. The page rebuilds automatically. */

var projects = [
  {
    title: 'QuantGPT',
    tagline: 'Agentic AI for post-quantum risk assessment',
    description:
      'Multi-agent RAG pipeline with knowledge-graph reasoning, built from scratch using LLM APIs in partnership with a major Canadian bank. Automated risk-analysis, saving 200+ analyst-hours. Presented to 250+ bank employees including senior executives.',
    tags: ['Python', 'LLMs', 'Knowledge Graphs', 'RAG', 'Statistical Inference'],
    link: null,
    featured: true,
  },
  {
    title: 'Merton Jump Diffusion',
    tagline: 'ML-calibrated options pricing',
    description:
      'Extended Black-Scholes with Poisson jumps to capture sudden market moves. Calibrated model parameters on historical price data using L-BFGS optimization and compared hedging strategies across multiple assets.',
    tags: ['Python', 'Quantitative Finance', 'Optimization', 'ML'],
    link: 'https://quant.wiederhold.dev/',
  },
  {
    title: 'BorderTracer',
    tagline: 'Published in Theoretical Computer Science (2026)',
    description:
      'New border-tracing algorithm that generalizes classical pixel-grid techniques to arbitrary polygonal tilings in abstract adjacency graphs.',
    tags: ['Algorithms', 'Graph Theory', 'Image Processing'],
    link: 'https://bordertracer.research.wiederhold.dev',
  },
  {
    title: 'NeuroShannon',
    tagline: 'GNNs for channel capacity estimation',
    description:
      'Used graph neural networks to optimize a noisy communication channel and estimate its Shannon capacity.',
    tags: ['GNNs', 'PyTorch', 'Information Theory', 'Optimization'],
    link: 'https://github.com/tonamatos/neuro-shannon',
  },
  {
    title: 'FerGroup',
    tagline: 'Graph automorphism framework',
    description:
      'Object-oriented framework for algebraic graph algorithms integrated with an optimally indexed SQL database for large-scale inference on graph isomorphism classes.',
    tags: ['Python', 'SQL', 'Graph Theory'],
    link: 'https://fergroup.research.wiederhold.dev',
    minor: true,
  },
];

/* ========== Experience Data ========== */

var experiences = [
  {
    org: 'BMO Financial Group',
    role: 'Incoming AI Engineer',
    date: 'Starting Oct 2026',
    points: [
      'Joining the Decision Science team to build and scale production machine learning systems.',
    ],
  },
  {
    org: 'Fields Institute for Research in Mathematical Sciences',
    role: 'Visiting Scholar / ML Research Engineer',
    date: 'May 2025 – Mar 2026',
    points: [
      'Developed QuantGPT: an agentic AI framework for risk assessment with a major Canadian bank.',
    ],
  },
  {
    org: 'University of Toronto',
    role: 'Course Coordinator / Instructor',
    date: '2023 – 2026',
    points: [
      'Led teams of up to 12 TAs while managing logistics for 400+ students; achieved some of the highest course evaluations for instructors in the department.',
      'Helped 30+ TAs improve their teaching techniques and resolve team dynamics as a Mentor TA.',
      'Founded an educational project addressing a curriculum gap, securing departmental funding for its pedagogical impact, leading to promotion to Course Coordinator.',
    ],
    award: 'Ida Bulat Graduate Teaching Award (2025)',
  },
];

/* ========== Leadership Data ========== */

var leadership = [
  {
    role: 'Vice-President',
    org: 'Mathematics Graduate Student Association',
    date: '2022 – 2023',
    description:
      'Helped double the association’s budget for the first time in a decade; organized student support events for 200+ participants.',
  },
  {
    role: 'Research Mentor',
    org: 'U of T Outreach',
    date: '2022 – 2025',
    description:
      'Supervised graduate and undergraduate research accepted to a national conference.',
  },
  {
    role: 'Treasurer',
    org: 'Mathematics Graduate Student Association',
    date: '2021 – 2022',
    description:
      'Led transition to a digital finance system managing $10,000+ in funds.',
  },
];

/* ========== Education Data ========== */

var education = [
  {
    degree: 'PhD in Mathematics',
    org: 'University of Toronto',
    date: '2021–2026',
    awards: [
      'Quantitative Information Security Specialist (2025)',
      'Blyth Fellowship (2025)',
      'International Graduate Student Scholarship (2024)',
      'Communication Excellence Award, Bird’s Eye Conference (2024)',
      'Vivekananda Academic Excellence Award (2023)',
      'Selected Participant, Heidelberg Laureate Forum (2023)',
      'Most Understandable Scientist Award (2023)',
    ],
  },
  {
    degree: 'M.Sc. in Mathematical Sciences',
    org: 'UNAM',
    date: '2020',
    meta: 'GPA: 4.0/4.0;',
    awards: [
      'Stimulus Award for Accelerated Completion of MSc Degree (2021)',
      'Honorary Mention, XXXVI Coloquio Víctor Neumann-Lara (2020)',
      'Budapest Semesters in Mathematics, selected participant (2020)',
    ],
  },
  {
    degree: 'B.Sc. in Mathematics, with Honours',
    org: 'UNAM',
    date: '2015–2019',
    meta: 'GPA: 4.0/4.0;',
    awards: ['High-Performance Graduate Qualification Scholarship (2019)'],
  },
];

/* ========== Publications Data ========== */

var publications = [
  {
    category: 'Published',
    items: [
      {
        authors: 'Eslava, L., Hansberg, A., Matos-Wiederhold, T., Ventura, D.',
        title: 'New recursive constructions of amoebas and their balancing number',
        venue: 'Aequationes Mathematicae, 2025',
      },
      {
        authors: 'Matos-Wiederhold, T., Salvetti, L.',
        title: 'Uncountable sets and an infinite linear order game',
        venue: 'Topology Proceedings, 2025',
      },
      {
        authors: 'Wiederhold, P., Matos-Wiederhold, T.',
        title:
          'Border tracing in oriented adjacency graphs of polygonal tilings with application to objects made of rectangular, triangular or hexagonal tiles',
        venue: 'Theoretical Computer Science, 2025',
      },
      {
        authors:
          'Caro, Y., González, I., Hansberg, A., Jácome, M., Matos-Wiederhold, T., Montejano, A.',
        title: 'Graphs with constant balancing number',
        venue: 'Procedia Computer Science, 2023',
      },
      {
        authors: 'Matos-Wiederhold, T.',
        title: 'An alternative to back-and-forth',
        venue: 'Topología y sus Aplicaciones, 2020',
      },
    ],
  },
  {
    category: 'Preprints',
    items: [
      {
        authors:
          'Dueñez, E., Iovino, J., Matos-Wiederhold, T., Salvetti, L., Tall, F.',
        title:
          'Complexity of deep computations via topology of function spaces',
        venue: '2026',
      },
      {
        authors: 'Matos-Wiederhold, T.',
        title: 'Infinitary amoebas',
        venue: '2026',
      },
      {
        authors: 'Matos-Wiederhold, T.',
        title:
          'No countable basis for Borel digraphs of dichromatic number at least three',
        venue: '2026',
      },
      {
        authors: 'Matos-Wiederhold, T.',
        title: 'A concise proof of the L₀ dichotomy',
        venue: '2026',
      },
      {
        authors: 'Gómez, S., González, I., Hansberg, A., Matos-Wiederhold, T.',
        title: 'Amoeba trees',
        venue: '2026',
      },
    ],
  },
  {
    category: 'Dissertations',
    items: [
      {
        authors: 'Matos-Wiederhold, T.',
        title: 'On Complexity, Computation, and Graph Homomorphisms',
        venue:
          'PhD thesis, University of Toronto, 2026. Advisors: Spencer Unger and Franklin D. Tall',
      },
      {
        authors: 'Matos-Wiederhold, T.',
        title: 'The Open Coloring Axiom',
        venue: 'MSc thesis, UNAM, 2021. Advisor: Roberto Pichardo',
      },
      {
        authors: 'Matos-Wiederhold, T.',
        title:
          'Applications of the Rasiowa-Sikorski lemma to the theory of partial orders and to Ramsey theory',
        venue: 'BSc thesis, UNAM, 2019. Advisor: Roberto Pichardo',
      },
    ],
  },
];

/* ========== Render Functions ========== */

function renderProjects() {
  var grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.innerHTML = projects
    .map(function (p) {
      var cls = 'project-card';
      if (p.featured) cls += ' featured';
      if (p.minor) cls += ' minor';

      var tagsHtml = p.tags
        .map(function (t) {
          return '<span class="card-tag">' + t + '</span>';
        })
        .join('');

      var linksHtml = '';
      if (p.link) {
        linksHtml =
          '<div class="card-links"><a href="' +
          p.link +
          '" target="_blank" rel="noopener" class="card-link">View Project <span class="arrow">→</span></a></div>';
      }

      return (
        '<article class="' + cls + '">' +
        '<h3 class="card-title">' + p.title + '</h3>' +
        '<p class="card-tagline">' + p.tagline + '</p>' +
        '<p class="card-description">' + p.description + '</p>' +
        '<div class="card-tags">' + tagsHtml + '</div>' +
        linksHtml +
        '</article>'
      );
    })
    .join('');
}

function renderExperience() {
  var list = document.getElementById('experience-list');
  if (!list) return;

  list.innerHTML = experiences
    .map(function (e) {
      var points = e.points
        .map(function (pt) {
          return '<li>' + pt + '</li>';
        })
        .join('');

      var awardHtml = '';
      if (e.award) {
        awardHtml = '<div class="exp-award">' + e.award + '</div>';
      }

      return (
        '<div class="exp-item">' +
        '<div class="exp-meta">' +
        '<div class="exp-org">' + e.org + '</div>' +
        '<div class="exp-date">' + e.date + '</div>' +
        '</div>' +
        '<div class="exp-body">' +
        '<h3>' + e.role + '</h3>' +
        '<ul>' + points + '</ul>' +
        awardHtml +
        '</div>' +
        '</div>'
      );
    })
    .join('');
}

function renderLeadership() {
  var list = document.getElementById('leadership-list');
  if (!list) return;

  list.innerHTML = leadership
    .map(function (l) {
      return (
        '<div class="leadership-item">' +
        '<div>' +
        '<div class="leadership-role">' + l.role + ', ' + l.org + '</div>' +
        '<div class="leadership-date">' + l.date + '</div>' +
        '</div>' +
        '<div>' + l.description + '</div>' +
        '</div>'
      );
    })
    .join('');
}

function renderEducation() {
  var list = document.getElementById('education-list');
  if (!list) return;

  list.innerHTML = education
    .map(function (e) {
      var metaHtml = e.meta ? '<span class="edu-meta">' + e.meta + '</span>' : '';

      var awardsHtml = '';
      if (e.awards && e.awards.length) {
        var items = e.awards
          .map(function (a) {
            return '<li>' + a + '</li>';
          })
          .join('');
        awardsHtml = '<ul class="edu-awards">' + items + '</ul>';
      }

      return (
        '<div class="edu-item">' +
        '<div class="edu-header">' +
        '<h3 class="edu-degree">' + e.degree + ', ' + e.org + '</h3>' +
        '<div class="edu-date">' + metaHtml + '  ' + e.date + '</div>' +
        '</div>' +
        awardsHtml +
        '</div>'
      );
    })
    .join('');
}

function renderPublications() {
  var container = document.getElementById('pub-list');
  if (!container) return;

  container.innerHTML = publications
    .map(function (cat) {
      var items = cat.items
        .map(function (p) {
          var linkHtml = p.link
            ? ' <a href="' + p.link + '" target="_blank" rel="noopener" class="pub-link">→</a>'
            : '';

          return (
            '<li class="pub-item">' +
            '<div class="pub-authors">' + p.authors + '</div>' +
            '<div class="pub-title">' + p.title + linkHtml + '</div>' +
            '<div class="pub-venue">' + p.venue + '</div>' +
            '</li>'
          );
        })
        .join('');

      return (
        '<div class="pub-category">' +
        '<h3 class="pub-category-heading">' + cat.category + '</h3>' +
        '<ul class="pub-list">' + items + '</ul>' +
        '</div>'
      );
    })
    .join('');
}

/* ========== Navigation ========== */

function initNav() {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }
}

/* ========== Init ========== */

document.addEventListener('DOMContentLoaded', function () {
  renderProjects();
  renderExperience();
  renderLeadership();
  renderEducation();
  renderPublications();
  initNav();
});
