import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        themes: {
            light: {
              primary: '#8FBC8F',
              secondary: '#b0bec5',
              accent: '#8c9eff',
              error: '#b71c1c',
            },
            dark: {
                primary: '#2E8B57',
                secondary: '#3eaded',
                accent: '#8c9eff',
                error: '#b71c1c',
              },
          }, 
        },
});
