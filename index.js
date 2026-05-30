let special_texts = document.querySelectorAll(".special-text");

const special_text_mapping = {
    "name-reveal" : "Vansh Vardhan Verma"
}

for(let div of special_texts){
    let name = special_text_mapping[div.id];
    let old_name = div.innerHTML;
    div.addEventListener("mouseover", () => {
        div.innerHTML = `${name}`;
    })
    div.addEventListener("mouseleave", () => {
        div.innerHTML = `${old_name}`;
    })
}
