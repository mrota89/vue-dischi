new Vue({
      el: '#app',

  data: {
    album: [],
    albumToRender: [],
    selected: '',
  },

  mounted() {
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(function(xhr) {
      let dataObject = xhr.data;
      self.album = dataObject.response;
      self.albumToRender = self.album;
    });
  },

  methods: {
    selectFunction: function() {

      /* al click di una option, viene salvato in una costante l'array contenente
      soltanto gli elementi che hanno il genere uguale a quello contenuto nell'option cliccata.
      Ad ogni nuovo click, viene generato un nuovo array ed assegnato alla costante("sovrascrittura")*/
      const filteredAlbum = this.album.filter((disk) => {
        const {genre} = disk;
        return disk.genre === this.selected;
      });

      // assegno ad albumToRender un array diverso a seconda dell'opzone cliccata
      if(this.selected === 'Tutti i generi') {
        this.albumToRender = this.album
      } else {
        this.albumToRender = filteredAlbum;
      }
    }
  }//end methods
})//end vue app

Vue.config.devtools = true;
