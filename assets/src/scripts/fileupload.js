document.getElementById('btn').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const input = document.getElementById("searchbar").value.toLowerCase(); //get value from searchbar
    console.log(input);

    const rows = document.getElementsByTagName("tr");       //get all the rows


  
    for (let i = 0; i < rows.length; i++) {         //loop through all the rows
        const row = rows[i];
        const rowtext = row.textContent.toLowerCase();

        if (rowtext.includes(input)) {
            row.classList.add("highlight"); // Add "highlight" class to rows that match the search criteria
            console.log(rowtext);
        }else{                                  
            row.classList.remove("highlight");    // Remove "highlight" class from rows
        }
    }
});
