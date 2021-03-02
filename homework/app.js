const nreq = require('./lib/NReq')
nreq.request('GET','http','localhost', 9818,'/hi')

nreq.request('POST','http','localhost', 9818,'/hi')

nreq.request('GET','https','covid19.th-stat.com',443,'/api/open/today')

let payload = { 
    provinceId: 1, 
    districtId: null, 
          year: 2021, 
         month: 2, 
      pageSize: 20, 
     pageIndex: 0
  }

nreq.request('POST','https','orapiweb2.pttor.com',443,'/api/oilprice/search', payload )


