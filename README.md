# IRIS_STARTER

Starter **React + TypeScript + Vite + Tailwind CSS + shadcn/ui** pour prototyper des interfaces clients. Gestionnaire de paquets : **pnpm** uniquement.

## Prérequis

- [Node.js](https://nodejs.org/) (LTS recommandé)
- [pnpm](https://pnpm.io/)

## Démarrage

```bash
pnpm install
pnpm dev
```

Build de production :

```bash
pnpm run build
```

Connexion par défaut : mot de passe `demo2024` (voir section ci-dessous pour le modifier).

---

## 1. Dupliquer ce starter pour un nouveau projet

1. Copier le dossier `IRIS_STARTER` (ou cloner le dépôt puis renommer le dossier).
2. Renommer le dossier avec le nom du client ou du livrable.
3. Dans `package.json`, adapter le champ `"name"` (ex. `"acme-dashboard"`).
4. Réinstaller les dépendances si besoin : `pnpm install`.
5. Initialiser un dépôt git et premier commit si nécessaire.

---

## 2. Changer le nom du projet

Le libellé affiché **« NOM DU PROJET »** est centralisé dans :

- `src/config/project.ts` — constante `PROJECT_DISPLAY_NAME`

Elle est utilisée sur l’écran **Login** et dans l’en-tête de **PresentationLayout**. Une seule modification suffit pour les deux endroits.

---

## 3. Changer le mot de passe

1. Ouvrir `src/auth/constants.ts`.
2. Modifier la constante `AUTH_PASSWORD` (valeur par défaut : `demo2024`).

La session est stockée dans `sessionStorage` sous la clé `AUTH_STORAGE_KEY` du même fichier.

---

## 4. Remplacer les couleurs (design tokens)

Les couleurs de la phase wireframe (palette type **slate**) sont définies dans `src/styles/theme.css` :

- `--color-primary`, `--color-secondary`, `--color-background`, `--color-border`, `--color-text`
- variables dérivées consommées par shadcn (`--background`, `--primary`, etc.)

Modifier ces variables plutôt que des couleurs en dur dans les composants. Le fichier `src/index.css` importe Tailwind, les styles shadcn et `theme.css`.

La typographie réutilisable (classes Tailwind) se règle dans `src/styles/typography.ts`.

---

## 5. Ajouter un écran dans `/presentation`

1. Créer ou étendre un composant sous `src/presentation/` (souvent en important `WireframeScreen`, `PhoneMockup` ou `BrowserMockup`).
2. Dans `PresentationLayout.tsx` :
   - ajouter un `TabsTrigger` + un `TabsContent` associé ;
   - passer `title`, `device`, `annotations` et le contenu wireframe (`children`) à `WireframeScreen` selon le besoin.

Les annotations suivent le type `WireframeAnnotation` exporté par `WireframeScreen.tsx` (`number`, `label`, `description`).

---

## 6. Ajouter une page sous `/pages`

1. Créer un fichier dans `src/pages/` (ex. `Dashboard.tsx`) en exportant un composant React.
2. Dans `src/App.tsx`, ajouter une `Route` **à l’intérieur** du groupe dont l’élément est `<ProtectedRoute />` pour que la page soit protégée comme les autres :

```tsx
<Route element={<ProtectedRoute />}>
  <Route path="/" element={<Home />} />
  <Route path="/presentation" element={<PresentationLayout />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Route>
```

La route `/login` reste hors de ce groupe pour rester accessible sans authentification.

---

## Arborescence utile

| Dossier / fichier | Rôle |
|-------------------|------|
| `src/components/ui/` | Composants shadcn |
| `src/components/features/` | Composants métier (vide au départ) |
| `src/presentation/` | Maquettes device + page présentation |
| `src/pages/` | Écrans applicatifs |
| `src/data/` | Données mockées à ajouter |
| `src/styles/theme.css` | Jetons de couleur |
| `src/styles/typography.ts` | Classes de typographie |

---

Prototype **Thomas IRIS** — Designer.
