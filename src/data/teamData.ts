export interface TeamMember {
  id: string;
  name: string;
  role: string;
  slug: string;
  image: string;
  bio: string;
  location?: string;
  hobbies?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "anjali",
    name: "Anjali Chetri",
    role: "Human Resource Manager",
    slug: "anjali-chetri",
    image: "/team/Anjali.webp",
    location: "Mirik",
    hobbies: "Cooking",
    socials: { linkedin: "#" },
    bio: "Anjali Chetri hails from the tranquil hills of Mirik, Darjeeling, and brings with her a deep sensitivity to people and systems. A graduate of Mirik College with a diverse academic base in History, Political Science, English, and Environmental Studies, she blends empathy with analytical thinking. With hands-on experience managing three retail shops; including team coordination and account handling, Anjali understands the human side of business as much as its operational core. At Studio 1947, she nurtures a culture where people feel seen, heard, and empowered, turning HR into a strategic heart of the studio."
  },
  {
    id: "ankita",
    name: "Ankita Chettri",
    role: "Data Analyst",
    slug: "ankita-chettri",
    image: "/team/Ankita.webp",
    location: "Mirik",
    hobbies: "Cooking",
    socials: { linkedin: "#" },
    bio: "Ankita Chettri, from Mirik, is a data analyst with a background in commerce and a growing passion for data science. She is learning to weave stories through numbers, turning raw data into insights that spark understanding. What excites her most is the human side of analytics, how patterns in data can reveal everyday realities, guide better decisions, and inspire change. Anchored in her roots in Mirik, Ankita brings both sensitivity and precision to her work, exploring how local experiences and global tools of data science can meet. Her journey is just beginning, but already she is shaping a path where analysis meets storytelling, and where numbers carry both clarity and meaning."
  },
  {
    id: "anudiya",
    name: "Anudiya Thapa",
    role: "Designer",
    slug: "anudiya-thapa",
    image: "/team/Anudiya.webp",
    location: "Mirik",
    hobbies: "Crafting Origami, Playing Sports",
    socials: { linkedin: "#" },
    bio: "Anudiya Thapa is a creative and calm individual from Mirik. She completed her graduation from Siliguri College. She has a strong interest in music and enjoys expressing her creativity through origami. With her gentle nature and artistic interests, Anudiya leaves a positive impression on everyone who knows her."
  },
  {
    id: "anushiya",
    name: "Anushiya Thapa",
    role: "Communication",
    slug: "anushiya-thapa",
    image: "/team/Anushiya.webp",
    location: "Mirik",
    hobbies: "Cooking, Crocheting",
    socials: { linkedin: "#" },
    bio: "Anushiya Thapa, from Mirik, is a graduate of Siliguri College. She enjoys crocheting and cooking, and is known for her creativity and patience. People around her describe her as thoughtful, kind, and someone who brings comfort through both her personality and her work."
  },
  {
    id: "astha",
    name: "Astha Chettri",
    role: "Video Editor",
    slug: "astha-chettri",
    image: "/team/Astha.webp",
    location: "Mirik",
    hobbies: "Drawing",
    socials: { linkedin: "#" },
    bio: "My name is Astha Chettri, and I am from Mirik. I work as a video editor with a strong interest in creating engaging and visually compelling content. I completed my schooling at Sukna High School, where I developed a foundation in creativity and technical skills. Over time, I have continued to enhance my abilities in video editing, focusing on storytelling, visual aesthetics, and delivering high-quality results. I am passionate about learning new techniques and growing professionally in the field of media and content creation."
  },
  {
    id: "bina",
    name: "Bina Oraon",
    role: "Data Analyst",
    slug: "bina-oraon",
    image: "/team/Bina.webp",
    location: "Earth",
    hobbies: "Cooking",
    socials: { linkedin: "#" },
    bio: "Bina Oraon is Data Analyst and pursuing Master’s Degree in Survey Research Data Analytics from International Institute for Population Sciences, Mumbai. She is proficient in Statistics to analyse the data including descriptive and inferential statistics. She is also skilled in Data Analysis using Python for data manipulation, analysis and visualization. Additionally, she has expertise in PowerBi for data visualization to create interactive and insightful reports that leads to decision-making. She also specializes in Survey Research and fieldwork including designing questionnaire, conducting surveys, analysing collected data from the survey to derive meaningful insights. Prior to her Master’s Degree, Bina worked as a Cashier at West Bengal Tribal Development Cooperative Corporation Ltd. for four years and was responsible for managing Audit also. Previous to her work in Government sector, Bina earned a Bachelor’s degree in Mathematics from Presidency University, Kolkata."
  },
  {
    id: "nikhil-rai",
    name: "Nikhil Rai",
    role: "3D Artist",
    slug: "nikhil-rai",
    image: "/team/Nikhil_rai.webp",
    location: "Mirik",
    hobbies: "Drawing, Singing",
    socials: { linkedin: "#" },
    bio: "Nikhil Rai is a creative professional from Mirik, blending a foundation in the Basics of Digital Marketing with self-taught mastery in Digital Art, Illustrations, and Animation. His journey reflects a deep passion for visual storytelling and a keen understanding of how marketing strategies can amplify creative impact. With a natural flair for designing engaging visuals and crafting animations that capture attention, Nikhil bridges the gap between aesthetics and communication. His digital marketing knowledge enables him to align creative outputs with audience behavior, campaign goals, and brand messaging, ensuring that his work is not only visually appealing but also purpose-driven. Rooted in the serene yet vibrant culture of Mirik, Nikhil draws inspiration from his surroundings, translating local nuances into modern, relatable visual narratives. Whether it’s creating eye-catching illustrations, dynamic animations, or concept-driven marketing visuals, his approach is thoughtful, detail-oriented, and impact-focused. In every project, Nikhil strives to merge creative storytelling with strategic thinking, making him a valuable contributor to campaigns that seek both emotional connection and measurable results."
  },
  {
    id: "nikhil-subba",
    name: "Nikhil Raj Subba",
    role: "Multimedia Designer",
    slug: "nikhil-raj-subba",
    image: "/team/Subba.webp",
    location: "Mirik",
    hobbies: "Playing Guitar",
    socials: { linkedin: "#" },
    bio: "Nikhil Raj Subba is a creative designer from Soureni, Mirik, specializing in visual communication, video production, and graphic design. A graduate in English Honours from Mirik College, he is currently pursuing his master’s degree while continuing to refine his craft within the creative sector. With experience as the General Secretary of his college, he brings strong leadership, discipline, and project coordination skills to his work. His creative practice is influenced by travel, music, painting, and local art traditions, allowing him to produce visually engaging and meaningful design outcomes."
  },
  {
    id: "pinaki",
    name: "Pinaki Roy",
    role: "Advisor In Communication",
    slug: "pinaki-roy",
    image: "/team/Pinaki.webp",
    location: "New Delhi",
    hobbies: "Trekking",
    socials: { linkedin: "#" },
    bio: "During my professional journey over the last 24 years, I have worked on various thematic focus areas, like supporting communities to protect village commons, anti-human trafficking, child protection, working with men on gender, corporate social responsibility, etc. A key takeaway from these experiences is the realization that the underlying systemic causes that perpetuate most challenges faced in these seemingly diverse issues are inter-connected and remain invisible in plain sight. My core strengths are my ability to walk off well-trodden paths and to persevere against all odds. Guided by a quest to manifest values like dignity, equality, compassion and harmony in all that I do – I mindfully strive to be the change that I want to see. I have an ability to hold space for bridging different worldviews and to create alignments. I believe that our current default business as usual modes are inadequate for effectively solving the complex challenges that humanity faces in the Anthropocene. To survive on earth, we must align with nature and transform systems that don’t. A lot of my current efforts are focused on exploring ways of generating personal and systemic transformations, so that we are able to heal ourselves and our planet."
  },
  {
    id: "rabi",
    name: "Rabiul Islam",
    role: "Storytelling & Product Design",
    slug: "rabiul-islam",
    image: "/team/Rabi.webp",
    location: "Palassey",
    hobbies: "",
    socials: { linkedin: "#" },
    bio: "Rabiul Islam, also known as Rabi, is a designer with roots in the farmlands of Bengal, specifically in the historic region of the Battle of Plassey. He began his academic journey studying Philosophy at Presidency University, Kolkata, where he discovered his passion for design at the intersections of art, activism, and storytelling. Rabi started his career by designing handmade posters that blended Bengali calligraphy, Dokra art, and local traditions, focusing on themes like International Mother Tongue Day. Over time, his work evolved into a deep exploration of using design as a connection and systemic change medium. Rabi has worked at the intersection of product and communication design, collaborating with organizations such as Amazon, Sony, Tata Motors, Bosch, MIT, Carnegie Mellon University, and EPFL. He has also contributed to social impact initiatives in partnership with the United Nations, Friedrich Ebert Stiftung (India) Room to Read, Bihar Tourism, and grassroots projects like Know Your Neighbour and 5+ State Governments of India. As a designer, Rabi is driven by the philosophy of bridging people and nature, tradition and innovation. His work focuses on creating empathetic, purposeful, and sustainable designs, striving to align aesthetics with functionality and meaningful change."
  },
  {
    id: "rahul",
    name: "Rahul Chettri",
    role: "Web Developer",
    slug: "rahul-chettri",
    image: "/team/Rahul.webp",
    location: "Darjeeling",
    hobbies: "Playing Guitar",
    socials: { linkedin: "#" },
    bio: "Rahul Chettri is a skilled web developer from the scenic hills of Darjeeling, West Bengal. A BCA graduate from St. Joseph's College, Darjeeling, he brings technical expertise and creative problem-solving to Studio 1947. At Studio 1947, Rahul specializes in frontend development, crafting responsive e-commerce websites using HTML, CSS, Bootstrap, JavaScript, and the MERN stack. He builds interactive shopping experiences with dynamic product cards, quantity selectors, fixed navigation systems, and modern UI/UX designs that convert visitors into customers."
  },
  {
    id: "sankhadipta",
    name: "Sankhadipta Bose",
    role: "Data Analyst",
    slug: "sankhadipta-bose",
    image: "/team/Sankha.webp",
    location: "Kolkata",
    hobbies: "Music Production, Football, Video Games",
    socials: { linkedin: "#" },
    bio: "Data Analyst who specializes in data scraping, competitive data analysis, and transforming complex datasets into meaningful insights through data storytelling and Business Intelligence dashboards. With a curious mindset, strong analytical thinking, and quick problem-solving ability, they help teams make smarter, data-driven decisions. Beyond analytics, they also bring a creative edge through their passion for music production, balancing logic with originality in everything they do."
  },
  {
    id: "santam",
    name: "Santam Kumai",
    role: "Chief Of Staff",
    slug: "santam-kumai",
    image: "/team/Santam.webp",
    location: "Kalimpong",
    hobbies: "Hiking, Travelling",
    socials: { linkedin: "#" },
    bio: "His development journey began with a deep curiosity about how things work behind the screen. What initially started as a hobby tinkering with websites and building small projects—soon evolved into a strong passion for understanding the mechanics of meaningful digital experiences. Now, as Chief of Staff at Studio 1947, he leverages this technical perspective to bridge the gap between strategy and execution. He plays a key role in streamlining operations and ensuring the team has the structure to thrive. committed to a culture that values design and storytelling, he applies thoughtful problem-solving to help the agency deliver projects that make a genuine cultural and social impact."
  },
  {
    id: "shubhayu",
    name: "Subhayu Bhattacharjee",
    role: "Research Advisory",
    slug: "subhayu-bhattacharjee",
    image: "/team/Shubhayu.webp",
    location: "Mirik",
    hobbies: "",
    socials: { linkedin: "#" },
    bio: "Born amidst the natural plenitude of the Darjeeling and Duars, Subhayu Bhattacharjee continues the legacy of learning, teaching and nurturing in the foothills of the Himalayas. An aspiring scholar with a PhD in Cultural Studies, his extensive academic involvement in Presidency University, Kolkata and various IITs, prepares him for academic engagements across cultural subjects ranging from Films, Textual Cultures, Religion among others. He is particularly interested in locating culture in a framework of dynamic 'play' of myriad subjectivities. His publications can be accessed here."
  },
  {
    id: "soumajit",
    name: "Soumajit Das",
    role: "UI / UX Designer",
    slug: "soumajit-das",
    image: "/team/Soumo.webp",
    location: "Kolkata",
    hobbies: "Video Games",
    socials: { linkedin: "#" },
    bio: "Soumajit Das is a self-taught UI/UX designer at Studio 1947, where he brings a deep passion for crafting intuitive, human-centered digital experiences. With over two years of hands-on experience, he has worked on multiple interface revamps and product designs that combine functionality with elegance. A postgraduate in Computer Applications from Techno India University, Soumajit merges a strong technical foundation with a creative flair for user-first design. His approach is rooted in curiosity and experimentation, constantly exploring ways to simplify complex workflows and make interfaces more accessible and engaging. At Studio 1947, Soumajit contributes to projects across sectors, leading the design of mobile and web platforms that are both locally grounded and globally resonant. From financial apps like Indipay targeting Gen-Z users, to UI redesigns for platforms like CESC and NextDNS, his work reflects a careful balance of research, visual clarity, and usability. He is skilled in Figma, wireframing, prototyping, and user testing, and thrives in agile environments. Beyond the screen, he brings in influences from photography, gaming, and cultural observation, enriching his perspective as a designer who not only builds interfaces but also builds experiences that feel personal and purposeful. Soumajit’s role at Studio 1947 exemplifies the studio’s ethos, designing for the future, rooted in local insight."
  },
  {
    id: "soumic",
    name: "Soumic Sarkar",
    role: "Full Stack Developer",
    slug: "soumic-sarkar",
    image: "/team/Soumic.webp",
    location: "Malda",
    hobbies: "",
    socials: { linkedin: "#" },
    bio: "Soumic Sarkar is a Full Stack Developer at Studio 1947, passionate about building scalable web applications that deliver real value to users. Skilled across frontend and backend technologies, including React, Next.js, Node.js, and MongoDB, he focuses on clean architecture, thoughtful collaboration, and creating real-world impact. At Studio 1947, Soumic approaches every project with a product-first mindset, ensuring that every line of code enhances user experience and business outcomes. He believes in balancing performance, maintainability, and future readiness, whether designing intuitive interfaces or optimising backend systems. With hands-on experience leading and contributing to diverse projects, from portfolio platforms to banking applications, Soumic brings a deep commitment to continuous learning. Certified in Data Analysis, UI/UX Design, and Web Development, he sees technology not as a race for trends but as a tool to build products that work, last, and make a difference."
  },
  {
    id: "subhendu",
    name: "Subhendu Kundu",
    role: "Curriculum Design",
    slug: "subhendu-kundu",
    image: "/team/Subhendu.webp",
    location: "Mirik",
    hobbies: "",
    socials: { linkedin: "#" },
    bio: "Subhendu Kundu is a seasoned Ayurvedic medical practitioner with over 10 years of experience. He currently practices at Mirik Hospital. Subhendu is also a passionate curriculum designer focused on children's health in rural communities. With a strong background in medicine and public health, he crafts psychologically profound curriculum designs for children and teenagers. As an advisor at 1947 Studio, Subhendu lends his expertise to design better programs and curricula that empower skill development and capacity-building practices. He brings valuable experience in large-scale operation management and effective communication strategies. His deep understanding of rural health challenges and proven record in curriculum design creates a different approach for our Skill Development Training Programs."
  },
  {
    id: "zahid",
    name: "Zahid Ansari",
    role: "Graphics Designer & Script Writer",
    slug: "zahid-ansari",
    image: "/team/Zahid.webp",
    location: "Kolkata",
    hobbies: "Collecting Watches, Writing, Content Creation",
    socials: { linkedin: "#" },
    bio: "“Hamesha der kar deta hoon main” is a line that perfectly sums up Zahid Ansari, also known as Zahid. He is a budding graphic designer pursuing a B.A. in History from NSOU. He finds himself increasingly drawn to the design process, valuing the journey of creation as much as the final product. His experience spans multiple creative fields. He has worked as a translator and designer for CPS International, New Delhi. In addition to design, he is a Bengali short story writer, with several of his works published in Golpokutir. Inspired by films, books, and everyday moments, Zahid sees design as a powerful storytelling tool that connects people evokes emotions, and sparks inspiration through compelling visuals."
  }
];
