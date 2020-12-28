module.exports = {
  apps: [
    {
      name: 'API',
      script: './BE/app.js',
      watch: '.',
      env: {
        '_port': 3000,
        '_listenKey': '9dc884b076d449b1a13a34b77b319003'
      }
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
