// Portfolio Configuration
export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Shaan Saurav',
    title: 'Full Stack Developer | Problem Solver | CSE Student',
    tagline: 'Building scalable web applications and solving real-world problems with code.',
    location: 'Punjab, India',
    email: 'shaansaurav633@gmail.com',
    phone: '+91 6204566381',
  },
  social: {
    github: 'https://github.com/Shaan098',
    linkedin: 'https://linkedin.com/in/shaan-saurav',
    twitter: '#',
    portfolio: 'https://shaansaurav.dev',
  },
  about: {
    bio: 'B.Tech CSE student at Lovely Professional University, passionate about full-stack development and problem solving. Experience with React, Node.js, MongoDB, and cloud technologies.',
    interests: ['Full Stack Development', 'System Design', 'Cloud Technologies', 'Competitive Programming'],
  },
  skills: {
    languages: ['C++', 'JavaScript', 'C', 'PHP'],
    frontend: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'JWT'],
    tools: ['Git', 'VS Code', 'Thunder Client', 'Postman', 'AWS'],
    softSkills: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Communication'],
  },
  projects: [
    {
      id: 1,
      title: 'Online Multi-Language Compiler',
      description: 'A full-stack IDE allowing users to write, compile, and execute code in multiple languages.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: [
        'Multi-language execution (C, C++, Java, JavaScript)',
        'Secure code execution environment',
        'Real-time editor with syntax highlighting',
        'User authentication & code sharing',
      ],
      github: 'https://github.com/Shaan098/multi-language-compiler',
      live: 'https://compiler-client-9wha.vercel.app/',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'AR Educational Content Viewer',
      description: 'Interactive AR platform for visualizing educational content with 3D model integration.',
      tech: ['React', 'Node.js', 'MongoDB', '3D Models', 'AR'],
      features: [
        '3D model rendering and visualization',
        'AR placement technology',
        'Interactive control system',
        'Fully responsive UI',
      ],
      github: 'https://github.com/Shaan098/ar-viewer',
      category: 'fullstack',
    },
    {
      id: 3,
      title: 'Appointment Scheduling System',
      description: 'Complete appointment management system with role-based access control.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express'],
      features: [
        'JWT authentication & authorization',
        'Role-based access control',
        'Intelligent scheduling dashboard',
        'Real-time notifications',
      ],
      github: 'https://github.com/Shaan098/appointment-system',
      category: 'fullstack',
    },
  ],
  experience: [
    {
      title: 'Virtual Software Engineer',
      company: 'Electronic Arts (Forage)',
      period: '2024',
      description: 'Completed a virtual software engineering experience focusing on game development.',
      highlights: [
        'System design and architecture principles',
        'Game development fundamentals',
        'Performance optimization techniques',
        'OOP concepts and design patterns',
      ],
    },
    {
      title: 'AWS APAC Solutions Architect',
      company: 'Amazon Web Services (Forage)',
      period: '2024',
      description: 'Completed AWS Solutions Architecture virtual experience focusing on cloud infrastructure.',
      highlights: [
        'AWS services and architecture design',
        'Cloud infrastructure planning',
        'Scalability and performance optimization',
        'Security best practices',
      ],
    },
  ],
  achievements: [
    {
      icon: '🏆',
      title: '150+ LeetCode Problems',
      description: 'Successfully solved over 150 coding problems on LeetCode.',
    },
    {
      icon: '⭐',
      title: '77%+ Acceptance Rate',
      description: 'Maintained an acceptance rate above 77% on competitive programming platforms.',
    },
    {
      icon: '🎖️',
      title: 'HackerRank Badges',
      description: 'Earned multiple badges across various programming languages.',
    },
    {
      icon: '🚀',
      title: 'Full Stack Applications',
      description: 'Developed and deployed multiple full-stack applications using MERN stack.',
    },
  ],
  certifications: [
    {
      title: 'NPTEL Cloud Computing',
      issuer: 'IIT Kharagpur',
      date: '2024',
      icon: '☁️',
    },
    {
      title: 'Oracle Cloud Infrastructure Developer Professional',
      issuer: 'Oracle',
      date: '2024',
      icon: '🌐',
    },
  ],
};
