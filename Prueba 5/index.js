const inventoryList = () => {
    let inventory = []
    return {
        add: function (name) {
            if (!inventory.includes(name)) {
                inventory.push(name)
            }
        },
        remove: function (name) {
            if (inventory.includes(name)) {
                inventory = inventory.filter(e => e !== name)
            }
        },
        getList: function () {
            if (inventory.length) {
                console.log(inventory)
            }else{
                console.log('Sin elementos')
            }
        }
    }
}

/* const inventory = inventoryList()

inventory.add('Ana')
inventory.add('Juan')
inventory.getList()
inventory.remove('Ana')
inventory.getList() */
