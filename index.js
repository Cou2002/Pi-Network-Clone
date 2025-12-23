        function myFunction(x) {
            let y = document.getElementById("fixed-container");
            x.classList.toggle("change");

            if (y.style.height === "0px" || y.style.height === "") {
                y.style.height = "100%";
            } else {
                y.style.height = "0";
            }
        }

        function openSearch() {
            document.getElementById("search-container").style.height = "15%";
        }

        function closeSearch() {
            document.getElementById("search-container").style.height = "0"
        }