import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import { Container, Navbar } from "kindyle";
import Home from "./page/home";
import Setting from "./page/setting";
import Header from "./components/Header.tsx";

const Main = () => {
	let history = useHistory();
	return (
		<>
			<Header />
			<Switch>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/setting">
					<Setting />
				</Route>
				{/* <Route path="/browser">
					<Browser />
				</Route> */}
			</Switch>
		</>
	);
};

function App() {
	return (
		<Router>
			<Container>
				<Main />
			</Container>
		</Router>
	);
}

export default App;
