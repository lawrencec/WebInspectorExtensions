function sidebarAria() {
    return {
        getElementAriaAttributes: function(el) {
            var ariaData = {};

            if (el.hasAttributes()) {
                for (var i = 0, iLen = el.attributes.length; i < iLen; i++) {
                    var attr = el.attributes[i];
                    if (attr.name.match(/^aria-/)) {
                        ariaData[attr.name] = attr.value;
                    }
                    else if (attr.name === 'role') {
                          ariaData['role'] = attr.value;
                    }
                }
            }

            return ariaData;
        },

        /**
         *
         * @param {Object} obj Object to retrieve key/value map for.
         * @return {Object} key/value map.
         */
        objectKeyValueMap: function(obj) {
            // Make a shallow copy with a null prototype, so that sidebar does not
            // expose prototype.
            var props = Object.getOwnPropertyNames(obj),
                copy = { __proto__: null };

            for (var i = 0; i < props.length; ++i) {
                copy[props[i]] = obj[props[i]];
            }

            return copy;
        },

        /**
         * Returns key/value map of aria-based attributes
         *
         * @this sidebarAria
         * @return {Object} Key/value map of attributes.
         *
         */
        getAriaInformation: function() {
            return this.objectKeyValueMap(this.getElementAriaAttributes($0));
        }
    };
}

