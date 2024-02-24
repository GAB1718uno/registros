"use strict";(self.webpackChunkregistrosApp=self.webpackChunkregistrosApp||[]).push([[31],{8031:(Ne,Z,l)=>{l.r(Z),l.d(Z,{FallecidosModule:()=>Je});var d=l(6895),p=l(9299),e=l(4650),s=l(4006),q=l(5226),w=l.n(q),C=l(7579),T=l(8372),m=l(4402),A=l(7009),f=l(1326);function P(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"li",32)(1,"a",33),e.NdJ("click",function(){const n=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.sugeridos(n.calle,n.numero))}),e._uU(2),e.qZA()()}if(2&i){const t=r.$implicit;e.xp6(2),e.hij(" ",t.calle+", "+t.numero," ")}}function J(i,r){if(1&i&&(e.TgZ(0,"ul",30),e.YNc(1,P,3,1,"li",31),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.sepulturasSugeridas)}}function k(i,r){1&i&&(e.TgZ(0,"div")(1,"div",34),e._uU(2," No se encontr\xf3 ning\xfan resultado para la b\xfasqueda "),e.qZA()())}let N=(()=>{class i{constructor(t,o,a,n,c){this._fallecidoService=t,this.route=o,this._snackBar=a,this.fb=n,this._sepulturaService=c,this.miFormulario=this.fb.group({name:["",[s.kI.required]],apellidos:["",[s.kI.required]],nacio:["",[s.kI.required]],fallecio:["",[s.kI.required]],mote:["",[s.kI.required]],url:["",[s.kI.required]],url2:["",[s.kI.required]],sepult:["",[s.kI.required]],sepulturaId:["",[s.kI.required]],sepultura:["",[s.kI.required]]}),this.consentimiento=!0,this.items=[],this.cribados=[],this.cribadas=[],this.sepulturasSugeridas=[],this.termino="",this.onDebounce=new e.vpe,this.debouncer=new C.x,this.sugerenciasVisibles1=!1,this.hayerror=!1}ngOnInit(){this._sepulturaService.obtenerSepulturas().subscribe(t=>{this.items=t}),this.debouncer.pipe((0,T.b)(1500)).subscribe(t=>{this.onDebounce.emit(t)})}teclaPresionada(t){this.sugerenciasVisibles1=!0,this.debouncer.next(this.termino),console.log(t),console.log(this.termino),this._fallecidoService.obtenerSepulturasCribadas(this.termino).subscribe(o=>this.sepulturasSugeridas=o.splice(0,8),o=>this.sepulturasSugeridas=[]),console.log(this.sepulturasSugeridas)}seleccionado(){this.hayerror=!1,this._fallecidoService.obtenerSepulturasCribadas(this.termino).subscribe(t=>{this.cribadas=t,(""==this.termino||this.cribadas.length<1)&&(this.hayerror=!0),console.log(this.termino),console.log(this.cribadas),this.sugerenciasVisibles1=!1,console.log(t)})}sugeridos(t,o){this.termino=t+", "+o,console.log(this.termino),this.sugerenciasVisibles1=!0,this.seleccionado()}imagenSeleccionada(t){if(t.target.files){var o=new FileReader;o.readAsDataURL(t.target.files[0]),o.onload=a=>{}}this.imagenSubir=t.target.files[0]}seleccionarSepultura(t){}guardar(){if(this.imagenSubir){const{name:t,apellidos:o,nacio:a,fallecio:n,mote:c}=this.miFormulario.value;console.log(this.miFormulario.value),this.miFormulario.value.sepult=this.termino,this.miFormulario.value.sepulturaId=this.cribadas[0].id,this.miFormulario.value.url=this.imagenSubir,this.miFormulario.value.url2=this.cribadas[0].avatar,this._fallecidoService.uploadFallecidoCloudinary(t,o,a,n,c,this.miFormulario.value.url,this.miFormulario.value.url2,this.miFormulario.value.sepulturaId,this.miFormulario.value.sepult,this.imagenSubir).subscribe(Ie=>{console.log("enviado a bd"),this.mostrarSnack("Fallecido generado con exito"),setTimeout(()=>{this.route.navigateByUrl("fallecidos/listado")},1500)})}else w().fire("Atenci\xf3n","Es obligatorio subir una imagen");console.log(this.miFormulario.value.url)}mostrarSnack(t){this._snackBar.open(t,"Espere... guardando...",{duration:3500})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.t),e.Y36(p.F0),e.Y36(A.ux),e.Y36(s.QS),e.Y36(f.M))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-agregar"]],decls:58,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","nombre",1,"form-label"],["type","text","id","nombre","aria-describedby","emailHelp","formControlName","name",1,"form-control"],["id","textoAviso",1,"form-text"],["for","apellidos",1,"form-label"],["type","text","formControlName","apellidos","id","apellidos",1,"form-control"],["for","mote",1,"form-label"],["type","text","formControlName","mote","id","mote",1,"form-control"],[1,"form-label"],[1,"form-check"],["type","radio","name","generoRadio","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","name","generoRadio","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],["type","radio","name","generoRadio","id","radioOtros",1,"form-check-input"],["for","radioOtros",1,"form-check-label"],["for","nacio",1,"form-label"],["type","date","formControlName","nacio","id","nacio",1,"form-control"],["for","fallecio",1,"form-label"],["type","date","formControlName","fallecio","id","fallecio",1,"form-control"],["for","foto",1,"form-label"],["type","file","formControlName","url","id","foto",1,"form-control",3,"change"],["type","text","name","termino","autocomplete","off","placeholder","",1,"form-control",3,"ngModel","keyup.enter","input","ngModelChange"],["class","list-group",4,"ngIf"],[4,"ngIf"],[1,"mb-3","form-check"],["type","checkbox","name","consentimiento","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action"],[3,"click"],[1,"alert","alert-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.guardar()}),e.TgZ(1,"div",1)(2,"label",2),e._uU(3,"Nombre"),e.qZA(),e._UZ(4,"input",3),e.TgZ(5,"div",4),e._uU(6,"Solamente nombre sin apellidos."),e.qZA()(),e.TgZ(7,"div",1)(8,"label",5),e._uU(9,"Apellidos"),e.qZA(),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"div",1)(12,"label",7),e._uU(13,"Mote"),e.qZA(),e._UZ(14,"input",8),e.qZA(),e.TgZ(15,"div",1),e._UZ(16,"hr"),e.TgZ(17,"label",9),e._uU(18,"G\xe9nero"),e.qZA(),e.TgZ(19,"div",10),e._UZ(20,"input",11),e.TgZ(21,"label",12),e._uU(22," Masculino "),e.qZA()(),e.TgZ(23,"div",10),e._UZ(24,"input",13),e.TgZ(25,"label",14),e._uU(26," Femenino "),e.qZA()(),e.TgZ(27,"div",10),e._UZ(28,"input",15),e.TgZ(29,"label",16),e._uU(30," Otro "),e.qZA()(),e._UZ(31,"hr"),e.TgZ(32,"div",1)(33,"label",17),e._uU(34,"Fecha de Nacimiento"),e.qZA(),e._UZ(35,"input",18),e.qZA()(),e.TgZ(36,"div",1)(37,"label",19),e._uU(38,"Fecha de defunci\xf3n"),e.qZA(),e._UZ(39,"input",20),e.qZA(),e.TgZ(40,"div",1)(41,"label",21),e._uU(42,"Fotografia"),e.qZA(),e.TgZ(43,"input",22),e.NdJ("change",function(n){return o.imagenSeleccionada(n)}),e.qZA()(),e.TgZ(44,"div")(45,"label"),e._uU(46,"Lugar de enterramiento"),e.qZA(),e.TgZ(47,"form")(48,"input",23),e.NdJ("keyup.enter",function(){return o.seleccionado()})("input",function(n){return o.teclaPresionada(n)})("ngModelChange",function(n){return o.termino=n}),e.qZA()(),e._UZ(49,"hr"),e.YNc(50,J,2,1,"ul",24),e.YNc(51,k,3,0,"div",25),e.qZA(),e.TgZ(52,"div",26),e._UZ(53,"input",27),e.TgZ(54,"label",28),e._uU(55,"Doy mi consentimientod"),e.qZA()(),e.TgZ(56,"button",29),e._uU(57," Enviar datos "),e.qZA()()),2&t&&(e.Q6J("formGroup",o.miFormulario),e.xp6(48),e.Q6J("ngModel",o.termino),e.xp6(2),e.Q6J("ngIf",o.sugerenciasVisibles1),e.xp6(1),e.Q6J("ngIf",o.hayerror),e.xp6(5),e.Q6J("disabled",!1===o.consentimiento))},dependencies:[d.sg,d.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,s.sg,s.u],styles:[".item[_ngcontent-%COMP%]{border-radius:.2em;color:#fff;font-family:sans-serif;font-size:2em;padding:4em 1em;text-transform:uppercase}table[_ngcontent-%COMP%]{color:#000;text-align:center;vertical-align:middle}li[_ngcontent-%COMP%]{cursor:pointer}.navegar[_ngcontent-%COMP%]{cursor:pointer;align-items:left;text-align:left}"]}),i})();var L=l(4004),I=l(4968),F=l(9931),Q=l(6706),y=l(4496);let D=(()=>{class i{transform(t,o){return t.sort((a,n)=>n[o]<a[o]?-1:n[o]>a[o]?1:0)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"sortReciente",type:i,pure:!0}),i})();const E=["scrollFrame"];function Y(i,r){1&i&&(e.TgZ(0,"div"),e._UZ(1,"app-futuros"),e.qZA())}function R(i,r){1&i&&e._UZ(0,"spinnering")}function B(i,r){if(1&i&&(e.TgZ(0,"div",7),e.YNc(1,R,1,0,"spinnering",1),e._UZ(2,"app-fallecidos-tarjeta",8),e.qZA()),2&i){const t=r.$implicit,o=r.$implicit,a=e.oxw();e.xp6(1),e.Q6J("ngIf",a.isLoading),e.xp6(1),e.Q6J("item",t)("sepulturaIndividual",o)("editarDeshabilitado",a.editarDeshabilitadoEnListado)("localizaDeshabilitado",a.localDeshabilitado)}}let z=(()=>{class i{constructor(t,o,a,n){this._fallecidoService=t,this._compartidoService=o,this._sepulturaService=a,this._router=n,this.image="",this.contadorAqui=1,this.muertos=[],this.ordenados=[],this.hayFuturos=!0,this.localDeshabilitado=!1,this.editarDeshabilitadoEnListado=!0,this.sepultura=[],this.currentPage=1,this.isLoading=!1,this.numeroDeRegistros=0,this.contadorDeRegistros=0,this.onScroll=c=>{const x=window.innerWidth,_=c.target.scrollHeight-c.target.scrollTop;console.log("El valor de DIFF es: "+_),x<=768&&_<=987&&!this.isLoading&&this.contadorDeRegistros<this.numeroDeRegistros&&this.loadMoreMuertos(),x>=768&&_<=1080&&!this.isLoading&&this.contadorDeRegistros<this.numeroDeRegistros&&this.loadMoreMuertos()},this._compartidoService.myNewSubject.subscribe(c=>{this.hayFuturos=c}),console.log(this.hayFuturos),a.obtenerSepulturas().subscribe(c=>{this.sepultura=c})}ngOnInit(){this._fallecidoService.obtenerTodosMuertos(7,this.currentPage).pipe((0,L.U)(t=>{const o=t.count,a=t.rows;console.log("Count:",o),console.log("Rows:",a),this.muertos=a,this.numeroDeRegistros=o,this.contadorDeRegistros=this.muertos.length})).subscribe(t=>{console.log(t),console.log(this.numeroDeRegistros),console.log(this.contadorDeRegistros)}),window.addEventListener("scroll",this.onScroll,!0)}ngAfterViewInit(){this.scrollFrame.nativeElement.addEventListener("scroll",this.onScroll.bind(this))}loadMoreMuertos(){this.isLoading=!0,this.currentPage++,console.log(this.contadorDeRegistros),this._fallecidoService.obtenerTodosMuertos(7,this.currentPage).subscribe(t=>{console.log("Estos son los nuevos registros: "+t),this.muertos=this.muertos.concat(t.rows),this.isLoading=!1,this.contadorDeRegistros=this.contadorDeRegistros+7,console.log(this.contadorDeRegistros)})}ngOnDestroy(){console.log("EL COMP\xd2NENTE ES ELIMINADO POR NO USO"),window.removeEventListener("scroll",this.onScroll,!0)}verArray(){console.log(this.muertos)}scrollToTop(t){const o=document.getElementById(t);o&&o.scrollIntoView({behavior:"smooth"})}redirectToHome(){this._router.navigateByUrl("/")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.t),e.Y36(I.D),e.Y36(f.M),e.Y36(p.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-listado"]],viewQuery:function(t,o){if(1&t&&e.Gf(E,5),2&t){let a;e.iGM(a=e.CRH())&&(o.scrollFrame=a.first)}},decls:19,vars:6,consts:[["id","top"],[4,"ngIf"],[1,"row"],["class","col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4",4,"ngFor","ngForOf"],[1,"btn-floating",3,"click"],[1,"material-icons"],[1,"btn-floating2",3,"click"],[1,"col-xl-2","col-lg-2","col-md-3","col-sm-4","col-4"],[3,"item","sepulturaIndividual","editarDeshabilitado","localizaDeshabilitado"]],template:function(t,o){1&t&&(e._UZ(0,"hr"),e.TgZ(1,"h3",0),e._uU(2,"Pr\xf3ximos Entierros"),e.qZA(),e._UZ(3,"hr"),e.YNc(4,Y,2,0,"div",1),e._UZ(5,"br")(6,"hr"),e.TgZ(7,"h3"),e._uU(8,"Enterramientos Anteriores"),e.qZA(),e._UZ(9,"hr"),e.TgZ(10,"div",2),e.YNc(11,B,3,5,"div",3),e.ALo(12,"sortReciente"),e.qZA(),e.TgZ(13,"button",4),e.NdJ("click",function(){return o.scrollToTop("top")}),e.TgZ(14,"i",5),e._uU(15,"arrow_upward"),e.qZA()(),e.TgZ(16,"button",6),e.NdJ("click",function(){return o.redirectToHome()}),e.TgZ(17,"i",5),e._uU(18,"home"),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngIf",o.hayFuturos),e.xp6(7),e.Q6J("ngForOf",e.xi3(12,3,o.muertos,"fallecio"))("ngForOf",o.sepultura))},dependencies:[d.sg,d.O5,F.n,Q.t,y.SpinnerComponent,D],styles:[".w-100[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{display:flex;position:relative;justify-content:center}.cards[_ngcontent-%COMP%]{width:8000px;overflow:hidden}.overflow[_ngcontent-%COMP%]{position:relative;transition:left .5s ease-in-out}.card[_ngcontent-%COMP%]{width:800px;height:50px;background-color:#e0e1e2;border-radius:5px;display:inline-block;margin-right:10px;position:relative}.no-right-margin[_ngcontent-%COMP%]{margin-right:0}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:400px;font-size:15px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{height:30px;width:30px;background-color:#0072bc;position:absolute;top:50%;transform:translateY(-50%)}.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%]{background-color:#ccc}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{right:0}.btn-floating[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:40px;height:40px;border-radius:50%;background-color:#007bff;color:#fff;font-size:24px;cursor:pointer;box-shadow:0 2px 5px #0000004d}.btn-floating2[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:70px;width:40px;height:40px;border-radius:50%;background-color:#007bff;color:#fff;font-size:24px;cursor:pointer;box-shadow:0 2px 5px #0000004d}.btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;margin-top:0}.btn-floating[_ngcontent-%COMP%]:hover{background-color:#0062cc}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-right:calc(var(--bs-gutter-x) * .1);padding-left:calc(var(--bs-gutter-x) * .1)}.margin_my[_ngcontent-%COMP%]{flex:0 0 auto;width:31.333333%;margin-left:.2rem;margin-right:.1rem}"]}),i})();var u=l(1576),j=l(5829),b=l(2340);function H(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"li",10)(1,"a",11),e.NdJ("click",function(){const n=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.sugeridos(n.apellidos))}),e._uU(2),e.qZA()()}if(2&i){const t=r.$implicit;e.xp6(2),e.hij(" ",t.apellidos," ")}}function V(i,r){if(1&i&&(e.TgZ(0,"ul",8),e.YNc(1,H,3,1,"li",9),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.apellidosSugeridos)}}function G(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"li",13)(1,"a",11),e.NdJ("click",function(){const n=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.sugeridos(n.sepult))}),e._uU(2),e.qZA()()}if(2&i){const t=r.$implicit;e.xp6(2),e.hij(" ",t.sepult," ")}}function $(i,r){if(1&i&&(e.TgZ(0,"ul",8),e.YNc(1,G,3,1,"li",12),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.sepulturasSugeridas)}}function K(i,r){1&i&&(e.TgZ(0,"div")(1,"div",14),e._uU(2," No se encontr\xf3 ning\xfan resultado para la b\xfasqueda\n"),e.qZA()())}function X(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"a",18),e.NdJ("click",function(){const n=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.navegar(n.id))}),e._UZ(5,"img",19),e.qZA()(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td",20)(13,"a",18),e.NdJ("click",function(){const n=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.navegar(n.id))}),e._uU(14," Ver m\xe1s... "),e.qZA()()()}if(2&i){const t=r.$implicit,o=r.index;e.xp6(2),e.Oqu(o),e.xp6(3),e.s9C("src",t.url,e.LSH),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.apellidos),e.xp6(2),e.Oqu(t.sepult)}}function W(i,r){if(1&i&&(e.TgZ(0,"div",15)(1,"div"),e._UZ(2,"br"),e.TgZ(3,"table",16)(4,"thead")(5,"tr")(6,"th"),e._uU(7," # "),e.qZA(),e.TgZ(8,"th"),e._uU(9," Foto "),e.qZA(),e.TgZ(10,"th"),e._uU(11," Nombre "),e.qZA(),e.TgZ(12,"th"),e._uU(13," Apellidos "),e.qZA(),e.TgZ(14,"th"),e._uU(15," Sepultura "),e.qZA(),e._UZ(16,"th"),e.qZA()(),e.TgZ(17,"tbody"),e.YNc(18,X,15,5,"tr",17),e.qZA()()()()),2&i){const t=e.oxw();e.xp6(18),e.Q6J("ngForOf",t.cribados)}}function ee(i,r){if(1&i&&(e.TgZ(0,"div",23),e._UZ(1,"app-fallecidos-tarjeta",24),e.qZA()),2&i){const t=r.$implicit;e.xp6(1),e.Q6J("item",t)}}function te(i,r){if(1&i&&(e.TgZ(0,"div",21),e.YNc(1,ee,2,1,"div",22),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.cribados)}}let oe=(()=>{class i{constructor(t,o){this._fallecidoService=t,this.route=o,this.cribados=[],this.cribadosSepult=[],this.termino="",this.hayerror=!1,this.apellidoPreview=this.seleccionadoA,this.sepulturaPreview=this.seleccionadoS,this.activo=1,this.baseUrl=b.N.baseUrl,this.onDebounce=new e.vpe,this.debouncer=new C.x,this.apellidosSugeridos=[],this.sepulturasSugeridas=[],this.sugerenciasVisibles=!0,this.sugerenciasVisibles1=!0}ngOnInit(){this.debouncer.pipe((0,T.b)(1500)).subscribe(t=>{this.onDebounce.emit(t),console.log("debouncer:",t)})}navegar(t){console.log(t),console.log(this.cribados),this.route.navigateByUrl(`fallecidos/${t}`)}sugeridos(t){console.log(t),this.termino=t,this.seleccionadoA?this.sugerenciasVisibles=!1:this.seleccionadoS&&(this.sugerenciasVisibles1=!1),this.cambiaBusqueda()}teclaPresionada(t){this.sugerenciasVisibles=!0,this.sugerenciasVisibles1=!0,this.debouncer.next(this.termino),console.log(t),console.log(this.termino),this.seleccionadoA?this._fallecidoService.obtenerMuertoCribados(this.termino,"apellido").subscribe(o=>this.apellidosSugeridos=o.splice(0,8),o=>this.apellidosSugeridos=[]):this.seleccionadoS&&this._fallecidoService.obtenerMuertoCribados(this.termino,"sepultura").subscribe(o=>this.sepulturasSugeridas=o.splice(0,8),o=>this.sepulturasSugeridas=[])}cambiaBusqueda(){switch(this.activo=this.seleccionadoA?1:2,this.activo){case 1:this.apellidoPreview=!0,this.sepulturaPreview=!1,this.hayerror=!1,this._fallecidoService.obtenerMuertoCribados(this.termino,"apellido").subscribe(t=>{this.cribados=t,(""==this.termino||this.cribados.length<1)&&(this.hayerror=!0),this.termino="",this.sugerenciasVisibles=!1,this.activo=0,console.log(t)});break;case 2:this.apellidoPreview=!1,this.sepulturaPreview=!0,this.hayerror=!1,this._fallecidoService.obtenerMuertoCribados(this.termino,"sepultura").subscribe(t=>{this.cribados=t,(""==this.termino||this.cribados.length<1)&&(this.hayerror=!0),this.termino="",this.sugerenciasVisibles1=!1,this.activo=0,console.log(t)})}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.t),e.Y36(p.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-porapellido"]],inputs:{seleccionadoA:"seleccionadoA",seleccionadoS:"seleccionadoS"},decls:14,vars:6,consts:[[1,"row","wrap"],["fxFlex","100"],["type","text","name","termino","autocomplete","off","placeholder","",1,"form-control",3,"ngModel","keyup.enter","input","ngModelChange"],[1,"btn","btn-primary","float-end",3,"click"],["class","list-group",4,"ngIf"],[4,"ngIf"],["fxLayout","column wrap",4,"ngIf"],["fxLayout","row wrap","fxLayoutGap","5px","fxLayoutAlign","space-between space-between",4,"ngIf"],[1,"list-group"],["class","navegar list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"navegar","list-group-item","list-group-item-action"],[3,"click"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action"],[1,"alert","alert-danger"],["fxLayout","column wrap"],[1,"table","table","table-success","table-striped"],[4,"ngFor","ngForOf"],[1,"navegar",3,"click"],[2,"width","50px",3,"src"],[1,"navegar"],["fxLayout","row wrap","fxLayoutGap","5px","fxLayoutAlign","space-between space-between"],["fxFlex.xs","47","fxFlex.sm","47","fxFlex.lg","30","fxFlex.md","47",4,"ngFor","ngForOf"],["fxFlex.xs","47","fxFlex.sm","47","fxFlex.lg","30","fxFlex.md","47"],[3,"item"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Resultados"),e.qZA(),e.TgZ(4,"form")(5,"input",2),e.NdJ("keyup.enter",function(){return o.cambiaBusqueda()})("input",function(n){return o.teclaPresionada(n)})("ngModelChange",function(n){return o.termino=n}),e.qZA()(),e.TgZ(6,"button",3),e.NdJ("click",function(){return o.cambiaBusqueda()}),e._uU(7,"Buscar"),e.qZA(),e._UZ(8,"hr"),e.qZA(),e.YNc(9,V,2,1,"ul",4),e.YNc(10,$,2,1,"ul",4),e.YNc(11,K,3,0,"div",5),e.YNc(12,W,19,1,"div",6),e.YNc(13,te,2,1,"div",7),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngModel",o.termino),e.xp6(4),e.Q6J("ngIf",o.sugerenciasVisibles),e.xp6(1),e.Q6J("ngIf",o.sugerenciasVisibles1),e.xp6(1),e.Q6J("ngIf",o.hayerror),e.xp6(1),e.Q6J("ngIf",o.apellidoPreview),e.xp6(1),e.Q6J("ngIf",o.sepulturaPreview))},dependencies:[d.sg,d.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,u.xw,u.SQ,u.Wh,u.yH,F.n],styles:["table[_ngcontent-%COMP%]{color:#000;text-align:center;vertical-align:middle}li[_ngcontent-%COMP%]{cursor:pointer}.navegar[_ngcontent-%COMP%]{cursor:pointer;align:left;text-align:left}"]}),i})();function ie(i,r){if(1&i&&(e.TgZ(0,"div",5),e._UZ(1,"app-porapellido",6),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("seleccionadoA",t.seleccionadoApe)}}function ne(i,r){if(1&i&&(e.TgZ(0,"div",5),e._UZ(1,"app-porapellido",7),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("seleccionadoS",t.seleccionadoSep)}}const M=function(i){return{active:i}};let ae=(()=>{class i{constructor(){this.seleccionadoApe=!1,this.seleccionadoSep=!1,this.option=2}activarOpcion(t){0==t&&(this.seleccionadoApe=!0,this.seleccionadoSep=!1),1==t&&(this.seleccionadoSep=!0,this.seleccionadoApe=!1),this.option=t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-buscar"]],decls:11,vars:8,consts:[["fxLayoutGap","30px",1,"row","wrap","container"],[1,"col-xs-12","col-md-4"],[1,"list-group"],[1,"list-group-item",3,"ngClass","click"],["class","col-xs-12 col-md-8","fxLayout","row wrap",4,"ngIf"],["fxLayout","row wrap",1,"col-xs-12","col-md-8"],[3,"seleccionadoA"],[3,"seleccionadoS"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Busquedas"),e.qZA(),e.TgZ(4,"ul",2)(5,"li",3),e.NdJ("click",function(){return o.activarOpcion(0)}),e._uU(6," Por Apellido "),e.qZA(),e.TgZ(7,"li",3),e.NdJ("click",function(){return o.activarOpcion(1)}),e._uU(8," Por Sepultura "),e.qZA()()(),e.YNc(9,ie,2,1,"div",4),e.YNc(10,ne,2,1,"div",4),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngClass",e.VKq(4,M,o.seleccionadoApe)),e.xp6(2),e.Q6J("ngClass",e.VKq(6,M,o.seleccionadoSep)),e.xp6(2),e.Q6J("ngIf",0==o.option),e.xp6(1),e.Q6J("ngIf",1==o.option))},dependencies:[d.mk,d.O5,u.xw,u.SQ,j.oO,oe],styles:[".row.wrap.container[_ngcontent-%COMP%]{margin:1px;padding:1px}.col-xs-12.col-md-4[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{padding:1px}.container[_ngcontent-%COMP%]{padding:1px;margin:1px}"]}),i})();var v=l(3900),re=l(5110),U=l(6338),le=l(4850),se=l(297);let ce=(()=>{class i{constructor(t,o){this.activatedRoute=t,this.fallecidosService=o,this.fallecido={id:"",name:"",apellidos:"",nacio:new Date,fallecio:"",mote:"",url:"",url2:"",sepult:"",sepulturaId:"",likes:0}}ngOnInit(){this.activatedRoute.params.pipe((0,v.w)(({id:t})=>this.fallecidosService.obtenerMuertoPorId(t))).subscribe(t=>{this.fallecido=t})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.gz),e.Y36(m.t))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-detalle-fallecido"]],decls:23,vars:4,consts:[["fxLayout","row"],["width","100%",1,"rounded","mx-auto","d-block","img-thumbnail",3,"src"],["fxFlex","84",1,""],[1,"p-b-10","m-1"],[1,"p-b-10","p-t-10","m-1"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"div",2)(4,"h1",3),e._uU(5),e.qZA(),e.TgZ(6,"h2",3),e._uU(7),e.qZA(),e.TgZ(8,"mat-list"),e._UZ(9,"mat-divider")(10,"br"),e.TgZ(11,"label",3),e._uU(12," Conocido por: "),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"mat-list-item",3),e._uU(15),e.qZA()(),e._UZ(16,"mat-divider")(17,"br"),e.qZA()(),e.TgZ(18,"div")(19,"p",4),e._uU(20,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),e.qZA()(),e._UZ(21,"br")(22,"app-comentario")),2&t&&(e.xp6(2),e.s9C("src",o.fallecido.url,e.LSH),e.xp6(3),e.hij("\n",o.fallecido.name,"\n"),e.xp6(2),e.hij(" ",o.fallecido.apellidos,""),e.xp6(8),e.hij(" ",o.fallecido.mote,""))},dependencies:[U.i$,U.Tg,le.d,u.xw,u.yH,se.U],styles:[".border[_ngcontent-%COMP%]{border-color:#deb887;border-width:5rem;border-radius:5rem}"]}),i})();var ue=l(2157);function de(i,r){if(1&i&&(e.TgZ(0,"div"),e._UZ(1,"app-historia-tarjeta",9),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("fallecidoId",t.fallecidoIdActual)}}let pe=(()=>{class i{constructor(t,o,a){this.activatedRoute=t,this.fallecidosService=o,this._sepulturaService=a,this.fallecido={id:"",name:"",apellidos:"",nacio:new Date,fallecio:"",mote:"",url:"",url2:"",sepult:"",sepulturaId:"",likes:0},this.carousel_activo=!0,this.fallecidoIdActual="",this.editar_deshabilitado=!0,this.baseUrl=b.N.baseUrl}ngOnInit(){this.fallecidoIdActual=this.activatedRoute.snapshot.url.pop()?.path,this.activatedRoute.params.pipe((0,v.w)(({id:t})=>this.fallecidosService.obtenerMuertoPorId(t))).subscribe(t=>{this.fallecido=t,console.log(t),this._sepulturaService.obtenerSepultura(this.fallecido.sepulturaId).subscribe(o=>{})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.gz),e.Y36(m.t),e.Y36(f.M))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-fallecidos"]],inputs:{fallecido:"fallecido"},decls:19,vars:6,consts:[["fxFlex","100","fxLayout","column",1,"container"],["fxFlex","100","fxLayout","row","fxLayoutAlign","end","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","0px",1,"flex-container"],["fxFlex","100","fxFlex.lg","40","fxFlex.md","50",1,"child-1"],["fxFlex","46","fxLayoutWrap","","fxLayoutGap","20px",1,"child-2"],[3,"alt","src"],["fxFlex","54",1,"child-3"],[3,"boton_editar"],[1,"box-embossed",2,"display","block","max-width","430px"],[4,"ngIf"],[2,"display","block","max-width","500px",3,"fallecidoId"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Homenagen"),e.qZA(),e.TgZ(3,"div",1)(4,"div",2),e._UZ(5,"app-detalle-fallecido"),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"img",4),e.TgZ(8,"div"),e._uU(9),e.qZA()(),e.TgZ(10,"div",5),e._UZ(11,"app-relacionados",6),e.qZA()(),e._UZ(12,"br")(13,"hr"),e.TgZ(14,"h2"),e._uU(15),e.qZA(),e._UZ(16,"hr"),e.TgZ(17,"div",7),e.YNc(18,de,2,1,"div",8),e.qZA()()),2&t&&(e.xp6(7),e.s9C("alt",o.fallecido.name),e.s9C("src",o.fallecido.url2,e.LSH),e.xp6(2),e.hij(" ",o.fallecido.sepult," "),e.xp6(2),e.Q6J("boton_editar",o.editar_deshabilitado),e.xp6(4),e.hij("Vivencias de ",o.fallecido.name,""),e.xp6(3),e.Q6J("ngIf",o.carousel_activo))},dependencies:[d.O5,u.xw,u.SQ,u.Wh,u.yH,re.J,ce,ue.u],styles:["@media all and (min-width: 600px){.aside[_ngcontent-%COMP%]{flex:1 0 0}}.child-1[_ngcontent-%COMP%]{background-color:#c8e6f5;padding:10px;border-top-left-radius:10px;border-bottom-left-radius:50px;color:#000}.child-2[_ngcontent-%COMP%]{width:auto;color:#0a0a0a;margin:0;padding:20px;background-color:#fff}.child-3[_ngcontent-%COMP%]{background-color:#343434;border-top-right-radius:50px}.container[_ngcontent-%COMP%]{padding:10px;background-color:#5ca0d3;width:100%}img[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;min-width:50px;max-width:100%;max-height:500px;border-radius:30px}.box-embossed[_ngcontent-%COMP%]{border:0px solid #ffffff;box-shadow:inset 0 0 10px #5da0d3;background-color:#99ccf3;padding:20px;border-radius:10px;transform:translateY(1px)}"]}),i})();var me=l(4998),ge=l(2047),S=l(9549),fe=l(3238),he=l(4859),_e=l(7392),be=l(4144),ve=l(4385),xe=l(6277);function Ze(i,r){if(1&i&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.Q6J("value",t),e.xp6(1),e.AsE("",t.calle,", ",t.numero," ")}}function Ce(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.muerto.sepult," ")}}function Te(i,r){if(1&i&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.Q6J("value",t),e.xp6(1),e.AsE("",t.calle,", ",t.numero," ")}}function Ae(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.eliminar())}),e.TgZ(1,"mat-icon"),e._uU(2,"remove"),e.qZA(),e._uU(3," Borrar "),e.qZA()}}let Fe=(()=>{class i{constructor(t,o,a,n,c,h){this._fallecidosService=t,this._comentariosService=o,this._activatedRoute=a,this._snackBar=n,this._sepulturaService=c,this._route=h,this.muerto={name:"",apellidos:"",nacio:new Date,fallecio:"",mote:"",url:"",url2:"",sepult:"",sepulturaId:""},this.items=[],this.sepultura={id:"",calle:"",numero:"",avatar:"",tipo:""},this.fallecidoIdActual=this.muerto.id,this.imagenBD=!0,this.baseUrl=b.N.baseUrl,this.imagenUrl=`${this.baseUrl}/uploads/${this.sepultura.tipo}/${this.sepultura.avatar}`,this.mostrarFecha=!1,this.nacio=!1,this.mostrarFechaDef=!1,this.fallecio=!1,this.element=["Seleccionar Calle y Numero"],this.selectedValue="",this.select="",this.sepultenBD=!0,this.capturadaUrl=""}ngOnInit(){this._activatedRoute.params.pipe((0,v.w)(({id:t})=>this._fallecidosService.obtenerMuertoPorId(t))).subscribe(t=>{this.muerto=t}),this._sepulturaService.obtenerSepulturas().subscribe(t=>{this.items=t})}actualizarMuertoCloudinary(){this._fallecidosService.actualizarMuertoCloudinary(this.muerto,this.imagenSubir).subscribe(t=>{this.mostrarSnack("Actualizando datos del fallecido!!!"),setTimeout(()=>{this._route.navigateByUrl("/fallecidos/listado")},2500)})}actualizar(){this._fallecidosService.actualizarMuerto(this.muerto).subscribe(t=>this.mostrarSnack("Actualizado con \xe9xito!!!"))}eliminar(){this._fallecidosService.eliminarMuerto(this.muerto.id).subscribe(t=>{this._comentariosService.eliminarTodosComentarios(this.muerto.id).subscribe(o=>{})})}capturarFallecido(t){if(t.target.files){const o=new FileReader;o.readAsDataURL(t.target.files[0]),o.onload=a=>{this.capturadaUrl=a.target.result}}this.muerto.url=this.capturadaUrl,console.log(this.capturadaUrl),console.log(this.muerto.url),this.imagenSubir=t.target.files[0]}capturaLocaliza(t){this.sepultenBD=!1,this.muerto.sepult=t.calle+", "+t.numero,this.muerto.sepulturaId=t.id,this.muerto.url2=t.avatar}seleccionarSepultura(t){this.muerto.url2=t.avatar,this.muerto.sepult=t.calle+", "+t.numero}modificarNacio(){this.nacio=!0,this.mostrarFecha=!0}modificarFallecio(){this.fallecio=!0,this.mostrarFechaDef=!0}mote(t){console.log(t)}fechaNacio(t){const a=t.value.toString().split(" ");let n=a[1].toString();switch(n){case"Jan":n="01";break;case"Feb":n="02";break;case"Mar":n="03";break;case"Apr":n="04";break;case"May":n="05";break;case"Jun":n="06";break;case"Jul":n="07";break;case"Aug":n="08";break;case"Sept":n="09";break;case"Oct":n="10";break;case"Nov":n="11";break;case"Dec":n="12"}const c=a[2].toString()+"-"+n+"-"+a[3].toString();this.muerto.nacio=new Date(c)}fechaFallecio(t){const a=t.value.toString().split(" ");let n=a[1].toString();switch(n){case"Jan":n="01";break;case"Feb":n="02";break;case"Mar":n="03";break;case"Apr":n="04";break;case"May":n="05";break;case"Jun":n="06";break;case"Jul":n="07";break;case"Aug":n="08";break;case"Sept":n="09";break;case"Oct":n="10";break;case"Nov":n="11";break;case"Dec":n="12"}const c=a[2].toString()+"-"+n+"-"+a[3].toString();this.muerto.fallecio=c}mostrarSnack(t){this._snackBar.open(t,"Espere! Guardando...",{duration:2500})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.t),e.Y36(ge.o),e.Y36(p.gz),e.Y36(A.ux),e.Y36(f.M),e.Y36(p.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-editar"]],decls:53,vars:14,consts:[["fxLayout","row","fxLayoutGap","40px","fxLayout.xs","column"],["fxFlex","40%","fxLayout","column"],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","20px"],["fxFlex","100","fxLayout.xs","column"],["matInput","","type","text","required","",3,"ngModel","ngModelChange"],["fxFlex","100"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","type","text","required","",3,"ngModel","ngModelChange","change"],[1,"mb-3"],["for","nacio",1,"form-label"],["type","date","id","nacio",1,"form-control",3,"ngModel","ngModelChange"],["for","fallecio",1,"form-label"],["type","date","id","fallecio",1,"form-control",3,"ngModel","ngModelChange"],["name","sepultura",3,"selectionChange"],["fxLayout",""],["mat-raised-button","","color","primary",3,"click"],[1,"spacer"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["fxFlex","30%"],["width","100%",3,"src"],["type","file",3,"change"],[3,"value"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),e._uU(5,"Nombre"),e.qZA(),e.TgZ(6,"input",4),e.NdJ("ngModelChange",function(n){return o.muerto.name=n}),e.qZA()(),e.TgZ(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Apellidos"),e.qZA(),e.TgZ(10,"input",4),e.NdJ("ngModelChange",function(n){return o.muerto.apellidos=n}),e.qZA()()(),e.TgZ(11,"mat-form-field")(12,"mat-label"),e._uU(13,"Localizaci\xf3n"),e.qZA(),e.TgZ(14,"mat-select",6),e.NdJ("ngModelChange",function(n){return o.selectedValue=n})("selectionChange",function(n){return o.capturaLocaliza(n.value)}),e.YNc(15,Ze,2,3,"mat-option",7),e.qZA(),e.YNc(16,Ce,2,1,"div",8),e.qZA(),e.TgZ(17,"mat-form-field")(18,"mat-label"),e._uU(19,"Mote"),e.qZA(),e.TgZ(20,"input",9),e.NdJ("ngModelChange",function(n){return o.muerto.mote=n})("change",function(n){return o.mote(n)}),e.qZA()(),e._UZ(21,"br")(22,"br"),e.TgZ(23,"div")(24,"div",10)(25,"label",11),e._uU(26,"Fecha de Nacimiento"),e.qZA(),e.TgZ(27,"input",12),e.NdJ("ngModelChange",function(n){return o.muerto.nacio=n}),e.qZA()(),e.TgZ(28,"div",10)(29,"label",13),e._uU(30,"Fecha de defunci\xf3n"),e.qZA(),e.TgZ(31,"input",14),e.NdJ("ngModelChange",function(n){return o.muerto.fallecio=n}),e.qZA()()(),e._UZ(32,"br"),e.TgZ(33,"mat-form-field")(34,"mat-label"),e._uU(35,"Lugar de enterramiento"),e.qZA(),e.TgZ(36,"mat-select",15),e.NdJ("selectionChange",function(n){return o.seleccionarSepultura(n.value)}),e.YNc(37,Te,2,3,"mat-option",7),e.qZA()(),e._UZ(38,"br"),e.TgZ(39,"div",16)(40,"button",17),e.NdJ("click",function(){return o.actualizarMuertoCloudinary()}),e.TgZ(41,"mat-icon"),e._uU(42,"edit"),e.qZA(),e._uU(43),e.qZA(),e._UZ(44,"span",18),e.YNc(45,Ae,4,0,"button",19),e.qZA()(),e.TgZ(46,"div",20),e._UZ(47,"img",21)(48,"img",21),e.TgZ(49,"input",22),e.NdJ("change",function(n){return o.capturarFallecido(n)}),e.qZA()(),e.TgZ(50,"div",20),e._UZ(51,"img",21),e.qZA()(),e._UZ(52,"app-crear-historia")),2&t&&(e.xp6(6),e.Q6J("ngModel",o.muerto.name),e.xp6(4),e.Q6J("ngModel",o.muerto.apellidos),e.xp6(4),e.Q6J("ngModel",o.selectedValue),e.xp6(1),e.Q6J("ngForOf",o.items),e.xp6(1),e.Q6J("ngIf",o.sepultenBD),e.xp6(4),e.Q6J("ngModel",o.muerto.mote),e.xp6(7),e.Q6J("ngModel",o.muerto.nacio),e.xp6(4),e.Q6J("ngModel",o.muerto.fallecio),e.xp6(6),e.Q6J("ngForOf",o.items),e.xp6(6),e.hij(" ",o.muerto.id?"Actualizar":"Crear"," "),e.xp6(2),e.Q6J("ngIf",o.muerto.id),e.xp6(2),e.Q6J("src",o.muerto.url,e.LSH),e.xp6(1),e.Q6J("src",o.capturadaUrl,e.LSH),e.xp6(3),e.Q6J("src",o.muerto.url2,e.LSH))},dependencies:[d.sg,d.O5,s.Fj,s.JJ,s.Q7,s.On,u.xw,u.SQ,u.yH,S.KE,S.hX,fe.ey,he.lW,_e.Hw,be.Nt,ve.gD,xe.G],encapsulation:2}),i})();var g=l(8390),ye=l(7718);const Me=[{path:"",component:me.O,children:[{path:"listado",component:z},{path:"agregar",component:N,canActivate:[g.z],canLoad:[g.z]},{path:"editar/:id",component:Fe,canActivate:[g.z],canLoad:[g.z]},{path:"buscar",component:ae},{path:":id",component:pe,canActivate:[g.z],canLoad:[g.z]},{path:"inicio",component:ye.B},{path:"**",redirectTo:"listado"}]}];let Ue=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild(Me),p.Bz]}),i})();var Se=l(9814),Oe=l(3161),O=l(460),qe=l(4643),we=l(9638),Pe=l(5840);let Je=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,Ue,s.u5,s.UX,Se.o9,Oe.q,O.SharedModule,qe.SepulturasModule,we.ComentariosModule,O.SharedModule,Pe.HistoriaModule,y.SpinnerComponent]}),i})()}}]);