webpackJsonp([1],{"3AdM":function(e,t){},OBlj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"AddBlog",data:function(){return{blog:{title:"",content:"",categories:[],author:""},authors:["Carrie","Lucy"],submmited:!1}},created:function(){},methods:{post:function(){var e=this;this.blog.title,this.blog.content;this.$axios.post("https://wd4254457889oggbip.wilddogio.com/posts.json",this.blog).then(function(t){console.log(t),e.submmited=!0})}}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"add-blog"}},[o("h2",[e._v("添加博客")]),e._v(" "),e.submmited?e._e():o("form",[o("label",[e._v("博客标题")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.title,expression:"blog.title"}],attrs:{type:"text",required:""},domProps:{value:e.blog.title},on:{input:function(t){t.target.composing||e.$set(e.blog,"title",t.target.value)}}}),e._v(" "),o("br"),o("br"),e._v(" "),o("label",[e._v("博客内容")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.blog.content,expression:"blog.content"}],attrs:{name:"",id:"",cols:"5",rows:"10"},domProps:{value:e.blog.content},on:{input:function(t){t.target.composing||e.$set(e.blog,"content",t.target.value)}}}),e._v(" "),o("div",{attrs:{id:"checkboxes"}},[o("label",[e._v("Vue.js")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Vue.js"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"Vue.js")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,a=t.target,r=!!a.checked;if(Array.isArray(o)){var s=e._i(o,"Vue.js");a.checked?s<0&&e.$set(e.blog,"categories",o.concat(["Vue.js"])):s>-1&&e.$set(e.blog,"categories",o.slice(0,s).concat(o.slice(s+1)))}else e.$set(e.blog,"categories",r)}}}),e._v(" "),o("label",[e._v("Node.js")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Node.js"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"Node.js")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,a=t.target,r=!!a.checked;if(Array.isArray(o)){var s=e._i(o,"Node.js");a.checked?s<0&&e.$set(e.blog,"categories",o.concat(["Node.js"])):s>-1&&e.$set(e.blog,"categories",o.slice(0,s).concat(o.slice(s+1)))}else e.$set(e.blog,"categories",r)}}}),e._v(" "),o("label",[e._v("Angular4")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Angular4"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"Angular4")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,a=t.target,r=!!a.checked;if(Array.isArray(o)){var s=e._i(o,"Angular4");a.checked?s<0&&e.$set(e.blog,"categories",o.concat(["Angular4"])):s>-1&&e.$set(e.blog,"categories",o.slice(0,s).concat(o.slice(s+1)))}else e.$set(e.blog,"categories",r)}}})]),e._v(" "),o("label",[e._v("作者:")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.blog.author,expression:"blog.author"}],attrs:{name:"",id:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.blog,"author",t.target.multiple?o:o[0])}}},e._l(e.authors,function(t){return o("option",{attrs:{value:""},domProps:{value:t}},[e._v(e._s(t))])}),0),e._v(" "),o("button",{on:{click:function(t){return t.preventDefault(),e.post(t)}}},[e._v("添加博客")])]),e._v(" "),e.submmited?o("div",[o("h3",[e._v("博客发布成功")])]):e._e(),e._v(" "),o("div",{attrs:{id:"preview"}},[o("h3",[e._v("博客总览")]),e._v(" "),o("p",[e._v("博客标题:"+e._s(e.blog.title))]),e._v(" "),o("p",[e._v("博客内容:")]),e._v(" "),o("p",{staticClass:"blog-content"},[e._v(e._s(e.blog.content))]),e._v(" "),o("p",[e._v("博客分类")]),e._v(" "),o("ul",e._l(e.blog.categories,function(t){return o("li",{key:t},[e._v("\n                "+e._s(t)+"\n          ")])}),0),e._v(" "),o("p",[e._v("作者:"+e._s(e.blog.author))])])])},staticRenderFns:[]};var s=o("VU/8")(a,r,!1,function(e){o("3AdM")},"data-v-a0e6d768",null);t.default=s.exports}});
//# sourceMappingURL=1.bf7365887851fb955f7d.js.map