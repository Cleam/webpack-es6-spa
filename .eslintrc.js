module.exports = {
  root: true,
  globals: {
    PRODUCTION: true,
    PREPRODUCTION: true,
    DEVELOPMENT: true
  },
  plugins: ['xyz'],
  extends: ['plugin:xyz/common'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
