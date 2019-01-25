window.onload =function () {
    imgLocation("container","box")
}

function imgLocation(parent, content) {
    //将parent下多有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    // console.log(ccontent);
    var imgWidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText = "width:"+imgWidth*cols+"px";
}

function getChildElement(parent,content) {
    var contentArr = [];
    var allContent = parent.getElementsByClassName("box");
    for (var i = 0;i<allContent.length;i++){
        if(allContent[i].className ==content){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}