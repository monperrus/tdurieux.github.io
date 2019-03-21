(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{229:function(a,t,e){"use strict";e.r(t);var r=e(2),s=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"maven-repair-a-maven-plugin-for-executing-automated-program-repair-tools-on-maven-projects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-repair-a-maven-plugin-for-executing-automated-program-repair-tools-on-maven-projects","aria-hidden":"true"}},[a._v("#")]),a._v(" maven-repair: a Maven plugin for executing automated program repair tools on Maven projects")]),a._v(" "),e("p",[a._v("The goal of this projects is is to simplify automatic repair on Maven projects.")]),a._v(" "),e("h2",{attrs:{id:"automatic-repair-techniques"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-repair-techniques","aria-hidden":"true"}},[a._v("#")]),a._v(" Automatic Repair Techniques")]),a._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/projects/npefix.html"}},[a._v("NPEFix")])],1),a._v(" "),e("li",[e("router-link",{attrs:{to:"/projects/nopol.html"}},[a._v("Nopol")])],1),a._v(" "),e("li",[a._v("DynaMoth")]),a._v(" "),e("li",[a._v("jGenProg")]),a._v(" "),e("li",[a._v("jKali")]),a._v(" "),e("li",[a._v("Cardumen")])]),a._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[a._v("#")]),a._v(" Install")]),a._v(" "),e("h3",{attrs:{id:"manual-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-install","aria-hidden":"true"}},[a._v("#")]),a._v(" Manual install")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/Spirals-Team/maven-repair\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" maven-repair\nmvn "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),e("h3",{attrs:{id:"maven"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven","aria-hidden":"true"}},[a._v("#")]),a._v(" Maven")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("mvn org.apache.maven.plugins:maven-dependency-plugin:2.1:get \\\n    -DrepoUrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://tdurieux.github.io/maven-repository/snapshots/ \\\n    -Dartifact"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("fr.inria.gforge.spirals:repair-maven-plugin:1.4-SNAPSHOT\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" /somewhere/my-project-with-failing-tests\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# check the failing tests")]),a._v("\nmvn "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v(" -DtrimStackTrace"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# look for patches with Nopol")]),a._v("\nmvn fr.inria.gforge.spirals:repair-maven-plugin:nopol\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# look for patches with NpeFix")]),a._v("\nmvn fr.inria.gforge.spirals:repair-maven-plugin:npefix\n")])])]),e("h2",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[a._v("#")]),a._v(" Output")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# the patches are in target\ncat target/npefix/patches.json\n\ncat target/nopol/output.json\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);