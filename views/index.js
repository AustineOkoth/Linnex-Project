// Here is the top Nav that will apply to all the Pages

const topNavigation = document.getElementById("top-nav");
topNavigation.innerHTML = `<nav id="navigation">
<div id="navname-navdetails">
    <h4 id="navname" style="text-align: left;">Linnex Training Institute, Utawala</h4>
    <div id="navdetails">
        <div id="nav-home" class="nav-nav-link">
            <h4><a class="nav-nav-header" href="/home">HOME</h4></a>
        </div>
        <div id="nav-course" class="nav-nav-link">
            <h4><a class="nav-nav-header"  href = "/allcourses">COURSES &nbsp; <a id="courses-drop-down"href= "#"><i class="bi bi-caret-down-fill" style= "color:yellow"><div id="drop-down-div"></div></i></a></h4></a>
        </div>
        <div id="nav-contact" class="nav-nav-link">
            <h4><a class="nav-nav-header" href="#">CONTACT US </h4></a>
        </div>
        <div id="nav-blog" class="nav-nav-link">
            <h4><a class="nav-nav-header" href="/blog">BLOG</a></h4>
        </div>
        <div id="nav-login" class="nav-nav-link">
            <h4><a class="nav-nav-header" href="/login">LOGIN</a></h4>
        </div>
    </div>
</div>
</nav>`;

// End of  Dynamic addition of top nav

// javascript for the courses drop down

const coursesDropDown = document.getElementById("courses-drop-down");
const dropDownDiv = document.getElementById("drop-down-div");
coursesDropDown.addEventListener("click", () => {
    if (dropDownDiv.innerHTML === ``) {
        dropDownDiv.innerHTML = `<div class="drop-down-class" style="display:flex; flex-direction: column;">
        <a href="/hospitality"  class="drop-down-link-class" " >School of Hospitality</a>
        <a href="/cosmetology"  class="drop-down-link-class" " >School of Cosmetology</a>
        <a href="/ict"  class="drop-down-link-class" " >School of ICT</a>
        </div>`
    }
    else {
        dropDownDiv.innerHTML = ``
    }
});


// End of javascript for the courses drop down


// Dynamic addition of the footer Selection that will show up in all pages;

const dynamicFooter = document.getElementById("footer");
dynamicFooter.innerHTML = `<div id="social-footer">

<div id="social-handles-allcourses" style="display: flex;">

    <div id="facebook-allcourses" class="social-icon-allcourses">
        <a class="social-class-allcourses"
            href="https://www.facebook.com/Linnex-Training-Institute-Utawala-110843267503496/"><i
                class="bi bi-facebook" style="color: blue; font-size: 18px;"><b
                    style="color: white; font-weight: lighter;">&nbsp; Facebook</b></i></a>
    </div>

    <div id="instagram-allcourses" class="social-icon-allcourses">
        <a class="social-class-allcourses" href="https://www.instagram.com/linnextraininginstitute/">
            <i class="bi bi-instagram" style="color: yellow; font-size: 18px;"><b
                    style="color: white; font-weight: lighter;">&nbsp;Instagram</b></i>
        </a>
    </div>
    <div id="phone-call-allcourses" class="social-icon-allcourses">
        <a class="social-class-allcourses" href="tel:0722347768"> <i class="bi bi-telephone-outbound-fill"
                style="color: green;  font-size: 18px;"></i>&nbsp;<b
                style="color: white; font-weight: lighter;">Telephone</b></a><br>

        <!-- <a href="tel:0722347768">0722347768 &nbsp; </a><br>
    <a href="tel:+254202614400">+254 202614400 &nbsp;</a><br>
    <a href="tel:0722347768">+254 077129066</a> -->
    </div>

    <div id="contact-email-allcourses" class="social-icon-allcourses">

        <a class="social-class-allcourses" href="mailto:linnexcollege@gmail.com"> <i
                class="bi bi-envelope-check-fill" style="color: orange; font-size: 18px;"></i><b
                style="color: white; font-weight: lighter;">&nbsp;Email</b></a>

    </div>

    <div id="linkedin-allcourses" class="social-icon-allcourses">
        <a class="social-class-allcourses" href="#">
            <i class="bi bi-linkedin" style="color: red; font-size: 18px;"><b
                    style="color: white; font-weight: lighter;">&nbsp;LinkedIn</b></i>
        </a>
    </div>
</div><br>
</div>
<div id="copyright">
<p id="copyright-para" style="text-align: center; color: white;">Copyright &copy; All rights reserved </p>
</div>`

