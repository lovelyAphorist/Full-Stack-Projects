const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
      console.log(this._meal);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
      console.log(this._price);
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      console.log(`Today's Special is ${this._meal} for ${this._price}`);
    } else {
      console.log("Meal or price was not set correctly!");
    }
  },
};
