import 'babel-polyfill';
import axios from 'axios';
import {getTestBaseUrl} from './test-common';

axios.defaults.baseURL = getTestBaseUrl();
