import { utilService } from "./util.service.js";

const SHOPPINGLIST = "SHOPPINGLIST";

function getItems() {
    let shopingList = utilService.loadFromSession(SHOPPINGLIST);
    if (!shopingList) {
        shopingList = _createShoppingList();
        utilService.storeToSession(SHOPPINGLIST, shopingList);
    }
    return Promise.resolve(shopingList);
}

function remove(productId) {
    let shopingList = utilService.loadFromSession(SHOPPINGLIST);
    const idx = shopingList.findIndex((product) => product.id === productId);
    shopingList.splice(idx, 1);
    utilService.storeToSession(SHOPPINGLIST, shopingList);
    return shopingList;
}

function add(newProduct) {
    const savedProduct = {...newProduct };
    let shopingList = utilService.loadFromSession(SHOPPINGLIST);
    savedProduct.price = Number(savedProduct.price);
    savedProduct.id = utilService.makeId();
    savedProduct.isDone = false;
    shopingList.push(savedProduct);

    utilService.storeToSession(SHOPPINGLIST, shopingList);
    return savedProduct;
}

function getProductById(id) {
    let shopingList = utilService.loadFromSession(SHOPPINGLIST);
    const product = shopingList.find((product) => product.id === id);
    return product;
}

function markAsDone(productId) {
    let shopingList = utilService.loadFromSession(SHOPPINGLIST);
    let product = shopingList.find((currProduct) => currProduct.id === productId);
    product.isDone = !product.isDone;
    utilService.storeToSession(SHOPPINGLIST, shopingList);
}

function _createShoppingList() {
    let shoppingList = utilService.loadFromSession(SHOPPINGLIST);
    if (!shoppingList || shoppingList.length === 0) {
        shoppingList = [{
                id: utilService.makeId(),
                name: "Tomatos",
                isDone: true,
                price: 5,
                desc: "The tomato is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.",
            },
            {
                id: utilService.makeId(),
                name: "Cucumbers",
                isDone: false,
                price: 3,
                desc: "The cucumber is a member of the Cucurbitaceae family. Other members of the family include squash and different kinds of melon, including bitter melon. Cucumbers provide various nutrients but are low in calories, fat, cholesterol, and sodium.",
            },
            {
                id: utilService.makeId(),
                name: "Bread",
                isDone: false,
                price: 10,
                desc: "Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture.",
            },
            {
                id: utilService.makeId(),
                name: "Grapes",
                isDone: false,
                price: 22,
                desc: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes, used for making wine, jam, grape juice, jelly, grape seed extract, vinegar, and grape seed oil, or dried as raisins, currants and sultanas. Grapes are a non-climacteric type of fruit, generally occurring in clusters.",
            },
        ];
        utilService.storeToSession(SHOPPINGLIST, shoppingList);
    }
    return shoppingList;
}

export const shoppinglistService = {
    getItems,
    remove,
    add,
    markAsDone,
    getProductById,
};