function replaceNth(text, n, oldValue, newValue) {
    if (n <= 0) {
        return text;
    }
    let count = 0;
    const result = text
        .split("")
        .map((item) => {
            if (item === oldValue) {
                count++;
                if (count % n === 0) {
                    return newValue;
                }
            }
            return item;
        })
        .join("");
    return result;
}
replaceNth("Vader said: No, I am your father!", 2, "a", "o");
