import{f as Y}from"./chunk-BUXHMAHO.js";import{ka as q,la as h,sa as U,va as K}from"./chunk-ISM7GCIZ.js";import{a as V}from"./chunk-Y3XBNI5D.js";import{j as R,q as j,z as G}from"./chunk-HJI4Z4ED.js";import{Ab as d,Eb as y,Fb as _,Gb as D,Gc as $,Hc as Q,Jb as C,Lb as z,Ob as S,Pb as s,Sb as b,Ub as p,V as v,Va as r,Vb as f,W as B,X as L,Zb as P,_b as A,aa as w,fb as I,gb as M,gc as H,ic as T,jb as O,jc as N,ka as m,kb as E,lb as c,qa as x,sb as u,tb as a,vb as F,xb as k}from"./chunk-JW2MOVJW.js";var Z=["icon"],tt=["content"],W=t=>({$implicit:t}),et=(t,l)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":l});function ot(t,l){t&1&&C(0)}function nt(t,l){if(t&1&&D(0,"span",0),t&2){let e=s(3);k(e.checked?e.onIcon:e.offIcon),a("ngClass",N(4,et,e.iconPos==="left",e.iconPos==="right")),u("data-pc-section","icon")}}function it(t,l){if(t&1&&c(0,nt,1,7,"span",2),t&2){let e=s(2);d(e.onIcon||e.offIcon?0:-1)}}function lt(t,l){t&1&&C(0)}function at(t,l){if(t&1&&c(0,lt,1,0,"ng-container",1),t&2){let e=s(2);a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",T(2,W,e.checked))}}function gt(t,l){if(t&1&&(c(0,it,1,1)(1,at,1,4,"ng-container"),y(2,"span",0),P(3),_()),t&2){let e=s();d(e.iconTemplate?1:0),r(2),a("ngClass",e.cx("label")),u("data-pc-section","label"),r(),A(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var rt=({dt:t})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
    padding: ${t("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${t("togglebutton.content.border.radius")};
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${t("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${t("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,ct={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},J=(()=>{class t extends U{name="togglebutton";theme=rt;classes=ct;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var st={provide:V,useExisting:v(()=>X),multi:!0},X=(()=>{class t extends K{get hostClass(){return this.styleClass||""}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new x;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=w(J);onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=I({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,g){if(n&1&&(b(g,Z,4),b(g,tt,4),b(g,q,4)),n&2){let i;p(i=f())&&(o.iconTemplate=i.first),p(i=f())&&(o.contentTemplate=i.first),p(i=f())&&(o.templates=i)}},hostVars:23,hostBindings:function(n,o){n&1&&S("keydown",function(i){return o.onKeyDown(i)})("click",function(i){return o.toggle(i)}),n&2&&(z("tabindex",o.tabindex),u("disabled",o.disabled)("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled)("type","button"),k(o.hostClass),F("p-togglebutton",!0)("p-togglebutton-checked",o.checked)("p-disabled",o.disabled)("p-togglebutton-sm",o.size==="small")("p-inputfield-sm",o.size==="small")("p-togglebutton-lg",o.size==="large")("p-inputfield-lg",o.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",$],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Q],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",$],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[H([st,J]),E([Y]),O],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(y(0,"span",0),c(1,ot,1,0,"ng-container",1)(2,gt,4,4),_()),n&2&&(a("ngClass",o.cx("content")),r(),a("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",T(4,W,o.checked)),r(),d(o.contentTemplate?-1:2))},dependencies:[G,R,j,h],encapsulation:2,changeDetection:0})}return t})(),Mt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=M({type:t});static \u0275inj=L({imports:[X,h,h]})}return t})();export{X as a,Mt as b};
