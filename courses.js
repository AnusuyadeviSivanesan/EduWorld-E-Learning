

 //Toggle dark mode
     function darkmode(){
    document.body.classList.toggle("dark-theme");
 }



        // Contact us button function 
        function contactModal() {
            let NameIn = document.getElementById('Name');
            let emailIn = document.getElementById('email');
            let msgIn = document.getElementById('msg');

            let Name = NameIn.value;
            let email = emailIn.value;
            let msg = msgIn.value;

            if (!Name || !email || !msg) {
                alert('Please enter valid data');
                return false;
            }
            else {
                NameIn.value = "";
                emailIn.value = "";
                msgIn.value = "";

                alert('We received your form, we will contact you soon!');

                return true;
            }
        }






        // card input & its value JS 
        let coursesCategoryvalue = [
            // 1.Web dev 
            {
                image: './imgs/Web_dev.img.jpg',
                title: 'Web Development',
                description: 'Learn to build responsive websites using HTML, CSS, JavaScript and along with the demanding frameworks',
                instructor: 'John Doe',
                duration: '2 months',
                id: 'web_dev',
                enroll: '150+',
                lang: 'English',
            },
            // 2.AI & ML 
            {
                image: './imgs/AI&ML.jpg',
                title: 'AI and ML',
                description: 'Learn how to build intelligent chatbots, recommendation systems, and automation tools using AI',
                instructor: 'Luna',
                duration: '8 months',
                id: 'ai_ml',
                enroll: '200+',
                lang: 'English',
            },

            // 3. Java 
            {
                image: './imgs/java.PNG',
                title: 'Java Programming',
                description: 'Learn to Build strong programming fundamentals and prepare for careers in backend, Android, and enterprise development',
                instructor: 'Shruthi',
                duration: '5 months',
                id: 'java',
                enroll: '80+',
                lang: 'Tamil',

            },

            //4.Python
            {
                image: './imgs/python.img.webp',
                title: 'Python Programming',
                description: 'Begin your coding journey with Python Pragramming, the most beginner-friendly  and powerful language.',
                instructor: 'Devi',
                duration: '2 months',
                id: 'python',
                enroll: '100+',
                lang: 'Tamil'
            },

            //5.Data science
            {
                image: './imgs/datascience.jpg',
                title: 'Data Science',
                description: 'Learn and master your skills in data science by learning how to analysing, visualizing, statics with the rel-world data.',
                instructor: 'Alice',
                duration: '8 months',
                id: 'datascience',
                enroll: '50+',
                lang: 'English'

            },

            //6.UI/UX
            {
                image: './imgs/UX_UI.img.jpg',
                title: 'UI/UX Designing',
                description: 'Learn to build the stunning User Interfaces and improve user experience through best design practices.',
                instructor: 'John Doe',
                duration: '3 months',
                id: 'ui_ux',
                enroll: '50+',
                lang: 'Tamil'
            },

            //7.cybersecurity
            {
                image: './imgs/cybersec.img.jpg',
                title: 'Cybersecurity',
                description: 'Learn to Understand ethical hacking, secure systems, and protect the data from cyber threats.',
                instructor: 'Julie',
                duration: '6 months',
                id: 'cybersecurity',
                enroll: '50+',
                lang: 'English'
            },

            //8.Digital marketing
            {
                image: './imgs/digitalmarketing.img.jpg',
                title: 'Digital Marketing',
                description: 'Learn SEO, social media marketing, email campaigns, and boost your brand reach effectively',
                instructor: 'Rosi',
                duration: '3 months',
                id: 'digitalmarketing',
                enroll: '20+',
                lang: 'Tamil'
            },

            //9.Aptitude & reasoning skills
            {
                image: './imgs/aptitude.jpg',
                title: 'Aptitude and Reasoning',
                description: 'Learn and Sharpen your logical thinking and problem-solving skills -helps to crack the interview',
                instructor: 'Ravi kumar',
                duration: '1 months',
                id: 'apti&reason',
                enroll: '70+',
                lang: 'Tamil'
            }
        ]


        let courseCategoryContainer = document.getElementById('courseCategoryContainer')
        coursesCategoryvalue.forEach(course => {
            let courseHtml = document.createElement('div');
            courseHtml.className = 'col-md-4 mb-4';
            courseHtml.innerHTML = `
        <div class="card h-100 cardboxhere" style="box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.2);  ">
            <img src="${course.image}" class="card-img-top p-1" alt="${coursesCategoryvalue.title}" style="height:300px; border-radius:0.6rem">
            <div class="card-body ms-2">
                <h4 class="card-title">${course.title}</h4>
                <p class="card-text border-bottom">${course.description}</p>
                <p class='text-success '>Instructor: '${course.instructor}'</p>
                <div class="d-flex flex-row justify-content-between">
                    <p class="text-secondary mt-auto"><i class="fa-solid fa-clock"></i> ${course.duration}</p>
                    <p class="text-secondary mt-auto text-success"><i class="fa-solid fa-users"></i>${course.enroll}</p>
                </div>

                <div class="d-flex flex-row justify-content-between">
                <p class="text-secondary mt-auto"><i class="fa-solid fa-language"></i> ${course.lang}</p>
               <button class="btn mt-2" onclick="wishlist('${course.id}')"><i class="fa-regular fa-heart"></i></button>
                </div>

                <a href="course_details.html?id=${course.id}" class="btn btn-primary d-block fw-bold">View Details</a>
            </div>
        </div>
        `;
            courseCategoryContainer.appendChild(courseHtml);
        })





        // WISHLIST 
    let wishlistItemsArray = [];

    function wishlist(courseId) {
        alert('You added this course to your wishlist');
        const index = wishlistItemsArray.indexOf(courseId);
        if (index > -1) {
            wishlistItemsArray.splice(index, 1); // Remove from wishlist
        } else {
            wishlistItemsArray.push(courseId); // Add to wishlist
        }
        renderCourses();
        updateWishlistPanel();
    }

    function toggleWishlistPanel() {
        const panel = document.getElementById('wishlistPanel');
        const isOpen = panel.style.transform === 'translateX(0%)';
        panel.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0%)';
        updateWishlistPanel();
    }

    function updateWishlistPanel() {
        const wishlistContainer = document.getElementById('wishlistItems');
        wishlistContainer.innerHTML = '';

        if (wishlistItemsArray.length === 0) {
            wishlistContainer.innerHTML = '<p class="text-center text-muted">No items in wishlist.</p>';
            return;
        }

        wishlistItemsArray.forEach(id => {
            const course = coursesCategoryvalue.find(c => c.id === id);
            const item = document.createElement('div');
            item.className = 'card mb-2';
            item.innerHTML = `
                <img src="${course.image}" class="card-img-top" style="height:150px; object-fit:cover;">
                <div class="card-body p-2">
                    <h6 class="card-title mb-1">${course.title}</h6>
                    <p class="mb-1 "><i class="fa-solid fa-user"></i> ${course.instructor}</p>
                    <a href="course_details.html?id=${course.id}" class="btn btn-sm btn-primary d-block">Go to Course</a>
                </div>
            `;
            wishlistContainer.appendChild(item);
        });
    }

    function renderCourses() {
        const container = document.getElementById('courseCategoryContainer');
        container.innerHTML = '';

        coursesCategoryvalue.forEach(course => {
            const isInWishlist = wishlistItemsArray.includes(course.id);
            const heartClass = isInWishlist ? 'fa-solid fa-heart filled' : 'fa-regular fa-heart';

            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            card.innerHTML = `
                <div class="card h-100 cardboxhere" style="box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.2);">
                    <img src="${course.image}" class="card-img-top p-1" alt="${course.title}" style="height:300px; border-radius:0.6rem">
                    <div class="card-body ms-2">
                        <h4 class="card-title">${course.title}</h4>
                        <p class="card-text border-bottom">${course.description}</p>
                        <p class='text-success'>Instructor: '${course.instructor}'</p>
                        <div class="d-flex flex-row justify-content-between">
                            <p class="text-secondary mt-auto"><i class="fa-solid fa-clock"></i> ${course.duration}</p>
                            <p class="text-secondary mt-auto text-success"><i class="fa-solid fa-users"></i>${course.enroll}</p>
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                            <p class="text-secondary mt-auto"><i class="fa-solid fa-language"></i> ${course.lang}</p>
                            <button class="btn mt-2 text-danger" onclick="wishlist('${course.id}')">
                                <i class="${heartClass} heart-icon"></i>
                            </button>
                        </div>
                        <a href="course_details.html?id=${course.id}" class="btn btn-primary d-block fw-bold">View Details</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Initial render
    renderCourses();




   
