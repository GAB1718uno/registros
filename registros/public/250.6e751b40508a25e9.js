"use strict";(self.webpackChunkregistrosApp=self.webpackChunkregistrosApp||[]).push([[250],{4250:(Z,f,s)=>{s.r(f),s.d(f,{AuthModule:()=>J});var p=s(6895),c=s(9299),i=s(4006),d=s(5226),h=s.n(d),o=s(4650),m=s(7266);let A=(()=>{class a{constructor(e,t,r){this.fb=e,this.router=t,this._authSerice=r,this.miFormulario=this.fb.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(8)]]})}ngOnInit(){}login(){const{email:e,password:t}=this.miFormulario.value;console.log(e,t),this._authSerice.login(e,t).subscribe(r=>{console.log(r),!0===r?this.router.navigateByUrl("/fallecidos/listado"):(h().fire("Atenci\xf3n",r,"warning"),console.log(r))})}volverInicio(){this.router.navigateByUrl("/")}}return a.\u0275fac=function(e){return new(e||a)(o.Y36(i.QS),o.Y36(c.F0),o.Y36(m.e))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-login"]],decls:27,vars:2,consts:[["autocomplete","off",1,"login100-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-49"],[1,"wrap-input100","m-b-23"],[1,"label-input100"],["type","email","formControlName","email","placeholder","Ingrese su email",1,"input100"],[1,"focus-input100"],[1,"wrap-input100"],["type","password","formControlName","password","placeholder","Ingrese su contrase\xf1a",1,"input100"],[1,"text-right","p-t-8","p-b-31"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],["type","submit",1,"login100-form-btn",3,"disabled"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth/registro",1,"txt2"],["type","submit",1,"btn","btn-primary","float-end",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return t.login()}),o.TgZ(1,"span",1),o._uU(2," Login "),o.qZA(),o.TgZ(3,"div",2)(4,"span",3),o._uU(5,"Email"),o.qZA(),o._UZ(6,"input",4)(7,"span",5),o.qZA(),o.TgZ(8,"div",6)(9,"span",3),o._uU(10,"Password"),o.qZA(),o._UZ(11,"input",7)(12,"span",5),o.qZA(),o._UZ(13,"div",8),o.TgZ(14,"div",9)(15,"div",10),o._UZ(16,"div",11),o.TgZ(17,"button",12),o._uU(18," Login "),o.qZA()()(),o.TgZ(19,"div",13)(20,"span",14),o._uU(21," \xbfNo tienes cuenta? "),o.qZA(),o.TgZ(22,"a",15),o._uU(23," Crear una aqu\xed "),o.qZA()(),o._UZ(24,"hr"),o.qZA(),o.TgZ(25,"button",16),o.NdJ("click",function(){return t.volverInicio()}),o._uU(26," Volver al Inicio\n"),o.qZA()),2&e&&(o.Q6J("formGroup",t.miFormulario),o.xp6(17),o.Q6J("disabled",t.miFormulario.invalid))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,c.yS,i.sg,i.u],encapsulation:2}),a})();var _=s(2105);let U=(()=>{class a{constructor(e,t,r){this.fb=e,this._authService=t,this.router=r,this.miFormulario=this.fb.group({usuario:["",[i.kI.required]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required]]}),this.nombre="",this.apellidos="",this.identidad="",this.nacimiento=new Date,this.direccion="",this.avatar="",this.rol="rolUsuario",this.estado=0}ngOnInit(){}registrar(){const{usuario:e,password:t,email:r}=this.miFormulario.value;console.log(this.miFormulario.value),this._authService.registrar(e,t,r,this.rol,this.estado).subscribe(n=>{console.log(n),this._authService.crearPerfilUsuario(this.rol,this.estado,n.nombreUsuario,n.uid,this.nombre,this.apellidos,this.identidad,this.nacimiento,this.direccion,this.avatar).subscribe(u=>console.log(u)),!0===n.ok?this.router.navigateByUrl("/fallecidos/listado"):(console.log(n),h().fire("Atenci\xf3n",n[0].msg||n,"warning"))})}}return a.\u0275fac=function(e){return new(e||a)(o.Y36(i.QS),o.Y36(m.e),o.Y36(c.F0))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-registro"]],decls:29,vars:2,consts:[["autocomplete","off",1,"login100-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-49"],[1,"wrap-input100","m-b-23"],[1,"label-input100"],["type","usuario","formControlName","usuario","placeholder","Ingrese un nombre para el usuario",1,"input100"],[1,"focus-input100"],["type","email","formControlName","email","placeholder","Ingrese su email",1,"input100"],[1,"wrap-input100"],["type","password","formControlName","password","placeholder","Ingrese su contrase\xf1a",1,"input100"],[1,"text-right","p-t-8","p-b-31"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],["type","submit",1,"login100-form-btn",3,"disabled"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth",1,"txt2"]],template:function(e,t){1&e&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return t.registrar()}),o.TgZ(1,"span",1),o._uU(2," Nuevo Usuario "),o.qZA(),o.TgZ(3,"div",2)(4,"span",3),o._uU(5,"Nombre de Usuario"),o.qZA(),o._UZ(6,"input",4)(7,"span",5),o.qZA(),o.TgZ(8,"div",2)(9,"span",3),o._uU(10,"Email"),o.qZA(),o._UZ(11,"input",6)(12,"span",5),o.qZA(),o.TgZ(13,"div",7)(14,"span",3),o._uU(15,"Password"),o.qZA(),o._UZ(16,"input",8)(17,"span",5),o.qZA(),o._UZ(18,"div",9),o.TgZ(19,"div",10)(20,"div",11),o._UZ(21,"div",12),o.TgZ(22,"button",13),o._uU(23," Registro "),o.qZA()()(),o.TgZ(24,"div",14)(25,"span",15),o._uU(26," \xbfYa tienes una cuenta? "),o.qZA(),o.TgZ(27,"a",16),o._uU(28," Ingrese aqu\xed "),o.qZA()()()),2&e&&(o.Q6J("formGroup",t.miFormulario),o.xp6(22),o.Q6J("disabled",t.miFormulario.invalid))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,c.yS,i.sg,i.u],encapsulation:2}),a})();var C=s(3900),y=s(7915);let T=(()=>{class a{constructor(e,t,r,n,u,v){this.fb=e,this._activatedRoute=t,this._authService=r,this._usuarioActivo=n,this._notify=u,this._router=v,this.imagenMostrar="",this.usuario={},this.usuarioActivo={},this.identidad="",this.perfiles=[],this.arrayFuturos=[],this.perfilActualizado=[],this.perfilActualizado2=[],this.perfilEncontrado=[],this.formPerfil=this.fb.group({id:[""],usuario:["",[i.kI.required]],email:["",[i.kI.required]],nombre:["",[i.kI.required,i.kI.minLength(6)]],apellidos:["",[i.kI.required]],nacio:["",[i.kI.required]],direccion:["",[i.kI.required]],identidad:["",[i.kI.required,this.validarNif]],fotoPerfil:["",[i.kI.required]],password:["",[i.kI.required]],condiciones:[!1,[i.kI.requiredTrue]]}),this.dni_valido=!1,this.comparar="",this.avatarEnviar="",this.idPerfil="",this.estado=1,this.rol="rolUsuario"}ngOnInit(){this._activatedRoute.params.pipe((0,C.w)(({id:e})=>this._authService.obtenerUsuario(e))).subscribe(e=>{this.usuario=e,console.log(this.usuario),this.formPerfil.patchValue(this.usuario)})}get form(){return this.formPerfil.controls}guardar(){if(console.log(this.formPerfil.value),console.log(this.formPerfil.valid),this.formPerfil.valid){const e=this._authService.obtenerPerfilUsuarioEditar().subscribe(t=>{this.usuarioActivo=this._usuarioActivo.usuario;const r=t.filter(n=>n.usuarioId==this.usuarioActivo.uid);if(console.log(r),0==r.length){const n=this._authService.crearPerfilUsuario(this.rol,this.estado,this.usuarioActivo.usuario,this.usuarioActivo.uid,this.formPerfil.value.nombre,this.formPerfil.value.apellidos,this.formPerfil.value.identidad,this.formPerfil.value.nacio,this.formPerfil.value.direccion,this.imagenSubir).subscribe(u=>{console.log("Perfil Creado pues no existia"),n.unsubscribe(),this._router.navigateByUrl("/fallecidos/listado")})}else{this.idPerfil=r[0].id;const n=this._authService.actualizarPerfilUsuario(r[0].id,this.formPerfil.value.nombre,this.formPerfil.value.apellidos,this.formPerfil.value.identidad,this.formPerfil.value.nacio,this.formPerfil.value.direccion,this.imagenSubir).subscribe(u=>{console.log(u),n.unsubscribe(),this._router.navigateByUrl("/fallecidos/listado")})}e.unsubscribe()});setTimeout(()=>{this._authService.obtenerPerfilUsuarioEditar().subscribe(r=>{this.usuarioActivo=this._usuarioActivo.usuario;const n=r.filter(u=>u.usuarioId==this.usuarioActivo.uid);console.log(n),setTimeout(()=>{this._authService.editarUrlAvatarUsuario(n[0].usuarioId,n[0].avatar).subscribe(u=>console.log("Avatar actualizado en usuario"))},3e3)})},1e4)}else this._notify.showSuccess("todos los campos deben completarse y los t\xe9rminos y condiciones aceptadas","CAMPOS INCOMPLETOS")}validarNif(e){console.log(e);const t=e.value;var r,n;return 1==/^[XYZ]?\d{5,8}[A-Z]$/.test(t)?(r=(r=(r=(r=t.substr(0,t.length-1)).replace("X",0)).replace("Y",1)).replace("Z",2),n=t.substr(t.length-1,1),"TRWAGMYFPDXBNJZSQVHLCKET".substring(r%=23,r+1)!=n.toUpperCase()?{hayError:!0}:null):{hayError:!0}}imagenSeleccionada(e){const r=e.target.files[0].name;if(e.target.files){const n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onload=u=>{this.imagenMostrar=u.target.result}}this.imagenSubir=e.target.files[0],console.log(r),console.log(this.imagenSubir)}}return a.\u0275fac=function(e){return new(e||a)(o.Y36(i.QS),o.Y36(c.gz),o.Y36(m.e),o.Y36(m.e),o.Y36(y.g),o.Y36(c.F0))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-perfil"]],decls:59,vars:4,consts:[[3,"formGroup"],["fxLayout","column",1,"mb-3"],[3,"src"],[1,"mb-3"],["for","fotoPerfil",1,"form-label"],["type","file","formControlName","fotoPerfil","id","fotoPerfil",1,"form-control",3,"change"],["for","nombre",1,"form-label"],["type","text","id","nombre","name","nombre","formControlName","nombre",1,"form-control"],["id","textoAviso",1,"form-text"],["for","apellidos",1,"form-label"],["type","text","formControlName","apellidos","id","apellidos",1,"form-control"],[1,"form-label"],[1,"form-check"],["type","radio","name","generoRadio","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","name","generoRadio","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],["type","radio","name","generoRadio","id","radioOtros",1,"form-check-input"],["for","radioOtros",1,"form-check-label"],["for","dni",1,"form-label"],["type","text","name","identidad","formControlName","identidad","id","identidad",1,"form-control"],["for","nacio",1,"form-label"],["type","date","formControlName","nacio","id","nacio",1,"form-control"],["for","direccion",1,"form-label"],["type","text","formControlName","direccion","id","direccion",1,"form-control"],[1,"mb-3","form-check"],["type","checkbox","formControlName","condiciones","id","exampleCheck1",1,"form-check-input"],["consent",""],["for","exampleCheck1",1,"form-check-label"],["type","submit",1,"btn","btn-primary","float-end",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"form",0)(1,"div",1),o._UZ(2,"img",2),o.TgZ(3,"div")(4,"small"),o._uU(5),o.qZA()(),o.TgZ(6,"div")(7,"small"),o._uU(8),o.qZA()()(),o.TgZ(9,"div",3)(10,"label",4),o._uU(11,"Foto de Perfil"),o.qZA(),o.TgZ(12,"input",5),o.NdJ("change",function(n){return t.imagenSeleccionada(n)}),o.qZA()(),o.TgZ(13,"div",3)(14,"label",6),o._uU(15,"Nombre"),o.qZA(),o._UZ(16,"input",7),o.TgZ(17,"div",8),o._uU(18,"Solamente nombre sin apellidos."),o.qZA()(),o.TgZ(19,"div",3)(20,"label",9),o._uU(21,"Apellidos"),o.qZA(),o._UZ(22,"input",10),o.qZA(),o.TgZ(23,"div",3),o._UZ(24,"hr"),o.TgZ(25,"label",11),o._uU(26,"G\xe9nero"),o.qZA(),o.TgZ(27,"div",12),o._UZ(28,"input",13),o.TgZ(29,"label",14),o._uU(30," Masculino "),o.qZA()(),o.TgZ(31,"div",12),o._UZ(32,"input",15),o.TgZ(33,"label",16),o._uU(34," Femenino "),o.qZA()(),o.TgZ(35,"div",12),o._UZ(36,"input",17),o.TgZ(37,"label",18),o._uU(38," Otro "),o.qZA()()(),o._UZ(39,"hr"),o.TgZ(40,"div",3)(41,"label",19),o._uU(42,"Documento de Identidad"),o.qZA(),o._UZ(43,"input",20),o.qZA(),o.TgZ(44,"div",3)(45,"label",21),o._uU(46,"Fecha de Nacimiento"),o.qZA(),o._UZ(47,"input",22),o.qZA(),o.TgZ(48,"div",3)(49,"label",23),o._uU(50,"Direcci\xf3n"),o.qZA(),o._UZ(51,"input",24),o.qZA(),o.TgZ(52,"div",25),o._UZ(53,"input",26,27),o.TgZ(55,"label",28),o._uU(56,"Doy mi consentimientod"),o.qZA()(),o.TgZ(57,"button",29),o.NdJ("click",function(){return t.guardar()}),o._uU(58,"Enviar datos"),o.qZA()()),2&e&&(o.Q6J("formGroup",t.formPerfil),o.xp6(2),o.s9C("src",t.imagenMostrar,o.LSH),o.xp6(3),o.hij("Usuario: ",t.usuario.usuario,""),o.xp6(3),o.hij("Email: ",t.usuario.email,""))},dependencies:[i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u],styles:["img[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;min-width:50px;max-width:100%;max-height:150px;border-radius:30px}"]}),a})();var g=s(8390),P=s(7579),q=s(8372);class S{static match(l,e,t="no coincide"){return r=>r.get(l)?.value===r.get(e)?.value?null:{[t]:!0}}}function w(a,l){1&a&&(o.TgZ(0,"div",8),o._uU(1,"La contrase\xf1a no coincide"),o.qZA())}const F=[{path:"",component:_.C,children:[{path:"login",component:A},{path:"registro",component:U},{path:"perfil/:id",component:T,canActivate:[g.z],canLoad:[g.z]},{path:"contrasenya",component:(()=>{class a{constructor(e,t,r,n){this.fb=e,this.route=t,this._authService=r,this._usuario=n,this.usuarioActivo={},this.diferentes=!1,this.onDebounce=new o.vpe,this.debouncer=new P.x,this.formContra=this.fb.group({password1:[null,[i.kI.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),i.kI.minLength(8)]],password2:[null,[]]},{validator:S.match("password1","password2","password-mismatch")})}ngOnInit(){this.debouncer.pipe((0,q.b)(500)).subscribe(e=>{this.onDebounce.emit(e),console.log("debouncer:",e)})}guardar(){}coincidencia(e){this.diferentes=!0;let t=e.target.value;this.debouncer.next(t),t==this.formContra.value.password1&&(this.diferentes=!1,console.log("correcto"))}volver(){this.route.navigateByUrl("/fallecidos/listado")}cambiarContrasenya(){this.usuarioActivo=this._usuario.usuario,console.log(this.usuarioActivo),this._authService.editarPassword(this.usuarioActivo.uid,this.usuarioActivo.usuario,this.usuarioActivo.email,this.formContra.value.password1).subscribe()}}return a.\u0275fac=function(e){return new(e||a)(o.Y36(i.QS),o.Y36(c.F0),o.Y36(m.e),o.Y36(m.e))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-contrasenya"]],decls:17,vars:2,consts:[[3,"formGroup"],[1,"mb-3","form-check"],["for","password",1,"form-label"],["type","password","formControlName","password1","name","password1","id","password1",1,"form-control"],["for","password1",1,"form-label"],["type","password","formControlName","password2","name","password2","id","password2",1,"form-control",3,"input"],["id","textoAviso","type","form-texto","style","color: red;",4,"ngIf"],["type","submit",1,"btn","btn-primary","float-end",3,"click"],["id","textoAviso","type","form-texto",2,"color","red"]],template:function(e,t){1&e&&(o.TgZ(0,"form",0)(1,"h3"),o._uU(2,"Cambio de Contrase\xf1a"),o.qZA(),o.TgZ(3,"div")(4,"div",1)(5,"label",2),o._uU(6,"Password Nuevo"),o.qZA(),o._UZ(7,"input",3),o.qZA(),o.TgZ(8,"div",1)(9,"label",4),o._uU(10,"Confirmar Password"),o.qZA(),o.TgZ(11,"input",5),o.NdJ("input",function(n){return t.coincidencia(n)}),o.qZA(),o.YNc(12,w,2,0,"div",6),o.qZA()(),o.TgZ(13,"button",7),o.NdJ("click",function(){return t.volver()}),o._uU(14,"Cancelar"),o.qZA(),o.TgZ(15,"button",7),o.NdJ("click",function(){return t.cambiarContrasenya()}),o._uU(16,"Cambiar Contrase\xf1a"),o.qZA()()),2&e&&(o.Q6J("formGroup",t.formContra),o.xp6(12),o.Q6J("ngIf",t.diferentes))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,p.O5,i.sg,i.u],encapsulation:2}),a})(),canActivate:[g.z],canLoad:[g.z]},{path:"**",redirectTo:"login"}]}];let N=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[c.Bz.forChild(F),c.Bz]}),a})();var k=s(3161);let J=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[i.u5,p.ez,N,i.UX,k.q]}),a})()},7915:(Z,f,s)=>{s.d(f,{g:()=>i});var p=s(4650),c=s(7185);let i=(()=>{class d{constructor(o){this.toastr=o}showSuccess(o,m){console.log("aqui estamos dando like o comprobando validezx de formulario"),this.toastr.warning(o,m,{positionClass:"toast-bottom-center"})}}return d.\u0275fac=function(o){return new(o||d)(p.LFG(c._W))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);