// Fetch courseId
const params = new URLSearchParams(location.search);
const id = params.get('id');

// Data array (add your full content here!)
const courses = [
  //1. Web dev 
  {
    id: 'web_dev',
    title: 'Web Development',
    banner: './imgs/Web_dev.img.jpg',
    instructor: 'John Doe',
    role: 'Web Developer',
    duration: '2 months',
    sessions: '12 modules',
    language: 'English',
    enrolled: '150+',
    rating: 4.3,
    offer: { percent: 40, code: 'webdev22' },
    objective: 'This course is designed to give beginners a clear foundation in building web pages using HTML5, CSS3, Javascript, Bootstrap and Jquery.',
    syllabus: [
      {
        title: 'HTML Structure & Elements',
        points: ['Tags and Attributes', 'Nested Elements', 'Semantic Tags']
      },
      {
        title: 'CSS Basics and Box Model',
        points: ['Selectors', 'Box Model', 'Margin & Padding']
      },
      {
        title: 'Layout: Flexbox & Grid',
        points: ['Flex Properties', 'Grid Layout Areas', 'Responsive Grid']
      },
      {
        title: 'Forms & Inputs',
        points: ['Form Tags', 'Input Types', 'Validation']
      },
      {
        title: 'Responsive Design',
        points: ['Media Queries', 'Bootstrap Grid', 'Mobile-First Design']
      }
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/ins-boy.png',
    instructorBio: 'Web Developer with 10+ years of experience in frontend design & education.',
    reviews: [
      { user: 'Asha R.', rating: 5, comment: 'Excellent course! Clear explanation with practical examples.' },
      { user: 'Vijay M.', rating: 4, comment: 'Great for beginners, learned a lot about layout and forms.' },
    ],
    related: [
      { title: 'UI/UX Design', img: 'imgs/UX_UI.img.jpg', link: 'course_details.html?id=ui_ux' },
      { title: 'Digital Marketing', img: 'imgs/digitalmarketing.img.jpg', link: 'course_details.html?id=digitalmarketing' }
    ]
  },
  // add more courses here...

  //2.AI &ML 
  {
    id: 'ai_ml',
    title: 'AI and ML',
    banner: './imgs/AI&ML.jpg',
    instructor: 'Luna',
    role: 'AI & ML Engineer',
    duration: '8 months',
    sessions: '12 modules',
    language: 'English',
    enrolled: '200+',
    rating: 4.5,
    offer: { percent: 30, code: 'AI&ML24' },
    objective: 'Learn how to build intelligent chatbots, recommendation systems, and automation tools using AI',
    syllabus: [
      {
        Subject: 'Introduction to AI and ML', 
        points: ['What is AI?', 'Types of AI', 'Applications of AI']
      },
      {
        Subject: 'Supervised and Unsupervised Learning',
         points: ['Definition', 'Key Algorithms', 'Use Cases']
        },
      {
        Subject: 'Neural Networks & Deep Learning',
         points: ['Basics of Neural Networks', 'Deep Learning Frameworks', 'Applications']
        },
      {
        Subject: 'Natural Language Processing (NLP)', 
        points: ['Text Preprocessing', 'Sentiment Analysis', 'Chatbots']
      },
      {
        Subject: 'Model Evaluation and Validation', 
        points: ['Overfitting vs Underfitting', 'Cross-Validation', 'Performance Metrics']
      },
      {
        Subject: 'Reinforcement Learning',
        points: ['Key Concepts', 'Applications', 'Future Trends']
      }
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/Ins-girl.jpg',
    instructorBio: 'AI and ML Engineer with 5+ years of experience in advanced technologies.',
    reviews: [
      { user: 'Rama.', rating: 4, comment: 'Good and USeful.' },
      { user: 'Vijaya s.', rating: 5, comment: 'Great for beginners, learned a lot about layout and forms.' },
    ],
    related: [
      { title: 'Data Science', img: './imgs/datascience.jpg', link: 'course_details.html?id=datascience' },
      { title: 'Python', img: './imgs/python.img.webp', link: 'course_details.html?id=python' }
    ]
  },

  //Python
  {
    id: 'python',
    title: 'Python',
    banner: './imgs/python.img.webp',
    instructor: 'Shree',
    role: 'Python Developer',
    duration: '2 months',
    sessions: '12 modules',
    language: 'Tamil',
    enrolled: '100+',
    rating: 4.7,
    offer: { percent: 40, code: 'webdev22' },
    objective: 'This course is designed to give beginners a clear foundation in building web pages using HTML5, CSS3, Javascript, Bootstrap and JqueryBegin your coding journey with Python Pragramming, the most beginner-friendly  and powerful language.',
    syllabus: [
      {Subject:'datatypes and Variables',
        points: ['Introduction to Python', 'Variables and Data Types', 'Basic Operations']},
      {Subject:'Functions and Modules',
        points: ['Defining Functions', 'Function Arguments', 'Return Values']},
      {Subject:'OOPS',
        points: ['Classes and Objects', 'Inheritance', 'Polymorphism']},
      {Subject:'Multithreading and Concurrency',
        points: ['Thread Basics', 'Synchronization', 'Concurrency Issues']},
      {Subject:'File Handling',
        points: ['Reading Files', 'Writing Files', 'Working with File Paths']}
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'images/instructor.jpg',
    instructorBio: 'Python developer with 8+ years of experience in frontend design & education.',
    reviews: [
      { user: 'Ammu R.', rating: 4, comment: 'Excellent course! Clear explanation with practical examples.' },
      { user: 'Ramya M.', rating: 4, comment: 'Great for beginners, learned a lot about layout and forms.' },
    ],
    related: [
      { title: 'Java', img: './imgs/java.PNG', link: 'course_details.html?id=python' },
      { title: 'Aptitude and Reasoning', img: './imgs/aptitude.jpg', link: 'course_details.html?id=apti&reason' }
    ]
  },

  //Java

   {
    id: 'java',
    title: 'Java Programming',
    banner: './imgs/java.PNG',
    instructor: 'Shruthi',
    role: 'Java Developer',
    duration: '5 months',
    sessions: '18 modules',
    language: 'Tamil',
    enrolled: '80+',
    rating: 4.8,
    offer: { percent: 50, code: 'java42' },
    objective: 'Learn to Build strong programming fundamentals and prepare for careers in backend, Android, and enterprise development',
    syllabus: [
      {Subject:'Introduction to Java',
        points: ['Java Basics', 'Data Types', 'Operators']},
      {Subject:'Control Structures',
        points: ['Conditional Statements', 'Loops', 'Switch Case']},
      {Subject:'Object-Oriented Programming',
        points: ['Classes and Objects', 'Inheritance', 'Polymorphism']},
      {Subject:'Exception Handling',
        points: ['Try-Catch Blocks', 'Custom Exceptions', 'Error Handling']},
      {Subject:'Collections Framework',
        points: ['Lists, Sets, Maps', 'Iterators', 'Streams']}
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/Ins-girl.jpg',
    instructorBio: 'Java developer with 12+ years of experience in Backend and application development.',
    reviews: [
      { user: 'Pooja R.', rating: 4.5, comment: 'Excellent course! Clear explanation with practical examples.' },
      { user: 'Vikram M.', rating: 4, comment: 'Great for beginners, learned a lot about layout and forms.' },
    ],
    related: [
      { title: 'Python', img: './imgs/python.img.webp', link: 'course_details.html?id=python' },
      { title: 'AI and ML', img: './imgs/AI&ML.jpg', link: 'course_details.html?id=ai_ml' }
    ]
  },

  //Data Science
   {
    id: 'datascience',
    title: 'Data Science ',
    banner: './imgs/datascience.jpg',
    instructor: 'ALice',
    role: 'Data Scientist',
    duration: '8 months',
    sessions: '22 modules',
    language: 'English',
    enrolled: '50+',
    rating: 4,
    offer: { percent: 40, code: 'datascience25' },
    objective: 'Learn to Build strong programming fundamentals and prepare for careers in backend, Android, and enterprise development',
    syllabus: [
      {Subject:'Introduction to Data Science',
        points: ['Data Science Basics', 'Data Types', 'Operators']},
      {Subject:'Data Analysis with Python',
        points: ['Pandas', 'NumPy', 'Data Visualization']},
      {Subject:'Machine Learning',
        points: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation']},
      {Subject:'Deep Learning',
        points: ['Neural Networks', 'TensorFlow', 'Keras']},
      {Subject:'Collections Framework',
        points: ['Lists, Sets, Maps', 'Iterators', 'Streams']}
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/Ins-girl.jpg',
    instructorBio: 'Data Scientist with 10+ years of experience in Data Analysis and Machine Learning.',
    reviews: [
      { user: 'Pooja R.', rating: 4.5, comment: 'Excellent course! Clear explanation with practical examples.' },
      { user: 'Vikram M.', rating: 4, comment: 'Great for beginners, learned a lot about layout and forms.' },
    ],
    related: [
      { title: 'Web Development', img: './imgs/Web_dev.img.jpg', link: 'course_details.html?id=web_dev' },
      { title: 'AI and ML', img: './imgs/AI&ML.jpg', link: 'course_details.html?id=ai_ml' }
    ]
  },

  //UI/UX Design
  {
    id: 'ui_ux',
    title: 'UI/UX Design',
    banner: './imgs/UX_UI.img.jpg',
    instructor: 'John Doe',
    role: 'UI/UX Designer',
    duration: '3 months',
    sessions: '10 modules',
    language: 'Tamil',
    enrolled: '50+',
    rating: 4.5,
    offer: { percent: 30, code: 'uiux30' },
    objective: 'Learn the principles of UI/UX design and how to create user-centered designs.',
    syllabus: [
      {Subject:'Introduction to UI/UX Design',
        points: ['Design Thinking', 'User Research', 'Wireframing']},
      {Subject:'Visual Design',
        points: ['Color Theory', 'Typography', 'Layout Design']},
      {Subject:'Prototyping',
        points: ['Low-Fidelity Prototypes', 'High-Fidelity Prototypes', 'User Testing']},
      {Subject:'Responsive Design',
        points: ['Mobile-First Design', 'Media Queries', 'Flexbox and Grid']},
      {Subject:'Design Tools',
        points: ['Figma', 'Adobe XD', 'Sketch']}
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/ins-boy.jpg',
    instructorBio: 'UI/UX Designer with 5+ years of experience in creating user-friendly designs.',
    reviews: [
      { user: 'Pooja R.', rating: 4.5, comment: 'Excellent course! Clear explanation with practical examples.' },
      { user: 'Vikram M.', rating: 4, comment: 'Great for beginners, learned a lot about layout and forms.' },
    ],
    related: [
      { title: 'Web Development', img: './imgs/Web_dev.img.jpg', link: 'course_details.html?id=web_dev' },
      { title: 'Digital Marketing', img: './imgs/digitalmarketing.img.jpg', link: 'course_details.html?id=digitalmarketing' }
    ]
  },

  //Digital Marketing
  {
    id: 'digitalmarketing',
    title: 'Digital Marketing',
    banner: './imgs/digitalmarketing.img.jpg',    
    instructor: 'Rosi',
    role: 'Digital Marketing Expert', 
    duration: '4 months',
    sessions: '15 modules',
    language: 'Tamil',
    enrolled: '20+',
    rating: 4.5,      
    offer: { percent: 40, code: 'digital25' },
    objective: 'Learn how to effectively market products and services online using various digital channels.',
    syllabus: [
      {Subject:'Introduction to Digital Marketing',
        points: ['Digital Marketing Basics', 'SEO', 'Content Marketing']},
      {Subject:'Social Media Marketing',
        points: ['Platforms Overview', 'Content Strategy', 'Analytics']},
      {Subject:'Email Marketing',
        points: ['Building Email Lists', 'Campaign Management', 'Metrics']},
      {Subject:'Paid Advertising',
        points: ['Google Ads', 'Social Media Ads', 'Retargeting']},
      {Subject:'Analytics and Reporting',
        points: ['Google Analytics', 'Conversion Tracking', 'Reporting Tools']}
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/ins-girl.jpg',   
    instructorBio: 'Digital Marketing Expert with 7+ years of experience in online marketing strategies.',
    reviews: [
      { user  : 'Alice W.', rating: 4.5, comment: 'Great course! Learned a lot about digital marketing strategies.' },
      { user: 'Bob K.', rating: 4, comment: 'Very informative and practical course.' },
    ],
    related: [
      { title: 'Web Development', img: './imgs/Web_dev.img.jpg', link: 'course_details.html?id=web_dev' },
      { title: 'UI/UX Design', img: './imgs/UX_UI.img.jpg', link: 'course_details.html?id=ui_ux' }
    ]
  },
  //Aptitude and Reasoning
  {
    id: 'apti&reason',
    title: 'Aptitude and Reasoning',
    banner: './imgs/aptitude.jpg',
    instructor: 'Ravi Kumar',
    role: 'Aptitude Trainer',
    duration: '1 months',
    sessions: '6 modules',
    language: 'Tamil',
    enrolled: '70+',
    rating: 4.2,
    offer: { percent: 20, code: 'apti20' }, 
    objective: 'This course is designed to help students improve their aptitude and reasoning skills for competitive exams.',
    syllabus: [
      { Subject: 'Quantitative Aptitude',
        points: ['Number System', 'Percentage', 'Profit and Loss'] },
      { Subject: 'Logical Reasoning',
        points: ['Syllogism', 'Blood Relations', 'Seating Arrangement'] },
      { Subject: 'Verbal Ability',
        points: ['Reading Comprehension', 'Grammar', 'Vocabulary'] },
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/ins-boy.jpg',  
    instructorBio: 'Aptitude Trainer with 5+ years of experience in preparing students for competitive exams.',
    reviews: [
      { user: 'Rahul S.', rating: 4.5, comment: 'Very helpful course for competitive exams.' },
      { user: 'Sneha P.', rating: 4, comment: 'Good content and well-structured.' },
    ],
    related: [
      { title: 'Python', img: './imgs/python.img.webp', link: 'course_details.html?id=python' },
      { title: 'Java', img: './imgs/java.PNG', link: 'course_details.html?id=java' }
    ]

  },

  //cyber security
   {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    banner: './imgs/cybersec.img.jpg',
    instructor: 'Julie',
    role: 'Cybersecurity Expert',
    duration: '6 months',
    sessions: '22 modules',
    language: 'English',
    enrolled: '50+',
    rating: 4.5,
    offer: { percent: 30, code: 'cyber30' },
    objective: 'Learn the principles of Cybersecurity and how to protect systems from cyber threats.',
    syllabus: [
      {
        Subject:'Introduction to Cybersecurity',
        points: ['Cybersecurity Basics', 'Threat Landscape', 'Risk Management']
      },
      {Subject:'Network Security',
        points: ['Firewalls', 'Intrusion Detection', 'VPNs']},
      {Subject:'Prototyping',
        points: ['Low-Fidelity Prototypes', 'High-Fidelity Prototypes', 'User Testing']},
      {Subject:'Responsive Design',
        points: ['Mobile-First Design', 'Media Queries', 'Flexbox and Grid']},
      {Subject:'Design Tools',
        points: ['Figma', 'Adobe XD', 'Sketch']}
    ],
    video: 'videos/sample.mp4',
    instructorImg: 'imgs/Ins-girl.jpg',
    instructorBio: 'Cybersecurity with 5+ years of experience in creating user-friendly designs.',
    reviews: [
      { user: 'Pooja R.', rating: 4.5, comment: 'Excellent course! Clear explanation with practical examples.' },
      { user: 'Vikram M.', rating: 4, comment: 'Great for beginners, learned a lot about layout and forms.' },
    ],
    related: [
      { title: 'Web Development', img: './imgs/Web_dev.img.jpg', link: 'course_details.html?id=web_dev' },
      { title: 'Digital Marketing', img: './imgs/digitalmarketing.img.jpg', link: 'course_details.html?id=digitalmarketing' }
    ]
  },
];











const c = courses.find(courseId => courseId.id === id);
const ctn = document.getElementById('container');

if (!c) {
  ctn.innerHTML = `<div class="alert alert-warning">Course not found or not selected.</div>`;
} else {
  ctn.innerHTML = `

        <h1 class="mb-4 text-center bg-success text-light rounded">Course Details</h1>
        <div class="row g-4 mb-3 bg-dark text-white rounded mx-1 mt-1 ">
          <div class="col-md-7 mb-3">
            <img src="${c.banner}" class="img-fluid rounded h-100 w-100" alt="${c.title}">
          </div>
          <div class="col-md-5">
            <h2>${c.title}</h2>
            <p><strong>Instructor:</strong> ${c.instructor}</p>
            <p><strong>Duration:</strong> ${c.duration}</p>
            <p><strong>Sessions:</strong> ${c.sessions}</p>
            <p><strong>Language:</strong> ${c.language}</p>
            <p><strong>Students Enrolled:</strong> ${c.enrolled}</p>
            <p><strong>Rating:</strong>
                ${[...Array(5)].map((_, i) =>
    `<i class="fa-star ${i < Math.round(c.rating) ? 'fas text-warning' : 'far'}"></i>`
  ).join('')} (${c.rating})
            </p>
            <p><strong>Offer:</strong> <span class="badge bg-success">${c.offer.percent}% OFF</span>  Code: <code>${c.offer.code}</code></p>
            <button class="btn btn-primary mt-3" onclick="handleEnroll()">Enroll Now</button>
            <div class="progress mt-4">
              <div class="progress-bar bg-success" style="width:60%">60% Complete</div>
            </div>
          </div>
        </div>



        <div class="mb-5 ">
          <h4 class="text-danger">Course Objective</h4>
          <p>${c.objective}</p>

          <div class="accordion" id="syllabusAccordion">
  <h4 class="text-danger">Syllabus</h4>
  ${c.syllabus.map((module, i) => `
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${i}">
        <button class="accordion-button ${i > 0 ? 'collapsed' : ''}" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapse${i}">
          Module ${i + 1}: ${module.title}
        </button>
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#syllabusAccordion">
        <div class="accordion-body">
          <ul class="list-group list-group-flush">
            ${module.points.map(point => `<li class="list-group-item">${point}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('')}
</div>


          <div class="mt-4">
            <h5>Sample Video</h5>         
            <iframe width="100%" height="615" class="border-1 border-black rounded" src="https://www.youtube.com/embed/rarJvL5tDUA?si=j0hZZSxkA8F1CjSJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div class="mb-5 bg-info p-3 rounded">
            <h4>Instructor</h4>
            <div class="d-flex align-items-center gap-3 mb-2">
                <img src="${c.instructorImg}" alt="Instructor" class="rounded-circle" width="70" height="70">
                <div>
                    <strong>${c.instructor}</strong><br>
                    <button class="btn btn-sm btn-outline-success mt-1" data-bs-toggle="collapse" data-bs-target="#instructorBio">
                        View Bio
                    </button>
                </div>
            </div>
            <div class="collapse" id="instructorBio">
                <div class="card card-body">
                    <strong> ${c.role}</strong>
                    ${c.instructorBio}
                   
                </div>
            </div>
        </div>

       <div class="mb-5">
       <h4>Student Reviews</h4>
         ${c.reviews.map(r => `
          <div class="border p-3 rounded bg-white mb-3">
           <p><strong>Rating:</strong>
           ${[...Array(5)].map((_, i) =>
    `<i class="fa-star ${i < Math.round(r.rating) ? 'fas text-warning' : 'far'}"></i>`
  ).join('')} (${r.rating})
          </p>
           <p class="mb-0">${r.comment}</p>
         </div>`).join('')}
        </div>


        <div class="mb-5">
          <h4>Related Courses</h4>
          <div class="row g-4">
            ${c.related.map(rc => `
              <div class="col-md-4">
                <div class="card">
                  <img src="${rc.img}"  class="card-img-top" style="height: 200px; object-fit: cover;" alt="${rc.title}">
                  <div class="card-body">
                    <h5 class="card-title">${rc.title}</h5>
                    <a href="${rc.link}" class="btn btn-sm btn-outline-primary mt-2">View</a>
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      `;
}
function handleEnroll() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    alert('✅ You Enrolled Successfully! Start Learning.');
    // Optionally mark progress or redirect to course content
  } else {
    alert('⚠️ Please log in to enroll.');
    window.location.href = 'login.html'; // change path if needed
  }
}




