import './App.css'

const App = () => (
	<div
		className='App'
		style={{
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}
	>
		<div
			className='draggable'
			data-tauri-drag-region
			style={{
				position: 'absolute',
				height: '100%',
				width: '100%'
			}}
		/>
		<h1>Welcome</h1>
	</div>
)

export default App
