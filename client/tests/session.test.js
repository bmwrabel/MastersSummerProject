import * as axios from "axios/index";

jest.mock("axios");


test('create session with incorrect token', () => {

  const errorMsg = {
    "msg": "token is not valid"
  };

  axios.post.mockResolvedValue(errorMsg);

  return axios.post('api/sessions').then(data => expect(data).toEqual(errorMsg));
});

test('create sessions for user', () => {

  const body = {
    "name": "A session created by Mark Morrison",
    "description": "test description"
  };

  const sessions = [{
    "invitedUsers": [],
    "_id": "5d6f87794b4d4793bd1b5913",
    "author": "5d6ba8f155c2173fbfe3bdb6",
    "name": "A session created by Mark Morrison",
    "description": "test description",
    "highlightedQueries": [],
    "date": "2019-09-04T09:44:25.468Z"
  }];

  const resp = {data: sessions};

  axios.post.mockResolvedValue(resp);

  return axios.post('api/sessions', body).then(data => expect(data.data).toEqual(sessions));
});

test('find sessions by User Id', () => {

    const sessions = [
      {
        "invitedUsers": [],
        "_id": "5d6f87794b4d4793bd1b5913",
        "author": "5d6ba8f155c2173fbfe3bdb6",
        "name": "A session created by Mark Morrison",
        "description": "description",
        "highlightedQueries": [],
        "date": "2019-09-04T09:44:25.468Z",
        "__v": 0
      },
      {
        "invitedUsers": [],
        "_id": "5d6dd39f0e0e852e73226b79",
        "author": "5d6ba8f155c2173fbfe3bdb6",
        "name": "asdsa",
        "description": "asda",
        "highlightedQueries": [],
        "date": "2019-09-03T02:44:47.367Z",
        "__v": 0
      },
    ];

  axios.get.mockResolvedValue(sessions);

  return axios.get('api/sessions').then(data => expect(data).toEqual(sessions));

});

test('get session by its Id', () => {

  const session = [
    {
      "invitedUsers": [],
      "_id": "5d6f87794b4d4793bd1b5913",
      "author": "5d6ba8f155c2173fbfe3bdb6",
      "name": "A session created by Mark Morrison",
      "description": "description",
      "highlightedQueries": [],
      "date": "2019-09-04T09:44:25.468Z",
      "__v": 0
    },
  ];

  axios.get.mockResolvedValue(session);

  return axios.get('/api/sessions/5d6f87794b4d4793bd1b5913').then(data => expect(data).toEqual(session));
});


