// Define the generatePDF function
function generatePDF(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
  
    // Get the values from the form
    const company1 = document.getElementById("company1").value;
    const jobTitle1 = document.getElementById("jobTitle1").value;
    const date1 = document.getElementById("date1").value;
    const responsibility1 = document.getElementById("responsibility1").value;
    const solution1 = document.getElementById("solution1").value;
    const solutionDescription1 = document.getElementById("solutionDescription1").value;
    const university1 = document.getElementById("university1").value;
    const degree1 = document.getElementById("degree1").value;
    const date2 = document.getElementById("date2").value;
    const skill1 = document.getElementById("skill1").value;
    const skill2 = document.getElementById("skill2").value;
    const skill3 = document.getElementById("skill3").value;
  
    // Define the document definition object
    const docDefinition = {
      content: [
        {
          text: "Professional Experience",
          style: "header"
        },
        {
          text: `${company1} - ${jobTitle1} (${date1})`,
          style: "subheader"
        },
        {
          ul: [
            responsibility1
          ]
        },
        {
          text: "Focus Solutions",
          style: "header"
        },
        {
          text: `${solution1}`,
          style: "subheader"
        },
        {
          ul: [
            solutionDescription1
          ]
        },
        {
          text: "Education",
          style: "header"
        },
        {
          text: `${university1} - ${degree1} (${date2})`,
          style: "subheader"
        },
        {
          text: "Additional Skills",
          style: "header"
        },
        {
          ul: [
            skill1,
            skill2,
            skill3
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5]
        }
      }
    };
  
    // Generate the PDF and download it
    pdfMake.createPdf(docDefinition).download();
  }
  
  // Add an event listener to the form submission
  const resumeForm = document.getElementById("resumeForm");
  resumeForm.addEventListener("submit", generatePDF);
  