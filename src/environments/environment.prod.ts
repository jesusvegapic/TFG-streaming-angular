import packageInfo from '../../package.json';

export const environment = {
  production: true,
  NAME: packageInfo.name,
  VERSION: packageInfo.version,
  REST_USER: 'https://streaming-user.herokuapp.com',
  REST_CORE: 'https://streaming-core.herokuapp.com',
};