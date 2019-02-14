const valentineRudy = {
    id: `valentine-1`,
    name: `Rudy`,
    message: `It'd be rude not to say Happy Valentine's Day!`
};
const valentinePom = {
    id: `valentine-2`,
    name: `Pom`,
    message: `You da POM! Happy Valentine's Day!`
};
const valentineSchmitty = {
    id: `valentine-3`,
    name: `Schmitty`,
    message: `We're schmitten with you, our Valentine!`
};

let valentineArray = [valentineRudy, valentinePom, valentineSchmitty];

function setHTMLValentinesName(valentine) {
    let valentineHtml = document.getElementById(`${valentine.id}--name`);
    valentineHtml.innerHTML=valentine.name
}
//setHTMLValentinesName(valentineRudy);

function setHTMLValentinesMessage(valentine) {
    let valentineHtml = document.getElementById(`${valentine.id}--message`);
    valentineHtml.innerHTML=valentine.message
}
//setHTMLValentinesMessage(valentineRudy);

function processValentines(){
    let n = 0;
    while(n<valentineArray.length) 
    {
    let valentine = valentineArray[n];
    setHTMLValentinesMessage(valentine);
    setHTMLValentinesName(valentine);
    n++;
    } 
}
processValentines();








// Set up function setHTMLValentinesName here


// Set up function setHTMLValentinesMessage here

// Set up function processValentines here

// Call process Valentines here