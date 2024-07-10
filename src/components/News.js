import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
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
        // Other articles omitted for brevity
      ],
      loading: false
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d901d929fdee4dcba0ebda2586a9a4c4";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className='container my-3'>
        <h3>Top Headlines</h3>
        <div className="row my-4">
          {this.state.articles.map((element, index) => {
            // Handle the case where source might be null
            const sourceName = element.source ? element.source.name : "Unknown";
            return (
              <div className="col-md-4" key={index}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} source={sourceName} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
