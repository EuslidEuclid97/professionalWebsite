import '../styles.css'
export default function Resume(){
    const data = [`Utilized an in-house machine learning algorithm to automate 
                validation of new datasets and display results with a REST API, 
                driving business goals by automating tedious manual dataset validation`, 
                `Worked on meticulous documentation in YAML and unit testing in Python 
                for the new API, testing output and clarifying to users how API should be used`,
                `Created Tableau dashboards and Snowflake tables conveniently displaying metrics
                 related to data governance`, `Improved knowledge of metric sources to prepare 
                 for data migration, identifying true sources where available to help provide 
                 programmatic access to datasets that produced metrics`, `Wrote various Python, SQL, 
                 and ETL automation scripting projects, and gained experience in Agile principles and Scrum 
                 framework with Jira.`];
    const pathBegin: string = '../../dist/assets/';
    const imgPaths: string[] = ['CapitalOne.jpg', 'Python.png', 'Database.jpg', 'Metrics.jpg', 'SQL.jpg']
    for(let i =0; i<imgPaths.length; i++){//appending beginning of path to picture names
        imgPaths[i] = pathBegin + imgPaths[i]
    }
    const pageArr: any[] = [];
    data.forEach((item, index) => {
        if(index%2 === 0){
            pageArr.push(<section><h3 className='rightText'>{item}</h3><img className="image" src={imgPaths[index]}></img></section>)
        }else{
            pageArr.push(<section><img className="image" src={imgPaths[index]}></img><h3 className='leftText'>{item}</h3></section>)
        }
    })
    return(
        <div className='resume'>
            <h1 className="employer">At Capital One, I...</h1>
            {pageArr}
            <h1>Full resume <a href='../../dist/assets/Zachary_Andrews_Resume.pdf'>here</a>!</h1>
        </div>
    ) 
}