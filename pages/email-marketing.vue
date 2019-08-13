<template>
  <section class="row container">
    <div class="row hero bg6">
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
            title: 'Email Marketing & Email Design Congleton Cheshire',
            meta: [
                {name: 'description', content: 'Email Design and Development by freelance front end developer, Daniel Wakefield.'},
                {name: 'keywords', content: 'Email designer, developer, congleton, cheshire'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:6,
                title: 'HTML Email', 
                sub_title: 'Designer & Developer',
                excerpt: '<p>Email marketing always has and most likely always will be a staple and integral part of any marketing campaign.</p><p>I have been designing and developing Email marketing campaigns since 2004 and to be honest this is one area of development where not a lot has changed over the past decade so there are pretty hard and fast rules in place for developing HTML Emails.</p><p>One thing to keep in mind when creating marketing campaigns is the layout and design as there specific parameters that have to be met in order to be able to develop the HTML Email in such a why that it is compliant with the majority of common mail clients.</p><p>This why it always best to opt for a developer to either design or to give direction to the designer of your HTML Email.</p>' 
            }
        }
    }
}
</script>

<style>
  .bg6{
    background: url('~assets/images/bg6.jpg') no-repeat 0 0;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>