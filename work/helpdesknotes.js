function textToClipboard (text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    changesSaved()
}

function groupText() {
    contactname = document.getElementById('contactname')
    console.log(contactname.value)
    situation = document.getElementById('situation')
    console.log(situation.value)
    action = document.getElementById('action')
    console.log(action.value)
    response = document.getElementById('response')
    console.log(response.value)
    safeaccess = document.getElementById('safeaccess')
    console.log(safeaccess.value)
    accestype = document.getElementById('accesstype')
    console.log(accesstype.value)
    openmf = document.getElementById('mf')
    console.log(openmf.value)
    opensat = document.getElementById('sat')
    console.log(opensat.value)
    opensun = document.getElementById('sun')

    fulltext = ``

    textToClipboard(fulltext)

    document.getElementById('finishednote').innerHTML = fulltext

}

function changesSaved() {
    console.log(`Text note copied to clipboard`)
}
function changesNotSaved() {
    console.log(`Changes have been made that have not been copied to the clipboard`)
}

function listenForChanges() {
    //function to add event listeners for when something is changed
    console.log(`Started listening for changes`)
}

function stopListeningForChanges() {
    //function to remove event listeners once something has been changed
    console.log(`Stopped listening for changes`)
}

console.log(`helpdesknotes.js loaded :)`)
document.getElementById("copy").addEventListener('click',groupText)

const params = new URLSearchParams(window.location.search)

for (const param of params) {
    console.log(param)
}

document.getElementById('case').innerHTML = params.get('case')
document.getElementById('product').innerHTML = params.get('product')
document.getElementById('customer').innerHTML = params.get('customer')

getParam = params.get('key')