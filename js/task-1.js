const listCategories = document.querySelectorAll('.item');
const numbersOfCategories = listCategories.length

console.log(`Number of categories: ${numbersOfCategories}`)

listCategories.forEach(item => {
    const titleCategories = item.querySelector('h2');
    console.log(`Category: ${titleCategories.textContent}`)

    const listCategoriesItems = item.querySelectorAll('li');
    const numbersOfCategoriesItems = listCategoriesItems.length;
    console.log(`Elements: ${numbersOfCategoriesItems}`)
})