const questions = new Promise((resolve, reject) => {
fetch('/questions.json')
    .then(respond => {
        resolve(respond.json())
    }).catch(err => {
        reject(err)
 })
})


function askQuestions() {
    console.log(questions)
    console.log(questions[0])
}

