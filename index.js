// dark mode toggle function
 function darkmode(){
    document.body.classList.toggle("dark-theme");
 }



 //contact modal function
   function contactModal() {
            let NameIn = document.getElementById('Name');
            let emailIn = document.getElementById('email');
            let msgIn = document.getElementById('msg');

            let Name=NameIn.value;
            let email=emailIn.value;
            let msg=msgIn.value;

            if (!Name || !email || !msg) {
                alert('Please enter valid data');
                return false;
            } 
            else {
                NameIn.value="";
                emailIn.value="";
                msgIn.value="";

                alert('We received your form, we will contact you soon!');                
               
                return true;
            }
        }



// Function to open the profile panel


  // side panel profile 
function toggleProfilePanel(show) {
  const panel = document.getElementById('profilePanel');
  if (show) {
    const profile = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!profile) {
      alert('No user is currently logged in. Please login or register.');
      return;
    }

    document.getElementById('sideFullname').textContent = profile.fullname || '-';
    document.getElementById('sideUsername').textContent = profile.username || '-';
    document.getElementById('sideEmail').textContent = profile.email || '-';

    panel.style.transform = 'translateX(0)';
  } else {
    panel.style.transform = 'translateX(-100%)';
  }
}

// Handle profile icon click
document.addEventListener('DOMContentLoaded', function () {
  const profileBtn = document.getElementById('openProfilePanel');
  if (profileBtn) {
    profileBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleProfilePanel(true);
    });
  }
});

