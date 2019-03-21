(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{221:function(e,t,n){"use strict";n.r(t);var o=n(2),a=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"anonymous-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-github","aria-hidden":"true"}},[e._v("#")]),e._v(" Anonymous Github")]),e._v(" "),n("p",[e._v("Anonymous Github is a system to anonymize Github repositories before referring to them in a double-blind paper submission.\nTo start using Anonymous Github right now: "),n("strong",[n("a",{attrs:{href:"http://anonymous.4open.science/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://anonymous.4open.science/"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("Indeed, in a double-blind review process, the open-science data or code that is in the online appendix must be anonymized, similarly to paper anonymization. The authors must")]),e._v(" "),n("ul",[n("li",[e._v("anonymize URLs: the name of the institution/department/group/authors should not appear in the  URLs of the open-science appendix")]),e._v(" "),n("li",[e._v("anonymize the appendix content itself")])]),e._v(" "),n("p",[e._v("Anonymizing an open-science appendix needs some work, but fortunately, this can be automated, this is what Anonymous Github is about.")]),e._v(" "),n("p",[e._v("Anonymous Github anonymizes:")]),e._v(" "),n("ul",[n("li",[e._v("the Github owner / organization / repository name")]),e._v(" "),n("li",[e._v("the content of the repository")]),e._v(" "),n("li",[e._v("file contents (all extensions, md/txt/java/etc)")]),e._v(" "),n("li",[e._v("file and directory names")])]),e._v(" "),n("h2",{attrs:{id:"using-anonymous-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-anonymous-github","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Anonymous Github")]),e._v(" "),n("h2",{attrs:{id:"how-to-create-a-new-anonymized-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-new-anonymized-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" How to create a new anonymized repository")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/5577568/31989885-e1cecff0-b973-11e7-8e3d-a6ded2d1a8d5.gif",alt:"Anonymous Github usage"}})]),e._v(" "),n("p",[e._v("To use it, open the main page (eg "),n("a",{attrs:{href:"http://anonymous.4open.science/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://anonymous.4open.science/"),n("OutboundLink")],1),e._v('), and simply fill 1. the Github repo URL and 2. the word list (which can be updated afterwards).\nThe anonymization of the content is done by replacing all occurrences of words in a list by "XXX".\nThe word list is provided by the authors, and typically contains the institution name, author names, logins, etc...\nThe README is anonymized as well as all files of the repository. Even filenames are anonymized.')]),e._v(" "),n("p",[e._v("In a paper under double-blind review, instead of putting a link to Github, one puts a link to the Anonymous Github instance (e.g.\n"),n("a",{attrs:{href:"http://anonymous.4open.science/repository/840c8c57-3c32-451e-bf12-0e20be300389/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://anonymous.4open.science/repository/840c8c57-3c32-451e-bf12-0e20be300389/"),n("OutboundLink")],1),e._v(" which is an anomyous version of this repo).")]),e._v(" "),n("p",[e._v("To start using Anonymous Github right now, a public instance of anonymous_github is hosted at 4open.science:")]),e._v(" "),n("p",[n("strong",[n("a",{attrs:{href:"http://anonymous.4open.science/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://anonymous.4open.science/"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"what-is-the-scope-of-anonymization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-scope-of-anonymization","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the scope of anonymization?")]),e._v(" "),n("p",[e._v("In double-blind peer-review, the boundary of anonymization is the paper plus its online appendix, and only this, it's not the whole world. Googling any part of the paper or the online appendix can be considered as deliberate attempt to break anonymity ("),n("a",{attrs:{href:"http://www.monperrus.net/martin/open-science-double-blind",target:"_blank",rel:"noopener noreferrer"}},[e._v("explanation"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("p",[e._v("By default, Anonymous Github and http://anonymous.4open.science access public repositories. Public Github repositories are  not modified and hence are still visible on Github and Google, even after anonymization.")]),e._v(" "),n("p",[n("strong",[e._v("Anonymizing private repositories")]),e._v(": If you want to get a public anonymized URL of a private repository, you must give @tdurieux read access to the repo by adding him as collaborator.")]),e._v(" "),n("h2",{attrs:{id:"how-to-edit-an-anonymized-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-edit-an-anonymized-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" How to edit an anonymized repository")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/5577568/31989888-e1e860c8-b973-11e7-8a45-b2dad401754d.gif",alt:"Anonymous Github usage"}})]),e._v(" "),n("h2",{attrs:{id:"how-it-works"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How it works?")]),e._v(" "),n("p",[e._v("The anonymization of the URL is achieved though proxying all requests.")]),e._v(" "),n("h2",{attrs:{id:"installing-anonymous-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-anonymous-github","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Anonymous Github")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/tdurieux/anonymous_github/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" anonymous_github\npip "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r requirements.txt\npython server.py -token "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("github_auth_token"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),n("h2",{attrs:{id:"related-tools"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#related-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Related tools")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.gitmask.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gitmask"),n("OutboundLink")],1),e._v(" is a tool to anonymously contribute to a Github repository.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/zombie/blind-reviews/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blind-reviews"),n("OutboundLink")],1),e._v(" is a browser add-on that enables a person reviewing a GitHub pull request to hide identifying information about the person submitting it.")]),e._v(" "),n("h2",{attrs:{id:"see-also"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#see-also","aria-hidden":"true"}},[e._v("#")]),e._v(" See also")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.monperrus.net/martin/open-science-double-blind",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open-science and Double-blind Peer-Review"),n("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=a.exports}}]);