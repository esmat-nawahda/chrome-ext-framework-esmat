//Dispatcher real example
//dispach using events: click, mouseover, mouuseout ....
function dispatcher(document_root) {
    var html = '',
        node = document_root.firstChild;

    var imgs = document_root.getElementsByTagName('img');
    
    // console.log(imgs);

    for(var i=0;i<imgs.length;i++){
        var img = imgs[i];
        img.addEventListener('mouseover', function(){hover(this)}, false);
        img.addEventListener('mouseout', function(){out(this)}, false);

      
    }
    // return html;

    // console.log(getCookie("myImgs"));
    // return getCookie("myImgs");

}


function hover(img){
    var width = img.width > 400 ? 400 : img.width;
    var height = img.height > 400 ? 400 : img.height;
    var imgHTML = '<img src="' + img.src +'" width="' + width + '" height="' + height + '">';
    console.log("Hover");
    return chrome.runtime.sendMessage({
        action: "hover",
        source: imgHTML
    });
}

function out(img){
    console.log("Out");
    return chrome.runtime.sendMessage({
        action: "out",
        source: "Bye"
    });
}




// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1);
//         if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
//     }
//     return "";
// }

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+d.toUTCString();
//     var oldCookie = "";
//     if(getCookie(cname).length > 0) oldCookie = getCookie(cname);
    
//     if(oldCookie.indexOf(cvalue) == -1){
//         oldCookie += cvalue;
//         document.cookie = cname + "=" + oldCookie + "; " + expires;
//     }
// }


// function buildAd(img){
//         var _parent = img.parentElement;
//         var pWidth = _parent.offsetWidth;
//         var pHeight = _parent.offsetHeight;
        
        

//         var div = buildBanner(_parent)

//         //Add Events
//         img.addEventListener('mouseover', function(){show(div)}, false);
//         img.addEventListener('mouseout', function(){hide(div)}, false);

//         div.addEventListener('mouseover', function(){show(this)}, false);
//         div.addEventListener('mouseout', function(){hide(this)}, false);

//                                        // Append the text to <button>
//         _parent.appendChild(div);
// }

// function show(target){
//         target.style.display = 'block';
//         var img = createImg("chrome-extension://bhemccekbifedbdlbkglabkahihpflmk/images/1.jpg",target);
//         console.log(img);
//         target.appendChild(img);
// }

// function hide(target){
//         target.style.display = 'none';
// } 



function includeJsFile(jsFilePath){
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);

}


//Most Important call the dispatcher function
chrome.runtime.sendMessage({
    source: dispatcher(document)
});