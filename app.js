let game_container = document.querySelector(".game_container");
let character = document.querySelector(".character");
let block = document.querySelector(".block");
let restart_btn = document.querySelector(".restart_btn");

setInterval(checkDead, 10);

function checkDead() {
  let top_char = parseInt(
    window.getComputedStyle(character, null).getPropertyValue("top")
  );
  let left_block = parseInt(
    window.getComputedStyle(block, null).getPropertyValue("left")
  );

  if (top_char > 175 && left_block < 20) {
    game_container.style.display = "none";
    restart_btn.style.display = "block";
  }
}

game_container.addEventListener("click", clicked);

function clicked() {
  character.classList.add("animate");

  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
}

restart_btn.addEventListener("click", () => {
  restart_btn.style.display = "none";
  game_container.style.display = "flex";
});
