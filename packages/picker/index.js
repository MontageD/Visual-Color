import ColorPicker from './src/color'


ColorPicker.install = function(Vue){
    Vue.component(ColorPicker.name,ColorPicker)
}

export default ColorPicker