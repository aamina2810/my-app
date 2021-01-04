<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script >
import AdminPostForm from '~/components/Admin/AdminPostForm';
export default({
  components:{
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author:"Aamina",
        title:"My blog wooohooo!",
        content:"This is awesome and I loved it",
        thumbnail:"~/assets/tech1.jpg"
      }
    }
  }
})
</script>
