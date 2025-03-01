document.addEventListener("DOMContentLoaded", () => {
  const yesSound = new Audio("media/yes.mp3");
  const noSound = new Audio("media/no.mp3");
  yesSound.volume = 0.2;
  noSound.volume = 0.2;

  document.body.addEventListener("click", (event) => {
    const clickId = event.target.id;
    switch (clickId) {
      case "yes":
        yesSound.play();
        console.log("yes");
        break;
      case "no":
        noSound.play();
        console.log("no");
        break;
    }
  });
});
