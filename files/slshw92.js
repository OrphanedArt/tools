var boysOnPictures = [
    "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10294311_345755878917975_4277876287320306301_n.jpg?oh=1d576b6a62364d84d6f5317b942fc689&oe=5628627D&__gda__=1444769268_d9b1bf36e32f3b1c00d049e39807f7d4", 
    "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-9/1625746_260462657447298_1407338191_n.jpg?oh=1a7ad47707da3499626ec8f8b514bffa&oe=56177356&__gda__=1444096863_7d4fd89f227a4b5c5a6f896a1822266b", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/1618669_260457650781132_716139760_n.jpg?oh=ee8dfe41018b7dc12a8bcc51be6409c8&oe=561EE541", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/1653771_260460840780813_926305946_n.jpg?oh=4ee955ad1b29c47dc6144c92f9dfb5dd&oe=562BDCEA", 
    "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/11979_171856872974544_1738295045_n.jpg?oh=bf2e24863943843b23daf88372e86481&oe=5627DC42&__gda__=1444257788_a46a5c542b06af333f99d9b0867ff92e", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/1238182_214258322067732_1499047489_n.jpg?oh=b4ad8b8daee4717a6cbdeba7e129e736&oe=562F4B7B", 
    "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-9/60587_111294465697452_1212006715_n.jpg?oh=118f0309951c86610613e43b0f89c819&oe=56580EFE&__gda__=1448893360_669966747de2a177d29543c32eccb0b3", 
    "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-9/559381_111294422364123_846817134_n.jpg?oh=7352817f6490abd7822c737934444966&oe=5611BEDB&__gda__=1445516693_c2b53b9637303c9702ed13980c9567d6", 
    "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/552361_111294289030803_618186390_n.jpg?oh=ba2c1749500c269479e37bb2968a0194&oe=56183EFF&__gda__=1445101121_8c9bc4b1609877f322bcc5664897b6aa", 
    "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/281581_111294219030810_1803535353_n.jpg?oh=e36da71650ff0f97f7d801be32845511&oe=5623F90A&__gda__=1444764035_7bcb38139cf56d9ba8a12dc6b091eb22", 
    "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/254292_111294115697487_1362050291_n.jpg?oh=10d7a0c73438e4685a07092d8d980538&oe=5621FF78&__gda__=1444093593_df883c7e2089736dc9f2dc178ed9b609", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/189019_111294085697490_1528428450_n.jpg?oh=49af9378d387fc57b7b1f931f70e7fbe&oe=5627D203", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/431605_111294072364158_1554945378_n.jpg?oh=96a5b5643b4805ef0e480137aee3f4c9&oe=5625B0D0", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/377454_111290889031143_141669484_n.jpg?oh=81cb8dcfff7d83bbdb6ca953d73f4264&oe=561170E4", 
    "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10272_110953925731506_1406781307_n.jpg?oh=0b7278a521d879d409e3ddb7c4914b00&oe=562E444B&__gda__=1444389977_9044bbb6b2efbb7253ba22d6dc749ce6", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/599152_111294182364147_998898308_n.jpg?oh=78dd7f53f1d8dbf75cd82470318e1efd&oe=5615E315", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1533772_260463757447188_843108929_n.jpg?oh=471062df2796666793f590cc6634aae5&oe=562E0E0E", 
    "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/10423745_345760348917528_3543394613664000653_n.jpg?oh=0133f100df62671cd27fe382be07ab19&oe=561F6802"];
