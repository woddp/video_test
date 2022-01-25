const CryptoJs = require('crypto-js');
const fs = require('fs');


 const string = '{"name": "我的影视哈哈", "url": "http://baidu.com", "color": "green"}';
  const key = "835300072571725902441812076777801253736241747185";
  const iv = "7911981636387679"


const s = encode(string, key, iv);
fs.writeFileSync('../assets/key.store', Buffer.from(s, 'base64'), {encoding: 'utf8'})
function encode(data, key, vi) {
 const keyHex = CryptoJs.enc.Hex.parse(key);
 const ivHex = CryptoJs.enc.Hex.parse(iv);
 const options = {
    mode: CryptoJs.mode.CBC, iv: ivHex
 };
 return CryptoJs.TripleDES.encrypt(data, keyHex, options).toString()
}