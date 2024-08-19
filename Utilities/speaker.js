export function MySpeaker(text){
    let utterance=new SpeechSynthesisUtterance(text);

    utterance.lang="en-US";
    utterance.pitch=1;
    utterance.rate=1;

    
    window.speechSynthesis.speak(utterance)
}