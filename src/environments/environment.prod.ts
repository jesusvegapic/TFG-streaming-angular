import {name, version} from '../../package.json';

export const environment = {
  production: true,
  NAME: name,
  VERSION: version,
  REST_USER: 'https://streaming-user.herokuapp.com',
  REST_CORE: 'https://streaming-core.herokuapp.com',
};