<template>
    <div class="row hero-grad">
        <div class="row hero bg1">
            <div>
                <h1 class="title"><span>{{content.title}}</span></h1>
            </div>
            <div>
                <h2 class="subtitle"><span>{{content.sub_title}}</span></h2>
            </div>
            <div class="excerpt" v-html="content.excerpt"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: {
                pid:1,
                title: 'We are Paragon', 
                sub_title: 'Creative & Digital Arts',
                excerpt: '<p>Sed tincidunt sem eget erat varius, quis nterdum leo luc interdum leo luctus. Suspendisse ut magna luctus, blandit nibh at, suspendisse ut magna luctus.</p>' 
            }
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
