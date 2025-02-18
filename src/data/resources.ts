import { StaticImageData } from 'next/image';

export interface ResourceMetadata {
  title: string;
  description: string;
  image: string | StaticImageData;
  url: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

export interface Resource {
  name: string;
  videos: ResourceMetadata[];
  blogs: ResourceMetadata[];
  courses: ResourceMetadata[];
  docs: ResourceMetadata[];
  notes: ResourceMetadata[];
}

const mediumImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Z49a65p0GqJWJRl2ja0J8jcDi-q7SjbGYQ&s';
const notionImage = 'https://www.notion.so/images/meta/notion-wordmark.png';

const webDevelopment: Resource = {
  name: 'web-development',
  videos: [
    {
      title: 'Complete HTML Tutorial',
      description: 'Learn the basics of HTML',
      image: '',
      url: 'https://youtu.be/qz0aGYrrlhU?si=ByN1wbJgzeYZeW-l',
      difficulty: 'EASY',
    },
  ],
  blogs: [
    {
      title: 'Sructure of an HTML Document',
      description: 'Understand the structure of an HTML document',
      image: mediumImage,
      url: 'https://medium.com/@rashmipatil24/mastering-html-essentials-beginners-guide-a3dff5743ae6',
      difficulty: 'EASY',
    },
  ],
  courses: [],
  docs: [
    {
      title: 'React Docs',
      description: 'The library for web and native user interfaces',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&s',
      url: 'https://react.dev/',
      difficulty: 'EASY',
    },
  ],
  notes: [
    {
      title: 'Basics of HTTP',
      description: 'Learn the basics of HTTP',
      image: notionImage,
      url: 'https://ethereal-creek-cd6.notion.site/Intro-to-HTTP-19d1294cb50780a78de4d59c33547e94',
      difficulty: 'EASY',
    },
  ],
};
const blockchain: Resource = {
  name: 'blockchain',
  videos: [],
  blogs: [],
  courses: [],
  docs: [],
  notes: [],
};
const dsa: Resource = {
  name: 'dsa',
  videos: [],
  blogs: [],
  courses: [],
  docs: [],
  notes: [],
};
const cyberSecurity: Resource = {
  name: 'cyber-security',
  videos: [],
  blogs: [],
  courses: [],
  docs: [],
  notes: [],
};
const dataScience: Resource = {
  name: 'data-science',
  videos: [],
  blogs: [],
  courses: [],
  docs: [],
  notes: [],
};

const devops: Resource = {
  name: 'devops',
  videos: [],
  blogs: [],
  courses: [],
  docs: [],
  notes: [],
};

export const resources: Resource[] = [
  webDevelopment,
  blockchain,
  dsa,
  cyberSecurity,
  dataScience,
  devops,
];
