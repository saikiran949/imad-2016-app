var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
<div>
   <a href="/">iitmadras</a>
</div>

var articles={
    'iitmadras':{
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
       the  Institute of Technology Bombay (abbreviated IITB or IIT Bombay) is a public engineering and research institution located
        
        </p>
        <p>

        </p>
        <p>
        <p>
            
         </p>
         <p>
            
</p>`
},
    'iitkanpur':{
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
        The Indian Institute of Technology Kharagpur (IIT Kharagpur or IIT KGP; )is a public engineering institution established by the government of India in 1951. It was the first of the IITs to be established, and is recognized as an Institute of National Importance by the Government of India.


        </p>
        <p>
         As part of Nehru's dream for a free self-sufficient India, the institute was established to train scientists and engineers after India attained independence in 1947. It shares its organisational structure and undergraduate admission process with sister IITs. The students and alumni of IIT Kharagpur are informally referred to as KGPians. Among all IITs, IIT Kharagpur has the largest campus (2,100 acres), the most departments, and the highest student enrollment. IIT Kharagpur is known for its festivals: Spring Fest (Social and Cultural Festival) and Kshitij (Asia's largest Techno-Management Festival).


        </p>
        <p>
        Internationally, IIT Kharagpur is ranked 286 in the QS World University Rankings (Quacquarelli Symonds) of 2015 and 60 in the QS Asian University Rankings of 2014.IIT Kharagpur is ranked 3 in National Institutional Ranking Framework published by Ministry of Human Resource Development in April 2016.
       </p>`
},
    'iitgandhinagar':{
        title:' IIT-GANDHINAGAR',
        heading:'ABOUT IIT-GANDHINAGAR',
        content:
        `<p>
        Indian Institute of Technology Gandhinagar (also known as IIT Gandhinagar and IITGN), located in Gandhinagar, Gujarat, India, is a public institute of higher education declared to be an Institute of National Importance by the Government of India.
        </p>
        <p>
        The permanent campus of IIT Gandhinagar, on the banks of the Sabarmati River near Palaj village, is under construction and is nearing completion. In 2011, in his inaugural speech for the Amalthea technology summit, then Gujarat Chief Minister Narendra Modi spoke of the land for the new permanent campus, saying, "[the] [s]tate government has decided to give [...] land on 99 year lease with a token amount of just one rupee for setting up a campus of IIT-Gandhinagar."[9] The institute took possession of over 400 acres of land in August 2012 and the classes and other activities were started on the new campus from July 2015. The institute will function as a fully residential campus and will be constructed in phases. The campus will be run on solar power. It is envisioned to be a pollution-free, green zone.
       </p>
        <p>
        In 2011, IIT Gandhinagar and the Physical Research Laboratory signed a Memorandum of Understanding (MoU) that ensures research collaborations and exchanges between the two institutions at the level of advanced Ph.D. programs in theoretical physics, astro-physics, and atmospheric sciences. The collaboration facilitates exchange of research ideas between Ph.D. students and the faculties of both institutions.

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
        IIT Delhi is located in Hauz Khas, South Delhi. The campus of 325 acres (132 ha) is surrounded by the beautiful Hauz Khas area and monuments such as the Qutub Minar and Lotus Temple. The campus is also close to other educational institutions such as the Jawaharlal Nehru University, All India Institute of Medical Sciences, National Institute of Fashion Technology, National Council of Educational Research and Training (NCERT) and Indian Statistical Institute.
        </p>
        <p>
        Internationally, IIT Delhi was ranked #185 in the QS World University Rankings in 2016 and at 38 in the QS Asian Rankings of 2014. IIT Delhi has responded to being ranked 176 on the QS Worldwide University Rankings, with an appeal for more "investment in - and support for - the faculty."
        </p>
        <p>
        In 2014, the University ranked 4th in top higher education institutions in India, 59th in top 100 higher education Institutes in Asia. In 2016, it has been ranked 5 in Careers360 Top Universities in India 2016 and ranks at 56th in BRICS and Emerging Economies by the Times Higher Education World University Rankings
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
        Indian Institute of Technology Guwahati (IIT Guwahati, IITG) is a public institution established by the Government of India, located in Guwahati, in the state of Assam in India. It is the sixth Indian Institute of Technology established in India.
        </p>
        <p>
        The history of IIT Guwahati traces its roots to the 1985 Assam Accord signed between the All Assam Students Union and the Government of India, which mentions the general improvement in education facilities in Assam and specifically the setting up of an IIT.
       </p>
        <p>
        The campus of IIT Guwahati is on the northern banks of Brahmaputra and abuts the North Guwahati town of Amingaon, pincode-781039. It is considered as the most beautiful campus in India.
        </p>
        

        <p>
        Internationally, IIT Guwahati was ranked 451-460 in the QS World University Ranking of 2015 and 89 in the QS Asian University Rankings of 2012. In 2016 QS World Universities Rankings by subject, Electronics & Electrical Engineering department is ranked 201-250, Mechanical department is ranked 201-300, Chemistry department is ranked 301-400  and Computer Science department is ranked 401-500. In India, among engineering colleges, it ranked 10 by India Today in 2012, 8 by Outlook India in 2012[14] and 7 by Dataquest in 2011. In the Mint Government Colleges survey of 2009 it ranked 6. The Chemical Engineering department was ranked 101-150 in the QS World University Rankings by Subject 2012. In 2014, IIT Guwahati has been ranked 87 in '100 Top Global Universities Under 50 Years' by the Times Higher Education World University Rankings, bringing India in the list for the very first time. In 2015, IIT Guwahati has been ranked 61-70 in 'QS University Rankings: Top 50 Under 50' by the QS World University Rankings. and rated AAAA+ by Careers360.
         
            
</p>`
},
    'iithyderabad':{
        title:' IIT-HYDERABAD',
        heading:'ABOUT IIT-HYDERABAD',
        content:
        `<p>
        The Indian Institute of Technology Hyderabad (IIT Hyderabad, IITH) is a public university located in Sangareddy district, Telangana, India. IIT Hyderabad is one of the eight new Indian Institutes of Technology (IITs) established by the Ministry of Human Resource Development, Government of India under the Institutes of Technology (Amendment) Act, 2011. The Act was passed in the Lok Sabha on 24 March 2011 and by the Rajya Sabha on 30 April 2012. IIT Hyderabad has 826 Undergraduate, 395 Masters and 474 Ph.D. students. IITH has 142 full-time faculty. All the academic and administrative operations were shifted to the permanent campus at Kandi, Sangareddy in July 2015, although a fraction of the students stay at the temporary campus in the Ordinance Factory, Medak. All students are expected to shift to the permanent campus by the start of academic year 2016-2017. IITH is the top seventh premiere institute among the all the technical institutions of India in 2016 according to the MHRD rankings.


        </p>
        <p>
          IIT Hyderabad began functioning on 18 August 2008 from temporary campus at Ordnance Factory Medak, Eddumailaram. IIT Hyderabad's permanent campus is located at Kandi near Sangareddy and is close to the Outer Ring Road (Hyderabad). The campus is located on NH-65 and is also close to the Outer Ring Road (Hyderabad). The institute shifted most of its operations to the permanent campus in July 2015.


        </p>
        <p>
        The institute is currently in Phase 1 of construction; 3 academic blocks and 10 functioning hostel buildings (each with a capacity of 192 students) will be ready by the beginning of the academic year 2016-2017. The hostels are well connected to Institute main gate through internal transportation. The new campus's location on the national highway gives it easy access to the city of Hyderabad.
        </p>
         <p>
         IIT Hyderabad is ranked 7 in the National Institutional Ranking Framework published by Ministry of Human Resource Development in April 2016.
            
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
