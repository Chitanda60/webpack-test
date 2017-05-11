
import React from 'react'
import {render} from 'react-dom'
import Home from './home'

import Style from './style.scss'

const Render = () => {
	render(<Home />, document.getElementById('root'))
}

Render()

// document.getElementById('root').innerHTML = '蛇莓'

// if (module.hot) {
// 	module.hot.accept()
// 	module.hot.dispose(function() {
// 		clearInterval(timer);
// 	});
// }