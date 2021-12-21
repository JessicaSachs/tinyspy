import * as tinyspy from './src'

window.tinyspy = tinyspy

tinyspy.spyOn(document.head, 'appendChild') // Breaks
