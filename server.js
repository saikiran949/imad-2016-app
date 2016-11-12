var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'iit-madras':{
        title:' IIT-MADRAS',
        heading:'ABOUT IIT-MADRAS',
        content:
        `<p>
            Indian Institute of Technology Madras is a public engineering and research  institute  located in , Tamil Nadu and  is  one of  India's  most  prestigious  universities. It is recognised as an Institute of  National  Importance  by the Government of India. Founded in 1959 with  technical  and    assistance   the former  government  of  West Germany, it was  the   Indian  Institute of Technology that was established by the  Government of India  through an  Act of Parliament, to provide  education and  research facilities in engineering and technology.
        </p>
        <p>
            IIT Madras  is a residential  institute  that occupies a 2.5 square kilometers  campus that  was formerly part  of the adjoining Guindy National Park. The institute has nearly 550 faculty, 8,000 students and 1,250 administrative and supporting staff. Growing ever since it obtained its charter from the Indian Parliament in 1961, much of the campus is a protected forest, carved out of the Guindy National Park, home to large numbers of chital (spotted deer), black buck, monkeys, and other rare wildlife. A natural lake, deepened in 1988 and 2003, drains most of its rainwater.

        </p>
        <p>
         Internationally, IIT Madras was ranked #254 in the QS World University Rankings of 2015, 56 in the QS Asian University Rankings and 20 in the QS BRICS University Rankings of 2015.
        <p>
            The Times Higher Education World Rankings ranked it at 78 and 44 in Asia and BRICS countries respectively in 2015.
         </p>
         <p>
            In India, National Institutional Ranking Framework has ranked it No.1 Engineering Institution in 2016.
</p>`
}
};
function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var content=data.content;

 var htmlTemplate=`
<html>
     <head>
        <title>
            ${title}
        </title>
        <meta name="viewpoint" content="width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
 </head>
 <body>
         <div class='container'>
           <div>
             <a href="/">home</a>
         </div>
         <hr/>
         <h3>
            ${heading}
         </h3>
         <div>
             ${content}
           </div>
         </div>
   </body>
</html>
`;

 return htmlTemplate;
}
    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/iit-name', function (req,res) {
    var iitname=req.params.iitname;
  res.send(createTemplate(iit[iitname]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
