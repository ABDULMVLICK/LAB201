# Journal de Développement - Site The Beaches

## 📋 Vue d'ensemble du projet
Site web pour le groupe "The Beaches" développé avec React, Vite et Tailwind CSS.

## 🚀 Fonctionnalités développées

### 1. Structure et Navigation
- **Framework** : React avec Vite
- **Styling** : Tailwind CSS
- **Routing** : React Router pour la navigation entre pages
- **Pages créées** :
  - Home (page d'accueil)
  - The Beaches (page principale)
  - Actualités
  - Musique
  - Tournées
  - Boutiques
  - Page 404

### 2. Navbar et Menu Mobile
#### Navbar Desktop
- Logo "THE BEACHES" centré (remplacé par logo.png)
- Liens de navigation : Actualités, Tournées, Musique, Boutiques
- Fond avec image papier déchiré
- Animation d'effet de vague sur le papier déchiré

#### Menu Burger Mobile
- Logo à gauche, burger menu à droite
- Sidebar avec effet papier déchiré
- Animation d'ouverture/fermeture fluide
- Liens centrés dans le sidebar
- Bouton de fermeture en haut à droite
- Overlay avec blur effect

### 3. Animations et Effets Visuels
#### Animations d'entrée
- Fade-in et slide-up pour la navbar
- Animations sur les textes et images (sauf page Musique)
- Durée : 0.8s avec easing cubic-bezier

#### Animation d'effet de vague
- Appliquée sur le papier déchiré (navbar + page The Beaches)
- Mouvement vertical : ±2px
- Rotation : ±0.5deg
- Changement d'échelle : 0.998-1.002
- Variation de luminosité : 0.97-1.03
- Durée : 4s avec ease-in-out

### 4. Typographie et Polices
#### Polices personnalisées
- **Bebas Neue** (alternative ThunderhousePro) : page Musique
- **Oswald Bold** (alternative Nono45 Headline Bold) : navbar, footer, titres
- Classes CSS créées : `.font-bebas`, `.font-oswald`

### 5. Pages Développées

#### Page Actualités
- Layout responsive : 4 cartes
- Desktop : image à gauche, texte à droite
- Mobile : empilement vertical
- Fond texturé
- Animations d'entrée

#### Page The Beaches
- Section 1 : Fond avec images nhf.png et tour.png
- Section 2 : Papier déchiré en arrière-plan
- Texte "NO HARD FEELING - ENFIN DISPONIBLE"
- Paragraphe descriptif optimisé mobile
- Image de groupe avec ombre
- Animation d'effet de vague sur le papier déchiré

#### Page Musique
- Layout avec polices Bebas Neue
- Sections pour albums et EPs
- Design moderne et épuré

#### Page Tournées
- Informations sur les concerts
- Design cohérent avec le reste du site

#### Page Boutiques
- Page de base pour la boutique en ligne

### 6. Responsive Design
- **Desktop** : Layout horizontal, navigation complète
- **Mobile** : Menu burger, sidebar, layout vertical
- **Tablet** : Adaptation intermédiaire
- Classes Tailwind : `md:`, `sm:`, `lg:`

### 7. Optimisations UI/UX
- Espacement optimisé entre éléments
- Lisibilité améliorée sur mobile
- Transitions fluides
- Effets visuels subtils
- Accessibilité (aria-labels, focus states)

## 🔧 Technologies utilisées
- **Frontend** : React 18
- **Build Tool** : Vite
- **Styling** : Tailwind CSS
- **Routing** : React Router DOM
- **Versioning** : Git avec GitHub
- **Déploiement** : GitHub Pages (préparé)

## 📁 Structure des fichiers
```
Projet-beachies/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TheBeaches.jsx
│   │   ├── Actualites.jsx
│   │   ├── Musique.jsx
│   │   ├── Tournees.jsx
│   │   ├── Boutiques.jsx
│   │   └── Page404.jsx
│   ├── images/
│   │   ├── logo.png
│   │   ├── papierDechire.png
│   │   ├── nhf.png
│   │   ├── tour.png
│   │   └── [autres assets]
│   ├── assets/fonts/
│   │   ├── ThunderhousePro.ttf
│   │   └── Nono45HeadlineBold.ttf
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── package.json
```

## 🎨 Design System
- **Couleurs** : Palette sobre (noir, blanc, gris)
- **Typographie** : Polices personnalisées pour l'identité
- **Images** : Papier déchiré comme élément récurrent
- **Animations** : Subtiles et fluides
- **Layout** : Centré, aéré, moderne

## 📱 Responsive Breakpoints
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement
- Repository GitHub : https://github.com/ABDULMVLICK/LAB201.git
- Commits réguliers avec messages descriptifs
- Structure Git propre et organisée

## 📝 Notes de développement
- Approche mobile-first
- Animations optimisées pour les performances
- Code modulaire et réutilisable
- Documentation inline
- Tests manuels sur différents appareils


---
*Dernière mise à jour : [Date actuelle]*
*Développeur : Abdou Malick et naveen Joseph* 