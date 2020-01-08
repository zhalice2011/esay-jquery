(function () {

    var _$ = window.$;
    var _jQuery = window.jQuery;

    var jQuery = window.jQuery = window.$ = function (selector) {

        return new jQuery.fn.init(selector);
    };


    jQuery.fn = jQuery.prototype = {
        init: function (selector) {
            if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;
            }
            else {
                var elements = document.querySelectorAll(selector);
                Array.prototype.push.apply(this, elements);
                return this;
            }
        },
        jQuery: "1.0.0",
        length: 0,
        size: function () {
            return this.length;
        }

    };
    jQuery.fn.init.prototype = jQuery.fn;

    jQuery.extend = jQuery.fn.extend = function () {
        var o = arguments[0];
        for (var p in o) {
            this[p] = o[p];
        }
    };


    jQuery.extend({
        trim: function (text) {
            return (text || "").replace(/^\s+|\s+$/g, "");
        },
        noConflict: function () {
            window.$ = _$;
            window.jQuery = _jQuery;
            return jQuery;
        }
        ,post: function (url, data, callback) {
        window.post(url, data, callback);
    }
    });


    jQuery.fn.extend({
        get: function (num) {
            return this[num];
        },
        each: function (fn) {
            for (var i = 0 ; i < this.length; i++) {
                fn(i, this[i]);
            }
            return this;
        },
        css: function () {
            var l = arguments.length;
            if (l == 1) {
                return this[0].style[arguments[0]];
            } else {
                var name = arguments[0];
                var value = arguments[1];
                this.each(function (index, ele) {
                    ele.style[name] = value;

                });
            }
            return this;
        },
        hide: function () {//隐藏元素
            this.each(function (index, ele) {
                ele.style.display = "none";
            });
        },
        show: function () {//显示元素
            this.each(function (index, ele) {
                ele.style.display = "block";
            });
        },
        addClass: function () { //添加(class)类
            var name = arguments[0];
            this.each(function (index, ele) {
                var ele_class = ele.className,
                blank = (ele_class != '') ? ' ' : '';
                added = ele_class + blank + name;
                ele.className = added;
            });
        },
        removeClass: function () { //删除(class)类
            var name = arguments[0];
            this.each(function (index, ele) {
                var obj_class = ' ' + ele.className + ' ';
                obj_class = obj_class.replace(/(\s+)/gi, ' '),
                removed = obj_class.replace(' ' + name + ' ', ' ');
                removed = removed.replace(/(^\s+)|(\s+$)/g, '');
                ele.className = removed;
            });
        },
        remove: function () { //删除属性
            var name = arguments[0];
            this.each(function (index, ele) {
                ele.attributes.removeNamedItem(name);
            });
        },
        width: function () { //设置宽度
            var name = arguments[0];
            var strName = JSON.stringify(name);
            this.each(function (index, ele) {
                if (-1 != strName.indexOf('px'))
                {
                    ele.style.width = name;
                }
                else
                {
                    ele.style.width = name + 'px';
                }
                
            });
        },
        height: function () { //设置高度
            var name = arguments[0];
            this.each(function (index, ele) {
                ele.style.height = name;
            });
        },
        getWidth: function () { //获取对象宽度
            this.each(function (index, ele) {
                var gw = ele.offsetWidth;
            });
        },
        getHeight: function () { //获取对象高度
            this.each(function (index, ele) {
                var gh = ele.offsetHeight;
            });
        },
        on: function (eventName, callback) {//on事件
            this.each(function (index, ele) {
                ele[eventName] = callback;
            });
        },
        first: function () {//获取该元素的第一个子元素
            this.each(function (index, ele) {
                var ss = ele.children[0];
            });
        },       
        allEle: function () {//获取该元素的全部子元素
            this.each(function (index, ele) {
                for (var i = 0; i < ele.children.length; i++) {
                    var ss = ele.children[i];
                }

            });
        },

    });

})();
