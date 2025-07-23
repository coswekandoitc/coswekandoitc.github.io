function progressiveImageLoad(fullImage, placeholderId) {
  let placeholder = document.getElementById(placeholderId);

  fullImage.style.height = "100%";
  fullImage.style.opacity = "1";
  placeholder.remove();
}