//End of dynamic addition of the footer secton..


//DYNAMIC ADDITION OF THE COURSES SECTION

const allDepartment = document.querySelectorAll(".department-class");

allDepartment.forEach(() => {

    const hospitalityDepartment = document.getElementById("hospitality-department");
    hospitalityDepartment.innerHTML = `<div id="hospitality-department-row-one" class="department-rows">
    <div class="course">
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Food Production,
            Sale &
            Service Management
            /Accomodation</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp;
            Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1 <sup>1</sup>/<sub>2</sub>years
            </h6>
        </div><br>
        <div id="details-apply">
            <!-- <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i>
            </button> -->
    
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button><br>
    
        </div>
    </div>
    
    <div class="course">
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Catering and
            Accomodation Operation</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp;
            Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1 year</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i></button>
        </div>
    </div>
    
    <div class="course">
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Front Office
            Administration and Management</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp;
            Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1 year</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i></button>
        </div>
    </div>
    
    
    </div>
    
    <div id="hospitality-department-row-two" class="department-rows">
    <div class="course">
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Food Production
            (craft)
        </h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp;
            Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 6 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i></button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Linnex JIKONI</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1 month</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Artisan in Food and
            Beverage
            Production Sales/ Service</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1 year</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    
    </div>
    
    
    
    <div id="hospitality-department-row-three" class="department-rows">
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Pastry, Cake Baking
            and
            Decoration</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    </div>`;

    const computerDepartment = document.getElementById("computer-department");
    computerDepartment.innerHTML = `<div id="ICT-department-row-one" class="department-rows">
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;"> Computer
            Engineering
        </h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1 <sup>1</sup>/<sub>2</sub>years
            </h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Information
            Communication
            Technology</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 2 years</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">web design and
            desktop
            publishing</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    
    </div>
    
    <div id="ICT-department-row-two" class="department-rows">
    
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Software and
            Hardware
            Maintenance</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Computer Packages
        </h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1 month</h6>
        </div><br>
        <div id="details-apply">
        <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    </div>
    `;

    const cosmetologyDepartment = document.getElementById("cosmetology-department");
    cosmetologyDepartment.innerHTML = `<div id="cosmetology-department-row-one" class="department-rows">
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Cosmetology
            (Hairdressing
            and
            Beauty Therapy) Grade 3,2,1</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 6 months, 1 year ,
                1<sup>1</sup>/<sub>2</sub>
                years Respectively</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Beauty Therapy</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1<sup>1</sup>/<sub>2</sub>years
            </h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Hair Dressing</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 1<sup>1</sup>/<sub>2</sub> years
                Respectively
            </h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    
    </div>
    
    
    <div id="cosmetology-department-row-two" class="department-rows">
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Proficiency in make
            up
            and
            hair
            removal</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Nail Technology</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Proficiency
            Certificate
            in
            Massage</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    
    </div>
    
    
    
    
    <div id="cosmetology-department-row-three" class="department-rows">
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Certificate in
            Braidery
        </h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Proficiency
            Certificate
            in
            Dreadlock Styling</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    
    <div class="course">
    
        <h4 id="course-name" class="course-name-class" style="text-align : center;">Proficiency
            Certificate
            in
            Dreadlock Styling</h4>
        <h5 id="institute-name" style="text-align: center; font-weight: lighter; padding-right: 10px;">
            <i class="bi bi-bank2" style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; Linnex Training
            Institute, Utawala
        </h5>
        <div id="diploma-period">
            <h6 id="diploma-id" style="font-weight: lighter;"><i class="bi bi-mortarboard-fill"
                    style="color: rgba(0, 0, 255, 0.589)"></i>&nbsp; Diploma/Certificate</h6>
            <h6 id="period-id" style="font-weight: lighter;"><i class="bi bi-clock-fill"
                    style="color: rgba(0, 0, 255, 0.589);"></i> &nbsp; 3 months</h6>
        </div><br>
        <div id="details-apply">
            <button class="course-details"
                style="background-color: yellow; border: 0px; color: black; padding: 10px; font-family: sans-serif;">DETAILS<i
                    class="bi bi-caret-right-fill"></i><i class="bi bi-caret-right-fill"
                    style="margin-left:-7px;"></i></button>
            <button class="course-apply" onclick="location='/register'"
                style="background-color: blue; border: 0px; color: white; padding: 10px; font-family: sans-serif;">APPLY
                <i class="bi bi-chevron-double-down"></i>
            </button>
        </div>
    </div>
    </div>`;

});

//END OF ADDITION OF THE COURSES SECTION