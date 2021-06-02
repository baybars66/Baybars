
import React, { Component } from 'react'

 

 class NavBar extends Component {

    

    render() {
        
        return (
          <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="text-muted" href="http://budeget.baybarsonal.com">Subscribe</a>
          </div>
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="http://budeget.baybarsonal.com">Large</a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="http://budeget.baybarsonal.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </a>
            <a class="btn btn-sm btn-outline-secondary" href="http://budeget.baybarsonal.com">Sign up</a>
          </div>
        </div>
      </header>
           
      <div class="nav-scroller py-1 mb-2">

 
<nav class="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-between">
 
  <a class="navbar-brand" href="http://budeget.baybarsonal.com">
    <img src="logo192.png" alt="logo" ></img>
  </a>
  
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="p-2 text-muted" href="http://budeget.baybarsonal.com">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="p-2 text-muted" href="http://budeget.baybarsonal.com">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="p-2 text-muted" href="http://budeget.baybarsonal.com">Link 3</a>
    </li>
    
  </ul>

  
</nav>

</div>
<div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
          <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>
</div>



        
        )
    }
}

export default NavBar;





 
// <div className="checkbox">
// <label>
// <input type="checkbox" checked data-toggle="toggle" onChange= {this.degis} data-on="Estimate" data-off="Real" data-onstyle="danger" data-offstyle="success">
// </input>
// </label>
// </div>