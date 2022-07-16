import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'

type themeMode = 'day' | 'night'

function App() {
	const [modeState, setmodeState] = useState<themeMode>('day')

	useEffect(() => {
		const localTheme: string = localStorage.getItem('react-theme') || 'day'
		setMode(localTheme as themeMode)
	}, [])

	const setMode = (mode: themeMode) => {
		localStorage.setItem('react-theme', mode)
		setmodeState(mode)
	}

	const toggleTheme = () => {
		modeState === 'night' ? setMode('day') : setMode('night')
	}

	return (
		<ThemeProvider theme={theme[modeState]}>
			<GlobalStyle />
			<h1>{modeState === 'night' ? 'DARK MODE ON' : 'DARK MODE OFF'}</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<p>
				In the donut hole So far, the decades of preparation in the
				grove seem to be working. The ring of forest around the Mariposa
				Grove, dubbed the donut by local fire teams, hasn’t been thinned
				or burned by prescription lately. So it was “loaded with fuel,”
				says Kristen Shive, a fire ecologist soon to be affiliated with
				UC Berkeley's Cooperative Extension program. Encountering such
				overabundance, the Washburn fire burned hot and intense, turning
				into the kind of fire that’s dangerous and difficult for
				firefighters to control. But once it hit the edge of the
				carefully managed grove, “the fire dropped right down to the
				ground,” says Dickman. Unlike in the donut, which was packed
				with small trees, dead branches, and other fuel, the grove’s
				floor was relatively open. Without much material to burn, the
				fire became manageable. Crews were able to wet down the base of
				Grizzly Giant, one of the world’s top 25 biggest sequoias, and
				to clear small fallen branches, while the fire was just a few
				dozen yards away. Forest scientist Nate Stephenson saw similar
				behavior during last year’s KNP Complex fire, in Sequoia/Kings
				Canyon National Park. At the Redwood Mountain Grove there, in
				“areas that hadn’t [recently seen prescribed fire], things got
				nuked. In areas that had had a recent prescribed fire, most of
				it did really, really well,” Stephenson says, burning at the
				kind of low or moderate severity that actually benefits
				sequoias, which require fire for their seeds to germinate.
				Nonetheless, the best forest management in the world “doesn’t
				guarantee a good outcome,” says Stephenson. Bad luck and bad
				weather conditions can spin up intense fires even in carefully
				treated areas; in Redwood Mountain Grove, some treated areas
				still burned severely. Overall, as many as 3,700 mature sequoias
				died in the KNP Complex and adjacent Windy fire last year, about
				3 to 5 percent of the remaining population. But “these fuels
				treatments can improve odds of a good outcome, and greatly,”
				Stephenson says. It’s critical to understand that distinction,
				says Matt Hurteau, a fire ecologist at the University of New
				Mexico. “Forest fuels treatments do not stop fire,” he says.
				“They change the way fire interacts with the vegetation. It’s
				releasing fuel on landscape in smaller bites—and decreasing the
				chance of those big, hot, fast-moving fires.”
			</p>
		</ThemeProvider>
	)
}

export default App
