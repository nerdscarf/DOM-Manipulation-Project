//Change Header Text Content
document.getElementById("main-heading").innerHTML = "New DOM Layout";

//Change Header BG Color
var headerBackground = document.getElementById("page-header")
headerBackground.classList.remove("bg-dark");
headerBackground.classList.add("bg-success");

// Add New Text to First Paragraph
var firstParagraph = document.getElementById("para1");
firstParagraph.innerHTML = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

// Add New Text to Second Paragraph
var secondParagraph = document.getElementById("para2");
secondParagraph.innerHTML = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

// Create New Paragraph on Click
var fourthParagraph = document.getElementById("btn")
fourthParagraph.addEventListener("click", function(){
    document.getElementById("para4").innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
  });

//Change First Box Background Color
var firstBox = document.getElementById("red")
firstBox.classList.remove("bg-white");
firstBox.classList.add("bg-danger");

//Change Second Box Background Color
var secondBox = document.getElementById("blue")
secondBox.classList.remove("bg-white");
secondBox.classList.add("bg-primary");

//Change Third Box Background Color
var thirdBox = document.getElementById("yellow")
thirdBox.classList.remove("bg-white");
thirdBox.classList.add("bg-warning");

//Change Fourth Box Background Color
var fourthBox = document.getElementById("green")
fourthBox.classList.remove("bg-white");
fourthBox.classList.add("bg-success");

//Change Fifth Box Background Color
var fifthBox = document.getElementById("black")
fifthBox.classList.remove("bg-white");
fifthBox.classList.add("bg-dark");