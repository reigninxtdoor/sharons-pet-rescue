const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,

    sleep: function () {
      console.log(`${this.name} needs a nap.Zzz...`), (this.isTired = 1);
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log(`Yay!${this.name} loves to play!`);
        this.isTired += 1;
      }
      return pet;
    },
  };
};
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const cleo = createPet("Cleo", "rat");
const baxter = createPet("Baxter", "hamster");
const francine = createPet("Francine", "turtle");
//console.log(sora, clover, cleo, baxter, francine);
//clover.sleep();
//baxter.play();
clover.isTired = 8;
francine.isTired = 9;
const allpets = ["sora", "clover", "cleo", "baxter", "francine"];
const showPets = function (petArray) {
  for (let pet of petArray) {
    let status = "ready to play";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
  }
  pets.append.li;

  pets.innerHTML = "";
};
statusButton.addEventListener("click", function () {
  showPets(allpets);
});
