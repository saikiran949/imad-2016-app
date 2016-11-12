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
        </p>
        
            The Times Higher Education World Rankings ranked it at 78 and 44 in Asia and BRICS countries respectively in 2015.
         </p>
         <p>
            In India, National Institutional Ranking Framework has ranked it No.1 Engineering Institution in 2016.
</p>`
},
    'iitbombay':{
        title:' IIT-BOMBAY',
        heading:'ABOUT IIT-BOMBAY',
        content:
        `<p>
        
        </p>
        <p>

        </p>
        <p>
        <p>
            
         </p>
         <p>
            
</p>`
},
    'iitKANPUR':{
        title:' IIT-KANPUR',
        heading:'ABOUT IIT-KANPUR',
        content:
        `<p>
        
        </p>
        <p>

        </p>
        <p>
        <p>
            
         </p>
         <p>
            
</p>`
},
'iitkharakpur':{
        title:' IIT-KHARAKPUR',
        heading:'ABOUT IIT-KHARAKPUR',
        content:
        `<p>
        
        </p>
        <p>

        </p>
        <p>
        
        <p>
            
         </p>
         <p>
            
</p>`
},
    'iitgandhinagar':{
        title:' IIT-GANDHINAGAR',
        heading:'ABOUT IIT-GANDHINAGAR',
        content:
        `<p>
        Indian Institute of Technology Gandhinagar (also known as IIT Gandhinagar and IITGN), located in Gandhinagar, Gujarat, India, is a public institute of higher education declared to be an Institute of National Importance by the Government of India.[1]
        </p>
        <p>
        The permanent campus of IIT Gandhinagar, on the banks of the Sabarmati River near Palaj village, is under construction and is nearing completion.[8] In 2011, in his inaugural speech for the Amalthea technology summit, then Gujarat Chief Minister Narendra Modi spoke of the land for the new permanent campus, saying, "[the] [s]tate government has decided to give [...] land on 99 year lease with a token amount of just one rupee for setting up a campus of IIT-Gandhinagar."[9] The institute took possession of over 400 acres of land in August 2012 and the classes and other activities were started on the new campus from July 2015. The institute will function as a fully residential campus and will be constructed in phases. The campus will be run on solar power. It is envisioned to be a pollution-free, green zone.[10]
       </p>
        <p>
        In 2011, IIT Gandhinagar and the Physical Research Laboratory signed a Memorandum of Understanding (MoU) that ensures research collaborations and exchanges between the two institutions at the level of advanced Ph.D. programs in theoretical physics, astro-physics, and atmospheric sciences.[36] The collaboration facilitates exchange of research ideas between Ph.D. students and the faculties of both institutions.

         </p>
        <p>
        IIT Gandhinagar is ranked 8th by the National Institutional Ranking Framework, published by the Ministry of Human Resource Development in April 2016.
            
</p>`
},
    'iitdelhi':{
        title:' IIT-DELHI',
        heading:'ABOUT IIT-DELHI',
        content:
        `<p>
        Delhi Technological University's departments of Chemical Technology and Textile Technology were shifted out en-block to mark the beginning of IIT Delhi at its campus in Hauz Khas. The Delhi Technological University is thus the mother institution of IIT Delhi. The school, originally named the College of Engineering & Technology, was registered as a Society on 14 June 1960, and classes began in August 1961. The school was later accorded the status of a University and was renamed as Indian Institute of Technology Delhi.
        </p>
        <p>
        IIT Delhi is located in Hauz Khas, South Delhi. The campus of 325 acres (132 ha) is surrounded by the beautiful Hauz Khas area and monuments such as the Qutub Minar and Lotus Temple.[3] The campus is also close to other educational institutions such as the Jawaharlal Nehru University, All India Institute of Medical Sciences, National Institute of Fashion Technology, National Council of Educational Research and Training (NCERT) and Indian Statistical Institute.
        </p>
        <p>
        Internationally, IIT Delhi was ranked #185 in the QS World University Rankings in 2016[2] and at 38 in the QS Asian Rankings of 2014.[44][45] IIT Delhi has responded to being ranked 176 on the QS Worldwide University Rankings, with an appeal for more "investment in - and support for - the faculty."[46]
        </p>
        <p>
        In 2014, the University ranked 4th in top higher education institutions in India, 59th in top 100 higher education Institutes in Asia.[47] In 2016, it has been ranked 5 in Careers360 Top Universities in India 2016[48] and ranks at 56th in BRICS and Emerging Economies[49] by the Times Higher Education World University Rankings [50]
        </p>`
},
    'iitroorke':{
        title:' IIT-ROORKEE',
        heading:'ABOUT IIT-ROORKEE',
        content:
        `<p>
        </p>
        <p>

        </p>
        <p>
        <p>
            
         </p>
         <p>
            
</p>`
},
    'iitguwahati':{
        title:' IIT-GUWAHATI',
        heading:'ABOUT IIT-GUWAHATI',
        content:
        `<p>
        </p>
        <p>

        </p>
        <p>
        <p>
            
         </p>
         <p>
            
</p>`
},
    'iithyderabad':{
        title:' IIT-HYDERABAD',
        heading:'ABOUT IIT-HYDERABAD',
        content:
        `<p>
        The Indian Institute of Technology Hyderabad (IIT Hyderabad, IITH) is a public university located in Sangareddy district, Telangana, India. IIT Hyderabad is one of the eight new Indian Institutes of Technology (IITs)[1] established by the Ministry of Human Resource Development, Government of India under the Institutes of Technology (Amendment) Act, 2011. The Act was passed in the Lok Sabha on 24 March 2011[2] and by the Rajya Sabha on 30 April 2012.[3] IIT Hyderabad has 826 Undergraduate, 395 Masters and 474 Ph.D. students. IITH has 142 full-time faculty. All the academic and administrative operations were shifted to the permanent campus at Kandi, Sangareddy in July 2015, although a fraction of the students stay at the temporary campus in the Ordinance Factory, Medak. All students are expected to shift to the permanent campus by the start of academic year 2016-2017. IITH is the top seventh premiere institute among the all the technical institutions of India in 2016 according to the MHRD rankings.[4]


        </p>
        <p>

        </p>
        <p>
        <p>
            
         </p>
         <p>
            
</p>`
},
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

app.get('/:iitname', function (req,res) {
    var iitname=req.params.iitname;
  res.send(createTemplate(articles[iitname]));
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
