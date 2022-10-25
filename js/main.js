import {data} from "/js/data.js";

const searchInput = document.querySelector(".search-input");

const table1 = data["Table1"];
const targetData = ["Position", "Ethnicity", "Body Type", "Dick", "Size"]

const pornstarCards = [];

function addData(location, pornstarData) {
    for (let i = 0; i < targetData.length; i++) {

        let position = pornstarData[targetData[i]];

        if (targetData[i] !== undefined) {
            const container = document.createElement("div");
            const title = document.createElement("p");
            const content = document.createElement("p");

            if (position === "Versitile" && pornstarData["Perferable"] !== undefined) {
                position = position+" "+pornstarData["Perferable"];
            }

            location.append(container);
            container.append(title);
            container.append(content);

            title.textContent = targetData[i]+": ";
            content.textContent = position;

            container.className = "content-container"
            title.className = "content-title";
            content.className = "content"
        }

    }
}

function makePornstarCard(pornstarData) {
    const card = document.createElement("div");
    const img_container = document.createElement("div");
    const img = document.createElement("img");
    const textbox = document.createElement("div")
    const title = document.createElement("p");

    document.querySelector(".pornstar-container").append(card);

    card.append(img_container, textbox);

    img_container.append(img);
    textbox.append(title);

    title.textContent = pornstarData["Name"];
    img.src = pornstarData['Image Path'];

    img_container.className = "img-container";
    textbox.className = "text-box";
    title.className = "pornstar-name"
    card.className = "pornstar-card";

    addData(textbox, pornstarData);

    pornstarCards.push({name: pornstarData["Name"], card: card});
}

table1.forEach(pornstarData => {
    makePornstarCard(pornstarData);
});

searchInput.addEventListener("input", () => {
    pornstarCards.forEach(element => {

        const name = element.name.toLowerCase();
        const input = searchInput.value.toLowerCase();

        if (name.includes(input)) {
            element.card.classList.remove("hide");
        } else {
            element.card.classList.add("hide");
        }
    });
});