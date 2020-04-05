function askToken() {
    var a = '<div class="konsol">';
    a += '<div class="dip-luar"><h2 class="h-box">Access Token Needed</h2><div class="dip-bok">Access tokens are needed to make calls on facebook graph api.</div></div>';
    a += '<div class="txt-box" style="color:#443333">';
    a += '<div style="text-align:center;margin:0 0 5px 0">Access Token: <input type="text" id="admin-token" value="';
    if (toketadmin != '') {
        a += toketadmin
    }
    a += '" onClick="this.select()" style="width:300px"/> ';
    a += '<span class="tombol-putih" onClick="gettoket()"><i class="gb-appcen"></i> Get Token</span></div>';
    a += '</div>';
    a += '<div class="bt-box" style="text-align:center">';
    a += '<span class="tombol" onClick="goAsk()">Okay Go</span> ';
    a += '</div>';
    a += '<div class="rpt-box">';
    a += '<div id="lapor" class="lapor"></div><div id="lapor3" class="lapor"></div><div id="selesai" class="lapor"></div>';
    a += '<div style="font-size:10px;text-align:right;padding:0 2px"><a id="sowditel" href="javascript:void(0)" onClick="if($(this).html()==\'Show Details\'){$(this).html(\'Hide Details\');$(\'#lapor2\').fadeIn(function(){repos(\'.konsol\')})}else{$(this).html(\'Show Details\');$(\'#lapor2\').fadeOut(function(){repos(\'.konsol\')})}">Show Details</a></div>';
    a += '<div id="lapor2" class="lapor" style="display:none;max-height:200px;overflow-y:auto"></div>';
    a += '</div>';
    a += '</div>';
    skrinfill(a);
}
function goAsk(uri) {
    toketadmin = cktkn();
    if (toketadmin == false) {
        return false
    }
    $('.bt-box').fadeOut(function() {
        $('.txt-box').fadeOut(function() {
            $('.rpt-box').fadeIn(function() {
                repos('.konsol')
            });
        })
    });
    if (toketInUse != '') {
        skrinoff();
        $('#bawah').html(btns);
    }
}
