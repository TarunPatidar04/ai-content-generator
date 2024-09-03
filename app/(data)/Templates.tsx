export default [
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
          label: "Enter your blog niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter blog outline",
          field: "textarea",
          name: "outline",
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
          label: "Enter your content theme",
          field: "input",
          name: "theme",
          required: true,
        },
        {
          label: "Enter relevant hashtags",
          field: "textarea",
          name: "hashtags",
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
          label: "Enter webpage content",
          field: "textarea",
          name: "content",
          required: true,
        },
        {
          label: "Enter target keywords",
          field: "input",
          name: "keywords",
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
          label: "Enter product name",
          field: "input",
          name: "productName",
          required: true,
        },
        {
          label: "Enter product details",
          field: "textarea",
          name: "productDetails",
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
          label: "Enter email content",
          field: "textarea",
          name: "emailContent",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "input",
          name: "audience",
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
          label: "Enter landing page content",
          field: "textarea",
          name: "pageContent",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "input",
          name: "audience",
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
          label: "Enter job title",
          field: "input",
          name: "jobTitle",
          required: true,
        },
        {
          label: "Enter experience details",
          field: "textarea",
          name: "experienceDetails",
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
          label: "Enter video content",
          field: "textarea",
          name: "videoContent",
          required: true,
        },
        {
          label: "Enter target keywords",
          field: "input",
          name: "keywords",
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
          label: "Enter newsletter topic",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter audience details",
          field: "textarea",
          name: "audienceDetails",
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
          label: "Enter product or service details",
          field: "textarea",
          name: "details",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "input",
          name: "audience",
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
          label: "Enter book theme",
          field: "input",
          name: "theme",
          required: true,
        },
        {
          label: "Enter book genre",
          field: "input",
          name: "genre",
        },
        {
          label: "Enter book outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
  ];
  