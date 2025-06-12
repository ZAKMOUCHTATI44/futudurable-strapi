module.exports = {
  apps: [
    {
      name: 'futudurable-strapi',
      script: 'npm',
      args: 'run start',
      cwd: '/var/www/futudurable-strapi', // Adjust this if needed
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
