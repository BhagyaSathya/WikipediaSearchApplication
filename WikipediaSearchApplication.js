let inputEl = document.getElementById("searchInput");
let container = document.getElementById("searchResults");
let spinEl = document.getElementById("spinner");

function create(result) {
    let {
        link,
        title,
        description
    } = result;

    let container1 = document.createElement("div");
    container1.classList.add("result-item");
    container.appendChild(container1);


    let anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.textContent = title;
    anchor.classList.add("result-title");
    container1.appendChild(anchor);

    let break1 = document.createElement("br");
    container1.appendChild(break1);

    let anchor1 = document.createElement("a");
    anchor1.href = link;
    anchor1.target = "_blank";
    anchor1.textContent = link;
    anchor1.classList.add("result-url");
    container1.appendChild(anchor1);

    let break2 = document.createElement("br");
    container1.appendChild(break2);

    let para = document.createElement("p");
    para.classList.add("link-description");
    para.textContent = description;
    container1.appendChild(para);


}



function display(searchResults) {
    spinEl.classList.add("d-none");
    for (let result of searchResults) {
        create(result);
    }
}

function search(event) {
    if (event.key === "Enter") {
        spinEl.classList.remove("d-none");
        container.textContent = "";

        let inputVal = inputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputVal;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                display(search_results);

            });
    }
}
inputEl.addEventListener("keydown", search);