(window.webpackJsonp=window.webpackJsonp||[]).push([[23,11,12],{271:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi4xMjUiIGhlaWdodD0iMTQuODI0IiB2aWV3Qm94PSIwIDAgMjIuMTI1IDE0LjgyNCI+CiAgPGcgaWQ9IkdydXBvXzM5IiBkYXRhLW5hbWU9IkdydXBvIDM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIuODI4KSI+CiAgICA8bGluZSBpZD0iTGluaGFfMzgiIGRhdGEtbmFtZT0iTGluaGEgMzgiIHgxPSIxNi4yOTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuODMyIDQuNTg0KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNCIvPgogICAgPHBhdGggaWQ9IkNhbWluaG9fMjIiIGRhdGEtbmFtZT0iQ2FtaW5obyAyMiIgZD0iTTEwMDMuOTQxLDQ0MS45NTNsLTQuNTg0LDQuNTg0LDQuNTg0LDQuNTg0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTk5LjM1OCAtNDQxLjk1MykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiLz4KICA8L2c+Cjwvc3ZnPgo="},272:function(t,e,n){},290:function(t,e,n){t.exports=n.p+"img/page.45cc71a.svg"},291:function(t,e,n){"use strict";n(272)},295:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"buttons"},[r("div",{staticClass:"swiper-button-unique-prev"},[r("img",{attrs:{src:n(271)}})]),t._v(" "),r("div",{staticClass:"swiper-button-unique-next"},[r("img",{attrs:{id:"right-arrow",src:n(271)}})])])}],o=n(1),c=n(187),l=(n(300),n(301)),d=n.n(l),v=o.a.extend({computed:{$singleBook:function(){return c.books.$single}},mounted:function(){var t=new d.a(".gallery-thumbs",{breakpoints:{992:{direction:"vertical",slidesPerView:4}},spaceBetween:15,centeredSlides:!1,centeredSlidesBounds:!0,slidesPerView:2,watchOverflow:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,direction:"horizontal"}),e=new d.a(".gallery-main",{watchOverflow:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,preventInteractionOnTransition:!0,navigation:{nextEl:".swiper-button-unique-next",prevEl:".swiper-button-unique-prev"},thumbs:{swiper:t}});e.on("slideChangeTransitionStart",(function(){t.slideTo(e.activeIndex)})),t.on("transitionStart",(function(){e.slideTo(t.activeIndex)}))}}),m=(n(291),n(7)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"book-reader"},[r("h2",{staticClass:"book-title"},[t._v(t._s(t.$singleBook.title))]),t._v(" "),r("div",{staticClass:"gallery-container"},[r("div",{staticClass:"swiper-container gallery-thumbs"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.$singleBook.pages,(function(e){return r("div",{key:e.id,staticClass:"swiper-slide"},[r("img",{attrs:{src:n(290),alt:"página"}}),t._v(" "),r("span",{staticClass:"center"},[t._v(t._s(e.pageNumber))])])})),0)]),t._v(" "),r("div",{staticClass:"swiper-container gallery-main"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.$singleBook.pages,(function(e){return r("div",{key:e.id,staticClass:"swiper-slide page",domProps:{innerHTML:t._s(e.text)}})})),0)])]),t._v(" "),t._m(0)])}),r,!1,null,"42ab56ce",null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var r=n(7),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"book-reader template"},[e("BookReader")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BookReader:n(295).default})},312:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(27),n(40),n(33),n(1)),c=n(187),l=o.a.extend({layout:"ibook",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,e.next=3,c.books.show({id:n.params.id});case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:c.books.$single.title,meta:[{hid:"description",name:"description",content:c.books.$single.description}]}}}),d=n(7),component=Object(d.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("BookReaderTemplate")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BookReaderTemplate:n(306).default})}}]);