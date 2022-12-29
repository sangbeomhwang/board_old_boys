console.log("hi")

function closeAndSendValue(){
    console.log(11)
    let childId = document.getElementById('chlidId').ariaValueMax;
    window.opener.document.getElementById('parentID').value = childId
    window.close()
}