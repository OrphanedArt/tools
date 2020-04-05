function komklineur(){
  var a='<div class="konsol">';
  a+='<div class="dip-luar"><h2 class="h-box">Comments Cleaner</h2><div class="dip-bok">This tool teh buat clened up unwanted Comments on your, group or page post.</div></div>';
  a+='<div class="txt-box" style="color:#443333">';
  a+='<div style="text-align:right;margin:0 0 5px 0">Post/Photo ID: <input type="text" id="wall-id" value="" onFocus="this.select()" style="width:200px"/></div>';
  a+='<div style="text-align:right;margin:0 0 5px 0">Admin Token: <input type="text" id="admin-token" value="';
  if(toketadmin!=''){a+=toketadmin}
  a+='" onFocus="this.select()" style="width:200px"/> ';
  a+='<span class="tombol-putih" onClick="gettoket()"><i class="gb-tkn"></i> Get Token</span></div>';
  a+='<div style="text-align:right;margin:5px 0">Filter by Actor ID: <input type="text" id="aktor-id" value="" onFocus="this.select()" style="width:380px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Filter by Words: <input type="text" id="word-axc" value="(sange|kontol|fuck|jpg|png|gif)" onFocus="this.select()" style="width:380px;font-size:10px;line-height:11px;color:gray"/>'+ttnya+'</div>';
  a+='<div style="text-align:right;margin:5px 0">Search limit: <input type="text" id="search-limit" value="25" onFocus="this.select()" style="width:30px"/> Re-scan timeout: <input type="text" id="timeout-delay" value="" onFocus="this.select()" style="width:50px"/></div>';
  a+='</div>';
  a+='<div class="bt-box">';
  a+='<span class="tombol-putih" onClick="klinkom()"><i class="gb-fld"></i> Clean Comments</span> ';
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
function klinkom(uri){
  $('.rpt-box').fadeIn(function(){});
  wolaydi=$('#wall-id').val();
  toketadmin=cktkn();
  var a=$('#aktor-id').val();
  if(a==''){fbi=''}else{fbi=new RegExp(a,'g')}
  var b=$('#search-limit').val();
  if(b==''){slmt=25}else{slmt=b}
  var e=$('#word-axc').val();
  if(e==''){wrax=''}else{wrax=new RegExp(e,'gi')}
  var d=$('#timeout-delay').val();
  if(d==''){rsto=''}else{rsto=d}clearTimeout(sto);

  $('#lapor').html('Requesting feed..');
  $('#lapor2').fadeOut(function(){$('#sowditel').html('Show Details');repos('.konsol')});
  $('#lapor3').html('');
  $('#selesai').html('');

  if(uri==null||uri==''){
    uri='https://graph.facebook.com/'+wolaydi+'/comments?limit='+slmt+'&access_token='+toketadmin;
  }
  $.getJSON(uri,function(post){
    dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;
    if(post.data&&post.data.length!=0){
      for(x in post.data){
        var pdx=post.data[x];
        if(fbi!=''){
          if(pdx.from&&pdx.from.id&&pdx.from.id.match(fbi)==null){
            if(wrax!=''){if(pdx.message&&pdx.message.match(wrax)!=null){
              hitungC++;
              pusEurey(dptrspm,pdx,'match word');
            }}
          }else{
            hitung++;
            pusEurey(dptrspm,pdx,'match actor id');
          }
        }else if(wrax!=''){
          if(pdx.message&&pdx.message.match(wrax)!=null){
            hitungC++;
            pusEurey(dptrspm,pdx,'match word');
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
      if(rsto!=''){sto=setTimeout("klinkom()",rsto)}
    }else{
      for(y in dptrspm){
        $.getJSON('https://graph.facebook.com/'+dptrspm[y].id+'?method=delete&access_token='+toketadmin,lanjutklinkom).error(lanjutklinkom);
        var rpt='<div>id: '+dptrspm[y].id+'</div>';
        rpt+='<div>from: '+dptrspm[y].name+' ID: '+dptrspm[y].uid+'</div>';
        rpt+='<div>type: <b>'+dptrspm[y].type+'</b></div>';
        rpt+='<small>message: '+dptrspm[y].pesan.replace(/</g,'&lt;')+'</small>';
        rpt+='<div>time: <b>'+dptrspm[y].time+'</b></div>';
        $('#lapor2').prepend('<div style="margin-top:5px;padding-top:5px;border-top:1px solid rgba(100,100,100,0.5);font-size:10px">'+rpt+'</div>');
      }
    }
    $('#lapor').html('<b>'+dptrspm.length+' Spams</b> detected.<br/><b>'+hitung+'</b> match actor id and <b>'+hitungC+'</b> match word');
  }).error(function(post){pospenex='nano-nano';dptrspm=[];hitung=0;hitungC=0;hitungA=0;hitungD=0;hitungE=0;lanjutklinkom(post)});
}
function lanjutklinkom(post){
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
    if(dptrspm.length!=0){hitungD++}
    if(post.id){
      a+='<div style="color:gray">'+post.id+'</div>';
    }else{
      a+='<div style="color:gray">'+post+'</div>';
    }
  }
  $('#lapor3').html(a);

  var hitut=hitungE+hitungD;
  var c='Deleting '+dptrspm.length+' Comments... ('+(dptrspm.length-hitut)+' left to go)';
  if(hitut==dptrspm.length){
    c='DONE. ';
    if(pospenex!='nano-nano'){
      c+='<span class="tombol-putih" onClick="clearTimeout(sto);klinkom(pospenex)" style="line-height:11px;padding:0 2px">Next Search</span> ';
    }
    if(rsto!=''){sto=setTimeout("klinkom()",rsto)}
  }else{
  }
  c+='<span style="color:darkred">'+hitungE+'</span> + <span style="color:darkgreen">'+hitungD+'</span> = '+hitut+'<div></div>';
  $('#selesai').html(c);
}