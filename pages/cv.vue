<template>
  <div>
    <h1>CV</h1>
    <the-profile />

    <h2>Specaliteiten</h2>
    <p>HTML, Css, UI, Accessibility, Seo, Performance</p>

    <h2>Gewerkt met</h2>
    <p>
      Nuxtjs, Vuejs, Reactjs, Azure, Netlify, Supabase, Vitest, Jest, NodeJs,
      Sass, Less, Contentstack, Contentful, Sitecore, Scrum, NX, React Admin
    </p>

    <div class="header">
      <div class="col-1">
        <h2>Bedrijf</h2>
      </div>
      <div class="col-2"><h2>Projecten</h2></div>
    </div>
    <ul>
      <li>
        <div>
          <div class="col-1">
            <h3>Valtech</h3>
            2014 - heden<br />
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
            frontend en wordt ook onderhouden door de frontend developers. Met
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
            >Werkplaatsplanner</nuxt-link
          >
          en de Proefrtiplanner. De microfrontends zinj in een monorepo opgezet,
          zodat we eenvoudig componenten en functionaliteiten konden delen
        </div>
      </li>
      <li>
        <div>
          <div class="col-1">
            <h3>Brainbrothers</h3>
            <time>2010 - 2014</time><br />
            Senior Frontend Consultant
          </div>
        </div>
        <div>
          <h3>Blink uitgevers, Den Bosch</h3>
          <p>
            Een lespakket voor een muziekles uitgewerkt voor het basisonderwijs,
            geoptimaliseerd voor een Smart Board.
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
            Bij de Volksbank heb ik Ik was betrokken bij het opzetten van de
            nieuwe responsive website van

            <nuxt-link
              external
              to="https://www.blgwonen.nl/home.html"
              target="_blank"
            >
              BLG wonen
            </nuxt-link>
            .
          </p>
          <h3>Online.nl, Hilversum</h3>
          Als de frontenddeveloper van het
          <nuxt-link external to="https://www.online.nl/" target="_blank">
            online.nl
          </nuxt-link>
          team leverde ik de Css en de HTML aan voor de componenten, die
          vervolgens door backend developers werden omgezet in Ektron component.
        </div>
      </li>

      <li>
        <div>
          <div class="col-1">
            <h3>4Net Interactive</h3>
            2001 - 2010<br />Senior Frontend Developer
          </div>
        </div>
        <div>
          <h3>Diverse projecten</h3>
          Bij 4net interactive heb ik als frontend developer meegedraaid bij
          diverse projecten, waaronder voor de Efteling, Ajax, Feyenoord, PSV,
          ANP, Pip Studio KNVB
        </div>
      </li>

      <li>
        <div>
          <div class="col-1">
            <h3>Loesje</h3>
            2001 - heden<br />Senior Frontend Developer
          </div>
        </div>
        <div>
          <h3>Website en iOs App</h3>
          Als vrijwilliger heb ik de

          <nuxt-link external to="https://www.loesje.nl/" target="_blank">
            website
          </nuxt-link>
          en de webshop voor Loesje,nl ontworpen en gebouwd. De website is
          gebouwd in nuxt 3 en wordt gehost op netlify. De webshop draait nog op
          woocommerce, maar de headless variant is nog in ontwikkeling Daarnaast
          heb ik de
          <nuxt-link
            external
            to="https://apps.apple.com/nl/app/loesje-posters/id910472463?l=nl&ls=1"
            target="_blank"
          >
            app
          </nuxt-link>
          ontwikkeld in React Admin.
        </div>
      </li>
    </ul>

    <h2>Opleidingen</h2>
    <ul>
      <li>Cursus Grafisch Vormgeving Grafisch Lyceum Utrecht</li>
      <li>Communicatie Systemen Hoge school van Arnhem en Nijmegen</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none outside;
  margin: 0 0 1em;
  padding-left: 0;
}

.header,
li {
  display: grid;
  grid-template-columns: 15em auto;
  position: relative;
  gap: 2em;
}

li {
  margin: 0 0 4em;
  padding-left: 0;
}

.col-1 {
  position: sticky;
  top: 1em;
}

.highlight {
  font-size: 1.1875rem;
  line-height: 2.25rem;
}
</style>
