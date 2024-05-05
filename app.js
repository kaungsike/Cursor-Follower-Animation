const cursor = document.querySelector(".cursor");

// following cursor on mousemove

document.addEventListener("mousemove",(e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
})

// cursor effect on mouseout
document.addEventListener("mouseout",() => {
    cursor.style.display = "none";
})
