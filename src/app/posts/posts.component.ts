import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	// instantiate posts to an empty array
  posts: any = [];
  constructor(private postsSeervice : PostsService) { }

  ngOnInit() {
  	this.postsSeervice.getAllPosts().subscribe(posts => {
  		this.posts = posts;
  	});
  }

}
