<template>
  <v-main>
    <div class="primary header">
      <v-row no-gutters>
        <v-col class="text-right" style="margin-right: 10px">
          <v-icon @click="darkMode()">
            {{ this.icon ? "mdi-weather-sunny" : "mdi-weather-night" }}
          </v-icon>
        </v-col>
        <v-img
          @click="translate()"
          style="margin-top: 3px; margin-right: 10px; cursor: pointer"
          max-height="20px"
          max-width="30px"
          src="https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=640&,format=auto/uploads/2018/10/shutterstock_1070343341-628x353.jpg"
        />
      </v-row>
      <v-row no-gutters>
        <v-col md="8" offset-md="2">
          <v-card class="pa-2 card-info" tile>
            <v-avatar size="195" style="float: left">
              <div class="justify-space-between align-center">
                <v-img
                  width="200"
                  :src="require('../assets/profile.jpg')"
                ></v-img>
              </div>
            </v-avatar>
            <div>
              <v-row class="mb-5" justify="center">
                <v-card-text class="person-name">
                  {{ this.person.name }}
                  <v-card-subtitle>
                    {{ this.person.ocupation }}
                  </v-card-subtitle>
                  <v-divider />
                </v-card-text>
              </v-row>
              <div>
                <v-row class="mb-6" justify="center">
                  <v-col lg="2" v-for="l in links" :key="l.link">
                    <v-tooltip bottom color="primary">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          icon
                          :href="l.link"
                          target="_blank"
                        >
                          <v-icon size="50">{{ l.icon }}</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ l.tooltip }}</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row no-gutters>
        <v-col class="description" md="6" offset-md="3">
          {{ this.about.title }}
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<script>
import ptbr from "../globalization/pt-br";
import enus from "../globalization/en-us";

export default {
  name: "curriculum",

  data: () => ({
    person: null,
    icon: true,
    language: "",
    about: "",
    links: null,
  }),

  created() {
    this.language = navigator.language;
    this.getGlobalization(), console.log(this.person);
  },

  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.icon = !this.icon;
    },
    getGlobalization() {
      switch (this.language) {
        case "pt-BR":
          this.person = ptbr.person;
          this.about = ptbr.about;
          this.links = ptbr.links;
          break;
        default:
          this.person = enus.person;
          this.about = enus.about;
          this.links = enus.links;
          break;
      }
    },
    translate() {
      this.language = this.language == "en-US" ? "pt-BR" : "en-US";
      this.getGlobalization();
    },
  },
};
</script>

<style scoped>
.header {
  z-index: 1;
  height: 200px;
}
.name {
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 15px;
  font-size: 30px;
}
.dark-ico {
  float: right;
  margin: 15px 40px 0 0;
}
.card-info {
  height: 210px;
  margin-top: 30px;
}
.description {
  margin-top: 140px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}
.person-name {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}
.v-main {
  font-family: system-ui;
}
</style>