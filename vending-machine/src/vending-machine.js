class VendingMachine {
    constructor(machineObj) {
        this.id = machineObj.id;
        this.isBroken = machineObj.isBroken;
        this.snacks = [];
    }
    addSnacks(snack) { 
    if (this.snacks.length === 0) {
        this.snacks.push(snack);
    } else if (this.snacks.length > 0) {    
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].name === snack.name) {
                return `Sorry, that snack is already stocked! Try adding a different snack.`;
            } else {
            this.snacks.push(snack);
            }
        }
    }
    }
    purchaseSnack(snack, payment) {
        var correctChange = 0;   
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].itemsInStock <= 0) {
                return 'Sorry, no items in stock. Try another item.';
            } else if (this.snacks[i].price > payment) {
                return 'Sorry, not enough payment. Please add more money.'
            } else if (this.snacks[i].name === snack && this.snacks[i].price <= payment) {
            correctChange = payment - this.snacks[i].price;    
            this.snacks[i].removeItem();
            return `Success! Here is $${correctChange} back!`   
            }
        }
    }


}
module.exports = VendingMachine;
