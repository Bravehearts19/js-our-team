const cardArray = [];
const teamContainer = document.querySelector(".team-container");
const addMemberButton = document.getElementById("addMemberButton");

const firstCard = {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg"
}

const secondCard = {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg"
}

const thirdCard = {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg"
}

const fourthCard = {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg"
}

const fifthCard = {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg"
}

const sixthCard = {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg"
}

cardArray.push(firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard)
console.log(cardArray);

generateCards();
document.getElementById("image").value = "";

addMemberButton.addEventListener("click", function() {
    let inputName = document.getElementById("name").value;
    let inputRole = document.getElementById("role").value;
    let inputImage = document.getElementById("image").value;

    console.log(inputName);
    console.log(inputRole);
    console.log(inputImage);

    generateSingleCard(inputName, inputRole, inputImage);

    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("image").value = "";
})

function generateCards() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = cardArray[i];

        generateSingleCard(card.name, card.role, card.image);
    }
}

function generateSingleCard(cardName, cardRole, cardImageURL) {
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const image = document.createElement("img");
    image.src = cardImageURL;

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");

    const cardTextTitle = document.createElement("h3");
    cardTextTitle.textContent = cardName;

    const cardTextSubtitle = document.createElement("p");
    cardTextSubtitle.textContent = cardRole;

    cardImage.append(image);
    cardText.append(cardTextTitle);
    cardText.append(cardTextSubtitle);
    teamCard.append(cardImage);
    teamCard.append(cardText);
    teamContainer.append(teamCard);
}