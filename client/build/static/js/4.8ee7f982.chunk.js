(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4,22],{125:function(t,e,a){},78:function(t,e,a){"use strict";a.r(e);var c=a(14),s=a(17),n=a(20),i=a(16),u=a(15),h=a(0),r=a.n(h),o=a(26),p=(a(125),a(1)),g=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).state={pics:[],cur:0,class:"shown"},s.changeImage=s.changeImage.bind(Object(n.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){for(var t=0;t<3;t++)this.state.pics.push(Object(p.jsx)(o.a,{className:"MainImage ".concat(this.state.class),src:"".concat(this.props.pics[t],".jpg")}));this.changeImage()}},{key:"changeImage",value:function(){this.setState({cur:(this.state.cur+1)%3}),setTimeout(this.changeImage,5e3)}},{key:"render",value:function(){return Object(p.jsx)("div",{children:this.state.pics[this.state.cur]})}}]),a}(r.a.Component);e.default=g}}]);
//# sourceMappingURL=4.8ee7f982.chunk.js.map