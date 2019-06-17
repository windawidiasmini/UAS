import HomeScreen from './Login';
import HitungScreen from './Inputabsen';
import KursScreen from './Uploadphoto';
import AboutScreen from './Inputsukses';
import { createStackNavigator, createAppContainer} from "react-navigation";

const Navigation = createStackNavigator({
    Home: HomeScreen,
    Hitung: HitungScreen,
    Hitungkurs:KursScreen,
    About: AboutScreen,
},{
    initialRouteName: 'Home'
});

const AppContainer = createAppContainer(Navigation)
export default AppContainer;
