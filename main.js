function muestra_oculta(id) {
    let div = document.getElementByuId(id);
    if (div.style.display == "none") {
        div.style.display = 'flex';
    }
    else{
        div.style.display = "none";
    }
}
