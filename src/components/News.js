import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    let url = "https://newsdata.io/api/1/latest?apikey=pub_482746b6ca020fc484da6f277faba9799f793";
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      // Log the entire response to see its structure
      console.log(parsedData);

      // Check if articles exist and update state accordingly
      if (parsedData.results) { // Update this line according to the actual response structure
        this.setState({ articles: parsedData.results });
      } else {
        throw new Error('No articles found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ error: error.message });
    }
  }

  render() {
    const { articles, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className='container my-3'>
        <h3>Top Headlines</h3>
        <div className="row my-4">
          {articles.length > 0 ? (
            articles.map((element, index) => {
              const sourceName = element.source ? element.source.name : "Unknown";
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.image_url}
                    newsUrl={element.link}
                    source={sourceName}
                  />
                </div>
              );
            })
          ) : (
            <p>No articles found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default News;
