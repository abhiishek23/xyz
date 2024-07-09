import React, { Component } from 'react'

export class NewsItem extends Component {

  //just a demonstration of construtor 
  // constructor(){
  //   super() ; 
  //   console.log("Hello i Am a constructor of newsItem")
  // }



  render() {
    //using props 
    let {title,description,imageUrl,newsUrl}=this.props 
    return (
      <div>
      <div className="card" style={{width: '18rem'}}>
  <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/05/20/1600x900/Entertainment_News_1716196587643_1716196587841.jpeg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
