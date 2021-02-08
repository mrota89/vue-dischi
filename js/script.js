new Vue({
      el: '#app',

  data: {
    album: [],
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/random/name').then(function(xhr) {
        let dataObject = xhr.data;
        self.listaInvitati.push(dataObject.response);
      });
    }
  },



  methods: {
    numero: function() {
      const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/random/int').then(function(xhr) {
        let dataObject = xhr.data;
        if(dataObject.response % 2 === 0) {
          self.numeriPari.push(dataObject.response)
        } else {
          self.numeriDispari.push(dataObject.response)
        }
      })
    }
  }
})

Vue.config.devtools = true;
