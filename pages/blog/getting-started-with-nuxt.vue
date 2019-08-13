<template>
  <section class="row container">
    <div class="row" style="height: 66px;"></div>
    <div class="row single">
        <h1 class="flip_title" style="color: rgba(0,0,0,0.7);">How to get started<br/>with Nuxt.js</h1>
        <div class="ctr">
<h2>How to install Nuxt.js</h2>

<p>In this first tutorial we will be getting started on the front-end development for a brand new Progressive Web App or (PWA) as they are more commonly known.</p>
<p>We will be developing our Web App using Nuxt.js, Nuxt.js is a framework for Vue.js, but why a framework for a framework I hear you ask? Well that is because Nuxt.js add some really cool functions to the already awesome Vue.js that makes it so much better for developing Progressive Web Apps, in particular pre-rendering.</p>
<p>Pre-rendering along with a few other funky tricks makes your app fully accessible to the search engines, so now is it not only super fast but it is also fully indexable thus giving you web app a head start on the competion.</p>
<p>OK so first things first, let's open up the dreaded command, you can do this in Windows by searching "CMD" the use the command prompt below to navigate to your desired project folder.</p>

<blockquote>
<pre>
<code>
cd c:\xampp\htdocs
</code>
</pre>
</blockquote>

<p>Now let's create the APP with the following command.</p>

<blockquote>
<pre>
<code>
npx create-nuxt-app project-name
</code>
</pre>
</blockquote>

<p>Now command prompt will ask you some questions, see what to select below.</p>

<ul>
<li>Project name = Your project name or default</li>
<li>Project description = Your project description or default</li>
<li>Choose features to install ignore eslint for now = PWA, Axios, Prettifier</li>
<li>Custom server frameworks = None</li>
<li>UI framework = None</li>
<li>Testing framework = None</li>
<li>Nuxt Mode = Universal</li>
</ul>

<p>Now NPM (Node Package Manager) will install Nuxt.js into the project folder.</p>

<p>Once installed CD into the new project folder.</p>

<blockquote>
<pre>
<code>
cd project-name
</code>
</pre>
</blockquote>

<div class="row" style="height: 40px;"></div>
<h3>How to use Git Version control with Nuxt.js</h3>

<p>Version control is a way of tracking changes made to your project files and folders over time, this is particularly useful when working with a large team of developers who are all working on the same project at the same time</p>
<p>To add version control in our "Git" to our project we will first need to create a fresh empty remote repository, in my case I will be using Bitbucket for this example but there are plenty of other to try out such as Github, SubVersion, Tortoise etc.</p>

<p>Once repository is created copy the git clone link, in my case.
https://danielwakefield83@bitbucket.org/danielwakefield83/nuxt-tute.git</p>

<blockquote>
<pre>
<code>
git init
</code>
</pre>
</blockquote>

<blockquote>
<pre>
<code>
git pull remote branch
</code>
</pre>
</blockquote>

<p>Literal code</p>

<blockquote>
<pre>
<code>
git pull https://danielwakefield83@bitbucket.org/danielwakefield83/nuxt-tute.git master
</code>
</pre>
</blockquote>

<p>To see the status of our git we can run the following command.</p>

<blockquote>
<pre>
<code>
git status
</code>
</pre>
</blockquote>

<p>Now let's connect our local repository to our remote repository</p>

<blockquote>
<pre>
<code>
git remote add origin https://danielwakefield83@bitbucket.org/danielwakefield83/nuxt-tute.git
</code>
</pre>
</blockquote>

<blockquote>
<pre>
<code>
git add -A
</code>
</pre>
</blockquote>

<p>Now let’s commit our changes</p>

<blockquote>
<pre>
<code>
git commit -m “my first commit”
</code>
</pre>
</blockquote>

<p>Then finally we can push our commit and changes, this will add all our files to the remote repo.</p>

<blockquote>
<pre>
<code>
git push origin master
</code>
</pre>
</blockquote>

<p>Now if we visit the <a hef="https://danielwakefield83@bitbucket.org/danielwakefield83/nuxt-tute.git" target="_blank">remote repository</a> we will see our files are all there minus the node_modules folder.</p>

<p>If you are cloning this repository you will need to manually install the node modules into the folder first by running the following command in the root folder of your local repository.</p>

<blockquote>
<pre>
<code>
npm install
</code>
</pre>
</blockquote>

<div class="row" style="height: 40px;"></div>
<h4>How to start the NPM development server</h4>

<blockquote>
<pre>
<code>
npm run dev
</code>
</pre>
</blockquote>

<p>Once the development server has compiled you can go to <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>" to view your freshly installed Nuxt app.</p>
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
        title: 'Getting started with Nuxt.js | A tutorial by Cheshire website designer DW',
        meta: [
            {name: 'description', content: 'A simple Nuxt.js tutorial that will help you to get setup fast.'},
            {name: 'keywords', content: 'Nuxt.js, Vue.js, Javascript, Front-end, web, development'}
            ]
        }
    }
}
</script>

<style>

</style>