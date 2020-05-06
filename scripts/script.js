function addImage(s, c) {
    var id = 1;
    var fig = document.createElement('figure');
    console.log('initialfig: '+fig)
    var figId = document.createAttribute("class");
    console.log('initialfigId: '+figId)
    figId.value = "THISISTHEID";
    fig.setAttributeNode(figId)
    document.body.appendChild(fig);
    console.log('finalfig: '+fig);
}