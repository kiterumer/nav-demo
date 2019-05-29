 
    var hashA = init()
    var keys = hashA['keys']
    var hash = hashA['hash']

    generateKeyboard(keys,hash)

    listenToUser(hash)

    // 生成键盘函数
    function generateKeyboard(keys,hash){
        for(var index = 0;index < keys['length'];index = index + 1){
            var div = tag('div');
            div.className = 'row';
            main.appendChild(div);

            var row = keys[index];
            for(var index2 = 0;index2 < row['length']; index2 = index2 + 1){
                var span = createSpan(row[index2]);
                var button = createButton(row[index2]);
                var img = createImage(hash[row[index2]]);

                var kbd = tag('kbd');
                kbd.className = 'key';

                kbd.appendChild(span)
                kbd.appendChild(img)
                kbd.appendChild(button)

                div.appendChild(kbd)
            }
        }
    }
    // 生成标签函数
    function tag(tagName){
        return document.createElement(tagName)
    }
    // 初始化函数
    function init(){
        var keys = {
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        'length': 3 
    }
        var hash = {  
            q:'ruanyifeng.com',
            z:'zhihu.com',
            b:'bilibili.com',
            m:'imooc.com',
            a:'apple.com',
            v:'cn.vuejs.org',
            d:'douban.com',
            g:'github.com',
            j:'jianshu.com',
            x:'v2ex.com',
            l:'lagou.com',
            n:'developer.mozilla.org/zh-CN/',
            s:'segmentfault.com',
            t:'css-tricks.com',
            w:'www.webpackjs.com',
            h:'hexo.io',
            o:'open.163.com',
            y:'news.ycombinator.com',
            k:'juejin.im',
            f:'stackoverflow.com',
            c:'csdn.net',
            u:'kanzhun.com',
            i:'bing.com',
            e:'qdaily.com',
            r:'react.docschina.org',
            p:'map.baidu.com'
    }
        // 取出localStorage中的zzz对应的hash
        var hashInLocalStorage = getFromLocalStorage('zzz')
            if(hashInLocalStorage){
                hash = hashInLocalStorage
            }
            return {
                "keys": keys,
                "hash": hash
            }
    }


    // 获取本地缓存数据
    function getFromLocalStorage(name){
        return JSON.parse(localStorage.getItem(name)||'null')
    }
    // 生成span函数
    function createSpan(textContent){
        var span = tag('span')
        span.textContent = textContent
        span.className = "text"
        return span
    }
    // 生成编辑按钮函数
    function createButton(id){
        var button = tag('button')
        button.textContent = 'edit'
        button.id = id
        button.onclick = function(abc){
            var button2 = abc['target']
            var img2 = button2.previousSibling
            var key = button2['id']
            var x = prompt('给我一个网址,还你一个世界')
            hash[key] = x
            img2.src = 'https://'+ x + '/favicon.ico'
            img2.onerror = function(xxx){
                xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
				}
            localStorage.setItem('zzz',JSON.stringify(hash))    
            }
            return button
        }
    // 生成小图标函数
    function createImage(domain){
        var img = tag('img')
        if(domain){
            img.src = 'https://' + domain + '/favicon.ico'
        }else{
            img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        img.onerror = function(xxx){
            xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        return img
    }
    // 监听用户键盘函数
    function listenToUser(hash){
        document.onkeypress = function(abc){
            
            var key = abc['key']
            var website = hash[key]
            console.log(abc)
            console.log(website)
            console.log(key)
            window.open('https://' + website,'_blank')
        }

        main.addEventListener('click',function(e){
            var key = e.target.innerText.toLowerCase()
            var website = hash[key]
            console.log(key)
            console.log(e.target)
            window.open('https://' + website,'_blank')
        })
    }
    
   