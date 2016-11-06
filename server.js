var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
        title:' IIT-MADRAS',
        heading:'ABOUT IIT-MADRAS',
        content:`<p>
            Indian Institute of Technology Madras is a public engineering and research institute located in , Tamil Nadu and is one of India's most prestigious universities. It is recognised as an Institute of National Importance by the Government of India. Founded in 1959 with technical and financial assistance from the former government of West Germany, it was the third Indian Institute of Technology that was established by the Government of India through an Act of Parliament, to provide education and research facilities in engineering and technology.
        </p>
        <p>
            IIT Madras is a residential institute that occupies a 2.5 km² campus that was formerly part of the adjoining Guindy National Park. The institute has nearly 550 faculty, 8,000 students and 1,250 administrative and supporting staff. Growing ever since it obtained its charter from the Indian Parliament in 1961, much of the campus is a protected forest, carved out of the Guindy National Park, home to large numbers of chital (spotted deer), black buck, monkeys, and other rare wildlife. A natural lake, deepened in 1988 and 2003, drains most of its rainwater.

        </p>`
};
function createtemplate(data){
    var title=data.title;
    var content=data.content;

    var htmltemplate=`
<html>
     <head>
        <title>
            ${title}
        </title>
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
         </body>
</html>
`;

    return htmltemplate;
}
    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/IIT MADRAS',  function(req,res) {
  res.send(createtemplate(articleone));
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
