"use strict";(globalThis.webpackChunkcodility=globalThis.webpackChunkcodility||[]).push([[78092],{78092:(t,e,r)=>{r.d(e,{t7:()=>v});var n=r(87462),o=r(97326),i=r(89611);var l=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function s(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!((n=t[r])===(o=e[r])||l(n)&&l(o)))return!1;var n,o;return!0}const a=function(t,e){var r;void 0===e&&(e=s);var n,o=[],i=!1;return function(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&r===this&&e(l,o)||(n=t.apply(this,l),i=!0,r=this,o=l),n}};var c=r(67294),u="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function f(t){cancelAnimationFrame(t.id)}var d=null;function h(t){if(void 0===t&&(t=!1),null===d||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),o=n.style;return o.width="100px",o.height="100px",e.appendChild(n),document.body.appendChild(e),e.scrollLeft>0?d="positive-descending":(e.scrollLeft=1,d=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),d}return d}var p=function(t,e){return t};function m(t){var e,r=t.getItemOffset,l=t.getEstimatedTotalSize,s=t.getItemSize,d=t.getOffsetForIndexAndAlignment,m=t.getStartIndexForOffset,v=t.getStopIndexForStartIndex,S=t.initInstanceProps,I=t.shouldResetStyleCacheOnItemSizeChange,_=t.validateProps;return(e=function(t){function e(e){var n;return(n=t.call(this,e)||this)._instanceProps=S(n.props,(0,o.Z)(n)),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:(0,o.Z)(n),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=a((function(t,e,r,o){return n.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:r,visibleStopIndex:o})})),n._callOnScroll=void 0,n._callOnScroll=a((function(t,e,r){return n.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(t){var e,o=n.props,i=o.direction,l=o.itemSize,a=o.layout,c=n._getItemStyleCache(I&&l,I&&a,I&&i);if(c.hasOwnProperty(t))e=c[t];else{var u=r(n.props,t,n._instanceProps),f=s(n.props,t,n._instanceProps),d="horizontal"===i||"horizontal"===a,h="rtl"===i,p=d?u:0;c[t]=e={position:"absolute",left:h?void 0:p,right:h?p:void 0,top:d?0:u,height:d?"100%":f,width:d?f:"100%"}}return e},n._getItemStyleCache=void 0,n._getItemStyleCache=a((function(t,e,r){return{}})),n._onScrollHorizontal=function(t){var e=t.currentTarget,r=e.clientWidth,o=e.scrollLeft,i=e.scrollWidth;n.setState((function(t){if(t.scrollOffset===o)return null;var e=n.props.direction,l=o;if("rtl"===e)switch(h()){case"negative":l=-o;break;case"positive-descending":l=i-r-o}return l=Math.max(0,Math.min(l,i-r)),{isScrolling:!0,scrollDirection:t.scrollOffset<o?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(t){var e=t.currentTarget,r=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;n.setState((function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,o-r));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(t){var e=n.props.outerRef;n._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._resetIsScrollingDebounced=function(){var t,e,r,o;null!==n._resetIsScrollingTimeoutId&&f(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=(t=n._resetIsScrolling,e=150,r=u(),o={id:requestAnimationFrame((function n(){u()-r>=e?t.call(null):o.id=requestAnimationFrame(n)}))})},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}var y,O;O=t,(y=e).prototype=Object.create(O.prototype),y.prototype.constructor=y,(0,i.Z)(y,O),e.getDerivedStateFromProps=function(t,e){return g(t,e),_(t),null};var b=e.prototype;return b.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},b.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props.itemCount,n=this.state.scrollOffset;t=Math.max(0,Math.min(t,r-1)),this.scrollTo(d(this.props,t,e,n,this._instanceProps))},b.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,n=t.layout;if("number"==typeof r&&null!=this._outerRef){var o=this._outerRef;"horizontal"===e||"horizontal"===n?o.scrollLeft=r:o.scrollTop=r}this._callPropsCallbacks()},b.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,n=this.state,o=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===r)if("rtl"===e)switch(h()){case"negative":i.scrollLeft=-o;break;case"positive-ascending":i.scrollLeft=o;break;default:var l=i.clientWidth,s=i.scrollWidth;i.scrollLeft=s-l-o}else i.scrollLeft=o;else i.scrollTop=o}this._callPropsCallbacks()},b.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&f(this._resetIsScrollingTimeoutId)},b.render=function(){var t=this.props,e=t.children,r=t.className,o=t.direction,i=t.height,s=t.innerRef,a=t.innerElementType,u=t.innerTagName,f=t.itemCount,d=t.itemData,h=t.itemKey,m=void 0===h?p:h,g=t.layout,v=t.outerElementType,S=t.outerTagName,I=t.style,_=t.useIsScrolling,y=t.width,O=this.state.isScrolling,b="horizontal"===o||"horizontal"===g,w=b?this._onScrollHorizontal:this._onScrollVertical,R=this._getRangeToRender(),x=R[0],z=R[1],C=[];if(f>0)for(var T=x;T<=z;T++)C.push((0,c.createElement)(e,{data:d,key:m(T,d),index:T,isScrolling:_?O:void 0,style:this._getItemStyle(T)}));var M=l(this.props,this._instanceProps);return(0,c.createElement)(v||S||"div",{className:r,onScroll:w,ref:this._outerRefSetter,style:(0,n.Z)({position:"relative",height:i,width:y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},I)},(0,c.createElement)(a||u||"div",{children:C,ref:s,style:{height:b?"100%":M,pointerEvents:O?"none":void 0,width:b?M:"100%"}}))},b._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],n=t[2],o=t[3];this._callOnItemsRendered(e,r,n,o)}if("function"==typeof this.props.onScroll){var i=this.state,l=i.scrollDirection,s=i.scrollOffset,a=i.scrollUpdateWasRequested;this._callOnScroll(l,s,a)}},b._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,n=this.state,o=n.isScrolling,i=n.scrollDirection,l=n.scrollOffset;if(0===e)return[0,0,0,0];var s=m(this.props,l,this._instanceProps),a=v(this.props,s,l,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,r),u=o&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,s-c),Math.max(0,Math.min(e-1,a+u)),s,a]},e}(c.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var g=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},v=m({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,n){var o=t.direction,i=t.height,l=t.itemCount,s=t.itemSize,a=t.layout,c=t.width,u="horizontal"===o||"horizontal"===a?c:i,f=Math.max(0,l*s-u),d=Math.min(f,e*s),h=Math.max(0,e*s-u+s);switch("smart"===r&&(r=n>=h-u&&n<=d+u?"auto":"center"),r){case"start":return d;case"end":return h;case"center":var p=Math.round(h+(d-h)/2);return p<Math.ceil(u/2)?0:p>f+Math.floor(u/2)?f:p;default:return n>=h&&n<=d?n:n<h?h:d}},getStartIndexForOffset:function(t,e){var r=t.itemCount,n=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getStopIndexForStartIndex:function(t,e,r){var n=t.direction,o=t.height,i=t.itemCount,l=t.itemSize,s=t.layout,a=t.width,c=e*l,u="horizontal"===n||"horizontal"===s?a:o,f=Math.ceil((u+r-c)/l);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}})},97326:(t,e,r)=>{function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{Z:()=>n})},89611:(t,e,r)=>{function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}r.d(e,{Z:()=>n})}}]);