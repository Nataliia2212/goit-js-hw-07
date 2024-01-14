const listCategories = document.querySelectorAll('.item');
// console.log(listCategories);

const numbersOfCategories = listCategories.length

// console.log(numbersOfCategories)

console.log(`Number of categories: ${numbersOfCategories}`)

listCategories.forEach(item => {
    // console.log(item)

    const titleCategories = item.querySelector('h2');
//    console.log(titleCategories.textContent)
    // titleCategories.textContent
    console.log(`Category: ${titleCategories.textContent}`)

    const listCategoriesItems = item.querySelectorAll('li');
    // console.log(listCategoriesItems)

    const numbersOfCategoriesItems = listCategoriesItems.length;
    console.log(`Elements: ${numbersOfCategoriesItems}`)
})