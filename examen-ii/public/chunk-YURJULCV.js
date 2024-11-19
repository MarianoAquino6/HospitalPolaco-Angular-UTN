import{a as K}from"./chunk-QNW4AF44.js";import{a as J}from"./chunk-NXW457HU.js";import{A as D,C as x,D as i,E as n,F as V,I as b,J as M,K as m,Ka as H,N as r,O as h,Oa as v,Pa as w,Qa as E,R as I,S as R,T as A,Ta as S,Ua as T,V as $,Va as u,Xa as B,Y as q,Za as W,_ as j,cb as Y,da as G,f as k,ga as oe,j as F,k as z,ma as ne,n as g,o as C,pa as ee,pb as ie,rb as L,sb as U,v as d,w as P,y as N}from"./chunk-LOSKLSOT.js";import{g as _}from"./chunk-RA2WU32H.js";var _e=()=>["medicoNombreCompleto","especialidad","fecha","horario","estado","altura","peso","temperatura","presion","datosDinamicos"];function he(o,t){o&1&&(i(0,"td",8),r(1,"Ya cancelado"),n())}function ge(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",10),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.cancelarTurno(l))}),n()()}}function Ce(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function xe(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",11),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.leerResenia(l))}),n()()}}function be(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function Me(o,t){o&1&&(i(0,"td",8),r(1,"Ya completada"),n())}function Ee(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",12),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.completarEncuesta(l))}),n()()}}function ve(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function Se(o,t){o&1&&(i(0,"td",8),r(1,"Ya calificado"),n())}function Pe(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",13),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.calificarAtencion(l))}),n()()}}function we(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function Te(o,t){if(o&1&&(i(0,"tr")(1,"td"),r(2),n(),i(3,"td"),r(4),n(),i(5,"td"),r(6),n(),i(7,"td"),r(8),n(),i(9,"td"),r(10),n(),i(11,"td"),r(12),n(),N(13,he,2,0,"td",8)(14,ge,2,0,"td",9)(15,Ce,2,0,"td",8)(16,xe,2,0,"td",9)(17,be,2,0,"td",8)(18,Me,2,0,"td",8)(19,Ee,2,0,"td",9)(20,ve,2,0,"td",8)(21,Se,2,0,"td",8)(22,Pe,2,0,"td",9)(23,we,2,0,"td",8),n()),o&2){let e=t.$implicit;d(2),h(e.medicoNombreCompleto),d(2),h(e.fecha),d(2),h(e.horario),d(2),h(e.especialidad),d(2),h(e.pacienteNombreCompleto),d(2),h(e.estado),d(),x(e.estado=="Cancelado"?13:e.estado=="Pendiente"||e.estado=="Aceptado"?14:15),d(3),x(e.resenia?16:17),d(2),x(e.encuesta?18:e.estado=="Finalizado"&&e.resenia?19:20),d(3),x(e.calificacion?21:e.estado=="Finalizado"?22:23)}}var Q=class o{constructor(t,e,a){this.firestore=t;this.alert=e;this.auth=a}isLoading=!1;turnosDisponibles;searchText="";usuarioLogueado=null;ngOnInit(){this.auth.usuarioLogueado$.subscribe(t=>{this.usuarioLogueado=t,console.log("Usuario logueado:",this.usuarioLogueado)}),this.obtenerTurnosDisponibles()}obtenerTurnosDisponibles(){return _(this,null,function*(){this.isLoading=!0;try{let t=v(this.firestore,"turnos");console.log("Valor de this.usuarioLogueado antes de la consulta:",this.usuarioLogueado);let e=S(t,u("paciente","==",this.usuarioLogueado)),a=yield E(t);console.log("Cantidad total de turnos en la colecci\xF3n:",a.size),a.forEach(c=>{console.log("Documento en la colecci\xF3n turnos:",c.data())});let l=yield E(e);if(l.empty){console.log("No se encontraron turnos para el paciente con el email:",this.usuarioLogueado);return}console.log("Cantidad de turnos encontrados para el paciente:",l.size),this.turnosDisponibles=yield Promise.all(l.docs.map(c=>_(this,null,function*(){let s=c.data();console.log("Datos del turno encontrado:",s),console.log(`Comparando email almacenado "${s.paciente}" con email logueado "${this.usuarioLogueado}"`);let p=yield this.auth.obtenerNombreCompletoDesdeEmail(s.medico),y=yield this.auth.obtenerNombreCompletoDesdeEmail(s.paciente),f=s.historiaClinica||{},O={medico:s.medico||"",medicoNombreCompleto:p||"",fecha:s.fecha||"",horario:s.horario||"",especialidad:s.especialidad||"",paciente:s.paciente||"",pacienteNombreCompleto:y||"",estado:s.estado||"",resenia:s.resenia,encuesta:s.encuesta,calificacion:s.calificacion,altura:f.altura||null,peso:f.peso||null,temperatura:f.temperatura||null,presion:f.presion||null,datosDinamicos:f.datosDinamicos||[],fechaSolicitud:s.fechaSolicitud};return console.log("Turno procesado:",O),O}))),console.log("Turnos disponibles filtrados:",this.turnosDisponibles)}catch(t){console.error("Error al obtener turnos:",t)}finally{this.isLoading=!1}})}cancelarTurno(t){return _(this,null,function*(){let e=yield this.alert.mostrarDialogoMotivo();if(e){t.estado="Cancelado";try{this.isLoading=!0;let a=v(this.firestore,"turnos"),l=S(a,u("medico","==",t.medico),u("fecha","==",t.fecha),u("horario","==",t.horario)),c=yield E(l);if(c.empty)console.log("No se encontr\xF3 el documento del turno para cancelar."),this.alert.mostrarError("No se pudo cancelar el turno. No se encontr\xF3 el turno.");else{let s=c.docs[0],p=w(this.firestore,`turnos/${s.id}`);console.log("Intentando cancelar el turno en:",p.path),yield T(p,{estado:"Cancelado",motivoCancelacion:e}),this.alert.mostrarSuccess("El turno ha sido cancelado con \xE9xito.")}}catch(a){console.error("Error al cancelar el turno:",a),this.alert.mostrarError("No se pudo cancelar el turno. Intente de nuevo.")}finally{this.isLoading=!1}}else console.log("La cancelaci\xF3n fue cancelada por el usuario.")})}leerResenia(t){return _(this,null,function*(){this.alert.leerResenia(t)})}calificarAtencion(t){return _(this,null,function*(){let e=yield this.alert.mostrarDialogoCalificacion();if(e)try{this.isLoading=!0;let a=v(this.firestore,"turnos"),l=S(a,u("medico","==",t.medico),u("fecha","==",t.fecha),u("horario","==",t.horario)),c=yield E(l);if(c.empty)this.alert.mostrarError("No se pudo calificar el turno. No se encontr\xF3 el turno.");else{let s=c.docs[0],p=w(this.firestore,`turnos/${s.id}`);yield T(p,{calificacion:e}),this.alert.mostrarSuccess("El turno ha sido calificado con \xE9xito.")}}catch(a){console.error("Error al calificar el turno:",a),this.alert.mostrarError("No se pudo calificar el turno. Intente de nuevo.")}finally{this.isLoading=!1}else console.log("La calificacion fue cancelada por el usuario.")})}completarEncuesta(t){return _(this,null,function*(){let e=yield this.alert.mostrarFormularioEncuesta();if(e)try{this.isLoading=!0;let{recomendacion:a,instalaciones:l,consejo:c}=e,s=v(this.firestore,"turnos"),p=S(s,u("medico","==",t.medico),u("fecha","==",t.fecha),u("horario","==",t.horario)),y=yield E(p);if(y.empty)console.log("No se encontr\xF3 el documento del turno para guardar la encuesta."),this.alert.mostrarError("No se pudo guardar la encuesta. No se encontr\xF3 el turno.");else{let f=y.docs[0],O=w(this.firestore,`turnos/${f.id}`);console.log("Guardando encuesta en:",O.path),yield T(O,{encuesta:{recomendacion:a,instalaciones:l,consejo:c}}),this.alert.mostrarSuccess("La encuesta se ha guardado con \xE9xito.")}}catch(a){console.error("Error al guardar la encuesta:",a),this.alert.mostrarError("No se pudo guardar la encuesta. Intente de nuevo.")}finally{this.isLoading=!1}else console.log("La encuesta fue cancelada por el usuario.")})}static \u0275fac=function(e){return new(e||o)(P(H),P(U),P(J))};static \u0275cmp=F({type:o,selectors:[["app-paciente"]],decls:34,vars:8,consts:[[3,"isLoading"],[1,"banner"],[1,"turnos"],[1,"busqueda"],["type","text","placeholder","Buscar seg\xFAn medico o especialidad...",3,"ngModelChange","ngModel"],[1,"tabla"],[1,"tabla-scroll"],[4,"ngFor","ngForOf"],[1,"inhabilitado"],[1,"cancel-icon-cell"],["aria-hidden","true",1,"fa","fa-times","fa-2x",3,"click"],["aria-hidden","true",1,"fa","fa-comment","fa-2x",3,"click"],["aria-hidden","true",1,"fa","fa-list-alt","fa-2x",3,"click"],["aria-hidden","true",1,"fa","fa-star","fa-2x",3,"click"]],template:function(e,a){e&1&&(V(0,"app-loading",0),i(1,"section")(2,"div",1)(3,"h2"),r(4,"MIS TURNOS"),n()()(),i(5,"section",2)(6,"div",3)(7,"input",4),A("ngModelChange",function(c){return R(a.searchText,c)||(a.searchText=c),c}),n()(),i(8,"div",5)(9,"div",6)(10,"table")(11,"tr")(12,"th"),r(13,"Medico"),n(),i(14,"th"),r(15,"Fecha"),n(),i(16,"th"),r(17,"Horario"),n(),i(18,"th"),r(19,"Especialidad"),n(),i(20,"th"),r(21,"Paciente"),n(),i(22,"th"),r(23,"Estado"),n(),i(24,"th"),r(25,"Cancelar"),n(),i(26,"th"),r(27,"Ver Rese\xF1a"),n(),i(28,"th"),r(29,"Completar Encuesta"),n(),i(30,"th"),r(31,"Calificar Atencion"),n()(),N(32,Te,24,10,"tr",7),q(33,"filtroGenerico"),n()()()()),e&2&&(D("isLoading",a.isLoading),d(7),I("ngModel",a.searchText),d(25),D("ngForOf",j(33,3,a.turnosDisponibles,a.searchText,$(7,_e))))},dependencies:[G,L,B,W,Y,K],styles:[".turnos[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:30px 0;min-height:70vh}.busqueda[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;width:80%;max-width:600px}.busqueda[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:100%;padding:10px;border:2px solid #555;border-radius:5px;background-color:#333;color:#fff;font-size:1em;box-shadow:0 4px 8px #0000004d;transition:border-color .3s ease,box-shadow .3s ease}.busqueda[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder{color:#aaa;font-style:italic}.busqueda[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{outline:none;border-color:red;box-shadow:0 4px 12px #ff00004d}.tabla[_ngcontent-%COMP%]{display:flex;flex:40%;justify-content:center;align-items:flex-start;padding-left:20px}.tabla-scroll[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto;width:100%;border:1px solid #444;background-color:#555}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;text-align:center;border:1px solid #444}th[_ngcontent-%COMP%]{background-color:#333;color:red}td[_ngcontent-%COMP%]{background-color:#555;color:#fff;cursor:pointer}tr[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#660202}td.cancel-icon-cell[_ngcontent-%COMP%]{text-align:center;cursor:pointer}td.cancel-icon-cell[_ngcontent-%COMP%]   i.fa-times[_ngcontent-%COMP%]{color:#d9534f;font-size:1.2em;transition:color .3s ease,transform .3s ease}td.cancel-icon-cell[_ngcontent-%COMP%]   i.fa-times[_ngcontent-%COMP%]:hover{color:#c9302c;transform:scale(1.8)}td.cancel-icon-cell[_ngcontent-%COMP%]   i.fa-times.disabled[_ngcontent-%COMP%]{color:#aaa;cursor:not-allowed}.inhabilitado[_ngcontent-%COMP%]{color:red;font-weight:500}i.fa-comment[_ngcontent-%COMP%], i.fa-list-alt[_ngcontent-%COMP%], i.fa-star[_ngcontent-%COMP%]{color:#ff0}i[_ngcontent-%COMP%]:hover{transition:color .3s ease,transform .3s ease;transform:scale(1.8)}"]})};var ye=()=>["medicoNombreCompleto","especialidad","fecha","horario","estado","pacienteNombreCompleto","altura","peso","temperatura","presion","datosDinamicos"];function Oe(o,t){o&1&&(i(0,"td",8),r(1,"Ya cancelado"),n())}function Ne(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",10),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.cancelarTurno(l))}),n()()}}function De(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function Le(o,t){o&1&&(i(0,"td",8),r(1,"Ya rechazado"),n())}function ke(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",11),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.rechazarTurno(l))}),n()()}}function Fe(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function ze(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",12),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.aceptarTurno(l))}),n()()}}function Ve(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function Ie(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",13),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.finalizarTurno(l))}),n()()}}function Re(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function Ae(o,t){if(o&1){let e=b();i(0,"td",9)(1,"i",14),M("click",function(){g(e);let l=m().$implicit,c=m();return C(c.leerResenia(l))}),n()()}}function $e(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function qe(o,t){if(o&1){let e=b();i(0,"td")(1,"div",15),M("click",function(){g(e);let l=m(2).$implicit,c=m();return C(c.verHistoriaClinica(l.paciente,l.fechaSolicitud))}),i(2,"button"),r(3," Completar "),n()()()}}function je(o,t){if(o&1){let e=b();i(0,"td")(1,"div",15),M("click",function(){g(e);let l=m(2).$implicit,c=m();return C(c.verHistoriaClinica(l.paciente,l.fechaSolicitud))}),i(2,"button"),r(3," Editar "),n()()()}}function Ge(o,t){if(o&1&&N(0,qe,4,0,"td")(1,je,4,0,"td"),o&2){let e=m().$implicit;x(e.altura?1:0)}}function He(o,t){o&1&&(i(0,"td",8),r(1,"No disponible"),n())}function Be(o,t){if(o&1&&(i(0,"tr")(1,"td"),r(2),n(),i(3,"td"),r(4),n(),i(5,"td"),r(6),n(),i(7,"td"),r(8),n(),i(9,"td"),r(10),n(),i(11,"td"),r(12),n(),N(13,Oe,2,0,"td",8)(14,Ne,2,0,"td",9)(15,De,2,0,"td",8)(16,Le,2,0,"td",8)(17,ke,2,0,"td",9)(18,Fe,2,0,"td",8)(19,ze,2,0,"td",9)(20,Ve,2,0,"td",8)(21,Ie,2,0,"td",9)(22,Re,2,0,"td",8)(23,Ae,2,0,"td",9)(24,$e,2,0,"td",8)(25,Ge,2,1)(26,He,2,0,"td",8),n()),o&2){let e=t.$implicit;d(2),h(e.medicoNombreCompleto),d(2),h(e.fecha),d(2),h(e.horario),d(2),h(e.especialidad),d(2),h(e.pacienteNombreCompleto),d(2),h(e.estado),d(),x(e.estado=="Cancelado"?13:e.estado!="Aceptado"&&e.estado!="Finalizado"&&e.estado!="Rechazado"?14:15),d(3),x(e.estado=="Rechazado"?16:e.estado!="Aceptado"&&e.estado!="Finalizado"&&e.estado!="Cancelado"?17:18),d(3),x(e.estado!="Finalizado"&&e.estado!="Cancelado"&&e.estado!="Rechazado"&&e.estado!="Aceptado"?19:20),d(2),x(e.estado=="Aceptado"?21:22),d(2),x(e.resenia?23:24),d(2),x(e.estado=="Finalizado"?25:26)}}var X=class o{constructor(t,e,a,l){this.firestore=t;this.alert=e;this.auth=a;this.router=l}isLoading=!1;turnosDisponibles;searchText="";usuarioLogueado=null;ngOnInit(){this.auth.usuarioLogueado$.subscribe(t=>{this.usuarioLogueado=t,console.log("Usuario logueado:",this.usuarioLogueado)}),this.obtenerTurnosDisponibles()}obtenerTurnosDisponibles(){return _(this,null,function*(){this.isLoading=!0;try{let t=v(this.firestore,"turnos");console.log("Valor de this.usuarioLogueado antes de la consulta:",this.usuarioLogueado);let e=S(t,u("medico","==",this.usuarioLogueado)),a=yield E(t);console.log("Cantidad total de turnos en la colecci\xF3n:",a.size);let l=yield E(e);if(l.empty){console.log("No se encontraron turnos para el m\xE9dico con el email:",this.usuarioLogueado);return}console.log("Cantidad de turnos encontrados para el m\xE9dico:",l.size),this.turnosDisponibles=yield Promise.all(l.docs.map(c=>_(this,null,function*(){let s=c.data();console.log("Datos del turno encontrado:",s),console.log(`Comparando email almacenado "${s.medico}" con email logueado "${this.usuarioLogueado}"`);let p=yield this.auth.obtenerNombreCompletoDesdeEmail(s.medico),y=yield this.auth.obtenerNombreCompletoDesdeEmail(s.paciente),f=s.historiaClinica||{},O={medico:s.medico||"",medicoNombreCompleto:p||"",fecha:s.fecha||"",horario:s.horario||"",especialidad:s.especialidad||"",paciente:s.paciente||"",pacienteNombreCompleto:y||"",estado:s.estado||"",resenia:s.resenia,altura:f.altura||null,peso:f.peso||null,temperatura:f.temperatura||null,presion:f.presion||null,datosDinamicos:f.datosDinamicos||[],fechaSolicitud:s.fechaSolicitud};return console.log("Turno procesado:",O),O}))),console.log("Turnos disponibles filtrados:",this.turnosDisponibles)}catch(t){console.error("Error al obtener turnos:",t)}finally{this.isLoading=!1}})}cancelarTurno(t){return _(this,null,function*(){let e=yield this.alert.mostrarDialogoMotivo();if(e){t.estado="Cancelado";try{this.isLoading=!0;let a=v(this.firestore,"turnos"),l=S(a,u("medico","==",t.medico),u("fecha","==",t.fecha),u("horario","==",t.horario)),c=yield E(l);if(c.empty)console.log("No se encontr\xF3 el documento del turno para cancelar."),this.alert.mostrarError("No se pudo cancelar el turno. No se encontr\xF3 el turno.");else{let s=c.docs[0],p=w(this.firestore,`turnos/${s.id}`);console.log("Intentando cancelar el turno en:",p.path),yield T(p,{estado:"Cancelado",motivoCancelacion:e}),this.alert.mostrarSuccess("El turno ha sido cancelado con \xE9xito.")}}catch(a){console.error("Error al cancelar el turno:",a),this.alert.mostrarError("No se pudo cancelar el turno. Intente de nuevo.")}finally{this.isLoading=!1}}else console.log("La cancelaci\xF3n fue cancelada por el usuario.")})}rechazarTurno(t){return _(this,null,function*(){let e=yield this.alert.mostrarDialogoMotivoRechazo();if(e){t.estado="Rechazado";try{this.isLoading=!0;let a=v(this.firestore,"turnos"),l=S(a,u("medico","==",t.medico),u("fecha","==",t.fecha),u("horario","==",t.horario)),c=yield E(l);if(c.empty)console.log("No se encontr\xF3 el documento del turno para rechazar."),this.alert.mostrarError("No se pudo rechazar el turno. No se encontr\xF3 el turno.");else{let s=c.docs[0],p=w(this.firestore,`turnos/${s.id}`);console.log("Intentando rechazar el turno en:",p.path),yield T(p,{estado:"Rechazado",motivoRechazo:e}),this.alert.mostrarSuccess("El turno ha sido rechazado con \xE9xito.")}}catch(a){console.error("Error al rechazar el turno:",a),this.alert.mostrarError("No se pudo rechazar el turno. Intente de nuevo.")}finally{this.isLoading=!1}}else console.log("El rechazo fue cancelado por el usuario.")})}aceptarTurno(t){return _(this,null,function*(){try{t.estado="Aceptado",this.isLoading=!0;let e=v(this.firestore,"turnos"),a=S(e,u("medico","==",t.medico),u("fecha","==",t.fecha),u("horario","==",t.horario)),l=yield E(a);if(l.empty)console.log("No se encontr\xF3 el documento del turno para aceptar."),this.alert.mostrarError("No se pudo aceptar el turno. No se encontr\xF3 el turno.");else{let c=l.docs[0],s=w(this.firestore,`turnos/${c.id}`);console.log("Intentando aceptar el turno en:",s.path),yield T(s,{estado:"Aceptado"}),this.alert.mostrarSuccess("El turno ha sido aceptado con \xE9xito.")}}catch(e){console.error("Error al aceptar el turno:",e),this.alert.mostrarError("No se pudo aceptar el turno. Intente de nuevo.")}finally{this.isLoading=!1}})}finalizarTurno(t){return _(this,null,function*(){let e=yield this.alert.mostrarFormularioRese\u00F1a();if(e)try{t.estado="Finalizado",this.isLoading=!0;let{resenia:a,diagnostico:l}=e,c=v(this.firestore,"turnos"),s=S(c,u("medico","==",t.medico),u("fecha","==",t.fecha),u("horario","==",t.horario)),p=yield E(s);if(p.empty)console.log("No se encontr\xF3 el documento del turno para guardar la rese\xF1a."),this.alert.mostrarError("No se pudo guardar la rese\xF1a ni el diagnostico. No se encontr\xF3 el turno.");else{let y=p.docs[0],f=w(this.firestore,`turnos/${y.id}`);console.log("Guardando resenia y diagnostico en:",f.path),yield T(f,{resenia:{resenia:a,diagnostico:l},estado:"Finalizado",fechaFinalizacion:new Date}),this.alert.mostrarSuccess("La rese\xF1a y el diagnostico se han guardado con \xE9xito.")}}catch(a){console.error("Error al guardar la rese\xF1a:",a),this.alert.mostrarError("No se pudo guardar la rese\xF1a. Intente de nuevo.")}finally{this.isLoading=!1}else console.log("La rese\xF1a fue cancelada por el usuario.")})}leerResenia(t){return _(this,null,function*(){this.alert.leerResenia(t)})}verHistoriaClinica(t,e){e?(this.auth.setPacienteHistoriaClinica(t,!0,e),this.router.navigate(["/historia-clinica"])):console.log("Fecha de solicitud no v\xE1lida")}static \u0275fac=function(e){return new(e||o)(P(H),P(U),P(J),P(ne))};static \u0275cmp=F({type:o,selectors:[["app-medico"]],decls:38,vars:8,consts:[[3,"isLoading"],[1,"banner"],[1,"turnos"],[1,"busqueda"],["type","text","placeholder","Buscar seg\xFAn medico o especialidad...",3,"ngModelChange","ngModel"],[1,"tabla"],[1,"tabla-scroll"],[4,"ngFor","ngForOf"],[1,"inhabilitado"],[1,"cancel-icon-cell"],["aria-hidden","true",1,"fa","fa-times","fa-2x",3,"click"],["aria-hidden","true",1,"fa","fa-ban","fa-2x",3,"click"],["aria-hidden","true",1,"fa","fa-check","fa-2x",3,"click"],["aria-hidden","true",1,"fa","fa-flag-checkered","fa-2x",3,"click"],["aria-hidden","true",1,"fa","fa-comment","fa-2x",3,"click"],[1,"verde",3,"click"]],template:function(e,a){e&1&&(V(0,"app-loading",0),i(1,"section")(2,"div",1)(3,"h2"),r(4,"MIS TURNOS"),n()()(),i(5,"section",2)(6,"div",3)(7,"input",4),A("ngModelChange",function(c){return R(a.searchText,c)||(a.searchText=c),c}),n()(),i(8,"div",5)(9,"div",6)(10,"table")(11,"tr")(12,"th"),r(13,"Medico"),n(),i(14,"th"),r(15,"Fecha"),n(),i(16,"th"),r(17,"Horario"),n(),i(18,"th"),r(19,"Especialidad"),n(),i(20,"th"),r(21,"Paciente"),n(),i(22,"th"),r(23,"Estado"),n(),i(24,"th"),r(25,"Cancelar"),n(),i(26,"th"),r(27,"Rechazar"),n(),i(28,"th"),r(29,"Aceptar"),n(),i(30,"th"),r(31,"Finalizar"),n(),i(32,"th"),r(33,"Ver rese\xF1a"),n(),i(34,"th"),r(35,"Completar HC"),n()(),N(36,Be,27,12,"tr",7),q(37,"filtroGenerico"),n()()()()),e&2&&(D("isLoading",a.isLoading),d(7),I("ngModel",a.searchText),d(29),D("ngForOf",j(37,3,a.turnosDisponibles,a.searchText,$(7,ye))))},dependencies:[G,L,B,W,Y,K],styles:[".turnos[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:30px 0;min-height:70vh}.busqueda[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;width:80%;max-width:600px}.busqueda[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:100%;padding:10px;border:2px solid #555;border-radius:5px;background-color:#333;color:#fff;font-size:1em;box-shadow:0 4px 8px #0000004d;transition:border-color .3s ease,box-shadow .3s ease}.busqueda[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder{color:#aaa;font-style:italic}.busqueda[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{outline:none;border-color:red;box-shadow:0 4px 12px #ff00004d}.tabla[_ngcontent-%COMP%]{display:flex;flex:40%;justify-content:center;align-items:flex-start;padding-left:20px}.tabla-scroll[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto;width:100%;border:1px solid #444;background-color:#555}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;text-align:center;border:1px solid #444}th[_ngcontent-%COMP%]{background-color:#333;color:red}td[_ngcontent-%COMP%]{background-color:#555;color:#fff;cursor:pointer}tr[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#660202}td.cancel-icon-cell[_ngcontent-%COMP%]{text-align:center;cursor:pointer}td.cancel-icon-cell[_ngcontent-%COMP%]   i.fa-times[_ngcontent-%COMP%]{color:#d9534f;font-size:1.2em;transition:color .3s ease,transform .3s ease}td.cancel-icon-cell[_ngcontent-%COMP%]   i.fa-times[_ngcontent-%COMP%]:hover{color:#c9302c;transform:scale(1.8)}td.cancel-icon-cell[_ngcontent-%COMP%]   i.fa-times.disabled[_ngcontent-%COMP%]{color:#aaa;cursor:not-allowed}.inhabilitado[_ngcontent-%COMP%]{color:red;font-weight:500}i.fa-ban[_ngcontent-%COMP%]{color:red}i.fa-check[_ngcontent-%COMP%], i.fa-flag-checkered[_ngcontent-%COMP%]{color:#0ddf0d}i.fa-comment[_ngcontent-%COMP%]{color:#ff0}i[_ngcontent-%COMP%]:hover{transition:color .3s ease,transform .3s ease;transform:scale(1.8)}.verde[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:16px;transition:background-color .3s}.verde[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#218838}"]})};var We=[{path:"pacientes",component:Q},{path:"medicos",component:X}],Z=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=z({type:o});static \u0275inj=k({imports:[ee.forChild(We),ee]})};var ae=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=z({type:o});static \u0275inj=k({imports:[oe,Z,L,ie]})};export{ae as MisTurnosModule};
