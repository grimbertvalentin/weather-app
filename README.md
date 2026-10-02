# Weather App

Application météo destinée aux écrans d'information des transports en commun.
Elle affiche la météo actuelle de la ville configurée, avec les données de l'API [Open-Meteo](https://open-meteo.com/) (aucune clé API nécessaire).

## Fonctionnalités

1. Ville définie dans un fichier de configuration (plus de moteur de recherche)
2. Date et heure locales
3. Température, température ressentie et humidité
4. Vitesse et direction du vent
5. Visibilité
6. Heures de lever et de coucher du soleil
7. Système métrique ou impérial
8. Rafraîchissement automatique des données toutes les heures
9. Gestion des erreurs et écran de chargement

## Installation

1. `git clone https://github.com/grimbertvalentin/weather-app.git`
2. `cd weather-app`
3. `npm install`
4. `npm run dev`
5. Ouvrir http://localhost:3000

Sur une version récente de Node.js, si l'erreur `ERR_OSSL_EVP_UNSUPPORTED` apparaît, lancer avant `npm run dev` :

- PowerShell : `$env:NODE_OPTIONS="--openssl-legacy-provider"`
- Mac/Linux : `export NODE_OPTIONS=--openssl-legacy-provider`

## Configuration de la ville

La ville se règle dans le fichier `config.json` à la racine du projet :

```json
{
  "city": "Rennes",
  "country": "FR",
  "latitude": 48.1173,
  "longitude": -1.6778
}
```

Pour changer de ville, modifier ces quatre valeurs, enregistrer, puis recharger la page (redémarrer le serveur si besoin).

## Fonctionnement

- `config.json` : ville et coordonnées GPS.
- `pages/api/data.js` : appelle Open-Meteo avec les coordonnées, puis convertit la réponse dans le format attendu par les composants.
- `services/weatherCodes.js` : convertit les codes météo WMO d'Open-Meteo en description et icône.
- `pages/index.js` : charge les données et les rafraîchit toutes les heures.

## Licence

Projet sous licence MIT. Projet d'origine : [madzadev/weather-app](https://github.com/madzadev/weather-app).