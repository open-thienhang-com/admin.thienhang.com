import{c as he,d as j,f as Z,h as z,i as H,k as B}from"./chunk-3EMEPV26.js";import{a as _,c as S}from"./chunk-OGOMC6I3.js";import{a as g,b as ve}from"./chunk-BUXHMAHO.js";import{B as le,H as f,b as M,d as re,ha as ae,ka as de,la as T,r as A,sa as ce,va as pe,wa as ye}from"./chunk-ISM7GCIZ.js";import{C as se,j as ee,l as te,p as ie,q as ne,z as oe}from"./chunk-HJI4Z4ED.js";import{Eb as v,Fb as y,Gb as U,Jb as $,Kb as L,Ob as I,Pb as r,Qb as G,Rb as Y,Sb as R,Tb as V,Ub as m,Va as E,Vb as u,W as F,X as Q,_a as k,aa as K,fb as b,ga as h,gb as q,gc as J,ha as p,ia as N,ic as w,jb as O,ka as C,kc as W,lb as x,qa as s,qc as X,ra as P,tb as d,xb as D}from"./chunk-JW2MOVJW.js";import{a as c}from"./chunk-6MDQTQU3.js";var Be=(()=>{class t extends ye{static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["BlankIcon"]],features:[O],decls:2,vars:0,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(i,n){i&1&&(N(),v(0,"svg",0),U(1,"rect",1),y())},encapsulation:2})}return t})();var me=["content"],Te=["overlay"],Se=["*"],Ee=(t,l,e,i,n,o,a,fe,ge,_e,Ce,be,Oe,xe)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":l,"p-overlay-top":e,"p-overlay-top-start":i,"p-overlay-top-end":n,"p-overlay-bottom":o,"p-overlay-bottom-start":a,"p-overlay-bottom-end":fe,"p-overlay-left":ge,"p-overlay-left-start":_e,"p-overlay-left-end":Ce,"p-overlay-right":be,"p-overlay-right-start":Oe,"p-overlay-right-end":xe}),ke=(t,l,e)=>({showTransitionParams:t,hideTransitionParams:l,transform:e}),De=t=>({value:"visible",params:t}),Le=t=>({mode:t}),Ie=t=>({$implicit:t});function Re(t,l){t&1&&$(0)}function Ve(t,l){if(t&1){let e=L();v(0,"div",3,1),I("click",function(n){h(e);let o=r(2);return p(o.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){h(e);let o=r(2);return p(o.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){h(e);let o=r(2);return p(o.onOverlayContentAnimationDone(n))}),Y(2),x(3,Re,1,0,"ng-container",4),y()}if(t&2){let e=r(2);D(e.contentStyleClass),d("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",w(11,De,W(7,ke,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),E(3),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",w(15,Ie,w(13,Le,e.overlayMode)))}}function Me(t,l){if(t&1){let e=L();v(0,"div",3,0),I("click",function(){h(e);let n=r();return p(n.onOverlayClick())}),x(2,Ve,4,17,"div",2),y()}if(t&2){let e=r();D(e.styleClass),d("ngStyle",e.style)("ngClass",X(5,Ee,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),E(2),d("ngIf",e.visible)}}var Ae=({dt:t})=>`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,ue=(()=>{class t extends ce{name="overlay";theme=Ae;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),je=H([Z({transform:"{{transform}}",opacity:0}),j("{{showTransitionParams}}")]),Ze=H([j("{{hideTransitionParams}}",Z({transform:"{{transform}}",opacity:0}))]),ze=(()=>{class t extends pe{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return _.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return _.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return _.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return _.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new s;onBeforeShow=new s;onShow=new s;onBeforeHide=new s;onHide=new s;onAnimationStart=new s;onAnimationDone=new s;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=K(ue);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(se(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return c(c({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return c(c({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return le(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&A(this.targetEl),this.modal&&M(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&A(this.targetEl),this.modal&&re(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&g.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&S.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),g.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&M(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),g.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),S.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ve(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!f()}):!f())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!f()}):!f())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(g.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),S.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(k(ae),k(P))};static \u0275cmp=b({type:t,selectors:[["p-overlay"]],contentQueries:function(i,n,o){if(i&1&&(R(o,me,4),R(o,de,4)),i&2){let a;m(a=u())&&(n.contentTemplate=a.first),m(a=u())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(V(Te,5),V(me,5)),i&2){let o;m(o=u())&&(n.overlayViewChild=o.first),m(o=u())&&(n.contentViewChild=o.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[J([ue]),O],ngContentSelectors:Se,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(G(),x(0,Me,3,20,"div",2)),i&2&&d("ngIf",n.modalVisible)},dependencies:[oe,ee,te,ne,ie,T],encapsulation:2,data:{animation:[he("overlayContentAnimation",[z(":enter",[B(je)]),z(":leave",[B(Ze)])])]},changeDetection:0})}return t})(),dt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=Q({imports:[ze,T,T]})}return t})();export{Be as a,ze as b,dt as c};
