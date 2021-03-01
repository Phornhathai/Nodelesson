const nreq = require('./lib/NReq')
nreq.request('GET','http','localhost', 9818,'/hi')

nreq.request('POST','http','localhost', 9818,'/hi')

nreq.request('GET','https','covid19.th-stat.com',443,'/api/open/today')




