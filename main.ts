function addition () {
    sum = a + b
    return sum
}
let sum = 0
let b = 0
let a = 0
basic.showString("hi")
a = 10
b = 20
basic.forever(function () {
    serial.writeValue("sum", addition())
})
