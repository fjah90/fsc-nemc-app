import consoleLogger from './logger/console';
import api from './api';

const env = process.NODE_ENV || 'development';

const services = {
    log: env === 'development' ? consoleLogger : "No available logs",
    api,
}

export default services;