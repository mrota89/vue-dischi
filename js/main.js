new Vue({
      el: '#app',

  data: {
    album: [],
    albumToRender: [],
    selected: '',
    options: []
  },

  mounted() {
    const self = this;
    const arrayGenre = [];

    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(function(xhr) {
      let dataObject = xhr.data;
      //assegno ad album l'array di oggetti presente nella proprietà response
      self.album = dataObject.response;
      self.albumToRender = self.album;

      //estrapolo per ogni album il genere musicale e pusho in arrayGenre
      self.album.forEach((element) => {
        const {genre} = element;
        if(!arrayGenre.includes(element.genre))
        arrayGenre.push(element.genre);
      });

      //ciclo arrayGenre e creo un oggetto che pusho in options
      for (let i = 0; i < arrayGenre.length; i++ ) {
        self.options.push({
          text: arrayGenre[i],
          value: arrayGenre[i]
        });
      };
    });//end call ajax
  },//end mounted

  methods: {
    selectFunction: function() {

      /* al click di una option, in una costante viene l'array contenente
      soltanto gli elementi che hanno il genere uguale a quello dell'option cliccata.
      Ad ogni nuovo click, viene generato un nuovo array ed assegnato alla costante("sovrascrittura")*/
      const filteredAlbum = this.album.filter((disk) => {
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
