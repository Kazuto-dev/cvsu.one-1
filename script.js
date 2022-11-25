function toggleRegistration() {
    hideCvSUCourses()


    var reqRegGuide = document.getElementById("reg-btn")
    var regContent = document.getElementById("guides")
    var endFileRequestBtn = document.getElementById("end-cta-btn")
    regContent.style.display = "block";
    endFileRequestBtn.style.display = "block";
    reqRegGuide.style.color = "#29711D";

}

function closeRegistration() {
    var reqRegGuide = document.getElementById("reg-btn")
    var regContent = document.getElementById("guides")
    var endFileRequestBtn = document.getElementById("end-cta-btn")

    regContent.style.display = "none";
    endFileRequestBtn.style.display = "none";
    reqRegGuide.style.color = "#1D1D1D";

}

function showCvSUCourses() {
    closeRegistration()

    var btn = document.getElementById("courses-btn")
    var content = document.getElementById("reg_courses")

    content.style.display = "block"
}

function hideCvSUCourses() {

    var btn = document.getElementById("courses-btn")
    var content = document.getElementById("reg_courses")

    content.style.display = "none"

}