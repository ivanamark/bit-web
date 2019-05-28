const say = text => {


    speechSynthesis.speak(new SpeechSynthesisUtterance(text));


}
document.querySelector('button').addEventListener('click', () => {
    say(`Talk to me Ivana`)
})



const getVoices = () => {
    return new Promise(resolve => {

        let voices = SpeechSynthesis.getVoices()
        
        if(voices.length){
            resolve(voices)
            return
        }
        
        speechSynthesis.onvoiceschanged = () => {
            voices = SpeechSynthesis.getVoices()
            resolve(voices)
        }
        
    })
    
}



  
  const lista = async()=>{
    (await  speechSynthesis.getVoices()).forEach(voice=>{
        const li=document.createElement('li')
        li.appendChild(document.createTextNode(`${voice.name} and ${voice.lang}`))
        document.querySelector('ul').appendChild(li)
    })
  }
  speechSynthesis.onvoiceschanged = lista
  console.log(speechSynthesis.getVoices());
  
  
  