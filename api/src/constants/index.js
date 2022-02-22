import {config} from 'dotenv';
config();

const {env} = process;
export const {API_PORT} = env;
export const {LISTEN_KEY} = env;
export const {SECRET} = env;
