import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if(!process.client)
        {
          console.log(context.req)
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "Hello First",
                thumbnail: "url('@/assets/tech2.jpg')",
                previewText: "This is my first post."
              },
              {
                id: "2",
                title: "Hello Second",
                thumbnail: "url('@/assets/tech2.jpg')",
                previewText: "This is my Second post."
              }
              ]);
              resolve();
          }, 1000);
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
