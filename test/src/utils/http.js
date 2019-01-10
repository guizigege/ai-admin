import axios from 'axios'
// let base = '/api';
let base = 'http://aiadmin.gurukeji.com';
// let base = (process.env.NODE_ENV === 'development' ? '/api' :'http://web.gzguru.com');
axios.defaults.withCredentials=true;
axios.defaults.timeout = 8000;
axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  alert('请求超时');
  return Promise.resolve(err)
});
axios.interceptors.response.use((config) => {
  // 数据统一校验处理
  config.headers.Accept = 'application/json';
  return config
}, (err) => {
  // 数据异常统一处理
  if (err.response.status === 504 || err.response.status === 404) {
    console.log("错误404||504");
  } else if (err.response.status === 403) {
    alert('权限不足,请联系管理员')
  } else {
    alert('未知错误')
  }
  return Promise.resolve(err)
});
let check = true;
export function post(url,params){
  return new Promise((resolve,reject) => {
    axios({
      method: 'post',
      url: `${base}${url}`,
      data: params,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      switch(response.data.result){
        case 1:
          resolve(response.data);break;
        case 500001:
        case 500002:
          if(check){
            check = false;
            setTimeout(()=>{
              check = true;
            },500);
            alert("登入态失效，请重新登入！");
            this.$router.push({path:"/login"});
          }
          break;
        default:
          if(check){
            check = false;
            setTimeout(()=>{
              check = true;
            },500);
            alert("错误码："+response.data.result);
          }
          break;
      }
    }).then(err => {
      reject(err)
    })
  })
}

