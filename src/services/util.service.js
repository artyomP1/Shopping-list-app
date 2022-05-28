function loadFromSession(key) {
    const json = sessionStorage.getItem(key);
    const value = JSON.parse(json)
    return value;
}

function storeToSession(key, value) {
    const json = JSON.stringify(value);
    sessionStorage.setItem(key, json)
}

function makeId(length = 3) {
    let txt = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

export const utilService = {
    loadFromSession,
    storeToSession,
    makeId
}