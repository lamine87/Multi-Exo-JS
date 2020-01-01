# Challenge : Jeu du plus petit ou du plus grand

## Objectif

On a découvert les base du JS et de la programmation : Conditions, boucles, fonctions. Mais faut s'entrainer maintenant, car c'est en faisant qu'on apprend !

Donc, on continue de s’entraîner avec ce challenge, en compliquant un peu les choses : on développe notre premier jeu !

## Instructions

1. Au chargement de la page, on va générer un nombre entier aléatoire entre 1 et 1000 (C'est le nombre que va devoir deviner le joueur)
2. On demande au joueur de rentrer un entier dans une boite de dialogue.
3. On indique au joueur via un popup si le nombre à trouver est plus petit ou plus grand.

## Bonus

4. Tant qu'on n'a pas trouvé, on revient au 2.
5. Lorsque le joueur trouve le bon entier, ça affiche un popup célébrant sa victoire.
6. Si le joueur n'a pas trouvé au bout de 10 tentatives, on affiche un message de défaite.

## Whaaat ?!

Si vous ne trouvez pas les fonctions qu'il faut, elles sont là :
- https://developer.mozilla.org/fr/docs/Web/API/Window/alert
- https://developer.mozilla.org/fr/docs/Web/API/Window/prompt
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/while
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor



------------


# Challenge : Jeu du plus petit ou du plus grand

La logique du jeu : on a vu. Objectif ce soir : refaire le jeu, mais avec le DOM cette fois !

## On continue en équipe :muscle:

Vous pouvez rajouter des fonctionnalités librement, le but du jeu c'est surtout
de collaborer ensemble sur du JS, et d'apprendre ce faisant :smiley:

Quelques exemples de fonctionnalités tout de même, pour vous donner des idées :

### Pouvoir faire plusieurs parties

Quand on lance le jeu, ça fait une partie. A la fin de la partie, ça nous demande
avec un [`confirm`](https://developer.mozilla.org/fr/docs/Web/API/Window/confirm)
si on veut refaire une partie.

### Score

Plutôt que de simplement mettre le score dans `#result`, on va mettre ça dans
un tableau `<table>`. On lance le jeu, on fait plusieurs parties, et chaque
partie doit être ensuite ajouter au tableau. Pour cela, on peut utiliser
[`innerHTML`](https://developer.mozilla.org/fr/docs/Web/API/Element/innertHTML).

Par exemple :

```html
<table>
	<thead>
		<tr>
			<th>Partie N°</th>
			<th>Résultat</th>
			<th>Tentatives</th>
			<th>Nombre à trouver</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Perdu</td>
			<td>--</td>
			<td>251</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Gagné</td>
			<td>9</td>
			<td>784</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Abandon</td>
			<td>--</td>
			<td>593</td>
		</tr>
	</tbody>
</table>
```

### CSS

Mettre de la couleur dans votre tableau de score.

### Résultat final

Si le joueur joue plusieurs partie, on lui affiche un total.
S'il a gagné plus de partie qu'il en a perdu, afficher une
`<img>` pour célébrer sa victoire !

Par exemple : https://media.giphy.com/media/l3q2xYZJPVVplQuWI/source.gif


## Whaaat ?!

- https://developer.mozilla.org/fr/docs/Web/API/Window/confirm
- https://developer.mozilla.org/fr/docs/Web/API/Element/innertHTML
- https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/fr/docs/Web/API/Element/className
- https://developer.mozilla.org/fr/docs/Web/API/Node/textContent