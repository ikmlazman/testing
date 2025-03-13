document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");

    searchInput.addEventListener("input", function () {
        let query = searchInput.value;

        if (query.length > 1) {
            fetch(search.php?query=${query})
                .then(response => response.json())
                .then(data => {
                    let suggestionBox = document.createElement("div");
                    suggestionBox.classList.add("suggestions");
                    suggestionBox.innerHTML = data.map(item => <p>${item}</p>).join("");
                    searchInput.parentNode.appendChild(suggestionBox);

                    document.querySelectorAll(".suggestions p").forEach(p => {
                        p.addEventListener("click", function () {
                            searchInput.value = p.innerText;
                            suggestionBox.remove();
                        });
                    });
                });
        }
    });
});