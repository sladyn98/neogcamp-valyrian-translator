var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


function constructUrl(text) {
  return  'https://api.funtranslations.com/translate/valyrian.json' + "?" + "text=" + text
}

function callBackErrorHandler() {
   console.log("Something went wrong with the api call")
   alert("Sorry, something went wrong with the api call")
}

// Button event listener
btnTranslate.addEventListener("click", () => {
   let inputText = textArea.value 
   console.log("Input text is " + inputText)
   fetch(constructUrl(inputText))
   .then(response => response.json())
   .then(json => outputDiv.innerText = json.contents.translated)
   .catch(callBackErrorHandler)
})

