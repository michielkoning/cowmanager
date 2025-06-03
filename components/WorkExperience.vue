<template>
  <div class="experience">
    <div class="header">
      <div class="company">
        <h2>Bedrijf</h2>
      </div>
      <div class="col-2"><h2>Projecten</h2></div>
    </div>
    <ul>
      <li>
        <div>
          <div class="company">
            <h3>Valtech</h3>
            2018 - heden<br />
            Frontend Developer Architect<br />
          </div>
        </div>
        <div class="col-2">
          <h3>Robeco, Rotterdam</h3>
          <p>
            De website
            <nuxt-link
              external
              to="https://www.robeco.com/en-int/"
              target="_blank"
              >robeco.com</nuxt-link
            >
            moest worden gemigreerd van Nuxt 2 naar Nuxt 3. Om onderscheid te
            maken tussen data en presentatie heb ik bij Robeco de Backend For
            the Frontend (BFF) geïntroduceerd. De BFF is onderdeel van de Nuxtjs
            frontend en wordt onderhouden door de frontend developers. Dankzij
            de BFF hebben we ook diverse perfomanceoptimalisaties kunnen
            doorvoeren.
          </p>

          <h3>CZ, Tilburg</h3>
          <p>
            Het
            <nuxt-link
              external
              to="https://www.cz.nl/zorgverzekering/premie-berekenen"
              target="_blank"
            >
              aanmeldformulier
            </nuxt-link>
            voor verzekeringen hebben we losgetrokken van Sitecore en naar een
            headless omgeving gebaseerd op Reactjs. De diverse formulieren zijn
            in een monorepo (NX) opgezet, zodat we eenvoudig componenten en
            functionaliteiten konden delen,
          </p>

          <h3>PON, Leusden</h3>
          De nieuwe carconfigurator is gebouwd op Nuxt 3. De carconfigurator is
          whitelabel opgezet en ondersteunt de merken
          <nuxt-link
            external
            to="https://configurator.volkswagen.nl/"
            target="_blank"
          >
            Volkswagen </nuxt-link
          >,
          <nuxt-link
            external
            to="https://configurator.skoda.nl/"
            target="_blank"
          >
            Skoda </nuxt-link
          >,
          <nuxt-link
            external
            to="https://configurator.seat.nl/"
            target="_blank"
          >
            Seat
          </nuxt-link>
          en
          <nuxt-link
            external
            to="https://configurator.cupraofficial.nl/"
            target="_blank"
          >
            Cupra </nuxt-link
          >. Daarnaast hebben we diverse micfrofrontends gebouwd, waaronder de

          <nuxt-link
            to="https://www.volkswagen.nl/werkplaatsafspraak#/"
            external
            target="_blank"
            >Werkplaatsplanner</nuxt-link
          >
          en de
          <nuxt-link
            to="https://www.skoda.nl/proefritplanner#/?modelid=MODELTYPE_ELROQ#/"
            external
            target="_blank"
          >
            Proefrtiplanner</nuxt-link
          >. De microfrontends zijn in een monorepo opgezet, zodat we eenvoudig
          componenten en functionaliteiten konden delen
        </div>
      </li>
      <li>
        <div>
          <div class="company">
            <h3>Brainbrothers</h3>
            <time>2014 - 2018</time><br />
            Frontend Consultant
          </div>
        </div>
        <div>
          <h3>Blink uitgevers, Den Bosch</h3>
          <p>
            Voor uitgevers Blink heb ik gewerkt aan een lespakket voor een
            muziekles uitgewerkt voor het basisonderwijs, geoptimaliseerd voor
            Smart Boards.
          </p>
          <h3>Bol.com, Utrecht</h3>
          <p>
            Om de website volledige responsive te maken, met als doel de mobiele
            website uit te faseren, was ik als frontend developer onderdeel van
            het team dat verantwoordelijk was voor de productpagina van
            <nuxt-link external to="https://www.bol.com/nl/nl/" target="_blank">
              bol.com
            </nuxt-link>
            .
          </p>

          <h3>Volksbank, Den Bosch en Utrecht</h3>
          <p>
            Bij de Volksbank was ik onderdeel van het team om de nieuwe website
            voor

            <nuxt-link
              external
              to="https://www.blgwonen.nl/home.html"
              target="_blank"
            >
              BLG wonen
            </nuxt-link>
            te ontwikkelen.
          </p>
          <h3>Online.nl, Hilversum</h3>
          Als de frontenddeveloper van het
          <nuxt-link external to="https://www.online.nl/" target="_blank">
            online.nl
          </nuxt-link>
          team leverde ik de CSS- en de HTMLbestanden aan voor de componenten,
          die vervolgens door backend developers werden omgezet in Ektron
          component.
        </div>
      </li>

      <li>
        <div>
          <div class="company">
            <h3>4Net Interactive</h3>
            2007 - 2014<br />Senior Frontend Developer
          </div>
        </div>
        <div>
          <h3>Diverse projecten</h3>
          Bij 4net interactive heb ik als frontend developer meegedraaid bij
          diverse projecten, waaronder voor de Efteling, Ajax, Feyenoord, PSV,
          ANP, Pip Studio en KNVB
        </div>
      </li>

      <li>
        <div>
          <div class="company">
            <h3>Loesje</h3>
            2008 - heden<br />Websitebouwer
          </div>
        </div>
        <div>
          <h3>Website en iOs App</h3>
          Als vrijwilliger heb ik de

          <nuxt-link external to="https://www.loesje.nl/" target="_blank">
            website
          </nuxt-link>
          en de webshop voor Loesje.nl ontworpen en gebouwd. De website is
          gebouwd in Nuxt 3, draait headless op WordPress en wordt gehost op
          Netlify. De webshop draait nog op woocommerce, maar de headless
          variant daarvan is in ontwikkeling. Daarnaast heb ik de
          <nuxt-link
            external
            to="https://apps.apple.com/nl/app/loesje-posters/id910472463?l=nl&ls=1"
            target="_blank"
          >
            iOs app
          </nuxt-link>
          ontwikkeld in React Admin.
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  font-size: 0.9em;
  list-style: none outside;
  margin: 0 0 3em;
  padding-left: 0;
}

.header {
  margin-top: 3em;
  display: none;
}

.header,
li {
  position: relative;
}

@media screen and (min-width: 64rem) {
  .header,
  li {
    display: grid;
    gap: 2rem;
    grid-template-columns: 17rem auto;
  }
}

li {
  gap: 2rem;
  display: grid;
  margin: 0 0 2em;
  padding-bottom: 2em;
  padding-left: 0;
  border-bottom: 1px solid #ccc;
}

.company {
  position: sticky;
  top: 1em;
}
</style>
