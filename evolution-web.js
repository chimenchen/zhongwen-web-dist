let Q=0,R=`string`,M=1,T=`Object`,O=`utf-8`,L=null,N=`undefined`,X=285,V=4,S=`function`,J=128,I=Array,P=Error,U=FinalizationRegistry,W=Object,Y=Object.getPrototypeOf,K=undefined;var C=(async(a,b)=>{if(typeof Response===S&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===S){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==L){return `${a}`};if(b==R){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==L){return `Symbol`}else{return `Symbol(${b})`}};if(b==S){const b=a.name;if(typeof b==R&&b.length>Q){return `Function(${b})`}else{return `Function`}};if(I.isArray(a)){const b=a.length;let c=`[`;if(b>Q){c+=l(a[Q])};for(let d=M;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>M){d=c[M]}else{return toString.call(a)};if(d==T){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return T}};if(a instanceof P){return `${a.name}: ${a.message}\n${a.stack}`};return d});var E=((a,b)=>{});var z=((a,b)=>{a=a>>>Q;const c=r();const d=[];for(let e=a;e<a+ V*b;e+=V){d.push(g(c.getUint32(e,!0)))};return d});var y=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h27b54feebe866549(c,d,x(e))}finally{b[w++]=K}});var u=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he772822816516664(b,c,e(d))});var g=(a=>{const b=c(a);f(a);return b});var e=(a=>{if(d===b.length)b.push(b.length+ M);const c=d;d=b[c];b[c]=a;return c});var r=(()=>{if(q===L||q.buffer.detached===!0||q.buffer.detached===K&&q.buffer!==a.memory.buffer){q=new DataView(a.memory.buffer)};return q});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(e(b))}}var j=(()=>{if(i===L||i.byteLength===Q){i=new Uint8Array(a.memory.buffer)};return i});var B=(a=>a===K||a===L);var c=(a=>b[a]);var H=(async(b)=>{if(a!==K)return a;if(typeof b!==N&&Y(b)===W.prototype)({module_or_path:b}=b);else console.warn(`using deprecated parameters for the initialization function; pass a single object instead`);if(typeof b===N){b=new URL(`evolution-web_bg.wasm`,import.meta.url)};const c=D();if(typeof b===R||typeof Request===S&&b instanceof Request||typeof URL===S&&b instanceof URL){b=fetch(b)};E(c);const {instance:d,module:e}=await C(await b,c);return F(d,e)});var G=(b=>{if(a!==K)return a;if(typeof b!==N&&Y(b)===W.prototype)({module:b}=b);else console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`);const c=D();E(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return F(d,b)});var D=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return e(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});b.wbg.__wbg_eval_6e4fc17d87772f52=function(){return A(((a,b)=>{const c=eval(k(a,b));return e(c)}),arguments)};b.wbg.__wbg_init_c4652b42d1025d37=(a=>{const b=echarts.init(c(a));return e(b)});b.wbg.__wbg_new_525245e2b9901204=(()=>{const a=new W();return e(a)});b.wbg.__wbg_new_a220cf903aa02ca2=(()=>{const a=new I();return e(a)});b.wbg.__wbg_set_841ac57cff3d672b=((a,b,d)=>{c(a)[g(b)]=g(d)});b.wbg.__wbg_set_673dda6c73d19609=((a,b,d)=>{c(a)[b>>>Q]=g(d)});b.wbg.__wbindgen_number_new=(a=>{const b=a;return e(b)});b.wbg.__wbg_setOption_e77ba2c43d0b531e=((a,b)=>{c(a).setOption(g(b))});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return e(c)});b.wbg.__wbg_error_09480e4aadca50ad=(a=>{console.error(c(a))});b.wbg.__wbg_body_b3bb488e8e54bf4b=(a=>{const b=c(a).body;return B(b)?Q:e(b)});b.wbg.__wbg_lastChild_dbac041055a92098=(a=>{const b=c(a).lastChild;return B(b)?Q:e(b)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new P();return e(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ V*M,g,!0);r().setInt32(b+ V*Q,f,!0)});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,M)}});b.wbg.__wbindgen_bigint_from_u64=(a=>{const b=BigInt.asUintN(64,a);return e(b)});b.wbg.__wbg_target_b7cb1739bee70928=(a=>{const b=c(a).target;return B(b)?Q:e(b)});b.wbg.__wbg_value_d4a95e7a0d390578=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ V*M,g,!0);r().setInt32(b+ V*Q,f,!0)});b.wbg.__wbg_checked_1502c0098821afb3=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_is_009b1ef508712fda=((a,b)=>{const d=W.is(c(a),c(b));return d});b.wbg.__wbg_instanceof_Window_5012736c80a01584=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_8554450897a855b9=(a=>{const b=c(a).document;return B(b)?Q:e(b)});b.wbg.__wbg_set_eacc7d73fefaafdf=function(){return A(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbg_self_3093d5d1f7bcb682=function(){return A((()=>{const a=self.self;return e(a)}),arguments)};b.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return A((()=>{const a=window.window;return e(a)}),arguments)};b.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return A((()=>{const a=globalThis.globalThis;return e(a)}),arguments)};b.wbg.__wbg_global_e5a3fe56f8be9485=function(){return A((()=>{const a=global.global;return e(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===K;return b});b.wbg.__wbg_newnoargs_76313bd6ff35d0f2=((a,b)=>{const c=new Function(k(a,b));return e(c)});b.wbg.__wbg_call_1084a111329e68ce=function(){return A(((a,b)=>{const d=c(a).call(c(b));return e(d)}),arguments)};b.wbg.__wbindgen_throw=((a,b)=>{throw new P(k(a,b))});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ V*M,g,!0);r().setInt32(b+ V*Q,f,!0)});b.wbg.__wbg_queueMicrotask_48421b3cc9052b68=(a=>{const b=c(a).queueMicrotask;return e(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===S;return b});b.wbg.__wbg_resolve_570458cb99d56a43=(a=>{const b=Promise.resolve(c(a));return e(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==M){b.a=Q;return !0};const c=!1;return c});b.wbg.__wbg_then_95e6edc0f89b73b1=((a,b)=>{const d=c(a).then(c(b));return e(d)});b.wbg.__wbg_queueMicrotask_12a30234db4045d3=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_error_f02f3d66b42c6251=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_warn_60924fcf321399f0=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbg_info_123d8c35ec14384a=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_log_22aecf4cc2edc319=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_debug_d7780810b3a93632=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_createElement_5921e9eb06b9ec89=function(){return A(((a,b,d)=>{const f=c(a).createElement(k(b,d));return e(f)}),arguments)};b.wbg.__wbg_createElementNS_78308ee7091c53f7=function(){return A(((a,b,d,f,g)=>{const h=c(a).createElementNS(b===Q?K:k(b,d),k(f,g));return e(h)}),arguments)};b.wbg.__wbg_namespaceURI_d27c7f3638dd2926=((b,d)=>{const e=c(d).namespaceURI;var f=B(e)?Q:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r().setInt32(b+ V*M,g,!0);r().setInt32(b+ V*Q,f,!0)});b.wbg.__wbg_cloneNode_629a1b180e91c467=function(){return A((a=>{const b=c(a).cloneNode();return e(b)}),arguments)};b.wbg.__wbg_removeChild_139b30d19f579e41=function(){return A(((a,b)=>{const d=c(a).removeChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_nextSibling_f6396d6fd0b97830=(a=>{const b=c(a).nextSibling;return B(b)?Q:e(b)});b.wbg.__wbg_insertBefore_5830cdd4d29c3830=function(){return A(((a,b,d)=>{const f=c(a).insertBefore(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=z(b,c).slice();a.__wbindgen_free(b,c*V,V);console.error(...d)});b.wbg.__wbg_setchecked_345b234187620be5=((a,b)=>{c(a).checked=b!==Q});b.wbg.__wbg_setvalue_688819688274bec0=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_setvalue_5b6537234b7d08ee=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_value_2bde81aca5570118=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r().setInt32(b+ V*M,g,!0);r().setInt32(b+ V*Q,f,!0)});b.wbg.__wbg_createTextNode_8bce33cf33bf8f6e=((a,b,d)=>{const f=c(a).createTextNode(k(b,d));return e(f)});b.wbg.__wbg_setnodeValue_5e8ffb02184e8759=((a,b,d)=>{c(a).nodeValue=b===Q?K:k(b,d)});b.wbg.__wbg_setAttribute_d5540a19be09f8dc=function(){return A(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_removeAttribute_c80e298b60689065=function(){return A(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_parentElement_fbf8d048e797326d=(a=>{const b=c(a).parentElement;return B(b)?Q:e(b)});b.wbg.__wbg_parentNode_3e06cf96d7693d57=(a=>{const b=c(a).parentNode;return B(b)?Q:e(b)});b.wbg.__wbg_instanceof_ShadowRoot_72d8e783f8e0093c=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_fdfe1258b06fe937=(a=>{const b=c(a).host;return e(b)});b.wbg.__wbg_setcapture_4818ebe9ef88b2f6=((a,b)=>{c(a).capture=b!==Q});b.wbg.__wbg_setpassive_70ce6704aec553f6=((a,b)=>{c(a).passive=b!==Q});b.wbg.__wbg_addEventListener_14b036ff7cb8747c=function(){return A(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_composedPath_d1052062308beae5=(a=>{const b=c(a).composedPath();return e(b)});b.wbg.__wbg_length_ae22078168b726f5=(a=>{const b=c(a).length;return b});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r().setInt32(a+ V*M,B(d)?Q:d,!0);r().setInt32(a+ V*Q,!B(d),!0)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r().setInt32(a+ V*M,B(d)?Q:d,!0);r().setInt32(a+ V*Q,!B(d),!0)});b.wbg.__wbg_get_3baa728f9d58d3f6=((a,b)=>{const d=c(a)[b>>>Q];return e(d)});b.wbg.__wbg_instanceof_Element_cc034878d52a64fa=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bubbles_e9828bf0dd0393c5=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>Q});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>Q});b.wbg.__wbg_cancelBubble_0374b329f66f59b5=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r().setInt32(a+ V*M,B(d)?Q:d,!0);r().setInt32(a+ V*Q,!B(d),!0)});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>Q});b.wbg.__wbg_setinnerHTML_ea7e3c6a3c4790c6=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_childNodes_031aa96d5e3d21b0=(a=>{const b=c(a).childNodes;return e(b)});b.wbg.__wbg_from_0791d740a9d37830=(a=>{const b=I.from(c(a));return e(b)});b.wbg.__wbindgen_closure_wrapper3364=((a,b,c)=>{const d=t(a,b,X,u);return e(d)});b.wbg.__wbindgen_closure_wrapper4280=((a,b,c)=>{const d=v(a,b,X,y);return e(d)});return b});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:M,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=Q;s.unregister(f)}}};g.original=f;s.register(g,f,f);return g});var f=(a=>{if(a<132)return;b[a]=d;d=a});var F=((b,c)=>{a=b.exports;H.__wbindgen_wasm_module=c;q=L;i=L;a.__wbindgen_start();return a});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:M,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=Q;try{return e(c,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(c,f.b);s.unregister(f)}else{f.a=c}}};g.original=f;s.register(g,f,f);return g});var p=((a,b,c)=>{if(c===K){const c=n.encode(a);const d=b(c.length,M)>>>Q;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,M)>>>Q;const f=j();let g=Q;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==Q){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,M)>>>Q;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written;e=c(e,d,g,M)>>>Q};m=g;return e});var k=((a,b)=>{a=a>>>Q;return h.decode(j().subarray(a,a+ b))});var x=(a=>{if(w==M)throw new P(`out of js stack`);b[--w]=a;return w});let a;const b=new I(J).fill(K);b.push(K,L,!0,!1);let d=b.length;const h=typeof TextDecoder!==N?new TextDecoder(O,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw P(`TextDecoder not available`)}};if(typeof TextDecoder!==N){h.decode()};let i=L;let m=Q;const n=typeof TextEncoder!==N?new TextEncoder(O):{encode:()=>{throw P(`TextEncoder not available`)}};const o=typeof n.encodeInto===S?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=L;const s=typeof U===N?{register:()=>{},unregister:()=>{}}:new U(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let w=J;export default H;export{G as initSync}