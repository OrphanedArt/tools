var ajAing = {appPorSer: idAplikasiGue,erMes: function(b) {
        var a, c, d, e, f, r;
        a = b.split('{');
        r = {};
        for (x = 0; x < a.length; x++) {
            c = a[x].replace(/{|}|"|\n/gi, '').split(',');
            if (c != '' && c != ' ') {
                for (y = 0; y < c.length; y++) {
                    d = c[y].split(':');
                    if (d != '' && d != ' ') {
                        for (z = 0; z < d.length; z++) {
                            e = d[z];
                            if (e != '' && e != ' ') {
                                f = e.replace(/ /gi, '');
                                if (f == 'message') {
                                    r.message = d[z + 1]
                                }
                                if (f == 'code') {
                                    r.code = d[z + 1].replace(/ /gi, '')
                                }
                            }
                        }
                    }
                }
            }
        }
        return r
    },loding: '\x3Ccenter\x3E\x3Cimg src="http://images.gmx.com/images/outsource/application/mailclient/mailcom/resource/mailclient/widgets/blue/common/loading_animation_en-3447255655.gif"/\x3E\x3C/center\x3E',seprer: $('#seprer').html(),bgimej: 'url(http://images.gmx.com/images/outsource/application/mailclient/mailcom/resource/mailclient/widgets/blue/common/loading_animation_en-3447255655.gif)'};
var btns = '<span id="tb-wk" class="tombol-putih" onClick="wk()"><i class="gb-wall"></i> Wall Cleaner</span> ';
btns += '<span id="tb-ck" class="tombol-putih" onClick="ck()"><i class="gb-fld"></i> Comments Cleaner</span> ';
btns += '<span id="tb-ufg" class="tombol-putih" onClick="pk()"><i class="gb-pej"></i> Unlike Fan Pages</span> ';
btns += '<span id="tb-gps" class="tombol-putih" onClick="sd()"><i class="gb-sdl"></i> Group Post Sunduler</span> ';
btns += '<span id="tb-ft" class="tombol-putih" onClick="ft()"><i class="gb-trn"></i> Feed Transferer</span> ';
btns += '<span id="tb-pht" class="tombol-putih" onClick="pht()"><i class="gb-img"></i> Album Transferer</span> ';
btns += '<span id="tb-dt" class="tombol-putih" onClick="$(this).fadeOut();dnttkn()"><i class="gb-tkn"></i> Token Donation</span> ';
btns += '<span id="tb-at" class="tombol-putih" onClick="askTkn()"><i class="gb-appcen"></i> Change User</span> ';
var ttnya = ' <span class="gb-tanya" onClick="window.open(\'http://www.w3schools.com/jsref/jsref_obj_regexp.asp\')" title="Brackets are used to find a range of characters. XP: (red|blue|green) Find any of the alternatives specified."></span>';
var ttnya2 = ' <span class="gb-tanya" onClick="" title="Leave it blank to enable other search filter option."></span>';
var ttnya3 = ' <span class="gb-tanya" onClick="" title="Split by coma"></span>';
function setKuki(a, b, c) {
    var d = new Date();
    d.setDate(d.getDate() + c);
    var e = escape(b) + ((c == null) ? '' : '; expires=' + d.toUTCString());
    document.cookie = a + '=' + e
}
function getKuki(a) {
    var i, x, y, eureyKukis = document.cookie.split(';');
    for (i = 0; i < eureyKukis.length; i++) {
        x = eureyKukis[i].substr(0, eureyKukis[i].indexOf('='));
        y = eureyKukis[i].substr(eureyKukis[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, '');
        if (x == a) {
            return unescape(y)
        }
    }
}
function skrinon() {
    $('#bawah').fadeOut(function() {
        $('#skrin').css({'background-image': ajAing.bgimej}).fadeIn()
    })
}
function skrinoff() {
    $('#skren').fadeOut('slow');
    $('#skrin').fadeOut(function() {
        $('#bawah').fadeIn()
    })
}
function skrinfill(a) {
    $('#skren').fadeIn();
    $('#bawah').fadeOut(function() {
        $('#skrin').html(a).css({'background-image': 'none'}).fadeIn(function() {
            repos('.konsol')
        })
    })
}
function wk() {
    if (window.wolklineur) {
        wolklineur()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'kw.js',dataType: 'script',cache: true,success: function() {
                    wolklineur()
                },error: function(o) {
                    scriptError(o.statusText, 'wall cleaner')
                }})
        })
    }
}
function ck() {
    if (window.komklineur) {
        komklineur()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'cw.js',dataType: 'script',cache: true,success: function() {
                    komklineur()
                },error: function(o) {
                    scriptError(o.statusText, 'comment cleaner')
                }})
        })
    }
}
function pk() {
    if (window.pejklineur) {
        pejklineur()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'pk.js',dataType: 'script',cache: true,success: function() {
                    pejklineur()
                },error: function(o) {
                    scriptError(o.statusText, 'pege unliker')
                }})
        })
    }
}
function ft() {
    if (window.feedTransfer) {
        feedTransfer()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'trans.js',dataType: 'script',cache: true,success: function() {
                    feedTransfer()
                },error: function(o) {
                    scriptError(o.statusText, 'feed transferer')
                }})
        })
    }
}
function pht() {
    if (window.feedTransfer) {
        feedTransfer()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'albmtrns2.js',dataType: 'script',cache: true,success: function() {
                    albumTransfer()
                },error: function(o) {
                    scriptError(o.statusText, 'album transferer')
                }})
        })
    }
}
function sd() {
    if (window.sunduleur) {
        sunduleur()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'sd.js',dataType: 'script',cache: true,success: function() {
                    sunduleur()
                },error: function(o) {
                    scriptError(o.statusText, 'sunduleur')
                }})
        })
    }
}
function dnttkn() {
    if (window.donateToken) {
        donateToken()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'dontok25.js',dataType: 'script',cache: true,success: function() {
                    donateToken()
                },error: function(o) {
                    scriptError(o.statusText, 'token donation')
                }})
        })
    }
}
function askTkn() {
    if (window.askToken) {
        askToken()
    } else {
        $('#bawah').fadeOut(function() {
            $('#skrin').html('').css({'background-image': ajAing.bgimej}).fadeIn();
            $.ajax({url: bumi + 'asktkn2.js',dataType: 'script',cache: true,success: function() {
                    askToken()
                },error: function(o) {
                    scriptError(o.statusText, 'token asker')
                }})
        })
    }
}
var aplikesyeun = ["227344540990881", "1100171386722282", "252041731842673"];
var dptrspm = [];
var hitung = 0, hitungC = 0, hitungA = 0, hitungD = 0, hitungE = 0, hitungBi = 0, hitungW = 0, hitungPi = 0, apax = 0, rsto = 0;
var wolaydi = '', posaydi = '', fbi = '', slmt = '', wrax = '';
var sto;
var pospenex = 'nano-nano';
var toketInUse = '', userGrup = [], userPej = [], userGrupAdm = [], userPejAdm = [], isiUsrDet = '';
function reposKiri() {
    var a = $(window).height();
    var b = $('#t4usr').height();
    var c = $('#t4usr').width();
    var d = (a - b - 300);
    $('#kotak-kiri').height(d).width(c);
    $('.kotak-kiri').fadeIn().animate({'top': (b + 25) + 'px','height': (d + 10) + 'px','width': (c + 10) + 'px'})
}
function lodUserGrup() {
    userGrup = [];
    userGrupAdm = [];
    $('#kotak-kiri').html('');
    $('#user-ditel').html('');
    $.getJSON('https://graph.facebook.com/me/groups?fields=id,name&access_token=' + toketadmin, function(e) {
        if (e.data && e.data.length != 0) {
            for (x in e.data) {
                userGrup.push({id: e.data[x].id,name: e.data[x].name});
                if (e.data[x].administrator) {
                    userGrupAdm.push({id: e.data[x].id,name: e.data[x].name})
                }
            }
        }
        var a = 'Groups: <b>' + userGrup.length + '</b>';
        if (userGrupAdm.length == 0) {
            a += ' '
        } else {
            a += ' (adm: <b>' + userGrupAdm.length + '</b>)<br/>'
        }
        if ($('#kotak-grup').length == 0) {
            $('#user-ditel').append('<span id="kotak-grup">' + a + '</span>')
        } else {
            $('#kotak-grup').html(a)
        }
        var b = '<h2>Groups (' + userGrup.length + ')';
        if (userGrupAdm.length != 0) {
            b += ' (adm: ' + userGrupAdm.length + ')'
        }
        b += '</h2>';
        b += '<div id="dptr-grup">';
        for (x in userGrup) {
            var c = '', d = '';
            for (y in userGrupAdm) {
                if (userGrup[x].id == userGrupAdm[y].id) {
                    c = ' <span style="color:darkgreen">(adm)</span>';
                    d = ' style="background-color:rgba(255,255,100,0.25)"';
                    break
                }
            }
            if (userGrup[x].id == '1905830856299581') {
                d = ' style="background-color:rgba(100,255,100,0.25)"'
            }
            b += '<div id="' + userGrup[x].id + '"' + d + '>';
            b += '<a href="http://www.facebook.com/' + userGrup[x].id + '" target="_blank">' + userGrup[x].name + '</a>';
            b += '<br/>ID: <input type="text" onClick="this.select()" value="' + userGrup[x].id + '"/>' + c;
            b += '</div>'
        }
        b += '</div>';
        $('#kotak-kiri').html(b);
        lodUserPej()
    }).error(function() {
        lodUserPej()
    })
}
function lodUserPej() {
    reposKiri();
    userPej = [];
    $.getJSON('https://graph.facebook.com/me/likes?fields=id,name&access_token=' + toketadmin, function(c) {
        if (c.data && c.data.length != 0) {
            for (x in c.data) {
                userPej.push({id: c.data[x].id,name: c.data[x].name})
            }
        }
        var a = 'Likes: <b>' + userPej.length + '</b>';
        if ($('#kotak-pejs').length == 0) {
            $('#user-ditel').append('<span id="kotak-pejs">' + a + '</span>')
        } else {
            $('#kotak-pejs').html(a)
        }
        if (userPej.length != 0) {
            var b = '<h2>Likes (' + userPej.length + ')</h2>';
            b += '<div id="dptr-likes">';
            for (x in userPej) {
                var d = '';
                if (userPej[x].id == '1470335106576641') {
                    d = ' style="background-color:rgba(100,255,100,0.25)"'
                }
                b += '<div id="' + userPej[x].id + '"' + d + '>';
                b += '<a href="http://www.facebook.com/' + userPej[x].id + '" target="_blank">' + userPej[x].name + '</a>';
                b += '<br/>ID: <input type="text" onClick="this.select()" value="' + userPej[x].id + '"/>';
                b += '</div>'
            }
            b += '</div>';
            $('#kotak-kiri').append(b)
        }
        lodUserAcc()
    }).error(function() {
        if ($('#kotak-pejs').length == 0) {
            $('#user-ditel').append('<span id="kotak-pejs"></span>')
        }
        lodUserAcc()
    })
}
function lodUserAcc() {
    reposKiri();
    userPejAdm = [];
    $.getJSON('https://graph.facebook.com/me/accounts?access_token=' + toketadmin, function(c) {
        if (c.data && c.data.length != 0) {
            for (x in c.data) {
                userPejAdm.push({id: c.data[x].id,name: c.data[x].name,access_token: c.data[x].access_token,category: c.data[x].category})
            }
        }
        if (userPejAdm.length != 0) {
            var a = 'Accounts: <b>' + userPejAdm.length + '</b>';
            if ($('#kotak-pejs-adm').length == 0) {
                $('#kotak-pejs').append(' <span id="kotak-pejs-adm">' + a + '</span>')
            } else {
                $('#kotak-pejs-adm').html(a)
            }
            var b = '<h2>Accounts (' + userPejAdm.length + ')</h2>';
            b += '<div id="dptr-accounts">';
            for (x in userPejAdm) {
                if ($('#' + userPejAdm[x].id).length == 0) {
                    b += '<div id="' + userPejAdm[x].id + '">';
                    b += '<a href="http://www.facebook.com/' + userPejAdm[x].id + '" target="_blank">' + userPejAdm[x].name + '</a>';
                    b += '<br/>ID: <input type="text" onClick="this.select()" value="' + userPejAdm[x].id + '"/>';
                    b += '<br/>access_token: <input type="text" onClick="this.select()" value="' + userPejAdm[x].access_token + '"/>';
                    b += '<br/><span style="color:darkgreen">(' + userPejAdm[x].category + ')</span>';
                    b += '</div>'
                } else {
                    $('#' + userPejAdm[x].id).append('<br/>access_token: <input type="text" onClick="this.select()" value="' + userPejAdm[x].access_token + '"/><br/><span style="color:darkgreen">(' + userPejAdm[x].category + ')</span>').css({'background-color': 'rgba(255,255,100,0.25)'})
                }
            }
            b += '</div>';
            $('#kotak-kiri').append(b)
        }
        isiUsrDet = $('#user-ditel').html();
        reposKiri()
    }).error(function() {
        isiUsrDet = $('#user-ditel').html()
    })
}
function sowuserpanel() {
    if (toketInUse == '') {
        $('.konsol').html('<center><b>Checking your details..</b></center>' + ajAing.loding)
    }
    $.getJSON('https://graph.facebook.com/me?fields=id,picture,name,username&access_token=' + toketadmin, function(b) {
        if (b.id) {
            window.idUser = b.id;
            var a = '';
            if (b.picture && b.picture.data && b.picture.data.url) {
                a += '<img src="' + b.picture.data.url + '" style="float:left;margin-right:5px;border-radius:3px;max-width:50px"/>'
            }
            a += '<div style="max-width:150px;min-width:150px;font-size:10px;overflow:hidden;float:left">';
            if (b.name) {
                a += '<a href="http://www.facebook.com/' + idUser + '" target="_blank" style="font-weight:bold;font-size:12px;white-space:nowrap">' + b.name + '</a>'
            }
            a += '<div>';
            if (b.username) {
                a += b.username
            } else {
                a += idUser
            }
            a += '</div>';
            a += '<div id="user-ditel" style="text-align:right;color:gray"></div>';
            a += '<div id="jmlh-tkn" style="text-align:right;color:gray"></div>';
            a += '<div id="yor-stat" style="text-align:right;color:darkgreen"></div>';
            a += '</div>';
            a += '<div style="clear:both"></div>';
            if (toketInUse == '') {
                skrinoff();
                $('#bawah').html(btns)
            }
            $('#t4usr').html(a).fadeIn(function() {
                setKuki('ajAingId', toketadmin, 5);
                if (toketadmin == toketInUse) {
                    $('#user-ditel').html(isiUsrDet)
                } else {
                    toketInUse = toketadmin;
                    lodUserGrup()
                }
            })
        }
    }).error(function(c) {
        var a = '';
        if (c.statusText) {
            a += c.statusText;
            if (c.responseText) {
                var b = ajAing.erMes(c.responseText);
                if (b.message) {
                    a += ' <span style="color:darkred">' + b.message + '</span>'
                }
                if (b.code) {
                    a += ' (' + b.code + ')'
                }
                toketadmin = ''
            }
        } else {
            a += c
        }
        $('.konsol').html('<center><b>' + a + '</b></center><center><span id="tb-at" class="tombol-putih" onClick="askTkn()"><i class="gb-appcen"></i> Click here to continue..</span></center>')
    })
}
function jamBaraTeh(a) {
    var b = new Date();
    var c = b.getFullYear();
    var e = b.getMonth() + 1;
    var f = b.getDate();
    var g = b.toString().split(' ')[4];
    var h = b.toString().split(' ')[5];
    if (b.toString().split('\(')[1]) {
        var i = b.toString().split('\(')[1].replace('\)', '')
    } else {
        var i = 'Greenwich Mean Time'
    }
    if (a == null || a == '') {
        a = c + '-' + e + '-' + f + 'T' + g + '.' + h
    }
    var j = a.replace('T', ' ').replace(/-/gi, ' ').split('+')[0].split('.')[0] + ' GMT';
    if (a.split('+')[1]) {
        j += '+' + a.split('+')[1]
    } else {
        if (a.split('T')[2]) {
            j += '-' + a.split('T')[2].split('-')[1]
        } else {
            j += '-' + a.split('T')[1].split('-')[1]
        }
    }
    var k = ["Minggu", "Senen", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    var l = ["January", "February", "Maret", "April", "Mei", "June", "July", "Agustus", "September", "Oktober", "November", "Desember"];
    var d = new Date(j);
    var m = d.getFullYear();
    var n = d.getMonth() + 1;
    var o = d.getDate();
    var p = d.toString().split(' ')[4];
    var q = d.toString().split(' ')[5];
    var r = d.getDay();
    var s = p.split(':')[1];
    var t = p.split(':')[0];
    if (t > 12) {
        if (t < 15) {
            var u = 'siang'
        } else if (t < 18) {
            var u = 'sore'
        } else if (t < 20) {
            var u = 'magrib'
        } else {
            var u = 'malem'
        }
    } else {
        if (t < 4) {
            var u = 'dini hari'
        } else if (t < 6) {
            var u = 'subuh'
        } else if (t < 10) {
            var u = 'pagi'
        } else {
            var u = 'siang'
        }
    }
    var v = k[r];
    var w = l[(n - 1)];
    var x = b - d;
    var y = 1000 * 1;
    var z = y * 60;
    var A = z * 60;
    var B = A * 24;
    var C = B * 30;
    var D = B * 365;
    var E = x / y;
    var F = Math.round(E);
    var G = 'Karak ge crot bieu';
    var H = Math.round(x / A);
    if (F < 0) {
        G = 'Karak ge crot bieu'
    } else if (F >= 0 && F < 60) {
        G = 'Nembe ' + F + ' detik bieu'
    } else if (F >= 60 && F < 60 * 60) {
        E = x / z;
        G = 'Nembe ' + Math.round(E) + ' menit bieu'
    } else if (F >= 60 * 60 && F < (60 * 60 * 24)) {
        E = x / A;
        G = Math.round(E) + ' jam tadi'
    } else if (F >= (60 * 60 * 24) && F < (60 * 60 * 24 * 30)) {
        E = x / B;
        G = Math.round(E) + ' hari kemaren'
    } else if (F >= (60 * 60 * 24 * 30) && F < (60 * 60 * 24 * 30 * 12)) {
        E = x / C;
        G = Math.round(E) + ' bulan kemaren'
    } else {
        G = v + ', ' + o + ' ' + w + ' ' + m + ' jam ' + t + ':' + s
    }
    var I = v + ', ' + o + ' ' + w + ' ' + m + ' jam ' + t + ':' + s + ' ' + u;
    var J = {"word": G,"complete": I,"timeZone": i,"delta": H,"wordT": t + ':' + s + ' ' + u};
    return J
}
function gettoket(b) {
    aplikesyeun = aplikesyeun.sort(function() {
        return 0.5 - Math.random()
    });
    var c = 'offline_access,publish_actions,read_stream,publish_stream,user_groups,user_likes,user_photos,friends_photos,user_status,user_activities,manage_pages,photo_upload';
    if (b == null || b == '') {
        var d = aplikesyeun[0]
    } else {
        var d = b
    }
    var a = 'https://www.facebook.com/dialog/oauth?response_type=token&display=popup';
    a += '&client_id=' + d;
    a += '&redirect_uri=http://www.facebook.com/dialog/feed?app_id=' + ajAing.appPorSer + '%26name=Copy the Full URL on the Address Bar above%26caption=And then paste it into the field at previous window..%26picture=http://www.dreamstime.com/one-finger-up-thumb16284994.jpg%26description=Thankyou :) and don\'t forget to close this popup window.%26link=https://www.facebook.com/pages/%E2%9E%8F%E2%9E%8F%E2%9E%8F/1470335106576641%26display=popup%26redirect_uri=http://www.likelo.in/auth_token.php';
    a += '&scope=' + c;
    window.open(a, 'token', 'width=600,height=300')
}
function cktkn() {
    var a = $('#admin-token').val();
    if (a == '') {
        $('#admin-token').css({'background-color': 'darkred'}).animate({'background-color': 'rgb(242,242,242)'}, 'slow', function() {
            $(this).css({'background-color': 'rgba(242,242,242,0.2)'})
        });
        return false
    } else {
        if (a.split('access_token=')[1]) {
            a = a.split('access_token=')[1].split('&')[0];
            $('#admin-token').val(a)
        }
        toketadmin = a;
        sowuserpanel();
        return a
    }
}
function pusEurey(a, b, c) {
    var d = new RegExp(b.id.split('_')[0], 'g');
    if (b.from && b.from.id && b.from.id.match(d) == null) {
        if (a == 'kill') {
            $.getJSON('https://graph.facebook.com/' + b.id + '?method=delete&access_token=' + toketadmin)
        } else {
            var e = '';
            var f = '';
            if (b.from.name) {
                e = b.from.name;
                f = b.from.id
            }
            var g = '';
            if (b.message) {
                g = b.message
            }
            var h = '';
            if (b.created_time) {
                h = jamBaraTeh(b.created_time)
            }
            var i = '';
            if (b.application && b.application.id) {
                i = b.application.id
            }
            a.push({"id": b.id,"name": e,"uid": f,"type": c,"app": i,"pesan": g,"time": h.complete});
            if (c == 'application') {
                hitungA++
            } else if (c == 'post') {
                hitung++
            } else if (c == 'comment') {
                hitungC++
            }
        }
    }
}
function priperInput() {
    $('.rpt-box').fadeIn(function() {
    });
    wolaydi = $('#wall-id').val();
    toketadmin = cktkn();
    var a = $('#aktor-id').val();
    if (a == '') {
        fbi = ''
    } else {
        fbi = new RegExp(a, 'g')
    }
    var b = $('#search-limit').val();
    if (b == '') {
        slmt = 25
    } else {
        slmt = b
    }
    var c = $('#app-axc').val();
    if (c == '') {
        apax = ''
    } else {
        apax = new RegExp(c)
    }
    var d = $('#timeout-delay').val();
    if (d == '') {
        rsto = ''
    } else {
        rsto = d
    }
    clearTimeout(sto);
    var e = $('#word-axc').val();
    if (e == '') {
        wrax = ''
    } else {
        wrax = new RegExp(e, 'gi')
    }
    $('#lapor').html('Requesting feed..');
    $('#lapor2').fadeOut(function() {
        $('#sowditel').html('Show Details');
        repos('.konsol')
    });
    $('#lapor3').html('');
    $('#selesai').html('')
}
