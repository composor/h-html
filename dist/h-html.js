var hHtml = function (exports) {
  'use strict';

  /**
   * Hyperscript function. Enables definition of HTML/SVG using functions.
   * @param {string} type The name of the HTML or SVG tag to create.
   * @param {object} props And object of property/value pairs.
   * @param {string, number, boolean, any[]} children Any child elements.
   */

  function h(type, props) {
    var stack = [],
        node = void 0;
    var children = [];

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    stack = stack.concat(args);

    // Got thru stack from front.
    while (stack.length) {
      // If child is array, process.
      if (Array.isArray(node = stack.shift())) {
        node.map(function (item) {
          return stack.push(item);
        });
        // Else check if child is string or number.
      } else if (node != null && typeof node !== 'boolean') {
        typeof node === "number" ? node = node + '' : node;
        children.push(node);
      }
    }

    return typeof type === "string" ? { type: type, props: props || {}, children: children } : type(props || {}, children);
  }

  var createVnode = function createVnode(tag) {
    return function (props, children) {
      return undefined !== props && !props.apply && !Array.isArray(props) ? h(tag, props, children) : h(tag, {}, props);
    };
  };

  var a = function a(props, children) {
    return createVnode('a')(props, children);
  };

  var abbr = function abbr(props, children) {
    return createVnode('abbr')(props, children);
  };

  var address = function address(props, children) {
    return createVnode('address')(props, children);
  };

  var area = function area(props, children) {
    return createVnode('area')(props, children);
  };

  var article = function article(props, children) {
    return createVnode('article')(props, children);
  };

  var aside = function aside(props, children) {
    return createVnode('aside')(props, children);
  };

  var audio = function audio(props, children) {
    return createVnode('audio')(props, children);
  };

  var b = function b(props, children) {
    return createVnode('b')(props, children);
  };

  var bdi = function bdi(props, children) {
    return createVnode('bdi')(props, children);
  };

  var bdo = function bdo(props, children) {
    return createVnode('bdo')(props, children);
  };

  var blockquote = function blockquote(props, children) {
    return createVnode('blockquote')(props, children);
  };

  var br = function br(props, children) {
    return createVnode('br')(props, children);
  };

  var button = function button(props, children) {
    return createVnode('button')(props, children);
  };

  var canvas = function canvas(props, children) {
    return createVnode('canvas')(props, children);
  };

  var caption = function caption(props, children) {
    return createVnode('caption')(props, children);
  };

  var cite = function cite(props, children) {
    return createVnode('cite')(props, children);
  };

  var code = function code(props, children) {
    return createVnode('code')(props, children);
  };

  var col = function col(props, children) {
    return createVnode('col')(props, children);
  };

  var colgroup = function colgroup(props, children) {
    return createVnode('colgroup')(props, children);
  };

  var data = function data(props, children) {
    return createVnode('data')(props, children);
  };

  var datalist = function datalist(props, children) {
    return createVnode('datalist')(props, children);
  };

  var dd = function dd(props, children) {
    return createVnode('dd')(props, children);
  };

  var del = function del(props, children) {
    return createVnode('del')(props, children);
  };

  var details = function details(props, children) {
    return createVnode('details')(props, children);
  };

  var dfn = function dfn(props, children) {
    return createVnode('dfn')(props, children);
  };

  var dialog = function dialog(props, children) {
    return createVnode('dialog')(props, children);
  };

  var div = function div(props, children) {
    return createVnode('div')(props, children);
  };

  var dl = function dl(props, children) {
    return createVnode('dl')(props, children);
  };

  var dt = function dt(props, children) {
    return createVnode('dt')(props, children);
  };

  var em = function em(props, children) {
    return createVnode('em')(props, children);
  };

  var embed = function embed(props, children) {
    return createVnode('embed')(props, children);
  };

  var fieldset = function fieldset(props, children) {
    return createVnode('fieldset')(props, children);
  };

  var figcaption = function figcaption(props, children) {
    return createVnode('figcaption')(props, children);
  };

  var figure = function figure(props, children) {
    return createVnode('figure')(props, children);
  };

  var footer = function footer(props, children) {
    return createVnode('footer')(props, children);
  };

  var form = function form(props, children) {
    return createVnode('form')(props, children);
  };

  var h1 = function h1(props, children) {
    return createVnode('h1')(props, children);
  };

  var h2 = function h2(props, children) {
    return createVnode('h2')(props, children);
  };

  var h3 = function h3(props, children) {
    return createVnode('h3')(props, children);
  };

  var h4 = function h4(props, children) {
    return createVnode('h4')(props, children);
  };

  var h5 = function h5(props, children) {
    return createVnode('h5')(props, children);
  };

  var h6 = function h6(props, children) {
    return createVnode('h6')(props, children);
  };

  var header = function header(props, children) {
    return createVnode('header')(props, children);
  };

  var hr = function hr(props, children) {
    return createVnode('hr')(props, children);
  };

  var i = function i(props, children) {
    return createVnode('i')(props, children);
  };

  var img = function img(props, children) {
    return createVnode('img')(props, children);
  };

  var input = function input(props, children) {
    return createVnode('input')(props, children);
  };

  var ins = function ins(props, children) {
    return createVnode('ins')(props, children);
  };

  var kbd = function kbd(props, children) {
    return createVnode('kbd')(props, children);
  };

  var label = function label(props, children) {
    return createVnode('label')(props, children);
  };

  var legend = function legend(props, children) {
    return createVnode('legend')(props, children);
  };

  var li = function li(props, children) {
    return createVnode('li')(props, children);
  };

  var main = function main(props, children) {
    return createVnode('main')(props, children);
  };

  var map = function map(props, children) {
    return createVnode('map')(props, children);
  };

  var mark = function mark(props, children) {
    return createVnode('mark')(props, children);
  };

  var menu = function menu(props, children) {
    return createVnode('menu')(props, children);
  };

  var menuitem = function menuitem(props, children) {
    return createVnode('menuitem')(props, children);
  };

  var meter = function meter(props, children) {
    return createVnode('meter')(props, children);
  };

  var nav = function nav(props, children) {
    return createVnode('nav')(props, children);
  };

  var object = function object(props, children) {
    return createVnode('object')(props, children);
  };

  var ol = function ol(props, children) {
    return createVnode('ol')(props, children);
  };

  var optgroup = function optgroup(props, children) {
    return createVnode('optgroup')(props, children);
  };

  var option = function option(props, children) {
    return createVnode('option')(props, children);
  };

  var output = function output(props, children) {
    return createVnode('output')(props, children);
  };

  var p = function p(props, children) {
    return createVnode('p')(props, children);
  };

  var param = function param(props, children) {
    return createVnode('param')(props, children);
  };

  var pre = function pre(props, children) {
    return createVnode('pre')(props, children);
  };

  var progress = function progress(props, children) {
    return createVnode('progress')(props, children);
  };

  var q = function q(props, children) {
    return createVnode('q')(props, children);
  };

  var rp = function rp(props, children) {
    return createVnode('rp')(props, children);
  };

  var rt = function rt(props, children) {
    return createVnode('rt')(props, children);
  };

  var rtc = function rtc(props, children) {
    return createVnode('rtc')(props, children);
  };

  var ruby = function ruby(props, children) {
    return createVnode('ruby')(props, children);
  };

  var s = function s(props, children) {
    return createVnode('s')(props, children);
  };

  var samp = function samp(props, children) {
    return createVnode('samp')(props, children);
  };

  var section = function section(props, children) {
    return createVnode('section')(props, children);
  };

  var select = function select(props, children) {
    return createVnode('select')(props, children);
  };

  var small = function small(props, children) {
    return createVnode('small')(props, children);
  };

  var source = function source(props, children) {
    return createVnode('source')(props, children);
  };

  var span = function span(props, children) {
    return createVnode('span')(props, children);
  };

  var strong = function strong(props, children) {
    return createVnode('strong')(props, children);
  };

  var sub = function sub(props, children) {
    return createVnode('sub')(props, children);
  };

  var summary = function summary(props, children) {
    return createVnode('summary')(props, children);
  };

  var sup = function sup(props, children) {
    return createVnode('sup')(props, children);
  };

  var svg = function svg(props, children) {
    return createVnode('svg')(props, children);
  };

  var table = function table(props, children) {
    return createVnode('table')(props, children);
  };

  var tbody = function tbody(props, children) {
    return createVnode('tbody')(props, children);
  };

  var td = function td(props, children) {
    return createVnode('td')(props, children);
  };

  var textarea = function textarea(props, children) {
    return createVnode('textarea')(props, children);
  };

  var tfoot = function tfoot(props, children) {
    return createVnode('tfoot')(props, children);
  };

  var th = function th(props, children) {
    return createVnode('th')(props, children);
  };

  var thead = function thead(props, children) {
    return createVnode('thead')(props, children);
  };

  var time = function time(props, children) {
    return createVnode('time')(props, children);
  };

  var tr = function tr(props, children) {
    return createVnode('tr')(props, children);
  };

  var track = function track(props, children) {
    return createVnode('track')(props, children);
  };

  var u = function u(props, children) {
    return createVnode('u')(props, children);
  };

  var ul = function ul(props, children) {
    return createVnode('ul')(props, children);
  };

  var video = function video(props, children) {
    return createVnode('video')(props, children);
  };

  var vvar = function vvar(props, children) {
    return createVnode('vvar')(props, children);
  };

  var wbr = function wbr(props, children) {
    return createVnode('wbr')(props, children);
  };

  exports.a = a;
  exports.abbr = abbr;
  exports.address = address;
  exports.area = area;
  exports.article = article;
  exports.aside = aside;
  exports.audio = audio;
  exports.b = b;
  exports.bdi = bdi;
  exports.bdo = bdo;
  exports.blockquote = blockquote;
  exports.br = br;
  exports.button = button;
  exports.canvas = canvas;
  exports.caption = caption;
  exports.cite = cite;
  exports.code = code;
  exports.col = col;
  exports.colgroup = colgroup;
  exports.data = data;
  exports.datalist = datalist;
  exports.dd = dd;
  exports.del = del;
  exports.details = details;
  exports.dfn = dfn;
  exports.dialog = dialog;
  exports.div = div;
  exports.dl = dl;
  exports.dt = dt;
  exports.em = em;
  exports.embed = embed;
  exports.fieldset = fieldset;
  exports.figcaption = figcaption;
  exports.figure = figure;
  exports.footer = footer;
  exports.form = form;
  exports.h1 = h1;
  exports.h2 = h2;
  exports.h3 = h3;
  exports.h4 = h4;
  exports.h5 = h5;
  exports.h6 = h6;
  exports.header = header;
  exports.hr = hr;
  exports.i = i;
  exports.img = img;
  exports.input = input;
  exports.ins = ins;
  exports.kbd = kbd;
  exports.label = label;
  exports.legend = legend;
  exports.li = li;
  exports.main = main;
  exports.map = map;
  exports.mark = mark;
  exports.menu = menu;
  exports.menuitem = menuitem;
  exports.meter = meter;
  exports.nav = nav;
  exports.object = object;
  exports.ol = ol;
  exports.optgroup = optgroup;
  exports.option = option;
  exports.output = output;
  exports.p = p;
  exports.param = param;
  exports.pre = pre;
  exports.progress = progress;
  exports.q = q;
  exports.rp = rp;
  exports.rt = rt;
  exports.rtc = rtc;
  exports.ruby = ruby;
  exports.s = s;
  exports.samp = samp;
  exports.section = section;
  exports.select = select;
  exports.small = small;
  exports.source = source;
  exports.span = span;
  exports.strong = strong;
  exports.sub = sub;
  exports.summary = summary;
  exports.sup = sup;
  exports.svg = svg;
  exports.table = table;
  exports.tbody = tbody;
  exports.td = td;
  exports.textarea = textarea;
  exports.tfoot = tfoot;
  exports.th = th;
  exports.thead = thead;
  exports.time = time;
  exports.tr = tr;
  exports.track = track;
  exports.u = u;
  exports.ul = ul;
  exports.video = video;
  exports.vvar = vvar;
  exports.wbr = wbr;

  return exports;
}({});
