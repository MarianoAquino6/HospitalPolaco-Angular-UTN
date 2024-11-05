import{a as ve,b as Ce,c as xe,d as Ee}from"./chunk-IQ4RSQPU.js";import{a as Se,b as ye}from"./chunk-3P6PN5CT.js";import{a as _e}from"./chunk-EPQ6NRZE.js";import{$a as ue,B as d,C as K,Ca as re,D as N,E as i,Ea as A,F as o,G as c,Ga as G,Ha as ae,Ia as v,J as w,Ja as H,K as _,L as p,La as I,N as X,Na as le,O as a,Oa as C,P as h,Q as P,Qa as D,Ra as x,Sa as se,Ta as u,Ua as de,Va as me,Wa as ce,Ya as S,_ as J,_a as pe,aa as ee,ab as ge,ba as F,bb as fe,c as f,ca as q,da as te,h as U,ha as V,ia as ie,ib as be,ka as B,kb as he,l as E,lb as y,m as L,mb as R,q as O,r as M,x as l,y as b,ya as oe,z as g,za as ne}from"./chunk-XMWGSLYE.js";function Re(n,r){n&1&&a(0," Habilitado ")}function Te(n,r){n&1&&a(0," Deshabilitado ")}function De(n,r){if(n&1){let t=w();i(0,"div",7),_("click",function(){O(t);let s=p().$implicit,m=p();return M(m.cambiarHabilitacionUsuario(!1,s))}),i(1,"button"),a(2," Deshabilitar "),o()()}}function je(n,r){if(n&1){let t=w();i(0,"div",8),_("click",function(){O(t);let s=p().$implicit,m=p();return M(m.cambiarHabilitacionUsuario(!0,s))}),i(1,"button"),a(2," Habilitar "),o()()}}function ke(n,r){if(n&1){let t=w();i(0,"td",6)(1,"i",9),_("click",function(){O(t);let s=p().$implicit,m=p();return M(m.verHistoriaClinica(s.email))}),o()()}}function Ue(n,r){n&1&&(i(0,"td"),a(1," No tiene HC "),o())}function Le(n,r){if(n&1&&(i(0,"tr")(1,"td"),a(2),o(),i(3,"td"),a(4),o(),i(5,"td"),a(6),o(),i(7,"td"),a(8),o(),i(9,"td"),a(10),o(),i(11,"td"),g(12,Re,1,0)(13,Te,1,0),o(),i(14,"td"),g(15,De,3,0,"div",4)(16,je,3,0,"div",5),o(),g(17,ke,2,0,"td",6)(18,Ue,2,0,"td"),o()),n&2){let t=r.$implicit;l(2),h(t.email),l(2),h(t.nombre),l(2),h(t.apellido),l(2),h(t.documento),l(2),h(t.rol),l(2),N(t.habilitado?12:13),l(3),N(t.habilitado?15:16),l(2),N(t.tieneHC?17:18)}}var z=class n{constructor(r,t,e,s){this.firestore=r;this.alert=t;this.auth=e;this.router=s}objetos;objetoSeleccionado;sub;isLoading=!1;ngOnInit(){return f(this,null,function*(){console.log("Iniciando carga de usuarios..."),yield this.obtenerObjetos(),console.log("Carga de usuarios finalizada.")})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}obtenerObjetos(){return f(this,null,function*(){console.log("Configurando loading a true"),this.isLoading=!0,console.log("isLoading:",this.isLoading);try{let r=v(this.firestore,"usuarios"),t=C(r,le("rol","asc")),e=G(t,{idField:"id"});this.sub=e.subscribe(s=>f(this,null,function*(){for(let m of s){let T=yield this.verificarHistoriaClinica(m.email);m.tieneHC=T}this.objetos=s}))}catch(r){console.error("Error al obtener usuarios:",r)}finally{console.log("Configurando loading a false"),this.isLoading=!1,console.log("isLoading:",this.isLoading)}})}verificarHistoriaClinica(r){return f(this,null,function*(){let t=v(this.firestore,"historiasClinicas"),e=C(t,x("pacienteEmail","==",r));return!(yield I(e)).empty})}cambiarHabilitacionUsuario(r,t){return f(this,null,function*(){this.isLoading=!0;try{let e=v(this.firestore,"usuarios"),s=C(e,x("email","==",t.email)),m=yield I(s);if(!m.empty){let T=m.docs[0],k=H(this.firestore,`usuarios/${T.id}`);r?(yield D(k,{habilitado:!0}),this.alert.mostrarSuccess("El usuario ha sido habilitado con exito.")):(yield D(k,{habilitado:!1}),this.alert.mostrarSuccess("El usuario ha sido deshabilitado con exito."))}}catch{this.alert.mostrarError("No se cambiar la habilitacion del usuario. Comuniquese con el equipo de soporte")}finally{this.isLoading=!1}})}verHistoriaClinica(r){console.log("seteo a "+r),this.auth.setPacienteHistoriaClinica(r),this.router.navigate(["/historia-clinica"])}static \u0275fac=function(t){return new(t||n)(b(A),b(R),b(_e),b(V))};static \u0275cmp=E({type:n,selectors:[["app-tabla-usuarios"]],decls:22,vars:2,consts:[[3,"isLoading"],[1,"tabla"],[1,"tabla-scroll"],[4,"ngFor","ngForOf"],[1,"rojo"],[1,"verde"],[1,"cancel-icon-cell"],[1,"rojo",3,"click"],[1,"verde",3,"click"],["aria-hidden","true",1,"fas","fa-notes-medical",3,"click"]],template:function(t,e){t&1&&(c(0,"app-loading",0),i(1,"div",1)(2,"div",2)(3,"table")(4,"tr")(5,"th"),a(6,"Email"),o(),i(7,"th"),a(8,"Nombre"),o(),i(9,"th"),a(10,"Apellido"),o(),i(11,"th"),a(12,"Documento"),o(),i(13,"th"),a(14,"Rol"),o(),i(15,"th"),a(16,"Habilitado"),o(),i(17,"th"),a(18,"Acci\xF3n"),o(),i(19,"th"),a(20,"Historia Clinica"),o()(),g(21,Le,19,8,"tr",3),o()()()),t&2&&(d("isLoading",e.isLoading),l(21),d("ngForOf",e.objetos))},dependencies:[F,y],styles:[".tabla[_ngcontent-%COMP%]{display:flex;flex:40%;justify-content:center;align-items:flex-start;padding-left:20px}.tabla-scroll[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto;width:100%;border:1px solid #444;background-color:#555}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;text-align:center;border:1px solid #444}th[_ngcontent-%COMP%]{background-color:#333;color:red}td[_ngcontent-%COMP%]{background-color:#555;color:#fff;cursor:pointer}tr[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#8b0000}tr[_ngcontent-%COMP%]:hover   i.fa[_ngcontent-%COMP%]{color:#777}.verde[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:16px;transition:background-color .3s}.verde[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#218838}.rojo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#dc3545;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:16px;transition:background-color .3s}.rojo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#c82333}i.fa-notes-medical[_ngcontent-%COMP%]{color:#ff0}i[_ngcontent-%COMP%]:hover{transition:color .3s ease,transform .3s ease;transform:scale(1.8)}"]})};var $=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["app-usuarios"]],decls:37,vars:0,consts:[[1,"banner"],[1,"tabla-usuarios"],[1,"grid-inicio","row","gy-3","mt-3","mb-3"],[1,"col-md-3"],["routerLink","/usuarios/gestion-acceso",1,"card"],["src","assets/img/gestion-acceso.png","alt","Login",1,"card-img-top"],[1,"card-body","cuerpo-card"],[1,"card-title"],["routerLink","/registro-pacientes",1,"card"],["src","assets/img/pacientes.png","alt","Registrar Paciente",1,"card-img-top"],["routerLink","/registro-medicos",1,"card"],["src","assets/img/medicos.png","alt","Registrar M\xE9dico",1,"card-img-top"],["routerLink","/usuarios/registro-admin",1,"card"],["src","assets/img/admin.png","alt","Registrar Administrador",1,"card-img-top"]],template:function(t,e){t&1&&(i(0,"section")(1,"div",0)(2,"h2"),a(3,"GESTION DE USUARIOS"),o()()(),i(4,"section")(5,"h3"),a(6,"Usuarios del Sistema"),o(),i(7,"div",1),c(8,"app-tabla-usuarios"),o()(),i(9,"section")(10,"h3"),a(11,"Selecciona la tarea a realizar"),o(),i(12,"div",2)(13,"div",3)(14,"div",4),c(15,"img",5),i(16,"div",6)(17,"h5",7),a(18,"GESTIONAR ACCESOS"),o()()()(),i(19,"div",3)(20,"div",8),c(21,"img",9),i(22,"div",6)(23,"h5",7),a(24,"REGISTRAR PACIENTE"),o()()()(),i(25,"div",3)(26,"div",10),c(27,"img",11),i(28,"div",6)(29,"h5",7),a(30,"REGISTRAR MEDICO"),o()()()(),i(31,"div",3)(32,"div",12),c(33,"img",13),i(34,"div",6)(35,"h5",7),a(36,"REGISTRAR ADMINISTRADOR"),o()()()()()())},dependencies:[ie,z],styles:[".tabla-usuarios[_ngcontent-%COMP%]{padding-top:30px;padding-left:100px;padding-right:100px}section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:50px;text-align:center;color:#fff}.grid-inicio[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin-top:20px}.card[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#450808cc,#45080899);border-radius:10px;transition:transform .3s ease,box-shadow .3s ease;cursor:pointer;margin:15px;overflow:hidden;box-shadow:0 4px 15px #00000080}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;width:100%;height:auto}.cuerpo-card[_ngcontent-%COMP%]{color:#fff;font-family:ubuntu;text-decoration:none;padding:15px;text-align:center}.card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 6px 20px #000c}"]})};function qe(n,r){if(n&1){let t=w();i(0,"tr",9),_("click",function(){let s=O(t).$implicit,m=p(2);return M(m.seleccionarObjeto(s.email))}),i(1,"td"),c(2,"i",10),o(),i(3,"td"),a(4),o(),i(5,"td"),a(6),o(),i(7,"td"),a(8),o(),i(9,"td"),a(10),o(),i(11,"td"),a(12),o()()}if(n&2){let t=r.$implicit,e=p(2);K("selected",e.objetoSeleccionado===t.email),l(2),d("ngClass",e.objetoSeleccionado===t.email?"fa-check-circle":"fa-circle"),l(2),h(t.email),l(2),h(t.nombre),l(2),h(t.apellido),l(2),h(t.documento),l(2),h(t.especialidades)}}function Ve(n,r){if(n&1&&(i(0,"table")(1,"tr")(2,"th"),a(3,"Seleccion"),o(),i(4,"th"),a(5,"Email"),o(),i(6,"th"),a(7,"Nombre"),o(),i(8,"th"),a(9,"Apellido"),o(),i(10,"th"),a(11,"Documento"),o(),i(12,"th"),a(13,"Especialidad"),o()(),g(14,qe,13,8,"tr",8),o()),n&2){let t=p();l(14),d("ngForOf",t.objetos)}}function Ge(n,r){n&1&&(i(0,"p"),a(1,"No existen usuarios por aceptar."),o())}var Q=class n{constructor(r,t){this.firestore=r;this.alert=t}objetos;objetoSeleccionado;sub;isLoading=!1;ngOnInit(){this.obtenerObjetos()}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}obtenerObjetos(){let r=v(this.firestore,"usuarios"),t=C(r,x("rol","==","Medico"),x("aceptado","==",!1)),e=G(t,{idField:"id"});this.sub=e.subscribe(s=>{this.objetos=s})}seleccionarObjeto(r){this.objetoSeleccionado=r}aceptarUsuario(){return f(this,null,function*(){let r=v(this.firestore,"usuarios"),t=C(r,x("email","==",this.objetoSeleccionado)),e=yield I(t);if(e.empty)this.alert.mostrarError("No se ha podido aceptar al usuario");else{this.isLoading=!0;let s=e.docs[0];yield D(H(r,s.id),{aceptado:!0}),this.alert.mostrarSuccess("Usuario aceptado correctamente."),this.isLoading=!1}})}static \u0275fac=function(t){return new(t||n)(b(A),b(R))};static \u0275cmp=E({type:n,selectors:[["app-gestion-acceso"]],decls:16,vars:4,consts:[["noUsuarios",""],[1,"banner"],[3,"isLoading"],[1,"gestion"],[1,"tabla-scroll"],[4,"ngIf","ngIfElse"],[1,"accionable"],[3,"click","disabled"],[3,"selected","click",4,"ngFor","ngForOf"],[3,"click"],["aria-hidden","true",1,"fa",3,"ngClass"]],template:function(t,e){if(t&1){let s=w();i(0,"section")(1,"div",1)(2,"h2"),a(3,"GESTIONAR ACCESO DE MEDICOS"),o()()(),i(4,"section"),c(5,"app-loading",2),i(6,"h3"),a(7,"Usuarios Pendientes"),o(),i(8,"div",3)(9,"div",4),g(10,Ve,15,1,"table",5)(11,Ge,2,0,"ng-template",null,0,J),o(),i(13,"div",6)(14,"button",7),_("click",function(){return O(s),M(e.aceptarUsuario())}),a(15," ACEPTAR USUARIO "),o()()()()}if(t&2){let s=X(12);l(5),d("isLoading",e.isLoading),l(5),d("ngIf",e.objetos.length>0)("ngIfElse",s),l(4),d("disabled",!e.objetoSeleccionado)}},dependencies:[ee,F,q,y],styles:["h3[_ngcontent-%COMP%]{color:#fff;padding:30px}.gestion[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-height:600px;padding:20px}.tabla-scroll[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:400px;overflow-y:auto;width:100%;border:1px solid #444;background-color:#333;border-radius:8px;box-shadow:0 4px 8px #0003}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;text-align:center;border-bottom:1px solid #444}th[_ngcontent-%COMP%]{background-color:#222;color:red}td[_ngcontent-%COMP%]{background-color:#555;color:#fff;cursor:pointer;transition:background-color .3s ease}i.fa[_ngcontent-%COMP%]{font-size:20px;color:#fff;transition:color .3s ease}tr[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#8b0000}tr[_ngcontent-%COMP%]:hover   i.fa[_ngcontent-%COMP%]{color:#777}tr.selected[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{color:#b30000}.accionable[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px}button[_ngcontent-%COMP%]{margin-top:50px;background-color:red;color:#fff;border:none;border-radius:5px;padding:10px 20px;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#b30000}"]})};function He(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo es obligatorio."),o()())}function ze(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Solo se permiten letras y espacios."),o()())}function $e(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo es obligatorio."),o()())}function Qe(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Solo se permiten letras y espacios."),o()())}function Ze(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo es obligatorio."),o()())}function Ye(n,r){if(n&1&&(i(0,"div")(1,"small",28),a(2),o()()),n&2){let t=p();l(2),P("Debes tener m\xEDnimo ",t.edad==null?null:t.edad.getError("min").min," a\xF1os.")}}function Be(n,r){if(n&1&&(i(0,"div")(1,"small",28),a(2),o()()),n&2){let t=p();l(2),P("Debes tener m\xE1ximo ",t.edad==null?null:t.edad.getError("max").max," a\xF1os.")}}function We(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo es obligatorio."),o()())}function Ke(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo debe contener solo n\xFAmeros."),o()())}function Xe(n,r){if(n&1&&(i(0,"div")(1,"small",28),a(2),o()()),n&2){let t=p();l(2),P("Solo se permite hasta ",t.documento==null?null:t.documento.getError("maxlength").requiredLength," caracteres.")}}function Je(n,r){if(n&1&&(i(0,"div")(1,"small",28),a(2),o()()),n&2){let t=p();l(2),P("Solo se permite desde ",t.documento==null?null:t.documento.getError("minlength").requiredLength," caracteres.")}}function et(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo es obligatorio."),o()())}function tt(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Debes ingresar un email v\xE1lido."),o()())}function it(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo es obligatorio."),o()())}function ot(n,r){if(n&1&&(i(0,"div")(1,"small",28),a(2),o()()),n&2){let t=p();l(2),P("La contrase\xF1a debe tener al menos ",t.password==null?null:t.password.getError("minlength").requiredLength," caracteres.")}}function nt(n,r){n&1&&(i(0,"div")(1,"small",28),a(2,"Este campo es obligatorio."),o()())}var Z=class n{constructor(r,t,e){this.firestore=r;this.router=t;this.alert=e}formulario;isLoading=!1;captchaValido=!1;ngOnInit(){this.formulario=new ce({nombre:new S("",[u.required,u.pattern("^[a-zA-Z ]*$")]),apellido:new S("",[u.required,u.pattern("^[a-zA-Z ]*$")]),edad:new S("",[u.required,u.min(18),u.max(80)]),documento:new S("",[u.required,u.pattern("^[0-9]*$"),u.minLength(7),u.maxLength(8)]),email:new S("",[u.required,u.email]),password:new S("",[u.required,u.minLength(6)]),imagen1:new S("",u.required)})}onSubmit(){return f(this,null,function*(){if(this.formulario.valid&&this.captchaValido){this.isLoading=!0;try{let r=yield this.uploadImages();yield this.registrarRespuesta(r)}catch{this.alert.mostrarError("Error al subir las im\xE1genes")}finally{this.isLoading=!1}}else this.alert.mostrarError("El formulario es inv\xE1lido")})}onImageSelected(r,t){let e=r.target;if(e.files&&e.files[0]){let s=e.files[0];s.type.startsWith("image/")?this.formulario.get(t)?.setValue(s):(this.alert.mostrarError("El archivo debe ser una imagen."),e.value="")}}uploadImages(){return f(this,null,function*(){let r=Ce(),t=[],e=this.formulario.get("imagen1")?.value;if(e){let s=xe(r,`imagenes/admins/${e.name}`);yield Ee(s,e);let m=yield ve(s);t.push(m)}return t})}registrarRespuesta(r){return f(this,null,function*(){try{let t=this.formulario.get("email")?.value;if(yield this.checkUserExists(t)){this.alert.mostrarError("Ya existe un usuario con este correo electr\xF3nico.");return}let s=v(this.firestore,"usuarios"),m={nombre:this.formulario.get("nombre")?.value,apellido:this.formulario.get("apellido")?.value,edad:this.formulario.get("edad")?.value,documento:this.formulario.get("documento")?.value,email:this.formulario.get("email")?.value,imagen1:r[0],rol:"Admin",habilitado:!0,fechaCreacion:new Date};yield ae(s,m);let T=re(),k=yield oe(T,t,this.formulario.get("password")?.value);yield ne(k.user),this.alert.mostrarSuccess("Se ha enviado el mail de verificaci\xF3n!"),setTimeout(()=>{this.router.navigate(["/home"])},1500)}catch(t){let e=t instanceof Error?t.message:"Error desconocido";this.alert.mostrarError(e)}})}checkUserExists(r){return f(this,null,function*(){let t=v(this.firestore,"usuarios");return!(yield I(C(t,x("email","==",r)))).empty})}onCaptchaResolved(r){r?(console.log("Captcha resuelto:",r),this.captchaValido=!0):(console.log("Captcha no resuelto o inv\xE1lido."),this.captchaValido=!1)}get nombre(){return this.formulario.get("nombre")}get apellido(){return this.formulario.get("apellido")}get edad(){return this.formulario.get("edad")}get documento(){return this.formulario.get("documento")}get especialidad(){return this.formulario.get("especialidad")}get otraEspecialidad(){return this.formulario.get("otraEspecialidad")}get email(){return this.formulario.get("email")}get password(){return this.formulario.get("password")}get imagen1(){return this.formulario.get("imagen1")}static \u0275fac=function(t){return new(t||n)(b(A),b(V),b(R))};static \u0275cmp=E({type:n,selectors:[["app-registro-admin"]],decls:62,vars:19,consts:[[1,"banner"],[1,"container-principal"],[3,"isLoading"],[1,"formulario"],[3,"ngSubmit","formGroup"],[1,"inputs"],[1,"inputs-izq"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","formControlName","nombre","placeholder","Ingresa tu nombre"],[4,"ngIf"],["for","apellido"],["type","text","id","apellido","formControlName","apellido","placeholder","Ingresa tu apellido"],["for","edad"],["type","number","id","edad","formControlName","edad","placeholder","Ingresa tu edad (De 18 a 80)"],["for","documento"],["type","text","id","documento","formControlName","documento","placeholder","Ingresa el n\xFAmero de documento (De 7 a 8 caracteres)","maxlength","8"],[1,"inputs-der"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Ingresa tu email"],["for","password"],["type","password","id","password","formControlName","password","placeholder","Minimo 6 caracteres"],["for","imagen1"],["type","file","id","imagen1","formControlName","imagen1","accept","image/*",3,"change"],["siteKey","6Lc4VnQqAAAAACuZC-R8Yco-rqXSdMiHn30qaZFD","theme","dark",3,"resolved"],["type","submit",3,"disabled"],[1,"imagen"],["src","assets/img/registro-admin.webp","alt",""],[1,"error"]],template:function(t,e){t&1&&(i(0,"section")(1,"div",0)(2,"h2"),a(3,"REGISTRO DE ADMINISTRADORES"),o()()(),i(4,"section",1),c(5,"app-loading",2),i(6,"div",3)(7,"h3"),a(8,"Completa los siguientes datos"),o(),i(9,"form",4),_("ngSubmit",function(){return e.onSubmit()}),i(10,"div",5)(11,"div",6)(12,"div",7)(13,"label",8),a(14,"Nombre:"),o(),c(15,"input",9),g(16,He,3,0,"div",10)(17,ze,3,0,"div",10),o(),i(18,"div",7)(19,"label",11),a(20,"Apellido:"),o(),c(21,"input",12),g(22,$e,3,0,"div",10)(23,Qe,3,0,"div",10),o(),i(24,"div",7)(25,"label",13),a(26,"Edad:"),o(),c(27,"input",14),g(28,Ze,3,0,"div",10)(29,Ye,3,1,"div",10)(30,Be,3,1,"div",10),o(),i(31,"div",7)(32,"label",15),a(33,"N\xFAmero de Documento:"),o(),c(34,"input",16),g(35,We,3,0,"div",10)(36,Ke,3,0,"div",10)(37,Xe,3,1,"div",10)(38,Je,3,1,"div",10),o()(),i(39,"div",17)(40,"div",7)(41,"label",18),a(42,"Email:"),o(),c(43,"input",19),g(44,et,3,0,"div",10)(45,tt,3,0,"div",10),o(),i(46,"div",7)(47,"label",20),a(48,"Contrase\xF1a:"),o(),c(49,"input",21),g(50,it,3,0,"div",10)(51,ot,3,1,"div",10),o(),i(52,"div",7)(53,"label",22),a(54,"Imagen de Perfil:"),o(),i(55,"input",23),_("change",function(m){return e.onImageSelected(m,"imagen1")}),o(),g(56,nt,3,0,"div",10),o(),i(57,"re-captcha",24),_("resolved",function(m){return e.onCaptchaResolved(m)}),o()()(),i(58,"button",25),a(59," Enviar "),o()()(),i(60,"div",26),c(61,"img",27),o()()),t&2&&(l(5),d("isLoading",e.isLoading),l(4),d("formGroup",e.formulario),l(7),d("ngIf",(e.nombre==null?null:e.nombre.hasError("required"))&&(e.nombre==null?null:e.nombre.touched)),l(),d("ngIf",(e.nombre==null?null:e.nombre.hasError("pattern"))&&(e.nombre==null?null:e.nombre.touched)),l(5),d("ngIf",(e.apellido==null?null:e.apellido.hasError("required"))&&(e.apellido==null?null:e.apellido.touched)),l(),d("ngIf",(e.apellido==null?null:e.apellido.hasError("pattern"))&&(e.apellido==null?null:e.apellido.touched)),l(5),d("ngIf",(e.edad==null?null:e.edad.hasError("required"))&&(e.edad==null?null:e.edad.touched)),l(),d("ngIf",(e.edad==null?null:e.edad.hasError("min"))&&(e.edad==null?null:e.edad.touched)),l(),d("ngIf",(e.edad==null?null:e.edad.hasError("max"))&&(e.edad==null?null:e.edad.touched)),l(5),d("ngIf",(e.documento==null?null:e.documento.hasError("required"))&&(e.documento==null?null:e.documento.touched)),l(),d("ngIf",(e.documento==null?null:e.documento.hasError("pattern"))&&(e.documento==null?null:e.documento.touched)),l(),d("ngIf",(e.documento==null?null:e.documento.hasError("maxlength"))&&(e.documento==null?null:e.documento.touched)),l(),d("ngIf",(e.documento==null?null:e.documento.hasError("minlength"))&&(e.documento==null?null:e.documento.touched)),l(6),d("ngIf",(e.email==null?null:e.email.hasError("required"))&&(e.email==null?null:e.email.touched)),l(),d("ngIf",(e.email==null?null:e.email.hasError("email"))&&(e.email==null?null:e.email.touched)),l(5),d("ngIf",(e.password==null?null:e.password.hasError("required"))&&(e.password==null?null:e.password.touched)),l(),d("ngIf",(e.password==null?null:e.password.hasError("minlength"))&&(e.password==null?null:e.password.touched)),l(5),d("ngIf",(e.imagen1==null?null:e.imagen1.hasError("required"))&&(e.imagen1==null?null:e.imagen1.touched)),l(2),d("disabled",e.formulario.invalid||!e.captchaValido))},dependencies:[q,pe,se,ue,de,me,be,ge,fe,y,Se],styles:[".container-principal[_ngcontent-%COMP%]{display:flex;flex-direction:row}.formulario[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:65%;margin-left:60px;margin-top:10px}.inputs[_ngcontent-%COMP%]{display:flex;flex-direction:row}.inputs-izq[_ngcontent-%COMP%], .inputs-der[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:50%;margin-right:20px}h3[_ngcontent-%COMP%]{display:flex;margin-top:20px;margin-bottom:40px;color:#fff}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:20px}label[_ngcontent-%COMP%]{color:#fff;font-family:ubuntu;margin-bottom:5px}input[_ngcontent-%COMP%]{background-color:#333;border:2px solid #f00;color:#fff;padding:10px;width:80%;max-width:500px;margin-bottom:10px;border-radius:5px;transition:border .3s ease;box-shadow:0 2px 5px #0000004d}input[_ngcontent-%COMP%]:focus{border:2px solid #fff;outline:none}button[type=submit][_ngcontent-%COMP%]{margin-top:10px;background-color:red;border:none;color:#fff;padding:10px 20px;cursor:pointer;font-size:1em;border-radius:5px;margin-bottom:20px}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#c00;box-shadow:0 2px 5px #0003}button[type=submit][_ngcontent-%COMP%]:disabled{background-color:#666;cursor:not-allowed}.error[_ngcontent-%COMP%]{color:#f33;font-size:1em;margin-top:5px}.imagen[_ngcontent-%COMP%]{display:flex;flex:35%;align-items:center;justify-content:left;overflow:hidden}.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}"]})};var rt=[{path:"",component:$},{path:"gestion-acceso",component:Q},{path:"registro-admin",component:Z}],Y=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=U({imports:[B.forChild(rt),B]})};var Ae=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=U({imports:[te,Y,he,y,ye]})};export{Ae as UsuariosModule};
