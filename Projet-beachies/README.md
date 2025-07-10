# The Beaches — Site Officiel

Projet réalisé en React (Vite) + Tailwind CSS

## Description

Site web officiel du groupe The Beaches, moderne, responsive, animé et optimisé pour le déploiement sur Vercel. Navigation fluide entre plusieurs pages : Accueil, Actualités, Musique, Tournées, Boutiques, 404. Design inspiré de la charte graphique du groupe, avec effets papier déchiré, animations, et polices personnalisées.

## Fonctionnalités principales
- Navigation multi-pages avec React Router
- Navbar responsive (logo centré desktop, burger mobile)
- Sidebar mobile animée
- Fond papier déchiré sur la navbar et la page d’accueil
- Animations d’apparition (fade/slide) sur tous les contenus (hors Musique)
- Effet de vague animé sur le papier déchiré de la page TheBeaches
- Polices personnalisées via Google Fonts (Bebas Neue, Oswald)
- Pages :
  - **Accueil (TheBeaches)**
  - **Actualités**
  - **Musique**
  - **Tournées** (bouton TICKETS redirige vers [Shotgun](https://shotgun.live/fr))
  - **Boutiques**
  - **404**
- Responsive design optimisé mobile/tablette/desktop
- Déploiement Vercel compatible React Router

## Installation

1. **Cloner le repo**
```bash
git clone https://github.com/ABDULMVLICK/LAB201.git
cd LAB201/Projet-beachies
```
2. **Installer les dépendances**
```bash
npm install
```
3. **Lancer le serveur de dev**
```bash
npm run dev
```

## Scripts disponibles
- `npm run dev` : Lancer le serveur de développement (Vite)
- `npm run build` : Générer la version de production
- `npm run preview` : Prévisualiser la build

## Déploiement Vercel
- Fichier `vercel.json` configuré pour gérer les routes React Router (rewrite sur `index.html`)
- Dossier de build : `dist/`
- Base Vite : `./` dans `vite.config.js`

## Polices
- **Bebas Neue** (Google Fonts) : utilisée pour la page Musique
- **Oswald** (Google Fonts) : utilisée pour la navbar, le footer et certains titres

## Structure du projet
```
Projet-beachies/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── Navbar.jsx
  │   │   └── Footer.jsx
  │   ├── images/
  │   ├── pages/
  │   │   ├── Actualites.jsx
  │   │   ├── Boutiques.jsx
  │   │   ├── Home.jsx
  │   │   ├── Musique.jsx
  │   │   ├── Page404.jsx
  │   │   ├── TheBeaches.jsx
  │   │   └── Tournees.jsx
  │   ├── App.jsx
  │   ├── App.css
  │   ├── index.css
  │   └── main.jsx
  ├── package.json
  ├── vite.config.js
  └── README.md
```

## Crédits
- Design, développement et intégration : Abdulmalick
- Polices via [Google Fonts](https://fonts.google.com/)
- Images et charte graphique : The Beaches

---

Pour toute question ou suggestion, ouvrir une issue sur le repo ou contacter le développeur.
