import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to= {`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to= {`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post Title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat numquam cum ipsum repudiandae reprehenderit aperiam nihil corrupti, reiciendis voluptatum officiis voluptates vitae facere sunt enim explicabo doloremque eligendi cupiditate laboriosam error mollitia suscipit eaque esse. Ipsum dicta cumque consequatur nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae nulla necessitatibus. Recusandae aliquam rem vero vel dignissimos placeat a, est enim, maxime, labore perspiciatis tenetur. Maiores repellat quisquam quaerat consequatur? Sapiente ipsum eligendi obcaecati qui officiis repellendus consectetur, at molestiae? Nobis iste repellat debitis, culpa earum maxime eum, enim quasi blanditiis praesentium ipsa quod?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iusto ut minima quaerat id nemo, similique doloremque illum consequatur atque unde doloribus eos, enim sit voluptatum excepturi placeat consectetur impedit earum explicabo suscipit. Consequatur exercitationem architecto molestias, iste, reiciendis ipsam culpa, sint minima voluptatem deleniti voluptatibus inventore distinctio. Dicta quam reprehenderit accusantium ipsum rem doloribus commodi expedita, sit possimus molestias cupiditate eligendi, quisquam consectetur? Consequuntur mollitia perspiciatis, quod quas maxime temporibus obcaecati voluptate! Voluptatum fuga saepe qui? Quasi nobis adipisci odit est nisi facere eius vel iure iste temporibus, nemo doloribus laborum? Ad harum, expedita, modi culpa tempora, dolorem asperiores deserunt ipsa facere dicta libero numquam perferendis corrupti nihil! Officiis, neque?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque maxime fugit cumque quos aliquam ipsum quam esse obcaecati eum sed!
        </p>
      </div>
    </section>
  )
}

export default PostDetail
