<template>
  <div>
    <section class="posts-list">
      <PostsPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="url('~assets/image/tech1.jpg')";
      title="Hello First!"
      previewText="This is my first blog"
      />
      <PostsPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.fieldfisher.com%2Fen%2Fservices%2Ftechnology-outsourcing-and-privacy&psig=AOvVaw0oq0UP5IdNT42pK-0RNrEm&ust=1609687162363000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjHqY_G_e0CFQAAAAAdAAAAABAD.jpg"
      title="Hello Second!"
      previewText="This is my second blog"/>
      <PostsPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="~assets/tech2.jpg"
      title="Hello Third!"
      previewText="This is my third blog"/>
    </section>
  </div>
</template>

<script>
import PostsPreview from "@/components/Postss/PostsPreview"
export default {
  components: {
    PostsPreview
  },
  props:{
    isAdmin:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