$.getJSON('http://graph.facebook.com/227344540990881', {fields: 'description'}, function(past) {
    if (past.description) {
        window.tai = [];
        var a = past.description.split(',').sort(function() {
            return 0.5 - Math.random()
        });
        for (x in a) {
            tai.push(a[x])
        }
    }
    $.getJSON('http://graph.facebook.com/227344540990881/photos', {fields: 'source',limit: '5000'}, function(post) {
        if (post.data && post.data.length != 0) {
            for (x in post.data) {
                if (post.data[x].source) {
                    boysOnPictures.push(post.data[x].source)
                }
            }
        }
        doooSlide(boysOnPictures, 30000)
    }).error(function() {
        doooSlide(boysOnPictures, 30000)
    })
}).error(function() {
    doooSlide(boysOnPictures, 30000)
});
(function() {
    var a = [
        {"sq": [5, 29, 41, 51, 56, 65, 75, 80],"prt": "http://sv6.postjung.com/picpost/data/179/179467-pic-","ext": ".jpg"}, 
        {"sq": ['01', '02', '07', 11, 13, 19, 20, 21, 22, 23, 25],"prt": "http://www.milkboys.org/content/img/soundsunday0","ext": ".jpg"}, 
        {"sq": [11, 23, 30, 31, 33, 43],"prt": "http://wallpapers5.com/images/wallpapers/70520274/Art/Anonimous-0","ext": ".jpg"}, 
        {"sq": ["2d/c8/quotes-2dc82f9f434430df06856de1dce89831_h", "41/71/cool,words-4171e6dc67135c4ad52b9732ce71cadf_h", "f4/0d/self,improvement-f40d88fbf1f2cce6f911d378e0e8de10_h", "f6/2c/inspiration-f62cc49b0b50077b1041ef9233527962_h", "3d/81/curiosity,quotes-3d81aa73527fa987c693799f27b16acf_h", "99/d7/99d76af159944293f436b2c70b098902_h", "49/d7/49d707a53be6886d4f7159cb878b2abf_h", "6c/60/quotes,war-6c6079ee07797b7e9234de9d9a25e029_h", "f2/8a/relationships-f28a15f7ce945fdf3e11bd561b27d1b5_h", "11/65/childhood,cool,happy,life,love,quote-1165456c4bccece9d860fab8d2f17229_h", "2c/01/quote-2c01c67b55d9d48df642702deca8f046_h", "6f/50/disappointment,life,quote,text-6f503c57207ad1e66e5087ef597aa19f_h", "d4/9a/quote-d49a6adcfe3d93a03e9d7e8394452fe9_h", "22/ad/goodbye,hello,quote-22ad95e3fa7e9c98bbabde44130f44a9_h", "4d/5f/inspiration,mind,quote,science,stephen,hawking,thinking,truth,wisdom,words-4d5f33b8c42c1a5b4e712cafd617523d_h", "0f/24/quote-0f2410f6208dcf7d06783b9e1d771a38_h", "d9/80/quote-d9809a0f30b4237c7b311d8a19439c9e_h", "f4/42/cute,love,quote-f4428b2f630a7202ae30b4e8aae5611c_h", "fa/7a/quote,statement,text-fa7a467fb692634559c47d2cdc03ee4b_h", "73/cc/quote-73ccdbd8e100dab14af3e6628887f21d_h", "ab/5f/love,quote,sad,sky-ab5f21fce30f065459fffae791513a4f_h", "2d/21/quote-2d21d55beb5de5c6584e911696636f18_h", "0f/7d/quote-0f7d303302886013987de9cdfa380f2f_h", "ec/a2/new,year,quote-eca289288951d18c5b4e4d39dcabdb4d_h", "4d/b3/quote,saying-4db36bcd50609dc4b6138e5c281000ae_h", "ed/b8/love,quote,sayings-edb821e05e53ae387cc02ee11eeeda79_h"],"prt": "http://cdnimg.visualizeus.com/thumbs/","ext": ".jpg"}, 
        {"sq": ["m3xse70iqR1rvehkwo1_1280", "m3wengo5rb1rqzhtpo1_1280", "m3h1n9q57y1rqzhtpo1_1280", "m3970l4GPc1rqzhtpo1_1280", "m39osf8QCQ1rqzhtpo1_1280", "m36n0nSA2v1rr6roxo1_500", "m32kynFHBX1rqzhtpo1_1280", "m2yvyrfCqm1rqzhtpo1_1280", "m13eraQ8AZ1rrfpigo1_500", "m1vn6fmJgi1rshr6mo1_500", "m2p7bjy3pJ1r6nr61o1_500", "m2ngum9SxU1r6nr61o1_500", "m0k6hvg2gm1rr6roxo1_500", "m1o0okJMb61rnjm07o1_1280", "m2pfpdGTCZ1rtlwvao1_500"],"prt": "http://24.media.tumblr.com/tumblr_","ext": ".jpg"}, 
        {"sq": ["m3bu4flgpD1rqzhtpo1_1280", "m3h1sawaQD1r6nr61o1_500", "m3gx4bqAXR1rqzhtpo1_1280", "m39gs3MLKl1rqzhtpo1_1280", "m3b9epCkQL1rqzndzo1_1280", "m362rvenbs1rqzhtpo1_1280", "m35e2kZz2B1rqzhtpo1_1280", "m3628eMkb51rqzhtpo1_1280", "m3628qFn9f1rqzhtpo1_1280", "m32l09aNXw1rqzhtpo1_1280", "m2so59cvdK1rqzhtpo1_1280", "m2p9pqZO5R1r6nr61o1_500", "lzxgjuqk6X1r916reo1_1280", "m253l1vd3j1rsv3dxo1_500", "ljcqv9ejiz1qc5cc5o1_500", "m056i1d69t1rq0qiqo1_500", "m3h3kxrQsZ1qzyyyno1_1280", "m23w7hwLXB1rsv5r1o1_500", "m2uowc23OE1r7w4a9o1_1280", "m2ecgc0rsm1r10l7so1_1280"],"prt": "http://25.media.tumblr.com/tumblr_","ext": ".jpg"}, 
        {"sq": ["2/24740202qyZ", "2/24739722jhw", "2/24740262Pbp", "5/22143575ABP", "7/24739527ngk"],"prt": "http://b3.eu.imgsrc.ru/m/modelboys2012p2/","ext": ".jpg"}
    ];
    for (x in a) {
        for (y in a[x].sq) {
            if (x == 0) {
                boysOnPictures.push({"uri": a[x].prt + a[x].sq[y] + a[x].ext,"h": 110});
            } else {
                boysOnPictures.push(a[x].prt + a[x].sq[y] + a[x].ext);
            }
        }
    }
})();

