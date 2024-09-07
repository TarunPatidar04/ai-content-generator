const Templates = [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3433/3433033.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points based on the given niche & outline topic, and provide the result in Rich text editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter prompt for your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Post Generator",
    desc: "AI-powered tool for creating engaging social media posts based on your input.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1946/1946488.png",
    aiPrompt:
      "Generate 3 social media post ideas in a concise format based on the provided content and hashtags.",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Enter prompt for your content theme",
        field: "input",
        name: "hashtags",
        required: true,
      },
    ],
  },
  {
    name: "SEO Meta Description Generator",
    desc: "Create SEO-optimized meta descriptions based on your webpage content.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/891/891488.png",
    aiPrompt:
      "Generate a 160-character meta description based on the given webpage content and target keywords.",
    slug: "generate-seo-meta-description",
    form: [
      {
        label: "Enter prompt for webpage content",
        field: "input",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "Create compelling product descriptions for your e-commerce platform.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3179/3179068.png",
    aiPrompt:
      "Generate a product description in 3 sentences, highlighting key features and benefits, based on the given product name and details.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter prompt for product details",
        field: "input",
        name: "productName",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "Generate catchy and effective email subject lines.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt:
      "Create 5 catchy email subject lines based on the provided email content and audience.",
    slug: "generate-email-subject-line",
    form: [
      {
        label: "Enter prompt for email content",
        field: "input",
        name: "emailContent",
        required: true,
      },
    ],
  },
  {
    name: "Landing Page Headline Generator",
    desc: "Generate attention-grabbing headlines for your landing page.",
    category: "Landing Page",
    icon: "https://cdn-icons-png.flaticon.com/128/646/646094.png",
    aiPrompt:
      "Generate 3 impactful headlines for a landing page based on the provided page content and target audience.",
    slug: "generate-landing-page-headline",
    form: [
      {
        label: "Enter prompt for landing page content",
        field: "input",
        name: "pageContent",
        required: true,
      },
    ],
  },
  {
    name: "Resume Bullet Point Generator",
    desc: "Generate strong bullet points for your resume based on your experience.",
    category: "Resume",
    icon: "https://cdn-icons-png.flaticon.com/128/1250/1250527.png",
    aiPrompt:
      "Create 3 strong bullet points for a resume based on the provided job title and experience details.",
    slug: "generate-resume-bullet-points",
    form: [
      {
        label: "Enter prompt for job title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Title Generator",
    desc: "Generate engaging and SEO-friendly video titles for YouTube.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate 3 catchy YouTube video titles based on the provided video content and target keywords.",
    slug: "generate-youtube-video-title",
    form: [
      {
        label: "Enter prompt for video content",
        field: "input",
        name: "videoContent",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Content Generator",
    desc: "Create compelling content for your newsletters based on your topic.",
    category: "Newsletter",
    icon: "https://cdn-icons-png.flaticon.com/128/725/725643.png",
    aiPrompt:
      "Generate 2 newsletter content ideas based on the provided topic and audience details.",
    slug: "generate-newsletter-content",
    form: [
      {
        label: "Enter prompt for newsletter topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Ad Copy Generator",
    desc: "Generate persuasive ad copy for your marketing campaigns.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3050/3050238.png",
    aiPrompt:
      "Generate 3 persuasive ad copy ideas based on the provided product or service details and target audience.",
    slug: "generate-ad-copy",
    form: [
      {
        label: "Enter  prompt for product or service details",
        field: "input",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Book Title Generator",
    desc: "Generate compelling book titles based on your book's theme and genre.",
    category: "Books",
    icon: "https://cdn-icons-png.flaticon.com/128/2462/2462719.png",
    aiPrompt:
      "Generate 3 book title ideas based on the provided book theme, genre, and outline.",
    slug: "generate-book-title",
    form: [
      {
        label: "Enter prompt for book theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
];

export default Templates;
