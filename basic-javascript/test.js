function organizeItems(items) {
  let result = {};
  for (i = 0; i < items.length; i++) {
    let item = items[i];
    for (key in item) {
      if (key === "category") {
        if (!result[item[key]]) {
          result[item[key]] = [];
        }
        if (result[item[key]]) {
          result[item[key]].push(
            item.onSale ? `${item.itemName}($)` : `${item.itemName}`
          );
        }
      }
    }
  }

  return result;
}

var itemData = [
  {
    category: "fruit",
    itemName: "apple",
    onSale: false,
  },
  {
    category: "canned",
    itemName: "beans",
    onSale: false,
  },
  {
    category: "canned",
    itemName: "corn",
    onSale: true,
  },
  {
    category: "frozen",
    itemName: "pizza",
    onSale: false,
  },
  {
    category: "fruit",
    itemName: "melon",
    onSale: true,
  },
  {
    category: "canned",
    itemName: "soup",
    onSale: false,
  },
];

organizeItems(itemData);
