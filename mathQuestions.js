
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function ask_math_question() {
    document.getElementById("answer_question").style.display = "none"
    document.getElementById("math_question").style.display = "block"
    let a = getRandomInt(10)
    let b = getRandomInt(10)
    let operator = getOperator(getRandomInt(2))
    let answer = getAnswer(a, b, operator)
    document.getElementById("correct_math_answer").value = answer
    document.getElementById("math_label").innerText = build_question(a, b, operator)
}

function build_question(a, b, operator) {
    return a + " " + operator + " " + b + " = "
}

function getOperator(num) {
    if (num === 0) {
        return "+"
    }

    if (num === 1) {
        return "-"
    }
}

function getAnswer(a, b, operator) {
    if (operator === "+") {
        return a + b
    }

    if (operator === "-") {
        return a - b
    }
}