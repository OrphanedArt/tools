function feedTransfer(){
  var a='<div class="konsol">';
  a+='<div class="dip-luar"><h2 class="h-box">Feed Transferer</h2><div class="dip-bok">This tool buat transfer postingan dari satu wall ke wall lain.</div></div>';
  a+='<div class="txt-box" style="color:#443333">';
  a+='<div style="text-align:right;margin:0 0 5px 0">Source Page ID: <input type="text" id="wall-id" value="';
  if(wolaydi==''){a+='199571560079319'}else{a+=wolaydi}
  a+='" onFocus="this.select()" style="width:400px"/></div>';
  a+='<div style="text-align:right;margin:0 0 5px 0">Your Token: <input type="text" id="admin-token" value="';
  if(toketadmin!=''){a+=toketadmin}
  a+='" onFocus="this.select()" style="width:200px"/> ';
  a+='<span class="tombol-putih" onClick="gettoket()"><i class="gb-tkn"></i> Get Token</span></div>';
  a+='<div style="text-align:right;margin:5px 0">Destination Wall IDs: <input type="text" id="post-ids" value="me" onFocus="this.select()" style="width:325px;font-size:10px;line-height:11px;color:gray"/>'+ttnya3+'</div>';
  a+='</div>';
  a+='<div class="bt-box">';
  a+='<span class="tombol-putih" onClick="srchlimit=25;srecpostsonwol()"><i class="gb-trn"></i> Transfer to wall ID</span> ';
  a+='<span id="tbl-smg" class="tombol-putih" onClick="$(this).fadeOut();srecmygrup()"><i class="gb-trng"></i> Transfer to wall Groups</span> ';
  a+='<span class="tombol-putih" onClick="skrinoff()"><i class="gb-klos"></i> Close</span> ';
  a+='</div>';
  a+='<div class="rpt-box">';
  a+='<div id="laporG" class="lapor"></div><div id="lapor" class="lapor"></div><div id="lapor3" class="lapor"></div><div id="selesai" class="lapor"></div>';
  a+='<div style="font-size:10px;text-align:right;padding:0 2px"><a id="sowditel" href="javascript:void(0)" onClick="if($(this).html()==\'Show Details\'){$(this).html(\'Hide Details\');$(\'#lapor2\').fadeIn(function(){repos(\'.konsol\')})}else{$(this).html(\'Show Details\');$(\'#lapor2\').fadeOut(function(){repos(\'.konsol\')})}">Show Details</a></div>';
  a+='<div id="lapor2" class="lapor" style="display:none;max-height:200px;overflow-y:auto"></div>';
  a+='</div>';
  a+='</div>';
  skrinfill(a);
}
var srchlimit=25;
function srecmygrup(){
  $('.rpt-box').fadeIn(function(){repos('.konsol')});

  toketadmin=cktkn();
  $('#laporG').html('Checking your Groups..');
  var uri='https://graph.facebook.com/me/groups?fields=id&access_token='+toketadmin;
  $.getJSON(uri,function(post){
    if(post.data&&post.data.length!=0){
      var a='';
      for(x in post.data){
        a+=post.data[x].id;
        if(x!=post.data.length-1){a+=','}
      }
      $('#post-ids').val(a);
      srchlimit=post.data.length;
      $('#laporG').html('You have <b>'+post.data.length+'</b> Groups. <span class="tombol-putih" onClick="$(this).fadeOut();srecpostsonwol();"><i class="gb-trng"></i> Okay Go!</span>');
    }else{
      $('#laporG').html('<span style="color:darkred">You have no Group!</span>');
      $('#tbl-smg').fadeIn();
    }
  }).error(function(post){$('#tbl-smg').fadeIn();lanjutTrans(post)});
}
function srecpostsonwol(uri){
  $('.rpt-box').fadeIn(function(){});
  $('#lapor').html('Requesting feed..');
  $('#lapor2').fadeOut(function(){$('#sowditel').html('Show Details');repos('.konsol')});
  $('#lapor3').html('');
  $('#selesai').html('');

  wolaydi=$('#wall-id').val();
  toketadmin=cktkn();
  var a=$('#post-ids').val();
  posaydi=a.split(',');

if(posaydi.length==0){
  $('#lapor').html('<span style="color:darkred">Please fill the Destination IDs box.!</span>');
}else{
  $('#lapor').html('Requesting feed..');
  if(uri==null||uri==''){
    uri='https://graph.facebook.com/'+wolaydi+'/posts?limit='+srchlimit+'&fields=message,from,link&access_token='+toketadmin;
    $('#lapor2').html('');
  }
  $.getJSON(uri,function(post){
    dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;hitungBi=0;hitungW=0;hitungPi=0;
    if(post.data&&post.data.length!=0){
      dptrspm=post.data;
      for(x in post.data){
        var pdx=post.data[x];
        if(pdx.message||pdx.link){
          hitung++;
          if(hitungPi>=posaydi.length){hitungPi=0}var destID=posaydi[hitungPi];hitungPi++;
          var prop={method:'post',access_token:toketadmin};
          if(pdx.message){prop.message=pdx.message}
          if(pdx.link){prop.link=pdx.link}
          $.getJSON('https://graph.facebook.com/'+destID+'/feed',prop,lanjutTrans).error(lanjutTrans);
    var rpt='<div>id: '+pdx.id+'</div>';
    rpt+='<div>from: <span style="color:darkblue">'+pdx.from.name+'</span> ID: '+pdx.from.id+'</div>';
    if(pdx.message){rpt+='<small>message: '+pdx.message.replace(/</g,'&lt;')+'</small>';}
    if(pdx.link){rpt+='<div>link: <a href="'+pdx.link+'" target="_blank">'+pdx.link+'</a></div>';}
    var j=jamBaraTeh(pdx.created_time);
    rpt+='<div>time: <b>'+j.complete+'</b></div>';
    $('#lapor2').prepend('<div style="margin-top:5px;padding-top:5px;border-top:1px solid rgba(100,100,100,0.5);font-size:10px">'+rpt+'</div>');
        }
      }
    }
    if(post.paging&&post.paging.next){
      pospenex=post.paging.next;
    }else{
      pospenex='nano-nano';
    }
    $('#lapor').html('<b>'+hitung+' Posts</b> detected.');
  }).error(function(post){dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;hitungBi=0;hitungW=0;hitungPi=0;lanjutTrans(post)});
}
}
function lanjutTrans(post){
  var a='';
  if(post.statusText){
    if(hitung!=0){hitungE++}
    a+='<span style="color:darkred">'+post.statusText+'</span> ';
    if(post.responseText){
      var b=ajAing.erMes(post.responseText);
      a+='<span style="color:darkred">';
      if(b.message){a+=b.message}
      if(b.code){a+=' ('+b.code+')';if(b.code=='500'){rsto=''}}
      a+='</span>';
    }
  }else{
    if(hitung!=0){hitungD++}
    if(post.id){
      a+='<div style="color:gray">'+post.id+'</div>';
    }else{
      a+='<div style="color:gray">'+post+'</div>';
    }
  }
  $('#lapor3').html(a);

  var hitut=hitungE+hitungD;
  var c='Posting '+hitung+' Posts... ('+(hitung-hitut)+' left to go)';
  if(hitut==hitung){
    c='DONE. ';
    if(pospenex=='nano-nano'){
      if(rsto!=''){}
    }else{
      c+='<span class="tombol-putih" onClick="srecpostsonwol(pospenex)" style="line-height:11px;padding:0 2px">Post more..</span> ';
//      if(rsto!=''){srecpostsonwol(pospenex)}
    }
  }else{
  }
  c+='<span style="color:darkred">'+hitungE+'</span> + <span style="color:darkgreen">'+hitungD+'</span> = '+hitut+'<div></div>';
  $('#selesai').html(c);
}