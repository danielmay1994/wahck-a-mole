// Write your JS here.

window.addEventListener("DOMContentLoaded", () => {
  const moleHead = document.querySelectorAll(
    ".wgs__mole-head:not(.wgs__mole-head--whacked)"
  );
  let moleArray = Array.from(moleHead);

  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  moleArray.forEach((mole) => {
    mole.addEventListener("click", (event) => {
      mole.classList.add("wgs__mole-head--hidden");
      mole.classList.add("wgs__mole-head--whacked");
    });
  });

  function popUpRandomMole() {
    const moleHead = document.querySelectorAll(
      ".wgs__mole-head:not(.wgs__mole-head--whacked)"
    );
    let moleArray = Array.from(moleHead);
    if (!moleHead.length) {
      alert("YOU WIN!!!");
      return;
    }
    let randomNum = Math.floor(Math.random() * moleHead.length);
    let mole = moleArray[randomNum];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => {
      hideMole(mole);
    }, 1000);
  }

  function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(() => {
      popUpRandomMole();
    }, 1000);
  }
});
