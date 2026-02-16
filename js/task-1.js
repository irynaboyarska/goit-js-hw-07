//!==========================================================

const categoriesList = document.querySelector(`#categories`);
const liElems = categoriesList.querySelectorAll(`.item`);
console.log(`Number of categories: ${liElems.length}`);

//!==========================================================

for (const elem of liElems) {
    const categoryTitle = elem.querySelector(`h2`).textContent;
    console.log(`Category: ${categoryTitle}`);

    const numberOfElems = elem.querySelectorAll(`li`);
    console.log(`Elements: ${numberOfElems.length}`);
} 

//!==========================================================