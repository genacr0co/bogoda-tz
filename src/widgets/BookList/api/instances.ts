import axios from 'axios';

import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();

export const $instances = axios.create({
    baseURL: publicRuntimeConfig.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
});

$instances.interceptors.request.use(async (config) => {

    if (!config?.headers) {
        throw new Error('Expected \'config\' and \'config.headers\' not to be undefined');
    }

    return config;
});
