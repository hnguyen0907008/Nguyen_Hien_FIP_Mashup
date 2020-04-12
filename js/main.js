(() => {
	console.log("fired");
  //beer buttons in index page 
	let beerButtons = document.querySelectorAll(".beerButton"),
		  beerName = document.querySelector(".beerInfo h3"),
		  beerSum = document.querySelector("#beerDes"),

      //can images
      beerImg1 = document.querySelector(".beerModel"),
      beerImg2 = document.querySelector(".beerModel2"),
      canModel = document.querySelector(".canModel"),

      //beer information section
      desInfo = document.querySelector(".desInfo"),
      desInfo2 = document.querySelector(".desInfo2"),

      //buttons in each can's page
      desButton = document.querySelector(".des"),
      artButton = document.querySelector(".art"),

      //description of beer can
      desContent = document.querySelector(".desContent"),
      desArtwork = document.querySelector(".desArtwork");

	const beerData = [
    ["RAIBOW STOUT", `Brewed in collaboration with Lucy & Yak, we created an Imperial Stout with Rainbowz artwork.`],

    ["ARTISTIC MOVE PALE ALE", `Lucy & Yak's pink aesthetic-inspired beer.`],

    ["LIMITED EDITION PORTER", `It's limited edition. The porter is carefully brewed with coffee undertones.`],

    ["STYLISH DUNGAREES DOUBLE IPA", `Feel stylish when drinking and wearing Lucy & Yak's latest dungree collection.`]
  ];

  //change beer summary in index page
  function changeText() {
    console.log("changed beer content")
    let currentBeerName = this.className.split(" ")[1];
    let newSource = currentBeerName.charAt(0).toUpperCase() + currentBeerName.slice(1);
    beerName.textContent = `${beerData[this.dataset.offset][0]}`;
    beerSum.textContent = `${beerData[this.dataset.offset][1]}`;
  }

  function showBeerDes(event){
    console.log("show beer description");
    event.preventDefault();
    desInfo2.classList.remove("desArtwork");
    desInfo.classList.add("desContent");

    beerImg2.classList.remove("canArt");
    beerImg2.style.display = "none";

    beerImg1.classList.add("canModel");
    beerImg1.style.display = "flex";
  }

  function showBeerArt(event){
    event.preventDefault();
    console.log("show artwork");
    desInfo.classList.remove("desContent");
    desInfo2.classList.add("desArtwork");
    //change can image into can artwork
    beerImg1.classList.remove("canModel");
    beerImg1.style.display = "none";
    beerImg2.classList.add("canArt");
    beerImg2.style.display = "flex";
  }

  //trigger functions
  beerButtons.forEach(button => button.addEventListener("click", changeText));
  desButton.addEventListener("click", showBeerDes);
  artButton.addEventListener("click", showBeerArt);
})();
