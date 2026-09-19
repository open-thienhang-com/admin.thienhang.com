import{a as ce,b as ue}from"./chunk-FG7V5TN4.js";import{a as pe}from"./chunk-ELEGJQ7E.js";import{b as re}from"./chunk-NM6Q7NS5.js";import{a as le}from"./chunk-3MFM2P7C.js";import{b as se}from"./chunk-OGOMC6I3.js";import{c as oe,d as ae}from"./chunk-BUXHMAHO.js";import{ka as ee,la as T,sa as ie,ta as te,va as ne}from"./chunk-ISM7GCIZ.js";import{a as Z}from"./chunk-Y3XBNI5D.js";import{j as G,k as H,l as W,p as J,q as X,z as Y}from"./chunk-HJI4Z4ED.js";import{Cc as z,Eb as m,Fb as _,Gc as w,Hb as K,Hc as S,Ib as Q,Jb as V,Kb as v,Ob as f,Pb as s,Sb as P,Tb as O,Ub as x,V as E,Va as u,Vb as y,W as $,X as F,_a as I,aa as M,fb as A,ga as r,gb as L,gc as j,ha as c,ic as b,jb as R,ka as D,lb as h,lc as q,qa as g,sb as C,tb as p,ua as B,vb as N,wc as U,xb as k}from"./chunk-JW2MOVJW.js";var _e=["inputtext"],fe=["container"],ge=(e,a,i,n)=>({"p-inputchips p-component p-input-wrapper":!0,"p-disabled":e,"p-focus":a,"p-inputwrapper-filled":i,"p-inputwrapper-focus":n}),Ce=e=>({"p-chips-clearable":e}),ve=e=>({"p-inputchips-chip-item":!0,"p-focus":e}),he=e=>({$implicit:e}),we=e=>({removeItem:e});function be(e,a){e&1&&V(0)}function Ie(e,a){e&1&&V(0)}function xe(e,a){if(e&1){let i=v();m(0,"TimesCircleIcon",16),f("click",function(t){r(i);let o=s(4).index,l=s();return c(l.removeItem(t,o))}),_()}e&2&&(p("styleClass","p-chips-token-icon"),C("data-pc-section","removeTokenIcon")("aria-hidden",!0))}function ye(e,a){}function Te(e,a){e&1&&h(0,ye,0,0,"ng-template")}function ke(e,a){if(e&1){let i=v();m(0,"span",17),f("click",function(t){r(i);let o=s(4).index,l=s();return c(l.removeItem(t,o))}),h(1,Te,1,0,null,11),_()}if(e&2){let i=s(5);C("data-pc-section","removeTokenIcon")("aria-hidden",!0),u(),p("ngTemplateOutlet",i.removeTokenIconTemplate)("ngTemplateOutletContext",b(4,we,i.removeItem.bind(i)))}}function Ve(e,a){if(e&1&&(K(0),h(1,xe,1,3,"TimesCircleIcon",14)(2,ke,2,6,"span",15),Q()),e&2){let i=s(4);u(),p("ngIf",!i.removeTokenIconTemplate),u(),p("ngIf",i.removeTokenIconTemplate)}}function Oe(e,a){if(e&1&&h(0,Ve,3,2,"ng-container",9),e&2){let i=s(3);p("ngIf",!i.disabled)}}function Se(e,a){if(e&1){let i=v();m(0,"p-chip",13),f("onRemove",function(t){r(i);let o=s().index,l=s();return c(l.removeItem(t,o))}),h(1,Ie,1,0,"ng-container",11)(2,Oe,1,1,"ng-template",null,3,U),_()}if(e&2){let i=s().$implicit,n=s();p("label",n.field?n.resolveFieldData(i,n.field):i)("removeIcon",n.chipIcon),u(),p("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",b(4,he,i))}}function Ee(e,a){if(e&1){let i=v();m(0,"li",10,2),f("click",function(t){let o=r(i).$implicit,l=s();return c(l.onItemClick(t,o))})("contextmenu",function(t){let o=r(i).$implicit,l=s();return c(l.onItemContextMenu(t,o))}),h(2,be,1,0,"ng-container",11)(3,Se,4,6,"p-chip",12),_()}if(e&2){let i=a.$implicit,n=a.index,t=s();p("ngClass",b(11,ve,t.focusedIndex===n)),C("id",t.id+"_chips_item_"+n)("ariaLabel",i)("aria-selected",!0)("aria-setsize",t.value.length)("aria-posinset",n+1)("data-p-focused",t.focusedIndex===n)("data-pc-section","token"),u(2),p("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",b(13,he,i)),u(),p("ngIf",!t.itemTemplate)}}function $e(e,a){if(e&1){let i=v();m(0,"TimesIcon",16),f("click",function(){r(i);let t=s(2);return c(t.clear())}),_()}e&2&&p("styleClass","p-chips-clear-icon")}function Fe(e,a){}function Me(e,a){e&1&&h(0,Fe,0,0,"ng-template")}function De(e,a){if(e&1){let i=v();m(0,"span",19),f("click",function(){r(i);let t=s(2);return c(t.clear())}),h(1,Me,1,0,null,20),_()}if(e&2){let i=s(2);u(),p("ngTemplateOutlet",i.clearIconTemplate)}}function Be(e,a){if(e&1&&(m(0,"li"),h(1,$e,1,1,"TimesIcon",14)(2,De,2,1,"span",18),_()),e&2){let i=s();u(),p("ngIf",!i.clearIconTemplate),u(),p("ngIf",i.clearIconTemplate)}}var Ae=({dt:e})=>`
.p-inputchips {
    display: inline-flex;
}

.p-inputchips-input {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    position: relative;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${e("inputchips.padding.y")} / 2) ${e("inputchips.padding.x")};
    gap: calc(${e("inputchips.padding.y")} / 2);
    color: ${e("inputchips.color")};
    background: ${e("inputchips.background")};
    border: 1px solid ${e("inputchips.border.color")};
    border-radius: ${e("inputchips.border.radius")};
    width: 100%;
    transition: background ${e("inputchips.transition.duration")}, color ${e("inputchips.transition.duration")}, border-color ${e("inputchips.transition.duration")}, outline-color ${e("inputchips.transition.duration")}, box-shadow ${e("inputchips.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("inputchips.shadow")};
}

.p-inputchips:not(.p-disabled):hover .p-inputchips-input {
    border-color: ${e("inputchips.hover.border.color")};
}

.p-inputchips:not(.p-disabled).p-focus .p-inputchips-input {
    border-color: ${e("inputchips.focus.border.color")};
    box-shadow: ${e("inputchips.focus.ring.shadow")};
    outline: ${e("inputchips.focus.ring.width")} ${e("inputchips.focus.ring.style")} ${e("inputchips.focus.ring.color")};
    outline-offset: ${e("inputchips.focus.ring.offset")};
}

.p-inputchips.p-invalid .p-inputchips-input {
    border-color: ${e("inputchips.invalid.border.color")};
}

.p-variant-filled.p-inputchips-input {
    background: ${e("inputchips.filled.background")};
}

.p-inputchips:not(.p-disabled).p-focus .p-variant-filled.p-inputchips-input  {
    background: ${e("inputchips.filled.focus.background")};
}

.p-inputchips.p-disabled .p-inputchips-input {
    opacity: 1;
    background: ${e("inputchips.disabled.background")};
    color: ${e("inputchips.disabled.color")};
}

.p-inputchips-chip.p-chip {
    padding-top: calc(${e("inputchips.padding.y")} / 2);
    padding-bottom: calc(${e("inputchips.padding.y")} / 2);
    border-radius: ${e("inputchips.chip.border.radius")};
    transition: background ${e("inputchips.transition.duration")}, color ${e("inputchips.transition.duration")};
}

.p-inputchips-chip-item.p-focus .p-inputchips-chip {
    background: ${e("inputchips.chip.focus.background")};
    color: ${e("inputchips.chip.focus.color")};
}

.p-inputchips-input:has(.p-inputchips-chip) {
    padding-left: calc(${e("inputchips.padding.y")} / 2);
    padding-right: calc(${e("inputchips.padding.y")} / 2);
}

.p-inputchips-input-item {
    flex: 1 1 auto;
    display: inline-flex;
    padding-top: calc(${e("inputchips.padding.y")} / 2);
    padding-bottom: calc(${e("inputchips.padding.y")} / 2);
}

.p-inputchips-input-item input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-inputchips-input-item input::placeholder {
    color: ${e("inputchips.placeholder.color")};
}

/* For PrimeNG */

.p-chips-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: ${e("inputchips.padding.x")};
}
`,Le={root:({instance:e,props:a})=>["p-inputchips p-component p-inputwrapper",{"p-disabled":a.disabled,"p-invalid":a.invalid,"p-focus":e.focused,"p-inputwrapper-filled":a.modelValue&&a.modelValue.length||e.inputValue&&e.inputValue.length,"p-inputwrapper-focus":e.focused}],input:({props:e,instance:a})=>["p-inputchips-input",{"p-variant-filled":e.variant?e.variant==="filled":a.config.inputStyle==="filled"||a.config.inputVariant==="filled"}],chipItem:({state:e,index:a})=>["p-inputchips-chip-item",{"p-focus":e.focusedIndex===a}],pcChip:"p-inputchips-chip",chipIcon:"p-inputchips-chip-icon",inputItem:"p-inputchips-input-item"},de=(()=>{class e extends ie{name="inputchips";theme=Ae;classes=Le;static \u0275fac=(()=>{let i;return function(t){return(i||(i=D(e)))(t||e)}})();static \u0275prov=$({token:e,factory:e.\u0275fac})}return e})();var Re={provide:Z,useExisting:E(()=>me),multi:!0},me=(()=>{class e extends ne{el;cd;config;style;styleClass;disabled;field;placeholder;max;maxLength;ariaLabel;ariaLabelledBy;tabindex;inputId;allowDuplicate=!0;caseSensitiveDuplication=!0;inputStyle;inputStyleClass;chipIcon;addOnTab;addOnBlur;separator;showClear=!1;autofocus;variant="outlined";onAdd=new g;onRemove=new g;onFocus=new g;onBlur=new g;onChipClick=new g;onChipContextMenu=new g;onClear=new g;inputViewChild;containerViewChild;templates;itemTemplate;removeTokenIconTemplate;clearIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};valueChanged;id=se();focused;focusedIndex;filled;_componentStyle=M(de);get focusedOptionId(){return this.focusedIndex!==null?`${this.id}_chips_item_${this.focusedIndex}`:null}get isMaxedOut(){return this.max&&this.value&&this.max===this.value.length}constructor(i,n,t){super(),this.el=i,this.cd=n,this.config=t,console.log("Deprecated since v18. Use AutoComplete component instead with its typeahead property.")}ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"item":this.itemTemplate=i.template;break;case"removetokenicon":this.removeTokenIconTemplate=i.template;break;case"clearicon":this.clearIconTemplate=i.template;break;default:this.itemTemplate=i.template;break}}),this.updateFilledState()}onWrapperClick(){this.inputViewChild?.nativeElement.focus()}onContainerFocus(){this.focused=!0}onContainerBlur(){this.focusedIndex=-1,this.focused=!1}onContainerKeyDown(i){switch(i.code){case"ArrowLeft":this.onArrowLeftKeyOn();break;case"ArrowRight":this.onArrowRightKeyOn();break;case"Backspace":this.onBackspaceKeyOn(i);break;case"Space":this.focusedIndex!==null&&this.value&&this.value.length>0&&this.onItemClick(i,this.value[this.focusedIndex]);break;default:break}}onArrowLeftKeyOn(){this.inputViewChild.nativeElement.value.length===0&&this.value&&this.value.length>0&&(this.focusedIndex=this.focusedIndex===null?this.value.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))}onArrowRightKeyOn(){this.inputViewChild.nativeElement.value.length===0&&this.value&&this.value.length>0&&(this.focusedIndex===this.value.length-1?(this.focusedIndex=null,this.inputViewChild?.nativeElement.focus()):this.focusedIndex++)}onBackspaceKeyOn(i){this.focusedIndex!==null&&this.removeItem(i,this.focusedIndex)}onInput(){this.updateFilledState(),this.focusedIndex=null}onPaste(i){this.disabled||(this.separator&&((i.clipboardData||this.document.defaultView.clipboardData).getData("Text").split(this.separator).forEach(t=>{this.addItem(i,t,!0)}),this.inputViewChild.nativeElement.value=""),this.updateFilledState())}updateFilledState(){!this.value||this.value.length===0?this.filled=this.inputViewChild&&this.inputViewChild.nativeElement&&this.inputViewChild.nativeElement.value!="":this.filled=!0}onItemClick(i,n){this.onChipClick.emit({originalEvent:i,value:n})}onItemContextMenu(i,n){this.onChipContextMenu.emit({originalEvent:i,value:n})}writeValue(i){this.value=i,this.updateMaxedOut(),this.updateFilledState(),this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}resolveFieldData(i,n){if(i&&n){if(n.indexOf(".")==-1)return i[n];{let l=n.split("."),d=i;for(var t=0,o=l.length;t<o;++t)d=d[l[t]];return d}}else return null}onInputFocus(i){this.focused=!0,this.focusedIndex=null,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.inputViewChild.nativeElement.value&&this.addItem(i,this.inputViewChild.nativeElement.value,!1),this.onModelTouched(),this.onBlur.emit(i)}removeItem(i,n){if(this.disabled)return;let t=this.value[n];this.value=this.value.filter((o,l)=>l!=n),this.focusedIndex=null,this.inputViewChild.nativeElement.focus(),this.onModelChange(this.value),this.onRemove.emit({originalEvent:i,value:t}),this.updateFilledState(),this.updateMaxedOut()}addItem(i,n,t){if(this.value=this.value||[],n&&n.trim().length){let o=this.caseSensitiveDuplication?this.value.includes(n):this.value.some(l=>l.toLowerCase()===n.toLowerCase());(this.allowDuplicate||!o)&&!this.isMaxedOut&&(this.value=[...this.value,n],this.onModelChange(this.value),this.onAdd.emit({originalEvent:i,value:n}))}this.updateFilledState(),this.updateMaxedOut(),this.inputViewChild.nativeElement.value="",t&&i.preventDefault()}clear(){this.value=null,this.updateFilledState(),this.onModelChange(this.value),this.updateMaxedOut(),this.onClear.emit()}onKeyDown(i){let n=i.target.value;switch(i.code){case"Backspace":n.length===0&&this.value&&this.value.length>0&&(this.focusedIndex!==null?this.removeItem(i,this.focusedIndex):this.removeItem(i,this.value.length-1));break;case"Enter":case"NumpadEnter":n&&n.trim().length&&!this.isMaxedOut&&this.addItem(i,n,!0);break;case"Tab":this.addOnTab&&n&&n.trim().length&&!this.isMaxedOut&&(this.addItem(i,n,!0),i.preventDefault());break;case"ArrowLeft":n.length===0&&this.value&&this.value.length>0&&this.containerViewChild?.nativeElement.focus();break;case"ArrowRight":i.stopPropagation();break;default:this.separator&&(this.separator===i.key||i.key.match(this.separator))&&this.addItem(i,n,!0);break}}updateMaxedOut(){this.inputViewChild&&this.inputViewChild.nativeElement&&(this.isMaxedOut?(this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=!0):(this.disabled&&this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=this.disabled||!1))}static \u0275fac=function(n){return new(n||e)(I(B),I(z),I(te))};static \u0275cmp=A({type:e,selectors:[["p-chips"]],contentQueries:function(n,t,o){if(n&1&&P(o,ee,4),n&2){let l;x(l=y())&&(t.templates=l)}},viewQuery:function(n,t){if(n&1&&(O(_e,5),O(fe,5)),n&2){let o;x(o=y())&&(t.inputViewChild=o.first),x(o=y())&&(t.containerViewChild=o.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(n,t){n&2&&N("p-inputwrapper-filled",t.filled)("p-inputwrapper-focus",t.focused)("p-chips-clearable",t.showClear)},inputs:{style:"style",styleClass:"styleClass",disabled:[2,"disabled","disabled",w],field:"field",placeholder:"placeholder",max:[2,"max","max",S],maxLength:"maxLength",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tabindex:[2,"tabindex","tabindex",S],inputId:"inputId",allowDuplicate:[2,"allowDuplicate","allowDuplicate",w],caseSensitiveDuplication:[2,"caseSensitiveDuplication","caseSensitiveDuplication",w],inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",chipIcon:"chipIcon",addOnTab:[2,"addOnTab","addOnTab",w],addOnBlur:[2,"addOnBlur","addOnBlur",w],separator:"separator",showClear:[2,"showClear","showClear",w],autofocus:[2,"autofocus","autofocus",w],variant:"variant"},outputs:{onAdd:"onAdd",onRemove:"onRemove",onFocus:"onFocus",onBlur:"onBlur",onChipClick:"onChipClick",onChipContextMenu:"onChipContextMenu",onClear:"onClear"},features:[j([Re,de]),R],decls:8,vars:31,consts:[["container",""],["inputtext",""],["token",""],["removeicon",""],[3,"ngClass","ngStyle"],["tabindex","-1","role","listbox",1,"p-inputchips-input",3,"click","focus","blur","keydown"],["role","option",3,"ngClass","click","contextmenu",4,"ngFor","ngForOf"],["role","option",1,"p-inputchips-input-item",3,"ngClass"],["type","text","pAutoFocus","",1,"test",3,"keydown","input","paste","focus","blur","disabled","ngStyle","autofocus"],[4,"ngIf"],["role","option",3,"click","contextmenu","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-inputchips-chip","removable","",3,"label","removeIcon","onRemove",4,"ngIf"],["removable","",1,"p-inputchips-chip",3,"onRemove","label","removeIcon"],[3,"styleClass","click",4,"ngIf"],["class","p-chips-token-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-chips-token-icon",3,"click"],["class","p-chips-clear-icon",3,"click",4,"ngIf"],[1,"p-chips-clear-icon",3,"click"],[4,"ngTemplateOutlet"]],template:function(n,t){if(n&1){let o=v();m(0,"div",4)(1,"ul",5,0),f("click",function(){return r(o),c(t.onWrapperClick())})("focus",function(){return r(o),c(t.onContainerFocus())})("blur",function(){return r(o),c(t.onContainerBlur())})("keydown",function(d){return r(o),c(t.onContainerKeyDown(d))}),h(3,Ee,4,15,"li",6),m(4,"li",7)(5,"input",8,1),f("keydown",function(d){return r(o),c(t.onKeyDown(d))})("input",function(){return r(o),c(t.onInput())})("paste",function(d){return r(o),c(t.onPaste(d))})("focus",function(d){return r(o),c(t.onInputFocus(d))})("blur",function(d){return r(o),c(t.onInputBlur(d))}),_()(),h(7,Be,3,2,"li",9),_()()}n&2&&(k(t.styleClass),p("ngClass",q(24,ge,t.disabled,t.focused,t.value&&t.value.length||(t.inputViewChild==null?null:t.inputViewChild.nativeElement.value)&&(t.inputViewChild==null?null:t.inputViewChild.nativeElement.value.length),t.focused))("ngStyle",t.style),C("data-pc-name","chips")("data-pc-section","root"),u(),C("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("aria-activedescendant",t.focused?t.focusedOptionId:void 0)("aria-orientation","horizontal")("data-pc-section","container"),u(2),p("ngForOf",t.value),u(),p("ngClass",b(29,Ce,t.showClear&&!t.disabled)),C("data-pc-section","inputToken"),u(),k(t.inputStyleClass),p("disabled",t.disabled||t.isMaxedOut)("ngStyle",t.inputStyle)("autofocus",t.autofocus),C("id",t.inputId)("maxlength",t.maxLength)("placeholder",t.value&&t.value.length?null:t.placeholder)("tabindex",t.tabindex),u(2),p("ngIf",t.value!=null&&t.filled&&!t.disabled&&t.showClear))},dependencies:[Y,G,H,W,X,J,re,T,ae,oe,pe,le,ue,ce],encapsulation:2,changeDetection:0})}return e})(),ui=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=L({type:e});static \u0275inj=F({imports:[me,T,T]})}return e})();export{me as a,ui as b};
