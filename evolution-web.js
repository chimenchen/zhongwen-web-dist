let Q=0,M=null,N=`undefined`,K=128,S=`string`,Y=80,R=1,U=`Object`,O=`utf-8`,W=4,T=`function`,J=Array,P=Error,V=FinalizationRegistry,X=Object,Z=Object.getPrototypeOf,L=undefined;var D=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==M){return `${a}`};if(b==S){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==M){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==S&&b.length>Q){return `Function(${b})`}else{return `Function`}};if(J.isArray(a)){const b=a.length;let c=`[`;if(b>Q){c+=l(a[Q])};for(let d=R;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>R){d=c[R]}else{return toString.call(a)};if(d==U){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return U}};if(a instanceof P){return `${a.name}: ${a.message}\n${a.stack}`};return d});var F=((a,b)=>{});var A=((a,b)=>{a=a>>>Q;const c=r();const d=[];for(let e=a;e<a+ W*b;e+=W){d.push(f(c.getUint32(e,!0)))};return d});var z=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h03028db21e8a6a36(c,d,y(e))}finally{b[x++]=L}});var u=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2d4eee4de6117dcf(b,c,k(d))});var f=(a=>{const b=c(a);e(a);return b});var k=(a=>{if(d===b.length)b.push(b.length+ R);const c=d;d=b[c];b[c]=a;return c});var r=(()=>{if(q===M||q.buffer.detached===!0||q.buffer.detached===L&&q.buffer!==a.memory.buffer){q=new DataView(a.memory.buffer)};return q});function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var i=(()=>{if(h===M||h.byteLength===Q){h=new Uint8Array(a.memory.buffer)};return h});var C=(a=>a===L||a===M);var c=(a=>b[a]);var I=(async(b)=>{if(a!==L)return a;if(typeof b!==N&&Z(b)===X.prototype)({module_or_path:b}=b);else console.warn(`using deprecated parameters for the initialization function; pass a single object instead`);if(typeof b===N){b=new URL(`evolution-web_bg.wasm`,import.meta.url)};const c=E();if(typeof b===S||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var H=(b=>{if(a!==L)return a;if(typeof b!==N&&Z(b)===X.prototype)({module:b}=b);else console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`);const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbg_getItem_cab39762abab3e70=function(){return B(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=C(g)?Q:p(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=m;r().setInt32(b+ W*R,i,!0);r().setInt32(b+ W*Q,h,!0)}),arguments)};b.wbg.__wbg_clearTimeout_541ac0980ffcef74=(a=>{const b=clearTimeout(f(a));return k(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==R){b.a=Q;return !0};const c=!1;return c});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbg_error_09480e4aadca50ad=(a=>{console.error(c(a))});b.wbg.__wbg_body_b3bb488e8e54bf4b=(a=>{const b=c(a).body;return C(b)?Q:k(b)});b.wbg.__wbg_lastChild_dbac041055a92098=(a=>{const b=c(a).lastChild;return C(b)?Q:k(b)});b.wbg.__wbg_eval_6e4fc17d87772f52=function(){return B(((a,b)=>{const c=eval(j(a,b));return k(c)}),arguments)};b.wbg.__wbg_init_c4652b42d1025d37=(a=>{const b=echarts.init(c(a));return k(b)});b.wbg.__wbg_new_525245e2b9901204=(()=>{const a=new X();return k(a)});b.wbg.__wbg_new_a220cf903aa02ca2=(()=>{const a=new J();return k(a)});b.wbg.__wbg_set_841ac57cff3d672b=((a,b,d)=>{c(a)[f(b)]=f(d)});b.wbg.__wbg_set_673dda6c73d19609=((a,b,d)=>{c(a)[b>>>Q]=f(d)});b.wbg.__wbindgen_number_new=(a=>{const b=a;return k(b)});b.wbg.__wbg_setOption_e77ba2c43d0b531e=((a,b)=>{c(a).setOption(f(b))});b.wbg.__wbg_preventDefault_c55d86c27b2dfa6e=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_dd0d50059627b362=(a=>{c(a).stopPropagation()});b.wbg.__wbg_touches_91ecfe75e4e0bff0=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_get_6bee5bc8192fd59e=((a,b)=>{const d=c(a)[b>>>Q];return C(d)?Q:k(d)});b.wbg.__wbg_clientX_6ea27dc5cef626dd=(a=>{const b=c(a).clientX;return b});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbg_setclassName_972f4bd6262f9c17=((a,b,d)=>{c(a).className=j(b,d)});b.wbg.__wbg_clientWidth_e73e836a6257fbe5=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_document_8554450897a855b9=(a=>{const b=c(a).document;return C(b)?Q:k(b)});b.wbg.__wbg_clientX_3967ecd5e962e1b2=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_target_b7cb1739bee70928=(a=>{const b=c(a).target;return C(b)?Q:k(b)});b.wbg.__wbg_instanceof_HtmlInputElement_88bf515ab1d9511d=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_checked_1502c0098821afb3=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_value_d4a95e7a0d390578=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*R,g,!0);r().setInt32(b+ W*Q,f,!0)});b.wbg.__wbg_head_6c6317d70f23ff16=(a=>{const b=c(a).head;return C(b)?Q:k(b)});b.wbg.__wbg_settextContent_cd38ea7d4e0f7260=((a,b,d)=>{c(a).textContent=b===Q?L:j(b,d)});b.wbg.__wbg_appendChild_ac45d1abddf1b89b=function(){return B(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new P();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*R,g,!0);r().setInt32(b+ W*Q,f,!0)});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,R)}});b.wbg.__wbg_is_009b1ef508712fda=((a,b)=>{const d=X.is(c(a),c(b));return d});b.wbg.__wbindgen_bigint_from_u64=(a=>{const b=BigInt.asUintN(64,a);return k(b)});b.wbg.__wbg_instanceof_HtmlSelectElement_c54017bd3db58d85=(a=>{let b;try{b=c(a) instanceof HTMLSelectElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_selectedIndex_5b1e2ae27f2919fb=(a=>{const b=c(a).selectedIndex;return b});b.wbg.__wbg_setItem_9482185c870abba6=function(){return B(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_setTimeout_7d81d052875b0f4f=function(){return B(((a,b)=>{const d=setTimeout(c(a),b);return k(d)}),arguments)};b.wbg.__wbg_set_eacc7d73fefaafdf=function(){return B(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbg_self_3093d5d1f7bcb682=function(){return B((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return B((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return B((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_e5a3fe56f8be9485=function(){return B((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===L;return b});b.wbg.__wbg_newnoargs_76313bd6ff35d0f2=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_1084a111329e68ce=function(){return B(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbindgen_throw=((a,b)=>{throw new P(j(a,b))});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*R,g,!0);r().setInt32(b+ W*Q,f,!0)});b.wbg.__wbg_queueMicrotask_48421b3cc9052b68=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_resolve_570458cb99d56a43=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_95e6edc0f89b73b1=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_queueMicrotask_12a30234db4045d3=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_error_f02f3d66b42c6251=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_warn_60924fcf321399f0=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbg_info_123d8c35ec14384a=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_log_22aecf4cc2edc319=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_debug_d7780810b3a93632=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_localStorage_90db5cb66e840248=function(){return B((a=>{const b=c(a).localStorage;return C(b)?Q:k(b)}),arguments)};b.wbg.__wbg_createElement_5921e9eb06b9ec89=function(){return B(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_createElementNS_78308ee7091c53f7=function(){return B(((a,b,d,e,f)=>{const g=c(a).createElementNS(b===Q?L:j(b,d),j(e,f));return k(g)}),arguments)};b.wbg.__wbg_namespaceURI_d27c7f3638dd2926=((b,d)=>{const e=c(d).namespaceURI;var f=C(e)?Q:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r().setInt32(b+ W*R,g,!0);r().setInt32(b+ W*Q,f,!0)});b.wbg.__wbg_setAttribute_d5540a19be09f8dc=function(){return B(((a,b,d,e,f)=>{c(a).setAttribute(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_cloneNode_629a1b180e91c467=function(){return B((a=>{const b=c(a).cloneNode();return k(b)}),arguments)};b.wbg.__wbg_removeChild_139b30d19f579e41=function(){return B(((a,b)=>{const d=c(a).removeChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_instanceof_Window_5012736c80a01584=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_addEventListener_e167f012cbedfa4e=function(){return B(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_b6cef5ad085bea8f=function(){return B(((a,b,d,e)=>{c(a).removeEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_nextSibling_f6396d6fd0b97830=(a=>{const b=c(a).nextSibling;return C(b)?Q:k(b)});b.wbg.__wbg_insertBefore_5830cdd4d29c3830=function(){return B(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=A(b,c).slice();a.__wbindgen_free(b,c*W,W);console.error(...d)});b.wbg.__wbg_removeAttribute_c80e298b60689065=function(){return B(((a,b,d)=>{c(a).removeAttribute(j(b,d))}),arguments)};b.wbg.__wbg_setinnerHTML_ea7e3c6a3c4790c6=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_childNodes_031aa96d5e3d21b0=(a=>{const b=c(a).childNodes;return k(b)});b.wbg.__wbg_from_0791d740a9d37830=(a=>{const b=J.from(c(a));return k(b)});b.wbg.__wbg_length_ae22078168b726f5=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_3baa728f9d58d3f6=((a,b)=>{const d=c(a)[b>>>Q];return k(d)});b.wbg.__wbg_setchecked_345b234187620be5=((a,b)=>{c(a).checked=b!==Q});b.wbg.__wbg_setvalue_688819688274bec0=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_setvalue_5b6537234b7d08ee=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_value_2bde81aca5570118=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ W*R,g,!0);r().setInt32(b+ W*Q,f,!0)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>Q});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>Q});b.wbg.__wbg_parentElement_fbf8d048e797326d=(a=>{const b=c(a).parentElement;return C(b)?Q:k(b)});b.wbg.__wbg_parentNode_3e06cf96d7693d57=(a=>{const b=c(a).parentNode;return C(b)?Q:k(b)});b.wbg.__wbg_instanceof_ShadowRoot_72d8e783f8e0093c=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_fdfe1258b06fe937=(a=>{const b=c(a).host;return k(b)});b.wbg.__wbg_setcapture_4818ebe9ef88b2f6=((a,b)=>{c(a).capture=b!==Q});b.wbg.__wbg_setpassive_70ce6704aec553f6=((a,b)=>{c(a).passive=b!==Q});b.wbg.__wbg_addEventListener_14b036ff7cb8747c=function(){return B(((a,b,d,e,f)=>{c(a).addEventListener(j(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_composedPath_d1052062308beae5=(a=>{const b=c(a).composedPath();return k(b)});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r().setInt32(a+ W*R,C(d)?Q:d,!0);r().setInt32(a+ W*Q,!C(d),!0)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r().setInt32(a+ W*R,C(d)?Q:d,!0);r().setInt32(a+ W*Q,!C(d),!0)});b.wbg.__wbg_instanceof_Element_cc034878d52a64fa=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bubbles_e9828bf0dd0393c5=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>Q});b.wbg.__wbg_cancelBubble_0374b329f66f59b5=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r().setInt32(a+ W*R,C(d)?Q:d,!0);r().setInt32(a+ W*Q,!C(d),!0)});b.wbg.__wbg_createTextNode_8bce33cf33bf8f6e=((a,b,d)=>{const e=c(a).createTextNode(j(b,d));return k(e)});b.wbg.__wbg_setnodeValue_5e8ffb02184e8759=((a,b,d)=>{c(a).nodeValue=b===Q?L:j(b,d)});b.wbg.__wbindgen_closure_wrapper679=((a,b,c)=>{const d=t(a,b,Y,u);return k(d)});b.wbg.__wbindgen_closure_wrapper692=((a,b,c)=>{const d=t(a,b,Y,u);return k(d)});b.wbg.__wbindgen_closure_wrapper2504=((a,b,c)=>{const d=t(a,b,156,v);return k(d)});b.wbg.__wbindgen_closure_wrapper3943=((a,b,c)=>{const d=t(a,b,Y,u);return k(d)});b.wbg.__wbindgen_closure_wrapper4936=((a,b,c)=>{const d=w(a,b,Y,z);return k(d)});return b});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=Q;s.unregister(f)}}};g.original=f;s.register(g,f,f);return g});var v=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0d723f4198ed5773(b,c)});var e=(a=>{if(a<132)return;b[a]=d;d=a});var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;q=M;h=M;a.__wbindgen_start();return a});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=Q;try{return e(c,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(c,f.b);s.unregister(f)}else{f.a=c}}};g.original=f;s.register(g,f,f);return g});var p=((a,b,c)=>{if(c===L){const c=n.encode(a);const d=b(c.length,R)>>>Q;i().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,R)>>>Q;const f=i();let g=Q;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==Q){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,R)>>>Q;const b=i().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written;e=c(e,d,g,R)>>>Q};m=g;return e});var j=((a,b)=>{a=a>>>Q;return g.decode(i().subarray(a,a+ b))});var y=(a=>{if(x==R)throw new P(`out of js stack`);b[--x]=a;return x});let a;const b=new J(K).fill(L);b.push(L,M,!0,!1);let d=b.length;const g=typeof TextDecoder!==N?new TextDecoder(O,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw P(`TextDecoder not available`)}};if(typeof TextDecoder!==N){g.decode()};let h=M;let m=Q;const n=typeof TextEncoder!==N?new TextEncoder(O):{encode:()=>{throw P(`TextEncoder not available`)}};const o=typeof n.encodeInto===T?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=M;const s=typeof V===N?{register:()=>{},unregister:()=>{}}:new V(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let x=K;export default I;export{H as initSync}