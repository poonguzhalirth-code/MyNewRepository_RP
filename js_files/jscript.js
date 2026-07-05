// Get references to HTML elements
const colorPicker = document.getElementById("HeaderFooterColor");
const header = document.getElementById("pageHeader");
const footer = document.getElementById("pageFooter");
const body = document.getElementById("pageContent")

// Change colors when the user selects a color
colorPicker.addEventListener("input", function () {
    const selectedColor = this.value;

    header.style.backgroundColor = selectedColor;
    footer.style.backgroundColor = selectedColor;
    body.style.backgroundColor = "#FFFFFF";
});


function searchText() {
    let keyword = document.getElementById("fsrch").value;
    let content = document.getElementById("fileContent").textContent;

    if (content.toLowerCase().includes(keyword.toLowerCase())) {
        alert("Text found!");
    } else {
        alert("Text not found!");
    }
}

async function searchFile() {
    const response = await fetch("sample.txt");
    const fileText = await response.text();

    const keyword = document.getElementById("search").value;

    if (fileText.includes(keyword)) {
        alert("Found");
    } else {
        alert("Not Found");
    }
}

function highlightText() {
    let text = document.getElementById("searchInput").value;
    let content = document.getElementById("content");

    let original = content.textContent;
    let regex = new RegExp(text, "gi");

    content.innerHTML = original.replace(
        regex,
        match => `<mark>${match}</mark>`
    );
}
