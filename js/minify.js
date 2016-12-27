!function(a){"use strict";function e(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function f(a,b){var c=document.createElement(a);return b&&(b.cName&&(c.className=b.cName),b.inner&&(c.innerHTML=b.inner),b.appendTo&&b.appendTo.appendChild(c)),c}function g(){this.slides=document.querySelectorAll(".slide"),this.slides=[].slice.call(this.slides),this.currentSlide=0,classie.add(this.getCurrentSlide(),"current-slide");var a=[].slice.call(document.querySelectorAll(".slide-trigger")),b=this;a.forEach(function(a){a.addEventListener("click",function(){b.moveToNextSlide()})})}function k(a,b){this.el=a,this.options=e({},this.options),e(this.options,b),this._init()}var b={animations:Modernizr.cssanimations},c={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},d=c[Modernizr.prefixed("animation")];g.prototype.getCurrentSlide=function(){return this.slides[this.currentSlide]};var h=function(){this.removeEventListener(d,h),classie.remove(j.getCurrentSlide(),"current-slide"),j.currentSlide++,classie.add(j.getCurrentSlide(),"current-slide"),j.getCurrentSlide().addEventListener(d,i),classie.add(j.getCurrentSlide(),"slideInRight")},i=function(){this.removeEventListener(d,i)};g.prototype.moveToNextSlide=function(){this.getCurrentSlide().addEventListener(d,h),classie.add(this.getCurrentSlide(),"slideOutLeft")};var j=new g;k.prototype.options={ctrlProgress:!0,ctrlNavDots:!0,ctrlNavPosition:!0,ctrlContinue:!0,onReview:function(){return!1}},k.prototype._init=function(){this.formEl=this.el.querySelector("form"),this.fieldsList=this.formEl.querySelector("ol.fs-fields"),this.current=0,this.fields=[].slice.call(this.fieldsList.children),this.fieldsCount=this.fields.length,classie.add(this.fields[this.current],"fs-current"),this._addControls(),this._addErrorMsg(),this._initEvents()},k.prototype._addControls=function(){if(this.ctrls=f("div",{cName:"fs-controls",appendTo:this.el}),this.options.ctrlContinue&&(this.ctrlContinue=f("button",{cName:"fs-continue",inner:"Continue",appendTo:this.ctrls}),this._showCtrl(this.ctrlContinue)),this.options.ctrlNavDots){this.ctrlNav=f("nav",{cName:"fs-nav-dots",appendTo:this.ctrls});for(var a="",b=0;b<this.fieldsCount;++b)a+=b===this.current?'<button class="fs-dot-current"></button>':"<button disabled></button>";this.ctrlNav.innerHTML=a,this._showCtrl(this.ctrlNav),this.ctrlNavDots=[].slice.call(this.ctrlNav.children)}this.options.ctrlNavPosition&&(this.ctrlFldStatus=this.el.querySelector(".fs-numbers"),this.ctrlFldStatusCurr=this.ctrlFldStatus.querySelector(".fs-number-current"),this.ctrlFldStatusCurr.innerHTML=Number(this.current+1),this.ctrlFldStatusTotal=this.ctrlFldStatus.querySelector(".fs-number-total"),this.ctrlFldStatusTotal.innerHTML=this.fieldsCount,this._showCtrl(this.ctrlFldStatus)),this.options.ctrlProgress&&(this.ctrlProgress=f("div",{cName:"fs-progress",appendTo:this.ctrls}),this._showCtrl(this.ctrlProgress))},k.prototype._addErrorMsg=function(){this.msgError=f("span",{cName:"fs-message-error",appendTo:this.el})},k.prototype._initEvents=function(){var a=this;this.options.ctrlContinue&&this.ctrlContinue.addEventListener("click",function(){a._nextField()}),this.options.ctrlNavDots&&this.ctrlNavDots.forEach(function(b,c){b.addEventListener("click",function(){a._showField(c)})}),this.fields.forEach(function(b){if(b.hasAttribute("data-input-trigger")){var c=b.querySelector('input[type="radio"]')||b.querySelector("select");if(!c)return;switch(c.tagName.toLowerCase()){case"select":c.addEventListener("change",function(){a._nextField()});break;case"input":[].slice.call(b.querySelectorAll('input[type="radio"]')).forEach(function(b){b.addEventListener("change",function(b){a._nextField()})})}}}),document.addEventListener("keydown",function(b){if(!a.isLastStep&&"textarea"!==b.target.tagName.toLowerCase()){var c=b.keyCode||b.which;13===c&&(b.preventDefault(),a._nextField())}})},k.prototype._nextField=function(a){if(this.isLastStep||!this._validade()||this.isAnimating)return!1;this.isAnimating=!0,this.isLastStep=this.current===this.fieldsCount-1&&void 0===a,this._clearError();var c=this.fields[this.current];if(this.navdir=void 0!==a&&a<this.current?"prev":"next",this.current=void 0!==a?a:this.current+1,void 0===a&&(this._progress(),this.farthest=this.current),classie.add(this.fieldsList,"fs-display-"+this.navdir),classie.remove(c,"fs-current"),classie.add(c,"fs-hide"),!this.isLastStep){this._updateNav(),this._updateFieldNumber();var e=this.fields[this.current];classie.add(e,"fs-current"),classie.add(e,"fs-show")}var f=this,g=function(a){b.animations&&this.removeEventListener(d,g),classie.remove(f.fieldsList,"fs-display-"+f.navdir),classie.remove(c,"fs-hide"),f.isLastStep?(f.options.onReview(),j.moveToNextSlide()):(classie.remove(e,"fs-show"),f.options.ctrlNavPosition&&(f.ctrlFldStatusCurr.innerHTML=f.ctrlFldStatusNew.innerHTML,classie.remove(f.ctrlFldStatus,"fs-show-"+f.navdir))),f.isAnimating=!1};b.animations?"next"===this.navdir?this.isLastStep?c.querySelector(".fs-anim-upper").addEventListener(d,g):e.querySelector(".fs-anim-lower").addEventListener(d,g):e.querySelector(".fs-anim-upper").addEventListener(d,g):g()},k.prototype._showField=function(a){return!(a===this.current||a<0||a>this.fieldsCount-1)&&void this._nextField(a)},k.prototype._updateFieldNumber=function(){if(this.options.ctrlNavPosition){this.ctrlFldStatusNew=document.createElement("span"),this.ctrlFldStatusNew.className="fs-number-new",this.ctrlFldStatusNew.innerHTML=Number(this.current+1);var a=this;setTimeout(function(){classie.add(a.ctrlFldStatus,"next"===a.navdir?"fs-show-next":"fs-show-prev")},25)}},k.prototype._progress=function(){this.options.ctrlProgress&&(this.ctrlProgress.style.width=this.current*(100/this.fieldsCount)+"%")},k.prototype._updateNav=function(){this.options.ctrlNavDots&&(classie.remove(this.ctrlNav.querySelector("button.fs-dot-current"),"fs-dot-current"),classie.add(this.ctrlNavDots[this.current],"fs-dot-current"),this.ctrlNavDots[this.current].disabled=!1)},k.prototype._showCtrl=function(a){classie.add(a,"fs-show")},k.prototype._hideCtrl=function(a){classie.remove(a,"fs-show")},k.prototype._validade=function(){var c,a=this.fields[this.current],b=a.querySelector("input[required]")||a.querySelector("textarea[required]")||a.querySelector("select[required]");if(!b)return!0;switch(b.tagName.toLowerCase()){case"input":if("radio"===b.type||"checkbox"===b.type){var d=0;[].slice.call(a.querySelectorAll('input[type="'+b.type+'"]')).forEach(function(a){a.checked&&++d}),d||(c="NOVAL")}else""===b.value&&(c="NOVAL");break;case"select":""!==b.value&&"-1"!==b.value||(c="NOVAL");break;case"textarea":""===b.value&&(c="NOVAL")}return void 0==c||(this._showError(c),!1)},k.prototype._showError=function(a){var b="";switch(a){case"NOVAL":b="Please fill the field before continuing";break;case"INVALIDEMAIL":b="Please fill a valid email address"}this.msgError.innerHTML=b,this._showCtrl(this.msgError)},k.prototype._clearError=function(){this._hideCtrl(this.msgError)},a.FForm=k}(window);
