var mp3ArrayAing = [
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Suara%20Kami.mp3","judul": "Dum Dum Tak - Suara Kami"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Punk%20Dah%20Mati.mp3","judul": "Dum Dum Tak - Punk Dah Mati"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Petrol%20Petrol%20Petrol.mp3","judul": "Dum Dum Tak - Petrol Petrol Petrol"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Pergi%20Jahanam%20Kau.mp3","judul": "Dum Dum Tak - Pergi Jahanam Kau"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Perangi%20Mereka.mp3","judul": "Dum Dum Tak - Perangi Mereka"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Nyanyi%20Budaya%20Pembebasan.mp3","judul": "Dum Dum Tak - Nyanyi Budaya Pembebasan"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Merdekakah%20Kita.mp3","judul": "Dum Dum Tak - Merdekakah Kita"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Internasionale.mp3","judul": "Dum Dum Tak - Internasionale"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Hentikan%20Penindasan.mp3","judul": "Dum Dum Tak - Hentikan Penindasan"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Hak%20Asasi%20Hipokrasi.mp3","judul": "Dum Dum Tak - Hak Asasi Hipokrasi"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Dunia.mp3","judul": "Dum Dum Tak - Dunia"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Demokrasi%20Tanpa%20I.S.A.mp3","judul": "Dum Dum Tak - Demokrasi Tanpa I.S.A"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Dum%20Dum%20Tak%20-%20Anti%20Nazi%20Simpati.mp3","judul": "Dum Dum Tak - Anti Nazi Simpati"},
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Blitzkrieg%20Society.mp3","judul": "Plague Of Happiness - Blitzkrieg Society"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Hasrat.mp3","judul": "Plague Of Happiness - Hasrat"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Hypnotized.mp3","judul": "Plague Of Happiness - Hypnotized"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Kawan.mp3","judul": "Plague Of Happiness - Kawan"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Konspirasi.mp3","judul": "Plague Of Happiness - Konspirasi"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Malam.mp3","judul": "Plague Of Happiness - Malam"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Rasa%20Hati.mp3","judul": "Plague Of Happiness - Rasa Hati"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Resah%20Awan.mp3","judul": "Plague Of Happiness - Resah Awan"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Sesat.mp3","judul": "Plague Of Happiness - Sesat"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Southern%20Suburb.mp3","judul": "Plague Of Happiness - Southern Suburb"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Tiada%20Idea.mp3","judul": "Plague Of Happiness - Tiada Idea"}, 
    {"uri": "http://tools.ewlstorage.com/mp3/Plague%20Of%20Happiness%20-%20Useless%20Enemy.mp3","judul": "Plague Of Happiness - Useless Enemy"}
];
var srcmp3 = '';
function stelMusikAh(uri, pley, lop, judul) {
    if (uri == null || uri == '') {
        mp3ArrayAing = mp3ArrayAing.sort(function() {
            return 0.5 - Math.random()
        });
        var ke = Math.floor(Math.random() * mp3ArrayAing.length);
        if (typeof mp3ArrayAing[ke] == 'undefined') {
            ke = 0
        }
        if (mp3ArrayAing[ke].uri) {
            uri = mp3ArrayAing[ke].uri
        } else {
            uri = 'http://tools.ewlstorage.com/mp3/dj-pabeulit-aing-mah-te.mp3'
        }
        if (mp3ArrayAing[ke].judul) {
            judul = mp3ArrayAing[ke].judul
        }
        if (mp3ArrayAing[ke].loop) {
            lop = mp3ArrayAing[ke].loop
        }
    }
    if (pley == null || pley == '' || pley == 'yes' || pley == 1) {
        pley = 'yes'
    } else if (pley == 'no' || pley == 0) {
        pley = 'no'
    } else {
        if (judul == null || judul == '') {
            judul = pley
        }
        pley = 'yes'
    }
    if (lop == null || lop == '' || lop == 'yes' || lop == 1) {
        lop = 'yes'
    } else if (lop == 'no' || lop == 0) {
        lop = 'no'
    } else {
        if (judul == null || judul == '') {
            judul = lop
        }
        lop = 'yes'
    }
    if (judul == null || judul == '') {
        var purl = uri.split('/').length - 1;
        var artist = uri.split('/')[2];
        var title = uri.split('/')[purl].split('.mp3')[0];
        judul = title
    } else {
        var artist = judul.split(' - ')[0];
        if (judul.split(' - ')[1]) {
            var title = judul.split(' - ')[1]
        } else {
            var title = judul
        }
    }
    var album = window.location.hostname;
    srcmp3 = 'http://quran.com/audio/player.swf?soundFile=' + uri;
    srcmp3 += '&autostart=' + pley;
    srcmp3 += '&loop=' + lop;
    srcmp3 += '&bg=0x000000&leftbg=0xAF2910&lefticon=0xF2F2F2&rightbg=0xD67919&rightbghover=0x1BAD07&righticon=0xF2F2F2&righticonhover=0xFFFFFF&text=0xE0E3F4&slider=0x357DCE&track=0xFFFFFF&border=0xFFFFFF&loader=0xAF2910';
    
    var tulisNew = '<div style="padding:5px 7px;background-color:rgba(0,0,0,0.25);border-radius:7px;display:inline-block;border:1px solid rgba(100,100,100,0.25)">';
    tulisNew += '<div style="clear:both;padding:1px;text-align:center"><a style="color:#aaaa99;text-transform:capitalize" href="' + uri + '" target="_blank">' + judul + '</a></div>';
    tulisNew += '<div style="width:30px;height:20px;overflow:hidden;display:inline-block;vertical-align:middle"><div><embed id="embed-music" wmode="transparent" src="' + srcmp3 + '" quality="high" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" align="top" width="230" height="21"></embed></div></div>';
    tulisNew += '<div style="width:90px;height:20px;overflow:hidden;display:inline-block;vertical-align:middle"><iframe src="http://www.facebook.com/plugins/like.php?href=' + uri + '&layout=button_count&colorscheme=dark&show_faces=false&width=90" style="width:90px; height:20px; background:none; padding:0; margin:0; border:0;"></iframe></div>';
    tulisNew += '<div style="display:inline-block;vertical-align:middle;color:yellow"><a href="javascript:void(0)" onClick="if($(this).html()==\'Play\'){$(\'#embed-music\').attr({\'src\':srcmp3}).parent().show();$(this).html(\'Stop\')}else{$(\'#embed-music\').attr({\'src\':\'\'}).parent().hide();$(this).html(\'Play\')}" style="color:orange">Stop</a> · <a href="http://www.facebook.com/connect/uiserver.php?app_id=283995081642449&attachment={%22name%22:%22' + escape(document.title) + '%22,%22href%22:%22' + window.location.href + '%22,%22media%22:[{%22type%22:%22mp3%22,%22src%22:%22' + uri + '%22,%22artist%22:%22' + artist + '%22,%22title%22:%22' + title + '%22,%22album%22:%22' + album + '%22}]}&redirect_uri=http://kolbek.blogspot.com/&display=popup&method=stream_publish" onClick="javascript:window.open(this.href,\'musik\',\'width=600,height=300\'); return false" style="color:lightblue">Share</a> · <a href="javascript:void(0)" onClick="stelMusikAh()" style="color:lightgreen">Next</a></div>';
    tulisNew += '</div>';
    $('#musik-aing').html(tulisNew);
}
