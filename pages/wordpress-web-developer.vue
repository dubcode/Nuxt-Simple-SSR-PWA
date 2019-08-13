<template>
  <section class="row container">
    <div class="row hero bg5">
      <div>
        <h1 class="title">
        <div class="row">
            <span>{{content.title}}</span>
        </div>
        <div class="row">
            <span>{{content.sub_title}}</span>
        </div>
        </h1>
      </div>
      <div class="excerpt" v-html="content.excerpt"></div>
    </div>
    <div class="ctr"></div>
  </section>
</template>

<script>
export default {
    head(){
        return{
            title: 'Wordpress Designer & Developer Congleton Cheshire',
            meta: [
                {name: 'description', content: 'Website Design and Development by freelance front end developer, Daniel Wakefield.'},
                {name: 'keywords', content: 'website designer, website developer, congleton, cheshire, wordpress, web, app, javascript'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:5,
                title: 'Wordpress', 
                sub_title: 'Designer & Developer',
                excerpt: '<p>WordPress development is the most common of all my tasks as a web developer. as WordPress websites are by far the most common platform on the web today.</p><p>This mainly due to extendibility and ease of editing for non coders, allowing the user to access a simple back end admin area for uploading content and images and allowing for easy expansion and growth of the website without the need of a developer.</p><p>WordPress developed websites are also more cost effective for the client on a budget as WordPress themes can be developed much quicker than the counter part js based websites, and if the budget is really you could even opt for a pre built theme.</p><p>This approach is obviously not as effective as a progressive web app but is a lot more cost efficient if your looking to get a basic web presence.</p>' 
            }
        }
    }
}
</script>

<style>
  .bg5{
    background: url('~assets/images/bg5.jpg') no-repeat 0 0;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>