<template>
  <section class="row container">
    <div class="row hero bg8">
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
            title: 'Web Hosting & Deployment Congleton Cheshire',
            meta: [
                {name: 'description', content: 'Web Hosting & Deployment by freelance front end developer, Daniel Wakefield.'},
                {name: 'keywords', content: 'website hosting, web hosting, deployment, web designer, web developer, congleton, cheshire'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:8,
                title: 'Web Hosting, Management', 
                sub_title: '& Deployment',
                excerpt: '<p>I offer a fully managed linux hosting service for websites and email.</p><p>This services include the following</p><ul><li>Full back up taken on a weekly or daily basis depending on your editing frequency or preference.</li><li>Secure Server Certificates installed and managed as a standard.</li><li>Regular maintenance for all plugins, modules and versions.</li><li>Regular malware and security scans and updates.</li><li>Full recover and restore service for the extremely rare case that the bad guys ever manage to break in.</li></ul>' 
            }
        }
    }
}
</script>

<style>
  .bg8{
    background: url('~assets/images/bg8.jpg') no-repeat 0 0;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>