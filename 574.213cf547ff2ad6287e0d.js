"use strict";(self.webpackChunkproduction_pr=self.webpackChunkproduction_pr||[]).push([[574],{2574:(e,n,r)=>{r.r(n),r.d(n,{default:()=>W});var a,o=r(5893),t=r(7294),i=r(6974),l=r(9704),u=r(2327),c=r(4215),s=r(5937),d=r(3913),f=r(3797),v=r(8022),p=r(3593);!function(e){e.RUB="RUB",e.EUR="EUR",e.USD="USD"}(a||(a={}));var h,C=Object.entries(a).map((function(e){return{value:e[0],content:e[1]}})),y=(0,t.memo)((function(e){var n=e.className,r=e.value,a=e.onChange,i=e.readonly,l=e.translationNamespace,c=void 0===l?p.gN:l,d=(0,u.$)(c).t,v=(0,t.useCallback)((function(e){a&&a(e)}),[a]);return(0,o.jsx)(s.Ph,{className:(0,f.A)("",{},[n]),label:d("selectCurrency"),value:r,options:C,onChange:v,readonly:i},void 0)}));!function(e){e.Russia="Russia",e.Belarus="Belarus",e.Ukraine="Ukraine",e.Kazakhstan="Kazakhstan",e.Armenia="Armenia"}(h||(h={}));var R=Object.entries(h).map((function(e){return{value:e[0],content:e[1]}})),E=(0,t.memo)((function(e){var n=e.className,r=e.value,a=e.onChange,i=e.readonly,l=e.translationNamespace,c=void 0===l?p.gN:l,d=(0,u.$)(c).t,v=(0,t.useCallback)((function(e){a&&a(e)}),[a]);return(0,o.jsx)(s.Ph,{className:(0,f.A)("",{},[n]),label:d("selectCountry"),value:r,options:R,onChange:v,readonly:i},void 0)}));const m="cH3_ZM3Y";var g,N=function(){return N=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},N.apply(this,arguments)},b=(0,t.memo)((function(e){var n,r=e.className,a=e.profileData,t=e.isLoading,i=e.error,l=e.readonly,c=e.onChangeFirstname,v=e.onChangeLastname,h=e.onChangeAge,C=e.onChangeCity,R=e.onChangeUsername,g=e.onChangeAvatar,b=e.onChangeCurrency,x=e.onChangeCountry,j=(0,u.$)(p.gN).t;if(t)return(0,o.jsx)("div",N({className:(0,f.A)(m,{},[r,"t07ZxFGs"])},{children:(0,o.jsx)(s.DP,{},void 0)}),void 0);if(i)return(0,o.jsx)("div",N({className:(0,f.A)(m,{},[r,"i5YK3SSb"])},{children:(0,o.jsx)(s.xv,{type:d.yG.ERROR,align:d.PH.CENTER,title:j("profileLoadingErrorTitle"),text:j("profileLoadingErrorDescription")},void 0)}),void 0);var O=((n={}).Agb04lu0=!l,n);return(0,o.jsx)("div",N({className:(0,f.A)(m,O,[r])},{children:(0,o.jsxs)("div",N({className:"mem1neCT"},{children:[(null==a?void 0:a.avatarUrl)&&(0,o.jsx)("div",N({className:"bEFNSahN"},{children:(0,o.jsx)(s.qE,{src:a.avatarUrl,alt:"profile image"},void 0)}),void 0),(0,o.jsx)(s.II,{value:null==a?void 0:a.firstName,placeholder:j("typeName"),readonly:l,onChange:c},void 0),(0,o.jsx)(s.II,{value:null==a?void 0:a.lastName,placeholder:j("typeLastName"),readonly:l,onChange:v},void 0),(0,o.jsx)(s.II,{value:null==a?void 0:a.age,placeholder:j("typeAge"),readonly:l,onChange:h,onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()}},void 0),(0,o.jsx)(E,{value:null==a?void 0:a.country,onChange:x,readonly:l},void 0),(0,o.jsx)(s.II,{value:null==a?void 0:a.city,placeholder:j("typeCity"),readonly:l,onChange:C},void 0),(0,o.jsx)(y,{value:null==a?void 0:a.currency,onChange:b,readonly:l},void 0),(0,o.jsx)(s.II,{value:null==a?void 0:a.avatarUrl,placeholder:j("typeAvatarUrl"),readonly:l,onChange:g},void 0),(0,o.jsx)(s.II,{value:null==a?void 0:a.username,placeholder:j("typeUsername"),readonly:l,onChange:R},void 0)]}),void 0)}),void 0)}));!function(e){e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR",e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_USER_AGE="INCORRECT_USER_AGE",e.INCORRECT_USER_CITY="INCORRECT_USER_CITY",e.INCORRECT_USERNAME="INCORRECT_USERNAME"}(g||(g={}));var x=r(7168),j=(0,x.hg)("entities/profile/fetchProfileData",(function(e,n){var r,a,o,t,i=n.extra,l=n.rejectWithValue;return r=void 0,a=void 0,t=function(){var n;return function(e,n){var r,a,o,t,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return t={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function l(t){return function(l){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(o=2&t[0]?a.return:t[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,t[1])).done)return o;switch(a=0,o&&(t=[2&t[0],o.value]),t[0]){case 0:case 1:o=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,a=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==t[0]&&2!==t[0])){i=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){i.label=t[1];break}if(6===t[0]&&i.label<o[1]){i.label=o[1],o=t;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(t);break}o[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(e,i)}catch(e){t=[6,e],a=0}finally{r=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,l])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i.api.get("/profiles/".concat(e))];case 1:if(!(n=r.sent()).data)throw new Error;return[2,n.data];case 2:return r.sent(),[2,l("error")];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{u(t.next(e))}catch(e){n(e)}}function l(e){try{u(t.throw(e))}catch(e){n(e)}}function u(n){var r;n.done?e(n.value):(r=n.value,r instanceof o?r:new o((function(e){e(r)}))).then(i,l)}u((t=t.apply(r,a||[])).next())}))})),O=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.form},A=(0,x.hg)("entities/profile/updateProfileData",(function(e,n){var r,a,o,t,i=n.extra,l=n.rejectWithValue,u=n.getState;return r=void 0,a=void 0,t=function(){var e,n,r;return function(e,n){var r,a,o,t,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return t={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function l(t){return function(l){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(o=2&t[0]?a.return:t[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,t[1])).done)return o;switch(a=0,o&&(t=[2&t[0],o.value]),t[0]){case 0:case 1:o=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,a=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==t[0]&&2!==t[0])){i=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){i.label=t[1];break}if(6===t[0]&&i.label<o[1]){i.label=o[1],o=t;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(t);break}o[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(e,i)}catch(e){t=[6,e],a=0}finally{r=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,l])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),e=O(u()),(n=function(e){var n=[];if(!e)return[g.NO_DATA];var r=e.firstName,a=e.lastName,o=e.age,t=e.city,i=e.username;return r&&a||n.push(g.INCORRECT_USER_DATA),o&&Number.isInteger(o)||n.push(g.INCORRECT_USER_AGE),t||n.push(g.INCORRECT_USER_CITY),i||n.push(g.INCORRECT_USERNAME),n}(e)).length?[2,l(n)]:[4,i.api.put("/profiles/".concat(null==e?void 0:e.id),e)];case 1:if(!(r=a.sent()).data)throw new Error;return[2,r.data];case 2:return a.sent(),[2,l([g.SERVER_ERROR])];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{u(t.next(e))}catch(e){n(e)}}function l(e){try{u(t.throw(e))}catch(e){n(e)}}function u(n){var r;n.done?e(n.value):(r=n.value,r instanceof o?r:new o((function(e){e(r)}))).then(i,l)}u((t=t.apply(r,a||[])).next())}))})),_=function(){return _=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},_.apply(this,arguments)},T=(0,x.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1},reducers:{setReadonly:function(e,n){var r=n.payload;e.readonly=r},cancelEdit:function(e){e.readonly=!0,e.form=e.data,e.validateProfileErrors=[]},updateProfileForm:function(e,n){var r=n.payload;e.form=_(_({},e.form),r)}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(j.fulfilled,(function(e,n){var r=n.payload;e.isLoading=!1,e.data=r,e.form=r})).addCase(j.rejected,(function(e,n){var r=n.payload;e.error=r,e.isLoading=!1})).addCase(A.pending,(function(e){e.validateProfileErrors=void 0,e.isLoading=!0})).addCase(A.fulfilled,(function(e,n){var r=n.payload;e.isLoading=!1,e.data=r,e.form=r,e.readonly=!0,e.validateProfileErrors=void 0})).addCase(A.rejected,(function(e,n){var r=n.payload;e.validateProfileErrors=r,e.isLoading=!1}))}}),U=T.actions,I=T.reducer,k=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.data},w=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.readonly},S=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.error},P=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.isLoading},D=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.validateProfileErrors},L=r(688),F=r(9769);var G=function(){return G=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},G.apply(this,arguments)},z=function(e){var n=e.className,r=(0,u.$)(p.gN).t,a=(0,v.TL)(),i=(0,l.v9)(L.m5),c=(0,l.v9)(k),d=(null==i?void 0:i.id)===(null==c?void 0:c.id),h=(0,l.v9)(w),C=(0,t.useCallback)((function(){a(U.setReadonly(!1))}),[a]),y=(0,t.useCallback)((function(){a(U.cancelEdit())}),[a]),R=(0,t.useCallback)((function(){a(A())}),[a]);return(0,o.jsxs)("div",G({className:(0,f.A)("NjjGzeEl",{},[n])},{children:[(0,o.jsx)(s.xv,{title:r("profile")},void 0),d&&(0,o.jsx)("div",{children:h?(0,o.jsx)(s.zx,G({variant:F.Wu.OUTLINED,onClick:C},{children:r("edit")}),void 0):(0,o.jsxs)("div",G({className:"znwzHtxT"},{children:[(0,o.jsx)(s.zx,G({variant:F.Wu.OUTLINED_DANGER,onClick:y},{children:r("cancelEdit")}),void 0),(0,o.jsx)(s.zx,G({variant:F.Wu.OUTLINED,onClick:R},{children:r("save")}),void 0)]}),void 0)},void 0)]}),void 0)};const V=(0,t.memo)(z);var Y=function(){return Y=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Y.apply(this,arguments)},M={profile:I};const W=(0,t.memo)((function(e){var n,r=e.className;(0,v.qV)(M);var a=(0,i.UO)().id,h=(0,v.TL)(),C=(0,u.$)(p.gN).t,y=(0,l.v9)(O),R=(0,l.v9)(P),E=(0,l.v9)(S),m=(0,l.v9)(D),N=(0,l.v9)(w);(0,v.QY)((function(){a&&h(j(a))}),[a]);var x=((n={})[g.NO_DATA]=C("noProfileData"),n[g.SERVER_ERROR]=C("serverError"),n[g.INCORRECT_USER_DATA]=C("incorrectUserData"),n[g.INCORRECT_USER_AGE]=C("incorrectAge"),n[g.INCORRECT_USER_CITY]=C("incorrectCity"),n[g.INCORRECT_USERNAME]=C("incorrectUsername"),n),A=(0,t.useCallback)((function(e){h(U.updateProfileForm({firstName:e}))}),[h]),_=(0,t.useCallback)((function(e){h(U.updateProfileForm({lastName:e}))}),[h]),T=(0,t.useCallback)((function(e){h(U.updateProfileForm({age:Number(e)}))}),[h]),I=(0,t.useCallback)((function(e){h(U.updateProfileForm({city:e}))}),[h]),k=(0,t.useCallback)((function(e){h(U.updateProfileForm({avatarUrl:e}))}),[h]),L=(0,t.useCallback)((function(e){h(U.updateProfileForm({username:e}))}),[h]),F=(0,t.useCallback)((function(e){h(U.updateProfileForm({currency:e}))}),[h]),G=(0,t.useCallback)((function(e){h(U.updateProfileForm({country:e}))}),[h]);return(0,o.jsxs)(c.F,Y({className:(0,f.A)("ZVb9PoYo",{},[r])},{children:[(0,o.jsx)(V,{},void 0),!!(null==m?void 0:m.length)&&m.map((function(e){return(0,o.jsx)(s.xv,{type:d.yG.ERROR,text:x[e]},e)})),(0,o.jsx)(b,{profileData:y,isLoading:R,error:E,readonly:N,onChangeFirstname:A,onChangeLastname:_,onChangeAge:T,onChangeCity:I,onChangeAvatar:k,onChangeUsername:L,onChangeCurrency:F,onChangeCountry:G},void 0)]}),void 0)}))}}]);