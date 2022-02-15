function sumDigits(value) {
    if (value == 11 || value == 22) {
        return value
    } else if (value < 10) {
        return value
    } else {
        return (value - 1) % 9 + 1;
    }
}

function sumDigitsDate(value) {
    return (value - 1) % 9 + 1;
}

function convertString(value) {
    const chuoiDaChuyen = value.normalize("NFD").replace(/[\u0300-\u036ff]/g, "")
        .replace(/đ/g, "d").replace(/Đ/g, "D").trim().toLowerCase()
    return chuoiDaChuyen
}

function confirmText(value) {
    const compare = "aeoui"
    for (let i = 0; i < compare.length; i++) {
        if (value == compare[i]) {
            return true
        }
    }
    return false
}

function confirmTextY(before, after) {
    const compare = "aeoui"
    for (let i = 0; i < compare.length; i++) {
        if (before == compare[i] || after == compare[i]) {
            return false
        } else if (!before == compare[i] && !after == compare[i]) {
            return true
        }
    }
}
const pytago = {
    1: "ajs",
    2: "bkt",
    3: "clu",
    4: "dmv",
    5: "enw",
    6: "fox",
    7: "gpy",
    8: "hqz",
    9: "ir"
}

export { sumDigits,sumDigitsDate,convertString, confirmText, confirmTextY, pytago }