import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from './src/screens/ComponentScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentScreen,
	},
	{
		initialRouteName: 'Components',
		defaultNavigationOptions: {
			title: 'App',
		},
	}
);

export default createAppContainer(navigator);
