// Add a click event listener to the "Import from File" button
document.getElementById("import-from-file").addEventListener("click", function () {
    // Trigger a click on the hidden file input element
    document.getElementById("calendarFileInput").click();
});

// Add an event listener to the file input element to handle the selected file
document.getElementById("calendarFileInput").addEventListener("change", function () {
    const fileInput = this;
    
    if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];

        // You can add your code to process the selected file here
        // For example, you can read the file contents and parse the calendar data
        // For simplicity, we'll just alert the file name in this example
        alert("Selected file: " + selectedFile.name);
    }
});
