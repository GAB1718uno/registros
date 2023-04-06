"use strict";(self.webpackChunkregistrosApp=self.webpackChunkregistrosApp||[]).push([[447],{4402:(U,u,r)=>{r.d(u,{t:()=>b});var p=r(8505),m=r(2340),t=r(4650),g=r(529);let b=(()=>{class d{constructor(o){this.http=o,this.baseUrl=m.N.baseUrl}get muertos(){return{...this._muertos}}agregarMuerto(o,s,i,e,n,a,c,f,M){const h={name:o,apellidos:s,nacio:i,fallecio:e,mote:n,url:a,url2:c,sepulturaId:f,sepult:M};return console.log(h),this.http.post(`${this.baseUrl}/muertos`,h)}uploadFallecidoCloudinary(o,s,i,e,n,a,c,f,M,h){const Z=`${this.baseUrl}/muertos`,l=new FormData;return l.append("name",o),l.append("apellidos",s),l.append("nacio",i),l.append("fallecio",e),l.append("mote",n),l.append("url",a),l.append("url2",c),l.append("sepulturaId",f),l.append("sepult",M),l.append("file",h),this.http.post(Z,l,{headers:{"x-token":localStorage.getItem("token")||""}})}obtenerTodosMuertos(){return this.http.get(`${this.baseUrl}/muertos`).pipe((0,p.b)())}obtenerMuertoPorId(o){return this.http.get(`${this.baseUrl}/muertos/${o}`)}obtenerMuertoCribados(o,s){return this.http.get(`${this.baseUrl}/muertos/busqueda/${s}/${o}`)}obtenerRelacionados(o,s){return this.http.get(`${this.baseUrl}/muertos/${o}/${s}`)}actualizarMuerto(o){return this.http.put(`${this.baseUrl}/muertos/${o.id}`,o)}actualizarMuertoCloudinary(o,s){console.log(s);const i=`${this.baseUrl}/muertos/fallecidos/${o.id}`,e=new FormData;return e.append("id",o.id),e.append("name",o.name),e.append("apellidos",o.apellidos),e.append("mote",o.mote),e.append("nacio",o.nacio.toString()),e.append("fallecio",o.fallecio),e.append("url",o.url),e.append("url2",o.url2),e.append("sepult",o.sepult),e.append("file",s),this.http.put(i,e,{headers:{"x-token":localStorage.getItem("token")||""}})}eliminarMuerto(o){return this.http.delete(`${this.baseUrl}/muertos/${o}`)}}return d.\u0275fac=function(o){return new(o||d)(t.LFG(g.eN))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3447:(U,u,r)=>{r.r(u),r.d(u,{HistoriaModule:()=>i});var p=r(6895),m=r(9299),t=r(4650),g=r(4402);function b(e,n){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"button",3),t._UZ(3,"img",4),t.qZA(),t._UZ(4,"button",5)(5,"button",6),t.qZA(),t.TgZ(6,"div",7)(7,"div",8),t._UZ(8,"img",4),t.qZA(),t.TgZ(9,"div",8),t._UZ(10,"img",9),t.qZA(),t.TgZ(11,"div",8),t._UZ(12,"img",9),t.qZA()(),t.TgZ(13,"button",10),t._UZ(14,"span",11),t.TgZ(15,"span",12),t._uU(16,"Previous"),t.qZA()(),t.TgZ(17,"button",13),t._UZ(18,"span",14),t.TgZ(19,"span",12),t._uU(20,"Next"),t.qZA()()()),2&e){const a=n.$implicit;t.xp6(3),t.Q6J("src",a.url,t.LSH),t.xp6(5),t.Q6J("src",a.url,t.LSH)}}let d=(()=>{class e{constructor(a){this._fallecidosService=a,this.items=[]}ngOnInit(){this._fallecidosService.obtenerTodosMuertos().subscribe(a=>{this.items=a})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(g.t))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-mostrar-historia"]],decls:1,vars:1,consts:[["id","carouselExampleIndicators","class","carousel slide",4,"ngFor","ngForOf"],["id","carouselExampleIndicators",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["alt","...",1,"d-block","w-100",3,"src"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","2","aria-label","Slide 3"],[1,"carousel-inner"],[1,"carousel-item"],["src","...","alt","...",1,"d-block","w-100"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(a,c){1&a&&t.YNc(0,b,21,2,"div",0),2&a&&t.Q6J("ngForOf",c.items)},dependencies:[p.sg]}),e})();const o=[{path:"",component:r(4998).O,children:[{path:"mostrarHistoria",component:d}]}];let s=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(o),m.Bz]}),e})(),i=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,s]}),e})()}}]);