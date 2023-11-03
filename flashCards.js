function askQuestion() {
    let questionList = getQuestionsList()
    let index =parseInt(document.getElementById("question_number").value)
    let questions = questionList["questions"]
        let items = questions[index]

        document.getElementById("Question").innerText = items["Question"]

        document.getElementById("a_answer_label").innerText = items["a_answer"]
        document.getElementById("a_answer_radio").value = "a"

        document.getElementById("b_answer_label").innerText = items["b_answer"]
        document.getElementById("b_answer_radio").value = "b"

        document.getElementById("c_answer_label").innerText = items["c_answer"]
        document.getElementById("c_answer_radio").value = "c"

        document.getElementById("d_answer_label").innerText = items["d_answer"]
        document.getElementById("d_answer_radio").value = "d"
}

function submit_answer() {
    let questionMap = getQuestionsList()
    let questionNumber = parseInt(document.getElementById("question_number").value)

    let questionList = questionMap["questions"]
    let question = questionList[questionNumber]
    let correct_answer = question["correct_answer"]
    let user_answer = "f"
    let total_questions = questionList.length

    let formElement = this.document.getElementById("answer_question")
    for (let answer in formElement) {
        if (formElement[answer].checked === true) {
            user_answer = formElement[answer].value
            console.log(user_answer)
            formElement[answer].checked = false
            let divAnswer = document.getElementById("result")
            let total_correct = parseInt(document.getElementById("total_correct").value) + 1
            document.getElementById("total_correct").value = total_correct
            if (user_answer === correct_answer) {
                divAnswer.innerText = "CORRECT"
                document.getElementById("total_correct_display").innerText = "(" + total_correct + " / " + total_questions + ")"
            } else {
                divAnswer.innerText = "WRONG"
            }
            break;
        }
    }



    document.getElementById("question_number").value = `${questionNumber + 1}`
    askQuestion()
}
