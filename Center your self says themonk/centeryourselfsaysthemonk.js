function center(strng, width, fill = " ") {
    if (strng.length >= width) {
        return strng;
    }
    let diff = width - strng.length;
    let right_pad = Math.floor(diff / 2);
    let left_pad = diff - right_pad;
    return fill.repeat(left_pad) + strng + fill.repeat(right_pad);
}
center("abc", 10, "_");
