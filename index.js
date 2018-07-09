import { AppRegistry } from 'react-native';
import App from './App';
import LoginViewController from "./LoginViewController";
import TabBarController from "./tabbarController";

// AppRegistry.registerComponent('LoginPage', () => LoginViewController);

AppRegistry.registerComponent('LoginPage', () => TabBarController);

