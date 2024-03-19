module.exports = {
  apps: [
    {
      name: 'nuxtmsp',
      script: '/app/node_modules/.bin/nuxt',
      args: 'start',
      instances: '1',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      merge_logs: true,
      error_file: '/var/log/errors.log',
      out_file: '/var/log/application.log',
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 3000,
        REST_API_URL: 'host.docker.internal:9001',
		PROJECT_POST_URL: 'api-gateway:9000',
        PROJECT_POST_PWD: 'xxxx',
        APP_ENVIRONMENT: 'DOCKER',
        IPSTACK_KEY: 'addIpStackKey',
        GEO_API_URL: 'api-geo:9000',
        LOCALIZATION_URL: 'https://localization.talent-pool.com/graphql',
        LOCALIZATION_TOKEN: 'ADD TOKEN',
		PH_ENV: 'docker',
        PH_APP_ID: 'PREDICTIVEHIRE',
        PH_REGION: 'ap-southeast-2'
      }    
    }
  ]
}
