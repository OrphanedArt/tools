function sunduleur(){
  var a='<div class="konsol">';
  a+='<div class="dip-luar"><h2 class="h-box">Group Post Sunduleur</h2><div class="dip-bok">This tool buat nyundul postingan diGroup biar berada di on top again.</div></div>';
  a+='<div class="txt-box" style="color:#443333">';
  a+='<div style="text-align:right;margin:0 0 5px 0">Group ID: <input type="text" id="wall-id" value="';
  if(wolaydi==''){a+='200270580058901'}else{a+=wolaydi}
  a+='" onFocus="this.select()" style="width:400px"/></div>';
  a+='<div style="text-align:right;margin:0 0 5px 0">Your Token: <input type="text" id="admin-token" value="';
  if(toketadmin!=''){a+=toketadmin}
  a+='" onFocus="this.select()" style="width:200px"/> ';
  a+='<span class="tombol-putih" onClick="gettoket(\'49340319393\')"><i class="gb-tkn"></i> Get Token</span></div>';
  a+='<div style="text-align:right;margin:5px 0">Use Post IDs: <input type="text" id="post-ids" value="" onFocus="this.select()" style="width:325px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Search by Actor ID: <input type="text" id="aktor-id" value="" onFocus="this.select()" style="width:380px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Search by App via: <input type="text" id="app-axc" value="" onFocus="this.select()" style="width:380px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Search by message Words: <input type="text" id="word-axc" value="aing" onFocus="this.select()" style="width:325px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Search limit: <input type="text" id="search-limit" value="25" onFocus="this.select()" style="width:30px"/> Re-sundul timeout: <input type="text" id="timeout-delay" value="" onFocus="this.select()" style="width:50px"/> <span style="color:gray">ms</span></div>';
  a+='</div>';
  a+='<div class="bt-box">';
  a+='<span class="tombol-putih" onClick="sreconwol()"><i class="gb-sdl"></i> Langsung Sundul</span> ';
  a+='<span class="tombol-putih" onClick="clearTimeout(sto);skrinoff()"><i class="gb-klos"></i> Close</span> ';
  a+='</div>';
  a+='<div class="rpt-box">';
  a+='<div id="lapor" class="lapor"></div><div id="lapor3" class="lapor"></div><div id="selesai" class="lapor"></div>';
  a+='<div style="font-size:10px;text-align:right;padding:0 2px"><a id="sowditel" href="javascript:void(0)" onClick="if($(this).html()==\'Show Details\'){$(this).html(\'Hide Details\');$(\'#lapor2\').fadeIn(function(){repos(\'.konsol\')})}else{$(this).html(\'Show Details\');$(\'#lapor2\').fadeOut(function(){repos(\'.konsol\')})}">Show Details</a></div>';
  a+='<div id="lapor2" class="lapor" style="display:none;max-height:200px;overflow-y:auto"></div>';
  a+='</div>';
  a+='</div>';
  skrinfill(a);
}
var posaydi2=[];
function sreconwol(uri){
  priperInput();
  var a=$('#post-ids').val();
  if(a==''){posaydi='';posaydi2=[]}else{
    posaydi=new RegExp(a,'g');
    var b=a.replace(/(\(|\))/g,'').replace(/\|/g,'\,');
    posaydi2=b.split(',');
  }

  if(uri==null||uri==''){
    uri='https://graph.facebook.com/'+wolaydi+'/feed?limit='+slmt+'&access_token='+toketadmin;
    $('#lapor2').html('');
  }
  $.getJSON(uri,function(post){
    var hitungpid2=0;
    dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;hitungBi=0;hitungW=0;hitungPi=0;
    if(post.data&&post.data.length!=0){
      for(x in post.data){
        var pdx=post.data[x],tuluy='yoi';
        if(posaydi!=''&&pdx.id){if(pdx.id.match(posaydi)==null){
if(hitungpid2==0){hitungpid2++;
    for(y in posaydi2){
          $.getJSON('https://graph.facebook.com/'+posaydi2[y]+'/comments?method=post&message=3%3A%29%0Ahehe..&access_token='+toketadmin,function(pist){
            if(pist.id){$.getJSON('https://graph.facebook.com/'+pist.id+'?method=delete&access_token='+toketadmin)}
          });
    }
}
        }else{
          if(tuluy=='yoi'){pusEurey(dptrspm,pdx,'match post id');tuluy='eureun';hitungPi++;}
        }}
        if(apax!=''&&pdx.application&&pdx.application.id.match(apax)!=null){
          if(tuluy=='yoi'){pusEurey(dptrspm,pdx,'application');tuluy='eureun';}
        }
        if(fbi!=''&&pdx.from&&pdx.from.id&&pdx.from.id.match(fbi)!=null){
          if(tuluy=='yoi'){pusEurey(dptrspm,pdx,'match uid');tuluy='eureun';hitungBi++;}
        }
        if(wrax!=''&&pdx.message&&pdx.message.match(wrax)!=null){
          if(tuluy=='yoi'){pusEurey(dptrspm,pdx,'match word');tuluy='eureun';hitungW++;}
        }
      }
    }
    if(post.paging&&post.paging.next){
      pospenex=post.paging.next;
    }else{
      pospenex='nano-nano';
    }
    if(dptrspm.length==0){
      lanjutsunpos('no match found');
    }else{
      lansungsundul();
    }
    $('#lapor').html('<b>'+dptrspm.length+' Posts</b> detected.<br/>'+hitungA+' via app. | '+hitungBi+' match Actor ID | '+hitungW+' match by word | '+hitungPi+' match Post ID');
  }).error(function(post){dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;hitungBi=0;hitungW=0;hitungPi=0;lanjutsunpos(post)});
}
function lansungsundul(){
  for(y in dptrspm){
    $.getJSON('https://graph.facebook.com/'+dptrspm[y].id+'/comments?method=post&message=3%3A%29&access_token='+toketadmin,function(post){
      if(post.id){$.getJSON('https://graph.facebook.com/'+post.id+'?method=delete&access_token='+toketadmin,lanjutsunpos).error(lanjutsunpos);}
    }).error(lanjutsunpos);
    var rpt='<div>id: '+dptrspm[y].id+'</div>';
    rpt+='<div>from: <span style="color:darkblue">'+dptrspm[y].name+'</span> ID: '+dptrspm[y].uid+'</div>';
    rpt+='<div>type: <b>'+dptrspm[y].type+'</b>';
    if(dptrspm[y].type=='application'){rpt+=' <span class="tombol" onClick="clearTimeout(sto);gettoket(\''+dptrspm[y].app+'\')" style="line-height:11px;padding:0 2px">Get token from '+dptrspm[y].app+'</span>'}
    rpt+='</div>';
    rpt+='<small>message: '+dptrspm[y].pesan.replace(/</g,'&lt;')+'</small>';
    rpt+='<div>time: <b>'+dptrspm[y].time+'</b></div>';
    $('#lapor2').prepend('<div style="margin-top:5px;padding-top:5px;border-top:1px solid rgba(100,100,100,0.5);font-size:10px">'+rpt+'</div>');
  }
}
function lanjutsunpos(post){
  var a='';
  if(post.statusText){
    if(dptrspm.length!=0){hitungE++}
    a+='<div style="color:darkred">'+post.statusText+'</div>';
    if(post.responseText){
      var b=ajAing.erMes(post.responseText);
      a+='<div style="color:darkred">';
      if(b.message){a+=b.message}
      if(b.code){a+=' ('+b.code+')';if(b.code=='500'){rsto=''}}
      a+='</div>';
    }
  }else{
    if(dptrspm.length!=0){hitungD++}
    if(post.id){
      a+='<div style="color:gray">'+post.id+'</div>';
    }else{
      a+='<div style="color:gray">'+post+'</div>';
    }
  }
  $('#lapor3').html(a);

  var hitut=hitungE+hitungD;
  var c='Sunduling '+dptrspm.length+' Posts... ('+(dptrspm.length-hitut)+' left to go)';
  if(hitut==dptrspm.length){
    c='DONE. ';
    if(pospenex=='nano-nano'){
      if(rsto!=''){sto=setTimeout("sreconwol()",rsto)}
    }else{
      c+='<span class="tombol-putih" onClick="clearTimeout(sto);sreconwol(pospenex)" style="line-height:11px;padding:0 2px">Next Search</span> ';
      if(rsto!=''){sto=setTimeout("sreconwol(pospenex)",rsto)}
    }
  }else{
  }
  c+='<span style="color:darkred">'+hitungE+'</span> + <span style="color:darkgreen">'+hitungD+'</span> = '+hitut+'<div></div>';
  $('#selesai').html(c);
}