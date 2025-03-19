import React, { Component } from 'react'

export class NewsItems extends Component {
constructor(){
  super();
  console.log('this is a constructor');
}

  render() {
   let {title , description,imgurl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
  <div className="card" style={{width: "18rem"}}>
  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}
   
    </h5>
    <p className="card-text">{description}....</p>
    <h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
    <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toISOString}</small></p>
    <a href={newsUrl} className="btn btn-sm btn-dark" >Read More</a>
  </div>
</div>  
      </div>
    )
  }
}
export default NewsItems