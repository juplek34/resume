import {TabNavigator} from "react-navigation";

//import your tabs js file
import Screen1 from "./components/screen1";
import Screen2 from "./components/screen2";
import TScreen from "./components/tscreen";

var myTabs = TabNavigator({
	// here you will define your screen-tabs
	Home: {screen:Screen1},
	MyFarm: {screen:Screen2}
},
{
  tabBarPosition: 'header',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#3c3c3c',
  }
  });

export default myTabs;