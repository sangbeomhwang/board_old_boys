console.log("hi");

function closeAndSendValue() {
  let childId = document.getElementById("chlidId").ariaValueMax;
  window.opener.document.getElementById("parentID").value = childId;
  window.close();
}
