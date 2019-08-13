<template>
  <section class="row container">
    <div class="row hero bg4">
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
            title: 'Progressive Web App Developer Congleton Cheshire',
            meta: [
                {name: 'description', content: 'Website Design and Development by freelance front end developer, Daniel Wakefield.'},
                {name: 'keywords', content: 'website designer, website developer, congleton, cheshire, wordpress, web, app, javascript'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:4,
                title: 'Progressive Web', 
                sub_title: 'Application Developer',
                excerpt: '<p>Progressive web app&#39;s are the future of the web and the only way forward for a professional high end web presence for your company or brand.</p><p>I develop progressive web app&#39;s using Nuxt.js which is a framework for the more popular Vue.js</p><p>Nuxt.js enables service workers, server side rendering and live reloading data so if yor application requires constant updates your user will see the updates live without refreshing the page, or if your users internet goes down your application will still be available offline</p><p>The over result is a fast, user friendly and searchable web application that can be used just like any other native app but with the added benefit of also being a super high end website with speeds and overall statistics that wipe the floor with the more common PHP based websites such as WordPress.</p>' 
            }
        }
    }
}
</script>

<style>
  .bg4{
    background: url('~assets/images/bg4.jpg') no-repeat 0 0;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>