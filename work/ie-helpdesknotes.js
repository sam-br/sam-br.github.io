function textToClipboard (text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    changesSaved()
}

function makeTextNote() {

    if (contactname.value.length == 0) {
        alert("Note requires the name of the person you are speaking to!")
        console.log("Didn't copy - name required.")
        document.getElementById('contactname').value = "NAME PLEASE"
        document.getElementById('contactname').select()
        return
    }

    contactname = document.getElementById('contactname')   
    situation = document.getElementById('situation')
    action = document.getElementById('action')
    response = document.getElementById('response')
    safeaccess = document.getElementById('safeaccess')
    accestype = document.getElementById('accesstype')
    openmf = document.getElementById('mf')
    opensat = document.getElementById('sat')
    opensun = document.getElementById('sun')
    appointment = document.getElementById('appointment')


    console.log(accesstype.value.slice(0,5))
    if (accesstype.value.slice(0,5) == "Appoi") {
        appointmentstring = "Appointment: " + appointment.value
    } else {
        appointmentstring = ""
    }

    fulltext = "Open MF " + openmf.value + " Sat " + opensat.value + " Sun " + opensun.value + " | " + accesstype.value + "  //  Spoke to " + contactname.value + ", SITUATION: " + situation.value + " ACTION: " + action.value + " RESPONSE: " + response.value + "  //  Safe access needed: " + safeaccess.value + " " + appointmentstring

    textToClipboard(fulltext)
    console.log(fulltext)

    document.getElementById('finishednote').innerHTML = fulltext
}

function changesSaved() {
    console.log("Text note copied to clipboard")
}
function changesNotSaved() {
    console.log("Changes have been made that have not been copied to the clipboard")
}

function listenForChanges() {
    //function to add event listeners for when something is changed
    console.log("Started listening for changes")
}

function stopListeningForChanges() {
    //function to remove event listeners once something has been changed
    console.log("Stopped listening for changes")
}

console.log("helpdesknotes.js loaded :)")
document.getElementById("copy").addEventListener('click',makeTextNote)


function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return "";
}

document.getElementById('case').innerHTML = getQueryVariable('case')
document.getElementById('product').innerHTML = getQueryVariable('product')
document.getElementById('customer').innerHTML = getQueryVariable('customer')