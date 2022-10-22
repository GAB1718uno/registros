"use strict";(self.webpackChunkregistrosApp=self.webpackChunkregistrosApp||[]).push([[867],{1867:(T,p,s)=>{s.r(p),s.d(p,{AuthModule:()=>v});var c=s(6895),a=s(3060),e=s(4006),Z=s(5226),m=s.n(Z),o=s(4650),g=s(7266);let d=(()=>{class t{constructor(n,i,r){this.fb=n,this.router=i,this._authSerice=r,this.miFormulario=this.fb.group({email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required,e.kI.minLength(8)]]})}ngOnInit(){}login(){const{email:n,password:i}=this.miFormulario.value;console.log(n,i),this._authSerice.login(n,i).subscribe(r=>{console.log(r),!0===r?this.router.navigateByUrl("/fallecidos/listado"):(m().fire("Atenci\xf3n",r,"warning"),console.log(r))})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(e.qu),o.Y36(a.F0),o.Y36(g.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:24,vars:2,consts:[["autocomplete","off",1,"login100-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-49"],[1,"wrap-input100","m-b-23"],[1,"label-input100"],["type","email","formControlName","email","placeholder","Ingrese su email",1,"input100"],[1,"focus-input100"],[1,"wrap-input100"],["type","password","formControlName","password","placeholder","Ingrese su contrase\xf1a",1,"input100"],[1,"text-right","p-t-8","p-b-31"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],["type","submit",1,"login100-form-btn",3,"disabled"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth/registro",1,"txt2"]],template:function(n,i){1&n&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return i.login()}),o.TgZ(1,"span",1),o._uU(2," Login "),o.qZA(),o.TgZ(3,"div",2),o.TgZ(4,"span",3),o._uU(5,"Email"),o.qZA(),o._UZ(6,"input",4),o._UZ(7,"span",5),o.qZA(),o.TgZ(8,"div",6),o.TgZ(9,"span",3),o._uU(10,"Password"),o.qZA(),o._UZ(11,"input",7),o._UZ(12,"span",5),o.qZA(),o._UZ(13,"div",8),o.TgZ(14,"div",9),o.TgZ(15,"div",10),o._UZ(16,"div",11),o.TgZ(17,"button",12),o._uU(18," Login "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(19,"div",13),o.TgZ(20,"span",14),o._uU(21," \xbfNo tienes cuenta? "),o.qZA(),o.TgZ(22,"a",15),o._uU(23," Crear una aqu\xed "),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.Q6J("formGroup",i.miFormulario),o.xp6(17),o.Q6J("disabled",i.miFormulario.invalid))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,a.yS],encapsulation:2}),t})();const A=[{path:"",component:s(2105).C,children:[{path:"login",component:d},{path:"registro",component:(()=>{class t{constructor(n,i,r){this.fb=n,this._authService=i,this.router=r,this.miFormulario=this.fb.group({usuario:["",[e.kI.required]],email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required]]})}ngOnInit(){}registrar(){const{usuario:n,password:i,email:r}=this.miFormulario.value;console.log(this.miFormulario.value),this._authService.registrar(n,i,r).subscribe(l=>{!0===l?this.router.navigateByUrl("/fallecidos/listado"):(console.log(l),m().fire("Atenci\xf3n",l[0].msg||l,"warning"))})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(e.qu),o.Y36(g.e),o.Y36(a.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-registro"]],decls:29,vars:2,consts:[["autocomplete","off",1,"login100-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-49"],[1,"wrap-input100","m-b-23"],[1,"label-input100"],["type","usuario","formControlName","usuario","placeholder","Ingrese su nombre",1,"input100"],[1,"focus-input100"],["type","email","formControlName","email","placeholder","Ingrese su email",1,"input100"],[1,"wrap-input100"],["type","password","formControlName","password","placeholder","Ingrese su contrase\xf1a",1,"input100"],[1,"text-right","p-t-8","p-b-31"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],["type","submit",1,"login100-form-btn",3,"disabled"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth",1,"txt2"]],template:function(n,i){1&n&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return i.registrar()}),o.TgZ(1,"span",1),o._uU(2," Nuevo Usuario "),o.qZA(),o.TgZ(3,"div",2),o.TgZ(4,"span",3),o._uU(5,"Nombre"),o.qZA(),o._UZ(6,"input",4),o._UZ(7,"span",5),o.qZA(),o.TgZ(8,"div",2),o.TgZ(9,"span",3),o._uU(10,"Email"),o.qZA(),o._UZ(11,"input",6),o._UZ(12,"span",5),o.qZA(),o.TgZ(13,"div",7),o.TgZ(14,"span",3),o._uU(15,"Password"),o.qZA(),o._UZ(16,"input",8),o._UZ(17,"span",5),o.qZA(),o._UZ(18,"div",9),o.TgZ(19,"div",10),o.TgZ(20,"div",11),o._UZ(21,"div",12),o.TgZ(22,"button",13),o._uU(23," Registro "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(24,"div",14),o.TgZ(25,"span",15),o._uU(26," \xbfYa tienes una cuenta? "),o.qZA(),o.TgZ(27,"a",16),o._uU(28," Ingrese aqu\xed "),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.Q6J("formGroup",i.miFormulario),o.xp6(22),o.Q6J("disabled",i.miFormulario.invalid))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,a.yS],encapsulation:2}),t})()},{path:"**",redirectTo:"login"}]}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.Bz.forChild(A)],a.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,b,e.UX]]}),t})()}}]);