test('get session by its Id', () => {

  const response = [
    {
      "kind": "customsearch#search",
      "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
      },
      "queries": {
        "previousPage": [
          {
            "title": "Google Custom Search - react",
            "totalResults": "203000000",
            "searchTerms": "react",
            "count": 10,
            "startIndex": 1,
            "inputEncoding": "utf8",
            "outputEncoding": "utf8",
            "safe": "off",
            "cx": "000945381243835014262:mt4yjab0bag"
          }
        ],
        "request": [
          {
            "title": "Google Custom Search - react",
            "totalResults": "203000000",
            "searchTerms": "react",
            "count": 10,
            "startIndex": 11,
            "inputEncoding": "utf8",
            "outputEncoding": "utf8",
            "safe": "off",
            "cx": "000945381243835014262:mt4yjab0bag"
          }
        ],
        "nextPage": [
          {
            "title": "Google Custom Search - react",
            "totalResults": "203000000",
            "searchTerms": "react",
            "count": 10,
            "startIndex": 21,
            "inputEncoding": "utf8",
            "outputEncoding": "utf8",
            "safe": "off",
            "cx": "000945381243835014262:mt4yjab0bag"
          }
        ]
      },
      "context": {
        "title": "Google"
      },
      "searchInformation": {
        "searchTime": 0.273569,
        "formattedSearchTime": "0.27",
        "totalResults": "203000000",
        "formattedTotalResults": "203,000,000"
      },
      "items": [
        {
          "kind": "customsearch#result",
          "title": "Home – ReAct",
          "htmlTitle": "Home – <b>ReAct</b>",
          "link": "https://www.reactgroup.org/",
          "displayLink": "www.reactgroup.org",
          "snippet": "ReAct is an independent network dedicated to the problem of antibiotic \nresistance. ReAct is a global catalyst, advocating and stimulating for global \nengagement ...",
          "htmlSnippet": "<b>ReAct</b> is an independent network dedicated to the problem of antibiotic <br>\nresistance. <b>ReAct</b> is a global catalyst, advocating and stimulating for global <br>\nengagement&nbsp;...",
          "cacheId": "yICGNOYGvzsJ",
          "formattedUrl": "https://www.reactgroup.org/",
          "htmlFormattedUrl": "https://www.<b>react</b>group.org/",
          "pagemap": {
            "cse_thumbnail": [
              {
                "width": "380",
                "height": "133",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcCBlio-hiAGYIxlS8JnWM7b3u-pukEwE8hTtqcvFrb4_6qf7St93JQU"
              }
            ],
            "metatags": [
              {
                "viewport": "width=device-width, initial-scale=1",
                "og:locale": "en_US",
                "og:type": "website",
                "og:title": "Home – ReAct",
                "og:url": "https://www.reactgroup.org/",
                "og:site_name": "ReAct",
                "twitter:card": "summary",
                "twitter:title": "Home – ReAct",
                "twitter:creator": "@neovitabjorn"
              }
            ],
            "cse_image": [
              {
                "src": "https://www.reactgroup.org/wp-content/uploads/2016/09/Children-and-woman-looking-at-screen-Photoshare-600x210.jpg"
              }
            ]
          }
        },
        {
          "kind": "customsearch#result",
          "title": "react - npm",
          "htmlTitle": "<b>react</b> - npm",
          "link": "https://www.npmjs.com/package/react",
          "displayLink": "www.npmjs.com",
          "snippet": "Aug 8, 2019 ... React is a JavaScript library for building user interfaces.",
          "htmlSnippet": "Aug 8, 2019 <b>...</b> <b>React</b> is a JavaScript library for building user interfaces.",
          "cacheId": "59_AgxPo0V8J",
          "formattedUrl": "https://www.npmjs.com/package/react",
          "htmlFormattedUrl": "https://www.npmjs.com/package/<b>react</b>",
          "pagemap": {
            "cse_thumbnail": [
              {
                "width": "310",
                "height": "163",
                "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSW4ioeieePB3oPoBxjU8TnFR5huOzCZk78j8KPVFrvB1pr4K8Xyi-tfv4M"
              }
            ],
            "metatags": [
              {
                "apple-mobile-web-app-capable": "yes",
                "viewport": "width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes",
                "og:image": "https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png",
                "msapplication-tilecolor": "#cb3837",
                "msapplication-tileimage": "https://static.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png",
                "msapplication-config": "https://static.npmjs.com/668aac888e52ae13cac9cfd71fabd31f.xml",
                "theme-color": "#cb3837",
                "og:description": "React is a JavaScript library for building user interfaces.",
                "og:title": "react",
                "og:url": "https://www.npmjs.com/package/react",
                "og:site_name": "npm",
                "twitter:card": "summary",
                "twitter:url": "https://www.npmjs.com/package/react",
                "twitter:title": "npm: react",
                "twitter:description": "React is a JavaScript library for building user interfaces."
              }
            ],
            "cse_image": [
              {
                "src": "https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
              }
            ]
          }
        },
        {
          "kind": "customsearch#result",
          "title": "React Developer Tools",
          "htmlTitle": "<b>React</b> Developer Tools",
          "link": "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
          "displayLink": "chrome.google.com",
          "snippet": "Aug 26, 2019 ... React Developer Tools is a Chrome DevTools extension for the open-source \nReact JavaScript library. It allows you to inspect the React ...",
          "htmlSnippet": "Aug 26, 2019 <b>...</b> <b>React</b> Developer Tools is a Chrome DevTools extension for the open-source <br>\n<b>React</b> JavaScript library. It allows you to inspect the <b>React</b>&nbsp;...",
          "cacheId": "70B0EXwSunkJ",
          "formattedUrl": "https://chrome.google.com/.../react.../fmkadmapgofadopljbjfkapdkoienihi?...",
          "htmlFormattedUrl": "https://chrome.google.com/.../<b>react</b>.../fmkadmapgofadopljbjfkapdkoienihi?...",
          "pagemap": {
            "cse_thumbnail": [
              {
                "width": "128",
                "height": "128",
                "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDBtlDJJHHC41RVeBrY0IoDODlsXHH3xB1ZVzGK_ua1qvk6svw4yV6S1T_"
              }
            ],
            "document": [
              {
                "page_lang_safe": "en_GB",
                "item_category": "EXTENSION",
                "container": "CHROME",
                "family_unsafe": "false",
                "user_count": "1852397",
                "supported_regions": "AE,AR,AT,AU,BE,BG,BR,CA,CH,CL",
                "payment_type": "free",
                "canonical": "true",
                "kiosk": "false",
                "by_google": "false",
                "works_offline": "false",
                "available_on_android": "false",
                "autogen": "false",
                "stars2": "true",
                "stars3": "true",
                "stars4": "true",
                "stars5": "false",
                "category": "11_web_development"
              },
              {
                "page_lang_safe": "en",
                "item_category": "EXTENSION",
                "container": "CHROME",
                "family_unsafe": "false",
                "user_count": "448658",
                "supported_regions": "AE,AR,AT,AU,BE,BG,BR,CA,CH,CL",
                "payment_type": "free",
                "canonical": "true",
                "kiosk": "false",
                "by_google": "false",
                "works_offline": "false",
                "available_on_android": "false",
                "autogen": "false",
                "stars2": "true",
                "stars3": "true",
                "stars4": "true",
                "stars5": "false",
                "category": "11_web_development",
                "pagerank_devurl": "24000",
                "wilson_star_rating": "3.868662018774105",
                "unpub_user_count": "448658"
              }
            ],
            "metatags": [
              {
                "referrer": "origin",
                "og:title": "React Developer Tools",
                "og:description": "Adds React debugging tools to the Chrome Developer Tools.\n\nCreated from revision a39d9c3 on 8/26/2019.",
                "og:type": "website",
                "og:url": "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
                "og:image": "https://lh3.googleusercontent.com/0q6xYzT_KUemABOdvimGlVk1s73RzoBHOOYah5DLZ6XZnYJbr8UsmTcq9zWvgFRV1OyVQcxu0Q=w128-h128-e365",
                "viewport": "width=device-width, initial-scale=1.0, maximum-scale=1.0"
              }
            ],
            "offer": [
              {
                "price": "0",
                "pricecurrency": "USD",
                "availability": "http://schema.org/InStock"
              }
            ],
            "webapplication": [
              {
                "name": "React Developer Tools",
                "image": "https://lh3.googleusercontent.com/0q6xYzT_KUemABOdvimGlVk1s73RzoBHOOYah5DLZ6XZnYJbr8UsmTcq9zWvgFRV1OyVQcxu0Q=w128-h128-e365",
                "version": "4.0.6 (8/26/2019)",
                "applicationcategory": "http://schema.org/OtherApplication",
                "interactioncount": "UserDownloads:1,852,397",
                "operatingsystem": "Chrome",
                "description": "Adds React debugging tools to the Chrome Developer Tools. Created from revision a39d9c3 on 8/26/2019."
              }
            ],
            "cse_image": [
              {
                "src": "https://lh3.googleusercontent.com/0q6xYzT_KUemABOdvimGlVk1s73RzoBHOOYah5DLZ6XZnYJbr8UsmTcq9zWvgFRV1OyVQcxu0Q=w128-h128-e365"
              }
            ]
          }
        }
      ]
    }
  ];

  axios.get.mockResolvedValue(response);

  return axios.get('api/sessions/googleApi/react/11').then(data => expect(data).toEqual(response));
});

test('add user to session when user not exists', () => {

    const body = {
      "email": "peter.green@gmail.com"
    };

    const response = {
      msg: 'Server error'
    };

  axios.put.mockResolvedValue(response);

  return axios.put('/api/sessions/invitedUsers/5d6f87794b4d4793bd1b5913', body).then(data => expect(data.msg).toEqual(response.msg));
});

test('add query to queries', () => {

  const body = {
    "title": "A query added by James Brown"
  };

  const response = {
    msg: 'Query successfully added'
  };

  axios.put.mockResolvedValue(response);

  return axios.put('/api/sessions/queries', body).then(data => expect(data.msg).toEqual(response.msg));
});

test('add query to highlighted queries', () => {

  const body = {
    "title": "A query added by Boris Wrabel"
  };

  const response = {
    "errors": [
      {
        "msg": "Snippet is required",
        "param": "snippet",
        "location": "body"
      },
      {
        "msg": "URL is required",
        "param": "link",
        "location": "body"
      }
    ]
  };

  axios.put.mockResolvedValue(response);

  return axios.put('/api/sessions/highlightedqueries/5d40dd0015530941c33976fe', body).then(data => expect(data.msg).toEqual(response.msg));
});