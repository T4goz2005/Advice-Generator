// const idAdiv = document.getElementById("id-advice"); //id
// const textAdiv = document.getElementById("textAdvice"); //Conselho

// function gerarConselho(){

// fetch("https://api.adviceslip.com/advice")
//   .then((Response) => {
//     return (slip = Response.json());
//   })
//   .then((adviceData) => {
//     const adviceObjectId = adviceData.slip.id;
//     const adiviceObect = adviceData.slip.advice;

//     idAdiv.innerHTML = `#${adviceObjectId}`;

//     textAdiv.innerHTML = `"${adiviceObect}"`
//   });
// }


// const buttonVar = document.getElementById("button-card");
// buttonVar.addEventListener("click", () => {
//     gerarConselho();
// });


/////OUUU////

const idAdiv = document.getElementById("id-advice"); //id
const textAdiv = document.getElementById("textAdvice"); //Conselho

const buttonVar = document.getElementById("button-card");
buttonVar.addEventListener("click", () => {
    gerarConselho();
});

async function gerarConselho(){
    const response = await fetch("https://api.adviceslip.com/advice"); //API
    const adviceContent = await response.json(); //Transfromando a API
    const adviceId = `#${adviceContent.slip.id}`
    const adviceText = `"${adviceContent.slip.advice}"`

    idAdiv.innerHTML = adviceId
    textAdiv.innerHTML = adviceText
}
