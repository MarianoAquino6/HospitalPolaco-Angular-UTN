import{A as R,d as b,e as v,ea as C,f as m,g as y,h as f,i as c,j as a,l as E,m as p,s as l,t as w,u as x,v as j,y as u}from"./chunk-XMWGSLYE.js";var I=new c("recaptcha-language"),S=new c("recaptcha-base-url"),D=new c("recaptcha-nonce-tag"),O=new c("recaptcha-settings"),B=new c("recaptcha-v3-site-key"),k=new c("recaptcha-loader-options");function T(e,h,t,{url:i,lang:n,nonce:s}={}){window.ng2recaptchaloaded=()=>{t(grecaptcha)};let r=document.createElement("script");r.innerHTML="";let{url:o,nonce:d}=h(new URL(i||"https://www.google.com/recaptcha/api.js"));o.searchParams.set("render",e==="explicit"?e:e.key),o.searchParams.set("onload","ng2recaptchaloaded"),o.searchParams.set("trustedtypes","true"),n&&o.searchParams.set("hl",n),r.src=o.href;let g=d||s;g&&r.setAttribute("nonce",g),r.async=!0,r.defer=!0,document.head.appendChild(r)}function L({v3SiteKey:e,onBeforeLoad:h,onLoaded:t}){let i=e?{key:e}:"explicit";M.loadScript(i,h,t)}var M={loadScript:T,newLoadScript:L};function N(e){return e.asObservable().pipe(m(h=>h!==null))}var A=(()=>{class e{static{this.ready=null}constructor(t,i,n,s,r,o){this.platformId=t,this.language=i,this.baseUrl=n,this.nonce=s,this.v3SiteKey=r,this.options=o;let d=this.init();this.ready=d?N(d):v()}init(){if(e.ready)return e.ready;if(!C(this.platformId))return;let t=new b(null);return e.ready=t,M.newLoadScript({v3SiteKey:this.v3SiteKey,onBeforeLoad:i=>{if(this.options?.onBeforeLoad)return this.options.onBeforeLoad(i);let n=new URL(this.baseUrl??i);return this.language&&n.searchParams.set("hl",this.language),{url:n,nonce:this.nonce}},onLoaded:i=>{let n=i;this.options?.onLoaded&&(n=this.options.onLoaded(i)),t.next(n)}}),t}static{this.\u0275fac=function(i){return new(i||e)(a(j),a(I,8),a(S,8),a(D,8),a(B,8),a(k,8))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})(),z=0,re=(()=>{class e{constructor(t,i,n,s){this.elementRef=t,this.loader=i,this.zone=n,this.id=`ngrecaptcha-${z++}`,this.errorMode="default",this.resolved=new l,this.error=new l,this.errored=new l,s&&(this.siteKey=s.siteKey,this.theme=s.theme,this.type=s.type,this.size=s.size,this.badge=s.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(t=>{t!=null&&t.render instanceof Function&&(this.grecaptcha=t,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){this.size==="invisible"&&(this.widget!=null?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){this.widget!=null&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}get __unsafe_widgetValue(){return this.widget!=null?this.grecaptcha.getResponse(this.widget):null}expired(){this.resolved.emit(null)}onError(t){this.error.emit(t),this.errored.emit(t)}captchaResponseCallback(t){this.resolved.emit(t)}grecaptchaReset(){this.widget!=null&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){let t={badge:this.badge,callback:i=>{this.zone.run(()=>this.captchaResponseCallback(i))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};this.errorMode==="handled"&&(t["error-callback"]=(...i)=>{this.zone.run(()=>this.onError(i))}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,t),this.executeRequested===!0&&(this.executeRequested=!1,this.execute())}static{this.\u0275fac=function(i){return new(i||e)(u(x),u(A),u(w),u(O,8))}}static{this.\u0275cmp=E({type:e,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(i,n){i&2&&R("id",n.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",tabIndex:"tabIndex",badge:"badge",errorMode:"errorMode"},outputs:{resolved:"resolved",error:"error",errored:"errored"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return e})(),P=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=f({})}}return e})(),oe=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=f({providers:[A],imports:[P]})}}return e})();export{re as a,oe as b};
