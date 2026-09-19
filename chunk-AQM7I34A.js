import{a as te}from"./chunk-O6C3GJXX.js";import{R as p,S as d,ka as Y,la as m,sa as Z,va as ee}from"./chunk-ISM7GCIZ.js";import{a as H,f as J,i as W,x as X}from"./chunk-Y3XBNI5D.js";import{q as U,z as G}from"./chunk-HJI4Z4ED.js";import{Ab as $,Cb as k,Db as A,Eb as I,Fb as K,Gc as r,Hc as P,Jb as z,Kb as N,Ob as q,Pb as u,Sb as y,Ub as _,V as v,Va as S,Vb as C,W as x,X as E,aa as T,fb as w,ga as O,gb as L,gc as Q,ha as B,jb as M,jc as R,ka as b,lb as c,qa as f,sb as V,tb as g,vb as F,wb as D,wc as j}from"./chunk-JW2MOVJW.js";var le=["item"],oe=(i,a)=>({$implicit:i,index:a});function ae(i,a){return this.getOptionLabel(a)}function se(i,a){i&1&&z(0)}function re(i,a){if(i&1&&c(0,se,1,0,"ng-container",3),i&2){let e=u(2),t=e.$implicit,n=e.$index,l=u();g("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",R(2,oe,t,n))}}function ue(i,a){i&1&&c(0,re,1,5,"ng-template",null,0,j)}function de(i,a){if(i&1){let e=N();I(0,"p-toggleButton",2),q("onChange",function(n){let l=O(e),o=l.$implicit,s=l.$index,h=u();return B(h.onOptionSelect(n,o,s))}),c(1,ue,2,0),K()}if(i&2){let e=a.$implicit,t=u();g("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.disabled||t.isOptionDisabled(e))("allowEmpty",t.getAllowEmpty())("size",t.size),S(),$(t.itemTemplate||t._itemTemplate?1:-1)}}var ce=({dt:i})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${i("selectbutton.border.radius")};
    border-end-start-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${i("selectbutton.border.radius")};
    border-end-end-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${i("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,pe={root:({props:i})=>["p-selectbutton p-component",{"p-invalid":i.invalid}]},ie=(()=>{class i extends Z{name="selectbutton";theme=ce;classes=pe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var me={provide:H,useExisting:v(()=>ne),multi:!0},ne=(()=>{class i extends ee{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new f;onChange=new f;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=T(ie);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?p(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?p(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?p(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,t,n){if(this.disabled||this.isOptionDisabled(t))return;let l=this.isSelected(t);if(l&&this.unselectable)return;let o=this.getOptionValue(t),s;if(this.multiple)l?s=this.value.filter(h=>!d(h,o,this.equalityKey)):s=this.value?[...this.value,o]:[o];else{if(l&&!this.allowEmpty)return;s=l?null:o}this.focusedIndex=n,this.value=s,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,l;for(let o=0;o<=this.el.nativeElement.children.length-1;o++)this.el.nativeElement.children[o].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[o],index:o});t==="prev"?n.index===0?l=this.el.nativeElement.children.length-1:l=n.index-1:n.index===this.el.nativeElement.children.length-1?l=0:l=n.index+1,this.focusedIndex=l,this.el.nativeElement.children[l].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!d(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let l of this.value)if(d(l,n,this.dataKey)){t=!0;break}}}else t=d(this.getOptionValue(e),this.value,this.equalityKey);return t}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275cmp=w({type:i,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,n,l){if(t&1&&(y(l,le,4),y(l,Y,4)),t&2){let o;_(o=C())&&(n.itemTemplate=o.first),_(o=C())&&(n.templates=o)}},hostVars:10,hostBindings:function(t,n){t&2&&(V("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),D(n.style),F("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",r],tabindex:[2,"tabindex","tabindex",P],multiple:[2,"multiple","multiple",r],allowEmpty:[2,"allowEmpty","allowEmpty",r],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",r],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",r]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[Q([me,ie]),M],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&k(0,de,2,9,"p-toggleButton",1,ae,!0),t&2&&A(n.options)},dependencies:[te,X,J,W,G,U,m],encapsulation:2,changeDetection:0})}return i})(),$e=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=E({imports:[ne,m,m]})}return i})();export{ne as a,$e as b};
