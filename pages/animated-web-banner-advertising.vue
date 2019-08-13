<template>
  <section class="row container">
    <div class="row hero bg7">
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
            title: 'Animated Web Banner Development & Design Congleton Cheshire',
            meta: [
                {name: 'description', content: 'Animated Web Banner Design and Development by freelance front end developer, Daniel Wakefield.'},
                {name: 'keywords', content: 'animated banner, html5 banner, designer, developer, congleton, cheshire'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:7,
                title: 'Animated', 
                sub_title: 'HTML5 Web Banners',
                excerpt: '<p>HTML5 animated web banners are a great way to attract outside attention and visitors to your website.</p><p>I build super lightweight animated web banners for deployment across your chosen marketing network or affiliate banner scheme.</p><p>Developed for maximum visibility and conversion I can bring you web banner marketing campaign to life with visually stunning animations, and user targeted messaging.</p>' 
            }
        }
    }
}
</script>

<style>
  .bg7{
    background: url('~assets/images/bg7.jpg') no-repeat 0 0;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>