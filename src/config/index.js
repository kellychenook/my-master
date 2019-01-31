export const baseURL = process.env.NODE_ENV === 'production' 
  ? 'http://production(生产环境).com' 
  : 'http://development(开发环境).com';//如过proxy写了跨域的地址，则开发环境为空；