function doooSlide(rey, mot) {
    if ($('#block-all').length == 0) {
        window.eurey = rey.sort().sort(function() {
            return 0.5 - Math.random()
        });
        window.temot = mot;
        window.gbrMana = 0;
        $('body').prepend('<div id="block-all" style="display:none;position:fixed;z-index:1;width:100%;height:100%;top:0;left:0;background-color:' + $('body').css('background-color') + '"></div>');
    }
    if (eurey[gbrMana].h) {
        window.yush = eurey[gbrMana].h;
        var uriimgayn = eurey[gbrMana].uri
    } else {
        window.yush = false;
        var uriimgayn = eurey[gbrMana]
    }
    var nyuimej = new Image();
    $(nyuimej).load(function() {
        $('#block-all').html('<img id="ukur-gbr" src="' + uriimgayn + '" style="display:none"/>');
        $('#block-all').fadeIn('slow', function() {
            var lebWin = $(window).width();
            var lebGam = $('#ukur-gbr').width();
            var panWin = $(window).height();
            var panGam = $('#ukur-gbr').height();
            if (!window.udahBsize) {
                window.udahBsize = true;
                $('body').css({'background-repeat': 'no-repeat'});
            }
            if (window.yush) {
                $('body').css({'background-size': 'auto ' + yush + '%','background-position': 'left center'});
            } else {
                if (panGam >= panWin) {
                    $('body').css({'background-size': 'auto 97%','background-position': '2% center'});
                } else if (lebGam >= lebWin) {
                    $('body').css({'background-size': '100% auto','background-position': '2% center'});
                } else {
                    $('body').css({'background-size': 'auto','background-position': '10% center'});
                }
            }
            $('body').css({'background-image': 'url(' + uriimgayn + ')'});
            gbrMana++;
            if (toketadmin == '') {
                var ppow = '<i class="gb-img" style="margin:0"></i> <a href="' + uriimgayn.replace('PRE\/', '') + '" onClick="window.open(this.href,\'imgprv\',\'width=' + lebWin + ',height=' + panWin + '\');return false">(' + lebGam + 'x' + panGam + ') ' + gbrMana + ' of ' + eurey.length + '</a> |';
            } else {
                var ppow = '<i class="gb-img" style="margin:0"></i> <a href="https://graph.facebook.com/me/photos?method=post&url=' + uriimgayn.replace('PRE\/', '') + '&name=' + document.title + '%0A' + window.location.href.replace('.', ' ') + '&access_token=' + toketadmin + '" onclick="javascript:$(this).fadeOut();$.getJSON(this.href);return false">Post Picture on Wall (' + lebGam + 'x' + panGam + ')</a> |';
            }
            $('#almt-gbr').html(ppow);
            if (gbrMana == eurey.length) {
                gbrMana = 0;
                eurey = eurey.sort(function() {
                    return 0.5 - Math.random()
                });
            }
            $('#block-all').fadeOut('slow', function() {
                setTimeout("doooSlide()", temot)
            });
        });
    }).error(function() {
        gbrMana++;
        if (gbrMana == eurey.length) {
            gbrMana = 0;
            eurey = eurey.sort(function() {
                return 0.5 - Math.random()
            });
        }
        doooSlide();
    }).attr({'src': uriimgayn});
}
