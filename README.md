# Javascript_Dyma

Cours Dyma Javascript

## installation environnement

1. VsCode
2. NodeJS  
   Installer la dernière versionn LTS

```
https://nodejs.org/fr
```

---

on peut aussi exécuter JS en faisant dans le terminal bash :

```bash
node script.js
```

---

### Debut du projet

1. Création du package.json

```bash
npm init -y
```

2. pour executer les commandes

- pour lancer le serveur de developpement (à rajouter dans le scripts du package.json)

```json
"start" : "vite",
"build" : "vite build",
```

```bash
npm start
```

3. installation Vite
   (-D) pour dire que vite sera utile juste le developpement de l'application
   et pas quand l'appli sera terminé

```bash
npm install -D vite
```

4. creation d'un fichier index.js  
   puis dans ficheir package.json sous "description"

```json
"type": "module",
```

mettre dans le fichier html à la fin de body :

```
<script type="module" src="/index.js"></script>
```

5. construction du projet production

```bash
npm run build
```

construction du dossier dist

6. installation script preview

```json
"preview": "vite preview",
```

pour tester le code final  
commande :

```bash
npm run preview
```

A la fin on peut supprimer le fichier dist

7. Ajouter des éléments de configuration

- Création un fichier vite.config.js
  dedans on met un fonction pour configurer :

```
import {defineConfig} from "vite";
export default defineConfig({
   plugins: [],
   build:{
      outDir: "salut",
   }
});
```

---

### Pour creer un projet depuis vite :

```bash
npm create vite@latest
Vanilla
JavaScript
code vite-project/
```

---
