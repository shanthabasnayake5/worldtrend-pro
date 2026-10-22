
export type ArticleSource = {
  title: string;
  url: string;
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  content: string[];
  sources: ArticleSource[];
};

export const articles: Article[] = [
  {
    slug: "future-of-technology-changing-faster-than-ever",
    category: "Technology",
    title: "The Future of Technology Is Changing Faster Than Ever",
    excerpt:
      "Discover the latest technology trends, innovations, and ideas shaping the world.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 28, 2026",
    readingTime: "5 min read",
    image: "/articles/technology.jpg",
    imageAlt: "Modern technology and digital innovation",
    content: [
      "Technology is evolving across many areas, including artificial intelligence, cybersecurity, cloud computing and digital communication. These developments influence how people work, learn, run businesses and access information. Understanding what these technologies can do, as well as their limitations, helps readers make more informed decisions.",
      "Artificial intelligence is increasingly used for tasks such as summarizing information, translating languages, assisting with software development and supporting customer service. AI tools can save time, but their outputs may contain mistakes or outdated information. Important claims should therefore be checked against reliable sources, especially when making financial, medical or other significant decisions.",
      "Cybersecurity is another important part of modern digital life. Individuals and organizations face risks such as phishing messages, stolen passwords, fraudulent websites and data breaches. Using unique passwords, enabling multi-factor authentication, installing software updates and checking website addresses can help reduce common security risks.",
      "Cloud computing allows people and businesses to use online services for storing files, running applications and collaborating remotely. It can make digital tools easier to access, but users should also understand privacy settings, account security, service costs and how their information is stored.",
      "Digital technology is also changing education, communication and business operations. Online learning platforms can provide access to educational material, while digital collaboration tools help teams work across different locations. However, access to reliable internet, digital skills, accessibility and protection of personal information remain important considerations.",
      "When evaluating a new technology, readers should look beyond promotional claims. Useful questions include what problem the technology solves, how reliable it is, what it costs, what information it collects and what limitations it has. Independent testing, official documentation and reputable research can help people assess these questions more carefully.",
      "Technology will continue to develop, but not every new product or trend will be useful for everyone. Staying informed, learning digital skills and protecting personal information can help individuals and organizations adapt. WorldTrend Pro aims to explain technology developments in clear language so readers can better understand their potential benefits, risks and real-world uses.",
    ],
    sources: [
      {
        title: "NIST — Information Technology",
        url: "https://www.nist.gov/information-technology",
      },
      {
        title: "NIST — Cybersecurity, Privacy, and AI",
        url: "https://www.nist.gov/itl/applied-cybersecurity/cybersecurity-privacy-and-ai",
      },
    ],
  },
  {
    slug: "artificial-intelligence-transforming-everyday-life",
    category: "AI",
    title: "Artificial Intelligence Is Transforming Everyday Life",
    excerpt:
      "Explore how AI is changing work, creativity, business, and the way people live.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 28, 2026",
    readingTime: "5 min read",
    image: "/articles/artificial-intelligence.jpg",
    imageAlt: "Artificial intelligence technology and digital innovation",
    content: [
      "Artificial intelligence is becoming an increasingly important part of modern life.",
      "AI tools are being used for communication, research, creativity, business and many everyday tasks.",
      "The rapid development of AI is creating new opportunities while also raising important questions about privacy, employment and responsible technology.",
      "Understanding how AI works and how it is being used can help people make better decisions in an increasingly digital world.",
    ],
    sources: [
      {
        title: "NIST — AI Risk Management Framework",
        url: "https://airc.nist.gov/airmf-resources/",
      },
      {
        title: "OECD — AI Principles",
        url: "https://www.oecd.org/en/topics/ai-principles.html",
      },
    ],
  },
  {
    slug: "global-business-trends-to-watch",
    category: "Business",
    title: "Global Business Trends to Watch",
    excerpt:
      "A look at important business developments and emerging opportunities around the world.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 28, 2026",
    readingTime: "4 min read",
    image: "/articles/global-business.jpg",
    imageAlt: "Global business trends and modern business environment",
    content: [
      "Businesses around the world are adapting to changing markets, technologies and consumer expectations.",
      "Digital transformation, artificial intelligence and new business models are influencing how companies operate.",
      "Entrepreneurs and businesses that understand these changes may be better prepared to identify emerging opportunities.",
      "WorldTrend Pro follows major business trends and explains developments that may matter to businesses and consumers.",
    ],
    sources: [
      {
        title: "World Bank — Small and Medium Enterprises (SMEs)",
        url: "https://www.worldbank.org/en/topic/smefinance",
      },
      {
        title: "OECD — Digital Economy",
        url: "https://www.oecd.org/en/topics/digital.html",
      },
    ],
  },
  {
    slug: "global-finance-trends-to-watch",
    category: "Finance",
    title: "Global Finance Trends to Watch",
    excerpt:
      "Explore the major financial trends, markets, and economic developments shaping the global economy.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 31, 2026",
    readingTime: "5 min read",
    image: "/articles/global-finance.jpg",
    imageAlt: "Global finance and financial markets",
    content: [
      "Financial markets around the world are constantly influenced by economic conditions, technology, interest rates and changing consumer behavior.",
      "Digital payments, financial technology and artificial intelligence are transforming the way people manage money and businesses operate.",
      "Investors and consumers are paying close attention to inflation, interest rates, currencies and global economic developments.",
      "Understanding major financial trends can help people make more informed decisions about money and the changing global economy.",
    ],
    sources: [
      {
        title: "IMF — World Economic Outlook",
        url: "https://www.imf.org/en/Publications/WEO",
      },
      {
        title: "IMF — Publications",
        url: "https://www.imf.org/en/Publications",
      },
    ],
  },
  {
    slug: "health-trends-shaping-modern-life",
    category: "Health",
    title: "Health Trends Shaping Modern Life",
    excerpt:
      "Discover important health and wellness trends that are influencing everyday life around the world.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 31, 2026",
    readingTime: "5 min read",
    image: "/articles/health.jpg",
    imageAlt: "Modern health and wellness",
    content: [
      "Health and wellness have become increasingly important as people look for better ways to support their everyday lives.",
      "Technology is playing a growing role in healthcare through digital health tools, wearable devices and online services.",
      "People are also paying greater attention to healthy lifestyles, nutrition, physical activity and preventive care.",
      "WorldTrend Pro follows important health developments and presents useful information in a clear and accessible way.",
    ],
    sources: [
      {
        title: "WHO — Health Topics",
        url: "https://www.who.int/health-topics",
      },
      {
        title: "WHO — Physical Activity",
        url: "https://www.who.int/health-topics/physical-activity",
      },
    ],
  },
  {
    slug: "science-discoveries-changing-our-world",
    category: "Science",
    title: "Science Discoveries Changing Our World",
    excerpt:
      "Explore fascinating scientific discoveries and developments that could shape the future.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 31, 2026",
    readingTime: "5 min read",
    image: "/articles/science.jpg",
    imageAlt: "Scientific research and discovery",
    content: [
      "Scientific research continues to expand our understanding of the universe, Earth and life itself.",
      "Researchers are making progress in areas including space exploration, medicine, energy, climate science and advanced materials.",
      "Many scientific discoveries can eventually lead to new technologies and solutions to important global challenges.",
      "WorldTrend Pro follows major scientific developments and explains why they matter to people around the world.",
    ],
    sources: [
      {
        title: "NASA — Science",
        url: "https://science.nasa.gov/",
      },
      {
        title: "NASA — Earth Science",
        url: "https://science.nasa.gov/earth/",
      },
    ],
  },
  {
    slug: "travel-trends-changing-how-we-explore",
    category: "Travel",
    title: "Travel Trends Changing How We Explore the World",
    excerpt:
      "Discover the latest travel trends, destinations and changing ways people experience the world.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 31, 2026",
    readingTime: "4 min read",
    image: "/articles/travel.jpg",
    imageAlt: "Travel and exploring destinations around the world",
    content: [
      "Travel continues to evolve as people discover new destinations and look for different ways to experience the world.",
      "Technology has made planning trips easier through online booking, digital maps, travel apps and instant access to information.",
      "Travelers are also showing growing interest in unique experiences, nature, culture and responsible tourism.",
      "WorldTrend Pro follows global travel trends and highlights developments that can inspire future journeys.",
    ],
    sources: [
      {
        title: "UN Tourism — About the Organization",
        url: "https://www.untourism.int/who-we-are",
      },
      {
        title: "United Nations — Sustainable Tourism",
        url: "https://sdgs.un.org/topics/sustainable-tourism",
      },
    ],
  },
  {
    slug: "lifestyle-trends-shaping-everyday-life",
    category: "Lifestyle",
    title: "Lifestyle Trends Shaping Everyday Life",
    excerpt:
      "Explore changing lifestyle habits, ideas and trends influencing people around the world.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 31, 2026",
    readingTime: "4 min read",
    image: "/articles/lifestyle.jpg",
    imageAlt: "Modern lifestyle and everyday living",
    content: [
      "Lifestyle trends are constantly changing as people adapt to new technologies, social habits and ways of working.",
      "Remote work, digital services, personal wellness and new forms of entertainment are influencing everyday routines.",
      "People are also exploring simpler living, new hobbies and different ways to balance work and personal life.",
      "WorldTrend Pro follows interesting lifestyle trends and explores how they are changing modern society.",
    ],
    sources: [
      {
        title: "WHO — Physical Activity",
        url: "https://www.who.int/health-topics/physical-activity",
      },
      {
        title: "OECD — Better Life Index",
        url: "https://www.oecdbetterlifeindex.org/",
      },
    ],
  },
  {
    slug: "entertainment-trends-taking-over-the-world",
    category: "Entertainment",
    title: "Entertainment Trends Taking Over the World",
    excerpt:
      "Discover the latest trends in movies, music, gaming, streaming and digital entertainment.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 31, 2026",
    readingTime: "4 min read",
    image: "/articles/entertainment.jpg",
    imageAlt: "Modern entertainment and digital media",
    content: [
      "Entertainment is changing rapidly as digital platforms give audiences more choices than ever before.",
      "Streaming services, online video, gaming and social media are transforming how people discover and enjoy content.",
      "Artificial intelligence and new digital technologies are also creating new possibilities for creators and audiences.",
      "WorldTrend Pro follows major entertainment trends and highlights developments attracting attention around the world.",
    ],
    sources: [
      {
        title: "UNESCO — Culture",
        url: "https://www.unesco.org/en/culture",
      },
      {
        title: "OECD — Digital Economy",
        url: "https://www.oecd.org/en/topics/digital.html",
      },
    ],
  },
  {
    slug: "global-sports-trends-to-watch",
    category: "Sports",
    title: "Global Sports Trends to Watch",
    excerpt:
      "Explore major developments, trends and stories shaping the world of sports.",
    author: "WorldTrend Pro Editorial Team",
    publishedAt: "August 31, 2026",
    readingTime: "4 min read",
    image: "/articles/sports.jpg",
    imageAlt: "Global sports and athletes",
    content: [
      "Sports continue to connect millions of people around the world through competition, entertainment and shared experiences.",
      "Technology is changing sports through advanced analytics, wearable devices, instant replay systems and digital fan experiences.",
      "Major sporting events also have a significant impact on communities, businesses and international audiences.",
      "WorldTrend Pro follows important sports developments and brings interesting stories and trends to readers around the world.",
    ],
    sources: [
      {
        title: "International Olympic Committee",
        url: "https://olympics.com/ioc",
      },
      {
        title: "WHO — Physical Activity",
        url: "https://www.who.int/health-topics/physical-activity",
      },
    ],
  },
];

export function getArticleBySlug(
  slug: string
): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
