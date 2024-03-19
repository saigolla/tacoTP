module.exports = {
  apps: [
    {
      name: 'nodehiring',
      script: './node_modules/.bin/nuxt',
      args: 'start',
      instances: '1',
      env_production: {
        
      },    
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',      
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      merge_logs: true,
      error_file: '/var/log/errors.log',
      out_file: '/var/log/application.log'      
    }
  ]
}