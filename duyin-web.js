let W=`number`,O=null,P=`undefined`,M=128,X=`string`,U=1,Y=`Object`,Q=`utf-8`,a2=161,S=0,_=4,V=`function`,L=Array,$=Date,R=Error,Z=FinalizationRegistry,a0=Object,a3=Object.getPrototypeOf,a1=Promise,T=Uint8Array,N=undefined;var F=(async(a,b)=>{if(typeof Response===V&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===V){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var s=(a=>{const b=typeof a;if(b==W||b==`boolean`||a==O){return `${a}`};if(b==X){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==O){return `Symbol`}else{return `Symbol(${b})`}};if(b==V){const b=a.name;if(typeof b==X&&b.length>S){return `Function(${b})`}else{return `Function`}};if(L.isArray(a)){const b=a.length;let c=`[`;if(b>S){c+=s(a[S])};for(let d=U;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>U){d=c[U]}else{return toString.call(a)};if(d==Y){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Y}};if(a instanceof R){return `${a.name}: ${a.message}\n${a.stack}`};return d});var v=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0a253c1298bb2042(b,c,k(d))});var H=((a,b)=>{});var C=((a,b)=>{a=a>>>S;const c=n();const d=[];for(let e=a;e<a+ _*b;e+=_){d.push(f(c.getUint32(e,!0)))};return d});var B=(a=>()=>{throw new R(`${a} is not defined`)});var f=(a=>{const b=c(a);e(a);return b});var k=(a=>{if(d===b.length)b.push(b.length+ U);const c=d;d=b[c];b[c]=a;return c});var n=(()=>{if(m===O||m.buffer.detached===!0||m.buffer.detached===N&&m.buffer!==a.memory.buffer){m=new DataView(a.memory.buffer)};return m});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var K=(async(b)=>{if(a!==N)return a;if(typeof b!==P&&a3(b)===a0.prototype)({module_or_path:b}=b);else console.warn(`using deprecated parameters for the initialization function; pass a single object instead`);if(typeof b===P){b=new URL(`duyin-web_bg.wasm`,import.meta.url)};const c=G();if(typeof b===X||typeof Request===V&&b instanceof Request||typeof URL===V&&b instanceof URL){b=fetch(b)};H(c);const {instance:d,module:e}=await F(await b,c);return I(d,e)});var J=(b=>{if(a!==N)return a;if(typeof b!==P&&a3(b)===a0.prototype)({module:b}=b);else console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`);const c=G();H(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return I(d,b)});var i=(()=>{if(h===O||h.byteLength===S){h=new T(a.memory.buffer)};return h});var l=(a=>a===N||a===O);var c=(a=>b[a]);var A=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hca864bfc7376372b(c,d,z(e))}finally{b[y++]=N}});var E=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h604398164a6aa410(b,c,k(d),k(e))});var G=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbg_error_09480e4aadca50ad=(a=>{console.error(c(a))});b.wbg.__wbg_espeakInit_fdef92fc2fb42079=typeof zhongwen.espeakInit==V?zhongwen.espeakInit:B(`zhongwen.espeakInit`);b.wbg.__wbg_document_8554450897a855b9=(a=>{const b=c(a).document;return l(b)?S:k(b)});b.wbg.__wbg_body_b3bb488e8e54bf4b=(a=>{const b=c(a).body;return l(b)?S:k(b)});b.wbg.__wbg_setclassName_972f4bd6262f9c17=((a,b,d)=>{c(a).className=j(b,d)});b.wbg.__wbg_lastChild_dbac041055a92098=(a=>{const b=c(a).lastChild;return l(b)?S:k(b)});b.wbg.__wbg_new0_65387337a95cf44d=(()=>{const a=new $();return k(a)});b.wbg.__wbg_getTime_91058879093a1589=(a=>{const b=c(a).getTime();return b});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new R();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=r(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=o;n().setInt32(b+ _*U,g,!0);n().setInt32(b+ _*S,f,!0)});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,U)}});b.wbg.__wbindgen_number_new=(a=>{const b=a;return k(b)});b.wbg.__wbg_new_7982fb43cfca37ae=(a=>{const b=new $(c(a));return k(b)});b.wbg.__wbg_getTimezoneOffset_c9929a3cc94500fe=(a=>{const b=c(a).getTimezoneOffset();return b});b.wbg.__wbg_addEventListener_e167f012cbedfa4e=function(){return D(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_espeakSpeakText_a519d228f1667747=((a,b)=>{zhongwen.espeakSpeakText(j(a,b))});b.wbg.__wbg_espeakStopPlay_9190815551782777=typeof zhongwen.espeakStopPlay==V?zhongwen.espeakStopPlay:B(`zhongwen.espeakStopPlay`);b.wbg.__wbg_espeakSpeakTextInTextarea_fe0eb04b21a2c73b=typeof zhongwen.espeakSpeakTextInTextarea==V?zhongwen.espeakSpeakTextInTextarea:B(`zhongwen.espeakSpeakTextInTextarea`);b.wbg.__wbg_getElementById_f56c8e6a15a6926d=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return l(e)?S:k(e)});b.wbg.__wbg_instanceof_HtmlElement_ee6cb55e6b90ae79=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_clientWidth_e73e836a6257fbe5=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_9325ebe2318ce8af=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_getBoundingClientRect_35fc4d8fa10e0463=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===W?d:N;n().setFloat64(a+ 8*U,l(e)?S:e,!0);n().setInt32(a+ _*S,!l(e),!0)});b.wbg.__wbg_left_ec3af38bed003a86=(a=>{const b=c(a).left;return b});b.wbg.__wbg_bottom_9c5a8538fdbb5e16=(a=>{const b=c(a).bottom;return b});b.wbg.__wbg_top_322638693276a225=(a=>{const b=c(a).top;return b});b.wbg.__wbg_documentElement_7c4f131d61dd61f2=(a=>{const b=c(a).documentElement;return l(b)?S:k(b)});b.wbg.__wbg_scrollWidth_a2bdee78f09b4be7=(a=>{const b=c(a).scrollWidth;return b});b.wbg.__wbg_offsetWidth_e22a06cc87eb3cb2=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_x_a79a5b516ee71e4c=(a=>{const b=c(a).x;return b});b.wbg.__wbg_y_bd4e2c0613413655=(a=>{const b=c(a).y;return b});b.wbg.__wbg_height_f270f53dbfb3a632=(a=>{const b=c(a).height;return b});b.wbg.__wbg_instanceof_Element_cc034878d52a64fa=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_scrollTop_69eca9764f0e696c=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_scrollTo_4f9fbc9e52ed6f89=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_setscrollTop_177f66fa0e816e58=((a,b)=>{c(a).scrollTop=b});b.wbg.__wbg_getFullYear_9649dddf8a157b21=(a=>{const b=c(a).getFullYear();return b});b.wbg.__wbg_getMonth_e3a0afc07cbc1328=(a=>{const b=c(a).getMonth();return b});b.wbg.__wbg_getDate_52f8a749afd35eda=(a=>{const b=c(a).getDate();return b});b.wbg.__wbg_getHours_3758479fff0cc553=(a=>{const b=c(a).getHours();return b});b.wbg.__wbg_getMinutes_9a73b3e678d5346f=(a=>{const b=c(a).getMinutes();return b});b.wbg.__wbg_getSeconds_7d2d158963b9702c=(a=>{const b=c(a).getSeconds();return b});b.wbg.__wbg_new_ea1883e1e5e86686=(a=>{const b=new T(c(a));return k(b)});b.wbg.__wbg_new_525245e2b9901204=(()=>{const a=new a0();return k(a)});b.wbg.__wbg_settype_b6ab7b74bd1908a1=((a,b,d)=>{c(a).type=j(b,d)});b.wbg.__wbg_of_4a1c869ef05b4b73=(a=>{const b=L.of(c(a));return k(b)});b.wbg.__wbg_style_e06c9e03355741e9=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_click_025eb185eb16f006=(a=>{c(a).click()});b.wbg.__wbg_removeItem_f10a84254de33054=function(){return D(((a,b,d)=>{c(a).removeItem(j(b,d))}),arguments)};b.wbg.__wbg_instanceof_HtmlTextAreaElement_75bfdd55ca1a4a97=(a=>{let b;try{b=c(a) instanceof HTMLTextAreaElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setvalue_5b6537234b7d08ee=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_focus_06621101cc79f5d8=function(){return D((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_select_dc4e5bddba91a3f3=(a=>{c(a).select()});b.wbg.__wbg_instanceof_HtmlDocument_2c1561dcd48decbc=(a=>{let b;try{b=c(a) instanceof HTMLDocument}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_execCommand_3997a230620e22d8=function(){return D(((a,b,d)=>{const e=c(a).execCommand(j(b,d));return e}),arguments)};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbg_scrollTo_19dc1dbbc8c19fa8=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_new_b85e72ed1bfd57f9=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=S;try{return E(d,c.b,a,b)}finally{c.a=d}};const e=new a1(d);return k(e)}finally{c.a=c.b=S}});b.wbg.__wbg_then_876bb3c633745cc6=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_is_009b1ef508712fda=((a,b)=>{const d=a0.is(c(a),c(b));return d});b.wbg.__wbg_target_b7cb1739bee70928=(a=>{const b=c(a).target;return l(b)?S:k(b)});b.wbg.__wbg_value_9991233a797a5fbc=((b,d)=>{const e=c(d).value;const f=r(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=o;n().setInt32(b+ _*U,g,!0);n().setInt32(b+ _*S,f,!0)});b.wbg.__wbg_checked_1502c0098821afb3=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_selectedIndex_5b1e2ae27f2919fb=(a=>{const b=c(a).selectedIndex;return b});b.wbg.__wbg_preventDefault_c55d86c27b2dfa6e=(a=>{c(a).preventDefault()});b.wbg.__wbg_value_d4a95e7a0d390578=((b,d)=>{const e=c(d).value;const f=r(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=o;n().setInt32(b+ _*U,g,!0);n().setInt32(b+ _*S,f,!0)});b.wbg.__wbg_value_2bde81aca5570118=((b,d)=>{const e=c(d).value;const f=r(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=o;n().setInt32(b+ _*U,g,!0);n().setInt32(b+ _*S,f,!0)});b.wbg.__wbg_valueAsNumber_0b67dfeba4ed4cf2=(a=>{const b=c(a).valueAsNumber;return b});b.wbg.__wbg_instanceof_Error_69bde193b0cc95e3=(a=>{let b;try{b=c(a) instanceof R}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_name_ac78212e803c7941=(a=>{const b=c(a).name;return k(b)});b.wbg.__wbg_message_e18bae0a0e2c097a=(a=>{const b=c(a).message;return k(b)});b.wbg.__wbg_toString_9d18e102ca933e68=(a=>{const b=c(a).toString();return k(b)});b.wbg.__wbg_clearTimeout_541ac0980ffcef74=(a=>{const b=clearTimeout(f(a));return k(b)});b.wbg.__wbg_setTimeout_7d81d052875b0f4f=function(){return D(((a,b)=>{const d=setTimeout(c(a),b);return k(d)}),arguments)};b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==U){b.a=S;return !0};const c=!1;return c});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbg_buffer_b7b08af79b0b0974=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9=((a,b,d)=>{const e=new T(c(a),b>>>S,d>>>S);return k(e)});b.wbg.__wbg_set_eacc7d73fefaafdf=function(){return D(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbg_self_3093d5d1f7bcb682=function(){return D((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return D((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return D((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_e5a3fe56f8be9485=function(){return D((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===N;return b});b.wbg.__wbg_newnoargs_76313bd6ff35d0f2=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_1084a111329e68ce=function(){return D(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===X?e:N;var g=l(f)?S:r(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=o;n().setInt32(b+ _*U,h,!0);n().setInt32(b+ _*S,g,!0)});b.wbg.__wbindgen_throw=((a,b)=>{throw new R(j(a,b))});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=r(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=o;n().setInt32(b+ _*U,g,!0);n().setInt32(b+ _*S,f,!0)});b.wbg.__wbg_queueMicrotask_48421b3cc9052b68=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===V;return b});b.wbg.__wbg_resolve_570458cb99d56a43=(a=>{const b=a1.resolve(c(a));return k(b)});b.wbg.__wbg_then_95e6edc0f89b73b1=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_queueMicrotask_12a30234db4045d3=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_error_f02f3d66b42c6251=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_warn_60924fcf321399f0=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbg_info_123d8c35ec14384a=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_log_22aecf4cc2edc319=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_debug_d7780810b3a93632=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_innerWidth_74051c08b26d0627=function(){return D((a=>{const b=c(a).innerWidth;return k(b)}),arguments)};b.wbg.__wbg_innerHeight_c1b7737de203a7f6=function(){return D((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_pageXOffset_0a26af338126a52a=function(){return D((a=>{const b=c(a).pageXOffset;return b}),arguments)};b.wbg.__wbg_scrollY_6c77ecd791d604dc=function(){return D((a=>{const b=c(a).scrollY;return b}),arguments)};b.wbg.__wbg_pageYOffset_817841964dd8ab76=function(){return D((a=>{const b=c(a).pageYOffset;return b}),arguments)};b.wbg.__wbg_localStorage_90db5cb66e840248=function(){return D((a=>{const b=c(a).localStorage;return l(b)?S:k(b)}),arguments)};b.wbg.__wbg_confirm_8c568ed39db7e399=function(){return D(((a,b,d)=>{const e=c(a).confirm(j(b,d));return e}),arguments)};b.wbg.__wbg_requestAnimationFrame_b4b782250b9c2c88=function(){return D(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_createElement_5921e9eb06b9ec89=function(){return D(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_createElementNS_78308ee7091c53f7=function(){return D(((a,b,d,e,f)=>{const g=c(a).createElementNS(b===S?N:j(b,d),j(e,f));return k(g)}),arguments)};b.wbg.__wbg_namespaceURI_d27c7f3638dd2926=((b,d)=>{const e=c(d).namespaceURI;var f=l(e)?S:r(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=o;n().setInt32(b+ _*U,g,!0);n().setInt32(b+ _*S,f,!0)});b.wbg.__wbg_setAttribute_d5540a19be09f8dc=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_appendChild_ac45d1abddf1b89b=function(){return D(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_cloneNode_629a1b180e91c467=function(){return D((a=>{const b=c(a).cloneNode();return k(b)}),arguments)};b.wbg.__wbg_removeChild_139b30d19f579e41=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_instanceof_Window_5012736c80a01584=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setProperty_ff389e5a7fb9910e=function(){return D(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_getItem_cab39762abab3e70=function(){return D(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=l(g)?S:r(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=o;n().setInt32(b+ _*U,i,!0);n().setInt32(b+ _*S,h,!0)}),arguments)};b.wbg.__wbg_setItem_9482185c870abba6=function(){return D(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_createObjectURL_ca544150f40fb1bf=function(){return D(((b,d)=>{const e=URL.createObjectURL(c(d));const f=r(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=o;n().setInt32(b+ _*U,g,!0);n().setInt32(b+ _*S,f,!0)}),arguments)};b.wbg.__wbg_revokeObjectURL_b9b370890a354a9f=function(){return D(((a,b)=>{URL.revokeObjectURL(j(a,b))}),arguments)};b.wbg.__wbg_newwithu8arraysequenceandoptions_c8bc456a23f02fca=function(){return D(((a,b)=>{const d=new Blob(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_nextSibling_f6396d6fd0b97830=(a=>{const b=c(a).nextSibling;return l(b)?S:k(b)});b.wbg.__wbg_insertBefore_5830cdd4d29c3830=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*_,_);console.error(...d)});b.wbg.__wbg_setinnerHTML_ea7e3c6a3c4790c6=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_childNodes_031aa96d5e3d21b0=(a=>{const b=c(a).childNodes;return k(b)});b.wbg.__wbg_from_0791d740a9d37830=(a=>{const b=L.from(c(a));return k(b)});b.wbg.__wbg_length_ae22078168b726f5=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_3baa728f9d58d3f6=((a,b)=>{const d=c(a)[b>>>S];return k(d)});b.wbg.__wbg_removeAttribute_c80e298b60689065=function(){return D(((a,b,d)=>{c(a).removeAttribute(j(b,d))}),arguments)};b.wbg.__wbg_setchecked_345b234187620be5=((a,b)=>{c(a).checked=b!==S});b.wbg.__wbg_setvalue_688819688274bec0=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>S});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>S});b.wbg.__wbg_createTextNode_8bce33cf33bf8f6e=((a,b,d)=>{const e=c(a).createTextNode(j(b,d));return k(e)});b.wbg.__wbg_setnodeValue_5e8ffb02184e8759=((a,b,d)=>{c(a).nodeValue=b===S?N:j(b,d)});b.wbg.__wbg_parentElement_fbf8d048e797326d=(a=>{const b=c(a).parentElement;return l(b)?S:k(b)});b.wbg.__wbg_parentNode_3e06cf96d7693d57=(a=>{const b=c(a).parentNode;return l(b)?S:k(b)});b.wbg.__wbg_instanceof_ShadowRoot_72d8e783f8e0093c=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_fdfe1258b06fe937=(a=>{const b=c(a).host;return k(b)});b.wbg.__wbg_setcapture_4818ebe9ef88b2f6=((a,b)=>{c(a).capture=b!==S});b.wbg.__wbg_setpassive_70ce6704aec553f6=((a,b)=>{c(a).passive=b!==S});b.wbg.__wbg_addEventListener_14b036ff7cb8747c=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(j(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_composedPath_d1052062308beae5=(a=>{const b=c(a).composedPath();return k(b)});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;n().setInt32(a+ _*U,l(d)?S:d,!0);n().setInt32(a+ _*S,!l(d),!0)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;n().setInt32(a+ _*U,l(d)?S:d,!0);n().setInt32(a+ _*S,!l(d),!0)});b.wbg.__wbg_bubbles_e9828bf0dd0393c5=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>S});b.wbg.__wbg_cancelBubble_0374b329f66f59b5=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;n().setInt32(a+ _*U,l(d)?S:d,!0);n().setInt32(a+ _*S,!l(d),!0)});b.wbg.__wbindgen_closure_wrapper1678=((a,b,c)=>{const d=u(a,b,a2,v);return k(d)});b.wbg.__wbindgen_closure_wrapper1761=((a,b,c)=>{const d=u(a,b,a2,w);return k(d)});b.wbg.__wbindgen_closure_wrapper1857=((a,b,c)=>{const d=u(a,b,a2,v);return k(d)});b.wbg.__wbindgen_closure_wrapper2256=((a,b,c)=>{const d=u(a,b,a2,w);return k(d)});b.wbg.__wbindgen_closure_wrapper4714=((a,b,c)=>{const d=x(a,b,a2,A);return k(d)});return b});var x=((b,c,d,e)=>{const f={a:b,b:c,cnt:U,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=S;t.unregister(f)}}};g.original=f;t.register(g,f,f);return g});var w=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0d723f4198ed5773(b,c)});var e=(a=>{if(a<132)return;b[a]=d;d=a});var I=((b,c)=>{a=b.exports;K.__wbindgen_wasm_module=c;m=O;h=O;a.__wbindgen_start();return a});var u=((b,c,d,e)=>{const f={a:b,b:c,cnt:U,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(c,f.b);t.unregister(f)}else{f.a=c}}};g.original=f;t.register(g,f,f);return g});var r=((a,b,c)=>{if(c===N){const c=p.encode(a);const d=b(c.length,U)>>>S;i().subarray(d,d+ c.length).set(c);o=c.length;return d};let d=a.length;let e=b(d,U)>>>S;const f=i();let g=S;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==S){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,U)>>>S;const b=i().subarray(e+ g,e+ d);const f=q(a,b);g+=f.written;e=c(e,d,g,U)>>>S};o=g;return e});var j=((a,b)=>{a=a>>>S;return g.decode(i().subarray(a,a+ b))});var z=(a=>{if(y==U)throw new R(`out of js stack`);b[--y]=a;return y});let a;const b=new L(M).fill(N);b.push(N,O,!0,!1);let d=b.length;const g=typeof TextDecoder!==P?new TextDecoder(Q,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw R(`TextDecoder not available`)}};if(typeof TextDecoder!==P){g.decode()};let h=O;let m=O;let o=S;const p=typeof TextEncoder!==P?new TextEncoder(Q):{encode:()=>{throw R(`TextEncoder not available`)}};const q=typeof p.encodeInto===V?((a,b)=>p.encodeInto(a,b)):((a,b)=>{const c=p.encode(a);b.set(c);return {read:a.length,written:c.length}});const t=typeof Z===P?{register:()=>{},unregister:()=>{}}:new Z(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let y=M;export default K;export{J as initSync}