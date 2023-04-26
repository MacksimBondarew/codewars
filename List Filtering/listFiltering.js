function filter_list(l) {
    return l.filter((number) => Number.isInteger(number));
}
filter_list([1, 2, "a", "b"]);
