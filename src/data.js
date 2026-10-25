export const roles = [
  {
    slug: "java-full-stack",
    title: "Java Full Stack Developer",
    short: "Build scalable web applications with Java and modern frontend technologies.",
    icon: "☕",
    color: "pink",
    skills: ["Java", "Spring Boot", "REST APIs", "React", "SQL/MySQL", "Git & GitHub"],
    tasks: [
      "Build a Student Management System using Java, Spring Boot, React and MySQL.",
      "Create REST APIs for registration, login and authentication.",
      "Develop a CRUD-based Employee Management Dashboard.",
      "Integrate a React frontend with Spring Boot APIs.",
      "Deploy the project and document its API endpoints and architecture."
    ],
    learn: ["Spring Boot project structure", "REST API design", "Database integration", "Frontend-backend integration", "Git-based team workflow"]
  },
  {
    slug: "python-full-stack",
    title: "Python Full Stack Developer",
    short: "Create data-driven web applications using Python and modern web frameworks.",
    icon: "🐍",
    color: "blue",
    skills: ["Python", "Django/Flask", "REST APIs", "HTML/CSS/JS", "SQL", "Git & GitHub"],
    tasks: [
      "Build a Task Management web application using Django or Flask.",
      "Create REST APIs for authentication and task management.",
      "Design a responsive frontend and connect it to the Python backend.",
      "Implement CRUD operations with MySQL or PostgreSQL.",
      "Deploy the application and prepare project documentation."
    ],
    learn: ["Python web development", "MVC/MVT concepts", "API integration", "Database design", "Deployment basics"]
  },
  {
    slug: "mern-full-stack",
    title: "MERN Full Stack Developer",
    short: "Build complete web applications with MongoDB, Express, React and Node.js.",
    icon: "⚛️",
    color: "green",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git & GitHub"],
    tasks: [
      "Build a full-stack task management application using the MERN stack.",
      "Create secure user registration and login functionality.",
      "Develop REST APIs and connect them to a React frontend.",
      "Implement a dashboard with CRUD operations and database integration.",
      "Deploy the project and maintain the code using Git/GitHub."
    ],
    learn: ["React component architecture", "Node/Express APIs", "MongoDB data modeling", "Authentication", "Full-stack deployment"]
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    short: "Turn raw data into dashboards, insights and useful business recommendations.",
    icon: "📊",
    color: "purple",
    skills: ["Excel", "SQL", "Python", "Power BI", "Data Cleaning", "Data Visualization"],
    tasks: [
      "Analyze a sales or customer dataset and identify trends.",
      "Clean and prepare raw data using Excel, Python or SQL.",
      "Write SQL queries to generate business insights.",
      "Create an interactive Power BI or Excel dashboard.",
      "Present findings and provide data-driven recommendations."
    ],
    learn: ["Data cleaning", "SQL analysis", "Dashboard design", "Business storytelling", "Insight presentation"]
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    short: "Turn designs into responsive, accessible and polished web interfaces.",
    icon: "💻",
    color: "pink",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design", "Git"],
    tasks: [
      "Convert a provided Figma design into a responsive website.",
      "Build a responsive landing page using HTML, CSS and JavaScript.",
      "Develop reusable UI components using React.js.",
      "Implement layouts for desktop, tablet and mobile.",
      "Optimize the site for performance, accessibility and browsers."
    ],
    learn: ["Component-based UI", "Responsive CSS", "Accessibility", "Browser testing", "Frontend performance"]
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    short: "Build reliable APIs, authentication systems and database-backed services.",
    icon: "⚙️",
    color: "blue",
    skills: ["Node.js", "Express.js", "REST APIs", "Databases", "Authentication", "Postman"],
    tasks: [
      "Design and develop REST APIs for a web application.",
      "Implement user authentication and authorization.",
      "Create database schemas and CRUD operations.",
      "Add validation, error handling and secure API practices.",
      "Test APIs using Postman and document the endpoints."
    ],
    learn: ["API architecture", "Authentication", "Database design", "API testing", "Security fundamentals"]
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    short: "Design intuitive interfaces and user journeys for web and mobile products.",
    icon: "🎨",
    color: "purple",
    skills: ["Figma", "Wireframing", "Prototyping", "User Flows", "Design Systems", "Usability Testing"],
    tasks: [
      "Create user personas and user flows for a selected application.",
      "Design low-fidelity wireframes for key screens.",
      "Create a high-fidelity UI in Figma.",
      "Build a responsive design system with colors, type and components.",
      "Run basic usability testing and improve the design from feedback."
    ],
    learn: ["UX thinking", "Figma workflows", "Design systems", "Prototyping", "User-centered design"]
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    short: "Learn to deploy, monitor and operate applications in modern cloud environments.",
    icon: "☁️",
    color: "blue",
    skills: ["AWS/Azure/GCP", "Linux", "Cloud Storage", "Networking Basics", "Monitoring", "Deployment"],
    tasks: [
      "Deploy a simple web application on AWS, Azure or GCP.",
      "Set up and configure a basic cloud server or environment.",
      "Configure cloud storage and file upload functionality.",
      "Set up basic application monitoring and logging.",
      "Document the deployment process and create a cloud architecture diagram."
    ],
    learn: ["Cloud services", "Server deployment", "Storage", "Monitoring", "Architecture documentation"]
  },
  {
    slug: "mobile-app-developer",
    title: "Mobile App Developer",
    short: "Create practical mobile applications for Android using modern frameworks.",
    icon: "📱",
    color: "green",
    skills: ["Flutter or React Native", "Dart/JavaScript", "REST APIs", "Mobile UI", "Storage", "Git"],
    tasks: [
      "Build a mobile application using Flutter or React Native.",
      "Create login and registration screens.",
      "Connect the application to a REST API.",
      "Implement local or cloud-based data storage.",
      "Build and test a release version for Android."
    ],
    learn: ["Mobile UI", "API integration", "State management", "Storage", "Android build workflow"]
  },
  {
    slug: "qa-testing",
    title: "QA & Testing",
    short: "Find bugs, validate features and help deliver stable software.",
    icon: "🧪",
    color: "green",
    skills: ["Test Cases", "Manual Testing", "Postman", "Bug Reporting", "Selenium/Playwright", "Browser Testing"],
    tasks: [
      "Create a test plan and test cases for a web application.",
      "Perform functional and UI testing across browsers and devices.",
      "Identify, document and prioritize bugs.",
      "Perform API testing using Postman.",
      "Automate selected test cases using Selenium or Playwright."
    ],
    learn: ["Test planning", "Bug lifecycle", "API testing", "Automation basics", "Quality mindset"]
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    short: "Automate builds, testing and deployments using modern DevOps practices.",
    icon: "🔄",
    color: "purple",
    skills: ["GitHub Actions", "Docker", "CI/CD", "Linux", "Cloud", "Monitoring"],
    tasks: [
      "Create a CI/CD pipeline for a sample web application.",
      "Containerize an application using Docker.",
      "Set up automated build and deployment workflows with GitHub Actions.",
      "Configure basic application logging and monitoring.",
      "Deploy an application to a cloud environment and document the workflow."
    ],
    learn: ["CI/CD", "Containers", "Automation", "Deployment", "DevOps documentation"]
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    short: "Explore data, train models and turn machine learning ideas into working demos.",
    icon: "🤖",
    color: "pink",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "Model Evaluation"],
    tasks: [
      "Clean and preprocess a provided machine-learning dataset.",
      "Perform exploratory data analysis and visualize important patterns.",
      "Build a classification or regression model using Python.",
      "Evaluate the model using suitable performance metrics.",
      "Create a simple app or API that demonstrates the trained model."
    ],
    learn: ["Data preprocessing", "EDA", "Model training", "Evaluation", "ML deployment basics"]
  }
];