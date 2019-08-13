<template>
  <section class="row container">
    <div class="row" style="height: 66px;"></div>
    <div class="row single">
        <h1 class="flip_title" style="color: rgba(0,0,0,0.7);">Lazy loading images with Javascript and CSS</h1>
        <div class="ctr">

            <h2>Speed up your website with this simple trick.</h2>

            <p>A great way to speed up the load time of your website is to lazy load your images using Javascript and CSS.</p>
            <p>By Lazy Loading your images you are deferring the loading of the images that are above the fold until after the initial page load and the images that are below the fold until when they come into view.</p>
            <p>In simpler terms, you would normally fade in images that should be visible when the page first loads, and then fade in all the others as the user scrolls them into view.<br/>
            <p>But we are not going to do that.</p>
            <p>We are going to make things much simpler but just as effective by simply loading all images after the initial page load and then fading them in, although you can even cut out the fade in part if you want to improve page speed by reducing your first meaningful paint time.</p>

            <p>Now we need to make a change to the way we are inserting images into our page, normally we would use the src attribute to point the image tag to the correct location of the image, like so.</p>

            <blockquote>
            <pre>
            <code>
     src="/images/my-image.jpg"
            </code>
            </pre>
            </blockquote>

            <div class="row" style="height: 40px;"></div>

            <p>We are again not going to do that, instead we are going to use a custom attribute data-src, this attribute will be ignored on page load as it is an unknown attribute.</p>

            <blockquote>
            <pre>
            <code>
    data-src="/images/my-image.jpg"
            </code>
            </pre>
            </blockquote>

            <div class="row" style="height: 40px;"></div>

            <p>We will then create a Javascript function that will first of all find each image containing the data-src attribute and then takes the value of the data-src then creates the src attribute and populates it with that value via Javascript after the page has fully loaded.</p>

            <blockquote>
            <pre>
            <code>
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
    img.removeAttribute('data-src');
    };
    });
            </code>
            </pre>
            </blockquote>

            <div class="row" style="height: 40px;"></div>

            <p>The last thing our function above will do is remove the data-src attribute, we can use this event to trigger the image to fade in by adding some global CSS styles</p>
        

            <blockquote>
            <pre>
            <code>
    img {opacity: 1;transition: opacity 0.3s;}
    img[data-src] {opacity: 0;transition: opacity 0.3s;}
            </code>
            </pre>
            </blockquote>

            <div class="row" style="height: 40px;"></div>

            <p>That's it, now your page will load fast like you have no images at all, and then fade on once the page has loaded.</p>

            <div class="row" style="height: 40px;"></div>



        </div>
    </div>

  </section>
</template>

<script>
export default {
    
    // mounted functions will run only on this component
    mounted: function() {

        //scroll top add class
        var single = document.querySelector(".single");
        single.classList.add('sticky');
        
        // add body class
        var hdrClass = document.querySelector(".header");
        hdrClass.classList.add('is-active');

    },
    head(){
        return{
        title: 'Lazy loading w/ Javascript | A tutorial by Cheshire website designer DW',
        meta: [
            {name: 'description', content: 'A super easy way to make your website load faster using the Javascript lazy loading trick.'},
            {name: 'keywords', content: 'Javascript, CSS, Front-end, web, development'}
            ]
        }
    }
}
</script>

<style>

</style>