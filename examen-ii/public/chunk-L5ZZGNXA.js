import{a as ui}from"./chunk-DHASKATB.js";import{a as b}from"./chunk-DBIOOYZC.js";import{a as I}from"./chunk-Z6YAK4SA.js";import{A as f,Aa as W,Ba as X,C as a,Ca as Z,D as y,Da as ii,E as m,Ea as ei,F as q,Fa as oi,Ia as ti,Ja as ni,Ka as ai,O as z,P as M,Pa as ri,Q as G,Qa as di,Va as li,W as N,Wa as si,Ya as ci,a as h,d as C,g as E,h as S,m as O,n as d,o as _,p as c,pa as U,q as s,qa as p,ra as Q,s as H,sa as $,t as r,ta as Y,u as n,v as u,va as v,w as T,x as w,xa as B,ya as J,z as A,za as K}from"./chunk-FJQ5DNDC.js";function vi(t,o){if(t&1&&(r(0,"option",12),a(1),n()),t&2){let e=o.$implicit;s("value",e),d(),m(" ",e," ")}}function Ci(t,o){t&1&&(r(0,"div")(1,"small",13),a(2,"Este campo es obligatorio."),n()())}function Ei(t,o){t&1&&(r(0,"div")(1,"small",13),a(2,"Horario de inicio fuera del rango permitido por horario laboral"),n()())}function Si(t,o){t&1&&(r(0,"div")(1,"small",13),a(2,"Horario de fin fuera del rango permitido por horario laboral"),n()())}function yi(t,o){t&1&&(r(0,"div")(1,"small",13),a(2,"La hora de fin debe ser mayor que la hora de inicio."),n()())}function Mi(t,o){if(t&1&&(r(0,"div")(1,"h4"),a(2),n(),r(3,"div",14)(4,"div",15)(5,"label"),a(6,"Hora de Inicio:"),n(),u(7,"input",16),c(8,Ei,3,0,"div",8),r(9,"label"),a(10,"Hora de Fin:"),n(),u(11,"input",17),c(12,Si,3,0,"div",8)(13,yi,3,0,"div",8),n()()()),t&2){let e,i=f(2);d(2),y((e=i.form.get("especialidad"))==null?null:e.value),d(6),s("ngIf",i.horaInicio==null?null:i.horaInicio.hasError("fueraDeRango")),d(4),s("ngIf",i.horaFin==null?null:i.horaFin.hasError("fueraDeRango")),d(),s("ngIf",i.horaFin==null?null:i.horaFin.hasError("finMenorQueInicio"))}}function Ii(t,o){t&1&&(r(0,"div")(1,"small",13),a(2,"Este campo es obligatorio."),n()())}function Pi(t,o){if(t&1&&(r(0,"div")(1,"small",13),a(2),n()()),t&2){let e=f(2);d(2),m("Debe ser m\xEDnimo ",e.duracionTurnos==null?null:e.duracionTurnos.getError("min").min," minutos.")}}function Li(t,o){if(t&1&&(r(0,"div")(1,"small",13),a(2),n()()),t&2){let e=f(2);d(2),m("Debe ser m\xE1ximo ",e.duracionTurnos==null?null:e.duracionTurnos.getError("max").max," minutos.")}}function Di(t,o){if(t&1&&(r(0,"div",3)(1,"label",4),a(2,"Especialidad"),n(),r(3,"select",5)(4,"option",6),a(5,"Elige..."),n(),c(6,vi,2,2,"option",7),n(),c(7,Ci,3,0,"div",8),n(),c(8,Mi,14,4,"div",8),r(9,"div",9)(10,"label"),a(11,"Duraci\xF3n de los turnos:"),n(),u(12,"input",10),c(13,Ii,3,0,"div",8)(14,Pi,3,1,"div",8)(15,Li,3,1,"div",8),n(),r(16,"button",11),a(17," Guardar "),n()),t&2){let e,i=f();d(6),s("ngForOf",i.usuarioLogueadoEntidad.especialidades),d(),s("ngIf",(i.especialidad==null?null:i.especialidad.hasError("required"))&&(i.especialidad==null?null:i.especialidad.touched)),d(),s("ngIf",(e=i.form.get("especialidad"))==null?null:e.value),d(5),s("ngIf",(i.duracionTurnos==null?null:i.duracionTurnos.hasError("required"))&&(i.duracionTurnos==null?null:i.duracionTurnos.touched)),d(),s("ngIf",(i.duracionTurnos==null?null:i.duracionTurnos.hasError("min"))&&(i.duracionTurnos==null?null:i.duracionTurnos.touched)),d(),s("ngIf",(i.duracionTurnos==null?null:i.duracionTurnos.hasError("max"))&&(i.duracionTurnos==null?null:i.duracionTurnos.touched)),d(),s("disabled",i.form.invalid)}}var P=class t{constructor(o,e){this.alert=o;this.firestore=e}usuarioLogueadoEntidad;fechaSeleccionada="";form;isLoading=!1;ngOnInit(){this.form=new Y({duracionTurnos:new v(30,[p.required,p.min(30),p.max(60)]),horaInicio:new v("",p.required),horaFin:new v("",p.required),especialidad:new v("",p.required)})}handleDateSelected(o){this.fechaSeleccionada=o,this.ajustarHorariosPorDia()}ajustarHorariosPorDia(){let o=this.convertirFecha(this.fechaSeleccionada);if(!o)return;let e=o.getDay(),i="08:00",l="19:00";if(e===6)l="14:00";else if(e===0){this.form.get("horaInicio")?.disable(),this.form.get("horaFin")?.disable();return}else this.form.get("horaInicio")?.enable(),this.form.get("horaFin")?.enable();this.setearLimitesHorario(i,l)}setearLimitesHorario(o,e){let i=this.form.get("horaInicio"),l=this.form.get("horaFin");i?.setValidators([p.required,this.horaMinimaValidator(o,e)]),l?.setValidators([p.required,this.horaMaximaValidator(o,e),this.horaFinMayorQueInicioValidator()]),i?.updateValueAndValidity(),l?.updateValueAndValidity()}horaMinimaValidator(o,e){return i=>{let l=i.value;return l&&(l<o||l>e)?{fueraDeRango:!0}:null}}horaMaximaValidator(o,e){return i=>{let l=i.value;return l&&(l<o||l>e)?{fueraDeRango:!0}:null}}horaFinMayorQueInicioValidator(){return o=>{let e=this.form.get("horaInicio")?.value,i=o.value;return e&&i&&i<=e?{finMenorQueInicio:!0}:null}}convertirFecha(o){let e=o.split("/");if(e.length!==3)return null;let[i,l,g]=e.map(Number);return new Date(g,l-1,i)}validarHorarios(){let o=this.form.get("horaInicio")?.value,e=this.form.get("horaFin")?.value;o&&e&&this.form.get("horaFin")?.updateValueAndValidity()}onSubmit(){return h(this,null,function*(){if(console.log("se entro al on submit"),this.form.valid){this.isLoading=!0;try{yield this.registrarRespuesta()}catch{this.alert.mostrarError("Error inesperado")}finally{this.isLoading=!1}}else this.alert.mostrarError("El formulario es inv\xE1lido")})}registrarRespuesta(){return h(this,null,function*(){if(!this.usuarioLogueadoEntidad||!this.fechaSeleccionada){this.alert.mostrarError("Faltan datos necesarios para registrar la disponibilidad.");return}let o=this.usuarioLogueadoEntidad.email,e=this.form.get("especialidad")?.value,i=this.fechaSeleccionada.replace(/\//g,"-"),l=this.form.get("horaInicio")?.value,g=this.form.get("horaFin")?.value,pi=this.form.get("duracionTurnos")?.value;try{let x=ri(this.firestore,`disponibilidades/${o}`),F=yield di(x);if(F.exists()){let R=F.data();for(let fi in R){let j=R[fi]?.[i];if(j){let{horaInicio:gi,horaFin:hi}=j;if(this.checkSolapamiento(gi,hi,l,g)){this.alert.mostrarError("Ya existe una disponibilidad en el mismo horario en otra especialidad. Por favor, elige otro horario.");return}}}}let k={[e]:{[i]:{horaInicio:l,horaFin:g,duracionTurnos:pi}}};F.exists()?(yield si(x,k),this.alert.mostrarSuccess("Disponibilidad guardada o actualizada correctamente.")):(yield li(x,k),this.alert.mostrarSuccess("Disponibilidad guardada exitosamente."))}catch(x){console.error("Error al guardar la disponibilidad:",x),this.alert.mostrarError("Hubo un problema al guardar la disponibilidad.")}})}checkSolapamiento(o,e,i,l){return i>=o&&i<e||l>o&&l<=e||i<=o&&l>=e}get duracionTurnos(){return this.form.get("duracionTurnos")}get horaInicio(){return this.form.get("horaInicio")}get horaFin(){return this.form.get("horaFin")}get especialidad(){return this.form.get("especialidad")}static \u0275fac=function(e){return new(e||t)(_(ci),_(ai))};static \u0275cmp=E({type:t,selectors:[["app-disponibilidad"]],inputs:{usuarioLogueadoEntidad:"usuarioLogueadoEntidad"},decls:6,vars:3,consts:[[3,"isLoading"],[3,"dateSelected"],[3,"ngSubmit","formGroup"],[1,"seleccion-especialidad",2,"margin-top","20px"],["for","especialidad"],["formControlName","especialidad"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"duracion-turnos"],["type","number","formControlName","duracionTurnos","min","30","max","60","step","1"],["type","submit",3,"disabled"],[3,"value"],[1,"error"],[1,"disponibilidad"],[1,"horarios"],["type","time","formControlName","horaInicio"],["type","time","formControlName","horaFin"]],template:function(e,i){e&1&&(u(0,"app-loading",0),r(1,"h3"),a(2,"Disponibilidad Horaria"),n(),r(3,"app-calendario",1),A("dateSelected",function(g){return i.handleDateSelected(g)}),n(),r(4,"form",2),A("ngSubmit",function(){return i.onSubmit()}),c(5,Di,18,7),n()),e&2&&(s("isLoading",i.isLoading),d(4),s("formGroup",i.form),d(),H(i.fechaSeleccionada?5:-1))},dependencies:[z,M,b,B,Z,ii,U,J,X,Q,$,oi,ei,K,W,I],styles:["h3[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.disponibilidad[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:left;flex-direction:column;gap:10px;margin-top:10px;background-color:#333;padding:15px;border-radius:10px;box-shadow:0 4px 8px #0003;margin-bottom:20px}.horarios[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:15px}.disponibilidad[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#ddd;font-weight:700;margin-right:5px}.disponibilidad[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .disponibilidad[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%]{background-color:#444;border:1px solid #555;color:#fff;border-radius:5px;padding:5px;font-size:1rem;width:100px;text-align:center}button[_ngcontent-%COMP%]{background-color:#de1414;color:#fff;border:none;padding:8px 12px;border-radius:5px;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#9b0e0e}button[_ngcontent-%COMP%]:active{background-color:#de1414}button[_ngcontent-%COMP%]:disabled{background-color:#888;cursor:not-allowed}.seleccion-especialidad[_ngcontent-%COMP%]{display:flex;flex-direction:column}select[_ngcontent-%COMP%]{background-color:#333;border:2px solid #f00;color:#fff;padding:10px;width:80%;max-width:500px;margin-bottom:10px;border-radius:5px;transition:border .3s ease;box-shadow:0 2px 5px #0000004d}select[_ngcontent-%COMP%]:focus{border:2px solid #fff;outline:none}input[_ngcontent-%COMP%]{background-color:#333;border:2px solid #f00;color:#fff;padding:10px;width:20%;max-width:500px;margin-bottom:10px;border-radius:5px;transition:border .3s ease;box-shadow:0 2px 5px #0000004d}input[_ngcontent-%COMP%]:focus{border:2px solid #fff;outline:none}select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:#333;color:#fff}.error[_ngcontent-%COMP%]{color:#f33;font-size:1em;margin-top:5px}button[type=submit][_ngcontent-%COMP%]{margin-top:10px;background-color:red;border:none;color:#fff;padding:10px 20px;cursor:pointer;font-size:1em;border-radius:5px;margin-bottom:20px}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#c00;box-shadow:0 2px 5px #0003}button[type=submit][_ngcontent-%COMP%]:disabled{background-color:#666;cursor:not-allowed}.duracion-turnos[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]})};function Oi(t,o){if(t&1&&(T(0),r(1,"p")(2,"strong"),a(3,"Obra Social:"),n(),a(4),n(),r(5,"p")(6,"strong"),a(7,"Imagen Secundaria:"),n()(),u(8,"img",9),w()),t&2){let e=f();d(4),m(" ",e.usuarioLogueadoEntidad.obraSocial,""),d(4),s("src",e.usuarioLogueadoEntidad.imagen2,O)}}function Ti(t,o){t&1&&(T(0),r(1,"p")(2,"strong"),a(3,"Rol Administrativo:"),n(),a(4," Admin"),n(),w())}function wi(t,o){if(t&1&&(r(0,"div",10),u(1,"app-disponibilidad",11),n()),t&2){let e=f();d(),s("usuarioLogueadoEntidad",e.usuarioLogueadoEntidad)}}var L=class t{constructor(o){this.authService=o}usuarioLogueadoEntidad=null;emailUsuarioLogueado=null;isLoading=!1;ngOnInit(){return h(this,null,function*(){this.authService.usuarioLogueado$.subscribe(o=>h(this,null,function*(){this.emailUsuarioLogueado=o,this.emailUsuarioLogueado&&(this.usuarioLogueadoEntidad=yield this.authService.getUserEntity(this.emailUsuarioLogueado))}))})}getImagenPerfil(){return this.usuarioLogueadoEntidad?.imagen1||""}isMedico(o){return o&&o.especialidades!==void 0}isPaciente(o){return o&&o.obraSocial!==void 0}isAdmin(o){return o&&o.rol==="Admin"}static \u0275fac=function(e){return new(e||t)(_(ui))};static \u0275cmp=E({type:t,selectors:[["app-perfil"]],decls:28,vars:11,consts:[[3,"isLoading"],[1,"banner"],[1,"perfil-container"],[1,"perfil-column","perfil-info"],[1,"perfil-header"],["alt","Imagen de Perfil",1,"perfil-imagen",3,"src"],[1,"perfil-rol"],[4,"ngIf"],["class","perfil-column disponibilidad-container",4,"ngIf"],["alt","Imagen 2",1,"perfil-imagen-secundaria",3,"src"],[1,"perfil-column","disponibilidad-container"],[3,"usuarioLogueadoEntidad"]],template:function(e,i){e&1&&(u(0,"app-loading",0),r(1,"section")(2,"div",1)(3,"h2"),a(4,"MI PERFIL"),n()()(),r(5,"div",2)(6,"div",3)(7,"div",4),u(8,"img",5),r(9,"h2"),a(10),n(),r(11,"span",6),a(12),n()(),r(13,"p")(14,"strong"),a(15,"Email:"),n(),a(16),n(),r(17,"p")(18,"strong"),a(19,"Documento:"),n(),a(20),n(),r(21,"p")(22,"strong"),a(23,"Edad:"),n(),a(24),n(),c(25,Oi,9,2,"ng-container",7)(26,Ti,5,0,"ng-container",7),n(),c(27,wi,2,1,"div",8),n()),e&2&&(s("isLoading",i.isLoading),d(8),s("src",i.getImagenPerfil(),O),d(2),q("",i.usuarioLogueadoEntidad==null?null:i.usuarioLogueadoEntidad.nombre," ",i.usuarioLogueadoEntidad==null?null:i.usuarioLogueadoEntidad.apellido,""),d(2),y(i.usuarioLogueadoEntidad==null?null:i.usuarioLogueadoEntidad.rol),d(4),m(" ",i.usuarioLogueadoEntidad==null?null:i.usuarioLogueadoEntidad.email,""),d(4),m(" ",i.usuarioLogueadoEntidad==null?null:i.usuarioLogueadoEntidad.documento,""),d(4),m(" ",i.usuarioLogueadoEntidad==null?null:i.usuarioLogueadoEntidad.edad," a\xF1os"),d(),s("ngIf",i.isPaciente(i.usuarioLogueadoEntidad)),d(),s("ngIf",i.isAdmin(i.usuarioLogueadoEntidad)),d(),s("ngIf",i.isMedico(i.usuarioLogueadoEntidad)))},dependencies:[M,b,P],styles:[".perfil-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:20px;margin:50px auto;padding:30px;max-width:1200px;background-color:#2c2c2c;border-radius:15px;box-shadow:0 8px 16px #0000004d;color:#fff;font-family:Arial,sans-serif}.perfil-column[_ngcontent-%COMP%]{flex:1}.perfil-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.perfil-imagen[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;object-fit:cover;margin-bottom:10px;border:2px solid #fff}.perfil-rol[_ngcontent-%COMP%]{display:inline-block;margin-top:5px;padding:5px 10px;background-color:#612109;color:#fff;border-radius:5px;font-size:.9rem}.perfil-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;font-size:1rem}.perfil-imagen-secundaria[_ngcontent-%COMP%]{width:100%;max-width:300px;height:auto;margin-top:10px;border-radius:10px;border:1px solid #fff}"]})};var Ai=[{path:"",component:L}],D=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=S({type:t});static \u0275inj=C({imports:[N.forChild(Ai),N]})};var mi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=S({type:t});static \u0275inj=C({imports:[G,D,b,ti,ni,I]})};export{mi as PerfilModule};
