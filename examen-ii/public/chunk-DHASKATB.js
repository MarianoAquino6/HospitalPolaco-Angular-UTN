import{Ka as f,Oa as i,Ra as u,Ua as n,Xa as a,a as s,b as d,c as g,e as m}from"./chunk-FJQ5DNDC.js";var p=class c{constructor(o){this.firestore=o}usuarioLogueadoSource=new d(null);sub;usuarioLogueado$=this.usuarioLogueadoSource.asObservable();get usuarioLogueado(){return this.usuarioLogueadoSource.value}setUsuarioLogueado(o){this.usuarioLogueadoSource.next(o)}logout(){this.usuarioLogueadoSource.next(null)}getUserRole(o){return s(this,null,function*(){let e=i(this.firestore,"usuarios"),t=n(e,a("email","==",o)),r=yield u(t);return r.empty?null:r.docs[0].data().rol})}userWasAccepted(o){return s(this,null,function*(){let e=i(this.firestore,"usuarios"),t=n(e,a("email","==",o)),r=yield u(t);return r.empty?null:r.docs[0].data().aceptado})}getUserEntity(o){return s(this,null,function*(){try{let e=i(this.firestore,"usuarios"),t=n(e,a("email","==",o)),r=yield u(t);return r.empty?(console.warn(`No se encontr\xF3 un usuario con el email: ${o}`),null):r.docs[0].data()}catch(e){return console.error("Error al obtener el usuario:",e),null}})}isLoggedIn(){let o=this.usuarioLogueadoSource.value!==null;return console.log("Checking login status:",o),o}static \u0275fac=function(e){return new(e||c)(m(f))};static \u0275prov=g({token:c,factory:c.\u0275fac,providedIn:"root"})};export{p as a};
