<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :posts="loadedPosts" />
    </section>
  </div>
</template>

<script >
import AdminPostForm from '~/components/Admin/AdminPostForm';
export default({
  layout: 'admin',
  components:{
    AdminPostForm
  },
  data() {
    return {
      loadedPosts: {
        author:'Aamina',
        title:'My blog wooohooo!',
        content:"This is awesome and I loved it",
        thumbnail:"@/assets/tech1.jpg"
      }
    }
  }
})
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
