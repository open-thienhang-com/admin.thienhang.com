import{a as he}from"./chunk-3MFM2P7C.js";import{c as ce,d as L,f as b,g as y,h as I}from"./chunk-3EMEPV26.js";import{c as g}from"./chunk-OGOMC6I3.js";import{b as de}from"./chunk-BUXHMAHO.js";import{F as oe,H as ne,b as J,ha as re,i as ee,ka as se,la as S,m as te,oa as ae,q as ie,sa as le,va as pe,y as O}from"./chunk-ISM7GCIZ.js";import{C as v,j as W,l as K,p as U,q as X,z as G}from"./chunk-HJI4Z4ED.js";import{Eb as k,Fb as B,Gc as p,Hc as q,Jb as M,Kb as j,Ob as h,Pb as s,Qb as Q,Rb as N,Sb as u,Ua as z,Ub as f,Va as H,Vb as m,W as x,X as P,_a as _,aa as D,fb as E,ga as a,gb as R,gc as Y,ha as l,jb as A,jc as T,ka as V,lb as w,qa as C,ra as $,sb as F,tb as d,xb as Z}from"./chunk-JW2MOVJW.js";var fe=["content"],me=["closeicon"],ve=["*"],be=(t,c)=>({showTransitionParams:t,hideTransitionParams:c}),ye=(t,c)=>({value:t,params:c});function ge(t,c){t&1&&M(0)}function Ce(t,c){if(t&1){let e=j();k(0,"div",1),h("click",function(o){a(e);let n=s();return l(n.onOverlayClick(o))})("@animation.start",function(o){a(e);let n=s();return l(n.onAnimationStart(o))})("@animation.done",function(o){a(e);let n=s();return l(n.onAnimationEnd(o))}),k(1,"div",2),h("click",function(o){a(e);let n=s();return l(n.onContentClick(o))})("mousedown",function(o){a(e);let n=s();return l(n.onContentClick(o))}),N(2),w(3,ge,1,0,"ng-container",3),B()()}if(t&2){let e=s();Z(e.styleClass),d("ngClass","p-popover p-component")("ngStyle",e.style)("@animation",T(12,ye,e.overlayVisible?"open":"close",T(9,be,e.showTransitionOptions,e.hideTransitionOptions))),F("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),H(3),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}var _e=({dt:t})=>`
.p-popover {
    margin-top: ${t("popover.gutter")};
    background: ${t("popover.background")};
    color: ${t("popover.color")};
    border: 1px solid ${t("popover.border.color")};
    border-radius: ${t("popover.border.radius")};
    box-shadow: ${t("popover.shadow")};
    position: absolute
}

.p-popover-content {
    padding: ${t("popover.content.padding")};
}

.p-popover-flipped {
    margin-top: calc(${t("popover.gutter")} * -1);
    margin-bottom: ${t("popover.gutter")};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(${t("popover.arrow.offset")} + ${t("popover.arrow.left")});
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${t("popover.gutter")} - 2px);
    margin-left: calc(-1 * (${t("popover.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.background")};
}

.p-popover:before {
    border-width: ${t("popover.gutter")};
    margin-left: calc(-1 * ${t("popover.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.border.color")};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.background")};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.border.color")};
}

`,we={root:"p-popover p-component",content:"p-popover-content"},ue=(()=>{class t extends le{name="popover";theme=_e;classes=we;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();var qe=(()=>{class t extends pe{zone;overlayService;ariaLabel;ariaLabelledBy;dismissable=!0;showCloseIcon;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new C;onHide=new C;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;closeIconTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=D(ue);constructor(e,i){super(),this.zone=e,this.overlayService=i,console.log("OverlayPanel is deprecated. Use Popover instead.")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}this.cd.markForCheck()})}bindDocumentClickListener(){if(v(this.platformId)&&!this.documentClickListener){let e=oe()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i))}show(e,i){i&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):te(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&g.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),ee(this.container,this.target,!1);let e=O(this.container),i=O(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<i.left&&(n=i.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(ae("popover.arrow.left").name,`${n}px`),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),J(this.container,"p-popover-flipped"),this.showCloseIcon&&this.renderer.setStyle(this.container,"margin-top","-30px"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&g.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=ie(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!ne()&&this.hide()}bindDocumentResizeListener(){if(v(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){v(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new de(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&g.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(_($),_(re))};static \u0275cmp=E({type:t,selectors:[["p-overlayPanel"],["p-overlaypanel"]],contentQueries:function(i,o,n){if(i&1&&(u(n,fe,4),u(n,me,4),u(n,se,4)),i&2){let r;f(r=m())&&(o.contentTemplate=r.first),f(r=m())&&(o.closeIconTemplate=r.first),f(r=m())&&(o.templates=r)}},hostBindings:function(i,o){i&1&&h("keydown.escape",function(r){return o.onEscapeKeydown(r)},!1,z)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",p],showCloseIcon:[2,"showCloseIcon","showCloseIcon",p],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",p],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",q],focusOnShow:[2,"focusOnShow","focusOnShow",p],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},standalone:!1,features:[Y([ue]),A],ngContentSelectors:ve,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet"]],template:function(i,o){i&1&&(Q(),w(0,Ce,4,15,"div",0)),i&2&&d("ngIf",o.render)},dependencies:[W,K,X,U],encapsulation:2,data:{animation:[ce("animation",[y("void",b({transform:"scaleY(0.8)",opacity:0})),y("close",b({opacity:0})),y("open",b({transform:"translateY(0)",opacity:1})),I("void => open",L("{{showTransitionParams}}")),I("open => close",L("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),We=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=P({imports:[G,S,he,S]})}return t})();export{qe as a,We as b};
