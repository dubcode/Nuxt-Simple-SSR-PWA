<template>
  <section class="row container">
    <div class="row hero bg2">
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
            title: 'Freelance Web Designer Congleton Cheshire',
            meta: [
                {name: 'description', content: 'Website Design and Development by freelance front end developer, Daniel Wakefield.'},
                {name: 'keywords', content: 'website designer, website developer, congleton, cheshire, wordpress, web, app, javascript'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:2,
                title: 'Freelance', 
                sub_title: 'Website Designer',
                excerpt: '<p>I design beautiful websites using the most modern design techniques and tools, creating one of a kind unique, inspiring and engaging website user interfaces that will bring your brand to life.</p><p>I create my designs by working closely with my clients throughout the whole process to ensure that my concepts blend with the clients vision.</p><p>Taking a three part approach, and depending on the clients existing branding, I usually start by creating several basic mock ups to give the client a brief taster of concepts that I think might work, and suggested design features.</p><p>Once the basic concept is agreed I then move onto templating several different layouts for the various areas of the website. Again these are sent to the client for review, amends and finally approval.</p><p>The final stage is to supply the client with a full mock up of the site including all the key areas and finer design points.</p>' 
            }
        }
    }
}
</script>

<style>
  .bg2{
    background: url('~assets/images/bg2.jpg') no-repeat 0 0;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>