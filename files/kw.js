function wolklineur(){
  var a='<div class="konsol">';
  a+='<div class="dip-luar"><h2 class="h-box">Wall Cleaner</h2><div class="dip-bok">This tool for cleaned up unwanted posts or comments on your profile, group or page wall.</div></div>';
  a+='<div class="txt-box" style="color:#443333">';
  a+='<div style="text-align:right;margin:0 0 5px 0">UserID/Username: <input type="text" id="wall-id" value="';
  if(wolaydi==''){a+='me'}else{a+=wolaydi}
  a+='" onFocus="this.select()" style="width:200px"/></div>';
  a+='<div style="text-align:right;margin:0 0 5px 0">Access token: <input type="text" id="admin-token" value="';
  if(toketadmin!=''){a+=toketadmin}
  a+='" onFocus="this.select()" style="width:200px"/> ';
  a+='<span class="tombol-putih" onClick="gettoket()"><i class="gb-tkn"></i> Get Token</span></div>';
  a+='<div style="text-align:right;margin:5px 0">Anti-UserID/Username: <input type="text" id="aktor-id" value="" onFocus="this.select()" style="width:380px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Anti-AppID/API key: <input type="text" id="app-axc" value="(45439413586|2915120374|139682082719810|232625956763971|350685531728|2254487659|146433062118911|376872972363572|315222868552357|45439413586|282891415108049)" onFocus="this.select()" style="width:380px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Anti-Words: <input type="text" id="word-axc" value="(babi|sial|cibai|puki|anjing|bodoh)" onFocus="this.select()" style="width:380px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Search limit: <input type="text" id="search-limit" value="25" onFocus="this.select()" style="width:30px"/> Re-scan timeout: <input type="text" id="timeout-delay" value="60000" onFocus="this.select()" style="width:50px"/></div>';
  a+='</div>';
  a+='<div class="bt-box">';
  a+='<span class="tombol-putih" onClick="klinwol()"><i class="gb-wall"></i> Clean Wall</span> ';
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
function klinwol(uri){
  priperInput();
  if(uri==null||uri==''){
    uri='https://graph.facebook.com/'+wolaydi+'/feed?limit='+slmt+'&access_token='+toketadmin;
  }
  $.getJSON(uri,function(post){
    dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;
    if(post.data&&post.data.length!=0){
      for(x in post.data){
        var pdx=post.data[x];
        if(pdx.application&&pdx.application.id.match(apax)==null){
          pusEurey(dptrspm,pdx,'application');
        }else if(fbi!=''){
          if(pdx.from&&pdx.from.id&&pdx.from.id.match(fbi)!=null){
            pusEurey(dptrspm,pdx,'post');
          }else if(pdx.comments&&pdx.comments.data&&pdx.comments.data.length!=0){
            for(y in pdx.comments.data){
              var pdxcdy=pdx.comments.data[y];
              if(pdxcdy.from&&pdxcdy.from.id&&pdxcdy.from.id.match(fbi)!=null){
                pusEurey(dptrspm,pdxcdy,'comment');
              }
            }
          }
        }else if(wrax!=''){
          if(pdx.message&&pdx.message.match(wrax)!=null){
            pusEurey(dptrspm,pdx,'post');
          }else if(pdx.comments&&pdx.comments.data&&pdx.comments.data.length!=0){
            for(y in pdx.comments.data){
              var pdxcdy=pdx.comments.data[y];
              if(pdxcdy.message&&pdxcdy.message.match(wrax)!=null){
                pusEurey(dptrspm,pdxcdy,'comment');
              }
            }
          }else if(pdx.comments.count&&pdx.comments.count!=0){
            $.getJSON('https://graph.facebook.com/'+pdx.id+'/comments?access_token='+toketadmin,function(pes){
              if(pes.data&&pes.data.length!=0){
                for(w in pes.data){
                  var ped=pes.data[w];
                  if(ped.message&&ped.message.match(wrax)!=null){
                    pusEurey('kill',ped);
                  }
                }
              }
            });
          }
        }
      }
    }
    if(post.paging&&post.paging.next){
      pospenex=post.paging.next;
    }else{
      pospenex='nano-nano';
    }
    if(dptrspm.length==0){
      if(rsto!=''){sto=setTimeout("klinwol()",rsto)}
    }else{
      for(y in dptrspm){
        $.getJSON('https://graph.facebook.com/'+dptrspm[y].id+'?method=delete&access_token='+toketadmin,lanjutklinwol).error(lanjutklinwol);
        var rpt='<div>id: '+dptrspm[y].id+'</div>';
        rpt+='<div>from: '+dptrspm[y].name+' ID: '+dptrspm[y].uid+'</div>';
        rpt+='<div>type: <b>'+dptrspm[y].type+'</b>';
        if(dptrspm[y].type=='application'){rpt+=' <span class="tombol" onClick="clearTimeout(sto);gettoket(\''+dptrspm[y].app+'\')" style="line-height:11px;padding:0 2px">Get token from '+dptrspm[y].app+'</span>'}
        rpt+='</div>';
        rpt+='<small>message: '+dptrspm[y].pesan.replace(/</g,'&lt;')+'</small>';
        rpt+='<div>time: <b>'+dptrspm[y].time+'</b></div>';
        $('#lapor2').prepend('<div style="margin-top:5px;padding-top:5px;border-top:1px solid rgba(100,100,100,0.5);font-size:10px">'+rpt+'</div>');
      }
    }
    $('#lapor').html('<b>'+dptrspm.length+' Spams</b> detected.<br/>'+hitung+' on posts, '+hitungC+' on comments and '+hitungA+' via app.');
  }).error(function(post){pospenex='nano-nano';dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;lanjutklinwol(post)});
}
function lanjutklinwol(post){
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
    }
  }
  $('#lapor3').html(a);

  var hitut=hitungE+hitungD;
  var c='Deleting '+dptrspm.length+' Posts... ('+(dptrspm.length-hitut)+' left to go)';
  if(hitut==dptrspm.length){
    c='DONE. ';
    if(pospenex!='nano-nano'){
      c+='<span class="tombol-putih" onClick="clearTimeout(sto);klinwol(pospenex)" style="line-height:11px;padding:0 2px">Next Search</span> ';
    }
    if(rsto!=''){sto=setTimeout("klinwol()",rsto)}
  }else{
  }
  c+='<span style="color:darkred">'+hitungE+'</span> + <span style="color:darkgreen">'+hitungD+'</span> = '+hitut+'<div></div>';
  $('#selesai').html(c);
}