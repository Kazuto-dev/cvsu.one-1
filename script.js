


function toggleRegistration() {
    var reqRegGuide = document.getElementById("reg-btn")
    var regContent = document.getElementById("content2")
    var endFileRequestBtn = document.getElementById("end-cta-btn")
    regContent.style.display = "block";
    endFileRequestBtn .style.display = "block";
    reqRegGuide.style.color = "#29711D";
    
}

function showRegistratMainContents(){
    toggleRegistration();
}