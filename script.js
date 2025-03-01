document.addEventListener("DOMContentLoaded", () => {
  let baseVolume = 0;
  const yesSound = "media/yes.mp3";
  const noSound = "media/no.mp3";

  /*  document.body.addEventListener("mousedown", (event) => {
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
  });*/
  document.body.addEventListener("mousedown", (event) => {
    const clickId = event.target.id;
    let sound = "";

    switch (clickId) {
      case "yes":
        sound = new Audio(yesSound);
        baseVolume = .2;
        console.log("yes");
        break;
      case "no":
        sound = new Audio(noSound);
        baseVolume = .3;
        console.log("no");
        break;
    }
    
    if (sound) {
      sound.volume = baseVolume;
      sound.play();
    }
  });
});