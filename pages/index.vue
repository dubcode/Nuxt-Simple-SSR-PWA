<template>
  <section class="row container">

    <div class="row hero-grad">
        <div class="row hero bg1">
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
    </div>

    <div class="row services">
        <h2 class="flip_title">Our Services</h2>
        <ul class="grid-container">
            <li class="grid-item" v-for="service in services" v-bind:key="service.sid">
                <div class="grid-thumb" style="background-size: 50% auto;background-attachment: fixed;" v-bind:style="{ 'background-image': 'url(' + service.thumb + ')' }">
                    <span class="grid-credit">image credit: {{service.credit}}</span>
                </div>
                <div class="grid-excerpt">
                    <div class="row">
                        <h3><span class="grid-icon" v-html="service.icon"></span> <span class="grid-title">{{ service.title }}</span></h3>
                    </div>
                    <div class="row">
                        <div class="excerpt" v-html="service.excerpt"></div>
                    </div>
                    <div class="row">
                        <div class="grid-button">
                            <nuxt-link v-bind:to="service.slug" ><span class="row back"></span><span class="row front">Read More</span></nuxt-link>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

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
        var services = document.querySelector(".services");
        var articles = document.querySelector(".articles");
        var halfway = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) /2;
        var elementExists = document.getElementsByClassName("services");

        function getDistanceA() {
            var topDistA = services.offsetTop;
            return topDistA;
        }

        function getDistanceB() {
            var topDistB = articles.offsetTop;
            return topDistB;
        }

        window.onscroll = function(e) {
        var distanceA = getDistanceA() - window.pageYOffset - halfway;
        var distanceB = getDistanceB() - window.pageYOffset - halfway;
        var offset = window.pageYOffset;

        if (elementExists && (distanceA <= 0) && (distanceB >= 0) ) {
            services.classList.add('sticky');
            articles.classList.remove('sticky');
        } 
        else if  (elementExists && (distanceB <= 500)) {
            services.classList.remove('sticky');
            articles.classList.add('sticky');
        }
        else {
            services.classList.remove('sticky');
            articles.classList.remove('sticky');
        }

        }
        
    },
    head(){
        return{
            title: 'Web Designer & Developer Cheshire',
            meta: [
                {name: 'description', content: 'Hi, my name is Dan I am a freelance Web & App Designer & Developer based in Congleton, Cheshire.'},
                {name: 'keywords', content: 'web designer, cheshire, web developer, congleton, freelance, web, website, developer, designer, wordpress, javascript, progressive web app, vue, nuxt'}
            ]
        }
    },
    data() {
        return {
            content: {
                pid:1,
                title: 'Freelance Web App', 
                sub_title: 'Designer & Developer', 
                excerpt: '<p>Hi there, may name is Dan, I am a freelance <strong>website designer</strong> and developer based in <strong>Congleton, Cheshire</strong></p><p>If you are looking for someone to help with your website or progressive web app (PWA) then I am your man. I have over a decade of experience working as a senior front end <strong>web developer</strong> building everything from good old flash websites through to the modern standard <strong>progressive web apps</strong></p>'
            },
            services: [
                { sid:'1', credit: 'Unsplash', title: 'Website Design', slug: '/web-designer/', excerpt: '<p>I design websites and apps using Adobe Illustrator and PhotoShop to create designs that are responsive for all devices and engage with your visitors.</p>', thumb: require('~/assets/images/t1.jpg'), icon:'<svg aria-hidden="true" alt="creative-design" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path></svg>'},

                { sid:'2', credit: 'Unsplash', title: 'Web Development', slug: '/web-developer/', excerpt: '<p>Using modern web technologies, I develop websites that are fast and search engine friendly, with speed and usability being at the top of my priorities and I primarily use HTML, CSS, PHP & Javascript to develop my websites.</p>', thumb: require('~/assets/images/t3.jpg'), icon:'<svg aria-hidden="true" alt="web-development" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>'},

                { sid:'3', credit: 'Unsplash', title: 'App Development', slug: '/progressive-web-app-developer/', excerpt: '<p>If you are looking for the best possible results from your project a progressive web app is the way to go. Progressive web apps are fast, and work on all devices and all browsers and even have offline support. A PWA can be viewed as an app or a website give the most flexible and reliable user experience.</p>', thumb: require('~/assets/images/t4.jpg'), icon:'<svg aria-hidden="true" alt="app-development" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>'},

                 { sid:'4', credit: 'Unsplash', title: 'WordPress Development', slug: '/wordpress-web-developer/', excerpt: '<p>Most of my development time is spent developing custom WordPress websites and themes, WordPress is without a doubt the most common web framework and is a great way for small to medium sized business to have a web presence without breaking the bank.</p>', thumb: require('~/assets/images/t4.jpg'), icon:'<svg aria-hidden="true" alt="app-development" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>'},

                { sid:'5', credit: 'Unsplash', title: 'eMail Marketing', slug: '/email-marketing/', excerpt: '<p>Still one of the best ways to engage with customer is through Email marketing. I design and develop HTML emails for maximum  deliverability and compliance for all modern mail clients.</p>', thumb: require('~/assets/images/t5.jpg'), icon:'<svg aria-hidden="true" alt="email-marketing" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M550.671 450.303c0 11.62-15.673 19.457-32.158 14.863-12.16-3.243-31.346-17.565-36.211-27.294-5.674-11.62 4.054-32.698 18.916-30.806 15.674 1.621 49.453 25.401 49.453 43.237zM372.86 75.223c-3.783-72.151-100.796-79.718-125.928-23.51 44.588-24.321 90.257-15.673 125.928 23.51zM74.795 407.066c-15.673 1.621-49.452 25.401-49.452 43.237 0 11.62 15.673 19.457 32.157 14.863 12.16-3.243 31.076-17.565 35.94-27.294 5.946-11.62-3.782-32.698-18.645-30.806zm497.765 14.322c1.081 3.513 1.892 7.026 1.892 10.809.81 31.616-44.317 64.045-73.503 65.125-17.295.81-34.59-8.377-42.696-23.51-113.497 4.053-226.994 4.864-340.22 0-8.377 15.133-25.672 24.05-42.967 23.51-28.915-1.081-74.043-33.509-73.503-65.125.27-3.783.811-7.296 1.892-10.809-5.566-9.463-4.845-15.282 5.405-11.62 3.243-5.134 7.026-9.458 11.08-13.782-2.57-10.917 1.27-14.094 11.079-9.188 4.594-3.243 9.998-6.485 15.944-9.188 0-15.757 11.839-11.131 17.295-5.675 12.467-1.78 20.129.709 26.753 5.675v-19.726c-12.987 0-40.641-11.375-45.94-36.212-4.974-20.725 2.607-38.075 25.132-47.56.81-5.945 8.107-14.052 14.862-15.944 7.567-1.892 12.431 4.594 14.052 10.269 7.425 0 17.757 1.465 21.078 8.107 5.405-.541 11.079-1.352 16.484-1.892-2.432-1.892-5.134-3.513-8.107-4.594-5.134-8.917-13.782-11.079-24.591-11.62 0-.81 0-1.621.27-2.702-19.727-.541-44.048-5.675-54.857-17.835-21.321-23.638-15.935-83.577 12.16-103.498 8.377-5.675 21.618-.811 22.699 9.728 2.425 20.598.399 26.833 26.212 25.942 8.107-7.836 16.755-14.592 26.483-19.997-14.862-1.352-28.914 1.621-43.778 3.783 12.752-12.48 23.953-25.442 56.748-42.427 23.511-11.89 49.993-20.808 76.205-23.239-18.646-7.837-39.993-11.891-59.721-16.484 76.475-16.214 174.569-22.159 244.289 37.562 18.105 15.403 32.427 36.211 42.696 59.992 39.799 4.853 36.47-5.581 38.643-25.132 1.081-10.269 14.322-15.403 22.699-9.458 14.862 10.539 22.159 30.806 24.59 48.101 2.162 17.835.27 41.345-12.43 55.127-10.809 12.16-34.32 17.565-53.776 18.105v2.703c-11.08.27-20.268 2.432-25.673 11.62-2.972 1.081-5.674 2.703-8.377 4.594 5.675.54 11.35 1.351 16.755 1.891 1.869-5.619 12.535-8.377 21.077-8.377 1.621-5.405 6.756-11.89 14.052-10.269s14.052 9.998 14.863 15.944c10.809 4.324 22.159 12.16 25.131 25.672 1.892 8.107 1.621 15.133.27 21.888-5.726 25.262-33.361 36.212-45.939 36.212 0 6.756 0 13.241-.27 19.726 8.01-6.006 16.367-7.158 26.752-5.675 5.919-5.919 17.565-9.41 17.565 5.675 5.675 2.703 11.349 5.945 15.944 9.188 10.1-5.051 13.669-.539 10.809 9.188 4.053 4.323 8.107 8.917 11.079 13.782 10.136-3.62 11.021 2.078 5.409 11.62zm-73.773-254.016c17.295 6.756 26.212 22.159 30.265 35.67 1.081-10.539-2.702-39.453-13.782-51.073-7.296-7.296-14.052-5.134-14.052.81.001 6.216-1.35 11.62-2.431 14.593zm-18.646 12.43c12.971 15.673 17.024 41.615 12.7 62.963 10.809-2.162 20.537-6.215 26.212-12.16 1.892-2.162 3.783-4.864 4.864-7.566-1.081-21.348-10.269-42.697-29.725-48.912-3.242 3.243-9.187 4.864-14.051 5.675zm-21.889.811c7.567 20.537 12.431 42.696 14.322 64.585 3.513 0 7.567-.27 11.62-.811 5.945-24.321-.27-51.614-14.052-63.504-3.783 0-8.107 0-11.89-.27zM77.768 167.372c-1.081-2.973-2.432-8.377-2.432-14.593 0-5.945-7.026-8.107-14.052-.81-11.35 11.62-14.863 40.534-13.782 51.073 4.053-13.512 12.971-28.915 30.266-35.67zm5.675 75.394c-4.324-21.348-.27-47.291 12.701-62.963-4.865-.811-10.809-2.432-14.052-5.675-19.457 6.215-28.375 27.563-29.726 48.912 1.351 2.702 2.972 5.404 4.864 7.566 5.675 6.215 15.403 9.998 26.213 12.16zm41.345-61.073c-5.134 1.081-9.998 2.973-14.862 4.865l-12.16 5.134v-.27c-7.296 14.052-9.999 34.319-5.405 52.965 4.594.541 8.647.811 12.7.811 2.432-22.159 9.188-43.778 19.727-63.505zm88.095-23.239c0 42.155 34.319 76.205 76.205 76.205s76.205-34.05 76.205-76.205c0-41.886-34.319-75.935-76.205-75.935s-76.205 34.049-76.205 75.935zm152.41 97.283c9.969 50.608 3.299 64.692 16.484 58.099 15.944-8.107 22.699-39.183 22.97-57.019-12.971-.81-26.213-.81-39.454-1.08zm-71.611-.541v-.27c-.27 5.134.27 38.103 4.324 41.075 11.079 5.405 39.453 4.594 51.073 1.081 5.405-1.621 2.432-37.022 1.621-41.886-18.916-.27-38.102-.27-57.018 0zm-14.053 0v-.27c-19.456.27-38.642.27-57.829.811-1.892 9.187-4.594 48.911 1.892 51.614 12.971 5.675 41.616 5.134 54.586 1.621 4.595-2.432 2.433-45.399 1.351-53.776zm-85.662 57.56c5.405 2.432 8.647 2.432 9.728-4.324 1.892-8.647 2.432-36.752 4.865-52.155-12.16.27-24.591.811-36.752 1.621-5.405 19.727.27 45.129 22.159 54.858zm-65.666-11.08c43.778 47.02 92.689 85.663 155.923 106.47 67.558-19.186 115.659-59.991 163.219-107.011-11.095-4.315-7.715-10.363-7.296-11.62-8.918-.81-17.835-1.892-26.483-2.702-9.458 32.968-35.94 52.965-46.75 31.616-2.702-5.134-3.513-11.62-4.594-16.754-3.783 8.377-13.242 8.107-24.591 8.918-13.241 1.081-31.617 1.351-44.048-2.972-2.972 12.971-11.079 12.971-26.752 14.322-14.052 1.352-48.642 4.054-54.857-10.809-1.081 28.644-35.13 9.998-45.129-7.026-3.243-5.675-5.405-11.35-7.026-17.565-7.837.81-15.673 1.621-23.511 2.702 2.443 3.663 1.549 9.052-8.105 12.431zM115.6 453.545c-5.674-23.239-18.646-49.722-33.508-54.046-22.429-6.756-68.909 23.51-66.207 54.586 12.701 19.457 39.994 35.67 59.181 36.481 17.835.81 35.94-11.08 39.724-28.914.539-2.432.81-5.134.81-8.107zm7.296-5.944c33.509-19.457 69.179-35.671 105.931-47.02-38.643-20.537-68.098-47.831-97.283-77.016-2.162 1.352-5.134 2.432-7.836 3.513-1.637 4.91 8.718 5.33 5.405 12.431-2.162 4.054-8.648 7.567-15.133 9.188-2.161 2.702-5.134 4.864-7.836 6.485h-.27c-.27 13.511-.27 27.024.27 40.535 8.939 15.964 15.426 33.314 16.752 51.884zm320.764 12.7c-36.752-21.348-74.044-41.345-115.659-52.965-13.782 6.215-27.833 11.349-42.155 15.403-2.162.811-2.162.811-4.324 0-11.89-3.783-23.239-8.107-34.859-13.241-40.265 11.62-77.286 29.185-112.416 50.803h-.27v.27c.27 0 .27 0 .27-.27 103.227 4.054 206.455 3.513 309.413 0zm27.023-64.045l-.27.27c.541-13.782.811-27.563.811-41.345-2.973-1.621-5.675-4.054-8.107-6.756-6.485-1.351-12.971-5.134-15.133-8.918-1.892-4.053 1.351-7.566 5.945-10.269-.27-.541-.541-1.621-.541-2.432-2.972-.811-5.405-1.892-7.567-3.243-31.616 29.455-65.396 56.749-103.498 76.746 38.914 11.62 75.935 28.104 111.875 47.561 1.05-14.692 7.231-35.749 16.485-51.614zm23.24 3.244c-14.593 4.323-27.834 30.806-33.509 54.046 0 23.826 21.278 37.897 40.534 37.022 19.186-.811 46.48-17.024 59.181-36.481 2.973-31.077-43.507-61.344-66.206-54.587zM290.709 134.133c.045 0 .089.003.134.003.046 0 .09-.003.136-.003h-.27zm0 96.743c28.645 0 51.884-21.618 51.884-48.371 0-36.092-40.507-58.079-72.151-44.318 9.458 2.972 16.484 11.62 16.484 21.618 0 23.257-33.291 31.955-46.48 11.35-7.297 34.067 19.368 59.721 50.263 59.721zM68.039 474.083c.54 6.486 12.16 12.701 21.618 9.458 6.756-2.703 14.593-10.539 17.295-16.214 2.973-7.026-1.081-19.997-9.728-18.375-8.917 1.621-29.725 16.754-29.185 25.131zm410.75-25.131c-8.377-1.621-12.431 11.349-9.458 18.375 2.432 5.675 10.269 13.511 17.295 16.214 9.187 3.243 21.078-2.972 21.348-9.458.811-8.377-20.267-23.51-29.185-25.131z"></path></svg>'},

                { sid:'6', credit: 'Unsplash', title: 'Animated Web Banners ', slug: '/animated-web-banner-advertising/', excerpt: '<p>Animated HTML5 web banners are a brilliant way to market your website, through banner advertising networks you can massively increase visitors and engagement with your website or web app.</p>', thumb: require('~/assets/images/t4.jpg'), icon:'<svg aria-hidden="true" alt="app-development" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>'},


                { sid:'7', credit: 'Unsplash', title: 'Hosting', slug: '/web-hosting/', excerpt: '<p>It is no good having an awesome website that has been designed and developed to a high standard if your hosting is not up to scratch, I offer a fully managed web and email hosting service, including a full back up and recovery service and regular maintenance and security updates.</p>', thumb: require('~/assets/images/t2.jpg'), icon:'<svg aria-hidden="true" alt="web-hosting" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 352c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm416 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-119 11.1c4.6-14.5 1.6-30.8-9.8-42.3-11.5-11.5-27.8-14.4-42.3-9.9-7-13.5-20.7-23-36.9-23s-29.9 9.5-36.9 23c-14.5-4.6-30.8-1.6-42.3 9.9-11.5 11.5-14.4 27.8-9.9 42.3-13.5 7-23 20.7-23 36.9s9.5 29.9 23 36.9c-4.6 14.5-1.6 30.8 9.9 42.3 8.2 8.2 18.9 12.3 29.7 12.3 4.3 0 8.5-1.1 12.6-2.5 7 13.5 20.7 23 36.9 23s29.9-9.5 36.9-23c4.1 1.3 8.3 2.5 12.6 2.5 10.8 0 21.5-4.1 29.7-12.3 11.5-11.5 14.4-27.8 9.8-42.3 13.5-7 23-20.7 23-36.9s-9.5-29.9-23-36.9zM512 224c0-53-43-96-96-96-.6 0-1.1.2-1.6.2 1.1-5.2 1.6-10.6 1.6-16.2 0-44.2-35.8-80-80-80-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0 114.1 0 64 50.1 64 112c0 7.3.8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h43.4c3.6-8 8.4-15.4 14.8-21.8 13.5-13.5 31.5-21.1 50.8-21.3 13.5-13.2 31.7-20.9 51-20.9s37.5 7.7 51 20.9c19.3.2 37.3 7.8 50.8 21.3 6.4 6.4 11.3 13.8 14.8 21.8H416c53 0 96-43 96-96z"></path></svg>'},
            ],
            projects: [
                { prid:'1', slug: '/getting-started-with-nuxt/', type: 'Javascript Framework Review', title: 'Get Started with Nuxt.js', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg1.jpg')},

                { prid:'2', slug: '', type: 'Javascript Tutorial', title: 'Lazy Load Images', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg2.jpg')},

                { prid:'3', slug: '', type: 'Coming Soon', title: 'Add Class on Scroll', colwidth: 'span-3', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg3.jpg')},

                { prid:'4', slug: '', type: 'Coming Soon', title: 'Sticky Header Class', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg4.jpg')},

                { prid:'5', slug: '', type: 'Coming Soon', title: 'Hero Landing Page', colwidth: 'span-3', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg5.jpg')},

                { prid:'6', slug: '', type: 'Coming Soon', title: 'Vanilla Js Slider', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg6.jpg')},

                { prid:'7', slug: '', type: 'Coming Soon', title: 'Intro to NPM', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg7.jpg')},

                { prid:'8', slug: '', type: 'Coming Soon', title: 'Intro to Git', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg8.jpg')},

                { prid:'9', slug: '', type: 'Coming Soon', title: 'Intro to Vue.js', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg9.jpg')},

                { prid:'10', slug: '', type: 'Coming Soon', title: 'Simple Burger Menu', colwidth: 'span-2', excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>', thumb: require('~/assets/images/bg10.jpg')},

            ]
        }
    }
}
</script>

<style>
  .bg1{
    background: url('~assets/images/bg1.jpg') no-repeat center;
    background-attachment: fixed;
    background-size: cover;  
    }
</style>