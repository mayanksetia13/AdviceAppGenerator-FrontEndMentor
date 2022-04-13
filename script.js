// https://api.adviceslip.com/advice

const adviceId = document.querySelector(".advice-id");
const quote = document.querySelector(".advice-para");
const adviceBtn = document.querySelector(".generate-advice");

const adviceData = function (data) {
    adviceId.textContent = `#${data.slip.id}`;
    quote.textContent = `"${data.slip.advice}"`;
};

const generateAdvice = async function () {
    // ---- using fetch with .then() ------
    // fetch("https://api.adviceslip.com/advice")
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw Error("Error Occured");
    //         }
    //         return res.json();
    //     })
    //     .then((data) => adviceData(data))
    //     .catch((err) => console.log(err));

    // ------- using async/await --------
    const res = await fetch("https://api.adviceslip.com/advice");
    const adviceSlip = await res.json();
    adviceData(adviceSlip);
};

adviceBtn.addEventListener("click", generateAdvice);
