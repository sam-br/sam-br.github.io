let imageCounter = 0

const imageArray = [
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'},
    {source:'a00-l',orientation:'l'}
]

function addImage(obj) {
    source = 'images/' + obj.source + '.jpg'
    console.log(source)
    orientation = obj.source.slice(-1)
    console.log(orientation)
    counter = imageCounter.toString()
    console.log(counter)
    // get gallery
    var gallery = document.getElementById('gallery')
    // create figure node
    var figure = document.createElement('figure')
    // populate figure class and id
    figure.setAttribute('class','classname')
    figure.setAttribute('class',orientation)
    figure.setAttribute('id',counter)
    // create img node
    var image = document.createElement('img')
    // populate img
    image.setAttribute('src',source)
    image.setAttribute('loading','lazy')
    image.setAttribute('id','imageid')
    // append img as child of figure
    figure.appendChild(image)
    // append figure to document as insertadjacentelement beforeend
    gallery.appendChild(figure)
    imageCounter ++
}

function addImages() {
    imageArray.forEach(addImage)
}
