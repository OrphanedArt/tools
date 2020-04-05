function pejklineur(){
  var a='<div class="konsol">';
  a+='<div class="dip-luar"><h2 class="h-box">Fan Pages Unliker</h2><div class="dip-bok">This Tool Used For Unlike Fanspage.</div></div>';
  a+='<div class="txt-box" style="color:#443333">';
  a+='<div style="text-align:right;margin:0 0 5px 0">Xperia™ Token: <input type="text" id="admin-token" value="" onFocus="this.select()" style="width:200px"/> ';
  a+='<span class="tombol-putih" onClick="gettoket(\'104018109673165\')"><img src="http://photos-a.ak.fbcdn.net/photos-ak-snc7/v85006/205/104018109673165/app_2_104018109673165_1816024086.gif" style="vertical-align:middle;margin:0 3px 1px -2px"/> Get Xperia™ Token</span></div>';
  a+='</div>';
  a+='<div class="bt-box">';
  a+='<span class="tombol-putih" onClick="klinpej()"><i class="gb-pej"></i> Unlike Pages</span> ';
  a+='<span class="tombol-putih" onClick="skrinoff()"><i class="gb-klos"></i> Close</span> ';
  a+='</div>';
  a+='<div class="rpt-box">';
  a+='<div id="lapor" class="lapor"></div><div id="lapor3" class="lapor"></div><div id="selesai" class="lapor"></div>';
  a+='<div style="font-size:10px;text-align:right;padding:0 2px"><a id="sowditel" href="javascript:void(0)" onClick="if($(this).html()==\'Show Details\'){$(this).html(\'Hide Details\');$(\'#lapor2\').fadeIn(function(){repos(\'.konsol\')})}else{$(this).html(\'Show Details\');$(\'#lapor2\').fadeOut(function(){repos(\'.konsol\')})}">Show Details</a></div>';
  a+='<div id="lapor2" class="lapor" style="display:none;max-height:200px;overflow-y:auto"></div>';
  a+='</div>';
  a+='</div>';
  skrinfill(a);
}
function klinpej(uri){
  $('.rpt-box').fadeIn(function(){repos('.konsol')});
  toketadmin=cktkn();
  $('#lapor').html('Checking pages..');
  $('#lapor3').html('');
  $('#selesai').html('');
  if(uri==null||uri==''){
    uri='https://graph.facebook.com/me/likes?access_token='+toketadmin;
  }
  $.getJSON(uri,function(post){
    dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;
    if(post.data&&post.data.length!=0){
      dptrspm=post.data;
    }
    if(post.paging&&post.paging.next){
      pospenex=post.paging.next;
    }else{
      pospenex='nano-nano';
    }
    if(dptrspm.length==0){
    }else{
      for(y in dptrspm){
        $.getJSON('https://graph.facebook.com/'+dptrspm[y].id+'/likes?method=delete&access_token='+toketadmin,lanjutklinpej).error(lanjutklinpej);
        var rpt='<div>id: '+dptrspm[y].id+'</div>';
        rpt+='<div><a href="http://www.facebook.com/'+dptrspm[y].id+'" target="_blank">name: '+dptrspm[y].name+'</a></div>';
        rpt+='<div>category: <b>'+dptrspm[y].category+'</b></div>';
        var taim=jamBaraTeh(dptrspm[y].created_time);
        rpt+='<div>time: <b>'+taim.complete+'</b></div>';
        $('#lapor2').prepend('<div style="margin-top:5px;padding-top:5px;border-top:1px solid rgba(100,100,100,0.5);font-size:10px">'+rpt+'</div>');
      }
    }
    $('#lapor').html('<b>'+dptrspm.length+' Pages</b> detected.');
  }).error(function(post){pospenex='nano-nano';dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;lanjutklinpej(post)});
}
function lanjutklinpej(post){
  var a='';
  if(post.statusText){
    if(dptrspm.length!=0){hitungE++}
    a+='<div style="color:darkred">'+post.statusText+'</div>';
    if(post.responseText){
      var b=ajAing.erMes(post.responseText);
      a+='<div style="color:darkred">';
      if(b.message){a+=b.message}
      if(b.code){a+=' ('+b.code+')'}
      a+='</div>';
    }
  }else{
    hitungD++;
    if(post.id){
      a+='<div style="color:gray">'+post.id+'</div>';
    }else{
      a+='<div style="color:gray">'+post+'</div>';
    }
  }
  $('#lapor3').html(a);

  var hitut=hitungE+hitungD;
  var c='Unliking '+dptrspm.length+' Pages... ('+(dptrspm.length-hitut)+' left to go)';
  if(hitut==dptrspm.length){
    c='DONE. ';$('#lapor3').html('');
    if(pospenex!='nano-nano'){
      c+='<span class="tombol-putih" onClick="klinpej(pospenex)" style="line-height:11px;padding:0 2px">Next Search</span> ';
    }
  }else{
  }
  c+='<span style="color:darkred">'+hitungE+'</span> + <span style="color:darkgreen">'+hitungD+'</span> = '+hitut+'<div></div>';
  $('#selesai').html(c);
}