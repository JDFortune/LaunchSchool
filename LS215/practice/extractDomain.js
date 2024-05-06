function domainName(str) {
 return str.replace(/(https?:\/\/)?(www\.)?(.*?)\..*/, '$3');
}

console.log(domainName("http://github.com/carbonfive/raygun"));// "github"
console.log(domainName("http://www.zombie-bites.com"));// "zombie-bites"
console.log(domainName("https://www.cnet.com"));// "cnet"
console.log(domainName("http://google.com"));// "google"
console.log(domainName("http://google.co.jp"));// "google"
console.log(domainName("www.xakep.ru"));// "xakep"
console.log(domainName("https://youtube.com"));// "youtube