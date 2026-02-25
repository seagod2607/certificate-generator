function generateCertificate(){
    let name = document.getElementById("name").value;    
    let course = document.getElementById("course").value;    

    document.getElementById("cert-name").innerText = name;
    document.getElementById("cert-course").innerText = course;
}

function downloadCertificate(){
    let certificate = document.getElementById("certificate");

    html2canvas(certificate).then((canvas) => {
         let link = document.createElement("a");
         link.download = "certificate.png";
         link.href = canvas.toDataURL("image/png");
         link.click();
    });
}

function downloadCertificateinpdf(){
    const { jsPDF } = window.jspdf;
    let certificate = document.getElementById("certificate");

    html2canvas(certificate, { scale: 2 }).then((canvas) =>{
        let imgData = canvas.toDataURL("image/png");
        let pdf = new jsPDF("landscape", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
        pdf.save("certificate.pdf");
    });
}
