import {config} from 'dotenv';
config();

const {env} = process;
export const API_PORT = env.API_PORT ?? env.PORT ?? 80;
export const {LISTEN_KEY} = env;
export const {SECRET} = env;
