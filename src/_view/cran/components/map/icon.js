import { IconHandle } from '@/_public/map/class/MapHandle/base/icon'
// import { alertInfo } from '@/_command/misc';

let a = "data:image/png;base64,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"
export class WyIcon extends IconHandle {
    constructor(map, layerName = 'devicelay') {
            super(map, layerName)
        }
        /**
         * 生成图标 接受一个参数 item
         * data:image/svg+xml;base64,
         * data:image/png;base64,
         */

    _defaultIcon() {
        return a

    }

    /**
     * 
     * @param {Object} item
     */
    iconStyle() {

        return { markerFile: this._defaultIcon() }
    }


    // bindEmitById(item, info) {
    //     item.on('click', () => alertInfo(info, 'cran'))
    // }

    add(...args) {
            this._loop(...args)
            return this
        }
        /**
         * 透传参数
         * @param  {...any} args 
         */
    show = (...args) => {

        this.clear()
        this.add(...args)
    }

    clear() {
        this.data = {}
        this.layer.clear()
        return this
    }
    reduce = (item) => {
        return {
            'properties': {
                'lng': item.lng,
                'lat': item.lat,
                'name': item.name,
                'id': item.id,
                ...this.iconProps()
            },
            'symbol': {
                'markerWidth': 30,
                'markerHeight': 30,
                'markerDx': 0,
                'markerDy': 24,
                'markerOpacity': 1,
                ...this.iconStyle()
            }
        }
    }


}