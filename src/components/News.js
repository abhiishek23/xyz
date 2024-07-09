import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
articles=[
  {
   "source": {
   "id": "fortune",
   "name": "Fortune"
   },
   "author": "Eva Roytburg",
   "title": "A toddler was trapped in a Tesla after its battery died without warning amid record heat waves—'safety comes last' at Tesla, expert says - Fortune",
   "description": "One expert blames the firefighters, the other, a “failure in Tesla’s safety culture.”",
   "url": "https://fortune.com/2024/06/20/tesla-trapped-toddler-in-car-arizona-heat-renee-sanchez-firefighters-safety-last/",
   "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-521264948.jpg?resize=1200,600",
   "publishedAt": "2024-06-21T04:47:00Z",
   "content": "A 20-month year old girl in Arizona was recently locked inside a Tesla Model Y after the cars battery died, creating a life threatening situation in which firefighters had to break open the door with… [+5200 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "[Removed]"
   },
   "author": null,
   "title": "[Removed]",
   "description": "[Removed]",
   "url": "https://removed.com",
   "urlToImage": null,
   "publishedAt": "1970-01-01T00:00:00Z",
   "content": "[Removed]"
   },
  {
   "source": {
   "id": "associated-press",
   "name": "Associated Press"
   },
   "author": "OLEG CETINIC, ELISE MORTON",
   "title": "As France reels from the rape of a Jewish girl, antisemitism comes to the fore in election campaign - The Associated Press",
   "description": "The alleged rape of a 12-year-old Jewish girl in a suspected antisemitic attack has sent shockwaves throughout France, and thrust concerns about antisemitism to the forefront of campaigning for the country’s legislative elections. The National Rally party is …",
   "url": "https://apnews.com/article/france-antisemitism-election-campaign-d7abcccdc89650190723e55a1716228d",
   "urlToImage": "https://dims.apnews.com/dims4/default/fa4a01d/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F69%2F7b%2Fbe3253410ee7cd3df3bfe6efbd14%2Fc4055c1bb01d45e38e7a138014bc4568",
   "publishedAt": "2024-06-21T03:21:00Z",
   "content": "PARIS (AP) The alleged rape of a 12-year-old Jewish girl in a suspected antisemitic attack has sent shockwaves throughout France, and thrust concerns about antisemitism to the forefront of campaignin… [+4234 chars]"
   },
  {
   "source": {
   "id": "espn",
   "name": "ESPN"
   },
   "author": "Adrian Wojnarowski",
   "title": "Sources: Monk to stay with Kings on $78M deal - ESPN",
   "description": "Malik Monk intends to sign a four-year, $78 million deal to return to the Kings, the maximum deal available to him to remain in Sacramento, sources told ESPN.",
   "url": "https://www.espn.com/nba/story/_/id/40398510/malik-monk-stay-kings-4-year-78m-deal",
   "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0330%2Fr1312088_1024x576_16%2D9.jpg",
   "publishedAt": "2024-06-21T03:20:00Z",
   "content": "Free agent guard Malik Monk intends to sign a four-year, $78 million deal -- including a player option -- to return to the Sacramento Kings, sources told ESPN on Thursday night.\r\nMonk, the NBA's Sixt… [+1486 chars]"
   },
  {
   "source": {
   "id": "cbs-news",
   "name": "CBS News"
   },
   "author": "Erin Jones",
   "title": "North Texas victims' rights attorney fighting to change statute of limitations for exploited women - CBS News",
   "description": "Gateway Church pastor Robert Morris resigned after sexual abuse allegations. Now, questions have surfaced about why there's no chance of civil liability. It's something that has one local victims' rights attorney taking action. She won't stop until there's re…",
   "url": "https://www.cbsnews.com/texas/news/north-texas-victims-rights-attorney-fighting-to-change-statute-of-limitations-for-exploited-women/",
   "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/06/21/aa516b53-d47f-41ba-8fa5-00f6fcf6a223/thumbnail/1200x630/d2be6cf605773cd2a10a9606b4041b69/c792fe8b8bc299be32997b52751a3ead.jpg?v=cb1f2643a8816828741cfb3a3fb2d931",
   "publishedAt": "2024-06-21T03:13:00Z",
   "content": "NORTH TEXAS — Gateway Church pastor Robert Morris resigned after sexual abuse allegations. Now, questions have surfaced about why there's no chance of civil liability. It's something that has one loc… [+2121 chars]"
   },
  {
   "source": {
   "id": "cbs-news",
   "name": "CBS News"
   },
   "author": null,
   "title": "Steve Bannon's bid to delay 4-month prison sentence rejected by appeals court - CBS News",
   "description": "Bannon, a White House chief strategist in the Trump administration, is expected to ask the Supreme Court to stave off his prison sentence.",
   "url": "https://www.cbsnews.com/news/appeals-court-rejects-steve-bannon-bid-to-delay-4-month-prison-sentence/",
   "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/06/21/d118799f-afb2-40e6-a562-4f37ca5c88a5/thumbnail/1200x630/2f1fb3e6d9724bf89192c183a585d298/gettyimages-2157088611.jpg?v=cb1f2643a8816828741cfb3a3fb2d931",
   "publishedAt": "2024-06-21T02:41:00Z",
   "content": "A federal appeals court panel on Thursday rejected longtime Donald Trump ally Steve Bannon's bid to stay out of prison while he fights his conviction for defying a subpoena from the House committee t… [+3770 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "Financial Times"
   },
   "author": "Alex Rogers",
   "title": "US banking heir gave Trump campaign fund $50mn after ex-president's conviction - Financial Times",
   "description": "Tim Mellon has donated combined $100mn to committees for Republican candidate and Robert Kennedy Jr",
   "url": "https://www.ft.com/content/a085a5b0-e49d-4cb9-8e2e-80859fdae14d",
   "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F006e019a-e7db-4743-b866-214332a08216.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
   "publishedAt": "2024-06-21T02:26:15Z",
   "content": "Tim Mellon, a reclusive scion of the billionaire American banking dynasty, gave $50mn to a fundraising group supporting Donald Trump a day after the former US president was convicted of falsifying bu… [+1875 chars]"
   },
  {
   "source": {
   "id": "associated-press",
   "name": "Associated Press"
   },
   "author": "JAKE COYLE",
   "title": "Donald Sutherland, 'Hunger Games' and 'M.A.S.H.' actor, dies - The Associated Press",
   "description": "Donald Sutherland has died at 88. Sutherland's agents say he died in Miami on Thursday after a long illness. The Canadian actor's career stretched from “M.A.S.H” to “JFK” to “The Hunger Games.\" He was known for offbeat characters and epitomized the unpredicta…",
   "url": "https://apnews.com/article/donald-sutherland-dies-68b0713a89774964b88ce0a1cc55cc18",
   "urlToImage": "https://dims.apnews.com/dims4/default/745d14e/2147483647/strip/true/crop/4480x2520+0+235/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F05%2F9919881c0ec2f589c0e5e48d5967%2F3b8cde7a3b79405db71b38cb0ed0892a",
   "publishedAt": "2024-06-21T01:35:00Z",
   "content": "NEW YORK (AP) Donald Sutherland, the Canadian actor whose wry, arrestingly off-kilter screen presence spanned more than half a century of films from M.A.S.H. to The Hunger Games, has died. He was 88.… [+7139 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "CBS Sports"
   },
   "author": "",
   "title": "Hall of Famer Reggie Jackson shares the emotions of returning to Rickwood Field - CBS Sports",
   "description": "Jackson's story was emotional and moving",
   "url": "https://www.cbssports.com/mlb/news/hall-of-famer-reggie-jackson-shares-the-emotions-of-returning-to-rickwood-field/",
   "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/06/21/50c6027c-11b7-4268-930e-8dcfcf6b99f8/thumbnail/1200x675/d43f8e1fa53b1cc64bcb12885e0cc900/untitled-design-2024-06-20t180306-332.png",
   "publishedAt": "2024-06-21T01:11:49Z",
   "content": "Major League Baseball made history on Thursday night, with the San Francisco Giants and St. Louis Cardinals playing the league's first game at Rickwood Field. For those who may be unaware of the park… [+2124 chars]"
   },
  {
   "source": {
   "id": "associated-press",
   "name": "Associated Press"
   },
   "author": "KEVIN McGILL, SARA CLINE",
   "title": "Louisiana's Ten Commandments law churns old political conflicts - The Associated Press",
   "description": "A bill signed into law this week makes Louisiana the only state to require that the Ten Commandments be displayed in every classroom in public schools and colleges. It also churns long-running conflicts over the role of religion in government institutions. In…",
   "url": "https://apnews.com/article/ten-commandments-louisiana-schools-religion-99b86fff51932374993c45ab3f0555c9",
   "urlToImage": "https://dims.apnews.com/dims4/default/da479c9/2147483647/strip/true/crop/5535x3113+0+288/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3d%2Ff6%2F0c5e04022a94629c791420cc76b9%2Fd82aca9f268a4be0ba222a55f6e0e67f",
   "publishedAt": "2024-06-21T01:07:00Z",
   "content": "NEW ORLEANS (AP) A bill signed into law this week makes Louisiana the only state to require that the Ten Commandments be displayed in every classroom in public schools and colleges and stirs the long… [+7137 chars]"
   },
  {
   "source": {
   "id": "cnn",
   "name": "CNN"
   },
   "author": "Madeline Holcombe",
   "title": "Researchers have found a ‘clear genetic trigger for obesity’ that applies to some people - CNN",
   "description": "Experts have long known there is a genetic component to obesity, and a new study identified one particular gene that may be behind it.",
   "url": "https://www.cnn.com/2024/06/20/health/obesity-genetic-wellness/index.html",
   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1997149240.jpg?c=16x9&q=w_800,c_fill",
   "publishedAt": "2024-06-21T00:57:00Z",
   "content": "Obesity isnt just a matter of food and exercise it may be in your genetic code, according to new research.\r\nObesitys causes are very complex and in the majority of cases, the combination of many fact… [+3787 chars]"
   },
  {
   "source": {
   "id": "fox-news",
   "name": "Fox News"
   },
   "author": "Louis Casiano",
   "title": "Manhattan DA drops charges against Columbia University students arrested at anti-Israel protests - Fox News",
   "description": "Manhattan prosecutors dropped the cases against 30 anti-Israel protesters who took over a Columbia University building in April.",
   "url": "https://www.foxnews.com/us/manhattan-da-drops-charges-columbia-university-students-arrested-anti-israel-protests",
   "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/GettyImages-2150288179.jpg",
   "publishedAt": "2024-06-21T00:45:00Z",
   "content": "Join Fox News for access to this content\r\nYou have reached your maximum number of articles. Log in or create an account FREE of charge to continue reading.\r\nBy entering your email and pushing continu… [+2992 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "YouTube"
   },
   "author": null,
   "title": "Cyberattack shuts down car dealerships - CNBC Television",
   "description": "Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday...",
   "url": "https://www.youtube.com/watch?v=zqWmHpKWvzM",
   "urlToImage": "https://i.ytimg.com/vi/zqWmHpKWvzM/maxresdefault.jpg",
   "publishedAt": "2024-06-21T00:24:24Z",
   "content": null
   },
  {
   "source": {
   "id": null,
   "name": "Entertainment Tonight"
   },
   "author": "Zach Seemayer",
   "title": "Ben Affleck Opens Up About Living With Jennifer Lopez's Intense Fame, Addresses Having 'Resting B**ch Face' - Entertainment Tonight",
   "description": "Ben Affleck sat down with Kevin Hart in a new episode of the comedian's Peacock chat show, 'Hart to Heart.'",
   "url": "https://www.etonline.com/ben-affleck-opens-up-about-living-with-jennifer-lopezs-intense-fame-addresses-having-resting-bch",
   "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2024-06/Ben_Affleck_GettyImages-1474484431_1280.jpg?h=44b879e5",
   "publishedAt": "2024-06-21T00:08:00Z",
   "content": "Ben Affleck is getting candid about wife Jennifer Lopez's intense level of fame and adoration -- as well as the public perception that he has \"resting b**ch face.\"\r\nThe sprawling chat comes as part o… [+5184 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "New York Post"
   },
   "author": "Alex Oliveira",
   "title": "Justin Timberlake's stiff drink at Hamptons hotel bar before DWI bust revealed: 'It's all alcohol' - New York Post ",
   "description": "Here’s what Justin Timberlake downed before his arrest for allegedly drunk driving in the Hamptons earlier this week, according to reports.",
   "url": "https://nypost.com/2024/06/20/us-news/justin-timberlakes-stiff-drink-at-hamptons-hotel-bar-before-dwi-bust-revealed-its-all-alcohol/",
   "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/timberlake-comp1.jpg?quality=75&strip=all&w=1024",
   "publishedAt": "2024-06-20T22:48:00Z",
   "content": "Justin Timberlake downed a stiff $21 cocktail made famous by fictitious British spy James Bond before his arrest for allegedly drunk driving in the Hamptons earlier this week, according to reports.  … [+2738 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "BBC News"
   },
   "author": null,
   "title": "When is the first US presidential debate between Biden and Trump? - BBC.com",
   "description": "The Democratic president and his Republican predecessor will meet  on a debate stage for the first time in four years.",
   "url": "https://www.bbc.com/news/articles/cekke335z9ko",
   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4fec/live/be3380f0-2f45-11ef-b3ff-f9790f555325.jpg",
   "publishedAt": "2024-06-20T22:25:09Z",
   "content": "By Sam Cabral, BBC News, Washington\r\nNeither man has stepped on a debate stage since their last showdown in 2020\r\nThe US election season is heating up - and the first debate between President Joe Bid… [+6355 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "WESH Orlando"
   },
   "author": "Averi Kremposky",
   "title": "SpaceX launch: SES ASTRA 1P mission takes off from Florida - WESH 2 Orlando",
   "description": "SpaceX successfully launched the SES ASTRA 1P mission from Cape Canaveral on Thursday.",
   "url": "https://www.wesh.com/article/spacex-launch-ses-astra-1p-mission-cape-canaveral/61154614",
   "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/screenshot-2024-06-20-174417-6674a307d1356.png?crop=1.00xw:0.848xh;0,0.0858xh&resize=1200:*",
   "publishedAt": "2024-06-20T22:10:00Z",
   "content": "CAPE CANAVERAL SPACE FORCE STATION, Fla. —SpaceX launched a wide-beam satellite aboard a Falcon 9 rocket on Thursday.\r\nThe launch was originally scheduled for Tuesday at 8:23 p.m., but SpaceX was for… [+615 chars]"
   },
  {
   "source": {
   "id": "the-verge",
   "name": "The Verge"
   },
   "author": "Jay Peters",
   "title": "Samsung Galaxy Buds 3 leak shows off AirPods-like design - The Verge",
   "description": "Samsung’s Galaxy Buds 3 have been rumored to resemble AirPods, and new leaked renders make the comparison clearer than ever.",
   "url": "https://www.theverge.com/2024/6/20/24182744/samsung-galaxy-buds-3-leak-airpods-design",
   "urlToImage": "https://cdn.vox-cdn.com/thumbor/AymEIvmqvmnzOcLgv5zHACnXneA=/0x0:1014x473/1200x628/filters:focal(507x237:508x238)/cdn.vox-cdn.com/uploads/chorus_asset/file/25499762/GQhIwFabgAAd5qC.jpeg",
   "publishedAt": "2024-06-20T21:58:41Z",
   "content": "Samsung Galaxy Buds 3 leak shows off AirPods-like design\r\nSamsung Galaxy Buds 3 leak shows off AirPods-like design\r\n / Goodbye, blobs.\r\nByJay Peters, a news editor who writes about technology, video … [+1164 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "WMUR Manchester"
   },
   "author": "KC Downey",
   "title": "Guide for 2024 Celtics parade - WMUR Manchester",
   "description": "Boston city officials are encouraging fans to take public transportation when attending Friday's championship parade for the Celtics, which will begin at 11 a.m. Here's more on what you need to know.",
   "url": "https://www.wmur.com/article/celtics-parade-2024-boston-information/61191130",
   "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/parade-route-for-celtics-0124-66744e2a713fa.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
   "publishedAt": "2024-06-20T21:52:00Z",
   "content": "MANCHESTER, N.H. —Boston city officials are encouraging fans to take public transportation when attending Friday's championship parade for the Celtics, which will begin at 11 a.m. Here's more on what… [+7100 chars]"
   },
  {
   "source": {
   "id": "cnn",
   "name": "CNN"
   },
   "author": "Hannah Rabinowitz",
   "title": "New York Times: 2 federal judges urged Aileen Cannon to step down from Trump case - CNN",
   "description": "Two federal judges in south Florida urged District Judge Aileen Cannon to forgo overseeing the criminal prosecution of former President Donald Trump when she was first assigned the classified documents case in 2023, according to a report from The New York Tim…",
   "url": "https://www.cnn.com/2024/06/20/politics/aileen-cannon-trump-new-york-times/index.html",
   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/image002-20240605201136290.jpg?c=16x9&q=w_800,c_fill",
   "publishedAt": "2024-06-20T20:29:00Z",
   "content": "Two federal judges in south Florida urged District Judge Aileen Cannon to forgo overseeing the criminal prosecution of former President Donald Trump when she was first assigned the classified documen… [+1752 chars]"
   }
   ]
   
   constructor(){
    super() ; 
    this.state={
      articles:this.articles ,
      loading:false
    }
   }

   async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=d901d929fdee4dcba0ebda2586a9a4c4"
    let data=await fetch(url) ; 
    let parsedData=await data.json() 
    this.setState({articles:parsedData.articles})
   }
  render() {
    return (
    
      <div className='container my-3'>
            <h3> Top Headlines </h3>
            {/* JavaScript, map() is a method of the Array object. It creates a new array by calling a 
            function on every element of the original array and storing the results in a new array
            . map() returns the new array, and the original array is unchanged */}
           
            
            <div className="row my-4">
              {this.state.articles.map((element)=>{
                //whem we iterate elements using map each elements has to be provided a unique key 
                //here we are returning div therefore it will be our element ans it has to be provided unique key
                //here each news is having its own unique url 
               return  <div className="col-md-4 my-3" key={element.url}>
                 <NewsItem  title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
                 

              })}
           
        
       
       
        </div>
        
      </div>
    )
  }
}

export default News
