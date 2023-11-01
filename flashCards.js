function fetchJSON() {
    return fetch("questions.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${"questions.json"}`);
            }
            return response.json();
        });
}

function askQuestion(data) {
    for (key in data) {
        let questions = data[key]
        for (question in questions) {
            let items = questions[question]

            // console.log(items["Question"])
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
    }
}

function submit_answer() {
    let formElement = this.document.getElementById("answer_question")
    for (let answer in formElement) {
        if(formElement[answer].checked) {
            document.getElementById("user_answer").innerText = formElement[answer].value
        }
    }

}

// Usage
const url = '"questions.json"'; // Replace with your JSON file URL
fetchJSON(url)
    .then(data => {
        askQuestion(data);
    })
    .catch(error => {
        console.error(error);
    });
