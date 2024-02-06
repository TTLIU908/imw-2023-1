document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");
    
    const imageUrls = [
        "./images/image1.jpg",
        "./images/image2.jpg",
        "./images/image3.jpg",
        "./images/image4.jpg"
    ];

    imageUrls.forEach((url, index) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        const img = document.createElement("img");
        img.src = url;
        img.alt = `Image ${index + 1}`;
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.textContent = `Image ${index + 1}`;
        gridItem.appendChild(img);
        gridItem.appendChild(overlay);
        gridContainer.appendChild(gridItem);
    });

    const overlays = document.querySelectorAll(".overlay");
    overlays.forEach((overlay) => {
        overlay.addEventListener("click", function () {
            alert(this.textContent);
        });
    });
});
