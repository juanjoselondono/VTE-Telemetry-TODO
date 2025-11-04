"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(a,b,c){c.d(b,{EK:function(){return K},IO:function(){return hT},Xo:function(){return hY},ad:function(){return hm},ar:function(){return hV},b9:function(){return h$},cf:function(){return id},hJ:function(){return hj}});var d,e,f=c(25816),g=c(8463),h=c(53333),i=c(74444),j=c(46640),k=c(34155);let l="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class m{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}m.UNAUTHENTICATED=new m(null),m.GOOGLE_CREDENTIALS=new m("google-credentials-uid"),m.FIRST_PARTY=new m("first-party-uid"),m.MOCK_USER=new m("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let n="9.23.0",o=new h.Yd("@firebase/firestore");function p(){return o.logLevel}function q(a,...b){if(o.logLevel<=h.in.DEBUG){let c=b.map(t);o.debug(`Firestore (${n}): ${a}`,...c)}}function r(a,...b){if(o.logLevel<=h.in.ERROR){let c=b.map(t);o.error(`Firestore (${n}): ${a}`,...c)}}function s(a,...b){if(o.logLevel<=h.in.WARN){let c=b.map(t);o.warn(`Firestore (${n}): ${a}`,...c)}}function t(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function u(a="Unexpected state"){let b=`FIRESTORE (${n}) INTERNAL ASSERTION FAILED: `+a;throw r(b),Error(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends i.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class z{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(m.UNAUTHENTICATED))}shutdown(){}}class A{constructor(a){this.token=a,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(a,b){this.changeListener=b,a.enqueueRetryable(()=>b(this.token.user))}shutdown(){this.changeListener=null}}class B{constructor(a){this.t=a,this.currentUser=m.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,b){let c=this.i,d=a=>this.i!==c?(c=this.i,b(a)):Promise.resolve(),e=new x;this.o=()=>{this.i++,this.currentUser=this.u(),e.resolve(),e=new x,a.enqueueRetryable(()=>d(this.currentUser))};let f=()=>{let b=e;a.enqueueRetryable(async()=>{await b.promise,await d(this.currentUser)})},g=a=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),f()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),e.resolve(),e=new x)}},0),f()}getToken(){let a=this.i,b=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(b).then(b=>{var c;return this.i!==a?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):b?("string"==typeof b.accessToken||u(),new y(b.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var a;let b=this.auth&&this.auth.getUid();return null===b||"string"==typeof b||u(),new m(b)}}class C{constructor(a,b,c){this.h=a,this.l=b,this.m=c,this.type="FirstParty",this.user=m.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let a=this.p();return a&&this.g.set("Authorization",a),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class D{constructor(a,b,c){this.h=a,this.l=b,this.m=c}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(a,b){a.enqueueRetryable(()=>b(m.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(a){this.I=a,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(a,b){let c=a=>{null!=a.error&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.T;return this.T=a.token,q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.I.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.I.getImmediate({optional:!0});a?d(a):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||u(),this.T=a.token,new E(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function G(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}function H(a,b){return a<b?-1:a>b?1:0}function I(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}function J(a){return a+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class K{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new w(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new w(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return K.fromMillis(Date.now())}static fromDate(a){return K.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new K(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?H(this.nanoseconds,a.nanoseconds):H(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class L{constructor(a){this.timestamp=a}static fromTimestamp(a){return new L(a)}static min(){return new L(new K(0,0))}static max(){return new L(new K(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class M{constructor(a,b,c){void 0===b?b=0:b>a.length&&u(),void 0===c?c=a.length-b:c>a.length-b&&u(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===M.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof M?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class N extends M{construct(a,b,c){return new N(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new w(v.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new N(b)}static emptyPath(){return new N([])}}let O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends M{construct(a,b,c){return new P(a,b,c)}static isValidIdentifier(a){return O.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new w(v.INVALID_ARGUMENT,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new w(v.INVALID_ARGUMENT,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new w(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new w(v.INVALID_ARGUMENT,"Unterminated ` in path: "+a);return new P(b)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class Q{constructor(a){this.path=a}static fromPath(a){return new Q(N.fromString(a))}static fromName(a){return new Q(N.fromString(a).popFirst(5))}static empty(){return new Q(N.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===N.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return N.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new Q(new N(a.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class R{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function S(a){return a.fields.find(a=>2===a.kind)}function T(a){return a.fields.filter(a=>2!==a.kind)}R.UNKNOWN_ID=-1;class U{constructor(a,b){this.fieldPath=a,this.kind=b}}function V(a,b){let c=P.comparator(a.fieldPath,b.fieldPath);return 0!==c?c:H(a.kind,b.kind)}class W{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new W(0,Z.min())}}function X(a,b){let c=a.toTimestamp().seconds,d=a.toTimestamp().nanoseconds+1,e=L.fromTimestamp(1e9===d?new K(c+1,0):new K(c,d));return new Z(e,Q.empty(),b)}function Y(a){return new Z(a.readTime,a.key,-1)}class Z{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new Z(L.min(),Q.empty(),-1)}static max(){return new Z(L.max(),Q.empty(),-1)}}function $(a,b){let c=a.readTime.compareTo(b.readTime);return 0!==c?c:0!==(c=Q.comparator(a.documentKey,b.documentKey))?c:H(a.largestBatchId,b.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let _="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function ab(a){if(a.code!==v.FAILED_PRECONDITION||a.message!==_)throw a;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class ac{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&u(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new ac((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(a){try{let b=a();return b instanceof ac?b:ac.resolve(b)}catch(c){return ac.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):ac.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):ac.reject(b)}static resolve(a){return new ac((b,c)=>{b(a)})}static reject(a){return new ac((b,c)=>{c(a)})}static waitFor(a){return new ac((b,c)=>{let d=0,e=0,f=!1;a.forEach(a=>{++d,a.next(()=>{++e,f&&e===d&&b()},a=>c(a))}),f=!0,e===d&&b()})}static or(a){let b=ac.resolve(!1);for(let c of a)b=b.next(a=>a?ac.resolve(a):c());return b}static forEach(a,b){let c=[];return a.forEach((a,d)=>{c.push(b.call(this,a,d))}),this.waitFor(c)}static mapArray(a,b){return new ac((c,d)=>{let e=a.length,f=Array(e),g=0;for(let h=0;h<e;h++){let i=h;b(a[i]).next(a=>{f[i]=a,++g===e&&c(f)},a=>d(a))}})}static doWhile(a,b){return new ac((c,d)=>{let e=()=>{!0===a()?b().next(()=>{e()},d):c()};e()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class ad{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.v=new x,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{b.error?this.v.reject(new ag(a,b.error)):this.v.resolve()},this.transaction.onerror=b=>{let c=al(b.target.error);this.v.reject(new ag(a,c))}}static open(a,b,c,d){try{return new ad(b,a.transaction(d,c))}catch(e){throw new ag(b,e)}}get R(){return this.v.promise}abort(a){a&&this.v.reject(a),this.aborted||(q("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new ai(b)}}class ae{constructor(a,b,c){this.name=a,this.version=b,this.V=c,12.2===ae.S(getUA())&&r("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return q("SimpleDb","Removing database:",a),aj(window.indexedDB.deleteDatabase(a)).toPromise()}static D(){if(!isIndexedDBAvailable())return!1;if(ae.C())return!0;let a=getUA(),b=ae.S(a),c=0<b&&b<10,d=ae.N(a),e=0<d&&d<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||c||e)}static C(){var a;return void 0!==k&&"YES"===(null===(a=k.env)|| void 0===a?void 0:a.k)}static M(a,b){return a.store(b)}static S(a){let b=a.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=b?b[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static N(a){let b=a.match(/Android ([\d.]+)/i),c=b?b[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async $(a){return this.db||(q("SimpleDb","Opening database:",this.name),this.db=await new Promise((b,c)=>{let d=indexedDB.open(this.name,this.version);d.onsuccess=a=>{let c=a.target.result;b(c)},d.onblocked=()=>{c(new ag(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},d.onerror=b=>{let d=b.target.error;"VersionError"===d.name?c(new w(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===d.name?c(new w(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+d)):c(new ag(a,d))},d.onupgradeneeded=a=>{q("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let b=a.target.result;this.V.O(b,d.transaction,a.oldVersion,this.version).next(()=>{q("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=a=>this.F(a)),this.db}B(a){this.F=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(a,b,c,d){let e="readonly"===b,f=0;for(;;){++f;try{this.db=await this.$(a);let g=ad.open(this.db,a,e?"readonly":"readwrite",c),h=d(g).next(a=>(g.P(),a)).catch(a=>(g.abort(a),ac.reject(a))).toPromise();return h.catch(()=>{}),await g.R,h}catch(i){let j=i,k="FirebaseError"!==j.name&&f<3;if(q("SimpleDb","Transaction failed with error:",j.message,"Retrying:",k),this.close(),!k)return Promise.reject(j)}}}close(){this.db&&this.db.close(),this.db=void 0}}class af{constructor(a){this.L=a,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(a){this.L=a}done(){this.q=!0}G(a){this.U=a}delete(){return aj(this.L.delete())}}class ag extends null{constructor(a,b){super(v.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function ah(a){return"IndexedDbTransactionError"===a.name}class ai{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(q("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(q("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),aj(c)}add(a){return q("SimpleDb","ADD",this.store.name,a,a),aj(this.store.add(a))}get(a){return aj(this.store.get(a)).next(b=>(void 0===b&&(b=null),q("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return q("SimpleDb","DELETE",this.store.name,a),aj(this.store.delete(a))}count(){return q("SimpleDb","COUNT",this.store.name),aj(this.store.count())}j(a,b){let c=this.options(a,b);if(c.index||"function"!=typeof this.store.getAll){let d=this.cursor(c),e=[];return this.W(d,(a,b)=>{e.push(b)}).next(()=>e)}{let f=this.store.getAll(c.range);return new ac((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}H(a,b){let c=this.store.getAll(a,null===b?void 0:b);return new ac((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}J(a,b){q("SimpleDb","DELETE ALL",this.store.name);let c=this.options(a,b);c.Y=!1;let d=this.cursor(c);return this.W(d,(a,b,c)=>c.delete())}X(a,b){let c;b?c=a:(c={},b=a);let d=this.cursor(c);return this.W(d,b)}Z(a){let b=this.cursor({});return new ac((c,d)=>{b.onerror=a=>{let b=al(a.target.error);d(b)},b.onsuccess=b=>{let d=b.target.result;d?a(d.primaryKey,d.value).next(a=>{a?d.continue():c()}):c()}})}W(a,b){let c=[];return new ac((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=a=>{let e=a.target.result;if(!e)return void d();let f=new af(e),g=b(e.primaryKey,e.value,f);if(g instanceof ac){let h=g.catch(a=>(f.done(),ac.reject(a)));c.push(h)}f.isDone?d():null===f.K?e.continue():e.continue(f.K)}}).next(()=>ac.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.Y?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function aj(a){return new ac((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=al(a.target.error);c(b)}})}let ak=null;function al(a){let b=ae.S(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ak||(ak=!0,setTimeout(()=>{throw d},0)),d}}return a}class am{constructor(a,b){this.asyncQueue=a,this.tt=b,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(a){q("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{q("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(a){ah(a)?q("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await ab(a)}await this.et(6e4)})}}class an{constructor(a,b){this.localStore=a,this.persistence=b}async nt(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.st(b,a))}st(a,b){let c=new Set,d=b,e=!0;return ac.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(a).next(b=>{if(null!==b&&!c.has(b))return q("IndexBackiller",`Processing collection: ${b}`),this.it(a,b,d).next(a=>{d-=a,c.add(b)});e=!1})).next(()=>b-d)}it(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.rt(d,c)).next(c=>(q("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}rt(a,b){let c=a;return b.changes.forEach((a,b)=>{let d=Y(b);$(d,c)>0&&(c=d)}),new Z(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class ao{constructor(a,b){this.previousValue=a,b&&(b.sequenceNumberHandler=a=>this.ot(a),this.ut=a=>b.writeSequenceNumber(a))}ot(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.ut&&this.ut(a),a}}function ap(a){return null==a}function aq(a){return 0===a&&1/a== -1/0}function ar(a){return"number"==typeof a&&Number.isInteger(a)&&!aq(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function as(a){let b="";for(let c=0;c<a.length;c++)b.length>0&&(b=au(b)),b=at(a.get(c),b);return au(b)}function at(a,b){let c=b,d=a.length;for(let e=0;e<d;e++){let f=a.charAt(e);switch(f){case"\0":c+="\x01\x10";break;case"\x01":c+="\x01\x11";break;default:c+=f}}return c}function au(a){return a+"\x01\x01"}function av(a){var b,c;let d=a.length;if(d>=2||u(),2===d)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||u(),N.emptyPath();let e=d-2,f=[],g="";for(let h=0;h<d;){let i=a.indexOf("\x01",h);switch((i<0||i>e)&&u(),a.charAt(i+1)){case"\x01":let j=a.substring(h,i),k;0===g.length?k=j:(g+=j,k=g,g=""),f.push(k);break;case"\x10":g+=a.substring(h,i),g+="\0";break;case"\x11":g+=a.substring(h,i+1);break;default:u()}h=i+2}return new N(f)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function aw(a,b){return[a,as(b)]}function ax(a,b,c){return[a,as(b),c]}ao.ct=-1;let ay={},az=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],aA=[...az,"documentOverlays"],aB=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],aC=aB,aD=[...aC,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aE extends null{constructor(a,b){super(),this.ht=a,this.currentSequenceNumber=b}}function aF(a,b){var c;let d=c=a;return ae.M(d.ht,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aG(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function aH(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function aI(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class aJ{constructor(a,b){this.comparator=a,this.root=b||aL.EMPTY}insert(a,b){return new aJ(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,aL.BLACK,null,null))}remove(a){return new aJ(this.comparator,this.root.remove(a,this.comparator).copy(null,null,aL.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new aK(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new aK(this.root,a,this.comparator,!1)}getReverseIterator(){return new aK(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new aK(this.root,a,this.comparator,!0)}}class aK{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,b&&d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class aL{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:aL.RED,this.left=null!=d?d:aL.EMPTY,this.right=null!=e?e:aL.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new aL(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return aL.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return aL.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,aL.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,aL.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw u();let a=this.left.check();if(a!==this.right.check())throw u();return a+(this.isRed()?0:1)}}aL.EMPTY=null,aL.RED=!0,aL.BLACK=!1,aL.EMPTY=new class{constructor(){this.size=0}get key(){throw u()}get value(){throw u()}get color(){throw u()}get left(){throw u()}get right(){throw u()}copy(a,b,c,d,e){return this}insert(a,b,c){return new aL(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class aM{constructor(a){this.comparator=a,this.data=new aJ(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new aN(this.data.getIterator())}getIteratorFrom(a){return new aN(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof aM)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new aM(this.comparator);return b.data=a,b}}class aN{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function aO(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class aP{constructor(a){this.fields=a,a.sort(P.comparator)}static empty(){return new aP([])}unionWith(a){let b=new aM(P.comparator);for(let c of this.fields)b=b.add(c);for(let d of a)b=b.add(d);return new aP(b.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return I(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An error encountered while decoding base64 string.
 */ class aQ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class aR{constructor(a){this.binaryString=a}static fromBase64String(a){let b=function(a){try{return atob(a)}catch(b){throw"undefined"!=typeof DOMException&&b instanceof DOMException?new aQ("Invalid base64 string: "+b):b}}(a);return new aR(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new aR(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return H(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}aR.EMPTY_BYTE_STRING=new aR("");let aS=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function aT(a){var b,c;if(!a&&u(),"string"==typeof a){let d=0,e=aS.exec(a);if(!e&&u(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:aU(a.seconds),nanos:aU(a.nanos)}}function aU(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function aV(a){return"string"==typeof a?aR.fromBase64String(a):aR.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function aW(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function aX(a){let b=a.mapValue.fields.__previous_value__;return aW(b)?aX(b):b}function aY(a){let b=aT(a.mapValue.fields.__local_write_time__.timestampValue);return new K(b.seconds,b.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aZ{constructor(a,b,c,d,e,f,g,h,i){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=h,this.useFetchStreams=i}}class a${constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new a$("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof a$&&a.projectId===this.projectId&&a.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let a_={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},a0={nullValue:"NULL_VALUE"};function a1(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?aW(a)?4:bf(a)?9007199254740991:10:u()}function a2(a,b){var c,d,e,f;if(a===b)return!0;let g=a1(a);if(g!==a1(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return aY(a).isEqual(aY(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=aT(a.timestampValue),d=aT(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,aV(c.bytesValue).isEqual(aV(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,aU(e.geoPointValue.latitude)===aU(f.geoPointValue.latitude)&&aU(e.geoPointValue.longitude)===aU(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return aU(a.integerValue)===aU(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=aU(a.doubleValue),d=aU(b.doubleValue);return c===d?aq(c)===aq(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return I(a.arrayValue.values||[],b.arrayValue.values||[],a2);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(aG(c)!==aG(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!a2(c[e],d[e])))return!1;return!0}(a,b);default:return u()}}function a3(a,b){return void 0!==(a.values||[]).find(a=>a2(a,b))}function a4(a,b){if(a===b)return 0;let c=a1(a),d=a1(b);if(c!==d)return H(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return H(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=aU(a.integerValue||a.doubleValue),d=aU(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return a5(a.timestampValue,b.timestampValue);case 4:return a5(aY(a),aY(b));case 5:return H(a.stringValue,b.stringValue);case 6:return function(a,b){let c=aV(a),d=aV(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=H(c[e],d[e]);if(0!==f)return f}return H(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=H(aU(a.latitude),aU(b.latitude));return 0!==c?c:H(aU(a.longitude),aU(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=a4(c[e],d[e]);if(f)return f}return H(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){if(a===a_.mapValue&&b===a_.mapValue)return 0;if(a===a_.mapValue)return 1;if(b===a_.mapValue)return -1;let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=H(d[g],f[g]);if(0!==h)return h;let i=a4(c[d[g]],e[f[g]]);if(0!==i)return i}return H(d.length,f.length)}(a.mapValue,b.mapValue);default:throw u()}}function a5(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return H(a,b);let c=aT(a),d=aT(b),e=H(c.seconds,d.seconds);return 0!==e?e:H(c.nanos,d.nanos)}function a6(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(a){let b=aT(a);return`time(${b.seconds},${b.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?aV(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,Q.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(a){let b="[",c=!0;for(let d of a.values||[])c?c=!1:b+=",",b+=a6(d);return b+"]"}(a.arrayValue):"mapValue"in a?function(a){let b=Object.keys(a.fields||{}).sort(),c="{",d=!0;for(let e of b)d?d=!1:c+=",",c+=`${e}:${a6(a.fields[e])}`;return c+"}"}(a.mapValue):u()}function a7(a){switch(a1(a)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let b=aX(a);return b?16+a7(b):16;case 5:return 2*a.stringValue.length;case 6:return aV(a.bytesValue).approximateByteSize();case 7:return a.referenceValue.length;case 9:return(a.arrayValue.values||[]).reduce((a,b)=>a+a7(b),0);case 10:var c;let d;return c=a.mapValue,d=0,aH(c.fields,(a,b)=>{d+=a.length+a7(b)}),d;default:throw u()}}function a8(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function a9(a){return!!a&&"integerValue"in a}function ba(a){return!!a&&"arrayValue"in a}function bb(a){return!!a&&"nullValue"in a}function bc(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function bd(a){return!!a&&"mapValue"in a}function be(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return aH(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=be(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=be(a.arrayValue.values[d]);return c}return Object.assign({},a)}function bf(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function bg(a){return"nullValue"in a?a0:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?a8(a$.empty(),Q.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:u()}function bh(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?a8(a$.empty(),Q.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?a_:u()}function bi(a,b){let c=a4(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function bj(a,b){let c=a4(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class bk{constructor(a){this.value=a}static empty(){return new bk({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!bd(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=be(b)}setAll(a){let b=P.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=be(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());bd(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return a2(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];bd(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(aH(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new bk(be(this.value))}}function bl(a){let b=[];return aH(a.fields,(a,c)=>{let d=new P([a]);if(bd(c)){let e=bl(c.mapValue).fields;if(0===e.length)b.push(d);else for(let f of e)b.push(d.child(f))}else b.push(d)}),new aP(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class bm{constructor(a,b,c,d,e,f,g){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.createTime=e,this.data=f,this.documentState=g}static newInvalidDocument(a){return new bm(a,0,L.min(),L.min(),L.min(),bk.empty(),0)}static newFoundDocument(a,b,c,d){return new bm(a,1,b,L.min(),c,d,0)}static newNoDocument(a,b){return new bm(a,2,b,L.min(),L.min(),bk.empty(),0)}static newUnknownDocument(a,b){return new bm(a,3,b,L.min(),L.min(),bk.empty(),2)}convertToFoundDocument(a,b){return this.createTime.isEqual(L.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=a),this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=bk.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=bk.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof bm&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new bm(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ class bn{constructor(a,b){this.position=a,this.inclusive=b}}function bo(a,b,c){let d=0;for(let e=0;e<a.position.length;e++){let f=b[e],g=a.position[e];if(d=f.field.isKeyField()?Q.comparator(Q.fromName(g.referenceValue),c.key):a4(g,c.data.field(f.field)),"desc"===f.dir&&(d*=-1),0!==d)break}return d}function bp(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!a2(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class bq{constructor(a,b="asc"){this.field=a,this.dir=b}}function br(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bs{}class bt extends bs{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.createKeyFieldInFilter(a,b,c):new bD(a,b,c):"array-contains"===b?new bH(a,c):"in"===b?new bI(a,c):"not-in"===b?new bJ(a,c):"array-contains-any"===b?new bK(a,c):new bt(a,b,c)}static createKeyFieldInFilter(a,b,c){return"in"===b?new bE(a,c):new bF(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.matchesComparison(a4(b,this.value)):null!==b&&a1(this.value)===a1(b)&&this.matchesComparison(a4(b,this.value))}matchesComparison(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return u()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bu extends bs{constructor(a,b){super(),this.filters=a,this.op=b,this.lt=null}static create(a,b){return new bu(a,b)}matches(a){return bv(this)?void 0===this.filters.find(b=>!b.matches(a)):void 0!==this.filters.find(b=>b.matches(a))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((a,b)=>a.concat(b.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let a=this.ft(a=>a.isInequality());return null!==a?a.field:null}ft(a){for(let b of this.getFlattenedFilters())if(a(b))return b;return null}}function bv(a){return"and"===a.op}function bw(a){return"or"===a.op}function bx(a){return by(a)&&bv(a)}function by(a){for(let b of a.filters)if(b instanceof bu)return!1;return!0}function bz(a){if(a instanceof bt){var b;return a.field.canonicalString()+a.op.toString()+a6(b=a.value)}if(bx(a))return a.filters.map(a=>bz(a)).join(",");{let c=a.filters.map(a=>bz(a)).join(",");return`${a.op}(${c})`}}function bA(a,b){var c,d,e,f;return a instanceof bt?(c=a,(d=b)instanceof bt&&c.op===d.op&&c.field.isEqual(d.field)&&a2(c.value,d.value)):a instanceof bu?(e=a,(f=b)instanceof bu&&e.op===f.op&&e.filters.length===f.filters.length&&e.filters.reduce((a,b,c)=>a&&bA(b,f.filters[c]),!0)):void u()}function bB(a,b){let c=a.filters.concat(b);return bu.create(c,a.op)}function bC(a){var b,c,d;return a instanceof bt?(b=a,`${b.field.canonicalString()} ${b.op} ${a6(c=b.value)}`):a instanceof bu?(d=a).op.toString()+" {"+d.getFilters().map(bC).join(" ,")+"}":"Filter"}class bD extends bt{constructor(a,b,c){super(a,b,c),this.key=Q.fromName(c.referenceValue)}matches(a){let b=Q.comparator(a.key,this.key);return this.matchesComparison(b)}}class bE extends bt{constructor(a,b){super(a,"in",b),this.keys=bG("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class bF extends bt{constructor(a,b){super(a,"not-in",b),this.keys=bG("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function bG(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>Q.fromName(a.referenceValue))}class bH extends bt{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return ba(b)&&a3(b.arrayValue,this.value)}}class bI extends bt{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&a3(this.value.arrayValue,b)}}class bJ extends bt{constructor(a,b){super(a,"not-in",b)}matches(a){if(a3(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!a3(this.value.arrayValue,b)}}class bK extends bt{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!ba(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>a3(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class bL{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.dt=null}}function bM(a,b=null,c=[],d=[],e=null,f=null,g=null){return new bL(a,b,c,d,e,f,g)}function bN(a){var b;let c=b=a;if(null===c.dt){let d=c.path.canonicalString();null!==c.collectionGroup&&(d+="|cg:"+c.collectionGroup),d+="|f:",d+=c.filters.map(a=>bz(a)).join(","),d+="|ob:",d+=c.orderBy.map(a=>{var b;return(b=a).field.canonicalString()+b.dir}).join(","),ap(c.limit)||(d+="|l:",d+=c.limit),c.startAt&&(d+="|lb:",d+=c.startAt.inclusive?"b:":"a:",d+=c.startAt.position.map(a=>{var b;return a6(b=a)}).join(",")),c.endAt&&(d+="|ub:",d+=c.endAt.inclusive?"a:":"b:",d+=c.endAt.position.map(a=>{var b;return a6(b=a)}).join(",")),c.dt=d}return c.dt}function bO(a,b){if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let c=0;c<a.orderBy.length;c++)if(!br(a.orderBy[c],b.orderBy[c]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let d=0;d<a.filters.length;d++)if(!bA(a.filters[d],b.filters[d]))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!bp(a.startAt,b.startAt)&&bp(a.endAt,b.endAt)}function bP(a){return Q.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function bQ(a,b){return a.filters.filter(a=>a instanceof bt&&a.field.isEqual(b))}function bR(a,b,c){let d=a0,e=!0;for(let f of bQ(a,b)){let g=a0,h=!0;switch(f.op){case"<":case"<=":g=bg(f.value);break;case"==":case"in":case">=":g=f.value;break;case">":g=f.value,h=!1;break;case"!=":case"not-in":g=a0}0>bi({value:d,inclusive:e},{value:g,inclusive:h})&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];0>bi({value:d,inclusive:e},{value:j,inclusive:c.inclusive})&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}function bS(a,b,c){let d=a_,e=!0;for(let f of bQ(a,b)){let g=a_,h=!0;switch(f.op){case">=":case">":g=bh(f.value),h=!1;break;case"==":case"in":case"<=":g=f.value;break;case"<":g=f.value,h=!1;break;case"!=":case"not-in":g=a_}bj({value:d,inclusive:e},{value:g,inclusive:h})>0&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];bj({value:d,inclusive:e},{value:j,inclusive:c.inclusive})>0&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}/** Returns the number of segments of a perfect index for this target. */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class bT{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this.wt=null,this._t=null,this.startAt,this.endAt}}function bU(a,b,c,d,e,f,g,h){return new bT(a,b,c,d,e,f,g,h)}function bV(a){return new bT(a)}function bW(a){return 0===a.filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())}function bX(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function bY(a){for(let b of a.filters){let c=b.getFirstInequalityField();if(null!==c)return c}return null}function bZ(a){return null!==a.collectionGroup}function b$(a){var b;let c=b=a;if(null===c.wt){c.wt=[];let d=bY(c),e=bX(c);if(null!==d&&null===e)d.isKeyField()||c.wt.push(new bq(d)),c.wt.push(new bq(P.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c.wt.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c.wt.push(new bq(P.keyField(),h))}}}return c.wt}function b_(a){var b;let c=b=a;if(!c._t){if("F"===c.limitType)c._t=bM(c.path,c.collectionGroup,b$(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of b$(c)){let f="desc"===e.dir?"asc":"desc";d.push(new bq(e.field,f))}let g=c.endAt?new bn(c.endAt.position,c.endAt.inclusive):null,h=c.startAt?new bn(c.startAt.position,c.startAt.inclusive):null;c._t=bM(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c._t}function b0(a,b){b.getFirstInequalityField(),bY(a);let c=a.filters.concat([b]);return new bT(a.path,a.collectionGroup,a.explicitOrderBy.slice(),c,a.limit,a.limitType,a.startAt,a.endAt)}function b1(a,b,c){return new bT(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function b2(a,b){return bO(b_(a),b_(b))&&a.limitType===b.limitType}function b3(a){return`${bN(b_(a))}|lt:${a.limitType}`}function b4(a){var b;let c;return`Query(target=${c=(b=b_(a)).path.canonicalString(),null!==b.collectionGroup&&(c+=" collectionGroup="+b.collectionGroup),b.filters.length>0&&(c+=`, filters: [${b.filters.map(a=>bC(a)).join(", ")}]`),ap(b.limit)||(c+=", limit: "+b.limit),b.orderBy.length>0&&(c+=`, orderBy: [${b.orderBy.map(a=>{var b;return b=a,`${b.field.canonicalString()} (${b.dir})`}).join(", ")}]`),b.startAt&&(c+=", startAt: ",c+=b.startAt.inclusive?"b:":"a:",c+=b.startAt.position.map(a=>{var b;return a6(b=a)}).join(",")),b.endAt&&(c+=", endAt: ",c+=b.endAt.inclusive?"a:":"b:",c+=b.endAt.position.map(a=>{var b;return a6(b=a)}).join(",")),`Target(${c})`}; limitType=${a.limitType})`}function b5(a,b){var c,d;return b.isFoundDocument()&&function(a,b){let c=b.key.path;return null!==a.collectionGroup?b.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):Q.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(a,b)&&function(a,b){for(let c of b$(a))if(!c.field.isKeyField()&&null===b.data.field(c.field))return!1;return!0}(a,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(a,b)&&(c=a,d=b,(!c.startAt||!!function(a,b,c){let d=bo(a,b,c);return a.inclusive?d<=0:d<0}(c.startAt,b$(c),d))&&(!c.endAt||!!function(a,b,c){let d=bo(a,b,c);return a.inclusive?d>=0:d>0}(c.endAt,b$(c),d)))}function b6(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function b7(a){return(b,c)=>{let d=!1;for(let e of b$(a)){let f=b8(e,b,c);if(0!==f)return f;d=d||e.field.isKeyField()}return 0}}function b8(a,b,c){let d=a.field.isKeyField()?Q.comparator(b.key,c.key):function(a,b,c){let d=b.data.field(a),e=c.data.field(a);return null!==d&&null!==e?a4(d,e):u()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return u()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class b9{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0!==c){for(let[d,e]of c)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,b){let c=this.mapKeyFn(a),d=this.inner[c];if(void 0===d)return this.inner[c]=[[a,b]],void this.innerSize++;for(let e=0;e<d.length;e++)if(this.equalsFn(d[e][0],a))return void(d[e]=[a,b]);d.push([a,b]),this.innerSize++}delete(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0===c)return!1;for(let d=0;d<c.length;d++)if(this.equalsFn(c[d][0],a))return 1===c.length?delete this.inner[b]:c.splice(d,1),this.innerSize--,!0;return!1}forEach(a){aH(this.inner,(b,c)=>{for(let[d,e]of c)a(d,e)})}isEmpty(){return aI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ca=new aJ(Q.comparator),cb=new aJ(Q.comparator);function cc(...a){let b=cb;for(let c of a)b=b.insert(c.key,c);return b}function cd(a){let b=cb;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function ce(){return cg()}function cf(){return cg()}function cg(){return new b9(a=>a.toString(),(a,b)=>a.isEqual(b))}let ch=new aJ(Q.comparator),ci=new aM(Q.comparator);function cj(...a){let b=ci;for(let c of a)b=b.add(c);return b}let ck=new aM(H);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function cl(a,b){if(a.useProto3Json){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aq(b)?"-0":b}}function cm(a){return{integerValue:""+a}}function cn(a,b){return ar(b)?cm(b):cl(a,b)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class co{constructor(){this._=void 0}}function cp(a,b,c){return a instanceof cs?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&aW(b)&&(b=aX(b)),b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof ct?cu(a,b):a instanceof cv?cw(a,b):function(a,b){let c=cr(a,b),d=cy(c)+cy(a.gt);return a9(c)&&a9(a.gt)?cm(d):cl(a.serializer,d)}(a,b)}function cq(a,b,c){return a instanceof ct?cu(a,b):a instanceof cv?cw(a,b):c}function cr(a,b){var c,d;return a instanceof cx?a9(c=b)||(d=c)&&"doubleValue"in d?b:{integerValue:0}:null}class cs extends co{}class ct extends co{constructor(a){super(),this.elements=a}}function cu(a,b){let c=cz(b);for(let d of a.elements)c.some(a=>a2(a,d))||c.push(d);return{arrayValue:{values:c}}}class cv extends co{constructor(a){super(),this.elements=a}}function cw(a,b){let c=cz(b);for(let d of a.elements)c=c.filter(a=>!a2(a,d));return{arrayValue:{values:c}}}class cx extends co{constructor(a,b){super(),this.serializer=a,this.gt=b}}function cy(a){return aU(a.integerValue||a.doubleValue)}function cz(a){return ba(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class cA{constructor(a,b){this.field=a,this.transform=b}}class cB{constructor(a,b){this.version=a,this.transformResults=b}}class cC{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new cC}static exists(a){return new cC(void 0,a)}static updateTime(a){return new cC(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function cD(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class cE{}function cF(a,b){if(!a.hasLocalMutations||b&&0===b.fields.length)return null;if(null===b)return a.isNoDocument()?new cP(a.key,cC.none()):new cK(a.key,a.data,cC.none());{let c=a.data,d=bk.empty(),e=new aM(P.comparator);for(let f of b.fields)if(!e.has(f)){let g=c.field(f);null===g&&f.length>1&&(f=f.popLast(),g=c.field(f)),null===g?d.delete(f):d.set(f,g),e=e.add(f)}return new cL(a.key,d,new aP(e.toArray()),cC.none())}}function cG(a,b,c){a instanceof cK?function(a,b,c){let d=a.value.clone(),e=cN(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof cL?function(a,b,c){if(!cD(a.precondition,b))return void b.convertToUnknownDocument(c.version);let d=cN(a.fieldTransforms,b,c.transformResults),e=b.data;e.setAll(cM(a)),e.setAll(d),b.convertToFoundDocument(c.version,e).setHasCommittedMutations()}(a,b,c):function(a,b,c){b.convertToNoDocument(c.version).setHasCommittedMutations()}(0,b,c)}function cH(a,b,c,d){var e,f,g;return a instanceof cK?function(a,b,c,d){if(!cD(a.precondition,b))return c;let e=a.value.clone(),f=cO(a.fieldTransforms,d,b);return e.setAll(f),b.convertToFoundDocument(b.version,e).setHasLocalMutations(),null}(a,b,c,d):a instanceof cL?function(a,b,c,d){if(!cD(a.precondition,b))return c;let e=cO(a.fieldTransforms,d,b),f=b.data;return(f.setAll(cM(a)),f.setAll(e),b.convertToFoundDocument(b.version,f).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,b,c,d):(e=a,f=b,g=c,cD(e.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g)}function cI(a,b){let c=null;for(let d of a.fieldTransforms){let e=b.data.field(d.field),f=cr(d.transform,e||null);null!=f&&(null===c&&(c=bk.empty()),c.set(d.field,f))}return c||null}function cJ(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&I(c,d,(a,b)=>{var c,d,e,f;return c=a,d=b,c.field.isEqual(d.field)&&(e=c.transform,f=d.transform,e instanceof ct&&f instanceof ct||e instanceof cv&&f instanceof cv?I(e.elements,f.elements,a2):e instanceof cx&&f instanceof cx?a2(e.gt,f.gt):e instanceof cs&&f instanceof cs)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class cK extends cE{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class cL extends cE{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function cM(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function cN(a,b,c){var d;let e=new Map;(d=a.length===c.length)||u();for(let f=0;f<c.length;f++){let g=a[f],h=g.transform,i=b.data.field(g.field);e.set(g.field,cq(h,i,c[f]))}return e}function cO(a,b,c){let d=new Map;for(let e of a){let f=e.transform,g=c.data.field(e.field);d.set(e.field,cp(f,g,b))}return d}class cP extends cE{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cQ extends null{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class cR{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(a,b){let c=b.mutationResults;for(let d=0;d<this.mutations.length;d++){let e=this.mutations[d];e.key.isEqual(a.key)&&cG(e,a,c[d])}}applyToLocalView(a,b){for(let c of this.baseMutations)c.key.isEqual(a.key)&&(b=cH(c,a,b,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(a.key)&&(b=cH(d,a,b,this.localWriteTime));return b}applyToLocalDocumentSet(a,b){let c=cf();return this.mutations.forEach(d=>{let e=a.get(d.key),f=e.overlayedDocument,g=this.applyToLocalView(f,e.mutatedFields);g=b.has(d.key)?null:g;let h=cF(f,g);null!==h&&c.set(d.key,h),f.isValidDocument()||f.convertToNoDocument(L.min())}),c}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),cj())}isEqual(a){return this.batchId===a.batchId&&I(this.mutations,a.mutations,(a,b)=>cJ(a,b))&&I(this.baseMutations,a.baseMutations,(a,b)=>cJ(a,b))}}class cS{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(a,b,c){var d;(d=a.mutations.length===c.length)||u();let e=ch,f=a.mutations;for(let g=0;g<f.length;g++)e=e.insert(f[g].key,c[g].version);return new cS(a,b,c,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class cT{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Concrete implementation of the Aggregate type.
 */ class cU{constructor(a,b,c){this.alias=a,this.yt=b,this.fieldPath=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cV{constructor(a,b){this.count=a,this.unchangedNames=b}}function cW(a){switch(a){default:return u();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function cX(a){if(void 0===a)return r("GRPC error has no .code"),v.UNKNOWN;switch(a){case d.OK:return v.OK;case d.CANCELLED:return v.CANCELLED;case d.UNKNOWN:return v.UNKNOWN;case d.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case d.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case d.INTERNAL:return v.INTERNAL;case d.UNAVAILABLE:return v.UNAVAILABLE;case d.UNAUTHENTICATED:return v.UNAUTHENTICATED;case d.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case d.NOT_FOUND:return v.NOT_FOUND;case d.ALREADY_EXISTS:return v.ALREADY_EXISTS;case d.PERMISSION_DENIED:return v.PERMISSION_DENIED;case d.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case d.ABORTED:return v.ABORTED;case d.OUT_OF_RANGE:return v.OUT_OF_RANGE;case d.UNIMPLEMENTED:return v.UNIMPLEMENTED;case d.DATA_LOSS:return v.DATA_LOSS;default:return u()}}(e=d||(d={}))[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Manages "testing hooks", hooks into the internals of the SDK to verify
 * internal state and events during integration tests. Do not use this class
 * except for testing purposes.
 *
 * There are two ways to retrieve the global singleton instance of this class:
 * 1. The `instance` property, which returns null if the global singleton
 *      instance has not been created. Use this property if the caller should
 *      "do nothing" if there are no testing hooks registered, such as when
 *      delivering an event to notify registered callbacks.
 * 2. The `getOrCreateInstance()` method, which creates the global singleton
 *      instance if it has not been created. Use this method if the instance is
 *      needed to, for example, register a callback.
 *
 * @internal
 */ class cY{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return cZ}static getOrCreateInstance(){return null===cZ&&(cZ=new cY),cZ}onExistenceFilterMismatch(a){let b=Symbol();return this.onExistenceFilterMismatchCallbacks.set(b,a),()=>this.onExistenceFilterMismatchCallbacks.delete(b)}notifyOnExistenceFilterMismatch(a){this.onExistenceFilterMismatchCallbacks.forEach(b=>b(a))}}let cZ=null,c$=new j.z8([4294967295,4294967295],0);function c_(a){let b=(new TextEncoder).encode(a),c=new j.V8;return c.update(b),new Uint8Array(c.digest())}function c0(a){let b=new DataView(a.buffer),c=b.getUint32(0,!0),d=b.getUint32(4,!0),e=b.getUint32(8,!0),f=b.getUint32(12,!0);return[new j.z8([c,d],0),new j.z8([e,f],0)]}class c1{constructor(a,b,c){if(this.bitmap=a,this.padding=b,this.hashCount=c,b<0||b>=8)throw new c2(`Invalid padding: ${b}`);if(c<0||a.length>0&&0===this.hashCount)throw new c2(`Invalid hash count: ${c}`);if(0===a.length&&0!==b)throw new c2(`Invalid padding when bitmap length is 0: ${b}`);this.It=8*a.length-b,this.Tt=j.z8.fromNumber(this.It)}Et(a,b,c){let d=a.add(b.multiply(j.z8.fromNumber(c)));return 1===d.compare(c$)&&(d=new j.z8([d.getBits(0),d.getBits(1)],0)),d.modulo(this.Tt).toNumber()}At(a){return 0!=(this.bitmap[Math.floor(a/8)]&1<<a%8)}vt(a){if(0===this.It)return!1;let b=c_(a),[c,d]=c0(b);for(let e=0;e<this.hashCount;e++){let f=this.Et(c,d,e);if(!this.At(f))return!1}return!0}static create(a,b,c){let d=new Uint8Array(Math.ceil(a/8)),e=new c1(d,a%8==0?0:8-a%8,b);return c.forEach(a=>e.insert(a)),e}insert(a){if(0===this.It)return;let b=c_(a),[c,d]=c0(b);for(let e=0;e<this.hashCount;e++){let f=this.Et(c,d,e);this.Rt(f)}}Rt(a){let b=Math.floor(a/8);this.bitmap[b]|=1<<a%8}}class c2 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class c3{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,b,c){let d=new Map;return d.set(a,c4.createSynthesizedTargetChangeForCurrentChange(a,b,c)),new c3(L.min(),d,new aJ(H),ca,cj())}}class c4{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(a,b,c){return new c4(c,b,cj(),cj(),cj())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class c5{constructor(a,b,c,d){this.Pt=a,this.removedTargetIds=b,this.key=c,this.bt=d}}class c6{constructor(a,b){this.targetId=a,this.Vt=b}}class c7{constructor(a,b,c=aR.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class c8{constructor(){this.St=0,this.Dt=db(),this.Ct=aR.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(a){a.approximateByteSize()>0&&(this.Nt=!0,this.Ct=a)}Ot(){let a=cj(),b=cj(),c=cj();return this.Dt.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:u()}}),new c4(this.Ct,this.xt,a,b,c)}Ft(){this.Nt=!1,this.Dt=db()}Bt(a,b){this.Nt=!0,this.Dt=this.Dt.insert(a,b)}Lt(a){this.Nt=!0,this.Dt=this.Dt.remove(a)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class c9{constructor(a){this.Gt=a,this.Qt=new Map,this.jt=ca,this.zt=da(),this.Wt=new aJ(H)}Ht(a){for(let b of a.Pt)a.bt&&a.bt.isFoundDocument()?this.Jt(b,a.bt):this.Yt(b,a.key,a.bt);for(let c of a.removedTargetIds)this.Yt(c,a.key,a.bt)}Xt(a){this.forEachTarget(a,b=>{let c=this.Zt(b);switch(a.state){case 0:this.te(b)&&c.$t(a.resumeToken);break;case 1:c.Ut(),c.kt||c.Ft(),c.$t(a.resumeToken);break;case 2:c.Ut(),c.kt||this.removeTarget(b);break;case 3:this.te(b)&&(c.Kt(),c.$t(a.resumeToken));break;case 4:this.te(b)&&(this.ee(b),c.$t(a.resumeToken));break;default:u()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Qt.forEach((a,c)=>{this.te(c)&&b(c)})}ne(a){var b,c;let d=a.targetId,e=a.Vt.count,f=this.se(d);if(f){let g=f.target;if(bP(g)){if(0===e){let h=new Q(g.path);this.Yt(d,h,bm.newNoDocument(h,L.min()))}else(c=1===e)||u()}else{let i=this.ie(d);if(i!==e){let j=this.re(a,i);if(0!==j){this.ee(d);let k=2===j?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(d,k)}null===(b=cY.instance)|| void 0===b||b.notifyOnExistenceFilterMismatch(function(a,b,c){var d,e,f,g,h,i;let j={localCacheCount:b,existenceFilterCount:c.count},k=c.unchangedNames;return k&&(j.bloomFilter={applied:0===a,hashCount:null!==(d=null==k?void 0:k.hashCount)&& void 0!==d?d:0,bitmapLength:null!==(g=null===(f=null===(e=null==k?void 0:k.bits)|| void 0===e?void 0:e.bitmap)|| void 0===f?void 0:f.length)&& void 0!==g?g:0,padding:null!==(i=null===(h=null==k?void 0:k.bits)|| void 0===h?void 0:h.padding)&& void 0!==i?i:0}),j}(j,i,a.Vt))}}}}re(a,b){let{unchangedNames:c,count:d}=a.Vt;if(!c||!c.bits)return 1;let{bits:{bitmap:e="",padding:f=0},hashCount:g=0}=c,h,i;try{h=aV(e).toUint8Array()}catch(j){if(j instanceof aQ)return s("Decoding the base64 bloom filter in existence filter failed ("+j.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw j}try{i=new c1(h,f,g)}catch(k){return s(k instanceof c2?"BloomFilter error: ":"Applying bloom filter failed: ",k),1}return 0===i.It?1:d!==b-this.oe(a.targetId,i)?2:0}oe(a,b){let c=this.Gt.getRemoteKeysForTarget(a),d=0;return c.forEach(c=>{let e=this.Gt.ue(),f=`projects/${e.projectId}/databases/${e.database}/documents/${c.path.canonicalString()}`;b.vt(f)||(this.Yt(a,c,null),d++)}),d}ce(a){let b=new Map;this.Qt.forEach((c,d)=>{let e=this.se(d);if(e){if(c.current&&bP(e.target)){let f=new Q(e.target.path);null!==this.jt.get(f)||this.ae(d,f)||this.Yt(d,f,bm.newNoDocument(f,a))}c.Mt&&(b.set(d,c.Ot()),c.Ft())}});let c=cj();this.zt.forEach((a,b)=>{let d=!0;b.forEachWhile(a=>{let b=this.se(a);return!b||"TargetPurposeLimboResolution"===b.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.jt.forEach((b,c)=>c.setReadTime(a));let d=new c3(a,b,this.Wt,this.jt,c);return this.jt=ca,this.zt=da(),this.Wt=new aJ(H),d}Jt(a,b){if(!this.te(a))return;let c=this.ae(a,b.key)?2:0;this.Zt(a).Bt(b.key,c),this.jt=this.jt.insert(b.key,b),this.zt=this.zt.insert(b.key,this.he(b.key).add(a))}Yt(a,b,c){if(!this.te(a))return;let d=this.Zt(a);this.ae(a,b)?d.Bt(b,1):d.Lt(b),this.zt=this.zt.insert(b,this.he(b).delete(a)),c&&(this.jt=this.jt.insert(b,c))}removeTarget(a){this.Qt.delete(a)}ie(a){let b=this.Zt(a).Ot();return this.Gt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}qt(a){this.Zt(a).qt()}Zt(a){let b=this.Qt.get(a);return b||(b=new c8,this.Qt.set(a,b)),b}he(a){let b=this.zt.get(a);return b||(b=new aM(H),this.zt=this.zt.insert(a,b)),b}te(a){let b=null!==this.se(a);return b||q("WatchChangeAggregator","Detected inactive target",a),b}se(a){let b=this.Qt.get(a);return b&&b.kt?null:this.Gt.le(a)}ee(a){this.Qt.set(a,new c8),this.Gt.getRemoteKeysForTarget(a).forEach(b=>{this.Yt(a,b,null)})}ae(a,b){return this.Gt.getRemoteKeysForTarget(a).has(b)}}function da(){return new aJ(Q.comparator)}function db(){return new aJ(Q.comparator)}let dc={asc:"ASCENDING",desc:"DESCENDING"},dd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},de={and:"AND",or:"OR"};class df{constructor(a,b){this.databaseId=a,this.useProto3Json=b}}function dg(a,b){return a.useProto3Json||ap(b)?b:{value:b}}function dh(a,b){return a.useProto3Json?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function di(a,b){return a.useProto3Json?b.toBase64():b.toUint8Array()}function dj(a){var b;return!a&&u(),L.fromTimestamp(function(a){let b=aT(a);return new K(b.seconds,b.nanos)}(a))}function dk(a,b){var c;return(c=a,new N(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function dl(a){var b;let c=N.fromString(a);return dF(c)||u(),c}function dm(a,b){return dk(a.databaseId,b.path)}function dn(a,b){let c=dl(b);if(c.get(1)!==a.databaseId.projectId)throw new w(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+a.databaseId.projectId);if(c.get(3)!==a.databaseId.database)throw new w(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+a.databaseId.database);return new Q(ds(c))}function dp(a,b){return dk(a.databaseId,b)}function dq(a){let b=dl(a);return 4===b.length?N.emptyPath():ds(b)}function dr(a){return new N(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function ds(a){var b;return a.length>4&&"documents"===a.get(4)||u(),a.popFirst(5)}function dt(a,b,c){return{name:dm(a,b),fields:c.value.mapValue.fields}}function du(a,b,c){let d=dn(a,b.name),e=dj(b.updateTime),f=b.createTime?dj(b.createTime):L.min(),g=new bk({mapValue:{fields:b.fields}}),h=bm.newFoundDocument(d,e,f,g);return c&&h.setHasCommittedMutations(),c?h.setHasCommittedMutations():h}function dv(a,b){var c,d,e,f;let g;if(b instanceof cK)g={update:dt(a,b.key,b.value)};else if(b instanceof cP)g={delete:dm(a,b.key)};else if(b instanceof cL)g={update:dt(a,b.key,b.data),updateMask:dE(b.fieldMask)};else{if(!(b instanceof cQ))return u();g={verify:dm(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof cs)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ct)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof cv)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof cx)return{fieldPath:b.field.canonicalString(),increment:c.gt};throw u()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,dh(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:u())),g}function dw(a,b){var c;let d=b.currentDocument?void 0!==(c=b.currentDocument).updateTime?cC.updateTime(dj(c.updateTime)):void 0!==c.exists?cC.exists(c.exists):cC.none():cC.none(),e=b.updateTransforms?b.updateTransforms.map(b=>(function(a,b){let c=null;if("setToServerValue"in b){var d;"REQUEST_TIME"===b.setToServerValue||u(),c=new cs}else if("appendMissingElements"in b){let e=b.appendMissingElements.values||[];c=new ct(e)}else if("removeAllFromArray"in b){let f=b.removeAllFromArray.values||[];c=new cv(f)}else"increment"in b?c=new cx(a,b.increment):u();let g=P.fromServerFormat(b.fieldPath);return new cA(g,c)})(a,b)):[];if(b.update){b.update.name;let f=dn(a,b.update.name),g=new bk({mapValue:{fields:b.update.fields}});if(b.updateMask){let h=function(a){let b=a.fieldPaths||[];return new aP(b.map(a=>P.fromServerFormat(a)))}(b.updateMask);return new cL(f,g,h,d,e)}return new cK(f,g,d,e)}if(b.delete){let i=dn(a,b.delete);return new cP(i,d)}if(b.verify){let j=dn(a,b.verify);return new cQ(j,d)}return u()}function dx(a,b){return{documents:[dp(a,b.path)]}}function dy(a,b){var c,d;let e={structuredQuery:{}},f=b.path;null!==b.collectionGroup?(e.parent=dp(a,f),e.structuredQuery.from=[{collectionId:b.collectionGroup,allDescendants:!0}]):(e.parent=dp(a,f.popLast()),e.structuredQuery.from=[{collectionId:f.lastSegment()}]);let g=function(a){if(0!==a.length)return dD(bu.create(a,"and"))}(b.filters);g&&(e.structuredQuery.where=g);let h=function(a){if(0!==a.length)return a.map(a=>{var b,c;return{field:dB((b=a).field),direction:(c=b.dir,dc[c])}})}(b.orderBy);h&&(e.structuredQuery.orderBy=h);let i=dg(a,b.limit);return null!==i&&(e.structuredQuery.limit=i),b.startAt&&(e.structuredQuery.startAt={before:(c=b.startAt).inclusive,values:c.position}),b.endAt&&(e.structuredQuery.endAt={before:!(d=b.endAt).inclusive,values:d.position}),e}function dz(a){var b,c;let d=dq(a.parent),e=a.structuredQuery,f=e.from?e.from.length:0,g=null;if(f>0){(b=1===f)||u();let h=e.from[0];h.allDescendants?g=h.collectionId:d=d.child(h.collectionId)}let i=[];e.where&&(i=function(a){let b=dA(a);return b instanceof bu&&bx(b)?b.getFilters():[b]}(e.where));let j=[];e.orderBy&&(j=e.orderBy.map(a=>{var b;return b=a,new bq(dC(b.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}));let k=null,l;e.limit&&(k=ap(l="object"==typeof(c=e.limit)?c.value:c)?null:l);let m=null;e.startAt&&(m=function(a){let b=!!a.before,c=a.values||[];return new bn(c,b)}(e.startAt));let n=null;return e.endAt&&(n=function(a){let b=!a.before,c=a.values||[];return new bn(c,b)}(e.endAt)),bU(d,g,j,i,k,"F",m,n)}function dA(a){var b,c;return void 0!==a.unaryFilter?function(a){switch(a.unaryFilter.op){case"IS_NAN":let b=dC(a.unaryFilter.field);return bt.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=dC(a.unaryFilter.field);return bt.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=dC(a.unaryFilter.field);return bt.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=dC(a.unaryFilter.field);return bt.create(e,"!=",{nullValue:"NULL_VALUE"});default:return u()}}(a):void 0!==a.fieldFilter?(b=a,bt.create(dC(b.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return u()}}(b.fieldFilter.op),b.fieldFilter.value)):void 0!==a.compositeFilter?(c=a,bu.create(c.compositeFilter.filters.map(a=>dA(a)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return u()}}(c.compositeFilter.op))):u()}function dB(a){return{fieldPath:a.canonicalString()}}function dC(a){return P.fromServerFormat(a.fieldPath)}function dD(a){return a instanceof bt?function(a){var b;if("=="===a.op){if(bc(a.value))return{unaryFilter:{field:dB(a.field),op:"IS_NAN"}};if(bb(a.value))return{unaryFilter:{field:dB(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(bc(a.value))return{unaryFilter:{field:dB(a.field),op:"IS_NOT_NAN"}};if(bb(a.value))return{unaryFilter:{field:dB(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dB(a.field),op:dd[b=a.op],value:a.value}}}(a):a instanceof bu?function(a){var b;let c=a.getFilters().map(a=>dD(a));return 1===c.length?c[0]:{compositeFilter:{op:de[b=a.op],filters:c}}}(a):u()}function dE(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function dF(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class dG{constructor(a,b,c,d,e=L.min(),f=L.min(),g=aR.EMPTY_BYTE_STRING,h=null){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=h}withSequenceNumber(a){return new dG(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(a,b){return new dG(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a,null)}withExpectedCount(a){return new dG(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,a)}withLastLimboFreeSnapshotVersion(a){return new dG(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class dH{constructor(a){this.fe=a}}function dI(a,b){let c=b.key,d={prefixPath:c.getCollectionPath().popLast().toArray(),collectionGroup:c.collectionGroup,documentId:c.path.lastSegment(),readTime:dJ(b.readTime),hasCommittedMutations:b.hasCommittedMutations};if(b.isFoundDocument()){var e,f;d.document=(e=a.fe,{name:dm(e,(f=b).key),fields:f.data.value.mapValue.fields,updateTime:dh(e,f.version.toTimestamp()),createTime:dh(e,f.createTime.toTimestamp())})}else if(b.isNoDocument())d.noDocument={path:c.path.toArray(),readTime:dK(b.version)};else{if(!b.isUnknownDocument())return u();d.unknownDocument={path:c.path.toArray(),version:dK(b.version)}}return d}function dJ(a){let b=a.toTimestamp();return[b.seconds,b.nanoseconds]}function dK(a){let b=a.toTimestamp();return{seconds:b.seconds,nanoseconds:b.nanoseconds}}function dL(a){let b=new K(a.seconds,a.nanoseconds);return L.fromTimestamp(b)}function dM(a,b){let c=(b.baseMutations||[]).map(b=>dw(a.fe,b));for(let d=0;d<b.mutations.length-1;++d){let e=b.mutations[d];if(d+1<b.mutations.length&& void 0!==b.mutations[d+1].transform){let f=b.mutations[d+1];e.updateTransforms=f.transform.fieldTransforms,b.mutations.splice(d+1,1),++d}}let g=b.mutations.map(b=>dw(a.fe,b)),h=K.fromMillis(b.localWriteTimeMs);return new cR(b.batchId,h,c,g)}function dN(a){var b,c,d;let e=dL(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?dL(a.lastLimboFreeSnapshotVersion):L.min(),g;return void 0!==a.query.documents?(1===(b=a.query).documents.length||u(),g=b_(bV(dq(b.documents[0])))):g=b_(dz(d=a.query)),new dG(g,a.targetId,"TargetPurposeListen",a.lastListenSequenceNumber,e,f,aR.fromBase64String(a.resumeToken))}function dO(a,b){let c=dK(b.snapshotVersion),d=dK(b.lastLimboFreeSnapshotVersion),e;e=bP(b.target)?dx(a.fe,b.target):dy(a.fe,b.target);let f=b.resumeToken.toBase64();return{targetId:b.targetId,canonicalId:bN(b.target),readTime:c,resumeToken:f,lastListenSequenceNumber:b.sequenceNumber,lastLimboFreeSnapshotVersion:d,query:e}}function dP(a){let b=dz({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?b1(b,b.limit,"L"):b}function dQ(a,b){return new cT(b.largestBatchId,dw(a.fe,b.overlayMutation))}function dR(a,b){let c=b.path.lastSegment();return[a,as(b.path.popLast()),c]}function dS(a,b,c,d){return{indexId:a,uid:b.uid||"",sequenceNumber:c,readTime:dK(d.readTime),documentKey:as(d.documentKey.path),largestBatchId:d.largestBatchId}}function dT(a){return aF(a,"bundles")}function dU(a){return aF(a,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class dV{constructor(a,b){this.serializer=a,this.userId=b}static de(a,b){let c=b.uid||"";return new dV(a,c)}getOverlay(a,b){return dW(a).get(dR(this.userId,b)).next(a=>a?dQ(this.serializer,a):null)}getOverlays(a,b){let c=ce();return ac.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){let d=[];return c.forEach((c,e)=>{let f=new cT(b,e);d.push(this.we(a,f))}),ac.waitFor(d)}removeOverlaysForBatchId(a,b,c){let d=new Set;b.forEach(a=>d.add(as(a.getCollectionPath())));let e=[];return d.forEach(b=>{let d=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,c+1],!1,!0);e.push(dW(a).J("collectionPathOverlayIndex",d))}),ac.waitFor(e)}getOverlaysForCollection(a,b,c){let d=ce(),e=as(b),f=IDBKeyRange.bound([this.userId,e,c],[this.userId,e,Number.POSITIVE_INFINITY],!0);return dW(a).j("collectionPathOverlayIndex",f).next(a=>{for(let b of a){let c=dQ(this.serializer,b);d.set(c.getKey(),c)}return d})}getOverlaysForCollectionGroup(a,b,c,d){let e=ce(),f,g=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,Number.POSITIVE_INFINITY],!0);return dW(a).X({index:"collectionGroupOverlayIndex",range:g},(a,b,c)=>{let g=dQ(this.serializer,b);e.size()<d||g.largestBatchId===f?(e.set(g.getKey(),g),f=g.largestBatchId):c.done()}).next(()=>e)}we(a,b){return dW(a).put(function(a,b,c){let[d,e,f]=dR(b,c.mutation.key);return{userId:b,collectionPath:e,documentId:f,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:dv(a.fe,c.mutation)}}(this.serializer,this.userId,b))}}function dW(a){return aF(a,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class dX{constructor(){}_e(a,b){this.me(a,b),b.ge()}me(a,b){if("nullValue"in a)this.ye(b,5);else if("booleanValue"in a)this.ye(b,10),b.pe(a.booleanValue?1:0);else if("integerValue"in a)this.ye(b,15),b.pe(aU(a.integerValue));else if("doubleValue"in a){let c=aU(a.doubleValue);isNaN(c)?this.ye(b,13):(this.ye(b,15),aq(c)?b.pe(0):b.pe(c))}else if("timestampValue"in a){let d=a.timestampValue;this.ye(b,20),"string"==typeof d?b.Ie(d):(b.Ie(`${d.seconds||""}`),b.pe(d.nanos||0))}else if("stringValue"in a)this.Te(a.stringValue,b),this.Ee(b);else if("bytesValue"in a)this.ye(b,30),b.Ae(aV(a.bytesValue)),this.Ee(b);else if("referenceValue"in a)this.ve(a.referenceValue,b);else if("geoPointValue"in a){let e=a.geoPointValue;this.ye(b,45),b.pe(e.latitude||0),b.pe(e.longitude||0)}else"mapValue"in a?bf(a)?this.ye(b,Number.MAX_SAFE_INTEGER):(this.Re(a.mapValue,b),this.Ee(b)):"arrayValue"in a?(this.Pe(a.arrayValue,b),this.Ee(b)):u()}Te(a,b){this.ye(b,25),this.be(a,b)}be(a,b){b.Ie(a)}Re(a,b){let c=a.fields||{};for(let d of(this.ye(b,55),Object.keys(c)))this.Te(d,b),this.me(c[d],b)}Pe(a,b){let c=a.values||[];for(let d of(this.ye(b,50),c))this.me(d,b)}ve(a,b){this.ye(b,37),Q.fromName(a).path.forEach(a=>{this.ye(b,60),this.be(a,b)})}ye(a,b){a.pe(b)}Ee(a){a.pe(2)}}function dY(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function dZ(a){let b=64-function(a){let b=0;for(let c=0;c<8;++c){let d=dY(255&a[c]);if(b+=d,8!==d)break}return b}(a);return Math.ceil(b/8)}dX.Ve=new dX;class d${constructor(){this.je=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.De(c.value),c=b.next();this.Ce()}xe(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Ne(c.value),c=b.next();this.ke()}Me(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.De(c);else if(c<2048)this.De(960|c>>>6),this.De(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.De(480|c>>>12),this.De(128|63&c>>>6),this.De(128|63&c);else{let d=b.codePointAt(0);this.De(240|d>>>18),this.De(128|63&d>>>12),this.De(128|63&d>>>6),this.De(128|63&d)}}this.Ce()}$e(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Ne(c);else if(c<2048)this.Ne(960|c>>>6),this.Ne(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Ne(480|c>>>12),this.Ne(128|63&c>>>6),this.Ne(128|63&c);else{let d=b.codePointAt(0);this.Ne(240|d>>>18),this.Ne(128|63&d>>>12),this.Ne(128|63&d>>>6),this.Ne(128|63&d)}}this.ke()}Oe(a){let b=this.Fe(a),c=dZ(b);this.Be(1+c),this.buffer[this.position++]=255&c;for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=255&b[d]}Le(a){let b=this.Fe(a),c=dZ(b);this.Be(1+c),this.buffer[this.position++]=~(255&c);for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=~(255&b[d])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(a){this.Be(a.length),this.buffer.set(a,this.position),this.position+=a.length}Qe(){return this.buffer.slice(0,this.position)}Fe(a){let b=function(a){let b=new DataView(new ArrayBuffer(8));return b.setFloat64(0,a,!1),new Uint8Array(b.buffer)}(a),c=0!=(128&b[0]);b[0]^=c?255:128;for(let d=1;d<b.length;++d)b[d]^=c?255:0;return b}De(a){let b=255&a;0===b?(this.Ue(0),this.Ue(255)):255===b?(this.Ue(255),this.Ue(0)):this.Ue(b)}Ne(a){let b=255&a;0===b?(this.Ge(0),this.Ge(255)):255===b?(this.Ge(255),this.Ge(0)):this.Ge(a)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(a){this.Be(1),this.buffer[this.position++]=a}Ge(a){this.Be(1),this.buffer[this.position++]=~a}Be(a){let b=a+this.position;if(b<=this.buffer.length)return;let c=2*this.buffer.length;c<b&&(c=b);let d=new Uint8Array(c);d.set(this.buffer),this.buffer=d}},this.ze=new class{constructor(a){this.je=a}Ae(a){this.je.Se(a)}Ie(a){this.je.Me(a)}pe(a){this.je.Oe(a)}ge(){this.je.qe()}}(this.je),this.We=new class{constructor(a){this.je=a}Ae(a){this.je.xe(a)}Ie(a){this.je.$e(a)}pe(a){this.je.Le(a)}ge(){this.je.Ke()}}(this.je)}seed(a){this.je.seed(a)}He(a){return 0===a?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class d_{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Je(){let a=this.directionalValue.length,b=0===a||255===this.directionalValue[a-1]?a+1:a,c=new Uint8Array(b);return c.set(this.directionalValue,0),b!==a?c.set([0],this.directionalValue.length):++c[c.length-1],new d_(this.indexId,this.documentKey,this.arrayValue,c)}}function d0(a,b){let c=a.indexId-b.indexId;return 0!==c?c:0!==(c=d1(a.arrayValue,b.arrayValue))?c:0!==(c=d1(a.directionalValue,b.directionalValue))?c:Q.comparator(a.documentKey,b.documentKey)}function d1(a,b){for(let c=0;c<a.length&&c<b.length;++c){let d=a[c]-b[c];if(0!==d)return d}return a.length-b.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class d2{constructor(a){for(let b of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ye=a.orderBy,this.Xe=[],a.filters)){let c=b;c.isInequality()?this.Ze=c:this.Xe.push(c)}}tn(a){var b;(b=a.collectionGroup===this.collectionId)||u();let c=S(a);if(void 0!==c&&!this.en(c))return!1;let d=T(a),e=new Set,f=0,g=0;for(;f<d.length&&this.en(d[f]);++f)e=e.add(d[f].fieldPath.canonicalString());if(f===d.length)return!0;if(void 0!==this.Ze){if(!e.has(this.Ze.field.canonicalString())){let h=d[f];if(!this.nn(this.Ze,h)||!this.sn(this.Ye[g++],h))return!1}++f}for(;f<d.length;++f){let i=d[f];if(g>=this.Ye.length||!this.sn(this.Ye[g++],i))return!1}return!0}en(a){for(let b of this.Xe)if(this.nn(b,a))return!0;return!1}nn(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}sn(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides utility functions that help with boolean logic transformations needed for handling
 * complex filters used in queries.
 */ /**
 * The `in` filter is only a syntactic sugar over a disjunction of equalities. For instance: `a in
 * [1,2,3]` is in fact `a==1 || a==2 || a==3`. This method expands any `in` filter in the given
 * input into a disjunction of equality filters and returns the expanded filter.
 */ function d3(a){var b,c,d;if(a instanceof bt||a instanceof bu||u(),a instanceof bt){if(a instanceof bI){let e=(null===(c=null===(b=a.value.arrayValue)|| void 0===b?void 0:b.values)|| void 0===c?void 0:c.map(b=>bt.create(a.field,"==",b)))||[];return bu.create(e,"or")}return a}let f=a.filters.map(a=>d3(a));return bu.create(f,a.op)}function d4(a){return a instanceof bt}function d5(a){return a instanceof bu&&bx(a)}function d6(a){return d4(a)||d5(a)||function(a){if(a instanceof bu&&bw(a)){for(let b of a.getFilters())if(!d4(b)&&!d5(b))return!1;return!0}return!1}(a)}function d7(a){var b,c,d,e;if(a instanceof bt||a instanceof bu||u(),a instanceof bt)return a;if(1===a.filters.length)return d7(a.filters[0]);let f=a.filters.map(a=>d7(a)),g=bu.create(f,a.op);return g=ea(g),d6(g)?g:(g instanceof bu||u(),bv(g)||u(),g.filters.length>1||u(),g.filters.reduce((a,b)=>d8(a,b)))}function d8(a,b){var c,d,e,f;let g;return a instanceof bt||a instanceof bu||u(),b instanceof bt||b instanceof bu||u(),g=a instanceof bt?b instanceof bt?(e=a,f=b,bu.create([e,f],"and")):d9(a,b):b instanceof bt?d9(b,a):function(a,b){var c;if(a.filters.length>0&&b.filters.length>0||u(),bv(a)&&bv(b))return bB(a,b.getFilters());let d=bw(a)?a:b,e=bw(a)?b:a,f=d.filters.map(a=>d8(a,e));return bu.create(f,"or")}(a,b),ea(g)}function d9(a,b){if(bv(b))return bB(b,a.getFilters());{let c=b.filters.map(b=>d8(a,b));return bu.create(c,"or")}}function ea(a){var b;if(a instanceof bt||a instanceof bu||u(),a instanceof bt)return a;let c=a.getFilters();if(1===c.length)return ea(c[0]);if(by(a))return a;let d=c.map(a=>ea(a)),e=[];return d.forEach(b=>{b instanceof bt?e.push(b):b instanceof bu&&(b.op===a.op?e.push(...b.filters):e.push(b))}),1===e.length?e[0]:bu.create(e,a.op)}class eb{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new aM(N.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b];return d&&d.has(c)}getEntries(a){return(this.index[a]||new aM(N.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ec=new Uint8Array(0);class ed{constructor(a,b){this.user=a,this.databaseId=b,this.on=new eb,this.un=new b9(a=>bN(a),(a,b)=>bO(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(a,b){if(!this.on.has(b)){let c=b.lastSegment(),d=b.popLast();a.addOnCommittedListener(()=>{this.on.add(b)});let e={collectionId:c,parent:as(d)};return ee(a).put(e)}return ac.resolve()}getCollectionParents(a,b){let c=[],d=IDBKeyRange.bound([b,""],[J(b),""],!1,!0);return ee(a).j(d).next(a=>{for(let d of a){if(d.collectionId!==b)break;c.push(av(d.parent))}return c})}addFieldIndex(a,b){var c;let d=eg(a),e={indexId:(c=b).indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete e.indexId;let f=d.add(e);if(b.indexState){let g=eh(a);return f.next(a=>{g.put(dS(a,this.user,b.indexState.sequenceNumber,b.indexState.offset))})}return f.next()}deleteFieldIndex(a,b){let c=eg(a),d=eh(a),e=ef(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=ef(a),d=!0,e=new Map;return ac.forEach(this.cn(b),b=>this.an(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=cj(),f=[];return ac.forEach(e,(d,e)=>{var g;q("IndexedDbIndexManager",`Using index ${(g=d,`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${bN(b)}`);let h=function(a,b){let c=S(b);if(void 0===c)return null;for(let d of bQ(a,c.fieldPath))switch(d.op){case"array-contains-any":return d.value.arrayValue.values||[];case"array-contains":return[d.value]}return null}(e,d),i=function(a,b){let c=new Map;for(let d of T(b))for(let e of bQ(a,d.fieldPath))switch(e.op){case"==":case"in":c.set(d.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return c.set(d.fieldPath.canonicalString(),e.value),Array.from(c.values())}return null}(e,d),j=function(a,b){let c=[],d=!0;for(let e of T(b)){let f=0===e.kind?bR(a,e.fieldPath,a.startAt):bS(a,e.fieldPath,a.startAt);c.push(f.value),d&&(d=f.inclusive)}return new bn(c,d)}(e,d),k=function(a,b){let c=[],d=!0;for(let e of T(b)){let f=0===e.kind?bS(a,e.fieldPath,a.endAt):bR(a,e.fieldPath,a.endAt);c.push(f.value),d&&(d=f.inclusive)}return new bn(c,d)}(e,d),l=this.hn(d,e,j),m=this.hn(d,e,k),n=this.ln(d,e,i),o=this.fn(d.indexId,h,l,j.inclusive,m,k.inclusive,n);return ac.forEach(o,d=>c.H(d,b.limit).next(b=>{b.forEach(b=>{let c=Q.fromSegments(b.documentKey);a.has(c)||(a=a.add(c),f.push(c))})}))}).next(()=>f)}return ac.resolve(null)})}cn(a){let b=this.un.get(a);return b||(b=0===a.filters.length?[a]:(function(a){var b;if(0===a.getFilters().length)return[];let c=d7(d3(a));return d6(c)||u(),d4(c)||d5(c)?[c]:c.getFilters()})(bu.create(a.filters,"and")).map(b=>bM(a.path,a.collectionGroup,a.orderBy,b.getFilters(),a.limit,a.startAt,a.endAt)),this.un.set(a,b)),b}fn(a,b,c,d,e,f,g){let h=(null!=b?b.length:1)*Math.max(c.length,e.length),i=h/(null!=b?b.length:1),j=[];for(let k=0;k<h;++k){let l=b?this.dn(b[k/i]):ec,m=this.wn(a,l,c[k%i],d),n=this._n(a,l,e[k%i],f),o=g.map(b=>this.wn(a,l,b,!0));j.push(...this.createRange(m,n,o))}return j}wn(a,b,c,d){let e=new d_(a,Q.empty(),b,c);return d?e:e.Je()}_n(a,b,c,d){let e=new d_(a,Q.empty(),b,c);return d?e.Je():e}an(a,b){let c=new d2(b),d=null!=b.collectionGroup?b.collectionGroup:b.path.lastSegment();return this.getFieldIndexes(a,d).next(a=>{let b=null;for(let d of a)c.tn(d)&&(!b||d.fields.length>b.fields.length)&&(b=d);return b})}getIndexType(a,b){let c=2,d=this.cn(b);return ac.forEach(d,b=>this.an(a,b).next(a=>{a?0!==c&&a.fields.length<function(a){let b=new aM(P.comparator),c=!1;for(let d of a.filters)for(let e of d.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?c=!0:b=b.add(e.field));for(let f of a.orderBy)f.field.isKeyField()||(b=b.add(f.field));return b.size+(c?1:0)}(b)&&(c=1):c=0})).next(()=>{var a;return null!==(a=b).limit&&d.length>1&&2===c?1:c})}mn(a,b){let c=new d$;for(let d of T(a)){let e=b.data.field(d.fieldPath);if(null==e)return null;let f=c.He(d.kind);dX.Ve._e(e,f)}return c.Qe()}dn(a){let b=new d$;return dX.Ve._e(a,b.He(0)),b.Qe()}gn(a,b){let c=new d$;return dX.Ve._e(a8(this.databaseId,b),c.He(function(a){let b=T(a);return 0===b.length?0:b[b.length-1].kind}(a))),c.Qe()}ln(a,b,c){if(null===c)return[];let d=[];d.push(new d$);let e=0;for(let f of T(a)){let g=c[e++];for(let h of d)if(this.yn(b,f.fieldPath)&&ba(g))d=this.pn(d,f,g);else{let i=h.He(f.kind);dX.Ve._e(g,i)}}return this.In(d)}hn(a,b,c){return this.ln(a,b,c.position)}In(a){let b=[];for(let c=0;c<a.length;++c)b[c]=a[c].Qe();return b}pn(a,b,c){let d=[...a],e=[];for(let f of c.arrayValue.values||[])for(let g of d){let h=new d$;h.seed(g.Qe()),dX.Ve._e(f,h.He(b.kind)),e.push(h)}return e}yn(a,b){return!!a.filters.find(a=>a instanceof bt&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(a,b){let c=eg(a),d=eh(a);return(b?c.j("collectionGroupIndex",IDBKeyRange.bound(b,b)):c.j()).next(a=>{let b=[];return ac.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(a,b){let c=b?new W(b.sequenceNumber,new Z(dL(b.readTime),new Q(av(b.documentKey)),b.largestBatchId)):W.empty(),d=a.fields.map(([a,b])=>new U(P.fromServerFormat(a),b));return new R(a.indexId,a.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:H(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=eg(a),e=eh(a);return this.Tn(a).next(a=>d.j("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>ac.forEach(b,b=>e.put(dS(b.indexId,this.user,a,c)))))}updateIndexEntries(a,b){let c=new Map;return ac.forEach(b,(b,d)=>{let e=c.get(b.collectionGroup);return(e?ac.resolve(e):this.getFieldIndexes(a,b.collectionGroup)).next(e=>(c.set(b.collectionGroup,e),ac.forEach(e,c=>this.En(a,b,c).next(b=>{let e=this.An(d,c);return b.isEqual(e)?ac.resolve():this.vn(a,d,c,b,e)}))))})}Rn(a,b,c,d){return ef(a).put({indexId:d.indexId,uid:this.uid,arrayValue:d.arrayValue,directionalValue:d.directionalValue,orderedDocumentKey:this.gn(c,b.key),documentKey:b.key.path.toArray()})}Pn(a,b,c,d){return ef(a).delete([d.indexId,this.uid,d.arrayValue,d.directionalValue,this.gn(c,b.key),b.key.path.toArray()])}En(a,b,c){let d=ef(a),e=new aM(d0);return d.X({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.gn(c,b)])},(a,d)=>{e=e.add(new d_(c.indexId,b,d.arrayValue,d.directionalValue))}).next(()=>e)}An(a,b){let c=new aM(d0),d=this.mn(b,a);if(null==d)return c;let e=S(b);if(null!=e){let f=a.data.field(e.fieldPath);if(ba(f))for(let g of f.arrayValue.values||[])c=c.add(new d_(b.indexId,a.key,this.dn(g),d))}else c=c.add(new d_(b.indexId,a.key,ec,d));return c}vn(a,b,c,d,e){q("IndexedDbIndexManager","Updating index entries for document '%s'",b.key);let f=[];return function(a,b,c,d,e){let f=a.getIterator(),g=b.getIterator(),h=aO(f),i=aO(g);for(;h||i;){let j=!1,k=!1;if(h&&i){let l=c(h,i);l<0?k=!0:l>0&&(j=!0)}else null!=h?k=!0:j=!0;j?(d(i),i=aO(g)):k?(e(h),h=aO(f)):(h=aO(f),i=aO(g))}}(d,e,d0,d=>{f.push(this.Rn(a,b,c,d))},d=>{f.push(this.Pn(a,b,c,d))}),ac.waitFor(f)}Tn(a){let b=1;return eh(a).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(a,c,d)=>{d.done(),b=c.sequenceNumber+1}).next(()=>b)}createRange(a,b,c){c=c.sort((a,b)=>d0(a,b)).filter((a,b,c)=>!b||0!==d0(a,c[b-1]));let d=[];for(let e of(d.push(a),c)){let f=d0(e,a),g=d0(e,b);if(0===f)d[0]=a.Je();else if(f>0&&g<0)d.push(e),d.push(e.Je());else if(g>0)break}d.push(b);let h=[];for(let i=0;i<d.length;i+=2){if(this.bn(d[i],d[i+1]))return[];let j=[d[i].indexId,this.uid,d[i].arrayValue,d[i].directionalValue,ec,[]],k=[d[i+1].indexId,this.uid,d[i+1].arrayValue,d[i+1].directionalValue,ec,[]];h.push(IDBKeyRange.bound(j,k))}return h}bn(a,b){return d0(a,b)>0}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(ei)}getMinOffset(a,b){return ac.mapArray(this.cn(b),b=>this.an(a,b).next(a=>a||u())).next(ei)}}function ee(a){return aF(a,"collectionParents")}function ef(a){return aF(a,"indexEntries")}function eg(a){return aF(a,"indexConfiguration")}function eh(a){return aF(a,"indexState")}function ei(a){var b;(b=0!==a.length)||u();let c=a[0].indexState.offset,d=c.largestBatchId;for(let e=1;e<a.length;e++){let f=a[e].indexState.offset;0>$(f,c)&&(c=f),d<f.largestBatchId&&(d=f.largestBatchId)}return new Z(c.readTime,c.documentKey,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ej={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ek{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new ek(a,ek.DEFAULT_COLLECTION_PERCENTILE,ek.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function el(a,b,c){let d=a.store("mutations"),e=a.store("documentMutations"),f=[],g=IDBKeyRange.only(c.batchId),h=0,i=d.X({range:g},(a,b,c)=>(h++,c.delete()));f.push(i.next(()=>{var a;(a=1===h)||u()}));let j=[];for(let k of c.mutations){let l=ax(b,k.key.path,c.batchId);f.push(e.delete(l)),j.push(k.key)}return ac.waitFor(f).next(()=>j)}function em(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw u();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ ek.DEFAULT_COLLECTION_PERCENTILE=10,ek.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ek.DEFAULT=new ek(41943040,ek.DEFAULT_COLLECTION_PERCENTILE,ek.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ek.DISABLED=new ek(-1,0,0);class en{constructor(a,b,c,d){this.userId=a,this.serializer=b,this.indexManager=c,this.referenceDelegate=d,this.Vn={}}static de(a,b,c,d){var e;(e=""!==a.uid)||u();let f=a.isAuthenticated()?a.uid:"";return new en(f,b,c,d)}checkEmpty(a){let b=!0,c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ep(a).X({index:"userMutationsIndex",range:c},(a,c,d)=>{b=!1,d.done()}).next(()=>b)}addMutationBatch(a,b,c,d){let e=eq(a),f=ep(a);return f.add({}).next(g=>{var h;(h="number"==typeof g)||u();let i=new cR(g,b,c,d),j=function(a,b,c){let d=c.baseMutations.map(b=>dv(a.fe,b)),e=c.mutations.map(b=>dv(a.fe,b));return{userId:b,batchId:c.batchId,localWriteTimeMs:c.localWriteTime.toMillis(),baseMutations:d,mutations:e}}(this.serializer,this.userId,i),k=[],l=new aM((a,b)=>H(a.canonicalString(),b.canonicalString()));for(let m of d){let n=ax(this.userId,m.key.path,g);l=l.add(m.key.path.popLast()),k.push(f.put(j)),k.push(e.put(n,ay))}return l.forEach(b=>{k.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.Vn[g]=i.keys()}),ac.waitFor(k).next(()=>i)})}lookupMutationBatch(a,b){return ep(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||u(),dM(this.serializer,a)):null})}Sn(a,b){return this.Vn[b]?ac.resolve(this.Vn[b]):this.lookupMutationBatch(a,b).next(a=>{if(a){let c=a.keys();return this.Vn[b]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return ep(a).X({index:"userMutationsIndex",range:d},(a,b,d)=>{var f;b.userId===this.userId&&(b.batchId>=c||u(),e=dM(this.serializer,b)),d.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return ep(a).X({index:"userMutationsIndex",range:b,reverse:!0},(a,b,d)=>{c=b.batchId,d.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ep(a).j("userMutationsIndex",b).next(a=>a.map(a=>dM(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=aw(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return eq(a).X({range:d},(c,d,f)=>{let[g,h,i]=c,j=av(h);if(g===this.userId&&b.path.isEqual(j))return ep(a).get(i).next(a=>{var b;if(!a)throw u();a.userId===this.userId||u(),e.push(dM(this.serializer,a))});f.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new aM(H),d=[];return b.forEach(b=>{let e=aw(this.userId,b.path),f=IDBKeyRange.lowerBound(e),g=eq(a).X({range:f},(a,d,e)=>{let[f,g,h]=a,i=av(g);f===this.userId&&b.path.isEqual(i)?c=c.add(h):e.done()});d.push(g)}),ac.waitFor(d).next(()=>this.Dn(a,c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=aw(this.userId,c),f=IDBKeyRange.lowerBound(e),g=new aM(H);return eq(a).X({range:f},(a,b,e)=>{let[f,h,i]=a,j=av(h);f===this.userId&&c.isPrefixOf(j)?j.length===d&&(g=g.add(i)):e.done()}).next(()=>this.Dn(a,g))}Dn(a,b){let c=[],d=[];return b.forEach(b=>{d.push(ep(a).get(b).next(a=>{var b;if(null===a)throw u();a.userId===this.userId||u(),c.push(dM(this.serializer,a))}))}),ac.waitFor(d).next(()=>c)}removeMutationBatch(a,b){return el(a.ht,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.Cn(b.batchId)}),ac.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}Cn(a){delete this.Vn[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return ac.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return eq(a).X({range:c},(a,b,c)=>{if(a[0]===this.userId){let e=av(a[1]);d.push(e)}else c.done()}).next(()=>{var a;(a=0===d.length)||u()})})}containsKey(a,b){return eo(a,this.userId,b)}xn(a){return er(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function eo(a,b,c){let d=aw(b,c.path),e=d[1],f=IDBKeyRange.lowerBound(d),g=!1;return eq(a).X({range:f,Y:!0},(a,c,d)=>{let[f,h,i]=a;f===b&&h===e&&(g=!0),d.done()}).next(()=>g)}function ep(a){return aF(a,"mutations")}function eq(a){return aF(a,"documentMutations")}function er(a){return aF(a,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class es{constructor(a){this.Nn=a}next(){return this.Nn+=2,this.Nn}static kn(){return new es(0)}static Mn(){return new es(-1)}}function et(a){return aF(a,"targets")}function eu(a){return aF(a,"targetGlobal")}function ev(a){return aF(a,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ew([a,b],[c,d]){let e=H(a,c);return 0===e?H(b,d):e}class ex{constructor(a){this.Ln=a,this.buffer=new aM(ew),this.qn=0}Un(){return++this.qn}Kn(a){let b=[a,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(b);else{let c=this.buffer.last();0>ew(b,c)&&(this.buffer=this.buffer.delete(c).add(b))}}get maxValue(){return this.buffer.last()[0]}}class ey{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(a){q("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){ah(a)?q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await ab(a)}await this.Qn(3e5)})}}class ez{constructor(a,b){this.jn=a,this.params=b}calculateTargetCount(a,b){return this.jn.zn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(a,b){if(0===b)return ac.resolve(ao.ct);let c=new ex(b);return this.jn.forEachTarget(a,a=>c.Kn(a.sequenceNumber)).next(()=>this.jn.Wn(a,a=>c.Kn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.jn.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.jn.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector","Garbage collection skipped; disabled"),ac.resolve(ej)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ej):this.Hn(a,b))}getCacheSize(a){return this.jn.getCacheSize(a)}Hn(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),p()<=LogLevel.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),ac.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}function eA(a,b){return new ez(a,b)}function eB(a,b){var c,d;return ev(a).put((c=b,d=a.currentSequenceNumber,{targetId:0,path:as(c.path),sequenceNumber:d}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class eC{constructor(){this.changes=new b9(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,bm.newInvalidDocument(a).setReadTime(b))}getEntry(a,b){this.assertNotApplied();let c=this.changes.get(b);return void 0!==c?ac.resolve(c):this.getFromCache(a,b)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class eD{constructor(a){this.serializer=a}setIndexManager(a){this.indexManager=a}addEntry(a,b,c){return eH(a).put(c)}removeEntry(a,b,c){return eH(a).delete(function(a,b){let c=a.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],dJ(b),c[c.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.Zn(a,c)))}getEntry(a,b){let c=bm.newInvalidDocument(b);return eH(a).X({index:"documentKeyIndex",range:IDBKeyRange.only(eI(b))},(a,d)=>{c=this.ts(b,d)}).next(()=>c)}es(a,b){let c={size:0,document:bm.newInvalidDocument(b)};return eH(a).X({index:"documentKeyIndex",range:IDBKeyRange.only(eI(b))},(a,d)=>{c={document:this.ts(b,d),size:em(d)}}).next(()=>c)}getEntries(a,b){let c=ca;return this.ns(a,b,(a,b)=>{let d=this.ts(a,b);c=c.insert(a,d)}).next(()=>c)}ss(a,b){let c=ca,d=new aJ(Q.comparator);return this.ns(a,b,(a,b)=>{let e=this.ts(a,b);c=c.insert(a,e),d=d.insert(a,em(b))}).next(()=>({documents:c,rs:d}))}ns(a,b,c){if(b.isEmpty())return ac.resolve();let d=new aM(eK);b.forEach(a=>d=d.add(a));let e=IDBKeyRange.bound(eI(d.first()),eI(d.last())),f=d.getIterator(),g=f.getNext();return eH(a).X({index:"documentKeyIndex",range:e},(a,b,d)=>{let e=Q.fromSegments([...b.prefixPath,b.collectionGroup,b.documentId]);for(;g&&0>eK(g,e);)c(g,null),g=f.getNext();g&&g.isEqual(e)&&(c(g,b),g=f.hasNext()?f.getNext():null),g?d.G(eI(g)):d.done()}).next(()=>{for(;g;)c(g,null),g=f.hasNext()?f.getNext():null})}getDocumentsMatchingQuery(a,b,c,d){let e=b.path,f=[e.popLast().toArray(),e.lastSegment(),dJ(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],g=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return eH(a).j(IDBKeyRange.bound(f,g,!0)).next(a=>{let c=ca;for(let e of a){let f=this.ts(Q.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);f.isFoundDocument()&&(b5(b,f)||d.has(f.key))&&(c=c.insert(f.key,f))}return c})}getAllFromCollectionGroup(a,b,c,d){let e=ca,f=eJ(b,c),g=eJ(b,Z.max());return eH(a).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(f,g,!0)},(a,b,c)=>{let f=this.ts(Q.fromSegments(b.prefixPath.concat(b.collectionGroup,b.documentId)),b);(e=e.insert(f.key,f)).size===d&&c.done()}).next(()=>e)}newChangeBuffer(a){return new eF(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return eG(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&u(),a})}Zn(a,b){return eG(a).put("remoteDocumentGlobalKey",b)}ts(a,b){if(b){let c=function(a,b){let c;if(b.document)c=du(a.fe,b.document,!!b.hasCommittedMutations);else if(b.noDocument){let d=Q.fromSegments(b.noDocument.path),e=dL(b.noDocument.readTime);c=bm.newNoDocument(d,e),b.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!b.unknownDocument)return u();{let f=Q.fromSegments(b.unknownDocument.path),g=dL(b.unknownDocument.version);c=bm.newUnknownDocument(f,g)}}return b.readTime&&c.setReadTime(function(a){let b=new K(a[0],a[1]);return L.fromTimestamp(b)}(b.readTime)),c}(this.serializer,b);if(!(c.isNoDocument()&&c.version.isEqual(L.min())))return c}return bm.newInvalidDocument(a)}}function eE(a){return new eD(a)}class eF extends null{constructor(a,b){super(),this.os=a,this.trackRemovals=b,this.us=new b9(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(a){let b=[],c=0,d=new aM((a,b)=>H(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.us.get(e);if(b.push(this.os.removeEntry(a,e,g.readTime)),f.isValidDocument()){let h=dI(this.os.serializer,f);d=d.add(e.path.popLast());let i=em(h);c+=i-g.size,b.push(this.os.addEntry(a,e,h))}else if(c-=g.size,this.trackRemovals){let j=dI(this.os.serializer,f.convertToNoDocument(L.min()));b.push(this.os.addEntry(a,e,j))}}),d.forEach(c=>{b.push(this.os.indexManager.addToCollectionParentIndex(a,c))}),b.push(this.os.updateMetadata(a,c)),ac.waitFor(b)}getFromCache(a,b){return this.os.es(a,b).next(a=>(this.us.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.os.ss(a,b).next(({documents:a,rs:b})=>(b.forEach((b,c)=>{this.us.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function eG(a){return aF(a,"remoteDocumentGlobal")}function eH(a){return aF(a,"remoteDocumentsV14")}function eI(a){let b=a.path.toArray();return[b.slice(0,b.length-2),b[b.length-2],b[b.length-1]]}function eJ(a,b){let c=b.documentKey.path.toArray();return[a,dJ(b.readTime),c.slice(0,c.length-2),c.length>0?c[c.length-1]:""]}function eK(a,b){let c=a.path.toArray(),d=b.path.toArray(),e=0;for(let f=0;f<c.length-2&&f<d.length-2;++f)if(e=H(c[f],d[f]))return e;return(e=H(c.length,d.length))||(e=H(c[c.length-2],d[d.length-2]))||H(c[c.length-1],d[d.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class eL{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class eM{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.remoteDocumentCache.getEntry(a,b))).next(a=>(null!==c&&cH(c.mutation,a,aP.empty(),K.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,cj()).next(()=>b))}getLocalViewOfDocuments(a,b,c=cj()){let d=ce();return this.populateOverlays(a,d,b).next(()=>this.computeViews(a,b,d,c).next(a=>{let b=cc();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=ce();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,cj()))}populateOverlays(a,b,c){let d=[];return c.forEach(a=>{b.has(a)||d.push(a)}),this.documentOverlayCache.getOverlays(a,d).next(a=>{a.forEach((a,c)=>{b.set(a,c)})})}computeViews(a,b,c,d){let e=ca,f=cg(),g=cg();return b.forEach((a,b)=>{let g=c.get(b.key);d.has(b.key)&&(void 0===g||g.mutation instanceof cL)?e=e.insert(b.key,b):void 0!==g?(f.set(b.key,g.mutation.getFieldMask()),cH(g.mutation,b,g.mutation.getFieldMask(),K.now())):f.set(b.key,aP.empty())}),this.recalculateAndSaveOverlays(a,e).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((a,b)=>{var c;return g.set(a,new eL(b,null!==(c=f.get(a))&& void 0!==c?c:null))}),g))}recalculateAndSaveOverlays(a,b){let c=cg(),d=new aJ((a,b)=>a-b),e=cj();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let f=b.get(a);if(null===f)return;let g=c.get(a)||aP.empty();g=e.applyToLocalView(f,g),c.set(a,g);let h=(d.get(e.batchId)||cj()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=cf();j.forEach(a=>{if(!e.has(a)){let d=cF(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return ac.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(a,b,c){var d;return(d=b,Q.isDocumentKey(d.path)&&null===d.collectionGroup&&0===d.filters.length)?this.getDocumentsMatchingDocumentQuery(a,b.path):bZ(b)?this.getDocumentsMatchingCollectionGroupQuery(a,b,c):this.getDocumentsMatchingCollectionQuery(a,b,c)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):ac.resolve(ce()),g=-1,h=e;return f.next(b=>ac.forEach(b,(b,c)=>(g<c.largestBatchId&&(g=c.largestBatchId),e.get(b)?ac.resolve():this.remoteDocumentCache.getEntry(a,b).next(a=>{h=h.insert(b,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,cj())).next(a=>({batchId:g,changes:cd(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new Q(b)).next(a=>{let b=cc();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,c){let d=b.collectionGroup,e=cc();return this.indexManager.getCollectionParents(a,d).next(f=>ac.forEach(f,f=>{var g,h;let i=(g=b,h=f.child(d),new bT(h,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,c).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId).next(e=>(d=e,this.remoteDocumentCache.getDocumentsMatchingQuery(a,b,c,d))).next(a=>{d.forEach((b,c)=>{let d=c.getKey();null===a.get(d)&&(a=a.insert(d,bm.newInvalidDocument(d)))});let c=cc();return a.forEach((a,e)=>{let f=d.get(a);void 0!==f&&cH(f.mutation,e,aP.empty(),K.now()),b5(b,e)&&(c=c.insert(a,e))}),c})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class eN{constructor(){this.overlays=new aJ(Q.comparator),this.ls=new Map}getOverlay(a,b){return ac.resolve(this.overlays.get(b))}getOverlays(a,b){let c=ce();return ac.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){return c.forEach((c,d)=>{this.we(a,b,d)}),ac.resolve()}removeOverlaysForBatchId(a,b,c){let d=this.ls.get(c);return void 0!==d&&(d.forEach(a=>this.overlays=this.overlays.remove(a)),this.ls.delete(c)),ac.resolve()}getOverlaysForCollection(a,b,c){let d=ce(),e=b.length+1,f=new Q(b.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){let h=g.getNext().value,i=h.getKey();if(!b.isPrefixOf(i.path))break;i.path.length===e&&h.largestBatchId>c&&d.set(h.getKey(),h)}return ac.resolve(d)}getOverlaysForCollectionGroup(a,b,c,d){let e=new aJ((a,b)=>a-b),f=this.overlays.getIterator();for(;f.hasNext();){let g=f.getNext().value;if(g.getKey().getCollectionGroup()===b&&g.largestBatchId>c){let h=e.get(g.largestBatchId);null===h&&(h=ce(),e=e.insert(g.largestBatchId,h)),h.set(g.getKey(),g)}}let i=ce(),j=e.getIterator();for(;j.hasNext()&&(j.getNext().value.forEach((a,b)=>i.set(a,b)),!(i.size()>=d)););return ac.resolve(i)}we(a,b,c){let d=this.overlays.get(c.key);if(null!==d){let e=this.ls.get(d.largestBatchId).delete(c.key);this.ls.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new cT(b,c));let f=this.ls.get(b);void 0===f&&(f=cj(),this.ls.set(b,f)),this.ls.set(b,f.add(c.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class eO{constructor(){this.fs=new aM(eP.ds),this.ws=new aM(eP._s)}isEmpty(){return this.fs.isEmpty()}addReference(a,b){let c=new eP(a,b);this.fs=this.fs.add(c),this.ws=this.ws.add(c)}gs(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.ys(new eP(a,b))}ps(a,b){a.forEach(a=>this.removeReference(a,b))}Is(a){let b=new Q(new N([])),c=new eP(b,a),d=new eP(b,a+1),e=[];return this.ws.forEachInRange([c,d],a=>{this.ys(a),e.push(a.key)}),e}Ts(){this.fs.forEach(a=>this.ys(a))}ys(a){this.fs=this.fs.delete(a),this.ws=this.ws.delete(a)}Es(a){let b=new Q(new N([])),c=new eP(b,a),d=new eP(b,a+1),e=cj();return this.ws.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let b=new eP(a,0),c=this.fs.firstAfterOrEqual(b);return null!==c&&a.isEqual(c.key)}}class eP{constructor(a,b){this.key=a,this.As=b}static ds(a,b){return Q.comparator(a.key,b.key)||H(a.As,b.As)}static _s(a,b){return H(a.As,b.As)||Q.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eQ{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.vs=1,this.Rs=new aM(eP.ds)}checkEmpty(a){return ac.resolve(0===this.mutationQueue.length)}addMutationBatch(a,b,c,d){let e=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let f=new cR(e,b,c,d);for(let g of(this.mutationQueue.push(f),d))this.Rs=this.Rs.add(new eP(g.key,e)),this.indexManager.addToCollectionParentIndex(a,g.key.path.popLast());return ac.resolve(f)}lookupMutationBatch(a,b){return ac.resolve(this.Ps(b))}getNextMutationBatchAfterBatchId(a,b){let c=this.bs(b+1),d=c<0?0:c;return ac.resolve(this.mutationQueue.length>d?this.mutationQueue[d]:null)}getHighestUnacknowledgedBatchId(){return ac.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(a){return ac.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(a,b){let c=new eP(b,0),d=new eP(b,Number.POSITIVE_INFINITY),e=[];return this.Rs.forEachInRange([c,d],a=>{let b=this.Ps(a.As);e.push(b)}),ac.resolve(e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new aM(H);return b.forEach(a=>{let b=new eP(a,0),d=new eP(a,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([b,d],a=>{c=c.add(a.As)})}),ac.resolve(this.Vs(c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c;Q.isDocumentKey(e)||(e=e.child(""));let f=new eP(new Q(e),0),g=new aM(H);return this.Rs.forEachWhile(a=>{let b=a.key.path;return!!c.isPrefixOf(b)&&(b.length===d&&(g=g.add(a.As)),!0)},f),ac.resolve(this.Vs(g))}Vs(a){let b=[];return a.forEach(a=>{let c=this.Ps(a);null!==c&&b.push(c)}),b}removeMutationBatch(a,b){var c;0===this.Ss(b.batchId,"removed")||u(),this.mutationQueue.shift();let d=this.Rs;return ac.forEach(b.mutations,c=>{let e=new eP(c.key,b.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(a,c.key)}).next(()=>{this.Rs=d})}Cn(a){}containsKey(a,b){let c=new eP(b,0),d=this.Rs.firstAfterOrEqual(c);return ac.resolve(b.isEqual(d&&d.key))}performConsistencyCheck(a){return this.mutationQueue.length,ac.resolve()}Ss(a,b){return this.bs(a)}bs(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}Ps(a){let b=this.bs(a);return b<0||b>=this.mutationQueue.length?null:this.mutationQueue[b]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class eR{constructor(a){this.Ds=a,this.docs=new aJ(Q.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(a,b){let c=b.key,d=this.docs.get(c),e=d?d.size:0,f=this.Ds(b);return this.docs=this.docs.insert(c,{document:b.mutableCopy(),size:f}),this.size+=f-e,this.indexManager.addToCollectionParentIndex(a,c.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(a,b){let c=this.docs.get(b);return ac.resolve(c?c.document.mutableCopy():bm.newInvalidDocument(b))}getEntries(a,b){let c=ca;return b.forEach(a=>{let b=this.docs.get(a);c=c.insert(a,b?b.document.mutableCopy():bm.newInvalidDocument(a))}),ac.resolve(c)}getDocumentsMatchingQuery(a,b,c,d){let e=ca,f=b.path,g=new Q(f.child("")),h=this.docs.getIteratorFrom(g);for(;h.hasNext();){let{key:i,value:{document:j}}=h.getNext();if(!f.isPrefixOf(i.path))break;i.path.length>f.length+1||0>=$(Y(j),c)||(d.has(j.key)||b5(b,j))&&(e=e.insert(j.key,j.mutableCopy()))}return ac.resolve(e)}getAllFromCollectionGroup(a,b,c,d){u()}Cs(a,b){return ac.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new eS(this)}getSize(a){return ac.resolve(this.size)}}class eS extends eC{constructor(a){super(),this.os=a}applyChanges(a){let b=[];return this.changes.forEach((c,d)=>{d.isValidDocument()?b.push(this.os.addEntry(a,d)):this.os.removeEntry(c)}),ac.waitFor(b)}getFromCache(a,b){return this.os.getEntry(a,b)}getAllFromCache(a,b){return this.os.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class eT{constructor(a,b){this.$s={},this.overlays={},this.Os=new ao(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=a(this),this.Bs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.xs=new b9(a=>bN(a),bO),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Ns=0,this.ks=new eO,this.targetCount=0,this.Ms=es.kn()}forEachTarget(a,b){return this.xs.forEach((a,c)=>b(c)),ac.resolve()}getLastRemoteSnapshotVersion(a){return ac.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return ac.resolve(this.Ns)}allocateTargetId(a){return this.highestTargetId=this.Ms.next(),ac.resolve(this.highestTargetId)}setTargetsMetadata(a,b,c){return c&&(this.lastRemoteSnapshotVersion=c),b>this.Ns&&(this.Ns=b),ac.resolve()}Fn(a){this.xs.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.Ms=new es(b),this.highestTargetId=b),a.sequenceNumber>this.Ns&&(this.Ns=a.sequenceNumber)}addTargetData(a,b){return this.Fn(b),this.targetCount+=1,ac.resolve()}updateTargetData(a,b){return this.Fn(b),ac.resolve()}removeTargetData(a,b){return this.xs.delete(b.target),this.ks.Is(b.targetId),this.targetCount-=1,ac.resolve()}removeTargets(a,b,c){let d=0,e=[];return this.xs.forEach((f,g)=>{g.sequenceNumber<=b&&null===c.get(g.targetId)&&(this.xs.delete(f),e.push(this.removeMatchingKeysForTargetId(a,g.targetId)),d++)}),ac.waitFor(e).next(()=>d)}getTargetCount(a){return ac.resolve(this.targetCount)}getTargetData(a,b){let c=this.xs.get(b)||null;return ac.resolve(c)}addMatchingKeys(a,b,c){return this.ks.gs(b,c),ac.resolve()}removeMatchingKeys(a,b,c){this.ks.ps(b,c);let d=this.persistence.referenceDelegate,e=[];return d&&b.forEach(b=>{e.push(d.markPotentiallyOrphaned(a,b))}),ac.waitFor(e)}removeMatchingKeysForTargetId(a,b){return this.ks.Is(b),ac.resolve()}getMatchingKeysForTargetId(a,b){let c=this.ks.Es(b);return ac.resolve(c)}containsKey(a,b){return ac.resolve(this.ks.containsKey(b))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.rn=new eb}addToCollectionParentIndex(a,b){return this.rn.add(b),ac.resolve()}getCollectionParents(a,b){return ac.resolve(this.rn.getEntries(b))}addFieldIndex(a,b){return ac.resolve()}deleteFieldIndex(a,b){return ac.resolve()}getDocumentsMatchingTarget(a,b){return ac.resolve(null)}getIndexType(a,b){return ac.resolve(0)}getFieldIndexes(a,b){return ac.resolve([])}getNextCollectionGroupToUpdate(a){return ac.resolve(null)}getMinOffset(a,b){return ac.resolve(Z.min())}getMinOffsetFromCollectionGroup(a,b){return ac.resolve(Z.min())}updateCollectionGroup(a,b,c){return ac.resolve()}updateIndexEntries(a,b){return ac.resolve()}},this.remoteDocumentCache=function(a){return new eR(a)}(a=>this.referenceDelegate.Ls(a)),this.serializer=new dH(b),this.qs=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.serializer=a,this.cs=new Map,this.hs=new Map}getBundleMetadata(a,b){return ac.resolve(this.cs.get(b))}saveBundleMetadata(a,b){var c;return this.cs.set(b.id,{id:(c=b).id,version:c.version,createTime:dj(c.createTime)}),ac.resolve()}getNamedQuery(a,b){return ac.resolve(this.hs.get(b))}saveNamedQuery(a,b){var c;return this.hs.set(b.name,{name:(c=b).name,query:dP(c.bundledQuery),readTime:dj(c.readTime)}),ac.resolve()}}(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(a){let b=this.overlays[a.toKey()];return b||(b=new eN,this.overlays[a.toKey()]=b),b}getMutationQueue(a,b){let c=this.$s[a.toKey()];return c||(c=new eQ(b,this.referenceDelegate),this.$s[a.toKey()]=c),c}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(a,b,c){q("MemoryPersistence","Starting transaction:",a);let d=new eU(this.Os.next());return this.referenceDelegate.Us(),c(d).next(a=>this.referenceDelegate.Ks(d).next(()=>a)).toPromise().then(a=>(d.raiseOnCommittedEvent(),a))}Gs(a,b){return ac.or(Object.values(this.$s).map(c=>()=>c.containsKey(a,b)))}}class eU extends aa{constructor(a){super(),this.currentSequenceNumber=a}}class eV{constructor(a){this.persistence=a,this.Qs=new eO,this.js=null}static zs(a){return new eV(a)}get Ws(){if(this.js)return this.js;throw u()}addReference(a,b,c){return this.Qs.addReference(c,b),this.Ws.delete(c.toString()),ac.resolve()}removeReference(a,b,c){return this.Qs.removeReference(c,b),this.Ws.add(c.toString()),ac.resolve()}markPotentiallyOrphaned(a,b){return this.Ws.add(b.toString()),ac.resolve()}removeTarget(a,b){this.Qs.Is(b.targetId).forEach(a=>this.Ws.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(a,b.targetId).next(a=>{a.forEach(a=>this.Ws.add(a.toString()))}).next(()=>c.removeTargetData(a,b))}Us(){this.js=new Set}Ks(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ac.forEach(this.Ws,c=>{let d=Q.fromPath(c);return this.Hs(a,d).next(a=>{a||b.removeEntry(d,L.min())})}).next(()=>(this.js=null,b.apply(a)))}updateLimboDocument(a,b){return this.Hs(a,b).next(a=>{a?this.Ws.delete(b.toString()):this.Ws.add(b.toString())})}Ls(a){return 0}Hs(a,b){return ac.or([()=>ac.resolve(this.Qs.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Gs(a,b)])}}class eW{constructor(a,b){this.persistence=a,this.Js=new b9(a=>as(a.path),(a,b)=>a.isEqual(b)),this.garbageCollector=eA(this,b)}static zs(a,b){return new eW(a,b)}Us(){}Ks(a){return ac.resolve()}forEachTarget(a,b){return this.persistence.getTargetCache().forEachTarget(a,b)}zn(a){let b=this.Jn(a);return this.persistence.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}Jn(a){let b=0;return this.Wn(a,a=>{b++}).next(()=>b)}Wn(a,b){return ac.forEach(this.Js,(c,d)=>this.Xn(a,c,d).next(a=>a?ac.resolve():b(d)))}removeTargets(a,b,c){return this.persistence.getTargetCache().removeTargets(a,b,c)}removeOrphanedDocuments(a,b){let c=0,d=this.persistence.getRemoteDocumentCache(),e=d.newChangeBuffer();return d.Cs(a,d=>this.Xn(a,d,b).next(a=>{a||(c++,e.removeEntry(d,L.min()))})).next(()=>e.apply(a)).next(()=>c)}markPotentiallyOrphaned(a,b){return this.Js.set(b,a.currentSequenceNumber),ac.resolve()}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(a,c)}addReference(a,b,c){return this.Js.set(c,a.currentSequenceNumber),ac.resolve()}removeReference(a,b,c){return this.Js.set(c,a.currentSequenceNumber),ac.resolve()}updateLimboDocument(a,b){return this.Js.set(b,a.currentSequenceNumber),ac.resolve()}Ls(a){let b=a.key.toString().length;return a.isFoundDocument()&&(b+=a7(a.data.value)),b}Xn(a,b,c){return ac.or([()=>this.persistence.Gs(a,b),()=>this.persistence.getTargetCache().containsKey(a,b),()=>{let a=this.Js.get(b);return ac.resolve(void 0!==a&&a>c)}])}getCacheSize(a){return this.persistence.getRemoteDocumentCache().getSize(a)}}function eX(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let eY="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class eZ{constructor(a,b,c,d,e,f,g,h,i,j,k=15){if(this.allowTabSynchronization=a,this.persistenceKey=b,this.clientId=c,this.ii=e,this.window=f,this.document=g,this.ri=i,this.oi=j,this.ui=k,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=a=>Promise.resolve(),!eZ.D())throw new w(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(a,b){this.db=a,this.garbageCollector=eA(this,b)}zn(a){let b=this.Jn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}Jn(a){let b=0;return this.Wn(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Wn(a,b){return this.Yn(a,(a,c)=>b(c))}addReference(a,b,c){return eB(a,c)}removeReference(a,b,c){return eB(a,c)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return eB(a,b)}Xn(a,b){var c,d;let e;return c=a,d=b,e=!1,er(c).Z(a=>eo(c,a,d).next(a=>(a&&(e=!0),ac.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Yn(a,(f,g)=>{if(g<=b){let h=this.Xn(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,L.min()),ev(a).delete([0,as(f.path)])))});d.push(h)}}).next(()=>ac.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return eB(a,b)}Yn(a,b){let c=ev(a),d,e=ao.ct;return c.X({index:"documentTargetsIndex"},([a,c],{path:f,sequenceNumber:g})=>{0===a?(e!==ao.ct&&b(new Q(av(d)),e),e=g,d=f):e=ao.ct}).next(()=>{e!==ao.ct&&b(new Q(av(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,d),this.di=b+"main",this.serializer=new dH(h),this.wi=new ae(this.di,this.ui,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.serializer=a}O(a,b,c,d){var e,f;let g=new ad("createOrUpgrade",b);c<1&&d>=1&&(function(a){a.createObjectStore("owner")}(a),(e=a).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),eX(a),function(a){a.createObjectStore("remoteDocuments")}(a));let h=ac.resolve();return c<3&&d>=3&&(0!==c&&((f=a).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),eX(a)),h=h.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(g))),c<4&&d>=4&&(0!==c&&(h=h.next(()=>{var b,c;return b=a,(c=g).store("mutations").j().next(a=>{b.deleteObjectStore("mutations"),b.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let d=c.store("mutations"),e=a.map(a=>d.put(a));return ac.waitFor(e)})})),h=h.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(a)})),c<5&&d>=5&&(h=h.next(()=>this.Ys(g))),c<6&&d>=6&&(h=h.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(a),this.Xs(g)))),c<7&&d>=7&&(h=h.next(()=>this.Zs(g))),c<8&&d>=8&&(h=h.next(()=>this.ti(a,g))),c<9&&d>=9&&(h=h.next(()=>{var b;(b=a).objectStoreNames.contains("remoteDocumentChanges")&&b.deleteObjectStore("remoteDocumentChanges")})),c<10&&d>=10&&(h=h.next(()=>this.ei(g))),c<11&&d>=11&&(h=h.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(a),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(a)})),c<12&&d>=12&&(h=h.next(()=>{!function(a){let b=a.createObjectStore("documentOverlays",{keyPath:null});b.createIndex("collectionPathOverlayIndex",null,{unique:!1}),b.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(a)})),c<13&&d>=13&&(h=h.next(()=>(function(a){let b=a.createObjectStore("remoteDocumentsV14",{keyPath:null});b.createIndex("documentKeyIndex",null),b.createIndex("collectionGroupIndex",null)})(a)).next(()=>this.ni(a,g)).next(()=>a.deleteObjectStore("remoteDocuments"))),c<14&&d>=14&&(h=h.next(()=>this.si(a,g))),c<15&&d>=15&&(h=h.next(()=>{var b;(b=a).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),b.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),b.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),h}Xs(a){let b=0;return a.store("remoteDocuments").X((a,c)=>{b+=em(c)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}Ys(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.j().next(b=>ac.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.j("userMutationsIndex",d).next(c=>ac.forEach(c,c=>{var d;(d=c.userId===b.userId)||u();let e=dM(this.serializer,c);return el(a,b.userId,e).next(()=>{})}))}))}Zs(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.X((c,e)=>{var f;let g=new N(c),h=[0,as(f=g)];d.push(b.get(h).next(c=>{var d;return c?ac.resolve():(d=g,b.put({targetId:0,path:as(d),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>ac.waitFor(d))})}ti(a,b){a.createObjectStore("collectionParents",{keyPath:null});let c=b.store("collectionParents"),d=new eb,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:as(e)})}};return b.store("remoteDocuments").X({Y:!0},(a,b)=>{let c=new N(a);return e(c.popLast())}).next(()=>b.store("documentMutations").X({Y:!0},([a,b,c],d)=>{let f=av(b);return e(f.popLast())}))}ei(a){let b=a.store("targets");return b.X((a,c)=>{let d=dN(c),e=dO(this.serializer,d);return b.put(e)})}ni(a,b){let c=b.store("remoteDocuments"),d=[];return c.X((a,c)=>{var e;let f=b.store("remoteDocumentsV14"),g=((e=c).document?new Q(N.fromString(e.document.name).popFirst(5)):e.noDocument?Q.fromSegments(e.noDocument.path):e.unknownDocument?Q.fromSegments(e.unknownDocument.path):u()).path.toArray(),h={prefixPath:g.slice(0,g.length-2),collectionGroup:g[g.length-2],documentId:g[g.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};d.push(f.put(h))}).next(()=>ac.waitFor(d))}si(a,b){let c=b.store("mutations"),d=eE(this.serializer),e=new eT(eV.zs,this.serializer.fe);return c.j().next(a=>{let c=new Map;return a.forEach(a=>{var b;let d=null!==(b=c.get(a.userId))&& void 0!==b?b:cj();dM(this.serializer,a).keys().forEach(a=>d=d.add(a)),c.set(a.userId,d)}),ac.forEach(c,(a,c)=>{let f=new m(c),g=dV.de(this.serializer,f),h=e.getIndexManager(f),i=en.de(f,this.serializer,h,e.referenceDelegate);return new eM(d,i,g,h).recalculateAndSaveOverlaysForDocumentKeys(new aE(b,ao.ct),a).next()})})}}(this.serializer)),this.Bs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.serializer=b}allocateTargetId(a){return this.$n(a).next(b=>{let c=new es(b.highestTargetId);return b.highestTargetId=c.next(),this.On(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.$n(a).next(a=>L.fromTimestamp(new K(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.$n(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.$n(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.On(a,d)))}addTargetData(a,b){return this.Fn(a,b).next(()=>this.$n(a).next(c=>(c.targetCount+=1,this.Bn(b,c),this.On(a,c))))}updateTargetData(a,b){return this.Fn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>et(a).delete(b.targetId)).next(()=>this.$n(a)).next(b=>{var c;return b.targetCount>0||u(),b.targetCount-=1,this.On(a,b)})}removeTargets(a,b,c){let d=0,e=[];return et(a).X((f,g)=>{let h=dN(g);h.sequenceNumber<=b&&null===c.get(h.targetId)&&(d++,e.push(this.removeTargetData(a,h)))}).next(()=>ac.waitFor(e)).next(()=>d)}forEachTarget(a,b){return et(a).X((a,c)=>{let d=dN(c);b(d)})}$n(a){return eu(a).get("targetGlobalKey").next(a=>{var b;return null!==a||u(),a})}On(a,b){return eu(a).put("targetGlobalKey",b)}Fn(a,b){return et(a).put(dO(this.serializer,b))}Bn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.$n(a).next(a=>a.targetCount)}getTargetData(a,b){let c=bN(b),d=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]),e=null;return et(a).X({range:d,index:"queryTargetsIndex"},(a,c,d)=>{let f=dN(c);bO(b,f.target)&&(e=f,d.done())}).next(()=>e)}addMatchingKeys(a,b,c){let d=[],e=ev(a);return b.forEach(b=>{let f=as(b.path);d.push(e.put({targetId:c,path:f})),d.push(this.referenceDelegate.addReference(a,c,b))}),ac.waitFor(d)}removeMatchingKeys(a,b,c){let d=ev(a);return ac.forEach(b,b=>{let e=as(b.path);return ac.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(a,b){let c=ev(a),d=IDBKeyRange.bound([b],[b+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(a,b){let c=IDBKeyRange.bound([b],[b+1],!1,!0),d=ev(a),e=cj();return d.X({range:c,Y:!0},(a,b,c)=>{let d=av(a[1]),f=new Q(d);e=e.add(f)}).next(()=>e)}containsKey(a,b){let c=as(b.path),d=IDBKeyRange.bound([c],[J(c)],!1,!0),e=0;return ev(a).X({index:"documentTargetsIndex",Y:!0,range:d},([a,b],c,d)=>{0!==a&&(e++,d.done())}).next(()=>e>0)}le(a,b){return et(a).get(b).next(a=>a?dN(a):null)}}(this.referenceDelegate,this.serializer),this.remoteDocumentCache=eE(this.serializer),this.qs=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return dT(a).get(b).next(a=>{var b;if(a)return{id:(b=a).bundleId,createTime:dL(b.createTime),version:b.version}})}saveBundleMetadata(a,b){var c;return dT(a).put({bundleId:(c=b).id,createTime:dK(dj(c.createTime)),version:c.version})}getNamedQuery(a,b){return dU(a).get(b).next(a=>{var b;if(a)return{name:(b=a).name,query:dP(b.bundledQuery),readTime:dL(b.readTime)}})}saveNamedQuery(a,b){var c;return dU(a).put({name:(c=b).name,readTime:dK(dj(c.readTime)),bundledQuery:c.bundledQuery})}},this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===j&&r("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new w(v.FAILED_PRECONDITION,eY);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Bs.getHighestSequenceNumber(a))}).then(a=>{this.Os=new ao(a,this.ri)}).then(()=>{this.Fs=!0}).catch(a=>(this.wi&&this.wi.close(),Promise.reject(a)))}Ii(a){return this.fi=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.wi.B(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>e_(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(a).next(a=>{a||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(a)).next(b=>this.isPrimary&&!b?this.Ai(a).next(()=>!1):!!b&&this.vi(a).next(()=>!0))).catch(a=>{if(ah(a))return q("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return q("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.ii.enqueueRetryable(()=>this.fi(a)),this.isPrimary=a})}Ti(a){return e$(a).get("owner").next(a=>ac.resolve(this.Ri(a)))}Pi(a){return e_(a).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=aF(a,"clientMetadata");return b.j().next(a=>{let c=this.Si(a,18e5),d=a.filter(a=>-1===c.indexOf(a));return ac.forEach(d,a=>b.delete(a.clientId)).next(()=>d)})}).catch(()=>[]);if(this._i)for(let b of a)this._i.removeItem(this.Di(b.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(a){return!!a&&a.ownerId===this.clientId}Ei(a){return this.oi?ac.resolve(!0):e$(a).get("owner").next(b=>{if(null!==b&&this.Vi(b.leaseTimestampMs,5e3)&&!this.Ci(b.ownerId)){if(this.Ri(b)&&this.networkEnabled)return!0;if(!this.Ri(b)){if(!b.allowTabSynchronization)throw new w(v.FAILED_PRECONDITION,eY);return!1}}return!(!this.networkEnabled||!this.inForeground)||e_(a).j().next(a=>void 0===this.Si(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&q("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new aE(a,ao.ct);return this.Ai(b).next(()=>this.Pi(b))}),this.wi.close(),this.Mi()}Si(a,b){return a.filter(a=>this.Vi(a.updateTimeMs,b)&&!this.Ci(a.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",a=>e_(a).j().next(a=>this.Si(a,18e5).map(a=>a.clientId)))}get started(){return this.Fs}getMutationQueue(a,b){return en.de(a,this.serializer,b,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new ed(a,this.serializer.fe.databaseId)}getDocumentOverlayCache(a){return dV.de(this.serializer,a)}getBundleCache(){return this.qs}runTransaction(a,b,c){var d;q("IndexedDbPersistence","Starting transaction:",a);let e=15===(d=this.ui)?aD:14===d?aC:13===d?aB:12===d?aA:11===d?az:void u(),f;return this.wi.runTransaction(a,"readonly"===b?"readonly":"readwrite",e,d=>(f=new aE(d,this.Os?this.Os.next():ao.ct),"readwrite-primary"===b?this.Ti(f).next(a=>!!a||this.Ei(f)).next(b=>{if(!b)throw r(`Failed to obtain primary lease for action '${a}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new w(v.FAILED_PRECONDITION,_);return c(f)}).next(a=>this.vi(f).next(()=>a)):this.Oi(f).next(()=>c(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}Oi(a){return e$(a).get("owner").next(a=>{if(null!==a&&this.Vi(a.leaseTimestampMs,5e3)&&!this.Ci(a.ownerId)&&!this.Ri(a)&&!(this.oi||this.allowTabSynchronization&&a.allowTabSynchronization))throw new w(v.FAILED_PRECONDITION,eY)})}vi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return e$(a).put("owner",b)}static D(){return ae.D()}Ai(a){let b=e$(a);return b.get("owner").next(a=>this.Ri(a)?(q("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):ac.resolve())}Vi(a,b){let c=Date.now();return!(a<c-b)&&(!(a>c)||(r(`Detected an update time that is in the future: ${a} > ${c}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.ci=()=>{this.xi();let a=/(?:Version|Mobile)\/1[456]/;isSafari()&&(navigator.appVersion.match(a)||navigator.userAgent.match(a))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(a){var b;try{let c=null!==(null===(b=this._i)|| void 0===b?void 0:b.getItem(this.Di(a)));return q("IndexedDbPersistence",`Client '${a}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return r("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(a){r("Failed to set zombie client id.",a)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(a){}}Di(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function e$(a){return aF(a,"owner")}function e_(a){return aF(a,"clientMetadata")}function e0(a,b){let c=a.projectId;return a.isDefaultDatabase||(c+="."+a.database),"firestore/"+b+"/"+c+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class e1{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Fi=c,this.Bi=d}static Li(a,b){let c=cj(),d=cj();for(let e of b.docChanges)switch(e.type){case 0:c=c.add(e.doc.key);break;case 1:d=d.add(e.doc.key)}return new e1(a,b.fromCache,c,d)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class e2{constructor(){this.qi=!1}initialize(a,b){this.Ui=a,this.indexManager=b,this.qi=!0}getDocumentsMatchingQuery(a,b,c,d){return this.Ki(a,b).next(e=>e||this.Gi(a,b,d,c)).next(c=>c||this.Qi(a,b))}Ki(a,b){if(bW(b))return ac.resolve(null);let c=b_(b);return this.indexManager.getIndexType(a,c).next(d=>0===d?null:(null!==b.limit&&1===d&&(b=b1(b,null,"F"),c=b_(b)),this.indexManager.getDocumentsMatchingTarget(a,c).next(d=>{let e=cj(...d);return this.Ui.getDocuments(a,e).next(d=>this.indexManager.getMinOffset(a,c).next(c=>{let f=this.ji(b,d);return this.zi(b,f,e,c.readTime)?this.Ki(a,b1(b,null,"F")):this.Wi(a,f,b,c)}))})))}Gi(a,b,c,d){return bW(b)||d.isEqual(L.min())?this.Qi(a,b):this.Ui.getDocuments(a,c).next(e=>{let f=this.ji(b,e);return this.zi(b,f,c,d)?this.Qi(a,b):(p()<=h.in.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",d.toString(),b4(b)),this.Wi(a,f,b,X(d,-1)))})}ji(a,b){let c=new aM(b7(a));return b.forEach((b,d)=>{b5(a,d)&&(c=c.add(d))}),c}zi(a,b,c,d){if(null===a.limit)return!1;if(c.size!==b.size)return!0;let e="F"===a.limitType?b.last():b.first();return!!e&&(e.hasPendingWrites||e.version.compareTo(d)>0)}Qi(a,b){return p()<=h.in.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",b4(b)),this.Ui.getDocumentsMatchingQuery(a,b,Z.min())}Wi(a,b,c,d){return this.Ui.getDocumentsMatchingQuery(a,c,d).next(a=>(b.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class e3{constructor(a,b,c,d){this.persistence=a,this.Hi=b,this.serializer=d,this.Ji=new aJ(H),this.Yi=new b9(a=>bN(a),bO),this.Xi=new Map,this.Zi=a.getRemoteDocumentCache(),this.Bs=a.getTargetCache(),this.qs=a.getBundleCache(),this.tr(c)}tr(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new eM(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.Ji))}}function e4(a,b,c,d){return new e3(a,b,c,d)}async function e5(a,b){var c;let d=c=a;return await d.persistence.runTransaction("Handle user change","readonly",a=>{let c;return d.mutationQueue.getAllMutationBatches(a).next(e=>(c=e,d.tr(b),d.mutationQueue.getAllMutationBatches(a))).next(b=>{let e=[],f=[],g=cj();for(let h of c)for(let i of(e.push(h.batchId),h.mutations))g=g.add(i.key);for(let j of b)for(let k of(f.push(j.batchId),j.mutations))g=g.add(k.key);return d.localDocuments.getDocuments(a,g).next(a=>({er:a,removedBatchIds:e,addedBatchIds:f}))})})}function e6(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Bs.getLastRemoteSnapshotVersion(a))}function e7(a,b,c){let d=cj(),e=cj();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(a=>{let d=ca;return c.forEach((c,f)=>{let g=a.get(c);f.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(c)),f.isNoDocument()&&f.version.isEqual(L.min())?(b.removeEntry(c,f.readTime),d=d.insert(c,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||0===f.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(f),d=d.insert(c,f)):q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",f.version)}),{nr:d,sr:e}})}function e8(a,b){var c;let d=c=a;return d.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===b&&(b=-1),d.mutationQueue.getNextMutationBatchAfterBatchId(a,b)))}function e9(a,b){var c;let d=c=a;return d.persistence.runTransaction("Allocate target","readwrite",a=>{let c;return d.Bs.getTargetData(a,b).next(e=>e?(c=e,ac.resolve(c)):d.Bs.allocateTargetId(a).next(e=>(c=new dG(b,e,"TargetPurposeListen",a.currentSequenceNumber),d.Bs.addTargetData(a,c).next(()=>c))))}).then(a=>{let c=d.Ji.get(a.targetId);return(null===c||a.snapshotVersion.compareTo(c.snapshotVersion)>0)&&(d.Ji=d.Ji.insert(a.targetId,a),d.Yi.set(b,a.targetId)),a})}async function fa(a,b,c){var d;let e=d=a,f=e.Ji.get(b);try{c||await e.persistence.runTransaction("Release target",c?"readwrite":"readwrite-primary",a=>e.persistence.referenceDelegate.removeTarget(a,f))}catch(g){if(!ah(g))throw g;q("LocalStore",`Failed to update sequence numbers for target ${b}: ${g}`)}e.Ji=e.Ji.remove(b),e.Yi.delete(f.target)}function fb(a,b,c){var d;let e=d=a,f=L.min(),g=cj();return e.persistence.runTransaction("Execute query","readonly",a=>(function(a,b,c){var d;let e=d=a,f=e.Yi.get(c);return void 0!==f?ac.resolve(e.Ji.get(f)):e.Bs.getTargetData(b,c)})(e,a,b_(b)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,e.Bs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>e.Hi.getDocumentsMatchingQuery(a,b,c?f:L.min(),c?g:cj())).next(a=>(fe(e,b6(b),a),{documents:a,ir:g})))}function fc(a,b){var c,d;let e=c=a,f=d=e.Bs,g=e.Ji.get(b);return g?Promise.resolve(g.target):e.persistence.runTransaction("Get target data","readonly",a=>f.le(a,b).next(a=>a?a.target:null))}function fd(a,b){var c;let d=c=a,e=d.Xi.get(b)||L.min();return d.persistence.runTransaction("Get new document changes","readonly",a=>d.Zi.getAllFromCollectionGroup(a,b,X(e,-1),Number.MAX_SAFE_INTEGER)).then(a=>(fe(d,b,a),a))}function fe(a,b,c){let d=a.Xi.get(b)||L.min();c.forEach((a,b)=>{b.readTime.compareTo(d)>0&&(d=b.readTime)}),a.Xi.set(b,d)}async function ff(a,b,c,d){var e,f;let g=e=a,h=cj(),i=ca;for(let j of c){let k=b.rr(j.metadata.name);j.document&&(h=h.add(k));let l=b.ur(j);l.setReadTime(b.cr(j.metadata.readTime)),i=i.insert(k,l)}let m=g.Zi.newChangeBuffer({trackRemovals:!0}),n=await e9(g,(f=d,b_(bV(N.fromString(`__bundle__/docs/${f}`)))));return g.persistence.runTransaction("Apply bundle documents","readwrite",a=>e7(a,m,i).next(b=>(m.apply(a),b)).next(b=>g.Bs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>g.Bs.addMatchingKeys(a,h,n.targetId)).next(()=>g.localDocuments.getLocalViewOfDocuments(a,b.nr,b.sr)).next(()=>b.nr)))}async function fg(a,b,c=cj()){var d;let e=await e9(a,b_(dP(b.bundledQuery))),f=d=a;return f.persistence.runTransaction("Save named query","readwrite",a=>{let d=dj(b.readTime);if(e.snapshotVersion.compareTo(d)>=0)return f.qs.saveNamedQuery(a,b);let g=e.withResumeToken(aR.EMPTY_BYTE_STRING,d);return f.Ji=f.Ji.insert(g.targetId,g),f.Bs.updateTargetData(a,g).next(()=>f.Bs.removeMatchingKeysForTargetId(a,e.targetId)).next(()=>f.Bs.addMatchingKeys(a,c,e.targetId)).next(()=>f.qs.saveNamedQuery(a,b))})}function fh(a,b){return`firestore_clients_${a}_${b}`}function fi(a,b,c){let d=`firestore_mutations_${a}_${c}`;return b.isAuthenticated()&&(d+=`_${b.uid}`),d}function fj(a,b){return`firestore_targets_${a}_${b}`}class fk{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static ar(a,b,c){let d=JSON.parse(c),e,f="object"==typeof d&& -1!==["pending","acknowledged","rejected"].indexOf(d.state)&&(void 0===d.error||"object"==typeof d.error);return f&&d.error&&(f="string"==typeof d.error.message&&"string"==typeof d.error.code)&&(e=new w(d.error.code,d.error.message)),f?new fk(a,b,d.state,e):(r("SharedClientState",`Failed to parse mutation state for ID '${b}': ${c}`),null)}hr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class fl{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static ar(a,b){let c=JSON.parse(b),d,e="object"==typeof c&& -1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return e&&c.error&&(e="string"==typeof c.error.message&&"string"==typeof c.error.code)&&(d=new w(c.error.code,c.error.message)),e?new fl(a,c.state,d):(r("SharedClientState",`Failed to parse target state for ID '${a}': ${b}`),null)}hr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class fm{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static ar(a,b){let c=JSON.parse(b),d="object"==typeof c&&c.activeTargetIds instanceof Array,e=ck;for(let f=0;d&&f<c.activeTargetIds.length;++f)d=ar(c.activeTargetIds[f]),e=e.add(c.activeTargetIds[f]);return d?new fm(a,e):(r("SharedClientState",`Failed to parse client data for instance '${a}': ${b}`),null)}}class fn{constructor(a,b){this.clientId=a,this.onlineState=b}static ar(a){let b=JSON.parse(a);return"object"==typeof b&& -1!==["Unknown","Online","Offline"].indexOf(b.onlineState)&&"string"==typeof b.clientId?new fn(b.clientId,b.onlineState):(r("SharedClientState",`Failed to parse online state: ${a}`),null)}}class fo{constructor(){this.activeTargetIds=ck}lr(a){this.activeTargetIds=this.activeTargetIds.add(a)}dr(a){this.activeTargetIds=this.activeTargetIds.delete(a)}hr(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class fp{constructor(a,b,c,d,e){var f,g,h;this.window=a,this.ii=b,this.persistenceKey=c,this.wr=d,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new aJ(H),this.started=!1,this.yr=[];let i=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=e,this.pr=fh(this.persistenceKey,this.wr),this.Ir=`firestore_sequence_number_${f=this.persistenceKey}`,this.gr=this.gr.insert(this.wr,new fo),this.Tr=RegExp(`^firestore_clients_${i}_([^_]*)$`),this.Er=RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.Ar=RegExp(`^firestore_targets_${i}_(\\d+)$`),this.vr=`firestore_online_state_${g=this.persistenceKey}`,this.Rr=`firestore_bundle_loaded_v2_${h=this.persistenceKey}`,this.window.addEventListener("storage",this._r)}static D(a){return!(!a||!a.localStorage)}async start(){let a=await this.syncEngine.$i();for(let b of a){if(b===this.wr)continue;let c=this.getItem(fh(this.persistenceKey,b));if(c){let d=fm.ar(b,c);d&&(this.gr=this.gr.insert(d.clientId,d))}}this.Pr();let e=this.storage.getItem(this.vr);if(e){let f=this.br(e);f&&this.Vr(f)}for(let g of this.yr)this.mr(g);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.Ir,JSON.stringify(a))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(a){let b=!1;return this.gr.forEach((c,d)=>{d.activeTargetIds.has(a)&&(b=!0)}),b}addPendingMutation(a){this.Dr(a,"pending")}updateMutationState(a,b,c){this.Dr(a,b,c),this.Cr(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(fj(this.persistenceKey,a));if(c){let d=fl.ar(a,c);d&&(b=d.state)}}return this.Nr.lr(a),this.Pr(),b}removeLocalQueryTarget(a){this.Nr.dr(a),this.Pr()}isLocalQueryTarget(a){return this.Nr.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(fj(this.persistenceKey,a))}updateQueryState(a,b,c){this.kr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.Cr(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.Mr(a)}notifyBundleLoaded(a){this.$r(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return q("SharedClientState","READ",a,b),b}setItem(a,b){q("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){q("SharedClientState","REMOVE",a),this.storage.removeItem(a)}mr(a){let b=a;if(b.storageArea===this.storage){if(q("SharedClientState","EVENT",b.key,b.newValue),b.key===this.pr)return void r("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(null!==b.key){if(this.Tr.test(b.key)){if(null==b.newValue){let a=this.Or(b.key);return this.Fr(a,null)}{let c=this.Br(b.key,b.newValue);if(c)return this.Fr(c.clientId,c)}}else if(this.Er.test(b.key)){if(null!==b.newValue){let d=this.Lr(b.key,b.newValue);if(d)return this.qr(d)}}else if(this.Ar.test(b.key)){if(null!==b.newValue){let e=this.Ur(b.key,b.newValue);if(e)return this.Kr(e)}}else if(b.key===this.vr){if(null!==b.newValue){let f=this.br(b.newValue);if(f)return this.Vr(f)}}else if(b.key===this.Ir){let g=function(a){let b=ao.ct;if(null!=a)try{var c;let d=JSON.parse(a);"number"==typeof d||u(),b=d}catch(e){r("SharedClientState","Failed to read sequence number from WebStorage",e)}return b}(b.newValue);g!==ao.ct&&this.sequenceNumberHandler(g)}else if(b.key===this.Rr){let h=this.Gr(b.newValue);await Promise.all(h.map(a=>this.syncEngine.Qr(a)))}}}else this.yr.push(b)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(a,b,c){let d=new fk(this.currentUser,a,b,c),e=fi(this.persistenceKey,this.currentUser,a);this.setItem(e,d.hr())}Cr(a){let b=fi(this.persistenceKey,this.currentUser,a);this.removeItem(b)}Mr(a){let b={clientId:this.wr,onlineState:a};this.storage.setItem(this.vr,JSON.stringify(b))}kr(a,b,c){let d=fj(this.persistenceKey,a),e=new fl(a,b,c);this.setItem(d,e.hr())}$r(a){let b=JSON.stringify(Array.from(a));this.setItem(this.Rr,b)}Or(a){let b=this.Tr.exec(a);return b?b[1]:null}Br(a,b){let c=this.Or(a);return fm.ar(c,b)}Lr(a,b){let c=this.Er.exec(a),d=Number(c[1]),e=void 0!==c[2]?c[2]:null;return fk.ar(new m(e),d,b)}Ur(a,b){let c=this.Ar.exec(a),d=Number(c[1]);return fl.ar(d,b)}br(a){return fn.ar(a)}Gr(a){return JSON.parse(a)}async qr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.jr(a.batchId,a.state,a.error);q("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}Kr(a){return this.syncEngine.zr(a.targetId,a.state,a.error)}Fr(a,b){let c=b?this.gr.insert(a,b):this.gr.remove(a),d=this.Sr(this.gr),e=this.Sr(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Wr(f,g).then(()=>{this.gr=c})}Vr(a){this.gr.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}Sr(a){let b=ck;return a.forEach((a,c)=>{b=b.unionWith(c.activeTargetIds)}),b}}class fq{constructor(){this.Hr=new fo,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Hr.lr(a),this.Jr[a]||"not-current"}updateQueryState(a,b,c){this.Jr[a]=b}removeLocalQueryTarget(a){this.Hr.dr(a)}isLocalQueryTarget(a){return this.Hr.activeTargetIds.has(a)}clearQueryState(a){delete this.Jr[a]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(a){return this.Hr.activeTargetIds.has(a)}start(){return this.Hr=new fo,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fr{Yr(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class fs{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(a){this.so.push(a)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let a of(q("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))a(0)}no(){for(let a of(q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))a(1)}static D(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The value returned from the most recent invocation of
 * `generateUniqueDebugId()`, or null if it has never been invoked.
 */ let ft=null;function fu(){return null===ft?ft=268435456+Math.round(2147483648*Math.random()):ft++,"0x"+ft.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class fw{constructor(a){this.ro=a.ro,this.oo=a.oo}uo(a){this.co=a}ao(a){this.ho=a}onMessage(a){this.lo=a}close(){this.oo()}send(a){this.ro(a)}fo(){this.co()}wo(a){this.ho(a)}_o(a){this.lo(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fx="WebChannelConnection";class fy extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.mo=b+"://"+a.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(a,b,c,d,e){let f=fu(),g=this.To(a,b);q("RestConnection",`Sending RPC '${a}' ${f}:`,g,c);let h={};return this.Eo(h,d,e),this.Ao(a,g,h,c).then(b=>(q("RestConnection",`Received RPC '${a}' ${f}: `,b),b),b=>{throw s("RestConnection",`RPC '${a}' ${f} failed with error: `,b,"url: ",g,"request:",c),b})}vo(a,b,c,d,e,f){return this.Io(a,b,c,d,e)}Eo(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+n,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}To(a,b){let c=fv[a];return`${this.mo}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams,this.longPollingOptions=a.longPollingOptions}Ao(a,b,c,d){let e=fu();return new Promise((f,g)=>{let h=new j.JJ;h.setWithCredentials(!0),h.listenOnce(j.tw.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case j.jK.NO_ERROR:let b=h.getResponseJson();q(fx,`XHR for RPC '${a}' ${e} received:`,JSON.stringify(b)),f(b);break;case j.jK.TIMEOUT:q(fx,`RPC '${a}' ${e} timed out`),g(new w(v.DEADLINE_EXCEEDED,"Request time out"));break;case j.jK.HTTP_ERROR:let c=h.getStatus();if(q(fx,`RPC '${a}' ${e} failed with status:`,c,"response text:",h.getResponseText()),c>0){let d=h.getResponseJson();Array.isArray(d)&&(d=d[0]);let i=null==d?void 0:d.error;if(i&&i.status&&i.message){let k=function(a){let b=a.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(b)>=0?b:v.UNKNOWN}(i.status);g(new w(k,i.message))}else g(new w(v.UNKNOWN,"Server responded with status "+h.getStatus()))}else g(new w(v.UNAVAILABLE,"Connection failed."));break;default:u()}}finally{q(fx,`RPC '${a}' ${e} completed.`)}});let i=JSON.stringify(d);q(fx,`RPC '${a}' ${e} sending request:`,d),h.send(b,"POST",i,c,15)})}Ro(a,b,c){let e=fu(),f=[this.mo,"/","google.firestore.v1.Firestore","/",a,"/channel"],g=(0,j.UE)(),h=(0,j.FJ)(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},k=this.longPollingOptions.timeoutSeconds;void 0!==k&&(i.longPollingTimeout=Math.round(1e3*k)),this.useFetchStreams&&(i.xmlHttpFactory=new j.zI({})),this.Eo(i.initMessageHeaders,b,c),i.encodeInitMessageHeaders=!0;let l=f.join("");q(fx,`Creating RPC '${a}' stream ${e}: ${l}`,i);let m=g.createWebChannel(l,i),n=!1,o=!1,p=new fw({ro:b=>{o?q(fx,`Not sending because RPC '${a}' stream ${e} is closed:`,b):(n||(q(fx,`Opening RPC '${a}' stream ${e} transport.`),m.open(),n=!0),q(fx,`RPC '${a}' stream ${e} sending:`,b),m.send(b))},oo:()=>m.close()}),r=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return r(m,j.ii.EventType.OPEN,()=>{o||q(fx,`RPC '${a}' stream ${e} transport opened.`)}),r(m,j.ii.EventType.CLOSE,()=>{o||(o=!0,q(fx,`RPC '${a}' stream ${e} transport closed`),p.wo())}),r(m,j.ii.EventType.ERROR,b=>{o||(o=!0,s(fx,`RPC '${a}' stream ${e} transport errored:`,b),p.wo(new w(v.UNAVAILABLE,"The operation could not be completed")))}),r(m,j.ii.EventType.MESSAGE,b=>{var c,f;if(!o){let g=b.data[0];(f=!!g)||u();let h=g,i=h.error||(null===(c=h[0])|| void 0===c?void 0:c.error);if(i){q(fx,`RPC '${a}' stream ${e} received error:`,i);let j=i.status,k=function(a){let b=d[a];if(void 0!==b)return cX(b)}(j),l=i.message;void 0===k&&(k=v.INTERNAL,l="Unknown error status: "+j+" with message "+i.message),o=!0,p.wo(new w(k,l)),m.close()}else q(fx,`RPC '${a}' stream ${e} received:`,g),p._o(g)}}),r(h,j.ju.STAT_EVENT,b=>{b.stat===j.kN.PROXY?q(fx,`RPC '${a}' stream ${e} detected buffering proxy`):b.stat===j.kN.NOPROXY&&q(fx,`RPC '${a}' stream ${e} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function fz(){return"undefined"!=typeof window?window:null}function fA(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fB(a){return new df(a,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ class fC{constructor(a,b,c=1e3,d=1.5,e=6e4){this.ii=a,this.timerId=b,this.Po=c,this.bo=d,this.Vo=e,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(a){this.cancel();let b=Math.floor(this.So+this.ko()),c=Math.max(0,Date.now()-this.Co),d=Math.max(0,b-c);d>0&&q("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.So} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,d,()=>(this.Co=Date.now(),a())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class fD{constructor(a,b,c,d,e,f,g,h){this.ii=a,this.$o=c,this.Oo=d,this.connection=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new fC(a,b)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(a){this.Ho(),this.stream.send(a)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(a,b){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==a?this.qo.reset():b&&b.code===v.RESOURCE_EXHAUSTED?(r(b.toString()),r("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):b&&b.code===v.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=a,await this.listener.ao(b)}Yo(){}auth(){this.state=1;let a=this.Xo(this.Fo),b=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.Fo===b&&this.Zo(a,c)},b=>{a(()=>{let a=new w(v.UNKNOWN,"Fetching auth token failed: "+b.message);return this.tu(a)})})}Zo(a,b){let c=this.Xo(this.Fo);this.stream=this.eu(a,b),this.stream.uo(()=>{c(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(a=>{c(()=>this.tu(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(a){return q("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Xo(a){return b=>{this.ii.enqueueAndForget(()=>this.Fo===a?b():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fE extends fD{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.serializer=e}eu(a,b){return this.connection.Ro("Listen",a,b)}onMessage(a){this.qo.reset();let b=function(a,b){let c;if("targetChange"in b){var d,e,f,g,h;b.targetChange;let i="NO_CHANGE"===(d=b.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===d?1:"REMOVE"===d?2:"CURRENT"===d?3:"RESET"===d?4:u(),j=b.targetChange.targetIds||[],k=(e=a,f=b.targetChange.resumeToken,e.useProto3Json?(void 0===f||"string"==typeof f||u(),aR.fromBase64String(f||"")):(void 0===f||f instanceof Uint8Array||u(),aR.fromUint8Array(f||new Uint8Array))),l=b.targetChange.cause,m=l&&function(a){let b=void 0===a.code?v.UNKNOWN:cX(a.code);return new w(b,a.message||"")}(l);c=new c7(i,j,k,m||null)}else if("documentChange"in b){b.documentChange;let n=b.documentChange;n.document,n.document.name,n.document.updateTime;let o=dn(a,n.document.name),p=dj(n.document.updateTime),q=n.document.createTime?dj(n.document.createTime):L.min(),r=new bk({mapValue:{fields:n.document.fields}}),s=bm.newFoundDocument(o,p,q,r),t=n.targetIds||[],x=n.removedTargetIds||[];c=new c5(t,x,s.key,s)}else if("documentDelete"in b){b.documentDelete;let y=b.documentDelete;y.document;let z=dn(a,y.document),A=y.readTime?dj(y.readTime):L.min(),B=bm.newNoDocument(z,A),C=y.removedTargetIds||[];c=new c5([],C,B.key,B)}else if("documentRemove"in b){b.documentRemove;let D=b.documentRemove;D.document;let E=dn(a,D.document),F=D.removedTargetIds||[];c=new c5([],F,E,null)}else{if(!("filter"in b))return u();{b.filter;let G=b.filter;G.targetId;let{count:H=0,unchangedNames:I}=G,J=new cV(H,I),K=G.targetId;c=new c6(K,J)}}return c}(this.serializer,a),c=function(a){if(!("targetChange"in a))return L.min();let b=a.targetChange;return b.targetIds&&b.targetIds.length?L.min():b.readTime?dj(b.readTime):L.min()}(a);return this.listener.nu(b,c)}su(a){let b={};b.database=dr(this.serializer),b.addTarget=function(a,b){let c,d=b.target;if((c=bP(d)?{documents:dx(a,d)}:{query:dy(a,d)}).targetId=b.targetId,b.resumeToken.approximateByteSize()>0){c.resumeToken=di(a,b.resumeToken);let e=dg(a,b.expectedCount);null!==e&&(c.expectedCount=e)}else if(b.snapshotVersion.compareTo(L.min())>0){c.readTime=dh(a,b.snapshotVersion.toTimestamp());let f=dg(a,b.expectedCount);null!==f&&(c.expectedCount=f)}return c}(this.serializer,a);let c=function(a,b){let c=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return u()}}(b.purpose);return null==c?null:{"goog-listen-tags":c}}(this.serializer,a);c&&(b.labels=c),this.Wo(b)}iu(a){let b={};b.database=dr(this.serializer),b.removeTarget=a,this.Wo(b)}}class fF extends null{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.serializer=e,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(a,b){return this.connection.Ro("Write",a,b)}onMessage(a){var b,c,d,e,f;if(!a.streamToken&&u(),this.lastStreamToken=a.streamToken,this.ru){this.qo.reset();let g=(c=a.writeResults,d=a.commitTime,c&&c.length>0?(void 0!==d||u(),c.map(a=>{var b,c;let e;return b=a,c=d,(e=b.updateTime?dj(b.updateTime):dj(c)).isEqual(L.min())&&(e=dj(c)),new cB(e,b.transformResults||[])})):[]),h=dj(a.commitTime);return this.listener.cu(h,g)}return a.writeResults&&0!==a.writeResults.length&&u(),this.ru=!0,this.listener.au()}hu(){let a={};a.database=dr(this.serializer),this.Wo(a)}uu(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>dv(this.serializer,a))};this.Wo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class fG extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.connection=c,this.serializer=d,this.lu=!1}fu(){if(this.lu)throw new w(v.FAILED_PRECONDITION,"The client has already been terminated.")}Io(a,b,c){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.connection.Io(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(v.UNKNOWN,a.toString())})}vo(a,b,c,d){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.connection.vo(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new w(v.UNKNOWN,a.toString())})}terminate(){this.lu=!0}}async function fH(a,b,c){var d,e,f;let g=e=a,{request:h,du:i}=function(a,b,c){let d=dy(a,b),e={},f=[],g=0;return c.forEach(a=>{let b="aggregate_"+g++;e[b]=a.alias,"count"===a.yt?f.push({alias:b,count:{}}):"avg"===a.yt?f.push({alias:b,avg:{field:dB(a.fieldPath)}}):"sum"===a.yt&&f.push({alias:b,sum:{field:dB(a.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:f,structuredQuery:d.structuredQuery},parent:d.parent},du:e}}(g.serializer,b_(b),c),j=h.parent;g.connection.po||delete h.parent;let k=(await g.vo("RunAggregationQuery",j,h,1)).filter(a=>!!a.result);(f=1===k.length)||u();let l=null===(d=k[0].result)|| void 0===d?void 0:d.aggregateFields;return Object.keys(l).reduce((a,b)=>(a[i[b]]=l[b],a),{})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fI{constructor(a,b,c,d,e){this.localStore=a,this.datastore=b,this.asyncQueue=c,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=e,this.Pu.Yr(a=>{c.enqueueAndForget(async()=>{fR(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){var b;let c=b=a;c.vu.add(4),await fK(c),c.bu.set("Unknown"),c.vu.delete(4),await fJ(c)}(this))})}),this.bu=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(a){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.yu("Offline")))}set(a){this.Tu(),this.wu=0,"Online"===a&&(this.mu=!1),this.yu(a)}yu(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}pu(a){let b=`Could not reach Cloud Firestore backend. ${a}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(r(b),this.mu=!1):q("OnlineStateTracker",b)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}(c,d)}}async function fJ(a){if(fR(a))for(let b of a.Ru)await b(!0)}async function fK(a){for(let b of a.Ru)await b(!1)}function fL(a,b){var c;let d=c=a;d.Au.has(b.targetId)||(d.Au.set(b.targetId,b),fQ(d)?fP(d):f7(d).Ko()&&fN(d,b))}function fM(a,b){var c;let d=c=a,e=f7(d);d.Au.delete(b),e.Ko()&&fO(d,b),0===d.Au.size&&(e.Ko()?e.jo():fR(d)&&d.bu.set("Unknown"))}function fN(a,b){if(a.Vu.qt(b.targetId),b.resumeToken.approximateByteSize()>0||b.snapshotVersion.compareTo(L.min())>0){let c=a.remoteSyncer.getRemoteKeysForTarget(b.targetId).size;b=b.withExpectedCount(c)}f7(a).su(b)}function fO(a,b){a.Vu.qt(b),f7(a).iu(b)}function fP(a){a.Vu=new c9({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),le:b=>a.Au.get(b)||null,ue:()=>a.datastore.serializer.databaseId}),f7(a).start(),a.bu.gu()}function fQ(a){return fR(a)&&!f7(a).Uo()&&a.Au.size>0}function fR(a){var b;return 0===(b=a).vu.size}function fS(a){a.Vu=void 0}async function fT(a){a.Au.forEach((b,c)=>{fN(a,b)})}async function fU(a,b){fS(a),fQ(a)?(a.bu.Iu(b),fP(a)):a.bu.set("Unknown")}async function fV(a,b,c){if(a.bu.set("Online"),b instanceof c7&&2===b.state&&b.cause)try{await async function(a,b){let c=b.cause;for(let d of b.targetIds)a.Au.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Au.delete(d),a.Vu.removeTarget(d))}(a,b)}catch(d){q("RemoteStore","Failed to remove targets %s: %s ",b.targetIds.join(","),d),await fW(a,d)}else if(b instanceof c5?a.Vu.Ht(b):b instanceof c6?a.Vu.ne(b):a.Vu.Xt(b),!c.isEqual(L.min()))try{let e=await e6(a.localStore);c.compareTo(e)>=0&&await function(a,b){let c=a.Vu.ce(b);return c.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){let e=a.Au.get(d);e&&a.Au.set(d,e.withResumeToken(c.resumeToken,b))}}),c.targetMismatches.forEach((b,c)=>{let d=a.Au.get(b);if(!d)return;a.Au.set(b,d.withResumeToken(aR.EMPTY_BYTE_STRING,d.snapshotVersion)),fO(a,b);let e=new dG(d.target,b,c,d.sequenceNumber);fN(a,e)}),a.remoteSyncer.applyRemoteEvent(c)}(a,c)}catch(f){q("RemoteStore","Failed to raise snapshot:",f),await fW(a,f)}}async function fW(a,b,c){if(!ah(b))throw b;a.vu.add(1),await fK(a),a.bu.set("Offline"),c||(c=()=>e6(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await c(),a.vu.delete(1),await fJ(a)})}function fX(a,b){return b().catch(c=>fW(a,c,b))}async function fY(a){var b;let c=b=a,d=f8(c),e=c.Eu.length>0?c.Eu[c.Eu.length-1].batchId:-1;for(;fZ(c);)try{let f=await e8(c.localStore,e);if(null===f){0===c.Eu.length&&d.jo();break}e=f.batchId,f$(c,f)}catch(g){await fW(c,g)}f_(c)&&f0(c)}function fZ(a){return fR(a)&&a.Eu.length<10}function f$(a,b){a.Eu.push(b);let c=f8(a);c.Ko()&&c.ou&&c.uu(b.mutations)}function f_(a){return fR(a)&&!f8(a).Uo()&&a.Eu.length>0}function f0(a){f8(a).start()}async function f1(a){f8(a).hu()}async function f2(a){let b=f8(a);for(let c of a.Eu)b.uu(c.mutations)}async function f3(a,b,c){let d=a.Eu.shift(),e=cS.from(d,b,c);await fX(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await fY(a)}async function f4(a,b){b&&f8(a).ou&&await async function(a,b){var c;if(cW(c=b.code)&&c!==v.ABORTED){let d=a.Eu.shift();f8(a).Qo(),await fX(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,b)),await fY(a)}}(a,b),f_(a)&&f0(a)}async function f5(a,b){var c;let d=c=a;d.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");let e=fR(d);d.vu.add(3),await fK(d),e&&d.bu.set("Unknown"),await d.remoteSyncer.handleCredentialChange(b),d.vu.delete(3),await fJ(d)}async function f6(a,b){var c;let d=c=a;b?(d.vu.delete(2),await fJ(d)):b||(d.vu.add(2),await fK(d),d.bu.set("Unknown"))}function f7(a){return a.Su||(a.Su=function(a,b,c){var d;let e=d=a;return e.fu(),new fE(b,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,c)}(a.datastore,a.asyncQueue,{uo:fT.bind(null,a),ao:fU.bind(null,a),nu:fV.bind(null,a)}),a.Ru.push(async b=>{b?(a.Su.Qo(),fQ(a)?fP(a):a.bu.set("Unknown")):(await a.Su.stop(),fS(a))})),a.Su}function f8(a){return a.Du||(a.Du=function(a,b,c){var d;let e=d=a;return e.fu(),new fF(b,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,c)}(a.datastore,a.asyncQueue,{uo:f1.bind(null,a),ao:f4.bind(null,a),au:f2.bind(null,a),cu:f3.bind(null,a)}),a.Ru.push(async b=>{b?(a.Du.Qo(),await fY(a)):(await a.Du.stop(),a.Eu.length>0&&(q("RemoteStore",`Stopping write stream with ${a.Eu.length} pending writes`),a.Eu=[]))})),a.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class f9{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new f9(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(v.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(a,b){if(r("AsyncQueue",`${b}: ${a}`),ah(a))return new w(v.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class gb{constructor(a){this.comparator=a?(b,c)=>a(b,c)||Q.comparator(b.key,c.key):(a,b)=>Q.comparator(a.key,b.key),this.keyedMap=cc(),this.sortedSet=new aJ(this.comparator)}static emptySet(a){return new gb(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(a){let b=this.keyedMap.get(a);return b?this.sortedSet.indexOf(b):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof gb)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(a,b){let c=new gb;return c.comparator=this.comparator,c.keyedMap=a,c.sortedSet=b,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class gc{constructor(){this.Cu=new aJ(Q.comparator)}track(a){let b=a.doc.key,c=this.Cu.get(b);c?0!==a.type&&3===c.type?this.Cu=this.Cu.insert(b,a):3===a.type&&1!==c.type?this.Cu=this.Cu.insert(b,{type:c.type,doc:a.doc}):2===a.type&&2===c.type?this.Cu=this.Cu.insert(b,{type:2,doc:a.doc}):2===a.type&&0===c.type?this.Cu=this.Cu.insert(b,{type:0,doc:a.doc}):1===a.type&&0===c.type?this.Cu=this.Cu.remove(b):1===a.type&&2===c.type?this.Cu=this.Cu.insert(b,{type:1,doc:c.doc}):0===a.type&&1===c.type?this.Cu=this.Cu.insert(b,{type:2,doc:a.doc}):u():this.Cu=this.Cu.insert(b,a)}xu(){let a=[];return this.Cu.inorderTraversal((b,c)=>{a.push(c)}),a}}class gd{constructor(a,b,c,d,e,f,g,h,i){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h,this.hasCachedResults=i}static fromInitialDocuments(a,b,c,d,e){let f=[];return b.forEach(a=>{f.push({type:0,doc:a})}),new gd(a,b,gb.emptySet(b),f,c,d,!0,!1,e)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.hasCachedResults===a.hasCachedResults&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&b2(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let b=this.docChanges,c=a.docChanges;if(b.length!==c.length)return!1;for(let d=0;d<b.length;d++)if(b[d].type!==c[d].type||!b[d].doc.isEqual(c[d].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class ge{constructor(){this.Nu=void 0,this.listeners=[]}}class gf{constructor(){this.queries=new b9(a=>b3(a),b2),this.onlineState="Unknown",this.ku=new Set}}async function gg(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g||(f=!0,g=new ge),f)try{g.Nu=await d.onListen(e)}catch(h){let i=ga(h,`Initialization of query '${b4(b.query)}' failed`);return void b.onError(i)}d.queries.set(e,g),g.listeners.push(b),b.Mu(d.onlineState),g.Nu&&b.$u(g.Nu)&&gk(d)}async function gh(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g){let h=g.listeners.indexOf(b);h>=0&&(g.listeners.splice(h,1),f=0===g.listeners.length)}if(f)return d.queries.delete(e),d.onUnlisten(e)}function gi(a,b){var c;let d=c=a,e=!1;for(let f of b){let g=f.query,h=d.queries.get(g);if(h){for(let i of h.listeners)i.$u(f)&&(e=!0);h.Nu=f}}e&&gk(d)}function gj(a,b,c){var d;let e=d=a,f=e.queries.get(b);if(f)for(let g of f.listeners)g.onError(c);e.queries.delete(b)}function gk(a){a.ku.forEach(a=>{a.next()})}class gl{constructor(a,b,c){this.query=a,this.Ou=b,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=c||{}}$u(a){if(!this.options.includeMetadataChanges){let b=[];for(let c of a.docChanges)3!==c.type&&b.push(c);a=new gd(a.query,a.docs,a.oldDocs,b,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0,a.hasCachedResults)}let d=!1;return this.Fu?this.Lu(a)&&(this.Ou.next(a),d=!0):this.qu(a,this.onlineState)&&(this.Uu(a),d=!0),this.Bu=a,d}onError(a){this.Ou.error(a)}Mu(a){this.onlineState=a;let b=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,a)&&(this.Uu(this.Bu),b=!0),b}qu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Ku||!c)&&(!a.docs.isEmpty()||a.hasCachedResults||"Offline"===b)}Lu(a){if(a.docChanges.length>0)return!0;let b=this.Bu&&this.Bu.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}Uu(a){a=gd.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache,a.hasCachedResults),this.Fu=!0,this.Ou.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class gm{constructor(a,b){this.Gu=a,this.byteLength=b}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class gn{constructor(a){this.serializer=a}rr(a){return dn(this.serializer,a)}ur(a){return a.metadata.exists?du(this.serializer,a.document,!1):bm.newNoDocument(this.rr(a.metadata.name),this.cr(a.metadata.readTime))}cr(a){return dj(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class go{constructor(a){this.key=a}}class gp{constructor(a){this.key=a}}class gq{constructor(a,b){this.query=a,this.Yu=b,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=cj(),this.mutatedKeys=cj(),this.tc=b7(a),this.ec=new gb(this.tc)}get nc(){return this.Yu}sc(a,b){let c=b?b.ic:new gc,d=b?b.ec:this.ec,e=b?b.mutatedKeys:this.mutatedKeys,f=d,g=!1,h="F"===this.query.limitType&&d.size===this.query.limit?d.last():null,i="L"===this.query.limitType&&d.size===this.query.limit?d.first():null;if(a.inorderTraversal((a,b)=>{let j=d.get(a),k=b5(this.query,b)?b:null,l=!!j&&this.mutatedKeys.has(j.key),m=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),n=!1;j&&k?j.data.isEqual(k.data)?l!==m&&(c.track({type:3,doc:k}),n=!0):this.rc(j,k)||(c.track({type:2,doc:k}),n=!0,(h&&this.tc(k,h)>0||i&&0>this.tc(k,i))&&(g=!0)):!j&&k?(c.track({type:0,doc:k}),n=!0):j&&!k&&(c.track({type:1,doc:j}),n=!0,(h||i)&&(g=!0)),n&&(k?(f=f.add(k),e=m?e.add(a):e.delete(a)):(f=f.delete(a),e=e.delete(a)))}),null!==this.query.limit)for(;f.size>this.query.limit;){let j="F"===this.query.limitType?f.last():f.first();f=f.delete(j.key),e=e.delete(j.key),c.track({type:1,doc:j})}return{ec:f,ic:c,zi:g,mutatedKeys:e}}rc(a,b){return a.hasLocalMutations&&b.hasCommittedMutations&&!b.hasLocalMutations}applyChanges(a,b,c){let d=this.ec;this.ec=a.ec,this.mutatedKeys=a.mutatedKeys;let e=a.ic.xu();e.sort((a,b)=>(function(a,b){let c=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return u()}};return c(a)-c(b)})(a.type,b.type)||this.tc(a.doc,b.doc)),this.oc(c);let f=b?this.uc():[],g=0===this.Zu.size&&this.current?1:0,h=g!==this.Xu;return(this.Xu=g,0!==e.length||h)?{snapshot:new gd(this.query,a.ec,d,e,a.mutatedKeys,0===g,h,!1,!!c&&c.resumeToken.approximateByteSize()>0),cc:f}:{cc:f}}Mu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({ec:this.ec,ic:new gc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(a){return!this.Yu.has(a)&&!!this.ec.has(a)&&!this.ec.get(a).hasLocalMutations}oc(a){a&&(a.addedDocuments.forEach(a=>this.Yu=this.Yu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Yu=this.Yu.delete(a)),this.current=a.current)}uc(){if(!this.current)return[];let a=this.Zu;this.Zu=cj(),this.ec.forEach(a=>{this.ac(a.key)&&(this.Zu=this.Zu.add(a.key))});let b=[];return a.forEach(a=>{this.Zu.has(a)||b.push(new gp(a))}),this.Zu.forEach(c=>{a.has(c)||b.push(new go(c))}),b}hc(a){this.Yu=a.ir,this.Zu=cj();let b=this.sc(a.documents);return this.applyChanges(b,!0)}lc(){return gd.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class gr{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class gs{constructor(a){this.key=a,this.fc=!1}}class gt{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.dc={},this.wc=new b9(a=>b3(a),b2),this._c=new Map,this.mc=new Set,this.gc=new aJ(Q.comparator),this.yc=new Map,this.Ic=new eO,this.Tc={},this.Ec=new Map,this.Ac=es.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function gu(a,b){let c=gW(a),d,e,f=c.wc.get(b);if(f)d=f.targetId,c.sharedClientState.addLocalQueryTarget(d),e=f.view.lc();else{let g=await e9(c.localStore,b_(b)),h=c.sharedClientState.addLocalQueryTarget(g.targetId);d=g.targetId,e=await gv(c,b,d,"current"===h,g.resumeToken),c.isPrimaryClient&&fL(c.remoteStore,g)}return e}async function gv(a,b,c,d,e){a.Rc=(b,c,d)=>(async function(a,b,c,d){let e=b.view.sc(c);e.zi&&(e=await fb(a.localStore,b.query,!1).then(({documents:a})=>b.view.sc(a,e)));let f=d&&d.targetChanges.get(b.targetId),g=b.view.applyChanges(e,a.isPrimaryClient,f);return gH(a,b.targetId,g.cc),g.snapshot})(a,b,c,d);let f=await fb(a.localStore,b,!0),g=new gq(b,f.ir),h=g.sc(f.documents),i=c4.createSynthesizedTargetChangeForCurrentChange(c,d&&"Offline"!==a.onlineState,e),j=g.applyChanges(h,a.isPrimaryClient,i);gH(a,c,j.cc);let k=new gr(b,c,g);return a.wc.set(b,k),a._c.has(c)?a._c.get(c).push(b):a._c.set(c,[b]),j.snapshot}async function gw(a,b){var c;let d=c=a,e=d.wc.get(b),f=d._c.get(e.targetId);if(f.length>1)return d._c.set(e.targetId,f.filter(a=>!b2(a,b))),void d.wc.delete(b);d.isPrimaryClient?(d.sharedClientState.removeLocalQueryTarget(e.targetId),d.sharedClientState.isActiveQueryTarget(e.targetId)||await fa(d.localStore,e.targetId,!1).then(()=>{d.sharedClientState.clearQueryState(e.targetId),fM(d.remoteStore,e.targetId),gF(d,e.targetId)}).catch(ab)):(gF(d,e.targetId),await fa(d.localStore,e.targetId,!0))}async function gx(a,b,c){let d=gX(a);try{var e,f,g;let h=await function(a,b){var c;let d=c=a,e=K.now(),f=b.reduce((a,b)=>a.add(b.key),cj()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=ca,i=cj();return d.Zi.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(c=>{g=c;let f=[];for(let h of b){let i=cI(h,g.get(h.key).overlayedDocument);null!=i&&f.push(new cL(h.key,i,bl(i.value.mapValue),cC.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,f,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:cd(g)}))}(d.localStore,b),i;d.sharedClientState.addPendingMutation(h.batchId),e=d,f=h.batchId,g=c,(i=e.Tc[e.currentUser.toKey()])||(i=new aJ(H)),i=i.insert(f,g),e.Tc[e.currentUser.toKey()]=i,await gK(d,h.changes),await fY(d.remoteStore)}catch(j){let k=ga(j,"Failed to persist write");c.reject(k)}}async function gy(a,b){var c;let d=c=a;try{let e=await function(a,b){var c;let d=c=a,e=b.snapshotVersion,f=d.Ji;return d.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=d.Zi.newChangeBuffer({trackRemovals:!0});f=d.Ji;let g=[];b.targetChanges.forEach((c,h)=>{var i,j,k;let l=f.get(h);if(!l)return;g.push(d.Bs.removeMatchingKeys(a,c.removedDocuments,h).next(()=>d.Bs.addMatchingKeys(a,c.addedDocuments,h)));let m=l.withSequenceNumber(a.currentSequenceNumber);null!==b.targetMismatches.get(h)?m=m.withResumeToken(aR.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,e)),f=f.insert(h,m),i=l,j=m,k=c,(0===i.resumeToken.approximateByteSize()||j.snapshotVersion.toMicroseconds()-i.snapshotVersion.toMicroseconds()>=3e8||k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0)&&g.push(d.Bs.updateTargetData(a,m))});let h=ca,i=cj();if(b.documentUpdates.forEach(c=>{b.resolvedLimboDocuments.has(c)&&g.push(d.persistence.referenceDelegate.updateLimboDocument(a,c))}),g.push(e7(a,c,b.documentUpdates).next(a=>{h=a.nr,i=a.sr})),!e.isEqual(L.min())){let j=d.Bs.getLastRemoteSnapshotVersion(a).next(b=>d.Bs.setTargetsMetadata(a,a.currentSequenceNumber,e));g.push(j)}return ac.waitFor(g).next(()=>c.apply(a)).next(()=>d.localDocuments.getLocalViewOfDocuments(a,h,i)).next(()=>h)}).then(a=>(d.Ji=f,a))}(d.localStore,b);b.targetChanges.forEach((a,b)=>{var c,e,f;let g=d.yc.get(b);g&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||u(),a.addedDocuments.size>0?g.fc=!0:a.modifiedDocuments.size>0?(e=g.fc)||u():a.removedDocuments.size>0&&(g.fc||u(),g.fc=!1))}),await gK(d,e,b)}catch(f){await ab(f)}}function gz(a,b,c){var d;let e=d=a;if(e.isPrimaryClient&&0===c|| !e.isPrimaryClient&&1===c){let f=[];e.wc.forEach((a,c)=>{let d=c.view.Mu(b);d.snapshot&&f.push(d.snapshot)}),function(a,b){var c;let d=c=a;d.onlineState=b;let e=!1;d.queries.forEach((a,c)=>{for(let d of c.listeners)d.Mu(b)&&(e=!0)}),e&&gk(d)}(e.eventManager,b),f.length&&e.dc.nu(f),e.onlineState=b,e.isPrimaryClient&&e.sharedClientState.setOnlineState(b)}}async function gA(a,b,c){var d;let e=d=a;e.sharedClientState.updateQueryState(b,"rejected",c);let f=e.yc.get(b),g=f&&f.key;if(g){let h=new aJ(Q.comparator);h=h.insert(g,bm.newNoDocument(g,L.min()));let i=cj().add(g),j=new c3(L.min(),new Map,new aJ(H),h,i);await gy(e,j),e.gc=e.gc.remove(g),e.yc.delete(b),gJ(e)}else await fa(e.localStore,b,!1).then(()=>gF(e,b,c)).catch(ab)}async function gB(a,b){var c;let d=c=a,e=b.batch.batchId;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let c=b.batch.keys(),e=d.Zi.newChangeBuffer({trackRemovals:!0});return(function(a,b,c,d){let e=c.batch,f=e.keys(),g=ac.resolve();return f.forEach(a=>{g=g.next(()=>d.getEntry(b,a)).next(b=>{var f;let g=c.docVersions.get(a);null!==g||u(),0>b.version.compareTo(g)&&(e.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(b,e))})(d,a,b,e).next(()=>e.apply(a)).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b.batch.batchId)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(a){let b=cj();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(b=b.add(a.batch.mutations[c].key));return b}(b))).next(()=>d.localDocuments.getDocuments(a,c))})}(d.localStore,b);gE(d,e,null),gD(d,e),d.sharedClientState.updateMutationState(e,"acknowledged"),await gK(d,f)}catch(g){await ab(g)}}async function gC(a,b,c){var d;let e=d=a;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return d.mutationQueue.lookupMutationBatch(a,b).next(b=>{var e;return null!==b||u(),c=b.keys(),d.mutationQueue.removeMutationBatch(a,b)}).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,c)).next(()=>d.localDocuments.getDocuments(a,c))})}(e.localStore,b);gE(e,b,c),gD(e,b),e.sharedClientState.updateMutationState(b,"rejected",c),await gK(e,f)}catch(g){await ab(g)}}function gD(a,b){(a.Ec.get(b)||[]).forEach(a=>{a.resolve()}),a.Ec.delete(b)}function gE(a,b,c){var d;let e=d=a,f=e.Tc[e.currentUser.toKey()];if(f){let g=f.get(b);g&&(c?g.reject(c):g.resolve(),f=f.remove(b)),e.Tc[e.currentUser.toKey()]=f}}function gF(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a._c.get(b)))a.wc.delete(d),c&&a.dc.Pc(d,c);a._c.delete(b),a.isPrimaryClient&&a.Ic.Is(b).forEach(b=>{a.Ic.containsKey(b)||gG(a,b)})}function gG(a,b){a.mc.delete(b.path.canonicalString());let c=a.gc.get(b);null!==c&&(fM(a.remoteStore,c),a.gc=a.gc.remove(b),a.yc.delete(c),gJ(a))}function gH(a,b,c){for(let d of c)d instanceof go?(a.Ic.addReference(d.key,b),gI(a,d)):d instanceof gp?(q("SyncEngine","Document no longer in limbo: "+d.key),a.Ic.removeReference(d.key,b),a.Ic.containsKey(d.key)||gG(a,d.key)):u()}function gI(a,b){let c=b.key,d=c.path.canonicalString();a.gc.get(c)||a.mc.has(d)||(q("SyncEngine","New document in limbo: "+c),a.mc.add(d),gJ(a))}function gJ(a){for(;a.mc.size>0&&a.gc.size<a.maxConcurrentLimboResolutions;){let b=a.mc.values().next().value;a.mc.delete(b);let c=new Q(N.fromString(b)),d=a.Ac.next();a.yc.set(d,new gs(c)),a.gc=a.gc.insert(c,d),fL(a.remoteStore,new dG(b_(bV(c.path)),d,"TargetPurposeLimboResolution",ao.ct))}}async function gK(a,b,c){var d;let e=d=a,f=[],g=[],h=[];e.wc.isEmpty()||(e.wc.forEach((a,d)=>{h.push(e.Rc(d,b,c).then(a=>{if((a||c)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,(null==a?void 0:a.fromCache)?"not-current":"current"),a){f.push(a);let b=e1.Li(d.targetId,a);g.push(b)}}))}),await Promise.all(h),e.dc.nu(f),await async function(a,b){var c;let d=c=a;try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>ac.forEach(b,b=>ac.forEach(b.Fi,c=>d.persistence.referenceDelegate.addReference(a,b.targetId,c)).next(()=>ac.forEach(b.Bi,c=>d.persistence.referenceDelegate.removeReference(a,b.targetId,c)))))}catch(e){if(!ah(e))throw e;q("LocalStore","Failed to update sequence numbers: "+e)}for(let f of b){let g=f.targetId;if(!f.fromCache){let h=d.Ji.get(g),i=h.snapshotVersion,j=h.withLastLimboFreeSnapshotVersion(i);d.Ji=d.Ji.insert(g,j)}}}(e.localStore,g))}async function gL(a,b){var c,d,e;let f=c=a;if(!f.currentUser.isEqual(b)){q("SyncEngine","User change. New user:",b.toKey());let g=await e5(f.localStore,b);f.currentUser=b,e="'waitForPendingWrites' promise is rejected due to a user change.",(d=f).Ec.forEach(a=>{a.forEach(a=>{a.reject(new w(v.CANCELLED,e))})}),d.Ec.clear(),f.sharedClientState.handleUserChange(b,g.removedBatchIds,g.addedBatchIds),await gK(f,g.er)}}function gM(a,b){var c;let d=c=a,e=d.yc.get(b);if(e&&e.fc)return cj().add(e.key);{let f=cj(),g=d._c.get(b);if(!g)return f;for(let h of g){let i=d.wc.get(h);f=f.unionWith(i.view.nc)}return f}}async function gN(a,b){var c;let d=c=a,e=await fb(d.localStore,b.query,!0),f=b.view.hc(e);return d.isPrimaryClient&&gH(d,b.targetId,f.cc),f}async function gO(a,b){var c;let d=c=a;return fd(d.localStore,b).then(a=>gK(d,a))}async function gP(a,b,c,d){var e;let f=e=a,g=await function(a,b){var c,d;let e=c=a,f=d=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",a=>f.Sn(a,b).next(b=>b?e.localDocuments.getDocuments(a,b):ac.resolve(null)))}(f.localStore,b);null!==g?("pending"===c?await fY(f.remoteStore):"acknowledged"===c||"rejected"===c?(gE(f,b,d||null),gD(f,b),function(a,b){var c,d;(d=(c=a).mutationQueue).Cn(b)}(f.localStore,b)):u(),await gK(f,g)):q("SyncEngine","Cannot apply mutation batch with id: "+b)}async function gQ(a,b){var c;let d=c=a;if(gW(d),gX(d),!0===b&& !0!==d.vc){let e=d.sharedClientState.getAllActiveQueryTargets(),f=await gR(d,e.toArray());for(let g of(d.vc=!0,await f6(d.remoteStore,!0),f))fL(d.remoteStore,g)}else if(!1===b&& !1!==d.vc){let h=[],i=Promise.resolve();d._c.forEach((a,b)=>{d.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(gF(d,b),fa(d.localStore,b,!0))),fM(d.remoteStore,b)}),await i,await gR(d,h),function(a){var b;let c=b=a;c.yc.forEach((a,b)=>{fM(c.remoteStore,b)}),c.Ic.Ts(),c.yc=new Map,c.gc=new aJ(Q.comparator)}(d),d.vc=!1,await f6(d.remoteStore,!1)}}async function gR(a,b,c){var d;let e=d=a,f=[],g=[];for(let h of b){let i,j=e._c.get(h);if(j&&0!==j.length)for(let k of(i=await e9(e.localStore,b_(j[0])),j)){let l=e.wc.get(k),m=await gN(e,l);m.snapshot&&g.push(m.snapshot)}else{let n=await fc(e.localStore,h);i=await e9(e.localStore,n),await gv(e,gS(n),h,!1,i.resumeToken)}f.push(i)}return e.dc.nu(g),f}function gS(a){return bU(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function gT(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).$i()}async function gU(a,b,c,d){var e;let f=e=a;if(f.vc)return void q("SyncEngine","Ignoring unexpected query state notification.");let g=f._c.get(b);if(g&&g.length>0)switch(c){case"current":case"not-current":{let h=await fd(f.localStore,b6(g[0])),i=c3.createSynthesizedRemoteEventForCurrentChange(b,"current"===c,aR.EMPTY_BYTE_STRING);await gK(f,h,i);break}case"rejected":await fa(f.localStore,b,!0),gF(f,b,d);break;default:u()}}async function gV(a,b,c){let d=gW(a);if(d.vc){for(let e of b){if(d._c.has(e)){q("SyncEngine","Adding an already active target "+e);continue}let f=await fc(d.localStore,e),g=await e9(d.localStore,f);await gv(d,gS(f),g.targetId,!1,g.resumeToken),fL(d.remoteStore,g)}for(let h of c)d._c.has(h)&&await fa(d.localStore,h,!1).then(()=>{fM(d.remoteStore,h),gF(d,h)}).catch(ab)}}function gW(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applyRemoteEvent=gy.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=gM.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=gA.bind(null,c),c.dc.nu=gi.bind(null,c.eventManager),c.dc.Pc=gj.bind(null,c.eventManager),c}function gX(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applySuccessfulWrite=gB.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=gC.bind(null,c),c}class gY{constructor(){this.synchronizeTabs=!1}async initialize(a){this.serializer=fB(a.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(a),this.persistence=this.createPersistence(a),await this.persistence.start(),this.localStore=this.createLocalStore(a),this.gcScheduler=this.createGarbageCollectionScheduler(a,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(a,this.localStore)}createGarbageCollectionScheduler(a,b){return null}createIndexBackfillerScheduler(a,b){return null}createLocalStore(a){return e4(this.persistence,new e2,a.initialUser,this.serializer)}createPersistence(a){return new eT(eV.zs,this.serializer)}createSharedClientState(a){return new fq}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gZ extends null{constructor(a,b,c){super(),this.Vc=a,this.cacheSizeBytes=b,this.forceOwnership=c,this.synchronizeTabs=!1}async initialize(a){await super.initialize(a),await this.Vc.initialize(this,a),await gX(this.Vc.syncEngine),await fY(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(a){return e4(this.persistence,new e2,a.initialUser,this.serializer)}createGarbageCollectionScheduler(a,b){let c=this.persistence.referenceDelegate.garbageCollector;return new ey(c,a.asyncQueue,b)}createIndexBackfillerScheduler(a,b){let c=new an(b,this.persistence);return new am(a.asyncQueue,c)}createPersistence(a){let b=e0(a.databaseInfo.databaseId,a.databaseInfo.persistenceKey),c=void 0!==this.cacheSizeBytes?ek.withCacheSize(this.cacheSizeBytes):ek.DEFAULT;return new eZ(this.synchronizeTabs,b,a.clientId,c,a.asyncQueue,fz(),fA(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(a){return new fq}}class g$ extends null{constructor(a,b){super(a,b,!1),this.Vc=a,this.cacheSizeBytes=b,this.synchronizeTabs=!0}async initialize(a){await super.initialize(a);let b=this.Vc.syncEngine;this.sharedClientState instanceof fp&&(this.sharedClientState.syncEngine={jr:gP.bind(null,b),zr:gU.bind(null,b),Wr:gV.bind(null,b),$i:gT.bind(null,b),Qr:gO.bind(null,b)},await this.sharedClientState.start()),await this.persistence.Ii(async a=>{await gQ(this.Vc.syncEngine,a),this.gcScheduler&&(a&&!this.gcScheduler.started?this.gcScheduler.start():a||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(a&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():a||this.indexBackfillerScheduler.stop())})}createSharedClientState(a){let b=fz();if(!fp.D(b))throw new w(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let c=e0(a.databaseInfo.databaseId,a.databaseInfo.persistenceKey);return new fp(b,a.asyncQueue,c,a.clientId,a.initialUser)}}class g_{async initialize(a,b){this.localStore||(this.localStore=a.localStore,this.sharedClientState=a.sharedClientState,this.datastore=this.createDatastore(b),this.remoteStore=this.createRemoteStore(b),this.eventManager=this.createEventManager(b),this.syncEngine=this.createSyncEngine(b,!a.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>gz(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=gL.bind(null,this.syncEngine),await f6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new gf}createDatastore(a){var b,c,d,e,f;let g=fB(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new fy(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new fG(c,d,e,f)}createRemoteStore(a){var b,c,d,e,f;return b=this.localStore,c=this.datastore,d=a.asyncQueue,e=a=>gz(this.syncEngine,a,0),f=fs.D()?new fs:new fr,new fI(b,c,d,e,f)}createSyncEngine(a,b){return function(a,b,c,d,e,f,g){let h=new gt(a,b,c,d,e,f);return g&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(a){var b;let c=b=a;q("RemoteStore","RemoteStore shutting down."),c.vu.add(5),await fK(c),c.Pu.shutdown(),c.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class g0{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Sc(this.observer.next,a)}error(a){this.observer.error?this.Sc(this.observer.error,a):r("Uncaught Error in snapshot listener:",a.toString())}Dc(){this.muted=!0}Sc(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class g1{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new w(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let b=await async function(a,b){var c;let d=c=a,e=dr(d.serializer)+"/documents",f={documents:b.map(a=>dm(d.serializer,a))},g=await d.vo("BatchGetDocuments",e,f,b.length),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.serializer,"found"in(c=a)?function(a,b){var c;b.found||u(),b.found.name,b.found.updateTime;let d=dn(a,b.found.name),e=dj(b.found.updateTime),f=b.found.createTime?dj(b.found.createTime):L.min(),g=new bk({mapValue:{fields:b.found.fields}});return bm.newFoundDocument(d,e,f,g)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||u(),!b.readTime&&u();let e=dn(a,b.missing),f=dj(b.readTime);return bm.newNoDocument(e,f)}(b,c):u());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||u(),i.push(c)}),i}(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new cP(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=Q.fromPath(b);this.mutations.push(new cQ(c,this.precondition(c)))}),await async function(a,b){var c;let d=c=a,e=dr(d.serializer)+"/documents",f={writes:b.map(a=>dv(d.serializer,a))};await d.Io("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw u();b=L.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new w(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?b.isEqual(L.min())?cC.exists(!1):cC.updateTime(b):cC.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(L.min()))throw new w(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return cC.updateTime(b)}return cC.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the //
 * pieces of the client SDK architecture. It is responsible for creating the //
 * async queue that is shared by all of the other components in the system. //
 */ class g2{constructor(a,b,c,d){this.authCredentials=a,this.appCheckCredentials=b,this.asyncQueue=c,this.databaseInfo=d,this.user=m.UNAUTHENTICATED,this.clientId=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (class a{static A(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=G(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}).A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(c,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=ga(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function g3(a,b){a.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await e5(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a._offlineComponents=b}async function g4(a,b){a.asyncQueue.verifyOperationInProgress();let c=await g6(a);q("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>f5(b.remoteStore,a)),a.setAppCheckTokenChangeListener((a,c)=>f5(b.remoteStore,c)),a._onlineComponents=b}function g5(a){return"FirebaseError"===a.name?a.code===v.FAILED_PRECONDITION||a.code===v.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&a instanceof DOMException)||22===a.code||20===a.code||11===a.code}async function g6(a){if(!a._offlineComponents){if(a._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await g3(a,a._uninitializedComponentsProvider._offline)}catch(b){let c=b;if(!g5(c))throw c;s("Error using user provided cache. Falling back to memory cache: "+c),await g3(a,new gY)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await g3(a,new gY)}return a._offlineComponents}async function g7(a){return a._onlineComponents||(a._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await g4(a,a._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await g4(a,new g_))),a._onlineComponents}async function g8(a){let b=await g7(a),c=b.eventManager;return c.onListen=gu.bind(null,b.syncEngine),c.onUnlisten=gw.bind(null,b.syncEngine),c}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Compares two `ExperimentalLongPollingOptions` objects for equality.
 */ /**
 * Creates and returns a new `ExperimentalLongPollingOptions` with the same
 * option values as the given instance.
 */ function g9(a){let b={};return void 0!==a.timeoutSeconds&&(b.timeoutSeconds=a.timeoutSeconds),b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ha=new Map;function hb(a){if(Q.isDocumentKey(a))throw new w(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function hc(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":u()}function hd(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new w(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=hc(a);throw new w(v.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class he{constructor(a){var b,c;if(void 0===a.host){if(void 0!==a.ssl)throw new w(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,this.cache=a.localCache,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new w(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}(function(a,b,c,d){if(!0===b&& !0===d)throw new w(v.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)})("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===a.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g9(null!==(c=a.experimentalLongPollingOptions)&& void 0!==c?c:{}),function(a){if(void 0!==a.timeoutSeconds){if(isNaN(a.timeoutSeconds))throw new w(v.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new w(v.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new w(v.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!a.useFetchStreams}isEqual(a){var b,c;return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&(b=this.experimentalLongPollingOptions,c=a.experimentalLongPollingOptions,b.timeoutSeconds===c.timeoutSeconds)&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}class hf{constructor(a,b,c,d){this._authCredentials=a,this._appCheckCredentials=b,this._databaseId=c,this._app=d,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new he({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new w(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new he(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new z;switch(a.type){case"firstParty":return new D(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new w(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=ha.get(a);b&&(q("ComponentProvider","Removing Datastore"),ha.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class hg{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new hg(this.firestore,a,this._key)}}class hh{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new hh(this.firestore,a,this._query)}}class hi extends hh{constructor(a,b,c){super(a,b,bV(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new hg(this.firestore,null,new Q(a))}withConverter(a){return new hi(this.firestore,a,this._path)}}function hj(a,b,...c){if(a=(0,i.m9)(a),/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a(b,c,d){if(!d)throw new w(v.INVALID_ARGUMENT,`Function ${b}() cannot be called with an empty ${c}.`)}("collection","path",b),a instanceof hf){let d=N.fromString(b,...c);return hb(d),new hi(a,null,d)}{if(!(a instanceof hg||a instanceof hi))throw new w(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(N.fromString(b,...c));return hb(e),new hi(a.firestore,null,e)}}function hk(a){return function(a,b){if("object"!=typeof a||null===a)return!1;let c=a;for(let d of b)if(d in c&&"function"==typeof c[d])return!0;return!1}(a,["next","error","complete"])}class hl extends hf{constructor(a,b,c,d){super(a,b,c,d),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new fC(this,"async_queue_retry"),this.Xc=()=>{let a=fA();a&&q("AsyncQueue","Visibility state changed to "+a.visibilityState),this.qo.Mo()};let a=fA();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.Zc(),this.ta(a)}enterRestrictedMode(a){if(!this.jc){this.jc=!0,this.Jc=a||!1;let b=fA();b&&"function"==typeof b.removeEventListener&&b.removeEventListener("visibilitychange",this.Xc)}}enqueue(a){if(this.Zc(),this.jc)return new Promise(()=>{});let b=new x;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Qc.push(a),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(a){if(!ah(a))throw a;q("AsyncQueue","Operation failed with retryable error: "+a)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(a){let b=this.Gc.then(()=>(this.Hc=!0,a().catch(a=>{var b;this.Wc=a,this.Hc=!1;let c,d=(c=(b=a).message||"",b.stack&&(c=b.stack.includes(b.message)?b.stack:b.message+"\n"+b.stack),c);throw r("INTERNAL UNHANDLED ERROR: ",d),a}).then(a=>(this.Hc=!1,a))));return this.Gc=b,b}enqueueAfterDelay(a,b,c){this.Zc(),this.Yc.indexOf(a)> -1&&(b=0);let d=f9.createAndSchedule(this,a,b,c,a=>this.na(a));return this.zc.push(d),d}Zc(){this.Wc&&u()}verifyOperationInProgress(){}async sa(){let a;do await (a=this.Gc);while(a!==this.Gc)}ia(a){for(let b of this.zc)if(b.timerId===a)return!0;return!1}ra(a){return this.sa().then(()=>{for(let b of(this.zc.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.zc))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.sa()})}oa(a){this.Yc.push(a)}na(a){let b=this.zc.indexOf(a);this.zc.splice(b,1)}},this._persistenceKey=(null==d?void 0:d.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ho(this),this._firestoreClient.terminate()}}function hm(a,b){let c="object"==typeof a?a:(0,f.Mq)(),d=(0,f.qX)(c,"firestore").getImmediate({identifier:"string"==typeof a?a:b||"(default)"});if(!d._initialized){let e=(0,i.P0)("firestore");e&&function(a,b,c,d={}){var e;let f=(a=hd(a,hf))._getSettings(),g=`${b}:${c}`;if("firestore.googleapis.com"!==f.host&&f.host!==g&&s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),a._setSettings(Object.assign(Object.assign({},f),{host:g,ssl:!1})),d.mockUserToken){let h,j;if("string"==typeof d.mockUserToken)h=d.mockUserToken,j=m.MOCK_USER;else{h=(0,i.Sg)(d.mockUserToken,null===(e=a._app)|| void 0===e?void 0:e.options.projectId);let k=d.mockUserToken.sub||d.mockUserToken.user_id;if(!k)throw new w(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");j=new m(k)}a._authCredentials=new A(new y(h,j))}}(d,...e)}return d}function hn(a){return a._firestoreClient||ho(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function ho(a){var b,c,d,e,f,g,h;let i=a._freezeSettings(),j=(e=a._databaseId,f=(null===(b=a._app)|| void 0===b?void 0:b.options.appId)||"",g=a._persistenceKey,h=i,new aZ(e,f,g,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,g9(h.experimentalLongPollingOptions),h.useFetchStreams));a._firestoreClient=new g2(a._authCredentials,a._appCheckCredentials,a._queue,j),(null===(c=i.cache)|| void 0===c?void 0:c._offlineComponentProvider)&&(null===(d=i.cache)|| void 0===d?void 0:d._onlineComponentProvider)&&(a._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}class hp{constructor(a,b,c){this._userDataWriter=b,this._data=c,this.type="AggregateQuerySnapshot",this.query=a}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class hq{constructor(a){this._byteString=a}static fromBase64String(a){try{return new hq(aR.fromBase64String(a))}catch(b){throw new w(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new hq(aR.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class hr{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new w(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class hs{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class ht{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new w(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new w(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return H(this._lat,a._lat)||H(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hu=/^__.*__$/;class hv{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new cL(a,this.data,this.fieldMask,b,this.fieldTransforms):new cK(a,this.data,b,this.fieldTransforms)}}class hw{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new cL(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function hx(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw u()}}class hy{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.serializer=c,this.ignoreUndefinedProperties=d,void 0===e&&this.ua(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(a){return new hy(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.aa({path:c,la:!1});return d.fa(a),d}da(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.aa({path:c,la:!1});return d.ua(),d}wa(a){return this.aa({path:void 0,la:!0})}_a(a){return hM(a,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}ua(){if(this.path)for(let a=0;a<this.path.length;a++)this.fa(this.path.get(a))}fa(a){if(0===a.length)throw this._a("Document fields must not be empty");if(hx(this.ca)&&hu.test(a))throw this._a('Document fields cannot begin and end with "__"')}}class hz{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.serializer=c||fB(a)}ya(a,b,c,d=!1){return new hy({ca:a,methodName:b,ga:c,path:P.emptyPath(),la:!1,ma:d},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hA(a){let b=a._freezeSettings(),c=fB(a._databaseId);return new hz(a._databaseId,!!b.ignoreUndefinedProperties,c)}class hB extends null{_toFieldTransform(a){if(2!==a.ca)throw 1===a.ca?a._a(`${this._methodName}() can only appear at the top level of your update data`):a._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof hB}}function hC(a,b,c){return new hy({ca:3,ga:b.settings.ga,methodName:a._methodName,la:c},b.databaseId,b.serializer,b.ignoreUndefinedProperties)}class hD extends null{_toFieldTransform(a){return new cA(a.path,new cs)}isEqual(a){return a instanceof hD}}function hE(a,b,c,d=!1){return hF(c,a.ya(d?4:3,b))}function hF(a,b){if(hH(a=(0,i.m9)(a)))return hI("Unsupported field value:",b,a),hG(a,b);if(a instanceof hs)return function(a,b){if(!hx(b.ca))throw b._a(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b._a(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.la&&4!==b.ca)throw b._a("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=hF(e,b.wa(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,i.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return cn(b.serializer,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=K.fromDate(a);return{timestampValue:dh(b.serializer,c)}}if(a instanceof K){let d=new K(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:dh(b.serializer,d)}}if(a instanceof ht)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof hq)return{bytesValue:di(b.serializer,a._byteString)};if(a instanceof hg){let e=b.databaseId,f=a.firestore._databaseId;if(!f.isEqual(e))throw b._a(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:dk(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b._a(`Unsupported field value: ${hc(a)}`)}(a,b)}function hG(a,b){let c={};return aI(a)?b.path&&b.path.length>0&&b.fieldMask.push(b.path):aH(a,(a,d)=>{let e=hF(d,b.ha(a));null!=e&&(c[a]=e)}),{mapValue:{fields:c}}}function hH(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof K||a instanceof ht||a instanceof hq||a instanceof hg||a instanceof hs)}function hI(a,b,c){var d;if(!hH(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=hc(c);throw"an object"===e?b._a(a+" a custom object"):b._a(a+" "+e)}}function hJ(a,b,c){if((b=getModularInstance(b))instanceof hr)return b._internalPath;if("string"==typeof b)return hL(a,b);throw hM("Field path arguments must be of type string or ",a,!1,void 0,c)}let hK=RegExp("[~\\*/\\[\\]]");function hL(a,b,c){if(b.search(hK)>=0)throw hM(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new hr(...b.split("."))._internalPath}catch(d){throw hM(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function hM(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new w(v.INVALID_ARGUMENT,h+a+i)}function hN(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class hO{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new hg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new hP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(hQ("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class hP extends hO{data(){return super.data()}}function hQ(a,b){return"string"==typeof b?hL(a,b):b instanceof hr?b._internalPath:b._delegate._internalPath}class hR{}class hS extends hR{}function hT(a,b,...c){let d=[];for(let e of(b instanceof hR&&d.push(b),function(a){let b=a.filter(a=>a instanceof hW).length,c=a.filter(a=>a instanceof hU).length;if(b>1||b>0&&c>0)throw new w(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(d=d.concat(c)),d))a=e._apply(a);return a}class hU extends hS{constructor(a,b,c){super(),this._field=a,this._op=b,this._value=c,this.type="where"}static _create(a,b,c){return new hU(a,b,c)}_apply(a){let b=this._parse(a);return h4(a._query,b),new hh(a.firestore,a.converter,b0(a._query,b))}_parse(a){let b=hA(a.firestore),c=function(a,b,c,d,e,f,g){let h;if(e.isKeyField()){if("array-contains"===f||"array-contains-any"===f)throw new w(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if("in"===f||"not-in"===f){h3(g,f);let i=[];for(let j of g)i.push(h2(d,a,j));h={arrayValue:{values:i}}}else h=h2(d,a,g)}else"in"!==f&&"not-in"!==f&&"array-contains-any"!==f||h3(g,f),h=hE(c,b,g,"in"===f||"not-in"===f);return bt.create(e,f,h)}(a._query,"where",b,a.firestore._databaseId,this._field,this._op,this._value);return c}}function hV(a,b,c){let d=hQ("where",a);return hU._create(d,b,c)}class hW extends hR{constructor(a,b){super(),this.type=a,this._queryConstraints=b}static _create(a,b){return new hW(a,b)}_parse(a){let b=this._queryConstraints.map(b=>b._parse(a)).filter(a=>a.getFilters().length>0);return 1===b.length?b[0]:bu.create(b,this._getOperator())}_apply(a){let b=this._parse(a);return 0===b.getFilters().length?a:(function(a,b){let c=a,d=b.getFlattenedFilters();for(let e of d)h4(c,e),c=b0(c,e)}(a._query,b),new hh(a.firestore,a.converter,b0(a._query,b)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class hX extends hS{constructor(a,b){super(),this._field=a,this._direction=b,this.type="orderBy"}static _create(a,b){return new hX(a,b)}_apply(a){let b=function(a,b,c){if(null!==a.startAt)throw new w(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==a.endAt)throw new w(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let d=new bq(b,c);return function(a,b){if(null===bX(a)){let c=bY(a);null!==c&&h5(a,c,b.field)}}(a,d),d}(a._query,this._field,this._direction);return new hh(a.firestore,a.converter,function(a,b){let c=a.explicitOrderBy.concat([b]);return new bT(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(a._query,b))}}function hY(a,b="asc"){let c=hQ("orderBy",a);return hX._create(c,b)}class hZ extends hS{constructor(a,b,c){super(),this.type=a,this._limit=b,this._limitType=c}static _create(a,b,c){return new hZ(a,b,c)}_apply(a){return new hh(a.firestore,a.converter,b1(a._query,this._limit,this._limitType))}}function h$(a){return function a(b,c){if(c<=0)throw new w(v.INVALID_ARGUMENT,`Function ${b}() requires a positive number, but it was: ${c}.`)}("limit",a),hZ._create("limit",a,"F")}class h_ extends null{constructor(a,b,c){super(),this.type=a,this._docOrFields=b,this._inclusive=c}static _create(a,b,c){return new h_(a,b,c)}_apply(a){var b,c;let d=h1(a,this.type,this._docOrFields,this._inclusive);return new hh(a.firestore,a.converter,(b=a._query,c=d,new bT(b.path,b.collectionGroup,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,c,b.endAt)))}}class h0 extends null{constructor(a,b,c){super(),this.type=a,this._docOrFields=b,this._inclusive=c}static _create(a,b,c){return new h0(a,b,c)}_apply(a){var b,c;let d=h1(a,this.type,this._docOrFields,this._inclusive);return new hh(a.firestore,a.converter,(b=a._query,c=d,new bT(b.path,b.collectionGroup,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,c)))}}function h1(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof hO)return function(a,b,c,d,e){if(!d)throw new w(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of b$(a))if(g.field.isKeyField())f.push(a8(b,d.key));else{let h=d.data.field(g.field);if(aW(h))throw new w(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new w(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new bn(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=hA(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new w(v.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new w(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!bZ(a)&& -1!==j.indexOf("/"))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(N.fromString(j));if(!Q.isDocumentKey(k))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new Q(k);h.push(a8(b,l))}else{let m=hE(c,d,j);h.push(m)}}return new bn(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function h2(a,b,c){if("string"==typeof(c=(0,i.m9)(c))){if(""===c)throw new w(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bZ(b)&& -1!==c.indexOf("/"))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(N.fromString(c));if(!Q.isDocumentKey(d))throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return a8(a,new Q(d))}if(c instanceof hg)return a8(a,c._key);throw new w(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(c)}.`)}function h3(a,b){if(!Array.isArray(a)||0===a.length)throw new w(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`)}function h4(a,b){if(b.isInequality()){let c=bY(a),d=b.field;if(null!==c&&!c.isEqual(d))throw new w(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${d.toString()}'`);let e=bX(a);null!==e&&h5(a,d,e)}let f=function(a,b){for(let c of a)for(let d of c.getFlattenedFilters())if(b.indexOf(d.op)>=0)return d.op;return null}(a.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(null!==f)throw f===b.op?new w(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new w(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${b.op.toString()}' filters with '${f.toString()}' filters.`)}function h5(a,b,c){if(!c.isEqual(b))throw new w(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}class h6{convertValue(a,b="none"){switch(a1(a)){case 0:return null;case 1:return a.booleanValue;case 2:return aU(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(aV(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw u()}}convertObject(a,b){return this.convertObjectMap(a.fields,b)}convertObjectMap(a,b="none"){let c={};return aH(a,(a,d)=>{c[a]=this.convertValue(d,b)}),c}convertGeoPoint(a){return new ht(aU(a.latitude),aU(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=aX(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(aY(a));default:return null}}convertTimestamp(a){let b=aT(a);return new K(b.seconds,b.nanos)}convertDocumentKey(a,b){var c;let d=N.fromString(a);(c=dF(d))||u();let e=new a$(d.get(1),d.get(3)),f=new Q(d.popFirst(5));return e.isEqual(b)||r(`Document ${f} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class h7{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class h8 extends hO{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new h9(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(a,b={}){if(this._document){let c=this._document.data.field(hQ("DocumentSnapshot.get",a));if(null!==c)return this._userDataWriter.convertValue(c,b.serverTimestamps)}}}class h9 extends h8{data(a={}){return super.data(a)}}class ia{constructor(a,b,c,d){this._firestore=a,this._userDataWriter=b,this._snapshot=d,this.metadata=new h7(d.hasPendingWrites,d.fromCache),this.query=c}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new h9(this._firestore,this._userDataWriter,c.key,c,new h7(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(a={}){let b=!!a.includeMetadataChanges;if(b&&this._snapshot.excludesMetadataChanges)throw new w(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===b||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>{let d=new h9(a._firestore,a._userDataWriter,b.doc.key,b.doc,new h7(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter);return b.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let c=new h9(a._firestore,a._userDataWriter,b.doc.key,b.doc,new h7(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),e=-1,f=-1;return 0!==b.type&&(e=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(f=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:ib(b.type),doc:c,oldIndex:e,newIndex:f}})}}(this,b),this._cachedChangesIncludeMetadataChanges=b),this._cachedChanges}}function ib(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return u()}}class ic extends h6{constructor(a){super(),this.firestore=a}convertBytes(a){return new hq(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new hg(this.firestore,null,b)}}function id(a,...b){var c,d,e;a=(0,i.m9)(a);let f={includeMetadataChanges:!1},g=0;"object"!=typeof b[g]||hk(b[g])||(f=b[g],g++);let h={includeMetadataChanges:f.includeMetadataChanges};if(hk(b[g])){let j=b[g];b[g]=null===(c=j.next)|| void 0===c?void 0:c.bind(j),b[g+1]=null===(d=j.error)|| void 0===d?void 0:d.bind(j),b[g+2]=null===(e=j.complete)|| void 0===e?void 0:e.bind(j)}let k,l,m;if(a instanceof hg)l=hd(a.firestore,hl),m=bV(a._key.path),k={next:c=>{b[g]&&b[g](ie(l,a,c))},error:b[g+1],complete:b[g+2]};else{let n=hd(a,hh);l=hd(n.firestore,hl),m=n._query;let o=new ic(l);k={next:a=>{b[g]&&b[g](new ia(l,o,n,a))},error:b[g+1],complete:b[g+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a(b){if("L"===b.limitType&&0===b.explicitOrderBy.length)throw new w(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(a._query)}return function(a,b,c,d){let e=new g0(d),f=new gl(b,e,c);return a.asyncQueue.enqueueAndForget(async()=>gg(await g8(a),f)),()=>{e.Dc(),a.asyncQueue.enqueueAndForget(async()=>gh(await g8(a),f))}}(hn(l),m,h,k)}function ie(a,b,c){let d=c.docs.get(b._key),e=new ic(a);return new h8(a,e,b._key,d,new h7(c.hasPendingWrites,c.fromCache),b.converter)}class ig{constructor(a){this.forceOwnership=a,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(a){this._onlineComponentProvider=new g_,this._offlineComponentProvider=new gZ(this._onlineComponentProvider,null==a?void 0:a.cacheSizeBytes,this.forceOwnership)}}function ih(a,b){if((a=getModularInstance(a)).firestore!==b)throw new w(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}!function(a,b=!0){var c;n=f.Jn,(0,f.Xd)(new g.wA("firestore",(a,{instanceIdentifier:c,options:d})=>{let e=a.getProvider("app").getImmediate(),f=new hl(new B(a.getProvider("auth-internal")),new F(a.getProvider("app-check-internal")),function(a,b){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new a$(a.options.projectId,b)}(e,c),e);return d=Object.assign({useFetchStreams:b},d),f._setSettings(d),f},"PUBLIC").setMultipleInstances(!0)),(0,f.KN)(l,"3.13.0",void 0),(0,f.KN)(l,"3.13.0","esm2017")}()}}])