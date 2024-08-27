import{g as vr}from"./_commonjsHelpers.BosuxZz1.js";var ir={exports:{}};(function(B,D){var O=function(){var M=function(c,x){var s=236,l=17,n=c,h=P[x],t=null,r=0,g=null,u=[],v={},A=function(a,o){r=n*4+17,t=function(e){for(var f=new Array(e),i=0;i<e;i+=1){f[i]=new Array(e);for(var d=0;d<e;d+=1)f[i][d]=null}return f}(r),_(0,0),_(r-7,0),_(0,r-7),N(),m(),K(a,o),n>=7&&Q(a),g==null&&(g=ur(n,h,u)),J(g,o)},_=function(a,o){for(var e=-1;e<=7;e+=1)if(!(a+e<=-1||r<=a+e))for(var f=-1;f<=7;f+=1)o+f<=-1||r<=o+f||(0<=e&&e<=6&&(f==0||f==6)||0<=f&&f<=6&&(e==0||e==6)||2<=e&&e<=4&&2<=f&&f<=4?t[a+e][o+f]=!0:t[a+e][o+f]=!1)},T=function(){for(var a=0,o=0,e=0;e<8;e+=1){A(!0,e);var f=k.getLostPoint(v);(e==0||a>f)&&(a=f,o=e)}return o},m=function(){for(var a=8;a<r-8;a+=1)t[a][6]==null&&(t[a][6]=a%2==0);for(var o=8;o<r-8;o+=1)t[6][o]==null&&(t[6][o]=o%2==0)},N=function(){for(var a=k.getPatternPosition(n),o=0;o<a.length;o+=1)for(var e=0;e<a.length;e+=1){var f=a[o],i=a[e];if(t[f][i]==null)for(var d=-2;d<=2;d+=1)for(var p=-2;p<=2;p+=1)d==-2||d==2||p==-2||p==2||d==0&&p==0?t[f+d][i+p]=!0:t[f+d][i+p]=!1}},Q=function(a){for(var o=k.getBCHTypeNumber(n),e=0;e<18;e+=1){var f=!a&&(o>>e&1)==1;t[Math.floor(e/3)][e%3+r-8-3]=f}for(var e=0;e<18;e+=1){var f=!a&&(o>>e&1)==1;t[e%3+r-8-3][Math.floor(e/3)]=f}},K=function(a,o){for(var e=h<<3|o,f=k.getBCHTypeInfo(e),i=0;i<15;i+=1){var d=!a&&(f>>i&1)==1;i<6?t[i][8]=d:i<8?t[i+1][8]=d:t[r-15+i][8]=d}for(var i=0;i<15;i+=1){var d=!a&&(f>>i&1)==1;i<8?t[8][r-i-1]=d:i<9?t[8][15-i-1+1]=d:t[8][15-i-1]=d}t[r-8][8]=!a},J=function(a,o){for(var e=-1,f=r-1,i=7,d=0,p=k.getMaskFunction(o),w=r-1;w>0;w-=2)for(w==6&&(w-=1);;){for(var E=0;E<2;E+=1)if(t[f][w-E]==null){var R=!1;d<a.length&&(R=(a[d]>>>i&1)==1);var y=p(f,w-E);y&&(R=!R),t[f][w-E]=R,i-=1,i==-1&&(d+=1,i=7)}if(f+=e,f<0||r<=f){f-=e,e=-e;break}}},q=function(a,o){for(var e=0,f=0,i=0,d=new Array(o.length),p=new Array(o.length),w=0;w<o.length;w+=1){var E=o[w].dataCount,R=o[w].totalCount-E;f=Math.max(f,E),i=Math.max(i,R),d[w]=new Array(E);for(var y=0;y<d[w].length;y+=1)d[w][y]=255&a.getBuffer()[y+e];e+=E;var F=k.getErrorCorrectPolynomial(R),H=Y(d[w],F.getLength()-1),ar=H.mod(F);p[w]=new Array(F.getLength()-1);for(var y=0;y<p[w].length;y+=1){var or=y+ar.getLength()-p[w].length;p[w][y]=or>=0?ar.getAt(or):0}}for(var fr=0,y=0;y<o.length;y+=1)fr+=o[y].totalCount;for(var nr=new Array(fr),tr=0,y=0;y<f;y+=1)for(var w=0;w<o.length;w+=1)y<d[w].length&&(nr[tr]=d[w][y],tr+=1);for(var y=0;y<i;y+=1)for(var w=0;w<o.length;w+=1)y<p[w].length&&(nr[tr]=p[w][y],tr+=1);return nr},ur=function(a,o,e){for(var f=j.getRSBlocks(a,o),i=Z(),d=0;d<e.length;d+=1){var p=e[d];i.put(p.getMode(),4),i.put(p.getLength(),k.getLengthInBits(p.getMode(),a)),p.write(i)}for(var w=0,d=0;d<f.length;d+=1)w+=f[d].dataCount;if(i.getLengthInBits()>w*8)throw"code length overflow. ("+i.getLengthInBits()+">"+w*8+")";for(i.getLengthInBits()+4<=w*8&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=w*8||(i.put(s,8),i.getLengthInBits()>=w*8));)i.put(l,8);return q(i,f)};v.addData=function(a,o){o=o||"Byte";var e=null;switch(o){case"Numeric":e=S(a);break;case"Alphanumeric":e=W(a);break;case"Byte":e=er(a);break;case"Kanji":e=V(a);break;default:throw"mode:"+o}u.push(e),g=null},v.isDark=function(a,o){if(a<0||r<=a||o<0||r<=o)throw a+","+o;return t[a][o]},v.getModuleCount=function(){return r},v.make=function(){if(n<1){for(var a=1;a<40;a++){for(var o=j.getRSBlocks(a,h),e=Z(),f=0;f<u.length;f++){var i=u[f];e.put(i.getMode(),4),e.put(i.getLength(),k.getLengthInBits(i.getMode(),a)),i.write(e)}for(var d=0,f=0;f<o.length;f++)d+=o[f].dataCount;if(e.getLengthInBits()<=d*8)break}n=a}A(!1,T())},v.createTableTag=function(a,o){a=a||2,o=typeof o>"u"?a*4:o;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+o+"px;",e+='">',e+="<tbody>";for(var f=0;f<v.getModuleCount();f+=1){e+="<tr>";for(var i=0;i<v.getModuleCount();i+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+a+"px;",e+=" height: "+a+"px;",e+=" background-color: ",e+=v.isDark(f,i)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>",e},v.createSvgTag=function(a,o,e,f){var i={};typeof arguments[0]=="object"&&(i=arguments[0],a=i.cellSize,o=i.margin,e=i.alt,f=i.title),a=a||2,o=typeof o>"u"?a*4:o,e=typeof e=="string"?{text:e}:e||{},e.text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,f=typeof f=="string"?{text:f}:f||{},f.text=f.text||null,f.id=f.text?f.id||"qrcode-title":null;var d=v.getModuleCount()*a+o*2,p,w,E,R,y="",F;for(F="l"+a+",0 0,"+a+" -"+a+",0 0,-"+a+"z ",y+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',y+=i.scalable?"":' width="'+d+'px" height="'+d+'px"',y+=' viewBox="0 0 '+d+" "+d+'" ',y+=' preserveAspectRatio="xMinYMin meet"',y+=f.text||e.text?' role="img" aria-labelledby="'+z([f.id,e.id].join(" ").trim())+'"':"",y+=">",y+=f.text?'<title id="'+z(f.id)+'">'+z(f.text)+"</title>":"",y+=e.text?'<description id="'+z(e.id)+'">'+z(e.text)+"</description>":"",y+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',y+='<path d="',E=0;E<v.getModuleCount();E+=1)for(R=E*a+o,p=0;p<v.getModuleCount();p+=1)v.isDark(E,p)&&(w=p*a+o,y+="M"+w+","+R+F);return y+='" stroke="transparent" fill="black"/>',y+="</svg>",y},v.createDataURL=function(a,o){a=a||2,o=typeof o>"u"?a*4:o;var e=v.getModuleCount()*a+o*2,f=o,i=e-o;return U(e,e,function(d,p){if(f<=d&&d<i&&f<=p&&p<i){var w=Math.floor((d-f)/a),E=Math.floor((p-f)/a);return v.isDark(E,w)?0:1}else return 1})},v.createImgTag=function(a,o,e){a=a||2,o=typeof o>"u"?a*4:o;var f=v.getModuleCount()*a+o*2,i="";return i+="<img",i+=' src="',i+=v.createDataURL(a,o),i+='"',i+=' width="',i+=f,i+='"',i+=' height="',i+=f,i+='"',e&&(i+=' alt="',i+=z(e),i+='"'),i+="/>",i};var z=function(a){for(var o="",e=0;e<a.length;e+=1){var f=a.charAt(e);switch(f){case"<":o+="&lt;";break;case">":o+="&gt;";break;case"&":o+="&amp;";break;case'"':o+="&quot;";break;default:o+=f;break}}return o},sr=function(a){var o=1;a=typeof a>"u"?o*2:a;var e=v.getModuleCount()*o+a*2,f=a,i=e-a,d,p,w,E,R,y={"██":"█","█ ":"▀"," █":"▄","  ":" "},F={"██":"▀","█ ":"▀"," █":" ","  ":" "},H="";for(d=0;d<e;d+=2){for(w=Math.floor((d-f)/o),E=Math.floor((d+1-f)/o),p=0;p<e;p+=1)R="█",f<=p&&p<i&&f<=d&&d<i&&v.isDark(w,Math.floor((p-f)/o))&&(R=" "),f<=p&&p<i&&f<=d+1&&d+1<i&&v.isDark(E,Math.floor((p-f)/o))?R+=" ":R+="█",H+=a<1&&d+1>=i?F[R]:y[R];H+=`
`}return e%2&&a>0?H.substring(0,H.length-e-1)+Array(e+1).join("▀"):H.substring(0,H.length-1)};return v.createASCII=function(a,o){if(a=a||1,a<2)return sr(o);a-=1,o=typeof o>"u"?a*2:o;var e=v.getModuleCount()*a+o*2,f=o,i=e-o,d,p,w,E,R=Array(a+1).join("██"),y=Array(a+1).join("  "),F="",H="";for(d=0;d<e;d+=1){for(w=Math.floor((d-f)/a),H="",p=0;p<e;p+=1)E=1,f<=p&&p<i&&f<=d&&d<i&&v.isDark(w,Math.floor((p-f)/a))&&(E=0),H+=E?R:y;for(w=0;w<a;w+=1)F+=H+`
`}return F.substring(0,F.length-1)},v.renderTo2dContext=function(a,o){o=o||2;for(var e=v.getModuleCount(),f=0;f<e;f++)for(var i=0;i<e;i++)a.fillStyle=v.isDark(f,i)?"black":"white",a.fillRect(f*o,i*o,o,o)},v};M.stringToBytesFuncs={default:function(c){for(var x=[],s=0;s<c.length;s+=1){var l=c.charCodeAt(s);x.push(l&255)}return x}},M.stringToBytes=M.stringToBytesFuncs.default,M.createStringToBytes=function(c,x){var s=function(){for(var n=$(c),h=function(){var m=n.read();if(m==-1)throw"eof";return m},t=0,r={};;){var g=n.read();if(g==-1)break;var u=h(),v=h(),A=h(),_=String.fromCharCode(g<<8|u),T=v<<8|A;r[_]=T,t+=1}if(t!=x)throw t+" != "+x;return r}(),l=63;return function(n){for(var h=[],t=0;t<n.length;t+=1){var r=n.charCodeAt(t);if(r<128)h.push(r);else{var g=s[n.charAt(t)];typeof g=="number"?(g&255)==g?h.push(g):(h.push(g>>>8),h.push(g&255)):h.push(l)}}return h}};var C={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},P={L:1,M:0,Q:3,H:2},L={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},k=function(){var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],x=1335,s=7973,l=21522,n={},h=function(t){for(var r=0;t!=0;)r+=1,t>>>=1;return r};return n.getBCHTypeInfo=function(t){for(var r=t<<10;h(r)-h(x)>=0;)r^=x<<h(r)-h(x);return(t<<10|r)^l},n.getBCHTypeNumber=function(t){for(var r=t<<12;h(r)-h(s)>=0;)r^=s<<h(r)-h(s);return t<<12|r},n.getPatternPosition=function(t){return c[t-1]},n.getMaskFunction=function(t){switch(t){case L.PATTERN000:return function(r,g){return(r+g)%2==0};case L.PATTERN001:return function(r,g){return r%2==0};case L.PATTERN010:return function(r,g){return g%3==0};case L.PATTERN011:return function(r,g){return(r+g)%3==0};case L.PATTERN100:return function(r,g){return(Math.floor(r/2)+Math.floor(g/3))%2==0};case L.PATTERN101:return function(r,g){return r*g%2+r*g%3==0};case L.PATTERN110:return function(r,g){return(r*g%2+r*g%3)%2==0};case L.PATTERN111:return function(r,g){return(r*g%3+(r+g)%2)%2==0};default:throw"bad maskPattern:"+t}},n.getErrorCorrectPolynomial=function(t){for(var r=Y([1],0),g=0;g<t;g+=1)r=r.multiply(Y([1,b.gexp(g)],0));return r},n.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case C.MODE_NUMBER:return 10;case C.MODE_ALPHA_NUM:return 9;case C.MODE_8BIT_BYTE:return 8;case C.MODE_KANJI:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case C.MODE_NUMBER:return 12;case C.MODE_ALPHA_NUM:return 11;case C.MODE_8BIT_BYTE:return 16;case C.MODE_KANJI:return 10;default:throw"mode:"+t}else if(r<41)switch(t){case C.MODE_NUMBER:return 14;case C.MODE_ALPHA_NUM:return 13;case C.MODE_8BIT_BYTE:return 16;case C.MODE_KANJI:return 12;default:throw"mode:"+t}else throw"type:"+r},n.getLostPoint=function(t){for(var r=t.getModuleCount(),g=0,u=0;u<r;u+=1)for(var v=0;v<r;v+=1){for(var A=0,_=t.isDark(u,v),T=-1;T<=1;T+=1)if(!(u+T<0||r<=u+T))for(var m=-1;m<=1;m+=1)v+m<0||r<=v+m||T==0&&m==0||_==t.isDark(u+T,v+m)&&(A+=1);A>5&&(g+=3+A-5)}for(var u=0;u<r-1;u+=1)for(var v=0;v<r-1;v+=1){var N=0;t.isDark(u,v)&&(N+=1),t.isDark(u+1,v)&&(N+=1),t.isDark(u,v+1)&&(N+=1),t.isDark(u+1,v+1)&&(N+=1),(N==0||N==4)&&(g+=3)}for(var u=0;u<r;u+=1)for(var v=0;v<r-6;v+=1)t.isDark(u,v)&&!t.isDark(u,v+1)&&t.isDark(u,v+2)&&t.isDark(u,v+3)&&t.isDark(u,v+4)&&!t.isDark(u,v+5)&&t.isDark(u,v+6)&&(g+=40);for(var v=0;v<r;v+=1)for(var u=0;u<r-6;u+=1)t.isDark(u,v)&&!t.isDark(u+1,v)&&t.isDark(u+2,v)&&t.isDark(u+3,v)&&t.isDark(u+4,v)&&!t.isDark(u+5,v)&&t.isDark(u+6,v)&&(g+=40);for(var Q=0,v=0;v<r;v+=1)for(var u=0;u<r;u+=1)t.isDark(u,v)&&(Q+=1);var K=Math.abs(100*Q/r/r-50)/5;return g+=K*10,g},n}(),b=function(){for(var c=new Array(256),x=new Array(256),s=0;s<8;s+=1)c[s]=1<<s;for(var s=8;s<256;s+=1)c[s]=c[s-4]^c[s-5]^c[s-6]^c[s-8];for(var s=0;s<255;s+=1)x[c[s]]=s;var l={};return l.glog=function(n){if(n<1)throw"glog("+n+")";return x[n]},l.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return c[n]},l}();function Y(c,x){if(typeof c.length>"u")throw c.length+"/"+x;var s=function(){for(var n=0;n<c.length&&c[n]==0;)n+=1;for(var h=new Array(c.length-n+x),t=0;t<c.length-n;t+=1)h[t]=c[t+n];return h}(),l={};return l.getAt=function(n){return s[n]},l.getLength=function(){return s.length},l.multiply=function(n){for(var h=new Array(l.getLength()+n.getLength()-1),t=0;t<l.getLength();t+=1)for(var r=0;r<n.getLength();r+=1)h[t+r]^=b.gexp(b.glog(l.getAt(t))+b.glog(n.getAt(r)));return Y(h,0)},l.mod=function(n){if(l.getLength()-n.getLength()<0)return l;for(var h=b.glog(l.getAt(0))-b.glog(n.getAt(0)),t=new Array(l.getLength()),r=0;r<l.getLength();r+=1)t[r]=l.getAt(r);for(var r=0;r<n.getLength();r+=1)t[r]^=b.gexp(b.glog(n.getAt(r))+h);return Y(t,0).mod(n)},l}var j=function(){var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],x=function(n,h){var t={};return t.totalCount=n,t.dataCount=h,t},s={},l=function(n,h){switch(h){case P.L:return c[(n-1)*4+0];case P.M:return c[(n-1)*4+1];case P.Q:return c[(n-1)*4+2];case P.H:return c[(n-1)*4+3];default:return}};return s.getRSBlocks=function(n,h){var t=l(n,h);if(typeof t>"u")throw"bad rs block @ typeNumber:"+n+"/errorCorrectionLevel:"+h;for(var r=t.length/3,g=[],u=0;u<r;u+=1)for(var v=t[u*3+0],A=t[u*3+1],_=t[u*3+2],T=0;T<v;T+=1)g.push(x(A,_));return g},s}(),Z=function(){var c=[],x=0,s={};return s.getBuffer=function(){return c},s.getAt=function(l){var n=Math.floor(l/8);return(c[n]>>>7-l%8&1)==1},s.put=function(l,n){for(var h=0;h<n;h+=1)s.putBit((l>>>n-h-1&1)==1)},s.getLengthInBits=function(){return x},s.putBit=function(l){var n=Math.floor(x/8);c.length<=n&&c.push(0),l&&(c[n]|=128>>>x%8),x+=1},s},S=function(c){var x=C.MODE_NUMBER,s=c,l={};l.getMode=function(){return x},l.getLength=function(t){return s.length},l.write=function(t){for(var r=s,g=0;g+2<r.length;)t.put(n(r.substring(g,g+3)),10),g+=3;g<r.length&&(r.length-g==1?t.put(n(r.substring(g,g+1)),4):r.length-g==2&&t.put(n(r.substring(g,g+2)),7))};var n=function(t){for(var r=0,g=0;g<t.length;g+=1)r=r*10+h(t.charAt(g));return r},h=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-48;throw"illegal char :"+t};return l},W=function(c){var x=C.MODE_ALPHA_NUM,s=c,l={};l.getMode=function(){return x},l.getLength=function(h){return s.length},l.write=function(h){for(var t=s,r=0;r+1<t.length;)h.put(n(t.charAt(r))*45+n(t.charAt(r+1)),11),r+=2;r<t.length&&h.put(n(t.charAt(r)),6)};var n=function(h){if("0"<=h&&h<="9")return h.charCodeAt(0)-48;if("A"<=h&&h<="Z")return h.charCodeAt(0)-65+10;switch(h){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+h}};return l},er=function(c){var x=C.MODE_8BIT_BYTE,s=M.stringToBytes(c),l={};return l.getMode=function(){return x},l.getLength=function(n){return s.length},l.write=function(n){for(var h=0;h<s.length;h+=1)n.put(s[h],8)},l},V=function(c){var x=C.MODE_KANJI,s=M.stringToBytesFuncs.SJIS;if(!s)throw"sjis not supported.";(function(h,t){var r=s(h);if(r.length!=2||(r[0]<<8|r[1])!=t)throw"sjis not supported."})("友",38726);var l=s(c),n={};return n.getMode=function(){return x},n.getLength=function(h){return~~(l.length/2)},n.write=function(h){for(var t=l,r=0;r+1<t.length;){var g=(255&t[r])<<8|255&t[r+1];if(33088<=g&&g<=40956)g-=33088;else if(57408<=g&&g<=60351)g-=49472;else throw"illegal char at "+(r+1)+"/"+g;g=(g>>>8&255)*192+(g&255),h.put(g,13),r+=2}if(r<t.length)throw"illegal char at "+(r+1)},n},X=function(){var c=[],x={};return x.writeByte=function(s){c.push(s&255)},x.writeShort=function(s){x.writeByte(s),x.writeByte(s>>>8)},x.writeBytes=function(s,l,n){l=l||0,n=n||s.length;for(var h=0;h<n;h+=1)x.writeByte(s[h+l])},x.writeString=function(s){for(var l=0;l<s.length;l+=1)x.writeByte(s.charCodeAt(l))},x.toByteArray=function(){return c},x.toString=function(){var s="";s+="[";for(var l=0;l<c.length;l+=1)l>0&&(s+=","),s+=c[l];return s+="]",s},x},rr=function(){var c=0,x=0,s=0,l="",n={},h=function(r){l+=String.fromCharCode(t(r&63))},t=function(r){if(!(r<0)){if(r<26)return 65+r;if(r<52)return 97+(r-26);if(r<62)return 48+(r-52);if(r==62)return 43;if(r==63)return 47}throw"n:"+r};return n.writeByte=function(r){for(c=c<<8|r&255,x+=8,s+=1;x>=6;)h(c>>>x-6),x-=6},n.flush=function(){if(x>0&&(h(c<<6-x),c=0,x=0),s%3!=0)for(var r=3-s%3,g=0;g<r;g+=1)l+="="},n.toString=function(){return l},n},$=function(c){var x=c,s=0,l=0,n=0,h={};h.read=function(){for(;n<8;){if(s>=x.length){if(n==0)return-1;throw"unexpected end of file./"+n}var r=x.charAt(s);if(s+=1,r=="=")return n=0,-1;if(r.match(/^\s$/))continue;l=l<<6|t(r.charCodeAt(0)),n+=6}var g=l>>>n-8&255;return n-=8,g};var t=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(r==43)return 62;if(r==47)return 63;throw"c:"+r};return h},I=function(c,x){var s=c,l=x,n=new Array(c*x),h={};h.setPixel=function(u,v,A){n[v*s+u]=A},h.write=function(u){u.writeString("GIF87a"),u.writeShort(s),u.writeShort(l),u.writeByte(128),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(255),u.writeByte(255),u.writeByte(255),u.writeString(","),u.writeShort(0),u.writeShort(0),u.writeShort(s),u.writeShort(l),u.writeByte(0);var v=2,A=r(v);u.writeByte(v);for(var _=0;A.length-_>255;)u.writeByte(255),u.writeBytes(A,_,255),_+=255;u.writeByte(A.length-_),u.writeBytes(A,_,A.length-_),u.writeByte(0),u.writeString(";")};var t=function(u){var v=u,A=0,_=0,T={};return T.write=function(m,N){if(m>>>N)throw"length over";for(;A+N>=8;)v.writeByte(255&(m<<A|_)),N-=8-A,m>>>=8-A,_=0,A=0;_=m<<A|_,A=A+N},T.flush=function(){A>0&&v.writeByte(_)},T},r=function(u){for(var v=1<<u,A=(1<<u)+1,_=u+1,T=g(),m=0;m<v;m+=1)T.add(String.fromCharCode(m));T.add(String.fromCharCode(v)),T.add(String.fromCharCode(A));var N=X(),Q=t(N);Q.write(v,_);var K=0,J=String.fromCharCode(n[K]);for(K+=1;K<n.length;){var q=String.fromCharCode(n[K]);K+=1,T.contains(J+q)?J=J+q:(Q.write(T.indexOf(J),_),T.size()<4095&&(T.size()==1<<_&&(_+=1),T.add(J+q)),J=q)}return Q.write(T.indexOf(J),_),Q.write(A,_),Q.flush(),N.toByteArray()},g=function(){var u={},v=0,A={};return A.add=function(_){if(A.contains(_))throw"dup key:"+_;u[_]=v,v+=1},A.size=function(){return v},A.indexOf=function(_){return u[_]},A.contains=function(_){return typeof u[_]<"u"},A};return h},U=function(c,x,s){for(var l=I(c,x),n=0;n<x;n+=1)for(var h=0;h<c;h+=1)l.setPixel(h,n,s(h,n));var t=X();l.write(t);for(var r=rr(),g=t.toByteArray(),u=0;u<g.length;u+=1)r.writeByte(g[u]);return r.flush(),"data:image/gif;base64,"+r};return M}();(function(){O.stringToBytesFuncs["UTF-8"]=function(M){function C(P){for(var L=[],k=0;k<P.length;k++){var b=P.charCodeAt(k);b<128?L.push(b):b<2048?L.push(192|b>>6,128|b&63):b<55296||b>=57344?L.push(224|b>>12,128|b>>6&63,128|b&63):(k++,b=65536+((b&1023)<<10|P.charCodeAt(k)&1023),L.push(240|b>>18,128|b>>12&63,128|b>>6&63,128|b&63))}return L}return C(M)}})(),function(M){B.exports=M()}(function(){return O})})(ir);var hr=ir.exports;const gr=vr(hr),G=7;function lr(B){return{...B,margin:B.margin??1,shape:B.shape??"square",logoRatio:B.logoRatio??1,moduleFill:B.moduleFill??"currentcolor",anchorOuterFill:B.anchorOuterFill??"currentcolor",anchorInnerFill:B.anchorInnerFill??"currentcolor",typeNumber:B.typeNumber??0,errorCorrectionLevel:B.errorCorrectionLevel??"H"}}function cr(B,D){const{data:O,margin:M,shape:C,logo:P,logoRatio:L,anchorInnerFill:k,anchorOuterFill:b,moduleFill:Y,typeNumber:j,errorCorrectionLevel:Z}=lr(B);D||(D=gr(j,Z),D.addData(O),D.make());const S=D.getModuleCount(),W=S+M*2,er=[["top-left",M,M],["top-right",S-G+M,M],["bottom-left",M,S-G+M]];let V="";for(const[$,I,U]of er){let c=`M${I} ${U} h7 v7 h-7 v-7z m1 1 v5 h5 v-5 h-5 z`,x=`M${I+2} ${U+2} h3 v3 h-3 v-3 z`;C!=="square"&&(c=`M${I+.5} ${U}h6s0.5 0 .5 .5v6s0 .5-.5 .5h-6s-.5 0-.5-.5v-6s0-.5 .5-.5zm.75 1s-.25 0-.25 .25v4.5s0 .25 .25 .25h4.5s.25 0 .25-.25v-4.5s0-.25 -.25 -.25h-4.5z`,x=`M${I+2.5} ${U+2} h2 s.5 0 .5 .5 v2 s0 .5-.5 .5 h-2 s-.5 0-.5-.5 v-2 s0-.5 .5-.5 z`);const s=`<path class="anchor-outer" fill="${b}" d="${c}" />`,l=`<path class="anchor-outer" fill="${k}" d="${x}" />`;V+=`<g class="anchor" data-position="${$}">${s} ${l}</g>`}V=`<g class="anchors">${V}</g>`;let X="";for(let $=0;$<S;$++)for(let I=0;I<S;I++){if(!D.isDark($,I)||dr($,I,S)||P&&xr($,I,S))continue;const U=$+M,c=I+M;X+=`<rect class="module" fill="${Y}" data-column="${$}" data-row="${I}" x="${U}" y="${c}" width="1" height="1" ${C==="circle"?'rx="0.5"':""} />`}X=`<g class="modules">${X}</g>`;let rr="";if(P){const $=Math.floor(S*Math.sqrt(.1)),{width:I,height:U}=wr($*.8,L),c=(W-I+1)/2,x=(W-U+1)/2;rr=`<image width="${I}" height="${U}" x="${c}" y="${x}" href="${P}" class="logo" />`}return{attributes:{viewBox:`0, 0 ${W} ${W}`,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},anchors:V,modules:X,logo:rr}}function dr(B,D,O){return D<=G?B<=G||B>=O-G:B<=G?D>=O-G:!1}function xr(B,D,O){const M=O/2,C=1,P=Math.floor(O*Math.sqrt(.1)/2),L=P*C,k=P/C,b=M-L,Y=M+L,j=M-k,Z=M+k;return D>=j&&D<=Z&&B>=b&&B<=Y}function wr(B,D){return D>=1?{width:B,height:B/D}:{width:B*D,height:B}}function yr(B,D){async function O(){const{anchors:M,attributes:C,logo:P,modules:L}=cr(D);for(const[k,b]of Object.entries(C))B.setAttribute(k,b);B.innerHTML=`${M}${L}${P}`,B.dispatchEvent(new CustomEvent("qr:init",{detail:B}))}return O(),{update(M){JSON.stringify(D)!==JSON.stringify(M)&&(D=M,O())}}}export{yr as q};