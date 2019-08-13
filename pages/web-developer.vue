<template>
  <section class="row container">
    <div class="row hero bg3">
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
            title: 'Freelance Web Developer Congleton Cheshire',
            meta: [
                {name: 'description', content: 'Website Design and Development by freelance front end developer, Daniel Wakefield.'},
                {name: 'keywords', content: 'website designer, website developer, congleton, cheshire, wordpress, web, app, javascript'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:3,
                title: 'Freelance', 
                sub_title: 'Website Developer',
                excerpt: '<p>I literally love playing around with code that is why I have been working as a full time senior dev since 2004, back when tables and frame sets were a thing, I was even a flash developer for quite a few years until the iPhone came along and destroyed that career path, albeit for the better.</p><p>Nowadays I am a big fan of both PHP and Javascript, and more recently progressive web applications which as a long time developer I can say this without a doubt the future of the web and what we as developers have been waiting for since the dawn of web standards, which is why now is one of the most exciting times to be a web developer.</p><p>All of my website development projects are built with three things at the top my list of priorities, speed, searchability and user friendliness.</p><p>All my javascript based websites are developed to by fully progressive web applications, where as the more common WordPress websites are less progressive and not app enabled but do enable the smaller business a great starting platform for the web.</p>' 
            }
        }
    }
}
</script>

<style>
  .bg3{
    background: url('~assets/images/bg3.jpg') no-repeat 0 0;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>