



//初始化数据
var hashA = init();
var keys = hashA['keys'];
var hash = hashA['hash'];

generateKeyboard(keys, hash);
//监听键盘事件
listenToUser(hash);

function gtFromLocalStorage(name){

    return JSON.parse(localStorage.getItem(name) || 'null');
}

/*创建页面元素*/
function tag(tagName){
    return document.createElement(tagName);
}


//创建span标签
function createSpan(text){
    var span = tag('span');
    span.className = 'text';
    let str  = text.split(' ');
    span.textContent =str[0];
    return span;

}

//创建span标签
function createSpan2(text){
    var span = tag('span');
    span.className = 'text2';
    let str  = text.split(' ');
    span.textContent = str[1];
    return span;

}

//创建button标签
function createButton(id){
    var btn = tag('button');
    btn.textContent = "edit";
    let btnId = id.split(' ')[0]

    if( btnId === '1' ||  btnId === '2'||  btnId === '3' ||  btnId === '4'
        ||  btnId === '5' ||  btnId === '6' ||  btnId === '7' ||  btnId === '8' ||  btnId === '9' ||  btnId === '0'){

        btn.id = 'Digit'+ btnId;
    }
    else{ btn.id = btnId;}


    // let uuu = btnId.charCodeAt()

  /*  if( uuu>=65&&uuu<=97 ){
        btn.id = btnId;
    }else if(){
        btn.id = btnId;
    }*/


    btn.onclick = function (ccc) {


        var key = ccc['target']['id'];
        if(key === 'Digit1' || key === 'Digit2' || key === 'Digit3' || key === 'Digit4'
            || key === 'Digit5' || key === 'Digit6' || key === 'Digit7' || key === 'Digit8'
            || key === 'Digit9' || key === 'Digit0'){
        let keys = key.split('');
          var  newKey = keys.slice(5,6)[0]
}
else{
            newKey = key;
        }

        var y = prompt('输入一个新网址');
        var btn2 = ccc['target'];
        var img2 = btn2.previousSibling;

        hash[newKey] = y;
        img2.src = 'http://' + y + '/favicon.ico'
        img2.onerror = function (e) {
            e.target.src = '';

        }
        localStorage.setItem('zzz', JSON.stringify(hash));
    }
    return btn;
}

//创建img标签
function createImg(domain){
    var img1 = tag("img");
    if (domain) {
        img1.src = 'http://' + domain + '/favicon.ico'
    }
    else {
        img1.src = '';
    }
    img1.onerror = function (e) {
        e.target.src = '';

    }
    return img1;
}



function init(){
    var keys={
        '0':{0:'` ~',1:'1 !',2:'2 @',3:'3 #',4:'4 $',5:'5 %',6:'6 ^',7:'7 &',8:'8 *',
            9:'9 (',10:'0 )',11:'- ~',12:'= +',13:'delete',length:14},
        '1': {0:'tab',1:'Q',2:'W',3:'E',4:'R',5:'T',6:'Y',7:'U',8:'I',9:'O',10:'P',
            11:'[ {',12:'] }',13:'\\\ I',length:14},
        '2': {0:'copsLock',1:'A',2:'S',3:'D',4:'F',5:'G',6:'H',7:'J',8:'K',9:'L',10:'; :',
            11:'\' \"',12:'return enter',length:13},
        '3': {0:'shift',1:'Z',2:'X',3:'C',4:'V',5:'B',6:'N',7:'M',8:', <',9:'. >',10:'/ ?',11:'shift',length:12},
        '4':{0:'fn',1:'control',2:'alt',3:'⌘ command',4:'Space',5:'command ⌘',6:'alt',7:'↑',8:'←',9:'↓',10:'→',length:11},
        'length': 5
    }



    var  hash={
        'Q': 'qq.com', 'W': 'weibo.com',  'R': 'renren.com',
        'I': 'iqiyi.com', 'O': 'opera.com', 'P': undefined,
        'A': 'acfun.tv', 'S': 'sohu.com', 'Z': 'zhihu.com', 'M': 'www.mcdonalds.com.cn'

    }

    //创建本地hash  用于hash的变更
    var hashInLocalStorage = gtFromLocalStorage('zzz');
    if(hashInLocalStorage)
    {
        hash = hashInLocalStorage;
    }
    return {
        "keys": keys,
        "hash": hash
    }
}




function  generateKeyboard(keys,hash){
    for( var index=0;index<keys.length;index++) {

        var div1 = tag('div');
        div1.className = 'row';
        var mainBox = document.getElementById('main-box');

        mainBox.appendChild(div1);

        var row=keys[index];
        for (var index2 = 0; index2 < row.length; index2++) {

            var span1 = createSpan(row[index2]);

            var span2 = createSpan2(row[index2]);

            var btn = createButton(row[index2]);

            var img1 = createImg(hash[row[index2]]);


            var kbd1 = tag('li');
            kbd1.className = 'kbb';
            let kbdId =row[index2].split(' ')[0];
            if( kbdId === '1' ||  kbdId === '2'||  kbdId === '3' ||  kbdId === '4'
                ||  kbdId === '5' || kbdId === '6' ||  kbdId === '7' ||  kbdId === '8' ||  kbdId === '9' ||  kbdId === '0'
                  ){
                kbd1.id = 'Digit' + kbdId;
            }else if(kbdId === '⌘'){
                kbd1.id = 'commandKey';
            }
            else if(kbdId === '→'){
                kbd1.id = 'right';
            }
            else if(kbdId === '←'){
                kbd1.id = 'left';
            }
            else if(kbdId === '↑'){
                kbd1.id = 'up';
            }
            else if(kbdId === '↓'){
                kbd1.id = 'down';
            }
            else if(kbdId === '`'){
                kbd1.id = 'Backquote';
            }
            else if( kbdId === ','){
                kbd1.id = 'Comma';
            }
            else if( kbdId === '.'){
                kbd1.id = 'Period';
            }
            else if(  kbdId === '\''){
                kbd1.id = 'Quote';
            }
            else if(  kbdId === ';'){
                kbd1.id = 'Semicolon';
            }
            else if(kbdId === '['){
                kbd1.id = 'BracketLeft';
            }
            else if(kbdId === ']'){
                kbd1.id = 'BracketRight';
            }
            else if( kbdId === '\\'){
                kbd1.id = 'Backslash';
            }
            else if( kbdId === '/'){
                kbd1.id = 'Slash';

            }




                else{
                kbd1.id =  kbdId;
            }

            kbd1.appendChild(span1);
            kbd1.appendChild(span2);
            kbd1.appendChild(img1);
            kbd1.appendChild(btn);
            div1.appendChild(kbd1);


        }




    }
}




/*监听键盘事件，跳转到响应的网站*/
function listenToUser(hash){
    document.onkeypress = function(aaa){
        console.log(aaa.code)
      if(aaa.code !== 'Space' && aaa.code !== 'Enter'   && aaa.code !== 'Backquote'
          && aaa.code !== 'Minus'  && aaa.code !== 'Equal'   && aaa.code !== 'BracketLeft'
          && aaa.code !== 'BracketRight' && aaa.code !== 'Backslash' && aaa.code !== 'Comma'
          && aaa.code !== 'Period'  && aaa.code !== 'Slash'  && aaa.code !== 'Semicolon'
          && aaa.code !== 'Quote'){

          let  codeKey = aaa['key'];

           let xxx = codeKey.toUpperCase()

          let src=hash[xxx];

          window.open('http://'+src ,'_blank')
      }







    }
}





