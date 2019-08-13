<template>
  <section class="row container">
    <div class="row" style="height: 66px;"></div>
    <div class="row articles">
        <h2 class="flip_title" style="color: rgba(255,255,255,0.7);">Blog Articles</h2>
        <ul class="masonry">
            <li v-for="project in projects" v-bind:key="project.prid" class="masonry_tile" v-bind:class="project.colwidth" >
                <div class="masonry_tile_bg" style="background-repeat: no-repeat; background-size: cover;" v-bind:style="{ backgroundImage: 'url(' + project.thumb + ')' }"></div>
                <nuxt-link v-bind:to="'/blog' + project.slug" >
                    <div>
                        <div class="row">
                            <h4>{{project.title}}</h4>
                        </div>
                        <div class="row">
                            <div class="hr"></div>
                        </div>
                        <div class="row" style="overflow: hidden;">
                            <p>{{project.type}}</p>
                        </div>
                    </div>
                </nuxt-link>
            </li>
        </ul>
    </div>

  </section>
</template>

<script>
export default {
    
    // mounted functions will run only on this component
    mounted: function() {

        //scroll top add class
        var articles = document.querySelector(".articles");
        articles.classList.add('sticky');
        
        // add body class
        var hdrClass = document.querySelector(".header");
        hdrClass.classList.add('is-active');

    },
    head(){
        return{
            title: 'Dubcode | Blog',
            meta: [
                {name: 'description', content: 'This is the About description meta tag'},
                {name: 'keywords', content: 'This is the About keywords meta tag'}
            ]
        }
    },
    data() {
        return {
            projects: [
                { prid:'1', slug: '/getting-started-with-nuxt/', type: 'Javascript Framework Review', title: 'Get Started with Nuxt.js', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg1.jpg')},

                { prid:'2', slug: '/lazy-loading-images-with-javascript/', type: 'Javascript Tutorial', title: 'Lazy Load Images w/ Javascript', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg2.jpg')},

                { prid:'3', slug: '', type: 'Javascript Tutorial', title: 'Add Class on Scroll', colwidth: 'span-3', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg3.jpg')},

                { prid:'4', slug: '', type: 'Javascript Tutorial', title: 'Sticky Header Class', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg4.jpg')},

                { prid:'5', slug: '', type: 'CSS Design Tutorial', title: 'Hero Landing Page', colwidth: 'span-3', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg5.jpg')},

                { prid:'6', slug: '', type: 'Javascript Plugin Review', title: 'Vanilla Js Slider', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg6.jpg')},

                { prid:'7', slug: '', type: 'Package Manager Review', title: 'Intro to NPM', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg7.jpg')},

                { prid:'8', slug: '', type: 'Javascript Framework Review', title: 'Intro to Git', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg8.jpg')},

                { prid:'9', slug: '', type: 'Javascript Framework Review', title: 'Intro to Vue.js', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg9.jpg')},

                { prid:'10', slug: '', type: 'Javascript + CSS Tutorial', title: 'Simple Burger Menu', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg10.jpg')},

            ]
        }
    }
}
</script>

<style>

</style>