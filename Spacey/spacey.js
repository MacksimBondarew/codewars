function spacey(array) {
    return array.map((word, index) => index > 0 ? array.slice(0, index).join("") + word : word);
}
spacey(['kevin', 'has','no','space'])