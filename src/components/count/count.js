import { sumDigits, confirmText, confirmTextY, convertString, pytago, sumDigitsDate } from "./catChuoi";

function countMission(value) {
    const conver = convertString(value)
    let count = 0
    for (let i = 0; i < conver.length; i++) {
        Object.values(pytago).forEach((o, index) => {
            for (let j = 0; j < o.length; j++) {
                if (conver[i] == o[j]) {
                    count += index + 1
                }
            }
        })
    }
    return sumDigits(count)
}

function countMature(value, d, m, y) {
    return sumDigits(countMission(value) + countLife(d, m, y))
}

function countDay(d) {
    return sumDigitsDate(d)
}

function countName(value) {
    return sumDigits(countInner(value) + countInteraction(value))
}

function countLife(d, m, y) {
    return sumDigitsDate(d + m + y)
}

function countAttitude(d, m) {
    return sumDigits(d + m)
}

function countInner(value) {
    let count = 0
    const conver = convertString(value)
    for (let i = 0; i < conver.length; i++) {
        if (conver[i] == "y" && i < conver.length - 1
            && confirmTextY(conver[i - 1], conver[i + 1]) == true) {
            count += 7
        } else if (confirmText(conver[i]) == true) {
            Object.values(pytago).forEach((o, index) => {
                for (let j = 0; j < o.length; j++) {
                    if (conver[i] == o[j]) {
                        count += index + 1
                    }
                }
            })
        }
    }
    return sumDigits(count)
}
function countInteraction(value) {
    const conver = convertString(value)
    let count = 0
    for (let i = 0; i < conver.length; i++) {
        if (conver[i] == "y" && i < conver.length - 1
            && confirmTextY(conver[i - 1], conver[i + 1]) == false) {
            count += 7
        } else if (confirmText(conver[i]) == false) {
            Object.values(pytago).forEach((o, index) => {
                for (let j = 0; j < o.length; j++) {
                    if (conver[i] == o[j]) {
                        count += index + 1
                    }
                }
            })
        }
    }
    return sumDigits(count)
}
function countIntrospective(value) {
    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let count5 = 0
    let count6 = 0
    let count7 = 0
    let count8 = 0
    let count9 = 0
    const conver = convertString(value)
    for (let i = 0; i < conver.length; i++) {
        Object.values(pytago).forEach((p, index) => {
            for (let j = 0; j < p.length; j++) {
                if (conver[i] == p[j]) {
                    if (index == 0) {
                        count1++;
                    } else if (index == 1) {
                        count2++;
                    } else if (index == 2) {
                        count3++;
                    } else if (index == 3) {
                        count4++;
                    } else if (index == 4) {
                        count5++;
                    } else if (index == 5) {
                        count6++;
                    } else if (index == 6) {
                        count7++;
                    } else if (index == 7) {
                        count8++;
                    } else if (index == 8) {
                        count9++;
                    }
                }
            }

        })
    }
    let array = [count1, count2, count3, count4, count5, count6, count7, count8, count9]
    let max = array.reduce(function (accumulator, element) {
        return (accumulator > element) ? accumulator : element
    });
    let retrun = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == max) {
            retrun.push(i + 1)
        }
    }

    return retrun[0]

}

function countYear(d, m, y) {
    let day = sumDigitsDate(d)
    let month = sumDigitsDate(m)
    let year = sumDigitsDate(y)
    return sumDigitsDate(day, month, year)
}

function countTop(d, m, y) {
    let dinh1 = 36 - countLife(d, m, y)
    const i = { dinh1: dinh1, dinh2: dinh1 + 9, dinh3: dinh1 + 9 + 9, dinh4: dinh1 + 9 + 9 + 9 }
    return i
}
function countIndexTop(d, m, y) {
    let dinh1 = countAttitude(d, m)
    let dinh2 = sumDigitsDate(sumDigitsDate(d) + sumDigitsDate(y))
    let dinh3 = sumDigitsDate(dinh1 + dinh2)
    let dinh4 = sumDigitsDate(sumDigitsDate(m) + sumDigitsDate(y))
    const i = { dinh1: dinh1, dinh2: dinh2, dinh3: dinh3, dinh4: dinh4 }
    return i
}

function countNTTT(value) {
    let count = countInner(value) - countInteraction(value)
    if (count < 0) {
        return count * -1
    } else return count
}

function countSMDD(value, d, m, y) {
    let count = countMission(value) - countLife(d, m, y)
    if (count < 0) {
        return count * -1
    } else return count
}

function countMonth(d, m, y, m1) {
    let y1 = countYear(d, m, y)
    return sumDigitsDate(m1 + y1)
}

function countDate(d, m, y, d1) {
    let t1 = countYear(d, m, y)
    return sumDigitsDate(t1 + d1)
}


export { countDate, countMonth, countSMDD, countNTTT, countIndexTop, countTop, countYear, countMature, countMission, countAttitude, countInner, countInteraction, countIntrospective, countDay, countLife, countName }
