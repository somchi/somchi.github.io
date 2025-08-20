export const Skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "PostgreSQL", level: 82 },
  { name: "Supabase", level: 90 },
  { name: "TailwindCSS", level: 95 },
  { name: "Prisma", level: 80 }
];

export const RecentProjects = [
  {
    title: "Buzthrive - Inventory Management",
    description: "Inventory and sales management tool for SMEs with stock-level alerts, raw material-to-finished product matching, and multiple units of measurement support.",
    longDescription: "Comprehensive inventory and sales management application for small and medium enterprises. Features advanced inventory workflows, data dashboards, and complete business management capabilities.",
    tags: ["React", "Next.js", "TypeScript", "Supabase", "TailwindCSS", "Chart.js", "NestJS", "Prisma"],
    github: "https://github.com/somchi/buzthrive",
    demo: "https://buzthrive.com",
    image: "/api/placeholder/400/240",
    status: "Live",
    year: "2022-Present",
    features: [
      "Real-time inventory tracking with low-stock alerts",
      "Raw material to finished product matching",
      "Multiple units of measurement per product",
      "Sales tracking and reporting modules",
      "Authentication and user management",
      "Comprehensive data dashboards"
    ],
    challenges: [
      "Designing complex inventory workflows for SMEs",
      "Building scalable architecture for multi-tenant use",
      "Implementing real-time stock level monitoring"
    ],
    stats: { stars: 89, forks: 23, commits: 298 }
  },
  {
    title: "Measure4 - Marketing Analytics",
    description: "Multi-channel marketing analytics dashboard centralizing ad performance data from various marketing channels with advanced data visualizations.",
    longDescription: "Comprehensive marketing analytics platform that centralizes multi-channel ad performance data. Built with modern React ecosystem and featuring advanced D3.js visualizations for campaign insights.",
    tags: ["React", "Next.js", "TypeScript", "NestJS", "Prisma", "Supabase", "D3.js", "Vercel"],
    github: "https://github.com/somchi/measure4",
    demo: "https://measure4.demo.com",
    image: "/api/placeholder/400/240",
    status: "Live",
    year: "2021-2023",
    features: [
      "Multi-channel marketing data integration",
      "Advanced D3.js and Chart.js visualizations",
      "Campaign performance analytics",
      "Component libraries built with Storybook",
      "Comprehensive testing with Cypress",
      "Real-time data synchronization"
    ],
    challenges: [
      "Integrating data from multiple marketing platforms",
      "Building complex data visualizations with D3.js",
      "Optimizing performance for large datasets"
    ],
    stats: { stars: 156, forks: 34, commits: 445 }
  },
  {
    title: "JustDabao - Food E-commerce",
    description: "E-commerce food platform connecting vendors with surplus food buyers. Features secure payment processing, media uploads, and responsive design.",
    longDescription: "Full-featured e-commerce platform for surplus food marketplace. Led frontend development ensuring pixel-perfect UI, integrated payment systems, and implemented SEO best practices for optimal performance.",
    tags: ["React", "TypeScript", "Redux", "Next.js", "TailwindCSS", "Stripe", "AWS S3", "Sentry"],
    github: "https://github.com/somchi/justdabao",
    demo: "https://justdabao.com",
    image: "/api/placeholder/400/240",
    status: "Live",
    year: "2021",
    features: [
      "E-commerce platform for food vendors",
      "Secure payment processing with Stripe",
      "AWS S3 integration for media uploads",
      "Responsive, pixel-perfect UI components",
      "SEO optimization and performance tuning",
      "Error monitoring with Sentry integration"
    ],
    challenges: [
      "Building secure payment flows for food marketplace",
      "Implementing efficient media upload system",
      "Optimizing performance for mobile users"
    ],
    stats: { stars: 124, forks: 28, commits: 267 }
  }
];

export const OlderProjects = [
  {
    title: "Weather App",
    description: "Clean weather application with location-based forecasts and beautiful UI animations.",
    tags: ["React", "Weather API", "Chart.js"],
    github: "https://github.com/username/weather-app",
    year: "2023"
  },
  {
    title: "Recipe Finder",
    description: "Food recipe discovery app with ingredient-based search and meal planning features.",
    tags: ["Vue.js", "Spoonacular API", "Vuex"],
    github: "https://github.com/username/recipe-finder",
    year: "2022"
  },
  {
    title: "Personal Finance Tracker",
    description: "Budget tracking application with expense categorization and financial insights.",
    tags: ["React", "Chart.js", "LocalStorage"],
    github: "https://github.com/username/finance-tracker",
    year: "2022"
  },
  {
    title: "Movie Database",
    description: "Movie discovery platform with ratings, reviews, and watchlist functionality.",
    tags: ["JavaScript", "TMDB API", "CSS3"],
    github: "https://github.com/username/movie-db",
    year: "2021"
  }
];