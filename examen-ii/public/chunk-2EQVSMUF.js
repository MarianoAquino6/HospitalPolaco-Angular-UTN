import{B as d,E as i,F as r,J as C,K as u,L as m,O as o,Q as h,R as _,V as x,X as v,aa as k,ba as w,ca as S,da as E,l as f,mb as O,q as b,r as D,s as y,x as l,y as M,z as p}from"./chunk-XMWGSLYE.js";var T=(a,n)=>({selected:a,"disabled-day":n});function A(a,n){if(a&1){let e=C();i(0,"div",7),u("click",function(){let s=b(e).$implicit,c=m();return D(!c.isDisabled(s)&&s?c.selectDate(s):null)}),o(1),r()}if(a&2){let e=n.$implicit,t=m();d("ngClass",v(2,T,t.selectedDate===e+"-"+(t.currentMonth+1)+"-"+t.currentYear,t.isDisabled(e))),l(),h(" ",e," ")}}function $(a,n){if(a&1&&(i(0,"div",8),o(1),r()),a&2){let e=m();l(),h(" D\xEDa seleccionado: ",e.selectedDate," ")}}var I=class a{constructor(n){this.alert=n;let e=new Date;this.currentMonth=e.getMonth(),this.currentYear=e.getFullYear(),this.currentDay=e.getDate(),this.daysInMonth=[]}currentMonth;currentYear;currentDay;daysInMonth;selectedDate="";monthNames=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];dateSelected=new y;fechasDisponibles;ngOnInit(){this.generateDays()}generateDays(){let e=new Date(this.currentYear,this.currentMonth+1,0).getDate(),t=new Date(this.currentYear,this.currentMonth,1).getDay();this.daysInMonth=[];let s=(t+6)%7;for(let c=0;c<s;c++)this.daysInMonth.push(null);for(let c=1;c<=e;c++)this.daysInMonth.push(c)}selectDate(n){if(n!==null){let e=new Date(this.currentYear,this.currentMonth,n),t=new Date;if(t.setHours(0,0,0,0),e.getDay()===0){this.alert.mostrarError("No es posible seleccionar un d\xEDa domingo, ya que no es laborable.");return}e>=t?(this.selectedDate=`${n}-${this.currentMonth+1}-${this.currentYear}`,this.dateSelected.emit(this.selectedDate)):this.alert.mostrarError("No es posible elegir fechas pasadas a la actual")}}changeMonth(n){this.currentMonth+=n,this.currentMonth<0?(this.currentMonth=11,this.currentYear--):this.currentMonth>11&&(this.currentMonth=0,this.currentYear++),this.currentDay=new Date().getDate(),this.generateDays()}isDisabled(n){if(n===null)return!0;let e=new Date(this.currentYear,this.currentMonth,n);e.setHours(0,0,0,0);let t=new Date;t.setHours(0,0,0,0);let s=new Date(t);return s.setDate(t.getDate()+15),this.fechasDisponibles?!(this.fechasDisponibles.some(P=>{let[F,Y,N]=P.split("-").map(Number),g=new Date(N,Y-1,F);return g.setHours(0,0,0,0),g.getTime()===e.getTime()})&&e>=t&&e<=s):e.getDay()===0||e<t}static \u0275fac=function(e){return new(e||a)(M(O))};static \u0275cmp=f({type:a,selectors:[["app-calendario"]],inputs:{fechasDisponibles:"fechasDisponibles"},outputs:{dateSelected:"dateSelected"},standalone:!0,features:[x],decls:26,vars:4,consts:[[1,"calendar"],[3,"click"],[1,"weekdays"],[1,"weekday"],[1,"days"],["class","day",3,"ngClass","click",4,"ngFor","ngForOf"],["class","selected-date",4,"ngIf"],[1,"day",3,"click","ngClass"],[1,"selected-date"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"header")(2,"button",1),u("click",function(){return t.changeMonth(-1)}),o(3,"Anterior"),r(),i(4,"h3"),o(5),r(),i(6,"button",1),u("click",function(){return t.changeMonth(1)}),o(7,"Siguiente"),r()(),i(8,"div",2)(9,"div",3),o(10,"Lun"),r(),i(11,"div",3),o(12,"Mar"),r(),i(13,"div",3),o(14,"Mi\xE9"),r(),i(15,"div",3),o(16,"Jue"),r(),i(17,"div",3),o(18,"Vie"),r(),i(19,"div",3),o(20,"S\xE1b"),r(),i(21,"div",3),o(22,"Dom"),r()(),i(23,"div",4),p(24,A,2,5,"div",5),r(),p(25,$,2,1,"div",6),r()),e&2&&(l(5),_("",t.currentYear," - ",t.monthNames[t.currentMonth],""),l(19),d("ngForOf",t.daysInMonth),l(),d("ngIf",t.selectedDate))},dependencies:[E,k,w,S],styles:[".calendar[_ngcontent-%COMP%]{max-width:400px;margin:auto;text-align:center;background-color:#2e2d2d;border-radius:10px;padding:20px;box-shadow:0 4px 10px #0003}header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:1.5em;margin-bottom:10px}button[_ngcontent-%COMP%]{background-color:#a42315;color:#fff;border:none;border-radius:5px;padding:8px 12px;cursor:pointer;transition:background-color .3s;font-size:.9em}button[_ngcontent-%COMP%]:hover{background-color:#6d1b12}.days[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}.day[_ngcontent-%COMP%]{padding:15px;cursor:pointer;background-color:#4c4b4b;border:none;border-radius:5px;transition:background-color .3s,transform .3s;color:#fff}.day[_ngcontent-%COMP%]:hover{background-color:#113c7c;transform:scale(1.1)}.day.selected[_ngcontent-%COMP%]{background-color:#21cf4a;color:#fff;font-weight:700}.selected-date[_ngcontent-%COMP%]{margin-top:15px;color:#fff;font-size:1.2em}.weekdays[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:10px;font-weight:700;color:#fff}.weekday[_ngcontent-%COMP%]{background-color:#34495e;padding:10px;border-radius:5px}.day[ngClass=null][_ngcontent-%COMP%]{background-color:transparent;cursor:default}.disabled-day[_ngcontent-%COMP%]{background-color:#b91e1e;color:#fff;cursor:not-allowed;opacity:.6}.disabled-day[_ngcontent-%COMP%]:hover{background-color:#b91e1e;transform:none}"]})};export{I as a};
