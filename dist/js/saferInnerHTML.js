/*!
 * pomodoro-timer v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

/*! saferInnerHTML v1.1.2 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/reef */
var saferInnerHTML = function(t, e, n) {
  'use strict';
  var r = null,
    o = function(t, e) {
      e.forEach((function(e) {
        'class' === e.att
          ? (t.className = e.value)
          : 'data-' === e.att.slice(0, 5)
          ? t.setAttribute(e.att, e.value || '')
          : (t[e.att] = e.value || '');
      }));
    },
    a = function(t) {
      return Array.from(t).map((function(t) {
        return { att: t.name, value: t.value };
      }));
    },
    c = function(t) {
      var e =
        'text' === t.type
          ? document.createTextNode(t.content)
          : document.createElement(t.type);
      return (
        o(e, t.atts),
        t.children.length > 0
          ? t.children.forEach((function(t) {
              e.appendChild(c(t));
            }))
          : 'text' !== t.type && (e.textContent = t.content),
        e
      );
    },
    i = function(t) {
      var e = [];
      return (
        Array.from(t.childNodes).forEach((function(t) {
          e.push({
            content:
              t.childNodes && t.childNodes.length > 0 ? null : t.textContent,
            atts: 3 === t.nodeType ? [] : a(t.attributes),
            type: 3 === t.nodeType ? 'text' : t.tagName.toLowerCase(),
            children: i(t),
          });
        })),
        e
      );
    };
  if (!t)
    throw new Error(
      'safeInnerHTML: Please provide a valid element to inject content into'
    );
  if (
    !(function() {
      if (!Array.from || !window.DOMParser) return !1;
      r = r || new DOMParser();
      try {
        r.parseFromString('x', 'text/html');
      } catch (t) {
        return !1;
      }
      return !0;
    })()
  )
    throw new Error('safeInnerHTML: Your browser is not supported.');
  !(function(e) {
    n || (t.innerHTML = ''),
      e.forEach((function(e, n) {
        t.appendChild(c(e));
      }));
  })(
    i(
      (function(t) {
        return (
          (r = r || new DOMParser()), r.parseFromString(t, 'text/html').body
        );
      })(e)
    )
  );
};
