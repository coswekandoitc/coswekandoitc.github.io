const CelticTileLocation = "media/celtic border.svg";

function CelticBorderScroll() {
  if (window.innerWidth < 622) {
    return;
  }

  let borders = [...document.getElementsByClassName("celtic-border")];
  let borderContainer = [
    ...document.getElementsByClassName("border-container"),
  ];
  const footer = document.getElementById("footer");
  const footerY = footer.getBoundingClientRect().bottom + window.scrollY;

  borderContainer.forEach((bc) => {
    bc.style.height = `${footerY}px`;
  });

  borders.forEach((border) => {
    for (let i = 1; i <= footerY / 50; i++) {
      let celticTile = document.createElement("img");
      celticTile.src = CelticTileLocation;
      celticTile.className = "celtic-tile";
      celticTile.style.top = `${i * 270}px`;
      celticTile.alt = "";
      border.appendChild(celticTile);
    }
  });
}

window.onload = CelticBorderScroll;
