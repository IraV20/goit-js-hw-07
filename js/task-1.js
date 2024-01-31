const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoriesTitle = item.querySelector("h2");
  console.log(`Category : ${categoriesTitle.textContent}`);
  const categoriesListItem = item.querySelectorAll("li");
  console.log(`Elements: ${categoriesListItem.length}`);
  const listItems = item.querySelectorAll("ul li");
  listItems.forEach((item) => {
    item.style.border = "1px solid #808080";
    item.style.borderRadius = "4px";
    item.style.width = "360px";
    item.style.height = "40px";
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.paddingLeft = "16px";
    item.style.paddingTop = "8px";
    if (!item.isEqualNode(listItems[listItems.length - 1])) {
      item.style.marginBottom = "8px";
    }
  });
});
