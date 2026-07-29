---
title: "Ein Mindestbestand für alle Artikel ist der teuerste Kompromiss"
description: "Warum eine einzige Nachbestellregel für das ganze Lager entweder Kapital bindet oder Sie in den Engpass laufen lässt, und was sich ändert, wenn das Verfahren pro Artikel gewählt wird."
date: 2026-07-28
locale: "de"
slug: "bestellpunkt-pro-artikel"
tag: "Bestandsführung"
readingTime: 6
---

In fast jedem Lager, das wir uns ansehen, steht hinter jedem Artikel eine Zahl: der Mindestbestand. Wird er unterschritten, bestellt jemand nach. Die Zahl stammt oft aus dem Jahr, in dem das ERP eingeführt wurde, und seitdem hat sie niemand angefasst.

Das ist kein Vorwurf. Es ist die einzige Regel, die sich ohne Aufwand über tausende Artikel ausrollen lässt. Sie hat nur einen Fehler: sie behandelt Artikel gleich, die sich völlig unterschiedlich verhalten.

## Drei Artikel, drei Verhalten

Nehmen Sie eine Normteilschraube, die in jedem zweiten Auftrag steckt. Der Verbrauch ist gleichmäßig, die Schwankung klein, die Lieferzeit bekannt. Ein fester Bestellpunkt funktioniert hier gut.

Nehmen Sie daneben ein Ersatzteil für eine Maschine, das dreimal im Jahr gebraucht wird, dann aber sofort. Der Verbrauch ist nicht klein, er ist **sporadisch**: lange Nullperioden, dann ein Ausschlag. Ein Durchschnitt über zwölf Monate beschreibt diesen Artikel nicht, er verwischt ihn. Wer den Mindestbestand aus dem Mittelwert ableitet, hält entweder dauerhaft zu viel, oder er steht beim vierten Bedarf ohne Teil da.

Und nehmen Sie etwas mit Verfallsdatum oder Saisonbezug. Hier kostet zu viel Bestand nicht nur Kapital, sondern Abschreibung. Die Frage ist nicht mehr „wann nachbestellen“, sondern „wie viel Fehlmenge ist billiger als wie viel Rest“.

Drei Artikel, drei völlig verschiedene Fragen. Eine Regel kann sie nicht alle beantworten.

## Die Verfahren haben Namen

Für jedes dieser Muster gibt es seit Jahrzehnten ein passendes Verfahren. Das ist keine neue Erkenntnis aus dem KI-Umfeld, das ist Lehrbuchwissen aus der Bestandsführung. Neu ist nur, dass es bisher zu aufwendig war, es artikelgenau anzuwenden.

Für den gleichmäßigen Verbrauch ist es der klassische **Bestellpunkt**: unterschreitet der Bestand eine Schwelle, wird eine feste Menge bestellt. Für den sporadischen Bedarf ist es **Croston**, ein Verfahren, das Bedarfshöhe und Abstand zwischen den Bedarfen getrennt schätzt, statt beides in einen Mittelwert zu rühren. Für Verderbliches ist es das **Newsvendor-Modell**, das Fehlmengenkosten gegen Überbestandskosten abwägt und daraus eine Menge ableitet. Dazu kommen die **periodische Prüfung** für Artikel, die ohnehin nur zu festen Terminen bestellt werden, und **mehrstufige** Verfahren, wenn derselbe Artikel an mehreren Standorten liegt.

Die Rechnung dahinter ist offen und sollte es auch bleiben:

> Reichweite = Bestand ÷ durchschnittlicher Tagesverbrauch
>
> Bestellpunkt = Tagesverbrauch × Lieferzeit + Sicherheitsbestand

Wer diese beiden Zeilen liest, kann jede Bestellvorschlag nachrechnen. Genau das ist der Punkt. Eine Bestandsentscheidung, die sich nicht nachrechnen lässt, wird im Zweifel überstimmt, und dann war die Software umsonst.

## Was sich ändert, wenn die Wahl pro Artikel fällt

Synapsio ordnet jedem Artikel eines dieser Verfahren zu, statt eine Regel über das ganze Lager zu legen. Die Zuordnung stützt sich auf den tatsächlichen Verbrauch: wie oft ein Artikel gezogen wird, wie stark die Menge schwankt, wie lang und wie zuverlässig die Lieferzeit ist.

Wichtiger als die Zuordnung ist die Begründung. Zu jedem Artikel steht, welches Verfahren gewählt wurde und warum. Ohne diesen Satz ist eine Verfahrenswahl eine Behauptung, und niemand im Einkauf hat Zeit, Behauptungen zu prüfen.

Und die Wahl bleibt nicht stehen. Wenn ein Artikel über Monate anders läuft als angenommen, wird das Verfahren neu bewertet. Ein Teil, das früher gleichmäßig lief und heute nur noch alle paar Monate gebraucht wird, gehört nicht mehr auf einen festen Bestellpunkt.

## Wo die Grenze liegt

Zwei Dinge sagen wir dazu offen.

Erstens braucht das Verbrauchshistorie. In den ersten Wochen nach dem Start kennt das System Ihre Artikel noch nicht, und dann ist die Zuordnung konservativ. Das ist die richtige Voreinstellung, aber es heißt auch: der Nutzen wächst über die ersten Monate, er steht nicht am ersten Tag da.

Zweitens ersetzt kein Verfahren die Kenntnis Ihres Betriebs. Wenn Sie wissen, dass ein Kunde im Herbst eine große Bestellung platzieren wird, weiß das keine Verbrauchshistorie. Deshalb bleibt die Grenze, ab der Sie gefragt werden, bei Ihnen, und deshalb steht jede Entscheidung mit ihrem Grund im Protokoll.

Der Unterschied zum Mindestbestand aus dem Einführungsjahr ist am Ende einfach: die Zahl wird nicht mehr einmal gesetzt und vergessen, sondern gehört zu einem Verfahren, das zu diesem Artikel passt und das sich korrigieren lässt.
