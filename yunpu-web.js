let R=0,S=`string`,N=1,U=`Object`,P=`utf-8`,M=null,O=`undefined`,Z=61,W=4,T=`function`,K=128,J=Array,Q=Error,V=FinalizationRegistry,X=Object,_=Object.getPrototypeOf,Y=Promise,L=undefined;var D=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==M){return `${a}`};if(b==S){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==M){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==S&&b.length>R){return `Function(${b})`}else{return `Function`}};if(J.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=l(a[R])};for(let d=N;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>N){d=c[N]}else{return toString.call(a)};if(d==U){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return U}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var F=((a,b)=>{});var B=((b,c,d,f)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h604398164a6aa410(b,c,e(d),e(f))});var z=((a,b)=>{a=a>>>R;const c=r();const d=[];for(let e=a;e<a+ W*b;e+=W){d.push(g(c.getUint32(e,!0)))};return d});var y=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he6f75320e13b1e89(c,d,x(e))}finally{b[w++]=L}});var g=(a=>{const b=c(a);f(a);return b});var e=(a=>{if(d===b.length)b.push(b.length+ N);const c=d;d=b[c];b[c]=a;return c});var r=(()=>{if(q===M||q.buffer.detached===!0||q.buffer.detached===L&&q.buffer!==a.memory.buffer){q=new DataView(a.memory.buffer)};return q});var u=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hca1aff903f8bf857(b,c,e(d))});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(e(b))}}var j=(()=>{if(i===M||i.byteLength===R){i=new Uint8Array(a.memory.buffer)};return i});var C=(a=>a===L||a===M);var c=(a=>b[a]);var I=(async(b)=>{if(a!==L)return a;if(typeof b!==O&&_(b)===X.prototype)({module_or_path:b}=b);else console.warn(`using deprecated parameters for the initialization function; pass a single object instead`);if(typeof b===O){b=new URL(`yunpu-web_bg.wasm`,import.meta.url)};const c=E();if(typeof b===S||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var H=(b=>{if(a!==L)return a;if(typeof b!==O&&_(b)===X.prototype)({module:b}=b);else console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`);const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return e(b)});b.wbg.__wbg_instanceof_HtmlScriptElement_3e35a0a4cf4fea29=(a=>{let b;try{b=c(a) instanceof HTMLScriptElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_type_bc6908e9b5ed4300=((b,d)=>{const e=c(d).type;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});b.wbg.__wbg_is_009b1ef508712fda=((a,b)=>{const d=X.is(c(a),c(b));return d});b.wbg.__wbg_preventDefault_c55d86c27b2dfa6e=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_dd0d50059627b362=(a=>{c(a).stopPropagation()});b.wbg.__wbg_clientX_3967ecd5e962e1b2=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_body_b3bb488e8e54bf4b=(a=>{const b=c(a).body;return C(b)?R:e(b)});b.wbg.__wbg_setclassName_972f4bd6262f9c17=((a,b,d)=>{c(a).className=k(b,d)});b.wbg.__wbg_clientWidth_e73e836a6257fbe5=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_document_8554450897a855b9=(a=>{const b=c(a).document;return C(b)?R:e(b)});b.wbg.__wbg_target_b7cb1739bee70928=(a=>{const b=c(a).target;return C(b)?R:e(b)});b.wbg.__wbg_instanceof_HtmlInputElement_88bf515ab1d9511d=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_checked_1502c0098821afb3=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_touches_91ecfe75e4e0bff0=(a=>{const b=c(a).touches;return e(b)});b.wbg.__wbg_get_6bee5bc8192fd59e=((a,b)=>{const d=c(a)[b>>>R];return C(d)?R:e(d)});b.wbg.__wbg_clientX_6ea27dc5cef626dd=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_value_d4a95e7a0d390578=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==N){b.a=R;return !0};const c=!1;return c});b.wbg.__wbg_head_6c6317d70f23ff16=(a=>{const b=c(a).head;return C(b)?R:e(b)});b.wbg.__wbg_settextContent_cd38ea7d4e0f7260=((a,b,d)=>{c(a).textContent=b===R?L:k(b,d)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Q();return e(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,N)}});b.wbg.__wbg_call_89af060b4e1523f2=function(){return A(((a,b,d)=>{const f=c(a).call(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_set_eacc7d73fefaafdf=function(){return A(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbg_self_3093d5d1f7bcb682=function(){return A((()=>{const a=self.self;return e(a)}),arguments)};b.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return A((()=>{const a=window.window;return e(a)}),arguments)};b.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return A((()=>{const a=globalThis.globalThis;return e(a)}),arguments)};b.wbg.__wbg_global_e5a3fe56f8be9485=function(){return A((()=>{const a=global.global;return e(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===L;return b});b.wbg.__wbg_newnoargs_76313bd6ff35d0f2=((a,b)=>{const c=new Function(k(a,b));return e(c)});b.wbg.__wbg_call_1084a111329e68ce=function(){return A(((a,b)=>{const d=c(a).call(c(b));return e(d)}),arguments)};b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(k(a,b))});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbg_queueMicrotask_48421b3cc9052b68=(a=>{const b=c(a).queueMicrotask;return e(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_resolve_570458cb99d56a43=(a=>{const b=Y.resolve(c(a));return e(b)});b.wbg.__wbg_then_95e6edc0f89b73b1=((a,b)=>{const d=c(a).then(c(b));return e(d)});b.wbg.__wbg_queueMicrotask_12a30234db4045d3=(a=>{queueMicrotask(c(a))});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return e(c)});b.wbg.__wbg_error_f02f3d66b42c6251=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_warn_60924fcf321399f0=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbg_info_123d8c35ec14384a=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_log_22aecf4cc2edc319=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_debug_d7780810b3a93632=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_localStorage_90db5cb66e840248=function(){return A((a=>{const b=c(a).localStorage;return C(b)?R:e(b)}),arguments)};b.wbg.__wbg_createElement_5921e9eb06b9ec89=function(){return A(((a,b,d)=>{const f=c(a).createElement(k(b,d));return e(f)}),arguments)};b.wbg.__wbg_createElementNS_78308ee7091c53f7=function(){return A(((a,b,d,f,g)=>{const h=c(a).createElementNS(b===R?L:k(b,d),k(f,g));return e(h)}),arguments)};b.wbg.__wbg_namespaceURI_d27c7f3638dd2926=((b,d)=>{const e=c(d).namespaceURI;var f=C(e)?R:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbg_tagName_aa7b2a5952fa5078=((b,d)=>{const e=c(d).tagName;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbg_closest_8c278d97cc81e7f0=function(){return A(((a,b,d)=>{const f=c(a).closest(k(b,d));return C(f)?R:e(f)}),arguments)};b.wbg.__wbg_getAttribute_e867e037f066c410=((b,d,e,f)=>{const g=c(d).getAttribute(k(e,f));var h=C(g)?R:p(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=m;r().setInt32(b+ W*N,i,!0);r().setInt32(b+ W*R,h,!0)});b.wbg.__wbg_setAttribute_d5540a19be09f8dc=function(){return A(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_addEventListener_e167f012cbedfa4e=function(){return A(((a,b,d,e)=>{c(a).addEventListener(k(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_b6cef5ad085bea8f=function(){return A(((a,b,d,e)=>{c(a).removeEventListener(k(b,d),c(e))}),arguments)};b.wbg.__wbg_text_c871a5821b728325=function(){return A(((b,d)=>{const e=c(d).text;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)}),arguments)};b.wbg.__wbg_nodeType_ba9a4a7c110396c8=(a=>{const b=c(a).nodeType;return b});b.wbg.__wbg_textContent_a049d1ce093c3d21=((b,d)=>{const e=c(d).textContent;var f=C(e)?R:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbg_appendChild_ac45d1abddf1b89b=function(){return A(((a,b)=>{const d=c(a).appendChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_cloneNode_629a1b180e91c467=function(){return A((a=>{const b=c(a).cloneNode();return e(b)}),arguments)};b.wbg.__wbg_removeChild_139b30d19f579e41=function(){return A(((a,b)=>{const d=c(a).removeChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_createObjectURL_ca544150f40fb1bf=function(){return A(((b,d)=>{const e=URL.createObjectURL(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)}),arguments)};b.wbg.__wbg_revokeObjectURL_b9b370890a354a9f=function(){return A(((a,b)=>{URL.revokeObjectURL(k(a,b))}),arguments)};b.wbg.__wbg_instanceof_Window_5012736c80a01584=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_cloneNode_6aee15a370b0878f=function(){return A(((a,b)=>{const d=c(a).cloneNode(b!==R);return e(d)}),arguments)};b.wbg.__wbg_setinnerHTML_ea7e3c6a3c4790c6=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_childNodes_031aa96d5e3d21b0=(a=>{const b=c(a).childNodes;return e(b)});b.wbg.__wbg_from_0791d740a9d37830=(a=>{const b=J.from(c(a));return e(b)});b.wbg.__wbg_length_ae22078168b726f5=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_3baa728f9d58d3f6=((a,b)=>{const d=c(a)[b>>>R];return e(d)});b.wbg.__wbg_insertBefore_5830cdd4d29c3830=function(){return A(((a,b,d)=>{const f=c(a).insertBefore(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=z(b,c).slice();a.__wbindgen_free(b,c*W,W);console.error(...d)});b.wbg.__wbg_remove_81fdfdc9088ee033=(a=>{c(a).remove()});b.wbg.__wbg_setvalue_5b6537234b7d08ee=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_setchecked_345b234187620be5=((a,b)=>{c(a).checked=b!==R});b.wbg.__wbg_setvalue_688819688274bec0=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_value_2bde81aca5570118=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*N,g,!0);r().setInt32(b+ W*R,f,!0)});b.wbg.__wbg_nextSibling_f6396d6fd0b97830=(a=>{const b=c(a).nextSibling;return C(b)?R:e(b)});b.wbg.__wbg_createTextNode_8bce33cf33bf8f6e=((a,b,d)=>{const f=c(a).createTextNode(k(b,d));return e(f)});b.wbg.__wbg_setnodeValue_5e8ffb02184e8759=((a,b,d)=>{c(a).nodeValue=b===R?L:k(b,d)});b.wbg.__wbg_instanceof_Element_cc034878d52a64fa=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_length_4919f4a62b9b1e94=(a=>{const b=c(a).length;return b});b.wbg.__wbg_firstChild_54c322fd0b819861=(a=>{const b=c(a).firstChild;return C(b)?R:e(b)});b.wbg.__wbg_parentElement_fbf8d048e797326d=(a=>{const b=c(a).parentElement;return C(b)?R:e(b)});b.wbg.__wbg_parentNode_3e06cf96d7693d57=(a=>{const b=c(a).parentNode;return C(b)?R:e(b)});b.wbg.__wbg_instanceof_ShadowRoot_72d8e783f8e0093c=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_fdfe1258b06fe937=(a=>{const b=c(a).host;return e(b)});b.wbg.__wbg_new_525245e2b9901204=(()=>{const a=new X();return e(a)});b.wbg.__wbg_setcapture_4818ebe9ef88b2f6=((a,b)=>{c(a).capture=b!==R});b.wbg.__wbg_setpassive_70ce6704aec553f6=((a,b)=>{c(a).passive=b!==R});b.wbg.__wbg_addEventListener_14b036ff7cb8747c=function(){return A(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_composedPath_d1052062308beae5=(a=>{const b=c(a).composedPath();return e(b)});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r().setInt32(a+ W*N,C(d)?R:d,!0);r().setInt32(a+ W*R,!C(d),!0)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r().setInt32(a+ W*N,C(d)?R:d,!0);r().setInt32(a+ W*R,!C(d),!0)});b.wbg.__wbg_bubbles_e9828bf0dd0393c5=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>R});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>R});b.wbg.__wbg_cancelBubble_0374b329f66f59b5=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r().setInt32(a+ W*N,C(d)?R:d,!0);r().setInt32(a+ W*R,!C(d),!0)});b.wbg.__wbg_removeAttribute_c80e298b60689065=function(){return A(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>R});b.wbg.__wbg_error_09480e4aadca50ad=(a=>{console.error(c(a))});b.wbg.__wbg_lastChild_dbac041055a92098=(a=>{const b=c(a).lastChild;return C(b)?R:e(b)});b.wbg.__wbg_new_b85e72ed1bfd57f9=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=R;try{return B(d,c.b,a,b)}finally{c.a=d}};const f=new Y(d);return e(f)}finally{c.a=c.b=R}});b.wbg.__wbg_then_876bb3c633745cc6=((a,b,d)=>{const f=c(a).then(c(b),c(d));return e(f)});b.wbg.__wbg_instanceof_HtmlAnchorElement_7a88f0b97085fa30=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_sethref_e76addd808540f69=((a,b,d)=>{c(a).href=k(b,d)});b.wbg.__wbg_setdownload_c4a56cf2790f498a=((a,b,d)=>{c(a).download=k(b,d)});b.wbg.__wbg_style_e06c9e03355741e9=(a=>{const b=c(a).style;return e(b)});b.wbg.__wbg_setProperty_ff389e5a7fb9910e=function(){return A(((a,b,d,e,f)=>{c(a).setProperty(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_click_025eb185eb16f006=(a=>{c(a).click()});b.wbg.__wbg_remove_5b68b70c39041e2a=(a=>{c(a).remove()});b.wbg.__wbg_settype_b6ab7b74bd1908a1=((a,b,d)=>{c(a).type=k(b,d)});b.wbg.__wbg_of_4a1c869ef05b4b73=(a=>{const b=J.of(c(a));return e(b)});b.wbg.__wbg_newwithstrsequenceandoptions_f700d764298e22da=function(){return A(((a,b)=>{const d=new Blob(c(a),c(b));return e(d)}),arguments)};b.wbg.__wbg_open_43b3c6577af2a808=function(){return A(((a,b,d,f,g)=>{const h=c(a).open(k(b,d),k(f,g));return C(h)?R:e(h)}),arguments)};b.wbg.__wbg_getItem_cab39762abab3e70=function(){return A(((b,d,e,f)=>{const g=c(d).getItem(k(e,f));var h=C(g)?R:p(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=m;r().setInt32(b+ W*N,i,!0);r().setInt32(b+ W*R,h,!0)}),arguments)};b.wbg.__wbg_setItem_9482185c870abba6=function(){return A(((a,b,d,e,f)=>{c(a).setItem(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_setselectedIndex_01de9b856158e747=((a,b)=>{c(a).selectedIndex=b});b.wbg.__wbg_ctrlKey_957c6c31b62b4550=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_metaKey_be0158b14b1cef4a=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_shiftKey_8c0f9a5ca3ff8f93=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_instanceof_HtmlSelectElement_c54017bd3db58d85=(a=>{let b;try{b=c(a) instanceof HTMLSelectElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_selectedIndex_5b1e2ae27f2919fb=(a=>{const b=c(a).selectedIndex;return b});b.wbg.__wbg_time_a9055abac429ae39=((a,b)=>{console.time(k(a,b))});b.wbg.__wbg_timeEnd_6312aef95ba5ec58=((a,b)=>{console.timeEnd(k(a,b))});b.wbg.__wbg_createOrUpdateChart_6cbe8faeb3e36554=((a,b,d,f)=>{const g=yunpuChart.createOrUpdateChart(c(a),k(b,d),f!==R);return e(g)});b.wbg.__wbindgen_closure_wrapper696=((a,b,c)=>{const d=t(a,b,Z,u);return e(d)});b.wbg.__wbindgen_closure_wrapper714=((a,b,c)=>{const d=t(a,b,Z,u);return e(d)});b.wbg.__wbindgen_closure_wrapper2388=((a,b,c)=>{const d=t(a,b,Z,u);return e(d)});b.wbg.__wbindgen_closure_wrapper3373=((a,b,c)=>{const d=v(a,b,Z,y);return e(d)});return b});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:N,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=R;s.unregister(f)}}};g.original=f;s.register(g,f,f);return g});var f=(a=>{if(a<132)return;b[a]=d;d=a});var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;q=M;i=M;a.__wbindgen_start();return a});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:N,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(c,f.b);s.unregister(f)}else{f.a=c}}};g.original=f;s.register(g,f,f);return g});var p=((a,b,c)=>{if(c===L){const c=n.encode(a);const d=b(c.length,N)>>>R;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,N)>>>R;const f=j();let g=R;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==R){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,N)>>>R;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written;e=c(e,d,g,N)>>>R};m=g;return e});var k=((a,b)=>{a=a>>>R;return h.decode(j().subarray(a,a+ b))});var x=(a=>{if(w==N)throw new Q(`out of js stack`);b[--w]=a;return w});let a;const b=new J(K).fill(L);b.push(L,M,!0,!1);let d=b.length;const h=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){h.decode()};let i=M;let m=R;const n=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const o=typeof n.encodeInto===T?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=M;const s=typeof V===O?{register:()=>{},unregister:()=>{}}:new V(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let w=K;export default I;export{H as initSync}