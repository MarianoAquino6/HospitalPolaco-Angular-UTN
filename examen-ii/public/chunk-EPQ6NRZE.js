import{Ea as p,Ia as a,La as n,Oa as u,Ra as l,c as s,d,g as m,j as g}from"./chunk-XMWGSLYE.js";var f=class c{constructor(o){this.firestore=o}usuarioLogueadoSource=new d(null);pacienteHistoriaClinicaEmail=new d(null);sub;usuarioLogueado$=this.usuarioLogueadoSource.asObservable();pacienteHistoriaClinicaEmail$=this.pacienteHistoriaClinicaEmail.asObservable();get usuarioLogueado(){return this.usuarioLogueadoSource.value}obtenerUsuarioLogueado(){return this.usuarioLogueado}setUsuarioLogueado(o){this.usuarioLogueadoSource.next(o),console.log("Se seteo el usuario logueado: "+this.usuarioLogueado)}setPacienteHistoriaClinica(o){this.pacienteHistoriaClinicaEmail.next(o),console.log("Se seteo el paciente para la HC: "+this.usuarioLogueado)}get pacienteHistoriaClinica(){return this.pacienteHistoriaClinicaEmail.value}logout(){this.usuarioLogueadoSource.next(null)}getUserRole(o){return s(this,null,function*(){let r=a(this.firestore,"usuarios"),t=u(r,l("email","==",o)),e=yield n(t);return e.empty?null:e.docs[0].data().rol})}userWasAccepted(o){return s(this,null,function*(){let r=a(this.firestore,"usuarios"),t=u(r,l("email","==",o)),e=yield n(t);return e.empty?null:e.docs[0].data().aceptado})}usuarioEstaHabilitado(o){return s(this,null,function*(){let r=a(this.firestore,"usuarios"),t=u(r,l("email","==",o)),e=yield n(t);return e.empty?null:e.docs[0].data().habilitado??null})}getUserEntity(o){return s(this,null,function*(){try{let r=a(this.firestore,"usuarios"),t=u(r,l("email","==",o)),e=yield n(t);return e.empty?(console.warn(`No se encontr\xF3 un usuario con el email: ${o}`),null):e.docs[0].data()}catch(r){return console.error("Error al obtener el usuario:",r),null}})}obtenerNombreCompletoDesdeEmail(o){return s(this,null,function*(){let r=a(this.firestore,"usuarios"),t=u(r,l("email","==",o)),e=yield n(t);if(!e.empty){let i=e.docs[0].data();return`${i.apellido??""} ${i.nombre??""}`.trim()||null}return null})}isLoggedIn(){let o=this.usuarioLogueadoSource.value!==null;return console.log("Checking login status:",o),o}static \u0275fac=function(r){return new(r||c)(g(p))};static \u0275prov=m({token:c,factory:c.\u0275fac,providedIn:"root"})};export{f as a};
